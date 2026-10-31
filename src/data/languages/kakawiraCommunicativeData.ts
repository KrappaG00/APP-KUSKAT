import { CommunicativeUnit } from './types';

export const KAKAWIRA_COMMUNICATIVE_UNITS: CommunicativeUnit[] = [
  {
    id: 'kaka-comm-1',
    topic: 'Saludos y Cortesía',
    title: 'Yam Dumi: Saludos, Tratamiento y Cortesía Comunitaria en Cacaopera',
    substantiveGuide: `El idioma Kakawira (también conocido históricamente como Cacaopera) pertenece a la familia lingüística Misumalpa, estrechamente emparentado con el Matagalpa de Nicaragua y las lenguas Sumo/Mayangna y Miskito de la vertiente atlántica de Centroamérica. A diferencia de las lenguas de la familia uto-azteca (como el Náhuat) o de la familia mayense, el Kakawira presenta una morfología aglutinante y sufijante con características tipológicas particulares, en la cual las fórmulas de saludo y cortesía no son meras convenciones mecánicas, sino actos rituales de reconocimiento recíproco y preservación comunitaria en el departamento de Morazán, El Salvador.

La fórmula principal de saludo diurno es "Yam dumi", construida mediante la raíz adjetival "yam" (bueno, agradable, correcto, sagrado) y el sustantivo "dumi" (día, tiempo luminoso, sol). Esta expresión equivale al saludo castellano de "buenos días" o "buenas tardes", pero en la tradición oral de Cacaopera connota el deseo explícito de que la jornada sea equilibrada y libre de perturbaciones para la persona y su hogar. Al caer la tarde o durante la noche, se emplea "Yam wan", donde "wan" denota la noche, la oscuridad protectora o el hermano del camino, transformándose en una salutación de recogimiento familiar y paz nocturna.

El sistema de tratamiento honorífico se basa estrictamente en la edad, el linaje y el servicio prestado a la comunidad. A los ancianos y guías espirituales se les antepone el título de respeto "Kuka" (para varones mayores venerables o abuelos) o "Yau" (para mujeres mayores sabias o abuelas). Desatender estos títulos honoríficos al saludar a una persona mayor es considerado una grave falta de decoro comunitario. Al ingresar a un hogar o a la Casa Comunal de la Asociación de Desarrollo Indígena Kakawira (ADIK), la persona visitante debe detenerse en el umbral y pronunciar la salutación con voz clara y pausada, esperando la respuesta afirmativa "Suka" (adelante, pase usted, sea bienvenido) antes de cruzar la puerta.

El agradecimiento se formaliza con el término "Asun" o "Asunta", derivado del concepto de reconocimiento de un favor concedido o de un lazo de reciprocidad restablecido. Responder a un favor o saludo con silencio se interpretaba ancestralmente como desprecio hacia el linaje del anfitrión. Para manifestar afirmación se utiliza la partícula "Ai", mientras que la negación se expresa mediante "Mas" (que funciona tanto como adverbio de negación como pronombre negativo indefinido: nada, ninguno). La fórmula de despedida por excelencia es "Marian" (adiós, hasta el nuevo encuentro, buen viaje) o "Marian dumi" (que el día te guarde).

En el plano fonético, el Kakawira de Cacaopera se caracteriza por la ausencia de consonantes africadas laterales como la 'tl' o la 'tz' nahuas, presentando en su lugar un inventario consonántico de oclusivas sordas y sonoras (p, t, k, b, d, g), nasales (m, n), líquidas (l, r) y semivocales (w, y). La entonación de las fórmulas corteses es predominantemente llana, con un leve alargamiento de la vocal final en expresiones exclamativas de bienvenida, reflejando el carácter sereno de las comunidades campesinas de la cuenca alta del río Torola.

Asimismo, la preservaci?n oral en cantones como Junquillo y Cacaopera centro demuestra la resistencia activa de la identidad misumalpa salvadore?a. El uso cotidiano de estas f?rmulas de cortes?a honra la memoria de los abuelos tatas y reafirma los v?nculos sagrados que unen a la asamblea comunal con la cuenca del r?o Torola y las cumbres de Moraz?n.`,
    solvedDialogues: [
      {
        id: 'kaka-dial-1-1',
        title: 'Encuentro matutino en el camino real',
        context: 'Dos comuneros, Marcos y Sebastián, se cruzan al amanecer en el camino hacia la milpa comunal en Cacaopera.',
        turns: [
          {
            speaker: 'Marcos',
            text: 'Yam dumi, alau Sebastián. ¿Man yam ki?',
            translation: 'Buenos días, hermano Sebastián. ¿Estás bien?',
            phonetic: 'yam du-mi, a-la-u se-bas-tyan. ¿man yam ki?'
          },
          {
            speaker: 'Sebastián',
            text: 'Yam dumi, Marcos. Ai, yamki ya. ¿Man kana?',
            translation: 'Buenos días, Marcos. Sí, estoy bien. ¿Y tú cómo vas?',
            phonetic: 'yam du-mi, mar-kos. ay, yam-ki ya. ¿man ka-na?'
          },
          {
            speaker: 'Marcos',
            text: 'Yamki kuyu wira. Asun yar.',
            translation: 'Bien hacia la milpa de maíz. Gracias a la tierra.',
            phonetic: 'yam-ki ku-yu wi-ra. a-sun yar.'
          },
          {
            speaker: 'Sebastián',
            text: 'Marian alau, yam dumi ma.',
            translation: 'Hasta luego hermano, buen día para ti.',
            phonetic: 'ma-ryan a-la-u, yam du-mi ma.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam (bueno) dumi (día), alau (hermano) Sebastián. Man (tú) yam (bien) ki (estativo interrogativo)? / Ai (sí), yamki (bien) ya (estar/ser). / Yamki kuyu (maíz) wira (hacia/árbol). Asun (gracias) yar (tierra). / Marian (adiós) alau (hermano).',
          syntaxPattern: 'Adjetivo + Sustantivo en vocativo. Marcador estativo "-ki" para estados de salud o bienestar.',
          culturalNotes: 'El vocablo "alau" (hermano) se utiliza con cualquier miembro de la comunidad como signo de fraternidad filial.'
        }
      },
      {
        id: 'kaka-dial-1-2',
        title: 'Saludo formal a la anciana sabia del barrio El Calvario',
        context: 'Una joven comunera visita a una anciana artesana para solicitar su consejo.',
        turns: [
          {
            speaker: 'Elena',
            text: 'Yam dumi, Yau Carmen. ¿Suka?',
            translation: 'Buenos días, respetada abuela Carmen. ¿Puedo pasar?',
            phonetic: 'yam du-mi, ya-u kar-men. ¿su-ka?'
          },
          {
            speaker: 'Carmen',
            text: 'Suka binikuna Elena, wara u-ba.',
            translation: 'Adelante niña Elena, entra a la casa.',
            phonetic: 'su-ka bi-ni-ku-na e-le-na, wa-ra u-ba.'
          },
          {
            speaker: 'Elena',
            text: 'Asun Yau. Yau yamki dumi.',
            translation: 'Gracias abuela. Que tengas un hermoso día.',
            phonetic: 'a-sun ya-u. ya-u yam-ki du-mi.'
          },
          {
            speaker: 'Carmen',
            text: 'Ai, suka daira li am.',
            translation: 'Sí, adelante, toma agua fresca.',
            phonetic: 'ay, su-ka day-ra li am.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi (buenos días), Yau (abuela/honorífico femenino). Suka (pase/adelante)? / Suka binikuna (niña/joven) Elena, wara (entrar/venir) u-ba (casa-en). / Asun (gracias) Yau (abuela). / Ai (sí), suka (pasa) daira (beber) li (agua) am (fresca).',
          syntaxPattern: 'Uso de posposición locativa "-ba" (en/hacia el interior de) tras el sustantivo "u" (casa).',
          culturalNotes: 'Ofrecer "li am" (agua fresca de tinaja) es el primer deber sagrado de bienvenida en Morazán.'
        }
      },
      {
        id: 'kaka-dial-1-3',
        title: 'Despedida en la sede comunitaria ADIK',
        context: 'Reunión de la Asociación de Desarrollo Indígena Kakawira al concluir la jornada de trabajo.',
        turns: [
          {
            speaker: 'Alonso',
            text: 'Ura tarka yam. Marian kuka tata.',
            translation: 'Nuestro encuentro ha sido bueno. Adiós padre respetado.',
            phonetic: 'u-ra tar-ka yam. ma-ryan ku-ka ta-ta.'
          },
          {
            speaker: 'Tata Miguel',
            text: 'Marian Alonso. Ma yam wara dumi.',
            translation: 'Hasta luego Alonso. Que marches con bien hoy.',
            phonetic: 'ma-ryan a-lon-so. ma yam wa-ra du-mi.'
          },
          {
            speaker: 'Alonso',
            text: 'Asun tata, yam wan man-ri.',
            translation: 'Gracias padre, buena noche para ti.',
            phonetic: 'a-sun ta-ta, yam wan man-ri.'
          },
          {
            speaker: 'Tata Miguel',
            text: 'Ai, yam wan winakirika.',
            translation: 'Sí, buena noche a toda la comunidad.',
            phonetic: 'ay, yam wan wi-na-ki-ri-ka.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Ura (nuestro) tarka (palabra/asunto) yam (bueno). Marian (adiós) kuka (abuelo) tata (padre). / Marian Alonso. Ma (tú) yam (bien) wara (caminar/ir) dumi (día). / Asun (gracias) tata, yam wan (buena noche) man-ri (para ti). / Ai (sí), yam wan winakirika (gente/pueblo).',
          syntaxPattern: 'Pronombre posesivo antepuesto "ura" (nuestro), pronombre con sufijo directivo "man-ri" (hacia ti).',
          culturalNotes: 'Tata Miguel Amaya fue uno de los más insignes líderes del rescate etnográfico de Cacaopera en los años 1970-1990.'
        }
      },
      {
        id: 'kaka-dial-1-4',
        title: 'Pidiendo permiso para cruzar un terreno comunal',
        context: 'Un caminante solicita paso respetuoso por el lindero de una parcela de cultivo.',
        turns: [
          {
            speaker: 'Viajero',
            text: 'Yam dumi. ¿Suka yar man-ba wara?',
            translation: 'Buenos días. ¿Permiso para cruzar por tu tierra?',
            phonetic: 'yam du-mi. ¿su-ka yar man-ba wa-ra?'
          },
          {
            speaker: 'Parcelero',
            text: 'Suka alau, wara wira mas yar.',
            translation: 'Pase hermano, camine por la senda de la tierra.',
            phonetic: 'su-ka a-la-u, wa-ra wi-ra mas yar.'
          },
          {
            speaker: 'Viajero',
            text: 'Asun alau, mas dumi man.',
            translation: 'Muchas gracias hermano, que la paz te acompañe.',
            phonetic: 'a-sun a-la-u, mas du-mi man.'
          },
          {
            speaker: 'Parcelero',
            text: 'Yam wara, alau.',
            translation: 'Buen camino, hermano.',
            phonetic: 'yam wa-ra, a-la-u.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi. Suka (permiso) yar (tierra) man-ba (tu-en) wara (caminar)? / Suka alau (hermano), wara wira (sendero/árbol) mas yar (tierra serena). / Asun alau, mas dumi man (mucha paz para ti). / Yam wara (buen caminar).',
          syntaxPattern: 'Uso de "wara" tanto para verbo de desplazamiento intransitivo (caminar) como nominalización del sendero o andar.',
          culturalNotes: 'Cruzar tierras ajenas sin pronunciar "suka" vulnera el código de respeto territorial Kakawira.'
        }
      },
      {
        id: 'kaka-dial-1-5',
        title: 'Agradecimiento por alimentos al mediodía',
        context: 'Al concluir una faena comunal, los trabajadores agradecen a la cocinera que preparó los tamales y el atol.',
        turns: [
          {
            speaker: 'Trabajador',
            text: 'Asun nana, kuyu tamal yam.',
            translation: 'Muchas gracias madre, el tamal de maíz estuvo excelente.',
            phonetic: 'a-sun na-na, ku-yu ta-mal yam.'
          },
          {
            speaker: 'Cocinera',
            text: 'Ai binikuna, daira li kuyu.',
            translation: 'De nada hijos, tomen agua de maíz dulce.',
            phonetic: 'ay bi-ni-ku-na, day-ra li ku-yu.'
          },
          {
            speaker: 'Trabajador',
            text: 'Li kuyu yamki daira.',
            translation: 'El atol de maíz es muy reconfortante de beber.',
            phonetic: 'li ku-yu yam-ki day-ra.'
          },
          {
            speaker: 'Cocinera',
            text: 'Yamki ya, ura winakirika kuyu.',
            translation: 'Qué bien, es el maíz de nuestro pueblo.',
            phonetic: 'yam-ki ya, u-ra wi-na-ki-ri-ka ku-yu.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Asun (gracias) nana (madre), kuyu (maíz) tamal yam (bueno/delicioso). / Ai (sí/de nada) binikuna (hijos/jóvenes), daira (beber) li kuyu (bebida/atol de maíz). / Li kuyu yamki (bueno/sabroso) daira (beber). / Yamki ya (está bien), ura (nuestro) winakirika (gente/pueblo) kuyu (maíz).',
          syntaxPattern: 'Sustantivo clasificador "kuyu" antepuesto a alimentos derivados (tamal, atol).',
          culturalNotes: 'El alimento comunal en Cacaopera simboliza la redistribución equitativa del esfuerzo colectivo.'
        }
      }
    ]
  },
  {
    id: 'kaka-comm-2',
    topic: 'Familia y Comunidad',
    title: 'Nana, Tata wan Binikuna: Núcleo Familiar y Linaje Kakawira',
    substantiveGuide: `La estructura de parentesco en la comunidad Kakawira de Cacaopera conserva profundas raíces en el sistema social de los pueblos de filiación Misumalpa. En este entramado, la unidad doméstica ("u", casa) no está compuesta únicamente por la familia nuclear moderna, sino por un linaje extendido ("winakirika") en el que cohabitan abuelos, padres, hijos, tíos y primos, organizados en torno a la solidaridad económica, el cultivo de la milpa y la custodia de las tradiciones rituales patronales.

Los términos cardinales del parentesco Kakawira son: "Tata" (padre, progenitor, y por extensión de respeto, cualquier varón adulto de la comunidad que ejerce autoridad moral), "Nana" (madre, progenitora, figura de cohesión nutricional y guardiana de las semillas sagradas), "Alau" (hermano o pariente varón de la misma generación), "Walau" (hermana o parienta mujer de la misma generación), "Binikuna" (hijo, descendiente, infante; pluralizado morfológicamente mediante el sufijo colectivo Misumalpan "-kuna"), "Kuka" (abuelo o ancestro masculino) y "Yau" (abuela o ancestra femenina).

La posesión nominal en Kakawira se articula mediante prefijos pronominales fijados a la raíz del término de parentesco o posesión inalienable: "i-" para la primera persona singular ("i-tata", mi padre; "i-nana", mi madre; "i-u", mi casa); "ma-" para la segunda persona singular ("ma-tata", tu padre; "ma-binikuna", tu hijo); "a-" para la tercera persona singular ("a-nana", su madre; "a-walau", su hermana); y "ura-" para la primera persona del plural inclusivo ("ura-winakirika", nuestro pueblo/nuestra gente; "ura-yar", nuestra tierra común). El uso incorrecto del prefijo posesivo despersonaliza el lazo y se considera un distanciamiento afectivo.

En la vida comunitaria tradicional de Cacaopera, el trabajo no se concibe como una transacción monetaria aislada, sino bajo la modalidad de ayuda mutua ("gueta" o faena comunal). Cuando una familia necesita techar su vivienda ("u"), limpiar el frijolar o sembrar la milpa antes de la primera lluvia de mayo, convoca a los "alaukuna" (hermanos del pueblo). La familia anfitriona no paga un salario monetario, sino que provee los alimentos del día (tamales de maíz "kuyu", frijoles recién cocidos "muti" y caldo de gallina) y queda en deuda moral de reciprocar la faena cuando otro vecino lo solicite.

El papel formativo de los "kukakuna" y "yaukuna" (los abuelos y abuelas) es central en la pedagogía oral Kakawira. Son ellos quienes transmiten los relatos de la fundación de Cacaopera, la toponimia de los cerros tutelares circundantes, la memoria del río Torola y las técnicas artesanales del telar de cintura y el desgranado del maíz. El diálogo intergeneracional no se interrumpe: los jóvenes escuchan sentados en petates en el corredor de la casa ("u-ba") mientras los mayores desgranan mazorcas y comparten las enseñanzas sobre cómo vivir con respeto ("yam") ante la tierra y los semejantes.

En el ?mbito de la transmisi?n intergeneracional dentro del solar campesino, las ancianas sabias ('Yau') desempe?an un rol protag?nico en la ense?anza de las narrativas m?ticas y las t?cnicas culinarias del ma?z. Alrededor del fog?n, las ni?as y ni?os aprenden los nombres de los parentescos, las normas de respeto hacia los linajes vecinos y las canciones rituales que protegen a los reci?n nacidos. Esta s?lida estructura afectiva y cl?nica ha constituido el baluarte hist?rico primordial que resguard? la supervivencia f?sica y cultural del pueblo Kakawira frente a las presiones asimilacionistas externas.`,
    solvedDialogues: [
      {
        id: 'kaka-dial-2-1',
        title: 'Presentación de los hijos a las autoridades comunitarias',
        context: 'Un padre campesino, Tomás, presenta a sus dos hijos jóvenes ante un anciano del consejo de mayores.',
        turns: [
          {
            speaker: 'Tomás',
            text: 'Yam dumi, Kuka. Man wina i-binikuna.',
            translation: 'Buenos días, abuelo. Aquí tienes a mis hijos.',
            phonetic: 'yam du-mi, ku-ka. man wi-na i-bi-ni-ku-na.'
          },
          {
            speaker: 'Kuka',
            text: 'Yam dumi Tomás. ¿A-duka kana ki?',
            translation: 'Buenos días Tomás. ¿Cuáles son sus nombres?',
            phonetic: 'yam du-mi to-mas. ¿a-du-ka ka-na ki?'
          },
          {
            speaker: 'Tomás',
            text: 'Binikuna alau Manuel, binikuna walau Rosa.',
            translation: 'El hijo varón es Manuel, la hija mujer es Rosa.',
            phonetic: 'bi-ni-ku-na a-la-u ma-nwel, bi-ni-ku-na wa-la-u ro-sa.'
          },
          {
            speaker: 'Kuka',
            text: 'Yam binikuna. Ma-tata wara yam winakirika.',
            translation: 'Sean bienvenidos niños. Su padre camina honradamente en el pueblo.',
            phonetic: 'yam bi-ni-ku-na. ma-ta-ta wa-ra yam wi-na-ki-ri-ka.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi, Kuka. Man (tú) wina (ver/tener) i-binikuna (mi-hijos). / A-duka (su-nombre) kana (cuál) ki (interrogativo)? / Binikuna alau (hijo varón), binikuna walau (hija mujer). / Ma-tata (su padre) wara (camina) yam (bien) winakirika (en el pueblo).',
          syntaxPattern: 'Prefijo posesivo "i-" (primera persona) y "ma-" (segunda persona); distinción de género mediante "alau" (masculino) y "walau" (femenino).',
          culturalNotes: 'En Cacaopera la presentación formal de los hijos ante los ancianos del concejo consagra su pertenencia al linaje comunal.'
        }
      },
      {
        id: 'kaka-dial-2-2',
        title: 'Coordinando la ayuda mutua (gueta) para la siembra',
        context: 'Dos jefes de familia conversan sobre la jornada de siembra colectiva de frijoles.',
        turns: [
          {
            speaker: 'Felipe',
            text: '¿Alau Pedro, wara gueta yar-ba muti?',
            translation: '¿Hermano Pedro, vendrás a la faena comunal a sembrar frijol?',
            phonetic: '¿a-la-u pe-dro, wa-ra ge-ta yar-ba mu-ti?'
          },
          {
            speaker: 'Pedro',
            text: 'Ai Felipe. I-alaukuna wara dumi yara.',
            translation: 'Sí Felipe. Mis hermanos irán temprano al amanecer.',
            phonetic: 'ay fe-li-pe. i-a-la-u-ku-na wa-ra du-mi ya-ra.'
          },
          {
            speaker: 'Felipe',
            text: 'Asun alau. I-nana yapa tamal kuyu.',
            translation: 'Gracias hermano. Mi madre preparará tamales de maíz para todos.',
            phonetic: 'a-sun a-la-u. i-na-na ya-pa ta-mal ku-yu.'
          },
          {
            speaker: 'Pedro',
            text: 'Yamki. Ura winakirika muti yara yam.',
            translation: 'Excelente. El frijol de nuestro pueblo germinará con bien.',
            phonetic: 'yam-ki. u-ra wi-na-ki-ri-ka mu-ti ya-ra yam.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Alau Pedro, wara (venir/ir) gueta (faena) yar-ba (en la tierra) muti (frijol)? / Ai, i-alaukuna (mis hermanos) wara dumi yara (día sol/amanecer). / Asun alau. I-nana (mi madre) yapa (hacer/cocinar) tamal kuyu (maíz). / Ura (nuestro) winakirika muti (frijol de la comunidad) yara (brotar) yam (bien).',
          syntaxPattern: 'Pluralizador colectivo "-kuna" aplicado a "alau" -> "alaukuna" (hermanos/parientes). Posesivo colectivo "ura" (nuestro).',
          culturalNotes: 'La "gueta" de siembra asegura que ninguna familia quede rezagada ante la llegada irregular de las lluvias en el oriente salvadoreño.'
        }
      },
      {
        id: 'kaka-dial-2-3',
        title: 'El consejo de la abuela en el fogón familiar',
        context: 'Una abuela instruye a su nieta en el desgranado del maíz y la serenidad de espíritu.',
        turns: [
          {
            speaker: 'Yau',
            text: 'Binikuna, wina kuyu amba yam.',
            translation: 'Hija mía, mira con atención cómo se escoge el buen maíz.',
            phonetic: 'bi-ni-ku-na, wi-na ku-yu am-ba yam.'
          },
          {
            speaker: 'Nieta',
            text: '¿Kana Yau? Kuyu pura mas yam.',
            translation: '¿Cómo abuelita? El grano manchado no sirve.',
            phonetic: '¿ka-na ya-u? ku-yu pu-ra mas yam.'
          },
          {
            speaker: 'Yau',
            text: 'Ai. Kuyu yam dumi-ba yar wara.',
            translation: 'Así es. El maíz sano regresa a la tierra el próximo ciclo.',
            phonetic: 'ay. ku-yu yam du-mi-ba yar wa-ra.'
          },
          {
            speaker: 'Nieta',
            text: 'Asun Yau. I-tata yapa yar yam.',
            translation: 'Gracias abuela. Mi papá cuidará muy bien esa tierra.',
            phonetic: 'a-sun ya-u. i-ta-ta ya-pa yar yam.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Binikuna, wina (mirar) kuyu (maíz) amba (semilla) yam (bueno). / Kana (cómo) Yau? Kuyu pura (oscuro/podrido) mas yam (no es bueno). / Ai. Kuyu yam dumi-ba (en el día/futuro) yar (tierra) wara (irá). / Asun Yau. I-tata (mi padre) yapa (cuidar/labrar) yar yam (tierra bien).',
          syntaxPattern: 'Negación atributiva "mas yam" (no bueno/inadecuado). Verbo de observación "wina" como imperativo pedagógico.',
          culturalNotes: 'El conocimiento de la selección de granos en Mesoamérica y el área intermedia recae primordialmente en la sabiduría femenina anciana.'
        }
      },
      {
        id: 'kaka-dial-2-4',
        title: 'Distribución de responsabilidades en la faena doméstica',
        context: 'Madre e hijo conversan al regresar de acarrear leña seca del cerro.',
        turns: [
          {
            speaker: 'Hijo',
            text: 'Nana, wina wirika u-ba ya.',
            translation: 'Madre, mira la leña que ya traje a la casa.',
            phonetic: 'na-na, wi-na wi-ri-ka u-ba ya.'
          },
          {
            speaker: 'Nana',
            text: 'Yam binikuna. Suka daira li am.',
            translation: 'Bien hecho hijo. Pasa a tomar agua fresca.',
            phonetic: 'yam bi-ni-ku-na. su-ka day-ra li am.'
          },
          {
            speaker: 'Hijo',
            text: '¿I-walau kana wara?',
            translation: '¿Y mi hermana adónde fue?',
            phonetic: '¿i-wa-la-u ka-na wa-ra?'
          },
          {
            speaker: 'Nana',
            text: 'A-walau wara li Torola-ba.',
            translation: 'Tu hermana fue al río Torola a traer tinajas de agua.',
            phonetic: 'a-wa-la-u wa-ra li to-ro-la-ba.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Nana, wina wirika (leña/madera) u-ba (casa-en) ya (ya/aquí). / Yam binikuna. Suka daira (beber) li am (agua fresca). / I-walau (mi hermana) kana (dónde) wara (fue)? / A-walau (su hermana) wara li Torola-ba (río Torola-hacia).',
          syntaxPattern: 'Interrogativo locativo "kana" (dónde) combinado con verbo de movimiento "wara". Prefijo posesivo "a-" (tercera persona).',
          culturalNotes: 'El acarreo de agua del río Torola era una actividad formativa comunitaria donde las mujeres socializaban y compartían noticias.'
        }
      },
      {
        id: 'kaka-dial-2-5',
        title: 'Cuidado de los abuelos enfermos en la comunidad',
        context: 'Un sobrino visita a su tío para acordar los cuidados de su abuelo venerable.',
        turns: [
          {
            speaker: 'Sobrino',
            text: 'Yam wan tata. ¿Kana ki ura kuka?',
            translation: 'Buenas noches tío. ¿Cómo sigue nuestro abuelo?',
            phonetic: 'yam wan ta-ta. ¿ka-na ki u-ra ku-ka?'
          },
          {
            speaker: 'Tío',
            text: 'Yamki ya. Daira wirika li amba.',
            translation: 'Ya está mejor. Ha estado bebiendo medicina hervida de raíces.',
            phonetic: 'yam-ki ya. day-ra wi-ri-ka li am-ba.'
          },
          {
            speaker: 'Sobrino',
            text: 'Asun Dios. I-nana wara kuyu tamal a-ri.',
            translation: 'Gracias a Dios. Mi madre le traerá atol de maíz tierno.',
            phonetic: 'a-sun dyo-s. i-na-na wa-ra ku-yu ta-mal a-ri.'
          },
          {
            speaker: 'Tío',
            text: 'Yam alau. Ura winakirika kuka yam.',
            translation: 'Qué noble, hermano. Nuestro pueblo cuida a sus ancianos con amor.',
            phonetic: 'yam a-la-u. u-ra wi-na-ki-ri-ka ku-ka yam.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam wan tata. Kana ki (cómo está) ura (nuestro) kuka (abuelo)? / Yamki ya (ya está bien). Daira (bebió) wirika li amba (medicina de hierbas de agua). / Asun Dios. I-nana (mi madre) wara kuyu tamal a-ri (para él). / Yam alau. Ura winakirika kuka yam (cuida con bien a los abuelos).',
          syntaxPattern: 'Sufijo dativo/benefactivo "-ri" adjunto a pronombre de tercera persona "a-ri" (para él / a él).',
          culturalNotes: 'El respeto y cuidado domiciliario de los ancianos es el precepto fundamental de la ética social Kakawira.'
        }
      }
    ]
  },
  {
    id: 'kaka-comm-3',
    topic: 'Cosmovisión y Narrativa',
    title: 'La Danza de los Emplumados: Ritualidad, Música y Memoria Sagrada',
    substantiveGuide: `La manifestación cultural y lingüística más insigne de la identidad Kakawira de Cacaopera es la "Danza de los Emplumados", celebrada tradicionalmente en honor a la Virgen del Tránsito y al patrono del pueblo en el mes de agosto. Esta danza ritual, única en El Salvador y con parentesco directo con ceremonias de origen Misumalpan y circumcaribeño, es un complejo sistema de comunicación simbólica, música ceremonial y transmisión de memoria histórica ancestral que resistió siglos de marginación cultural.

Los danzantes ("wali" o bailarines sagrados) portan imponentes coronas o penachos de plumas multicolores de guacamaya y pavo ("wirika tumpa"), adornadas con espejos redondos que reflejan los rayos del sol ("yara") y cintas de colores brillantes que simbolizan el arcoíris y la fecundidad de la lluvia sobre la cuenca del río Torola. Cada paso de la danza no es una exhibición coreográfica profana, sino una plegaria corporal en la que los pies golpean rítmicamente el suelo para comunicarse con los ancestros ("tarka", los antiguos antepasados enterrados bajo la tierra consagrada).

El acompañamiento sonoro es ejecutado exclusivamente por dos instrumentos de raíz prehispánica: el pito de carrizo (flauta de caña con embocadura de cera) y el tambor cilíndrico de cuero de venado ("tumpa"). El ejecutante del pito es reconocido como el maestro mayor de la melodía ritual, interpretando sones ancestrales que evocan el canto de las aves de la montaña sagrada ("wirika") y el sonido del viento que desciende de los cerros de Morazán. Antes de iniciar la danza en el atrio de la iglesia colonial de Cacaopera, los mayordomos y danzantes consagran el espacio mediante invocaciones breves y rezos comunitarios.

Lingüísticamente, la danza articulaba fórmulas de recitado oral Kakawira donde se nombraban las cuatro direcciones del mundo, los espíritus tutelares del monte y la alianza de los barrios tradicionales de Cacaopera (El Calvario y San José). Aunque la castellanización forzosa del siglo XX redujo el uso cotidiano de la lengua, los ancianos y miembros de ADIK mantuvieron viva la terminología técnica de la danza: "wali" (el danzante), "tumpa" (el tocado sagrado y el tambor de resonancia), "wirika" (la pluma sagrada del ave silvestre), "yara" (el sol tutelar que activa los espejos del penacho) y "mas" (la serenidad ceremonial con la que se debe bailar sin manifestar cansancio profano).

Participar en la Danza de los Emplumados es considerado un deber de honor generacional. Los jóvenes que asumen el papel de danzantes son instruidos durante meses por los ancianos sobre la disciplina corporal, la abstinencia de rencores comunitarios y la devoción hacia la memoria de los abuelos. De este modo, la danza funciona como el crisol en el que la lengua, el cuerpo y el espíritu del pueblo Kakawira afirman su continuidad histórica en el territorio cuscatleco.

El r?o Torola ('Ura Torola') y los macizos monta?osos que circundan a Cacaopera son considerados entidades vivas dotadas de esp?ritu tutelar y memoria. Antes de emprender las faenas de roza y siembra de la milpa comunal, los ancianos y agricultores realizan rogativas silenciosas solicitando permiso a los guardianes del agua y de la tierra. Este profundo respeto bio?tico evita la tala indiscriminada y proh?be contaminar las fuentes de agua dulce, garantizando la sostenibilidad ecol?gica de la cuenca y preservando la fertilidad de las laderas moraz?nicas para las generaciones venideras.`,
    solvedDialogues: [
      {
        id: 'kaka-dial-3-1',
        title: 'Preparación de los penachos de plumas en la casa del mayordomo',
        context: 'Un danzante mayor instruye a un joven principiante en la colocación de las plumas sagradas en el penacho ritual.',
        turns: [
          {
            speaker: 'Maestro',
            text: 'Wina wali joven, wirika tumpa yam yapa.',
            translation: 'Mira joven danzante, hay que preparar con devoción el penacho de plumas.',
            phonetic: 'wi-na wa-li jo-ven, wi-ri-ka tum-pa yam ya-pa.'
          },
          {
            speaker: 'Joven',
            text: '¿Kana wirika tata? ¿Yara wina?',
            translation: '¿Cómo van las plumas, padre maestro? ¿Orientadas al sol?',
            phonetic: '¿ka-na wi-ri-ka ta-ta? ¿ya-ra wi-na?'
          },
          {
            speaker: 'Maestro',
            text: 'Ai. Yara wina wirika, yar wina tumpa.',
            translation: 'Sí. Las plumas miran al sol, la base mira a la tierra.',
            phonetic: 'ay. ya-ra wi-na wi-ri-ka, yar wi-na tum-pa.'
          },
          {
            speaker: 'Joven',
            text: 'Asun maestro. Wali wara yam tarka.',
            translation: 'Gracias maestro. Bailaré con honor por nuestros ancestros.',
            phonetic: 'a-sun ma-es-tro. wa-li wa-ra yam tar-ka.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Wina (mira) wali (danzante) joven, wirika tumpa (penacho de plumas de pájaro) yam yapa (hacer/armar bien). / Kana (cómo) wirika tata? Yara (sol) wina (mira/apunta)? / Ai (sí). Yara wina wirika, yar (tierra) wina tumpa (base/tambor). / Asun maestro. Wali wara (danzaré) yam (bien/respeto) tarka (palabra/memoria antigua).',
          syntaxPattern: 'Uso de "wina" como verbo direccional (apuntar hacia, estar orientado hacia) además de su acepción visual (mirar).',
          culturalNotes: 'El penacho ceremonial representa la unión cosmológica entre la bóveda celeste solar ("yara") y el suelo terrenal ancestral ("yar").'
        }
      },
      {
        id: 'kaka-dial-3-2',
        title: 'Afinación del pito de carrizo y el tambor de venado',
        context: 'Los dos músicos tradicionales templan el cuero del tambor junto a una pequeña brasa antes de iniciar la procesión.',
        turns: [
          {
            speaker: 'Pitero',
            text: 'Tumpa tata, ¿li mas tumpa yar-ba?',
            translation: 'Maestro del tambor, ¿ya secó el cuero del tambor en el fuego?',
            phonetic: 'tum-pa ta-ta, ¿li mas tum-pa yar-ba?'
          },
          {
            speaker: 'Tamborero',
            text: 'Ai, tumpa yam ki son daira.',
            translation: 'Sí, el tambor ya tiene buen temple para sonar fuerte.',
            phonetic: 'ay, tum-pa yam ki son day-ra.'
          },
          {
            speaker: 'Pitero',
            text: 'Wina pito wirika, ura son tarka.',
            translation: 'Escucha el pito de carrizo de monte, es el son de nuestros abuelos.',
            phonetic: 'wi-na pi-to wi-ri-ka, u-ra son tar-ka.'
          },
          {
            speaker: 'Tamborero',
            text: 'Yamki. Wali wara dumi yara.',
            translation: 'Maravilloso. Los danzantes saldrán con la luz del día.',
            phonetic: 'yam-ki. wa-li wa-ra du-mi ya-ra.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Tumpa (tambor) tata (padre/maestro), li mas (sin agua/seco) tumpa yar-ba (en el suelo/brasa)? / Ai, tumpa yam ki (está bueno) son daira (hacer sonido). / Wina (escucha/mira) pito wirika (flauta de carrizo vegetal), ura son tarka (nuestro son de los abuelos). / Yamki. Wali wara (los danzantes van) dumi yara (a la luz plena del sol).',
          syntaxPattern: 'Locución preposicional negativa "li mas" (sin agua / seco / templado). Nominalización de instrumento mediante "wirika" (origen vegetal silvestre).',
          culturalNotes: 'El calor del fuego ceremonial es imprescindible para tensar el parche de cuero de venado virgen en Cacaopera.'
        }
      },
      {
        id: 'kaka-dial-3-3',
        title: 'Bendición de los danzantes ante el altar mayor',
        context: 'El mayordomo de la fiesta pronuncia palabras de bendición a los ocho danzantes arrodillados.',
        turns: [
          {
            speaker: 'Mayordomo',
            text: 'Wali winakirika, Dios wan yara ma yam yapa.',
            translation: 'Danzantes de nuestro pueblo, que Dios y el sol los colmen de fuerza.',
            phonetic: 'wa-li wi-na-ki-ri-ka, dyo-s wan ya-ra ma yam ya-pa.'
          },
          {
            speaker: 'Danzante Mayor',
            text: 'Asun tata mayordomo. Ura wali mas wara yam.',
            translation: 'Gracias señor mayordomo. Nuestra danza no flaqueará en la fe.',
            phonetic: 'a-sun ta-ta ma-yor-do-mo. u-ra wa-li mas wa-ra yam.'
          },
          {
            speaker: 'Mayordomo',
            text: 'Yam wara atrio-ba. Winakirika wina.',
            translation: 'Salgan al atrio sagrado. El pueblo entero los espera y admira.',
            phonetic: 'yam wa-ra a-tryo-ba. wi-na-ki-ri-ka wi-na.'
          },
          {
            speaker: 'Danzante Mayor',
            text: 'Ai tata, tarka Cacaopera wara.',
            translation: 'Sí señor, la voz y el alma de Cacaopera vivirán por siempre.',
            phonetic: 'ay ta-ta, tar-ka ka-ka-o-pe-ra wa-ra.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Wali (danzantes) winakirika (de la comunidad), Dios wan (y) yara (sol) ma (a ustedes) yam yapa (hagan bien/fortalezcan). / Asun tata mayordomo. Ura wali (nuestra danza) mas wara yam (irá siempre bien con tesón). / Yam wara (marchen con bien) atrio-ba (hacia el atrio). Winakirika (el pueblo) wina (mira). / Ai tata, tarka (palabra/memoria) Cacaopera wara (avanza/perdura).',
          syntaxPattern: 'Conjunción copulativa "wan" (y) uniendo entidades celestes ("Dios wan yara").',
          culturalNotes: 'El sincretismo de Cacaopera vincula la devoción mariana con las fuerzas primordiales del cosmos mesoamericano y chibcha/misumalpa.'
        }
      },
      {
        id: 'kaka-dial-3-4',
        title: 'El significado de los espejos en la corona de plumas',
        context: 'Un niño pregunta a su hermano mayor por qué llevan espejos circulares en la frente del tocado.',
        turns: [
          {
            speaker: 'Niño',
            text: '¿Alau, kana ki espejo wirika tumpa-ba?',
            translation: '¿Hermano, qué significa el espejo en tu corona de plumas?',
            phonetic: '¿a-la-u, ka-na ki es-pe-jo wi-ri-ka tum-pa-ba?'
          },
          {
            speaker: 'Danzante',
            text: 'Yara wina, binikuna. Espejo yapa yara li.',
            translation: 'Refleja el sol, hermanito. El espejo hace resplandecer la luz sagrada.',
            phonetic: 'ya-ra wi-na, bi-ni-ku-na. es-pe-jo ya-pa ya-ra li.'
          },
          {
            speaker: 'Niño',
            text: '¿Yar-ba mas wina espejo?',
            translation: '¿Y el espejo no mira hacia abajo a la tierra?',
            phonetic: '¿yar-ba mas wi-na es-pe-jo?'
          },
          {
            speaker: 'Danzante',
            text: 'Ai, yara wina tarka ura kuka.',
            translation: 'Así es, mira al sol para alumbrar el camino que dejaron los abuelos.',
            phonetic: 'ay, ya-ra wi-na tar-ka u-ra ku-ka.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Alau, kana ki (qué es/por qué) espejo wirika tumpa-ba (en el penacho de plumas)? / Yara wina (mira al sol), binikuna. Espejo yapa (hace/produce) yara li (luz/resplandor del sol). / Yar-ba (a la tierra) mas wina (no mira) espejo? / Ai, yara wina tarka (memoria) ura kuka (de nuestros abuelos).',
          syntaxPattern: 'Construcción causativa "yapa" + sustantivo ("yapa yara li" = generar resplandor lumínico).',
          culturalNotes: 'Los espejos eran considerados portales cósmicos que disipaban cualquier sombra de daño o envidia en el recinto de baile.'
        }
      },
      {
        id: 'kaka-dial-3-5',
        title: 'Descanso de los danzantes bajo la ceiba del pueblo',
        context: 'Tras bailar durante cuatro horas bajo el sol, los danzantes comparten un cántaro de chicha comunal.',
        turns: [
          {
            speaker: 'Danzante 1',
            text: 'Yam wali alaukuna. Dumi yapa yar calor.',
            translation: 'Hermosa danza, hermanos. El sol de hoy calentó con fuerza la tierra.',
            phonetic: 'yam wa-li a-la-u-ku-na. du-mi ya-pa yar ka-lor.'
          },
          {
            speaker: 'Danzante 2',
            text: 'Ai alau. Daira li kuyu am wirika u-ba.',
            translation: 'Sí hermano. Bebamos atol fresco a la sombra del gran árbol.',
            phonetic: 'ay a-la-u. day-ra li ku-yu am wi-ri-ka u-ba.'
          },
          {
            speaker: 'Danzante 1',
            text: 'Li kuyu yamki daira. Ura kuka yam.',
            translation: 'El atol frío revive las fuerzas. Nuestros abuelos nos bendicen.',
            phonetic: 'li ku-yu yam-ki day-ra. u-ra ku-ka yam.'
          },
          {
            speaker: 'Danzante 2',
            text: 'Marian dumi, alau. Tarka wali mas wara.',
            translation: 'Gloria al día hermano. La danza de nuestros abuelos jamás morirá.',
            phonetic: 'ma-ryan du-mi, a-la-u. tar-ka wa-li mas wa-ra.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam wali alaukuna (hermanos danzantes). Dumi yapa (el sol produjo) yar calor (calor en la tierra). / Ai alau. Daira li kuyu am (beber atol frío) wirika u-ba (árbol casa-en/bajo la sombra del árbol). / Li kuyu yamki daira. Ura kuka yam (nuestros abuelos están contentos). / Marian dumi, alau. Tarka wali (la tradición de la danza) mas wara (nunca perecerá).',
          syntaxPattern: 'Uso metafórico de "wirika u" (casa de árbol / follaje / sombra) con posposición "-ba".',
          culturalNotes: 'El descanso bajo los árboles sagrados de la plaza sellaba el pacto de comunión entre los danzantes y el vecindario.'
        }
      }
    ]
  },
  {
    id: 'kaka-comm-4',
    topic: 'Entorno Natural y Agricultura',
    title: 'Yar, Li Torola wan Kuyu: La Tierra, el Río Sagrado y la Milpa',
    substantiveGuide: `Para la comunidad indígena Kakawira asentada en las estribaciones meridionales de la cordillera de Nahuaterique, en el norte de Morazán, la relación con el entorno natural ("yar", la tierra y el suelo fértil) y las fuentes hídricas ("li", el agua viva) está impregnada de un profundo respeto ético y ecológico. El territorio no es visto como una posesión mercantil susceptible de explotación indiscriminada, sino como una madre nutricia que exige reciprocidad, cuidado estacional y respeto en cada fase del ciclo agrícola.

El elemento hidrográfico fundamental del pueblo Kakawira es el río Torola ("Li Torola"). Este caudal, que serpentea entre cañones rocosos y valles templados, ha sido históricamente la arteria de subsistencia, pesca de camarones y peces de río, aprovisionamiento doméstico y bautismo de generaciones. En la cosmovisión local, el río Torola posee una presencia tutelar viviente; arrojar basuras, contaminar sus pozas con venenos vegetales sin autorización comunal o gritar sin mesura en sus orillas se consideraba una ofensa que podía hacer que el río "se enojara" y retirara su abundancia o generara crecientes destructivas durante los temporales del invierno.

La agricultura de temporal se organiza alrededor del policultivo ancestral de la milpa: el maíz ("kuyu"), el frijol de mata o de guía ("muti"), la calabaza o ayote y el maicillo o sorgo tradicional. La siembra del maíz ("kuyu") se inicia formalmente a principios de mayo, con la llegada de las primeras lluvias ("li yara"). Antes de perforar la tierra ("yar") con el espeque o vara aguzada de madera, el sembrador Kakawira pronuncia una plegaria silenciosa pidiendo permiso a los dueños del cerro y a los cuatro vientos para depositar tres o cuatro granos seleccionados en cada hoyo, tapándolos suavemente con el pie.

En la morfosintaxis del Kakawira relacionada con la naturaleza, encontramos posposiciones de localización espacial indispensables: "-ba" (en, dentro de, hacia el interior de un lugar delimitado, como "yar-ba", en la tierra o en la parcela; "li-ba", en el río o en el agua); "-ra" o "-ri" (hacia, en dirección a, de carácter motriz). Los verbos agrícolas esenciales son "yapa" (trabajar, hacer, cultivar, preparar la tierra), "wara" (ir, brotar, caminar la planta hacia arriba) y "wina" (vigilar, cuidar, observar el crecimiento de la espiga).

El bosque y la flora medicinal ("wirika", término abarcador que designa al árbol, la planta, la madera y la medicina vegetal) son administrados comunitariamente. De los cerros tutelares se extraen maderas duras para aperos agrícolas, leña seca exclusivamente de ramas caídas y hierbas curativas (como el chichipince, el epazote y la ruda cacaopera) para tratar las dolencias familiares. Este equilibrio entre necesidad humana y preservación del monte refleja la milenaria sabiduría adaptativa de los pueblos Misumalpa en el trópico seco centroamericano.

Hist?ricamente, los artesanos y comerciantes kakawiras establecieron rutas de trueque que cruzaban las serran?as hacia los mercados de Jocoro, San Miguel y las comunidades de origen lenca en Guatajiagua y Chilanga. En estos espacios de intercambio solidario, las medidas tradicionales colmadas de frijol criollo, mazorcas de ma?z y jarcias de henequ?n se canjeaban bajo estrictos principios de reciprocidad y honor personal, sin recurrir a la usura ni a la especulaci?n mercantil. Este modelo econ?mico ancestral demuestra la vigencia de una ?tica comunitaria centrada en el bienestar colectivo y la soberan?a alimentaria.`,
    solvedDialogues: [
      {
        id: 'kaka-dial-4-1',
        title: 'Caminata hacia las riberas del Río Torola',
        context: 'Dos campesinos caminan hacia el río Torola para abrevar a sus bueyes y verificar el nivel de las pozas.',
        turns: [
          {
            speaker: 'Jacinto',
            text: '¿Wara alau Li Torola-ba dumi?',
            translation: '¿Vamos hermano hacia el río Torola hoy?',
            phonetic: '¿wa-ra a-la-u li to-ro-la-ba du-mi?'
          },
          {
            speaker: 'Mateo',
            text: 'Ai Jacinto. Li Torola yam ki, li am daira.',
            translation: 'Sí Jacinto. El río Torola está cristalino, agua fresca para beber.',
            phonetic: 'ay ja-sin-to. li to-ro-la yam ki, li am day-ra.'
          },
          {
            speaker: 'Jacinto',
            text: 'Li Torola ura vida ya. Yar yam yapa.',
            translation: 'El río Torola es nuestra vida. Hace florecer y fertiliza la tierra.',
            phonetic: 'li to-ro-la u-ra vi-da ya. yar yam ya-pa.'
          },
          {
            speaker: 'Mateo',
            text: 'Ai, asun Li Torola. Mas yapa daño li-ba.',
            translation: 'Así es, gracias al río sagrado. Nunca debemos ensuciar ni dañar su cauce.',
            phonetic: 'ay, a-sun li to-ro-la. mas ya-pa da-nyo li-ba.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Wara (ir) alau Li Torola-ba (río Torola-hacia) dumi (hoy)? / Ai Jacinto. Li Torola yam ki (está bueno/limpio), li am (agua fresca) daira (para beber). / Li Torola ura vida ya (es nuestra vida). Yar yam yapa (hace fértil la tierra). / Ai, asun Li Torola. Mas yapa daño (no hacer daño) li-ba (en el agua).',
          syntaxPattern: 'Uso de la posposición directiva "-ba" en hidrónimos propios ("Li Torola-ba"). Prohibición moral con "mas yapa" (no hacer).',
          culturalNotes: 'El respeto al río Torola incluía prohibiciones estrictas de verter lejía de nixtamal en sus corrientes.'
        }
      },
      {
        id: 'kaka-dial-4-2',
        title: 'Siembra del maíz en las primeras lluvias de mayo',
        context: 'Un padre y su hijo perforan la tierra húmeda con el espeque de madera.',
        turns: [
          {
            speaker: 'Padre',
            text: 'Binikuna, yar yara li yam ya. Suka kuyu amba.',
            translation: 'Hijo, la tierra ya recibió buena lluvia de mayo. Pon las semillas de maíz.',
            phonetic: 'bi-ni-ku-na, yar ya-ra li yam ya. su-ka ku-yu am-ba.'
          },
          {
            speaker: 'Hijo',
            text: '¿Kana kuyu amba tata? ¿Pojna kuyu?',
            translation: '¿Cuántos granos de maíz, padre? ¿Tres semillas?',
            phonetic: '¿ka-na ku-yu am-ba ta-ta? ¿poj-na ku-yu?'
          },
          {
            speaker: 'Padre',
            text: 'Pojna amba yar-ba. Yar yapa kuyu yam.',
            translation: 'Tres semillas en la tierra fértil. La tierra cuidará y hará crecer el maíz.',
            phonetic: 'poj-na am-ba yar-ba. yar ya-pa ku-yu yam.'
          },
          {
            speaker: 'Hijo',
            text: 'Yar amba yam wara, tata.',
            translation: 'Que la tierra madre dé abundancia, padre.',
            phonetic: 'yar am-ba yam wa-ra, ta-ta.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Binikuna, yar (tierra) yara li (recibió agua de lluvia) yam ya (bien ya). Suka (coloca/adelante) kuyu amba (semilla de maíz). / Kana kuyu amba tata? Pojna (tres) kuyu? / Pojna amba yar-ba (tres granos en la tierra). Yar yapa kuyu yam (la tierra hace crecer bien el maíz). / Yar amba yam wara (que la semilla camine/crezca bien en la tierra).',
          syntaxPattern: 'Numeral Kakawira "pojna" (tres) antepuesto al sustantivo clasificador "amba" (grano/semilla).',
          culturalNotes: 'Sembrar tres granos representa uno para el ave del monte, uno para la hormiga y otro para el sustento humano.'
        }
      },
      {
        id: 'kaka-dial-4-3',
        title: 'Recolección de leña seca en el cerro tutelar',
        context: 'Dos jóvenes recolectan únicamente ramas caídas para no dañar los árboles vivos.',
        turns: [
          {
            speaker: 'Samuel',
            text: 'Wirika pura yar-ba ya. Mas wina wirika viva.',
            translation: 'Aquí hay leña seca caída en el suelo. No toques los árboles vivos.',
            phonetic: 'wi-ri-ka pu-ra yar-ba ya. mas wi-na wi-ri-ka vi-va.'
          },
          {
            speaker: 'Lucas',
            text: 'Ai Samuel. Ura kuka tarka: wirika yam kuka ya.',
            translation: 'Sí Samuel. El consejo de los abuelos es: el árbol vivo es un abuelo sagrado.',
            phonetic: 'ay sa-mwel. u-ra ku-ka tar-ka: wi-ri-ka yam ku-ka ya.'
          },
          {
            speaker: 'Samuel',
            text: 'Wirika pura yam u-ba fuego yapa.',
            translation: 'Esta leña seca servirá perfecto para encender el fogón de la casa.',
            phonetic: 'wi-ri-ka pu-ra yam u-ba fwe-go ya-pa.'
          },
          {
            speaker: 'Lucas',
            text: 'Asun yar cerro. Wara u-ba dumi.',
            translation: 'Agradezcamos al cerro sagrado. Regresemos a la casa con la luz del día.',
            phonetic: 'a-sun yar ser-ro. wa-ra u-ba du-mi.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Wirika pura (madera seca/caída) yar-ba ya (en la tierra ya está). Mas wina (no cortar/no tocar) wirika viva (árbol vivo). / Ai Samuel. Ura kuka tarka (palabra de nuestros abuelos): wirika yam kuka ya (el árbol venerable es un abuelo). / Wirika pura yam u-ba (en la casa) fuego yapa (hacer lumbre). / Asun yar cerro (gracias cerro/tierra). Wara u-ba (ir a la casa) dumi (con el día).',
          syntaxPattern: 'Adjetivación pospuesta "wirika pura" (madera seca). Verbo compuesto "fuego yapa" (producir lumbre doméstica).',
          culturalNotes: 'En la cosmovisión Cacaopera, cortar árboles verdes innecesariamente atrae el viento seco que marchita las milpas.'
        }
      },
      {
        id: 'kaka-dial-4-4',
        title: 'Cosecha del frijolar y desgrane en la era',
        context: 'Madre e hijo asolean y aporrean las vainas maduras de frijol negro sobre un tendal.',
        turns: [
          {
            speaker: 'Madre',
            text: 'Wina binikuna, muti pura yam ya.',
            translation: 'Mira hijo, la vaina de frijol ya secó perfectamente con el sol.',
            phonetic: 'wi-na bi-ni-ku-na, mu-ti pu-ra yam ya.'
          },
          {
            speaker: 'Hijo',
            text: 'Nana, ¿yapa muti tumpa yar-ba?',
            translation: 'Madre, ¿aporreo el frijol con la vara sobre el suelo?',
            phonetic: 'na-na, ¿ya-pa mu-ti tum-pa yar-ba?'
          },
          {
            speaker: 'Madre',
            text: 'Ai, yapa tumpa suave. Muti wara yar mas.',
            translation: 'Sí, golpea con suavidad. Que el frijol no se pierda entre la tierra.',
            phonetic: 'ay, ya-pa tum-pa swa-ve. mu-ti wa-ra yar mas.'
          },
          {
            speaker: 'Hijo',
            text: 'Muti amba yam. Ura u daira yam dumi.',
            translation: 'Son frijoles hermosos. Tendremos alimento sano en nuestra casa todo el año.',
            phonetic: 'mu-ti am-ba yam. u-ra u day-ra yam du-mi.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Wina binikuna, muti pura (frijol seco) yam ya (bueno ya). / Nana, yapa muti tumpa (aporreo/golpe de vara) yar-ba (en el suelo)? / Ai, yapa tumpa suave. Muti wara yar mas (que el frijol no se vaya a la tierra/no se desperdicie). / Muti amba yam (grano de frijol excelente). Ura u daira (nuestra casa comerá) yam dumi (buen tiempo).',
          syntaxPattern: 'Uso polivalente del término "tumpa" como verbo de golpear/aporrear rítmicamente en faenas agrícolas.',
          culturalNotes: 'El frijol negro de Cacaopera es célebre por su resistencia a la sequía y su alto valor calórico en la dieta local.'
        }
      },
      {
        id: 'kaka-dial-4-5',
        title: 'Protección de la fuente de agua cristalina del manantial',
        context: 'La junta de agua comunal limpia el brote de agua limpia (nacimiento) en la montaña.',
        turns: [
          {
            speaker: 'Encargado',
            text: 'Li amba yar-ba wara am. Mas basuri li-ba.',
            translation: 'El agua fresca brota de las entrañas de la tierra. Cero basura en el manantial.',
            phonetic: 'li am-ba yar-ba wa-ra am. mas ba-su-ri li-ba.'
          },
          {
            speaker: 'Voluntario',
            text: 'Ai tata. Wirika amba yapa li protección.',
            translation: 'Cierto padre. Sombra de árboles nativos para que el agua no se seque jamás.',
            phonetic: 'ay ta-ta. wi-ri-ka am-ba ya-pa li pro-tek-syon.'
          },
          {
            speaker: 'Encargado',
            text: 'Li am ura winakirika salud ya.',
            translation: 'El agua pura y limpia es la salud y el porvenir de nuestro pueblo.',
            phonetic: 'li am u-ra wi-na-ki-ri-ka sa-lud ya.'
          },
          {
            speaker: 'Voluntario',
            text: 'Asun yar, asun Li Torola wan li amba.',
            translation: 'Agradecemos a la tierra, al río Torola y a este bendito manantial.',
            phonetic: 'a-sun yar, a-sun li to-ro-la wan li am-ba.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Li amba (manantial/fuente de agua) yar-ba wara am (sale fresca de la tierra). Mas basuri (nada de suciedad) li-ba (en el agua). / Ai tata. Wirika amba (bosque protector) yapa li protección (cuida el agua). / Li am (agua pura) ura winakirika salud ya (es la salud de nuestro pueblo). / Asun yar, asun Li Torola wan li amba (gracias a la tierra, al río Torola y al manantial).',
          syntaxPattern: 'Construcción genitiva descriptiva "li amba" (agua-semilla / manantial germinal).',
          culturalNotes: 'Las comunidades de Morazán mantienen comités ancestrales de vigilancia y reforestación de manantiales llamados "ojos de agua".'
        }
      }
    ]
  },
  {
    id: 'kaka-comm-5',
    topic: 'Comercio e Intercambio',
    title: 'Tiangis wan Asunta: Comercio Tradicional y Alfarería Negra de Guatajiagua',
    substantiveGuide: `El intercambio económico y mercantil en la región Kakawira y Lenca del departamento de Morazán ha estado regulado históricamente por la institución mesoamericana del mercado tradicional o "tiangis", complementada por antiguos lazos de trueque interétnico y reciprocidad solidaria ("asunta"). La vecindad geográfica entre los municipios de Cacaopera (de raigambre Misumalpa) y Guatajiagua y Chilanga (de raíz Lenca Potón) fomentó a lo largo de los siglos un corredor comercial regional donde fluían mercancías indispensables: alfarería negra, sal marina de la bahía de Jiquilisco, maíz, frijoles, petates de tule y jarcia de henequén.

Un elemento emblemático del comercio en esta zona es la alfarería negra de Guatajiagua ("loza negra"), moldeada a mano sin torno por maestras artesanas que emplean la técnica del enrollado y el pulido con semillas lisas de zapote o jícaro. El característico color negro azabache brillante y metalizado se logra mediante un proceso de ahumado reductor con hojas y corteza de madrecacao o chichipince durante la quema al aire libre. Los pobladores de Cacaopera acudían puntualmente a los días de plaza en San Francisco Gotera y Guatajiagua para adquirir estas tinajas ("li u", ollas para conservar el agua fresca), comales para tostar tortillas de maíz ("kuyu") y cazuelas para guisar.

En el léxico comercial tradicional de Cacaopera, el acto de comprar y conseguir provisiones se expresa con la raíz "yapa" (obtener, hacer, trocar, adquirir), mientras que la consulta sobre el valor o costo de un producto se formula como: "¿Kana ki duka?" (¿Cuánto cuesta esto? ¿Cuál es su valor?) o "¿Kana ki yapa man?" (¿A cuánto me lo dejas?). Para calificar la bondad, durabilidad y acabado de una manufactura se utiliza el adjetivo "yam" (bueno, resistente, auténtico), en oposición a "mas yam" (frágil, rajado, de mala confección).

El trueque ("asunta") continuó vigente durante épocas de escasez monetaria o como mecanismo de fraternidad comunitaria: una medida de frijol negro ("muti") o maíz recién desgranado ("kuyu") podía ser intercambiada equitativamente por una jarra de barro cocido, manojos de leña de encino o plantas medicinales recogidas en las faldas de la montaña. Durante la transacción, el diálogo no se limita a un regateo despersonalizado, sino que incluye saludos afectuosos, preguntas sobre el estado de salud de la familia del vendedor y bendiciones de cierre.

La cortesía al finalizar la compraventa se corona con la frase "Asun alau" (muchas gracias hermano) o "Yam dumi ma-ri" (buen día y buenas ventas para ti), y la respuesta del comerciante: "Suka wara dumi" (vuelve pronto con bien). Este modelo comercial campesino salvaguardaba la equidad alimentaria y cimentaba la hermandad histórica entre los pueblos indígenas del oriente de El Salvador.

La c?lebre Danza de los Emplumados de Cacaopera, ejecutada solemnemente durante las festividades de la Virgen del Tr?nsito y de San Antonio, constituye la m?xima s?ntesis ritual de la cosmovisi?n kakawira. Al comp?s del pito de carrizo y del tambor tradicional de cuero de venado, los danzantes portan tocados elaborados con plumas de guacamaya y espejos resplandecientes que refractan la luz solar. Esta liturgia sagrada no es mero entretenimiento folcl?rico, sino una rogativa c?smica de gratitud a las fuerzas celestes y un testimonio vivo de la continuidad milenaria e inextinguible de la naci?n ind?gena Cacaopera en El Salvador.`,
    solvedDialogues: [
      {
        id: 'kaka-dial-5-1',
        title: 'En el día de mercado de Cacaopera',
        context: 'Una compradora se acerca al puesto de un agricultor en la plaza del pueblo.',
        turns: [
          {
            speaker: 'Compradora',
            text: 'Yam dumi alau. ¿Kana ki yapa muti amba?',
            translation: 'Buenos días hermano. ¿A cuánto tienes la medida de frijol limpio?',
            phonetic: 'yam du-mi a-la-u. ¿ka-na ki ya-pa mu-ti am-ba?'
          },
          {
            speaker: 'Vendedor',
            text: 'Yam dumi walau. Muti yam ki, dumi yara yapa.',
            translation: 'Buenos días hermana. El frijol es de excelente calidad, recién cosechado al sol.',
            phonetic: 'yam du-mi wa-la-u. mu-ti yam ki, du-mi ya-ra ya-pa.'
          },
          {
            speaker: 'Compradora',
            text: 'Yapa pojna medida muti i-ri.',
            translation: 'Dame tres medidas de frijol para mi casa.',
            phonetic: 'ya-pa poj-na me-di-da mu-ti i-ri.'
          },
          {
            speaker: 'Vendedor',
            text: 'Suka walau. Yam dumi ma-u-ba.',
            translation: 'Con gusto hermana. Que haya prosperidad en tu hogar.',
            phonetic: 'su-ka wa-la-u. yam du-mi ma-u-ba.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi alau. Kana ki yapa (a cuánto das/vendes) muti amba (semilla de frijol)? / Yam dumi walau (hermana). Muti yam ki (el frijol está muy bueno), dumi yara yapa (hecho con el sol de este ciclo). / Yapa (dame/asigna) pojna medida (tres medidas) muti (frijol) i-ri (para mí). / Suka walau. Yam dumi ma-u-ba (buen día en tu casa).',
          syntaxPattern: 'Uso de la forma directivo-benefactiva "i-ri" (para mí) y locativa posesiva "ma-u-ba" (en tu casa).',
          culturalNotes: 'El trato entre marchantes en Morazán se realiza llamándose "alau" (hermano) y "walau" (hermana).'
        }
      },
      {
        id: 'kaka-dial-5-2',
        title: 'Adquisición de tinajas de barro negro de Guatajiagua',
        context: 'Un comprador evalúa una olla de barro negro curado para mantener agua fresca.',
        turns: [
          {
            speaker: 'Comprador',
            text: 'Yam dumi yau. ¿Olla pura yam li amba?',
            translation: 'Buenos días madrecita. ¿Esta olla negra sirve bien para guardar agua fresca?',
            phonetic: 'yam du-mi ya-u. ¿o-lya pu-ra yam li am-ba?'
          },
          {
            speaker: 'Artesana',
            text: 'Yamki alau. Yar Guatajiagua yam, li amba guarda.',
            translation: 'Buenísima hermano. El barro negro de Guatajiagua conserva el agua fría y limpia.',
            phonetic: 'yam-ki a-la-u. yar gwa-ta-jya-gwa yam, li am-ba gwar-da.'
          },
          {
            speaker: 'Comprador',
            text: '¿Mas quebra yar-ba?',
            translation: '¿No se agrieta al contacto con el suelo?',
            phonetic: '¿mas ke-bra yar-ba?'
          },
          {
            speaker: 'Artesana',
            text: 'Mas alau, yapa fuego yam. Asunta yam ki.',
            translation: 'Para nada hermano, tiene buena quema en horno. Es artesanía muy garantizada.',
            phonetic: 'mas a-la-u, ya-pa fwe-go yam. a-sun-ta yam ki.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi yau (abuela/artesana). Olla pura (olla negra/cocida) yam (buena) li amba (para agua limpia)? / Yamki alau. Yar Guatajiagua (barro de Guatajiagua) yam (excelente), li amba guarda (conserva agua fresca). / Mas quebra (no se rompe) yar-ba (en el suelo)? / Mas alau (no hermano), yapa fuego yam (bien cocida al fuego). Asunta yam ki (trato/obra garantizada).',
          syntaxPattern: 'Término descriptivo "yar" empleado para designar tanto la tierra agrícola como la arcilla de alfarería.',
          culturalNotes: 'La alfarería de Guatajiagua es considerada patrimonio cultural inmaterial de El Salvador por su técnica de ahumado vegetal única.'
        }
      },
      {
        id: 'kaka-dial-5-3',
        title: 'Trueque solidario de maíz por comal nuevo',
        context: 'Dos comuneros convienen el intercambio de un costal de maíz por un comal grande para tostar tortillas.',
        turns: [
          {
            speaker: 'Sembrador',
            text: 'Alau, mas moneda dumi. ¿Yapa asunta kuyu wan comal?',
            translation: 'Hermano, no traigo moneda hoy. ¿Podemos hacer trueque de maíz por el comal?',
            phonetic: 'a-la-u, mas mo-ne-da du-mi. ¿ya-pa a-sun-ta ku-yu wan ko-mal?'
          },
          {
            speaker: 'Artesano',
            text: 'Ai alau. Kuyu amba yam ki ura u-ba.',
            translation: 'Con gusto hermano. El buen maíz hace falta en mi casa.',
            phonetic: 'ay a-la-u. ku-yu am-ba yam ki u-ra u-ba.'
          },
          {
            speaker: 'Sembrador',
            text: 'Wina kuyu blanco amba yam. Asun alau.',
            translation: 'Mira qué grano blanco y limpio. Te agradezco sinceramente el intercambio.',
            phonetic: 'wi-na ku-yu blan-ko am-ba yam. a-sun a-la-u.'
          },
          {
            speaker: 'Artesano',
            text: 'Asun ma-ri alau. Comal yapa tamal kuyu yam.',
            translation: 'Gracias a ti hermano. Que ese comal tueste muchas y sabrosas tortillas.',
            phonetic: 'a-sun ma-ri a-la-u. ko-mal ya-pa ta-mal ku-yu yam.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Alau, mas moneda dumi (no hay dinero hoy). Yapa asunta (hacer trueque/intercambio recíproco) kuyu wan comal (maíz con comal)? / Ai alau. Kuyu amba yam ki (el grano de maíz viene bien) ura u-ba (en nuestra casa). / Wina kuyu blanco amba yam (mira el maíz blanco seleccionado). Asun alau. / Asun ma-ri (gracias para ti) alau. Comal yapa (haga) tamal kuyu yam (buenas tortillas de maíz).',
          syntaxPattern: 'Locución idiomática "yapa asunta" (hacer reciprocidad / concertar trueque sin lucro monetario).',
          culturalNotes: 'El trueque campesino "asunta" garantizaba que ninguna familia sufriera desabastecimiento por falta de dinero circulante.'
        }
      },
      {
        id: 'kaka-dial-5-4',
        title: 'Encargo de petates de tule para el descanso',
        context: 'Un poblador encarga al tejedor comunal dos petates gruesos de fibra de tule.',
        turns: [
          {
            speaker: 'Cliente',
            text: 'Yam dumi alau tejedor. ¿Yapa petate tule yam?',
            translation: 'Buenos días hermano tejedor. ¿Puedes tejerme petates finos de tule?',
            phonetic: 'yam du-mi a-la-u te-je-dor. ¿ya-pa pe-ta-te tu-le yam?'
          },
          {
            speaker: 'Tejedor',
            text: 'Ai alau. Tule Li Torola-ba yam ki, pura ya.',
            translation: 'Sí hermano. El tule recogido en el Torola es de primera y ya está seco.',
            phonetic: 'ay a-la-u. tu-le li to-ro-la-ba yam ki, pu-ra ya.'
          },
          {
            speaker: 'Cliente',
            text: 'Yapa buru petate i-u-ba. ¿Kana dumi wara?',
            translation: 'Hazme dos petates para mi casa. ¿En cuántos días estarán listos?',
            phonetic: 'ya-pa bu-ru pe-ta-te i-u-ba. ¿ka-na du-mi wa-ra?'
          },
          {
            speaker: 'Tejedor',
            text: 'Pojna dumi wara alau. Marian yam.',
            translation: 'En tres días los tendrás listos, hermano. Que te vaya muy bien.',
            phonetic: 'poj-na du-mi wa-ra a-la-u. ma-ryan yam.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yam dumi alau tejedor. Yapa (puedes hacer) petate tule yam (petate de tule de calidad)? / Ai alau. Tule Li Torola-ba (tule del río Torola) yam ki (está bueno), pura ya (ya está seco y curado). / Yapa buru petate (haz dos petates) i-u-ba (para mi casa). Kana dumi wara (cuántos días tomará)? / Pojna dumi (tres días) wara (irá/estará). Marian yam (adiós con bien).',
          syntaxPattern: 'Numeral "buru" (dos) y "pojna" (tres) antepuestos a los sustantivos contables.',
          culturalNotes: 'El tule silvestre que crece en los meandros del Torola proveía la materia prima para los lechos tradicionales cacaoperas.'
        }
      },
      {
        id: 'kaka-dial-5-5',
        title: 'Cierre de la jornada comercial y regreso a la comunidad',
        context: 'Dos compadres recogen sus canastos al caer la tarde en el parque central de Cacaopera.',
        turns: [
          {
            speaker: 'Compadre 1',
            text: 'Dumi wara ya, alau. Tiangis yam yapa.',
            translation: 'El día ya termina, hermano. La jornada de mercado fue muy bendecida.',
            phonetic: 'du-mi wa-ra ya, a-la-u. tyan-gis yam ya-pa.'
          },
          {
            speaker: 'Compadre 2',
            text: 'Ai compadre. Yar yapa kuyu, tiangis yapa asunta.',
            translation: 'Así es compadre. La tierra nos dio el maíz y el mercado nos dio hermandad.',
            phonetic: 'ay kom-pa-dre. yar ya-pa ku-yu, tyan-gis ya-pa a-sun-ta.'
          },
          {
            speaker: 'Compadre 1',
            text: 'Wara u-ba alaukuna. Yam wan man-ri.',
            translation: 'Regresemos a nuestras casas, hermanos. Que tengan apacible noche.',
            phonetic: 'wa-ra u-ba a-la-u-ku-na. yam wan man-ri.'
          },
          {
            speaker: 'Compadre 2',
            text: 'Yam wan alau. Marian winakirika Cacaopera.',
            translation: 'Buenas noches hermano. Bendiciones a toda la gente de Cacaopera.',
            phonetic: 'yam wan a-la-u. ma-ryan wi-na-ki-ri-ka ka-ka-o-pe-ra.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Dumi wara ya (el día se va ya), alau. Tiangis yam yapa (el mercado se dio bien). / Ai compadre. Yar yapa kuyu (la tierra dio maíz), tiangis yapa asunta (el tiangis generó intercambio solidario). / Wara u-ba (vamos a casa) alaukuna (hermanos). Yam wan man-ri (buena noche para ustedes). / Yam wan alau. Marian winakirika Cacaopera (adiós a toda la gente de Cacaopera).',
          syntaxPattern: 'Paralelismo sintáctico con "yapa": "Yar yapa kuyu" // "Tiangis yapa asunta".',
          culturalNotes: 'El mercado indígena trasciende el mero acto mercantil: es un espacio cívico-afectivo donde se renuevan las alianzas de la comunidad.'
        }
      }
    ]
  }
];
