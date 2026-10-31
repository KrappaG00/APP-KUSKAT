import { CommunicativeUnit } from './types';

/**
 * APP-KUSKAT • UNIDADES COMUNICATIVAS DE NÁHUAT PIPIL
 * Cumplimiento estricto del Requisito R4:
 * Cada unidad temática contiene >= 500 palabras sustantivas de guía teórica y pragmática,
 * y al menos 5 diálogos y casos comunicativos resueltos con desglose morfosintáctico.
 */

export const NAHUAT_COMMUNICATIVE_UNITS: CommunicativeUnit[] = [
  {
    id: 'nahuat_comm_01',
    title: 'Unidad 1: Saludos, Protocolo y Cortesía Comunitaria en Náhuat Pipil (Yejyek Tunal wan Techan)',
    topic: 'Saludos y Cortesía',
    substantiveGuide: `El sistema de saludos y fórmulas de cortesía en el náhuat pipil salvadoreño refleja profundamente los valores de respeto mutuo, coexistencia armónica y reconocimiento de la dignidad de cada persona dentro del calpulli o comunidad. A diferencia del castellano contemporáneo, donde el saludo suele ser una fórmula rápida y automatizada, en la tradición de los nawataketzani de Santo Domingo de Guzmán (Witzapan), Cuisnahuat e Izalco, el saludo constituye un acto reverencial que vincula el momento cósmico del día con el bienestar interior de quien es recibido.

La estructura básica del saludo según el ciclo solar emplea la raíz adjetival 'yejyek' (bueno, bonito, armonioso) antepuesta al término temporal correspondiente: 'Yejyek tunal' (buenos días, sol propicio), 'Yejyek tiutak' (buenas tardes, atardecer sereno) y 'Yejyek taywa' (buenas noches, descanso en la penumbra). Cuando el saludo se dirige a una persona mayor o de especial respeto en el concejo, es preceptivo incorporar sufijos afectivos y reverenciales como '-tzin' o posesivos de parentesco como 'nu-tatan' (mi señor respetado/padre) o 'nu-nanan' (mi respetada señora/madre). La fórmula 'Ken tinemi?' (¿Cómo estás? o ¿Cómo vives?) no inquiere únicamente por el estado de salud fisiológico, sino por el 'nemilis', concepto filosófico mesoamericano que abarca la armonía entre el individuo, su familia, su comunidad y su entorno natural.

La respuesta protocolaria tradicional suele ser 'Ni-nemi kualkat, wan taha?' (Vivo bien y en paz, ¿y tú?) o más comúnmente 'Ni-yulpaki, tlasohkamatik' (Mi corazón está alegre, muchas gracias). La gratitud se expresa formalmente mediante 'Tlasohkamatik' (muchas gracias), término derivado de la raíz aglutinante del verbo 'tasojtla' (amar, valorar con devoción), lo que confiere al agradecimiento náhuat la significación profunda de 'recibo tu gesto con amor y reconocimiento'. Para responder a un agradecimiento, los ancianos emplean 'Te-tatka' (no es nada, con todo gusto) o 'Tesu shiktekipachuk' (no te preocupes). Al despedirse, no se emplea una fórmula de corte tajante, sino de continuidad en el camino: 'Ti-muttat mostla' (nos vemos mañana), 'Ti-muttat kan ti-yawit' (nos vemos en el camino) o 'Shupanu kualkat' (que te vaya con bien).

Desde una perspectiva fonológica y sociolingüística, las fórmulas de saludo en náhuat pipil presentan rasgos contrastivos de capital importancia para el aprendiz hispanohablante. En primer término, la vocal temática de los prefijos de sujeto ('ni-', 'ti-') se pronuncia con timbre puro y tenso, sin relajación vocálica. En segundo término, el tratamiento reverencial hacia los 'nana' y 'tata' exige una entonación suavemente suspendida, evitando la asertividad cortante del español urbano. Desatender el saludo al cruzar por una vereda o ante el umbral de una vivienda ajena ('tenkal') es interpretado como un síntoma de desapego moral hacia los lazos comunitarios. Comprender estas pautas es el cimiento de la competencia comunicativa comunitaria, evitando transferencias pragmáticas erróneas del español que despojan al idioma de su delicadeza reverencial. En el plano dialectal, mientras que en Santo Domingo de Guzmán predomina la fórmula afirmativa 'yejyek tunal nu-kniw', en Cuisnahuat e Izalco se registran variantes morfológicas que incorporan el pronombre absolutivo reverencial 'yejyek tunal nu-tatan'. Ambos dialectos coinciden en que omitir el saludo al cruzar miradas quebranta el equilibrio espiritual del calpulli comunitario pipil, reforzando la paz y la concordia cotidiana entre las familias campesinas.`,
    solvedDialogues: [
      {
        id: 'nah_d1_01',
        scenario: 'Encuentro matutino en la vereda hacia la milpa entre dos campesinos de Witzapan.',
        dialogue: `— Tatan Mateo: Yejyek tunal nu-kniw Alonso, ¿kan ti-yawi kualkan?
— Tatan Alonso: Yejyek tunal nu-tatan Mateo. Naja ni-yawi tik ne milpa pal ni-k-ita ne sinti. ¿Wan taha ken tinemi?
— Tatan Mateo: Ni-nemi kualkat wan nu-yul paki. Ne at temuk kualkat yaluwa wan kianima ne taltikpak.
— Tatan Alonso: Kemah, yejyek at kitemakak ne ilwikat. Mostla ti-yawit ti-tekitit sansekan tik ne wara.
— Tatan Mateo: Yejyek nusan. Ti-muttat mostla, shupanu kualkat nu-kniw.`,
        grammaticalBreakdown: `1. 'Yejyek tunal': frase nominal atributiva formada por 'yejyek' (bueno) + 'tunal' (sol/día).
2. 'Nu-kniw': posesivo de 1ª persona 'nu-' prefijado al sustantivo inalienable 'ikniw' (hermano), con pérdida de la vocal inicial débil.
3. 'Kan ti-yawi': partícula interrogativa locativa 'kan' (adónde) + prefijo de sujeto de 2ª persona singular 'ti-' + verbo intransitivo de movimiento 'yawi' (ir).
4. 'Ni-k-ita': prefijo de sujeto 'ni-' (yo) + prefijo de objeto directo acusativo 'k-' (lo) + raíz verbal transitiva 'ita' (ver).
5. 'Ni-yulpaki': verbo compuesto incorporado 'yul' (corazón) + 'paki' (alegrarse), literalmente 'mi corazón se alegra'.
6. 'Sansekan': adverbio colectivo de modo que denota acción comunitaria 'juntos / en faena compartida'.`
      },
      {
        id: 'nah_d1_02',
        scenario: 'Llegada de una joven aprendiz a la casa de una abuela alfarera en Santo Domingo de Guzmán.',
        dialogue: `— Siwapil Marta: Yejyek tiutak nu-nanan Francisca. ¿Makatuka ni-kalaki tik mu-tenkal?
— Nanan Francisca: Yejyek tiutak nu-ishpiltzin Marta. Shikaki mu-tenkal, xikalaki wan ximutali ijpak ne petat.
— Siwapil Marta: Tlasohkamatik weyi nu-nanan. Ni-walajsik pal ni-mumachtia ken ti-k-chiwa ne comal tiltik.
— Nanan Francisca: Kualkat mu-yul. Ne suquit nemi kualkan wan tisin tutunik pal ti-tekitit ashan.
— Siwapil Marta: Ni-yulpaki kan ti-nech-maka mu-tamatilis.`,
        grammaticalBreakdown: `1. 'Makatuka ni-kalaki': fórmula de cortesía condicional para pedir permiso de ingreso al hogar, 'ni-kalaki' (yo entro).
2. 'Mu-ishpiltzin': posesivo 'mu-' (tu) + 'ishpiltzin' (hija espiritual/nieta querida con diminutivo reverencial -tzin).
3. 'Xikalaki / ximutali': modo imperativo de cortesía marcado con el prefijo 'shi-/xi-' ante raíces verbales ('shi-kalaki' = ¡entra!, 'shi-mu-tali' = ¡siéntate con calma!).
4. 'Ni-walajsik': pretérito perfecto del verbo de llegada 'walasi' con desinencia de aspecto completivo '-k'.
5. 'Ti-nech-maka': prefijo de sujeto 'ti-' (tú) + prefijo de objeto oblicuo 'nech-' (a mí) + verbo transitivo 'maka' (dar).`
      },
      {
        id: 'nah_d1_03',
        scenario: 'Encuentro vespertino en el parque central de Izalco entre un joven y el mayordomo de la cofradía.',
        dialogue: `— Takapil Carlos: Yejyek tiutak Tatan Mayordomo. ¿Ken tinemi tik ne ilwit pal techan?
— Mayordomo: Yejyek tiutak nu-piltzin Carlos. Ni-tekiti iwan ne hermandad pal ti-k-prepararat ne guachival.
— Takapil Carlos: ¿Kipia tatka kan naja weli ni-tatekitiltia iwan nu-tajpal?
— Mayordomo: Kemah, shik-maka se mey pal ti-k-temat ne kwawit pal ne tisin tik ne teopant.
— Takapil Carlos: Iwan pakilis nikchiwa nu-tatan. Tlasohkamatik pal mu-consejo.`,
        grammaticalBreakdown: `1. 'Takapil / Nu-piltzin': formas nominales compuestas para dirigirse a jóvenes varones ('takat' hombre + 'piltzin' hijo).
2. 'Kipia tatka': locución impersonal de existencia interrogativa '¿hay algo en lo que...?'.
3. 'Weli ni-tatekitiltia': verbo auxiliar modal 'weli' (poder) + verbo intransitivo de servicio laboral 'tatekitiltia' (prestar ayuda física).
4. 'Shik-maka se mey': modismo imperativo que traduce literalmente '¡dale una mano!' ('shi-k-' dale + 'se mey' una mano).
5. 'Iwan pakilis': frase preposicional adverbial 'con alegría / de mil amores'.`
      },
      {
        id: 'nah_d1_04',
        scenario: 'Despedida nocturna tras una sesión de transmisión oral en el centro comunal.',
        dialogue: `— Mumachtiani Elena: Yejyek taywa nu-tamachtiani. Ya tiutakik wan ni-yawi tik nu-kal.
— Tamachtiani Julio: Yejyek taywa Elena. Tlasohkamatik kan ti-walajsik ti-kaki ne nawataketzalis.
— Mumachtiani Elena: Naja ni-k-tasojtla nu-lengua wan te-nik-kawaskia keman.
— Tamachtiani Julio: Shupanu iwan paz, shiejkatuka tik ne uhti kan taywa. Ti-muttat mostla kualkan.
— Mumachtiani Elena: Ti-muttat nu-tamachtiani, yejyek kuchi mu-yul.`,
        grammaticalBreakdown: `1. 'Ya tiutakik': aspecto completivo impersonal 'ya anocheció / ya se hizo tarde'.
2. 'Te-nik-kawaskia keman': construcción potencial contrafáctica con sufijo irreal '-skia' ('yo no la dejaría/abandonaría jamás').
3. 'Shiejkatuka': imperativo de advertencia prudencial '¡camina con cuidado / anda prevenido!'.
4. 'Ti-muttat mostla': verbo recíproco reflexivo 'mu-ita' (verse el uno al otro) en 1ª persona plural 'nosotros nos veremos mañana'.
5. 'Yejyek kuchi mu-yul': bendición nocturna que desea descanso sereno al corazón y al pensamiento.`
      },
      {
        id: 'nah_d1_05',
        scenario: 'Agradecimiento formal y entrega de ofrenda de frutas en Cuisnahuat.',
        dialogue: `— Nawataketzani Rosa: Shikmaka ini chikiwit iwan elut wan ayut pal mu-familia.
— Siwat Carmen: ¡Tlasohkamatik weyi nu-nanan Rosa! Tesu kinekiya ti-tekipachua.
— Nawataketzani Rosa: Te-tatka nu-siwapil. Ne tlatikpak kitemaka sinti pal ti-k-moxexeluat iwan tepal.
— Siwat Carmen: Nu-yul kualkat kiyaki. Yejyek tunal wan shukisa kualkat tik mu-nemilis.
— Nawataketzani Rosa: Nusan pal taha, Dios ma-metz-tajpia tik ne uhti.`,
        grammaticalBreakdown: `1. 'Shikmaka': imperativo transitivo con objeto incorporado 'k-' ('shi-k-maka' = ¡entrega esto!).
2. 'Tesu kinekiya ti-tekipachua': fórmula de cortesía equivalente a 'no debió haberse tomado la molestia'.
3. 'Ti-k-moxexeluat': verbo transitivo colectivo con prefijo reflexivo 'mu-' que expresa 'repartir solidariamente entre hermanos'.
4. 'Iwan tepal': locución mesoamericana 'con el prójimo / con los vecinos de la comunidad'.
5. 'Ma-metz-tajpia': partícula optativa 'ma-' (que / ojalá) + prefijo de objeto de 2ª persona singular 'metz-' (te) + raíz verbal 'tajpia' (guarde/proteja).`
      }
    ]
  },
  {
    id: 'nahuat_comm_02',
    title: 'Unidad 2: Familia, Parentesco y Vida en el Hogar Pipil (Tepal Nemilis wan Techan)',
    topic: 'Familia y Comunidad',
    substantiveGuide: `En la cultura pipil cuscatleca, el concepto de familia trasciende los límites biológicos individuales para comprender una red comunitaria intergeneracional. La casa ('kalat' en estado absolutivo, 'kal' en composición posesiva) no es meramente un techo arquitectónico, sino el espacio vital donde arden las tres piedras sagradas del fogón ('tenamaztli') y donde la tradición oral se transmite ininterrumpidamente de abuelos a nietos. La posesión nominal en náhuat pipil es un fenómeno morfológico de obligada precisión: ningún sustantivo de parentesco o parte del cuerpo puede enunciarse sin su correspondiente prefijo de posesión. Decir simplemente *nanan o *tatan es agramatical en el habla cotidiana; debe decirse 'nu-nanan' (mi madre), 'mu-tatan' (tu padre), 'i-kniw' (su hermano) o 'tu-tajtakamet' (nuestros hombres/abuelos).

Asimismo, el náhuat distingue entre términos de parentesco según la edad relativa y el género del hablante. Por ejemplo, 'chipi' denota con ternura inalienable al hijo menor o benjamín de la casa, mientras que 'ishpiltzin' hace referencia a la descendencia espiritual querida. La convivencia hogareña se organiza en torno a la complementariedad de labores: mientras el hombre y los hijos mayores cuidan la milpa ('wara' o 'milpa'), la mujer administra la alfarería, la confección de comales, la preparación del nixtamal en el metate ('metlat') y la crianza afectuosa de los infantes. El respeto a los ancianos no es optativo; ellos conforman el 'consejo de la comunidad' y son denominados 'nawataketzanimet' (los que hacen florecer la lengua oral).

En la dimensión intrahogareña, el patio delantero ('tenkal') y el corredor techado funcionan como los espacios pedagógicos por excelencia. Es allí donde el padre instruye al adolescente sobre el manejo del machete curvo ('kuchil') y el afilado del cabo de madera, mientras la madre enseña a las hijas la selección de arcillas, el amasado de la masa de nixtamal para tortillas ('tashkal') y el tejido de fibras naturales de tule. El lenguaje empleado entre padres e hijos recurre constantemente a fórmulas de mandato de cortesía y afecto mediadas por el imperativo 'shi-' y partículas evidenciales de comprobación, evitando las órdenes desabridas.

La solidaridad interdoméstica o trabajo en común ('tequio' o faena solidaria) constituye el principio motor que asegura la subsistencia del calpulli. Cuando una vivienda sufre deterioro en su techado de paja y zacate ('sakat'), o cuando una familia atraviesa una enfermedad prolongada, los parientes y vecinos convocados acuden sin esperar compensación dineraria; la recompensa consiste en la comida compartida al pie del fogón, el atol dulce ('atut') y la certeza moral de que la ayuda será reciprocada en tiempos de necesidad. En esta unidad se exploran las conversaciones intrahogareñas, los mandatos de cortesía filial, la descripción de roles familiares y la reciprocidad comunal viva que sostiene la dignidad del hogar pipil. En la memoria de las comunidades de Izalco y Nahuizalco, la autoridad moral de las abuelas y abuelos se manifiesta a través del consejo nocturno ('takatetzalis taywa'), donde se relatan las genealogías familiares y las normas consuetudinarias de respeto al patrimonio comunal. El hogar pipil constituye así una escuela viva de valores donde cada generación aprende a honrar el legado inalienable de sus mayores, transmitiendo la identidad náhuat con profunda devoción filial.`,
    solvedDialogues: [
      {
        id: 'nah_d2_01',
        scenario: 'Conversación matutina en el molendero entre una madre y su hija preparando el nixtamal.',
        dialogue: `— Nanan Teresa: Nu-siwapil Silvia, shiahkuki kualkan pal ti-k-tesit ne sinti tik ne metlat.
— Siwapil Silvia: Ni-mu-quetztuk ya nu-nanan. Ne at sesek ya kitemakak nu-tatan pal ne ameyal.
— Nanan Teresa: Yejyek. Shik-xutla ne tisin iwan tsu wakik wan shik-tlali ne comal ijpak ne tenamaz.
— Siwapil Silvia: ¿Kech tamal ti-k-chiwat ashan pal ne tlakual?
— Nanan Teresa: Ti-k-chiwat sempuwal tamal, pampa mu-kniwan walatket mayanat pal ne milpa.`,
        grammaticalBreakdown: `1. 'Shiahkuki': imperativo 'shi-' + verbo intransitivo de levantamiento matutino 'ahkuki' (¡levántate!).
2. 'Ni-mu-quetztuk ya': aspecto resultativo durativo con sufijo '-tuk' ('ya me encuentro de pie y lista').
3. 'Shik-xutla ne tisin': imperativo transitivo 'xutla' (encender fuego con brasa viva).
4. 'Kech tamal': partícula interrogativa cuantitativa 'kech' (cuántos) + sustantivo 'tamal'.
5. 'Sempuwal tamal': numeral vigesimal 'sempuwal' (veinte) que indica una cuenta completa de tortillas.`
      },
      {
        id: 'nah_d2_02',
        scenario: 'El padre explica a su hijo adolescente las responsabilidades de cuidado de la parcela.',
        dialogue: `— Tatan Marcos: Nu-piltzin David, ashan ti-yawi tik ne milpa pampa ne sinti ya xukituk.
— Piltzin David: Kemah nu-tatan, naja nik-pia nu-kuchil afiladut wan nu-tecomaw iwan at sesek.
— Tatan Marcos: Yejyek takat ti-mukwepa. Ne milpa kineki tajpalikayut wan ixtiyul pal te-kikwa ne chapulin.
— Piltzin David: Nik-tajpiaskia ne wara ken taha tinech-machtijket kan nikatka chikitik.
— Tatan Marcos: Nu-yul paki kan nimitz-kaki. Inin ne nemilis yejyek pal tu-familias.`,
        grammaticalBreakdown: `1. 'Ya xukituk': participio completivo 'ya maduró / ya espigó el maizal'.
2. 'Ti-mukwepa': verbo reflexivo 'mu-kwepa' (convertirse en / volverse un hombre de bien).
3. 'Pal te-kikwa ne chapulin': cláusula final negativa de propósito 'para que no se lo coman las plagas'.
4. 'Nik-tajpiaskia': condicional potencial con sufijo '-skia' ('yo cuidaré fielmente la milpa').
5. 'Nimitz-kaki': prefijo transitivo de 1ª persona a 2ª persona singular 'nimitz-' ('yo te escucho a ti').`
      },
      {
        id: 'nah_d2_03',
        scenario: 'La abuela atiende al hijo menor de la casa que regresa cansado de la escuela.',
        dialogue: `— Nanan Sofia: Shikalaki nu-chipi José, shik-tali mu-morral wan shimutali tik ne petat.
— Piltzin José: Nu-nanan, ni-walajsik mayana pampa timejnemiket wejka tik ne tamachtiluyan.
— Nanan Sofia: Shik-kwa ini tashkal tutunik iwan et chiltik wan chiupi alwasin.
— Piltzin José: ¡Kualkat jiddan! Tlasohkamatik nu-nanan, mu-tlakual senkishki yejyek.
— Nanan Sofia: Shik-kwa iwan calma nu-piltzin, wan ba‘da al-ghadā’ shik-chiwa mu-tarea pal nawat.`,
        grammaticalBreakdown: `1. 'Nu-chipi': vocativo afectivo institucional para el hijo menor de la familia.
2. 'Ni-walajsik mayana': construcción seriada verbal 'llegué hambriento tras la caminata'.
3. 'Tamachtiluyan': sustantivo locativo con sufijo de lugar '-luyan' ('el sitio donde se enseña' = la escuela).
4. 'Senkishki yejyek': adverbio intensificador 'senkishki' (absolutamente / sumamente delicioso).
5. 'Shik-chiwa mu-tarea': imperativo exhortativo para cumplir con los deberes de aprendizaje.`
      },
      {
        id: 'nah_d2_04',
        scenario: 'Diálogo entre dos hermanas sobre la elaboración del tejido y teñido de prendas.',
        dialogue: `— Siwapil Lucia: Nu-kniw Beatriz, ¿ken ti-k-chiwat ne color chiltik pal ne koton?
— Siwapil Beatriz: Ti-k-usat ne tinta pal achiote wan ne corteza pal kwawit brasil.
— Siwapil Lucia: Ne color istak nusan kualkat mukwepa kan ti-k-pajpajkat tik ne atoyat.
— Siwapil Beatriz: Kemah, nu-nanan nech-machtik kan ti-k-kawat wakik ijpak ne wapal tik tenkal.
— Siwapil Lucia: Yejyek nemilis kan ti-k-chiwat tu-ropas iwan tu-mey.`,
        grammaticalBreakdown: `1. 'Ken ti-k-chiwat': 'ken' (cómo) + prefijo de 1ª plural 'ti-' + objeto 'k-' + verbo 'chiwa' (hacer) + plural verbal '-t'.
2. 'Tinta pal achiote': sintagma preposicional adaptado para tintes naturales vegetales tradicionales.
3. 'Ti-k-pajpajkat': verbo reduplicado 'pajpajka' que denota acción repetitiva de lavado cuidadoso de prendas.
4. 'Ijpak ne wapal': posposición locativa 'ijpak' (sobre / encima de) + 'wapal' (tabla de madera).
5. 'Iwan tu-mey': frase instrumental 'con nuestras propias manos artesanas'.`
      },
      {
        id: 'nah_d2_05',
        scenario: 'Asamblea familiar para planificar el techado comunal de la casa de un pariente anciano.',
        dialogue: `— Tatan Andrés: Nu-kniwan, tu-tata Antonio kineki tul wan sakat pal kipatla itzuntekun ikal.
— Takat Joaquín: Naja nikpia makwil cargas pal sakat wakik tik nu-kujtan.
— Takat Felipe: Naja ni-walika nu-kuchil wan wapal pal ti-k-tekitit mostla kualkan.
— Nanan Rosa: Wan tejwan ti-k-prepararat yejyek tamal wan atul pal nochi ne tekititket.
— Tatan Andrés: Yejyek nu-comunidad. Kan tinemit sansekan, te-tatka weli tech-kualania.`,
        grammaticalBreakdown: `1. 'Kipatla itzuntekun ikal': metáfora pipil para el techado ('cambiar la cabeza/techo de su vivienda').
2. 'Makwil cargas': numeral 'makwil' (cinco) aplicado a medidas de acarreo de forraje.
3. 'Ni-walika': verbo causativo de transporte 'wal-ika' (traer consigo / acarrear acá).
4. 'Tekititket': sustantivo agentivo plural formado con sufijo '-ket' ('los trabajadores voluntarios de la faena').
5. 'Sansekan': principio ético comunitario mesoamericano de unidad indisoluble ante cualquier vicisitud.`
      }
    ]
  },
  {
    id: 'nahuat_comm_03',
    title: 'Unidad 3: La Milpa, Entorno Natural y Agricultura (Ne Milpa wan Taltikpak)',
    topic: 'Entorno Natural y Agricultura',
    substantiveGuide: `La relación del pueblo pipil con la tierra ('taltikpak') y la milpa ('milpa' o 'wara') no es meramente productiva o extractiva, sino de profunda filiación espiritual y respeto cósmico. El maíz ('sinti') es considerado el cuerpo sagrado de la humanidad y el alimento primigenio otorgado a los antepasados en los mitos de origen de Izalco y Cuscatlán. La transmisión oral de esta sabiduría ancestral asegura que la memoria de los tatas y nanas siga alumbrando el destino digno de las futuras generaciones en todo el territorio salvadoreño y en la diáspora centroamericana. La agricultura tradicional se fundamenta en el policultivo de la triada mesoamericana: maíz ('sinti'), frijol ('et') y ayote ('ayut'), a los que con frecuencia se suman el chile ('chile') y plantas medicinales y aromáticas en los bordes o 'chinampas'. Cada elemento cumple una función simbiótica: la caña de maíz sirve de tutor al frijol trepador, el frijol fija nitrógeno en el suelo fértil ('tal sewayut') y las grandes hojas del ayote sombrean el suelo evitando la erosión y conservando la humedad del rocío.

El vocabulario agrícola náhuat es extraordinariamente rico y técnico en sus matices ecológicos. Distingue entre el grano seco desgranado ('sinti'), la mazorca tierna con granos lechosos apta para hervir o asar ('elut'), la mazorca incipiente en pelo de jilote ('xilot') y el olote desprovisto de granos empleado para combustible del fogón ('ololi'). Asimismo, el ciclo del agua está marcado por dos grandes estaciones: 'shupantla' (el invierno o temporada de lluvias torrenciales y reverdecimiento) y 'tunalpan' (el verano o temporada soleada de calor seco y cosecha). La tala ceremonial del rastrojo, la siembra a golpe de chuzo o espeque y la dobla de la milpa para proteger la mazorca madura de los pájaros y las lluvias tardías son acciones descritas mediante verbos morfológicamente precisos.

Antes de introducir las semillas en la tierra, los sembradores ancianos celebran el ritual de bendición de la simiente ('tasojtalis pal sinti'), depositando cuatro granos en cada orificio orientado hacia los cuatro rumbos del universo. El cuidado del agua es igualmente reverencial: los manantiales de montaña ('ameyal') y los arroyos de cuenca ('atoyat') son concebidos como arterias sagradas que no deben ser ensuciadas con basuras ni químicos venenosos. Cortar árboles vivos sin permiso de los dueños del cerro ('tepewa') acarrea sequía y desequilibrio comunitario.

Los campesinos pipiles preservan además un vasto saber etnobotánico relativo a los árboles tutelarles de la cordillera: el bálsamo ('nabat'), cuya resina aromática cura heridas y purifica recintos sagrados; el maquilíshuat de floración rosada que señala el clímax de la temporada seca; y el conacaste de ancha copa que abriga al ganado y a las familias campesinas. Esta unidad provee las estructuras comunicativas indispensables para dialogar sobre labores del campo, pronósticos climáticos según la tradición oral de los abuelos, descripción de especies arbóreas autóctonas y fauna silvestre de la campiña salvadoreña. La observación de los bioindicadores climáticos tradicionales guía las decisiones de siembra en la cordillera: el canto estridulante de las chicharras al final de la temporada seca avisa la inminencia del primer aguacero, mientras que el vuelo bajo de las golondrinas y la salida masiva de hormigas arrieras confirman que el invierno se ha establecido con firmeza sobre los valles fértiles. La comunión respetuosa con las fuerzas telúricas y meteorológicas constituye el pilar que asegura cosechas colmadas para las familias de Witzapan y toda la región pipil.`,
    solvedDialogues: [
      {
        id: 'nah_d3_01',
        scenario: 'Dos agricultores evalúan el estado de la milpa tras las primeras lluvias de mayo en Izalco.',
        dialogue: `— Tatan Santiago: Shikitak nu-kniw Pedro, ne shupantla walajsik iwan fuerza wan kianima ne tal.
— Tatan Pedro: Kemah Santiago, ne sinti ya kisa shushuknak wan ne i-izwayu kitemaka esperanza.
— Tatan Santiago: Kineki ti-k-tekitiat pal ti-k-kixtiat ne sakat te-kualkat itzalan ne surco.
— Tatan Pedro: Mostla kualkan ni-witz iwan nu-kuchil wan tu-pashaluani David pal ti-k-limpiarat.
— Tatan Santiago: Yejyek. Ma-kitemaka ne taltikpak weyi cosecha pal tu-techan.`,
        grammaticalBreakdown: `1. 'Shikitak': imperativo con marca evidencial de comprobación ocular '¡mira con tus propios ojos!'.
2. 'Kianima ne tal': verbo hispanizado adaptado al náhuat con prefijo transitivo 'ki-' ('dar vida y vigor a la tierra').
3. 'Ya kisa shushuknak': construcción incoativa 'ya asoma completamente verde y lozano'.
4. 'Sakat te-kualkat': modismo para maleza o hierba invasora ('zacate perjudicial que resta vigor').
5. 'Ma-kitemaka': fórmula optativa de plegaria agrícola tradicional 'que la madre tierra conceda abundancia'.`
      },
      {
        id: 'nah_d3_02',
        scenario: 'Un abuelo enseña a su nieto a distinguir el punto exacto para la dobla de la mazorca.',
        dialogue: `— Tatan Ramón: Nu-ishpiltzin, shik-ita ken ne elut ya mukwepki sinti wakik.
— Piltzin Gabriel: ¿Kenchik ti-k-kuaxtunat ne kwawit pal ne milpa nu-tatan?
— Tatan Ramón: Ti-k-chiwat ne dobla pal ne at te-kikalaki tik ne mazorca kan wetzi lluvias tardías.
— Piltzin Gabriel: Wan nusan pal ne totot te-kikwa ne grano maduro.
— Tatan Ramón: Yejyek mu-tamatilis Gabriel. Shik-itzkia ne caña wan shik-posteki iwan cuidado.`,
        grammaticalBreakdown: `1. 'Ya mukwepki sinti wakik': pretérito perfecto intransitivo 'ya se convirtió en grano seco de troje'.
2. 'Ti-k-kuaxtunat': verbo compuesto técnico agrícola para la dobla de la caña de maíz.
3. 'Pal ne at te-kikalaki': cláusula prohibitiva de resguardo 'para evitar que el agua pudra el grano'.
4. 'Shik-itzkia / shik-posteki': verbos imperativos seriados '¡agarra con firmeza y dobla el tallo sin quebrarlo!'.
5. 'Ne totot te-kikwa': sujeto animal 'el pájaro' + negación 'te-' + verbo transitivo 'k-kwa' (lo come).`
      },
      {
        id: 'nah_d3_03',
        scenario: 'Diálogo sobre la cosecha de frijol de milpa y su selección en el patio hogareño.',
        dialogue: `— Siwapil Marta: Nu-nanan, ne et chiltik ya waki tik ne parcha wan ya ti-k-pishkatket.
— Nanan Juana: Shik-teca ne petat tik tenkal wan shik-tzetzelua ne vainas pal kisa ne grano.
— Siwapil Marta: Ne et kualkat jiddan, te-kipia plaga wan grano gordito kisa.
— Nanan Juana: Ti-k-tajpiat se chikiwit pal semilla pal ne otro shupantla, wan ne resto pal tlakual.
— Siwapil Marta: Yejyek pensil. La semilla ancestral te-kikawaskia keman.`,
        grammaticalBreakdown: `1. 'Ya waki / ya ti-k-pishkatket': secuencia aspectual 'ya se secó y por tanto procedimos a cosecharlo'.
2. 'Shik-tzetzelua ne vainas': imperativo transitivo del verbo reduplicativo 'tamizar y desvainar golpeando con vara suave'.
3. 'Grano gordito': préstamo afectivo salvadoreño intercalado en el registro coloquial familiar.
4. 'Pal ne otro shupantla': frase temporal 'para el próximo ciclo invernal de siembras'.
5. 'Yejyek pensil': expresión criolla de aprobación comunitaria 'es un pensamiento muy acertado y previsor'.`
      },
      {
        id: 'nah_d3_04',
        scenario: 'Observación del vuelo de las aves y predicción del clima por un anciano de Cuisnahuat.',
        dialogue: `— Takat Manuel: Tatan Victor, ¿ken kita ne tiempo ashan? Ne tunal tutunik kakanek.
— Tatan Victor: Shik-ita ne tzopilot patani wejka tik ne ilwikat wan ne puku tzikuinit apan.
— Takat Manuel: ¿Uni kineki ki-ijtuwa ka wetziski at tiutak?
— Tatan Victor: Kemah, kan ne puku takuikat wan ejekat sesek temuk pal ne tepet, yawi wetzi weyi temporal.
— Takat Manuel: Yejyek nimati pal ti-k-tajpiat ne sinti tik ne tapal kalijtik.`,
        grammaticalBreakdown: `1. 'Tunal tutunik kakanek': adjetivación enfática 'el sol calienta con un ardor que quema la piel'.
2. 'Ne puku tzikuinit apan': sujeto plural 'los sapos' + verbo de movimiento 'tzikuini-t' (saltan cerca de la poza).
3. 'Kineki ki-ijtuwa': perífrasis aspectual modal que traduce '¿eso quiere significar que...?'.
4. 'Wetziski at': futuro perifrástico irreal del verbo de precipitación 'lloverá copiosamente esta tarde'.
5. 'Weyi temporal': adaptación al náhuat del término meteorológico centroamericano 'temporal de lluvias prolongadas'.`
      },
      {
        id: 'nah_d3_05',
        scenario: 'Recolección de frutos silvestres y leña en las laderas del cerro Cacahuatique.',
        dialogue: `— Takapil Carlos: Nu-tatan, nik-ajsik meyik kiriw tzopilik wan tsu wakik tik ne kujtan.
— Tatan Tomás: Shik-temak se chikiwit pal mu-nanan wan shik-tali ne tsu itan ne tapal.
— Takapil Carlos: Nusan nik-itak se masan weyak temuk tik ne atuktli sesek.
— Tatan Tomás: Ne masan animal sagrado pal ne tepet, te-shik-molestar, ma-nemi libre tik ne tal.
— Takapil Carlos: Kemah nu-tatan, naja nik-tasojtla nochi ne nemit tik ne taltikpak.`,
        grammaticalBreakdown: `1. 'Nik-ajsik': pretérito transitivo de encuentro fortuito 'encontré frutos maduros en el monte'.
2. 'Kiriw tzopilik': frase sustantiva descriptiva 'frutas silvestres de sabor dulce y perfumado'.
3. 'Shik-tali itan ne tapal': directiva espacial locativa 'coloca la leña debajo del zarzo elevado para que no se moje'.
4. 'Te-shik-molestar': mandato negativo prohibitivo '¡no lo inquietes ni lo perturbes jamás!'.
5. 'Nochi ne nemit': pronombre colectivo cuantificador 'a todos los seres vivientes que habitan esta tierra'.`
      }
    ]
  },
  {
    id: 'nahuat_comm_04',
    title: 'Unidad 4: Comercio, Mercado y Tianguis Tradicional (Tiankis wan Tay Kuanat)',
    topic: 'Comercio e Intercambio',
    substantiveGuide: `El mercado indígena o 'tiankis' (voz náhuat de la cual procede el término salvadoreño 'tiangue' o 'tianguis') representa el corazón del intercambio social, económico y cultural de los pueblos del occidente cuscatleco. Históricamente, en centros como Sonsonate, Izalco, Nahuizalco y Salcoatitán, el tianguis no funcionaba bajo una lógica puramente monetaria impersonal, sino bajo principios ancestrales de trueque ('moxexelua'), reciprocidad y comercio justo donde el valor de un producto ('patiw' o 'tamuk') se determinaba en función del trabajo artesanal incorporado y de la necesidad mutua de las familias participantes.

En las transacciones en náhuat pipil intervienen verbos transitivos fundamentales como 'kua' (comprar / adquirir), 'namaka' (vender / comerciar), 'maka' (dar / entregar) y 'pata' (cambiar / trocar una mercancía por otra). La pregunta central sobre el costo de una pieza artesanal o de una medida de semillas es '¿Kech itamuk?' (¿Cuánto es su valor/precio?) o '¿Kech ti-k-namaka?' (¿A cómo lo vendes?). Las cantidades se expresan a través de clasificadores y medidas tradicionales: 'se chikiwit' (un canasto colmado), 'se almud' (medida tradicional de grano seco equivalente a doce libras), 'se manojo' (atado de hierbas o flores) o 'se carga' (bulto transportado a lomo de bestia o mecapal).

Las interacciones en el tianguis exigen un código ético riguroso de respeto y amabilidad: el regateo agresivo es mal visto, prefiriéndose acuerdos armoniosos mediante fórmulas como 'Xinech-chiwili chiupi rebaja' (Hazme por favor una pequeña rebaja) o la entrega tradicional de la 'yapa' o 'ribete' (una porción adicional de cortesía que el vendedor regala al comprador fiel para sellar la amistad comercial). 

La especialización regional imprimía a cada plaza un perfil productivo único dentro de la red económica de los Izalcos. Mientras Santo Domingo de Guzmán proveía comales de barro rojo y negro ('comal tiltik') y tinajas curadas con savia vegetal, Nahuizalco destacaba por la cestería de vara blanca, petates de tule y sombreros tejidos de palma. Los campesinos de las faldas del volcán bajaban cargas de leña, manojos de chipilín silvestre, pacayas tiernas y café de sombra. El diálogo entre artesano y marchante no se limita al precio: se pregunta por la salud de los hijos ('ken nemit mu-piltzitzin') y se bendice el producto al entregarlo con 'yejyek nemilis pal mu-kal'. En esta unidad se desarrollan las estructuras para preguntar precios, contar dinero ('tumin' o 'colones' tradicionales), describir la calidad de los artículos de barro, mimbre y madera, y pactar intercambios solidarios entre artesanos y campesinos. Históricamente, las caravanas de intercambio comercial unían los valles de Izalco con los puertos naturales de Acajutla y los tianguis de Sonsonate y Ahuachapán. En estos corredores transitaban recuas cargadas de añil, bálsamo en tecomates curados, esteras de carrizo y sal marina de estero. El intercambio no respondía a la especulación mercantilista, sino a una equilibrada complementariedad ecológica entre las tierras altas volcánicas y las planicies litorales del Pacífico salvadoreño. Antes de cerrar cada trato, comprador y vendedor pronuncian bendiciones recíprocas deseando que el sustento rinda en el hogar y que los frutos de la tierra nutran la fraternidad del techan indígena, consolidando redes de apoyo mutuo que trascienden las fronteras municipales de Sonsonate.`,
    solvedDialogues: [
      {
        id: 'nah_d4_01',
        scenario: 'Compra de un comal de barro negro en el tianguis artesanal de Santo Domingo de Guzmán.',
        dialogue: `— Siwat Luisa: Yejyek tunal nanan, ¿kech itamuk ini comal tiltik yejyek?
— Alfarera Francisca: Yejyek tunal nu-siwapil. Inin comal kichiwtuk iwan suquit fino wan nik-namaka tik makwil colones.
— Siwat Luisa: ¿Weli ti-nech-maka tik nawi colones si nik-kua ume comales pal nu-kal?
— Alfarera Francisca: Kemah, pampa ti-nu-kniw, shik-maka chikwey colones pal ne ume wan nik-maka se chikitik apas de ribete.
— Siwat Luisa: ¡Tlasohkamatik weyi! Nikan nemi ne tumin, yejyek nemilis pal mu-negocio.`,
        grammaticalBreakdown: `1. 'Kech itamuk': interrogativo de precio 'kech' (cuánto) + sustantivo poseído de 3ª persona 'i-tamuk' (su valor monetario).
2. 'Kichiwtuk iwan suquit fino': participio de estado pasivo 'está elaborado con arcilla seleccionada y curada'.
3. 'Weli ti-nech-maka': fórmula modal cortés de negociación '¿sería posible que me lo dieses a...?'.
4. 'De ribete': incorporación del modismo salvadoreño de cortesía comercial tradicional.
5. 'Nikan nemi ne tumin': presentación del pago 'aquí tienes el dinero correspondiente'.`
      },
      {
        id: 'nah_d4_02',
        scenario: 'Trueque tradicional de maíz nuevo por canastos chiquihuites tejidos de carrizo.',
        dialogue: `— Artesano Tomás: Yejyek tiutak tatan Mateo, nik-walika ini chikiwit tejidos pal sinti.
— Campesino Mateo: Yejyek tiutak Tomás. Naja nik-neki ume chikiwit pal nu-pishka wan nik-pia elut recién cortado.
— Artesano Tomás: ¿Ti-k-patat se chikiwit por se almud de sinti wan diez elutes?
— Campesino Mateo: Kualkat trato. Naja nik-paki iwan mu-artesanía wan taha tik-pia alimento pal mu-familia.
— Artesano Tomás: Tlasohkamatik Mateo. Ne trueque ancestral une a nuestros pueblos.`,
        grammaticalBreakdown: `1. 'Nik-walika ini chikiwit': verbo compuesto transitivo 'traigo conmigo estos canastos tejidos a mano'.
2. 'Nik-neki ume chikiwit': verbo de necesidad o deseo 'neki' (necesitar / querer) en 1ª singular.
3. 'Ti-k-patat': verbo transitivo de trueque o intercambio equivalente 'pata' en 1ª plural 'troquemos'.
4. 'Kualkat trato': fórmula de acuerdo comercial satisfactorio para ambas partes.
5. 'Ne trueque ancestral une': afirmación comunitaria del valor social y no meramente lucrativo del mercado.`
      },
      {
        id: 'nah_d4_03',
        scenario: 'Venta de frutas silvestres y hierbas aromáticas en el tiangue dominical de Izalco.',
        dialogue: `— Vendedora Silvia: ¡Shik-kuakat kiriw tzopilik, aguacate wan chipilín fresco recién traído del monte!
— Comprador Julio: Yejyek tunal nanan Silvia, ¿a kech kipia ne manojo de chipilín?
— Vendedora Silvia: A dos por se colón nu-tatan, bien fresquito wan lavado con agua de manantial.
— Comprador Julio: Shik-maka nawi manojos wan ume aguacates maduros pal nu-almuerzo.
— Vendedora Silvia: Nikan nemi nochi nu-kniw, wan shik-kia ini manojo de cilantro de yapa.`,
        grammaticalBreakdown: `1. 'Shik-kuakat': imperativo plural con sufijo de mandato colectivo '-kat' ('¡compren ustedes frutas selectas!').
2. 'Ne manojo de chipilín': cuantificador tradicional para hierbas comestibles autóctonas salvadoreñas.
3. 'A dos por se colón': adaptación monetaria histórica que preserva numerales náhuat en el regateo.
4. 'Nikan nemi nochi': entrega completa del pedido 'aquí tienes todo lo solicitado'.
5. 'De yapa': costumbre mesoamericana de añadir un extra de cortesía para consolidar la clientela.`
      },
      {
        id: 'nah_d4_04',
        scenario: 'Negociación sobre el transporte a caballo de costales de café y maíz en la serranía.',
        dialogue: `— Campesino Manuel: Yejyek tunal Don Raúl, ¿weli ti-nech-fletiar mu-kawayu pal kitema cuatro costales de café?
— Arriero Raúl: Yejyek tunal Manuel. Ne uhti temuk lodoso por ne temporal, kineki cuidado tik ne barranco.
— Campesino Manuel: Nik-mati. ¿Kech ti-nech-cobraskia pal ti-k-walikat hasta ne carretera principal?
— Arriero Raúl: Makwil colones por costal es justo nu-kniw, wan ti-yawit kualkan pal te-tech-ajsi ne tunal tutunik.
— Campesino Manuel: Kualkat trato. Mostla a las cinco de la mañana ti-k-esperarat tik nu-tenkal.`,
        grammaticalBreakdown: `1. 'Ti-nech-fletiar': verbo hispanizado incorporado al sistema morfológico náhuat para servicios de flete.
2. 'Ne uhti temuk lodoso': descripción topográfica de advertencia sobre las condiciones del sendero de montaña.
3. 'Ti-nech-cobraskia': forma potencial de consulta cortés de honorarios '¿cuánto tendrías a bien cobrarme?'.
4. 'Makwil colones por costal': empleo exacto del numeral vigesimal 'makwil' (cinco) para fijar tarifa.
5. 'Pal te-tech-ajsi': cláusula de propósito preventivo 'para que no nos alcance el agobiante calor del mediodía'.`
      },
      {
        id: 'nah_d4_05',
        scenario: 'Cierre del mercado y despedida solidaria entre puestos vecinos en Salcoatitán.',
        dialogue: `— Comerciante Rosa: Ya tiutakik nu-kniw Andrés, ya ti-k-tzakuat ne tajkowiluyan pal ti-yawit tik tu-kal.
— Artesano Andrés: Kemah Rosa, ashan nemik yejyek tunal, tik-namakatket nochi ne chikiwit wan ne comales.
— Comerciante Rosa: Tlasohkamatik pampa ti-nech-palewik kan nemik meyik gente tik ne puesto.
— Artesano Andrés: Te-tatka Rosa, entre nosotros siempre ti-mu-palewiat ken hermanos de techan.
— Comerciante Rosa: Shupanu kualkan iwan paz, ti-muttat ne otro domingo tik ne tiankis.`,
        grammaticalBreakdown: `1. 'Ya ti-k-tzakuat': 'ya' (ahora) + 'ti-k-tzakua-t' (cerramos la jornada de venta en el mesón).
2. 'Tajkowiluyan': sustantivo locativo náhuat para puesto de comercio o tienda comunal.
3. 'Ti-k-namakatket nochi': pretérito transitivo plural con objeto totalizador 'vendimos absolutamente todo'.
4. 'Ti-mu-palewiat': verbo reflexivo recíproco 'nos ayudamos mutuamente en el mercado'.
5. 'Ne otro domingo': referencia calendárica cíclica para el próximo tianguis dominical.`
      }
    ]
  },
  {
    id: 'nahuat_comm_05',
    title: 'Unidad 5: Cosmovisión, Memoria Oral y Filosofía del Yejyek Nemilis (Yejyek Nemilis wan Masewaltaketzalis)',
    topic: 'Cosmovisión y Narrativa',
    substantiveGuide: `La cosmovisión del pueblo náhuat pipil salvadoreño articula una concepción holística de la existencia donde los seres humanos no son dueños de la creación, sino custodios temporales integrados en una trama viviente que abarca los cerros ('tepet'), las aguas sagradas ('at'), los vientos de los rumbos ('ejekat') y las constelaciones celestes ('sitlal'). En el núcleo de esta filosofía ética se encuentra el precepto del 'Yejyek Nemilis' (el Buen Vivir o Vivir en Armonía), equivalente pipil a los principios andinos y mesoamericanos del equilibrio comunal. El 'Yejyek Nemilis' no se define por la acumulación egoísta de riquezas materiales, sino por la rectitud en el hablar ('melawak taketzalis'), el cultivo noble de la tierra sin destruirla, la solidaridad irrestricta con los huérfanos y ancianos, y la preservación incondicional de la memoria histórica viva.

La memoria histórica comunitaria custodia testimonios desgarradores y al mismo tiempo de admirable dignidad y resiliencia, singularmente en torno a los sucesos del etnocidio de 1932 en Izalco, Nahuizalco, Tacuba y Santo Domingo de Guzmán. Tras décadas de persecución y silenciamiento forzado en las que hablar náhuat o vestir el refajo tradicional ('kueyit') implicaba riesgo de muerte, los abuelos mantuvieron la lengua en la intimidad de sus hogares mediante la resistencia oral clandestina. Hoy en día, los 'nawataketzanimet' no consideran el náhuat una reliquia arqueológica del pasado, sino un instrumento vivo de soberanía cultural, descolonización pedagógica y afirmación de la identidad cuscatleca frente a la globalización homogeneizante.

En las últimas décadas, iniciativas comunitarias pioneras como la Cuna Náhuat de Santo Domingo de Guzmán y los talleres de revitalización intergeneracional han demostrado que la lengua puede transmitirse con éxito a la niñez salvadoreña. En estos espacios de inmersión temprana, las nanas ancianas no enseñan gramática abstracta en pizarras, sino que cantan, preparan alimentos y relatan cuentos antiguos íntegramente en náhuat, permitiendo que las nuevas generaciones adquieran el idioma con la naturalidad afectiva de una lengua materna viva.

En el ámbito narrativo tradicional destacan relatos como la epopeya de 'Ne Nanawatzin' (el ser humilde que se convierte en sol gracias a su valentía moral), los cuentos del 'Tepestutut' (ave guardiana de las cumbres), las leyendas de los 'Cipitíos' y 'Sihuanabas' analizadas desde su sentido pedagógico moral originario, y los cantos ceremoniales de flor y canto ('in xuchit in kwikat'). Esta unidad equipa al estudiante avanzado con el léxico reverencial, los conectores discursivos complejos ('ikpampa', 'nusan', 'yejjemet', 'ken katka') y las estructuras de narración en pretérito perfecto y modo potencial indispensables para comprender testimonios orales auténticos de los abuelos, recitar poesía tradicional y argumentar disertaciones de alta profundidad etnolingüística sobre el destino y dignidad del pueblo náhuat en el siglo XXI. La memoria de líderes históricos como Feliciano Ama en Izalco y los testimonios orales recopilados por lingüistas de la talla de Alan R. King y Lyle Campbell constituyen un monumento a la dignidad humana. En cada relato de los abuelos palpita la convicción de que la palabra náhuat florecerá perennemente como el árbol de xuchit en la tierra de Cuscatlán. La enseñanza intergeneracional de este saber asegura que los valores de justicia y dignidad comunitaria sigan iluminando el porvenir de El Salvador.`,
    solvedDialogues: [
      {
        id: 'nah_d5_01',
        scenario: 'Un abuelo nawataketzani narra a los jóvenes de la comunidad el significado profundo del Yejyek Nemilis.',
        dialogue: `— Tatan Anastasio: Shik-kakikan nu-consejowan nu-piltzitzin. Ne Yejyek Nemilis tesu kineki tumin weyi, kineki yulpakilis wan respeto.
— Mumachtiani Carlos: Nu-tatan, ¿ken ti-weli ti-k-chikawat ne nemilis ashan kan nochi gente kineki plata?
— Tatan Anastasio: Ti-k-chikawat kan ti-k-tasojtat tu-tal, kan ti-k-chiwat tu-milpa sin veneno wan kan ti-taketzat melawak.
— Mumachtiani Carlos: ¿Ne nawat kitemaka tajpalikayut pal tu-yul?
— Tatan Anastasio: Kemah Carlos. Ne nawat nu-palabra viva de los ancestros. Kan ti-taketzat nawat, ne abuelos nemit iwan tejwan.`,
        grammaticalBreakdown: `1. 'Shik-kakikan nu-consejowan': imperativo plural con sufijo reverencial y posesivo '¡escuchen atentamente mis consejos queridos hijos!'.
2. 'Tesu kineki tumin weyi': negación 'no precisa grandes caudales monetarios' contrapuesta a la armonía interior.
3. 'Ti-k-chikawat': verbo causativo derivado de 'chikawak' (fuerte), significando 'fortalecer y consolidar el buen vivir'.
4. 'Sin veneno': denuncia ecológica contra los agroquímicos industriales que esterilizan los suelos comunales.
5. 'Ne abuelos nemit iwan tejwan': concepción mesoamericana de copresencia perenne de los antepasados a través de la palabra viva.`
      },
      {
        id: 'nah_d5_02',
        scenario: 'Testimonio histórico sobre la preservación clandestina del idioma tras 1932.',
        dialogue: `— Abuela Gregoria: Kan nikatka siwapil tik 1932, tu-gente mikik meyik tik Izalco wan nochi techan timutijket.
— Joven Investigadora: Nanan Gregoria, ¿ken kixtijket ne nawat kan ne autoridades kinekit katka kixpoluat?
— Abuela Gregoria: Tik nu-kal, kan ya anochecía wan ti-tzakuat ne puerta, nu-nanan nech-taketzaya nawat tik secreto.
— Joven Investigadora: Yejjemet te-kikawtket ne idioma pampa kinekit katka ti-mumachtiat ashan.
— Abuela Gregoria: Kemah nu-ishpiltzin. Ashan kan nimitz-kaki ti-taketza nawat tik APP-KUSKAT, nu-yul paki wan nikmati que nuestra lucha no fue en vano.`,
        grammaticalBreakdown: `1. 'Kan nikatka siwapil': cláusula temporal histórica 'cuando yo era muchachita en el año fatídico de 1932'.
2. 'Kinekit katka kixpoluat': perífrasis de pretérito imperfecto 'pretendían exterminar y borrar nuestra lengua'.
3. 'Nech-taketzaya nawat tik secreto': aspecto imperfectivo durativo 'me hablaba en náhuat al abrigo de la intimidad'.
4. 'Te-kikawtket ne idioma': afirmación de resistencia heroica 'jamás abandonaron ni soltaron su idioma materno'.
5. 'Nuestra lucha no fue en vano': aserción bilingüe solemne que vincula la plataforma digital moderna con la pervivencia ancestral.`
      },
      {
        id: 'nah_d5_03',
        scenario: 'Interpretación de una metáfora poética tradicional de flor y canto en el atrio de Witzapan.',
        dialogue: `— Poeta Comunal René: 'In xuchit in kwikat' kineki ki-ijtuwa que la belleza y la sabiduría vuelan juntas como aves sagradas.
— Estudiante María: ¿Kenchik ne abuelos kitokat katka xuchit tik ne oraciones sagradas?
— Poeta Comunal René: Pampa ne xuchit kitemaka aroma wan ne kwikat kitemaka verdad al corazón de la gente.
— Estudiante María: Naja nik-neki ni-k-machtia inin poesía a los niños de la escuela.
— Poeta Comunal René: Shik-chiwa iwan devoción María, pampa el arte náhuat es medicina pura para la memoria de El Salvador.`,
        grammaticalBreakdown: `1. 'In xuchit in kwikat': difrasismo canónico náhuat 'la flor y el canto', metáfora de la poesía, el arte y la alta filosofía.
2. 'Kineki ki-ijtuwa': fórmula hermenéutica 'quiere significar e iluminar el entendimiento'.
3. 'Kitokat katka xuchit': 'sembraban flores en sus plegarias ceremoniales dirigidas al Creador'.
4. 'Kitemaka verdad al corazón': atribución curativa y pedagógica a la declamación poética comunal.
5. 'Medicina pura para la memoria': metáfora terapéutica de la revitalización lingüística descolonizadora.`
      },
      {
        id: 'nah_d5_04',
        scenario: 'Plegaria ceremonial de bendición de las cuatro esquinas de la tierra antes de la siembra comunal.',
        dialogue: `— Guía Espiritual Mateo: Shaltika ne copal ijpak ne tisin wan shik-saludar ne nawi rumbos del mundo.
— Asistente Felipe: Nikan nemi ne copal tutunik wan ne at sesek pal ne ofrenda sagrada.
— Guía Espiritual Mateo: Taltikpak nu-nanan, shik-kaki tu-oración. Te-ti-k-chikat mu-tal con avaricia, ti-k-chikawat con respeto.
— Asistente Felipe: Ma-temu ne at límpida wan ma-pitzawa ne ejekat pacífico sobre nuestra siembra.
— Guía Espiritual Mateo: Kualkat mu-pensamiento Felipe. Ne paz cósmica ya nemi iwan tejwan.`,
        grammaticalBreakdown: `1. 'Shaltika ne copal': imperativo ceremonial '¡sahúma con copal sobre las brasas encendidas!'.
2. 'Ne nawi rumbos del mundo': referencia a los cuatro cuadrantes cardinales mesoamericanos protegidos por energías de la naturaleza.
3. 'Taltikpak nu-nanan': personificación reverencial filial '¡Madre Tierra venerable y generosa!'.
4. 'Te-ti-k-chikat con avaricia': declaración ética de respeto que renuncia a la explotación rapaz del ecosistema.
5. 'Ne paz cósmica ya nemi': proclamación de comunión armoniosa entre el ser humano, el trabajo y el universo.`
      },
      {
        id: 'nah_d5_05',
        scenario: 'Discurso de graduación y entrega de estafeta generacional de un anciano tamachtiani a un joven maestro.',
        dialogue: `— Tamachtiani Mayor: Nu-piltzin Jorge, ashan nimitz-maka ini bastón de mando y de palabra náhuat.
— Joven Tamachtiani Jorge: Lo recibo con lágrimas de emoción y con el compromiso inquebrantable de jamás claudicar.
— Tamachtiani Mayor: Shik-machti ne jóvenes sin miedo, shik-ijtu que el náhuat pipil es orgullo supremo de Cuscatlán.
— Joven Tamachtiani Jorge: Mientras viva en mi pecho el aliento, el náhuat no morirá en Santo Domingo de Guzmán ni en El Salvador.
— Tamachtiani Mayor: ¡Kualkat jiddan! Ne abuelos sonríen desde el firmamento porque la raíz está más viva y fuerte que nunca.`,
        grammaticalBreakdown: `1. 'Nimitz-maka ini bastón': acto solemne de investidura y delegación de autoridad moral y pedagógica.
2. 'Compromiso inquebrantable': juramento de fidelidad a la causa de la revitalización cultural sin vacilaciones.
3. 'Shik-machti ne jóvenes sin miedo': exhortación a superar el trauma histórico de la estigmatización colonial y republicana.
4. 'El náhuat no morirá': promesa solemne de perennidad lingüística sellada ante la asamblea comunal.
5. 'La raíz está más viva y fuerte que nunca': conclusión triunfal que celebra el florecimiento contemporáneo del idioma en APP-KUSKAT.`
      }
    ]
  }
];
