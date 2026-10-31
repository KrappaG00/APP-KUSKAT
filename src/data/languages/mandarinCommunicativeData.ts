import { CommunicativeUnit } from './types';

export const MANDARIN_COMMUNICATIVE_UNITS: CommunicativeUnit[] = [
  {
    id: 'zh-comm-1',
    topic: 'Saludos y Cortesía',
    title: '问候与礼仪: Saludos Formales, Cortesía y Tratamiento en Mandarín Estándar',
    substantiveGuide: `El idioma chino mandarín estándar (普通话, Pǔtōnghuà) se fundamenta en un sistema fonológico tonal y en normas de cortesía profundamente arraigadas en la tradición confuciana. En la comunicación interpersonal, los saludos y tratamientos reflejan no solo la hora del día, sino también la distancia social, la jerarquía generacional y el respeto mutuo entre los interlocutores.

El sistema tonal del mandarín comprende cuatro tonos léxicos más un tono neutro o ligero: el primer tono (alto y sostenido, 55, ej. mā 妈), el segundo tono (ascendente, 35, ej. má 麻), el tercer tono (descendente-ascendente, 214, ej. mǎ 马) y el cuarto tono (descendente tajante, 51, ej. mà 骂). El fenómeno más importante en los saludos cotidianos es el cambio tonal del tercer tono (三声变调, sānshēng biàndiào): cuando dos sílabas en tercer tono se suceden de forma contigua, la primera sílaba se pronuncia automáticamente en segundo tono (35). Por ello, el saludo elemental 你好 (nǐ hǎo) se articula fonéticamente en el habla viva como [ní hǎo].

En el plano del tratamiento respetuoso, el mandarín distingue con rigor entre el pronombre informal de segunda persona 你 (nǐ) y su variante honorífica 您 (nín), utilizada para dirigirse a maestros (老师 lǎoshī), ancianos, superiores jerárquicos o clientes comerciales. Así, 您好 (nín hǎo) establece de inmediato un marco de veneración y deferencia. Según el momento de la jornada, se emplean fórmulas temporales como 早上好 (zǎoshang hǎo, buenos días por la mañana), 下午好 (xiàwǔ hǎo, buenas tardes) y 晚上好 (wǎnshang hǎo, buenas noches). Al despedirse antes de dormir, se recurre a 晚安 (wǎn'ān).

La gratitud y la respuesta cortés configuran otro pilar sociolingüístico. A la expresión 谢谢 (xièxie, gracias) o 非常感谢 (fēicháng gǎnxiè, muchas gracias), la réplica habitual es 不客气 (bù kèqi, no hay de qué / no sea formal), 不用谢 (bù yòng xiè, no es necesario agradecer) o 哪里哪里 (nǎli nǎli, frase tradicional de modestia que rechaza elegantemente un elogio desmesurado). Para disculparse por una molestia menor se emplea 对不起 (duìbuqǐ, lo siento / disculpe), cuya respuesta condescendiente es 没关系 (méi guānxi, no tiene importancia).

Las fórmulas de despedida más representativas son 再见 (zàijiàn, lit. 'volver a ver / hasta la vista'), 明天见 (míngtiān jiàn, hasta mañana) y la expresión de hospitalidad cortés 慢走 (mànzǒu, lit. 'camine despacio', utilizada por el anfitrión para desear buen viaje al huésped que se retira). La estructura sintáctica de las preguntas de cortesía suele emplear la partícula interrogativa final 吗 (ma) o la forma afirmativa-negativa del verbo (如: 你好吗? Nǐ hǎo ma? ¿Estás bien?), marcando una cadencia clara y respetuosa en el discurso oral.

En el contexto de la interacci?n contempor?nea y las relaciones transculturales entre China y El Salvador ?donde reside una activa y respetada comunidad de origen chino en San Salvador y otras cabeceras departamentales? el dominio del protocolo de saludo mandar?n adquiere una relevancia estrat?gica fundamental. La entrega y recepci?n de tarjetas de presentaci?n (?? m?ngpi?n) o de obsequios ceremoniales se realiza invariablemente sosteni?ndolos con ambas manos y acompa??ndolo de una ligera inclinaci?n de torso en se?al de alta estima. Asimismo, la modulaci?n fon?tica precisa de las variaciones tonales en f?rmulas afectivas como ?? (x?nghu?, encantado de conocerle) y ???? (q?ng du? gu?nzh?o, cuento con su benepl?cito) previene malentendidos y sienta las bases de una comunicaci?n emp?tica, constructiva y duradera.`,
    solvedDialogues: [
      {
        id: 'zh-dial-1-1',
        title: 'Primer encuentro formal entre colegas',
        context: 'Dos profesionales se presentan formalmente en una oficina en San Salvador.',
        turns: [
          {
            speaker: '王明 (Wáng Míng)',
            text: '您好！我是王明。很高兴认识您。',
            translation: '¡Buenos días! Soy Wang Ming. Mucho gusto en conocerle.',
            phonetic: 'Nín hǎo! Wǒ shì Wáng Míng. Hěn gāoxìng rènshi nín.'
          },
          {
            speaker: '李华 (Lǐ Huá)',
            text: '您好，王先生！我也很高兴认识您。',
            translation: '¡Buenos días, señor Wang! Yo también estoy muy complacido de conocerle.',
            phonetic: 'Nín hǎo, Wáng xiānsheng! Wǒ yě hěn gāoxìng rènshi nín.'
          },
          {
            speaker: '王明 (Wáng Míng)',
            text: '您最近工作忙吗？',
            translation: '¿Ha estado muy ocupado con el trabajo recientemente?',
            phonetic: 'Nín zuìjìn gōngzuò máng ma?'
          },
          {
            speaker: '李华 (Lǐ Huá)',
            text: '不太忙，谢谢您的关心。',
            translation: 'No demasiado ocupado, gracias por su amable interés.',
            phonetic: 'Bú tài máng, xièxie nín de guānxīn.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Nín (usted) hǎo (bien)! Wǒ (yo) shì (ser) Wáng Míng. Hěn (muy) gāoxìng (alegre) rènshi (conocer) nín (a usted). / Nín hǎo, Wáng xiānsheng (señor Wang)! Wǒ (yo) yě (también) hěn gāoxìng rènshi nín. / Nín (usted) zuìjìn (últimamente) gōngzuò (trabajo) máng (ocupado) ma (partícula interrogativa)? / Bú tài (no muy) máng, xièxie (gracias) nín de (de usted) guānxīn (atención/cuidado).',
          syntaxPattern: 'Sujeto + 副词 (hěn/yě) + 形容词谓语 (gāoxìng). Partícula posesiva "的" vinculando pronombre y sustantivo (nín de guānxīn).',
          culturalNotes: 'El apellido precede siempre al título honorífico en chino: 王先生 (Wáng xiānsheng, Señor Wang) y nunca al revés.'
        }
      },
      {
        id: 'zh-dial-1-2',
        title: 'Saludo cotidiano a un profesor en la academia',
        context: 'Un estudiante saluda a su docente al entrar al aula de idiomas.',
        turns: [
          {
            speaker: '学生 (Estudiante)',
            text: '老师早！早上好！',
            translation: '¡Profesor, buenos días! ¡Buenos días por la mañana!',
            phonetic: 'Lǎoshī zǎo! Zǎoshang hǎo!'
          },
          {
            speaker: '老师 (Profesor)',
            text: '早上好！你今天来得很早。',
            translation: '¡Buenos días! Hoy has llegado muy temprano.',
            phonetic: 'Zǎoshang hǎo! Nǐ jīntiān lái de hěn zǎo.'
          },
          {
            speaker: '学生 (Estudiante)',
            text: '我想复习今天的汉字课。',
            translation: 'Quería repasar la lección de caracteres chinos de hoy.',
            phonetic: 'Wǒ xiǎng fùxí jīntiān de hànzì kè.'
          },
          {
            speaker: '老师 (Profesor)',
            text: '非常好，请进，请坐。',
            translation: 'Excelente, por favor entra y toma asiento.',
            phonetic: 'Fēicháng hǎo, qǐng jìn, qǐng zuò.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Lǎoshī (profesor) zǎo (temprano)! Zǎoshang hǎo (buenos días)! / Zǎoshang hǎo! Nǐ (tú) jīntiān (hoy) lái (venir) de (partícula estructural de grado) hěn zǎo (muy temprano). / Wǒ (yo) xiǎng (desear/querer) fùxí (repasar) jīntiān de (de hoy) hànzì kè (clase de caracteres). / Fēicháng hǎo (extraordinariamente bien), qǐng (por favor) jìn (entrar), qǐng zuò (sentarse).',
          syntaxPattern: 'Verbo + partícula de grado 得 (de) + adjetivo calificativo: 来得早 (lái de zǎo). Verbo de cortesía 请 (qǐng) antepuesto a la acción.',
          culturalNotes: 'Saludar diciendo "老师早" (lǎoshī zǎo) es la norma de reverencia estudiantil en todo el ámbito educativo sínico.'
        }
      },
      {
        id: 'zh-dial-1-3',
        title: 'Agradecimiento sincero y despedida tras una reunión',
        context: 'Un invitado se despide cordialmente de los anfitriones al terminar una cena.',
        turns: [
          {
            speaker: '客人 (Invitado)',
            text: '今天非常感谢你们的热情招待。',
            translation: 'Hoy les agradezco muchísimo su calurosa y generosa hospitalidad.',
            phonetic: 'Jīntiān fēicháng gǎnxiè nǐmen de rèqíng zhāodài.'
          },
          {
            speaker: '主人 (Anfitrión)',
            text: '不用客气，欢迎你们常来玩！',
            translation: '¡No hay de qué, no sean formales! ¡Sean siempre bienvenidos a visitarnos!',
            phonetic: 'Bú yòng kèqi, huānyíng nǐmen cháng lái wán!'
          },
          {
            speaker: '客人 (Invitado)',
            text: '时间不早了，我们该走了。再见！',
            translation: 'Se ha hecho tarde, ya debemos marcharnos. ¡Hasta la vista!',
            phonetic: 'Shíjiān bù zǎo le, wǒmen gāi zǒu le. Zàijiàn!'
          },
          {
            speaker: '主人 (Anfitrión)',
            text: '慢走，路上小心！明天见！',
            translation: '¡Vayan con cuidado en el camino! ¡Hasta mañana!',
            phonetic: 'Mànzǒu, lùshang xiǎoxīn! Míngtiān jiàn!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Jīntiān (hoy) fēicháng (sumamente) gǎnxiè (agradecer) nǐmen de (su) rèqíng zhāodài (cálida atención). / Bú yòng kèqi (no hay de qué ser formal), huānyíng (bienvenidos) nǐmen (ustedes) cháng (a menudo) lái (venir) wán (pasar el rato)! / Shíjiān (tiempo) bù zǎo le (ya no es temprano), wǒmen (nosotros) gāi (deber) zǒu le (marcharse ya). Zàijiàn (adiós)! / Mànzǒu (vayan despacio/con cuidado), lùshang (en el camino) xiǎoxīn (cuidado)! Míngtiān jiàn (mañana vernos)!',
          syntaxPattern: 'Uso de la partícula modal 了 (le) para indicar cambio de estado: 不早了 (ya no es temprano), 该走了 (es hora de irse).',
          culturalNotes: 'El anfitrión siempre acompaña a los invitados hasta la puerta o el vehículo pronunciando 慢走 (mànzǒu).'
        }
      },
      {
        id: 'zh-dial-1-4',
        title: 'Disculpa por un retraso involuntario',
        context: 'Un comensal llega unos minutos tarde a un restaurante debido al tráfico capitalino.',
        turns: [
          {
            speaker: '陈伟 (Chén Wěi)',
            text: '真对不起，路上堵车，我来晚了。',
            translation: 'De verdad lo siento mucho, había atasco de tráfico y he llegado tarde.',
            phonetic: 'Zhēn duìbuqǐ, lùshang dǔchē, wǒ lái wǎn le.'
          },
          {
            speaker: '张敏 (Zhāng Mǐn)',
            text: '没关系，我也刚到不久。请坐吧。',
            translation: 'No te preocupes, no tiene importancia, yo también llegué hace poco. Por favor siéntate.',
            phonetic: 'Méi guānxi, wǒ yě gāng dào bù jiǔ. Qǐng zuò ba.'
          },
          {
            speaker: '陈伟 (Chén Wěi)',
            text: '谢谢你的谅解。你想喝什么茶？',
            translation: 'Gracias por tu comprensión. ¿Qué té te gustaría tomar?',
            phonetic: 'Xièxie nǐ de liàngjiě. Nǐ xiǎng hē shénme chá?'
          },
          {
            speaker: '张敏 (Zhāng Mǐn)',
            text: '乌龙茶或者茉莉花茶都可以。',
            translation: 'Cualquiera de los dos está perfecto: té Oolong o té de jazmín.',
            phonetic: 'Wūlóngchá huòzhě mòlìhuāchá dōu kěyǐ.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Zhēn (verdaderamente) duìbuqǐ (perdón), lùshang (en la calle) dǔchē (tráfico atascado), wǒ (yo) lái wǎn le (llegué tarde). / Méi guānxi (no importa), wǒ yě (yo también) gāng dào (recién llegado) bù jiǔ (no mucho tiempo). Qǐng zuò ba (por favor siéntate). / Xièxie nǐ de (de ti) liàngjiě (comprensión). Nǐ xiǎng (deseas) hē (beber) shénme (qué) chá (té)? / Wūlóngchá (té oolong) huòzhě (o) mòlìhuāchá (té de jazmín) dōu (ambos) kěyǐ (están bien).',
          syntaxPattern: 'Conjunción disyuntiva 或者 (huòzhě) para oraciones declarativas. Adverbio 都 (dōu) para totalidad.',
          culturalNotes: 'Ofrecer té de cortesía al sentarse disipa tensiones y demuestra equilibrio y consideración.'
        }
      },
      {
        id: 'zh-dial-1-5',
        title: 'Recibimiento de un visitante internacional en el aeropuerto',
        context: 'Un representante cultural recibe a un conferencista en el Aeropuerto San Óscar Arnulfo Romero.',
        turns: [
          {
            speaker: '接待员 (Recepcionista)',
            text: '请问，您是刘教授吗？',
            translation: 'Disculpe la pregunta, ¿es usted el profesor Liu?',
            phonetic: 'Qǐngwèn, nín shì Liú jiàoshòu ma?'
          },
          {
            speaker: '刘教授 (Profesor Liu)',
            text: '是的，我就是刘明。辛苦你了！',
            translation: 'Sí, en efecto soy Liu Ming. ¡Muchas gracias por tu esfuerzo al venir a recibirme!',
            phonetic: 'Shì de, wǒ jiù shì Liú Míng. Xīnkǔ nǐ le!'
          },
          {
            speaker: '接待员 (Recepcionista)',
            text: '热烈欢迎您来到萨尔瓦多！旅途顺利吗？',
            translation: '¡Le damos una calurosa bienvenida a El Salvador! ¿Tuvo un viaje sin contratiempos?',
            phonetic: 'Rèliè huānyíng nín lái dào Sà’ěrwǎduō! Lǚtú shùnlì ma?'
          },
          {
            speaker: '刘教授 (Profesor Liu)',
            text: '非常顺利，天气很好。多谢你们！',
            translation: 'Muy tranquilo y agradable, el clima está estupendo. ¡Muchísimas gracias a ustedes!',
            phonetic: 'Fēicháng shùnlì, tiānqì hěn hǎo. Duōxiè nǐmen!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Qǐngwèn (permítame preguntar), nín (usted) shì (es) Liú jiàoshòu (profesor Liu) ma? / Shì de (así es), wǒ jiù shì (yo precisamente soy) Liú Míng. Xīnkǔ nǐ le (te has esforzado / gracias por la molestia)! / Rèliè huānyíng (calurosa bienvenida) nín (a usted) lái dào (llegar a) Sà’ěrwǎduō (El Salvador)! Lǚtú (viaje) shùnlì (apacible/sin tropiezo) ma? / Fēicháng shùnlì, tiānqì (clima) hěn hǎo. Duōxiè (muchas gracias) nǐmen!',
          syntaxPattern: 'Locución de cortesía 请问 (qǐngwèn) al inicio de una consulta respetuosa. Expresión idiomática 辛苦你了 (xīnkǔ nǐ le) para agradecer la dedicación y el tiempo de otra persona.',
          culturalNotes: 'Reconocer el cansancio del otro con "辛苦了" es una de las muestras de refinamiento interpersonal más apreciadas en China.'
        }
      }
    ]
  },
  {
    id: 'zh-comm-2',
    topic: 'Familia y Comunidad',
    title: '家庭与亲属: Estructura Familiar, Términos de Parentesco y Solidaridad en la Comunidad',
    substantiveGuide: `En la civilización china, la familia (家庭, jiātíng) constituye la célula medular de la estructura moral, social y lingüística. A diferencia del sistema de parentesco castellano o de muchas lenguas occidentales, el mandarín posee un léxico de parentesco hiperpreciso que codifica obligatoriamente: (1) el linaje paterno versus materno, (2) la generación relativa, (3) la edad relativa dentro de la misma hermandad y (4) el género del pariente.

Para los abuelos, se distingue tajantemente entre la línea paterna y materna: el abuelo paterno es 爷爷 (yéye) y la abuela paterna es 奶奶 (nǎinai); en contraste, el abuelo materno es 外公 (wàigōng) o 姥爷 (lǎoye en el norte de China), y la abuela materna es 外婆 (wàipó) o 姥姥 (lǎolao). El prefijo 外 (wài, lit. 'exterior') refleja históricamente la pertenencia de la madre a otro clan patrilineal, aunque en el uso contemporáneo ambos lazos conllevan idéntico afecto filial.

En cuanto a los hermanos, el chino mandarín no posee una palabra única y simple de uso común equivalente al neutro "hermano" o "hermana" sin especificar edad relativa. Se debe emplear obligatoriamente: 哥哥 (gēge, hermano mayor), 弟弟 (dìdi, hermano menor), 姐姐 (jiějie, hermana mayor) o 妹妹 (mèimei, hermana menor). Cuando se habla genéricamente de los hermanos como colectivo, se recurre a compuestos coordinados como 兄弟姐妹 (xiōngdì jiěmèi, hermanos y hermanas).

En la gramática, la relación de posesión con familiares cercanos presenta una excepción notable al uso habitual de la partícula subordinante 的 (de). Mientras que en posesiones generales es imperativo decir 我的书 (wǒ de shū, mi libro) o 他的汽车 (tā de qìchē, su automóvil), al tratarse de parientes consanguíneos de primer grado o instituciones íntimas es muy común y natural omitir 的: 我爸爸 (wǒ bàba, mi papá), 我妈妈 (wǒ māma, mi mamá), 我们家 (wǒmen jiā, nuestra familia/nuestro hogar). Incluir 的 en estos contextos (ej. 我的妈妈) resulta estilísticamente enfático o distante.

El valor moral supremo que regula la convivencia familiar es la piedad filial (孝顺, xiàoshùn), que prescribe el respeto reverente, la asistencia económica y el acompañamiento afectivo a los padres y abuelos en su ancianidad. En la comunidad chino-salvadoreña, establecida a lo largo de más de un siglo en ciudades como San Salvador, Santa Ana y San Miguel, la preservación del núcleo familiar y la transmisión de los valores de trabajo, ahorro y solidaridad comunitaria han sido fundamentales para mantener vivo el bilingüismo y la identidad cultural transpacífica.

El concepto tradicional de 'piedad filial' (? xi?o), profundamente codificado en las ense?anzas de Confucio y consolidado a lo largo de milenios, permea cada ?mbito de la vida hogare?a y social china. Este principio ?tico no solo impone el deber moral de cuidar a los progenitores y abuelos en su ancianidad, sino que exige honrar el buen nombre del linaje familiar mediante una conducta personal intachable, rectitud c?vica y diligencia acad?mica. En las reuniones festivas familiares, tales como la cena de Nochevieja lunar (??? ni?ny?f?n) o el Festival del Medio Oto?o (??? Zh?ngqi?ji?), la jerarqu?a etaria dicta el orden para tomar asiento a la mesa redonda, servir el t? caliente y degustar los alimentos, reforzando la armon?a colectiva (? h?) y la bendici?n de la descendencia unida.`,
    solvedDialogues: [
      {
        id: 'zh-dial-2-1',
        title: 'Presentación de los miembros de la familia a través de una fotografía',
        context: 'Dos amigos miran un retrato familiar en la sala de estar.',
        turns: [
          {
            speaker: '安娜 (Ana)',
            text: '这张照片真好看！这是你家人吗？',
            translation: '¡Qué bonita está esta fotografía! ¿Esta es tu familia?',
            phonetic: 'Zhè zhāng zhàopiàn zhēn hǎokàn! Zhè shì nǐ jiārén ma?'
          },
          {
            speaker: '大卫 (David)',
            text: '是的。前边是我爷爷和奶奶，后边是我父母。',
            translation: 'Sí. Adelante están mis abuelos paternos, y detrás están mis padres.',
            phonetic: 'Shì de. Qiánbian shì wǒ yéye hé nǎinai, hòubian shì wǒ fùmǔ.'
          },
          {
            speaker: '安娜 (Ana)',
            text: '你有没有哥哥或者妹妹？',
            translation: '¿Tienes algún hermano mayor o alguna hermana menor?',
            phonetic: 'Nǐ yǒu méiyǒu gēge huòzhě mèimei?'
          },
          {
            speaker: '大卫 (David)',
            text: '我有一个姐姐和一个弟弟，我们家有五口人。',
            translation: 'Tengo una hermana mayor y un hermano menor; en mi familia somos cinco personas.',
            phonetic: 'Wǒ yǒu yí gè jiějie hé yí gè dìdi, wǒmen jiā yǒu wǔ kǒu rén.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Zhè (este) zhāng (clasificador para planos/fotos) zhàopiàn (fotografía) zhēn hǎokàn (verdaderamente hermosa)! Zhè shì (esto es) nǐ jiārén (tu gente/familia) ma? / Shì de. Qiánbian (adelante) shì wǒ yéye (mi abuelo paterno) hé (y) nǎinai (abuela paterna), hòubian (detrás) shì wǒ fùmǔ (mis padres). / Nǐ yǒu méiyǒu (¿tienes o no tienes?) gēge (hermano mayor) huòzhě (o) mèimei (hermana menor)? / Wǒ yǒu yí gè jiějie (una hermana mayor) hé yí gè dìdi (un hermano menor), wǒmen jiā (nuestra casa) yǒu wǔ kǒu rén (tiene 5 bocas/personas).',
          syntaxPattern: 'Uso de la pregunta afirmativo-negativa 有没有 (yǒu méiyǒu) y del clasificador 口 (kǒu, boca) reservado para miembros de la familia.',
          culturalNotes: 'Contar personas de la familia con "口" evoca a las bocas que el hogar alimenta cotidianamente.'
        }
      },
      {
        id: 'zh-dial-2-2',
        title: 'Cuidado y visita dominical a los abuelos',
        context: 'Un nieto conversa con su madre sobre la preparación del almuerzo para visitar a los abuelos maternos.',
        turns: [
          {
            speaker: '儿子 (Hijo)',
            text: '妈妈，我们这个星期天去看外公外婆吗？',
            translation: 'Mamá, ¿vamos a ir a ver al abuelo y a la abuela materna este domingo?',
            phonetic: 'Māma, wǒmen zhè gè xīngqītiān qù kàn wàigōng wàipó ma?'
          },
          {
            speaker: '妈妈 (Madre)',
            text: '去啊！外公身体好多了，我想给他们做面条。',
            translation: '¡Claro que sí! El abuelo está mucho mejor de salud, quiero prepararles fideos.',
            phonetic: 'Qù a! Wàigōng shēntǐ hǎo duō le, wǒ xiǎng gěi tāmen zuò miàntiáo.'
          },
          {
            speaker: '儿子 (Hijo)',
            text: '我帮您洗菜和打扫房间。',
            translation: 'Yo le ayudo a lavar las verduras y a ordenar la habitación.',
            phonetic: 'Wǒ bāng nín xǐ cài hé dǎsǎo fángjiān.'
          },
          {
            speaker: '妈妈 (Madre)',
            text: '真懂事！尊老爱幼是最好的品德。',
            translation: '¡Qué muchacho tan considerado! Respetar a los mayores y cuidar a los jóvenes es la virtud más noble.',
            phonetic: 'Zhēn dǒngshì! Zūn lǎo ài yòu shì zuì hǎo de pǐndé.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Māma, wǒmen zhè gè xīngqītiān (este domingo) qù kàn (ir a ver/visitar) wàigōng wàipó (abuelos maternos) ma? / Qù a! Wàigōng shēntǐ (salud del abuelo) hǎo duō le (mucho mejor ya), wǒ xiǎng gěi tāmen (darles a ellos / para ellos) zuò miàntiáo (cocinar fideos). / Wǒ bāng nín (yo ayudo a usted) xǐ cài (lavar verduras) hé dǎsǎo fángjiān (limpiar cuarto). / Zhēn dǒngshì (de verdad sensato)! Zūn lǎo ài yòu (respetar ancianos amar jóvenes) shì zuì hǎo de (la mejor) pǐndé (virtud moral).',
          syntaxPattern: 'Preposición 给 (gěi) introduciendo el objeto indirecto de beneficio: 给他们做面条 (cocinar fideos para ellos). Chengyu tradicional: 尊老爱幼.',
          culturalNotes: 'Preparar fideos largos (长寿面 chángshòumiàn) para los ancianos simboliza los votos filiales por una larga y saludable vida.'
        }
      },
      {
        id: 'zh-dial-2-3',
        title: 'Consejo fraterno entre hermanos sobre los estudios',
        context: 'Un hermano mayor orienta a su hermano menor en el estudio de las matemáticas.',
        turns: [
          {
            speaker: '弟弟 (Hermano menor)',
            text: '哥哥，这道数学题太难了，你能帮我一下吗？',
            translation: 'Hermano mayor, este problema de matemáticas es demasiado difícil, ¿puedes ayudarme un momento?',
            phonetic: 'Gēge, zhè dào shùxué tí tài nán le, nǐ néng bāng wǒ yíxià ma?'
          },
          {
            speaker: '哥哥 (Hermano mayor)',
            text: '别着急，慢慢看。先读懂题目，再写步骤。',
            translation: 'No te desesperes, míralo con calma. Primero comprende el enunciado y luego escribe los pasos.',
            phonetic: 'Bié zháojí, mànmàn kàn. Xiān dú dǒng tímù, zài xiě bùzhòu.'
          },
          {
            speaker: '弟弟 (Hermano menor)',
            text: '啊，我明白了！谢谢哥哥！',
            translation: '¡Ah, ya lo entendí! ¡Muchas gracias, hermano mayor!',
            phonetic: 'Ā, wǒ míngbai le! Xièxie gēge!'
          },
          {
            speaker: '哥哥 (Hermano mayor)',
            text: '不客气。遇到困难随时来问我。',
            translation: 'De nada. Cuando encuentres dificultades ven a preguntarme cuando quieras.',
            phonetic: 'Bú kèqi. Yù dào kùnnan suíshí lái wèn wǒ.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Gēge, zhè dào (clasificador de ejercicios) shùxué tí (problema matemático) tài nán le (demasiado difícil), nǐ néng (puedes) bāng wǒ (ayudarme) yíxià (un momento) ma? / Bié zháojí (no te angusties), mànmàn kàn (mira despacio). Xiān (primero) dú dǒng (leer entendiendo) tímù (enunciado), zài (luego) xiě bùzhòu (escribir pasos). / Ā, wǒ míngbai le (lo entendí ya)! Xièxie gēge! / Bú kèqi. Yù dào kùnnan (topar con dificultades) suíshí (en cualquier momento) lái wèn wǒ (ven a preguntarme).',
          syntaxPattern: 'Estructura temporal 先... 再... (xiān... zài..., primero... luego...). Verbo de resultado 读懂 (dú dǒng, leer y comprender).',
          culturalNotes: 'En el hogar tradicional chino, el hermano mayor (长兄) asume una responsabilidad tutelar casi paterna sobre sus hermanos menores.'
        }
      },
      {
        id: 'zh-dial-2-4',
        title: 'Cena familiar de fin de semana',
        context: 'La familia se reúne alrededor de la mesa para compartir la comida recién servida.',
        turns: [
          {
            speaker: '爸爸 (Padre)',
            text: '菜都齐了，大家快趁热吃吧！',
            translation: 'Ya están todos los platillos servidos en la mesa, ¡comamos todos mientras esté caliente!',
            phonetic: 'Cài dōu qí le, dàjiā kuài chèn rè chī ba!'
          },
          {
            speaker: '女儿 (Hija)',
            text: '今天的红烧鱼和炒青菜闻起来真香！',
            translation: '¡El pescado estofado y las verduras salteadas de hoy huelen deliciosos!',
            phonetic: 'Jīntiān de hóngshāoyú hé chǎo qīngcài wén qǐlai zhēn xiāng!'
          },
          {
            speaker: '妈妈 (Madre)',
            text: '慢点吃。多喝点热汤，对胃好。',
            translation: 'Coman despacio. Tomen un poco más de sopa caliente, es muy buena para el estómago.',
            phonetic: 'Màn diǎn chī. Duō hē diǎn rè tāng, duì wèi hǎo.'
          },
          {
            speaker: '爸爸 (Padre)',
            text: '一家人团聚在一起，就是最幸福的事。',
            translation: 'Estar toda la familia unida en armonía es la mayor dicha que existe.',
            phonetic: 'Yì jiā rén tuánjù zài yìqǐ, jiù shì zuì xìngfú de shì.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Cài dōu qí le (los platillos ya están completos), dàjiā (todos) kuài chèn rè (rápido aprovechando el calor) chī ba! / Jīntiān de hóngshāoyú (pescado estofado en salsa roja) hé chǎo qīngcài (verduras salteadas) wén qǐlai (oler al percibir) zhēn xiāng (verdaderamente aromático)! / Màn diǎn chī (coman con calma). Duō hē diǎn (beban más) rè tāng (sopa caliente), duì wèi hǎo (bueno para el estómago). / Yì jiā rén (toda la familia) tuánjù zài yìqǐ (reunida junta), jiù shì (justamente es) zuì xìngfú de shì (el asunto más feliz).',
          syntaxPattern: 'Construcción con complemento de percepción 闻起来 (wén qǐlai, al olerlo). Expresión de beneficio 对... 好 (duì... hǎo, bueno para...).',
          culturalNotes: 'Comer alrededor de una mesa redonda (圆桌) simboliza la perfección cósmica y la unión indivisible de la familia (团圆 tuányuán).'
        }
      },
      {
        id: 'zh-dial-2-5',
        title: 'Solidaridad vecinal en la comunidad china de la capital',
        context: 'Dos vecinos coordinan la limpieza y adorno del callejón comercial antes del festival.',
        turns: [
          {
            speaker: '陈叔叔 (Tío Chen)',
            text: '李阿姨，大家准备好挂红灯笼了吗？',
            translation: 'Tía Li, ¿ya está lista la gente para colgar los faroles rojos?',
            phonetic: 'Lǐ āyí, dàjiā zhǔnbèi hǎo guà hóng dēnglong le ma?'
          },
          {
            speaker: '李阿姨 (Tía Li)',
            text: '都准备好了！年轻人正在搬梯子呢。',
            translation: '¡Todo está listísimo! Los jóvenes están trayendo las escaleras en este momento.',
            phonetic: 'Dōu zhǔnbèi hǎo le! Niánqīngrén zhèngzài bān tīzi ne.'
          },
          {
            speaker: '陈叔叔 (Tío Chen)',
            text: '远亲不如近邻，大家互相帮助真好！',
            translation: 'Más vale vecino cercano que pariente lejano; ¡qué hermoso es ayudarnos todos!',
            phonetic: 'Yuǎnqīn bùrú jìnlín, dàjiā hùxiāng bāngzhù zhēn hǎo!'
          },
          {
            speaker: '李阿姨 (Tía Li)',
            text: '是啊，我们的街区会非常热闹漂亮！',
            translation: '¡Así es, nuestro vecindario quedará animadísimo y hermoso!',
            phonetic: 'Shì a, wǒmen de jiēqū huì fēicháng rènao piàoliang!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Lǐ āyí (tía Li), dàjiā (todos) zhǔnbèi hǎo (preparar adecuadamente) guà hóng dēnglong (colgar faroles rojos) le ma? / Dōu zhǔnbèi hǎo le! Niánqīngrén (jóvenes) zhèngzài (en proceso de) bān tīzi (trasladar escalera) ne. / Yuǎnqīn (pariente lejano) bùrú (no iguala a / peor que) jìnlín (vecino cercano), dàjiā hùxiāng bāngzhù (ayudarse mutuamente) zhēn hǎo! / Shì a, wǒmen de jiēqū (nuestro barrio) huì fēicháng rènao (muy concurrido/festivo) piàoliang (bello)!',
          syntaxPattern: 'Uso del proverbio tradicional chino 远亲不如近邻 (yuǎnqīn bùrú jìnlín). Marcador de aspecto progresivo 正在 (zhèngzài).',
          culturalNotes: 'Llamar "叔叔" (tío) y "阿姨" (tía) a los vecinos mayores demuestra cercanía comunitaria sin necesidad de parentesco de sangre.'
        }
      }
    ]
  },
  {
    id: 'zh-comm-3',
    topic: 'Entorno Natural y Agricultura',
    title: '自然与农耕: Naturaleza, Las Cuatro Estaciones y Tradición Agrícola del Arroz y Té',
    substantiveGuide: `La comprensión del entorno natural en la civilización sínica está indisolublemente ligada a la filosofía ecológica tradicional, sintetizada en el concepto de "armonía entre la naturaleza y el ser humano" (天人合一, tiān rén hé yī). El ser humano no se concibe como dominador exterior del cosmos, sino como un elemento participante que debe acompasar sus actividades agrícolas y comunitarias al ritmo inmutable de las cuatro estaciones (四季, sìjì) y a los veinticuatro periodos solares (二十四节气, èrshísì jiéqì) del calendario tradicional lunar-agrícola (农历, nónglì).

Las cuatro estaciones fundamentales son: 春天 (chūntiān, primavera, estación del renacimiento de la vegetación y la siembra), 夏天 (xiàtiān, verano, tiempo del calor abundante y maduración de los cultivos), 秋天 (qiūtiān, otoño, época dorada de la cosecha y gratitud a la tierra) e 冬天 (dōngtiān, invierno, periodo del reposo de los campos y recogimiento familiar). En cada estación, el clima (天气, tiānqì) se describe con una rica gama de adjetivos meteorológicos: 晴天 (qíngtiān, día soleado y despejado), 阴天 (yīntiān, día nublado), 下雨 (xiàyǔ, llover / precipitación pluvial) y 刮风 (guāfēng, soplar viento).

El núcleo milenario de la agricultura tradicional china descansa en dos cultivos cardinales: el arroz (水稻, shuǐdào en el campo; 大米, dàmǐ como grano cosechado; 米饭, mǐfàn como alimento cocido) en las cuencas fluviales templadas del sur y centro, y el trigo (小麦, xiǎomài) en las planicies secas del norte. Para designar el acto de sembrar y cultivar se emplean verbos precisos como 播种 (bōzhǒng, esparcir semillas), 耕地 (gēngdì, labrar o arar la tierra fértil) y 收割 (shōugē, segar o cosechar los cereales maduros).

Junto a los cereales, la cultura del té (茶文化, chá wénhuà) constituye una cumbre de la interacción armónica con el paisaje montañoso. Las hojas de té (茶叶, cháyè) se recolectan a mano en laderas con niebla matutina constante y tierra porosa, dando lugar a variedades célebres como el té verde (绿茶, lǜchá), el té negro o rojo sínico (红茶, hóngchá), el té Oolong semifermentado (乌龙茶, wūlóngchá) y el té de jazmín (茉莉花茶, mòlìhuāchá). El respeto a los ciclos de la tierra (土地, tǔdì) y a los manantiales de montaña (山泉水, shānquánshuǐ) es indispensable para obtener una infusión pura.

En el contexto de la integración agrícola salvadoreña, los conocimientos agrícolas de los horticultores de origen chino aportaron técnicas de irrigación eficiente, cultivos de hortalizas orientales (como la col china 白菜 báicài y el jengibre 生姜 shēngjiāng) y respeto minucioso al ciclo de lluvias en los valles del departamento de La Libertad y Sonsonate. La lengua china ofrece así un vocabulario exacto para dialogar con los ciclos de la tierra y cuidar el equilibrio ambiental.

El pensamiento ecol?gico chino tradicional, compendiado en la m?xima dao?sta de la "Unidad entre el Cielo y la Humanidad" (???? ti?n r?n h? y?), postula que la actividad agr?cola y el aprovechamiento de los recursos naturales deben armonizarse estrictamente con el flujo estacional del cosmos. El calendario agr?cola tradicional subdivide el a?o solar en veinticuatro t?rminos solares (????? ?rsh?s? ji?q?), tales como el Comienzo de la Primavera (?? L?ch?n) o la Lluvia de Granos (?? G?y?), dictando con exactitud astron?mica las fechas ?ptimas para la siembra de arroz, la poda de moreras y la cosecha del t? verde. Esta sabidur?a milenaria no concibe a la naturaleza como un objeto inerte de dominaci?n t?cnica, sino como un organismo vivo cuya preservaci?n es consustancial al florecimiento humano.`,
    solvedDialogues: [
      {
        id: 'zh-dial-3-1',
        title: 'Observación del clima primaveral y la lluvia en el campo',
        context: 'Dos campesinos contemplan la llegada de las lluvias en la ladera de una montaña.',
        turns: [
          {
            speaker: '老张 (Viejo Zhang)',
            text: '你看，天阴了，马上要下春雨了。',
            translation: 'Mira, el cielo se ha nublado, enseguida va a caer la lluvia de primavera.',
            phonetic: 'Nǐ kàn, tiān yīn le, mǎshàng yào xià chūnyǔ le.'
          },
          {
            speaker: '小李 (Joven Li)',
            text: '春雨贵如油，这场雨对水稻太重要了！',
            translation: 'La lluvia de primavera vale más que el aceite; ¡esta precipitación es vital para el arroz!',
            phonetic: 'Chūnyǔ guì rú yóu, zhè cháng yǔ duì shuǐdào tài zhòngyào le!'
          },
          {
            speaker: '老张 (Viejo Zhang)',
            text: '下过雨后，我们就可以准备播种了。',
            translation: 'Después de que pase la lluvia, podremos preparar la siembra de semillas.',
            phonetic: 'Xià guò yǔ hòu, wǒmen jiù kěyǐ zhǔnbèi bōzhǒng le.'
          },
          {
            speaker: '小李 (Joven Li)',
            text: '希望今年风调雨顺，庄稼大丰收！',
            translation: '¡Esperemos que este año los vientos y las lluvias sean propicios y tengamos una gran cosecha!',
            phonetic: 'Xīwàng jīnnián fēng tiáo yǔ shùn, zhuāngjia dà fēngshōu!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Nǐ kàn (mira tú), tiān yīn le (cielo nublado ya), mǎshàng (de inmediato) yào xià chūnyǔ le (va a caer lluvia de primavera). / Chūnyǔ (lluvia primaveral) guì rú yóu (preciosa como aceite), zhè cháng (clasificador de eventos de lluvia) yǔ (lluvia) duì shuǐdào (para el arroz) tài zhòngyào le (demasiado importante)! / Xià guò yǔ hòu (después de haber llovido), wǒmen jiù kěyǐ (nosotros entonces podremos) zhǔnbèi bōzhǒng le (preparar siembra). / Xīwàng (esperar) jīnnián (este año) fēng tiáo yǔ shùn (clima equilibrado), zhuāngjia (sembradíos) dà fēngshōu (gran cosecha)!',
          syntaxPattern: 'Estructura modal de inminencia: 马上要...了 (mǎshàng yào... le, estar a punto de). Chengyu agrícola 風調雨順 / 风调雨顺.',
          culturalNotes: 'El refrán campesino 春雨贵如油 resalta el valor incalculable del agua en la brotación de los sembrados.'
        }
      },
      {
        id: 'zh-dial-3-2',
        title: 'Recolección de hojas tiernas en una plantación de té',
        context: 'Dos recolectoras seleccionan los brotes frescos de té en una colina matutina.',
        turns: [
          {
            speaker: '采茶姑娘 (Recolectora)',
            text: '采茶要选最嫩的“一芽一叶”。',
            translation: 'Para recolectar buen té hay que escoger el brote más tierno: "un brote y una hoja".',
            phonetic: 'Cǎi chá yào xuǎn zuì nèn de “yī yá yī yè”.'
          },
          {
            speaker: '学徒 (Aprendiz)',
            text: '这样采出来的绿茶味道才更清香吧？',
            translation: '¿Así el té verde cosechado tendrá un aroma y sabor mucho más puro y fresco?',
            phonetic: 'Zhèyàng cǎi chūlai de lǜchá wèidào cái gèng qīngxiāng ba?'
          },
          {
            speaker: '采茶姑娘 (Recolectora)',
            text: '对。清晨有晨雾，茶叶吸足了山川的灵气。',
            translation: 'Correcto. La niebla del amanecer hace que las hojas absorban la vitalidad pura de la montaña.',
            phonetic: 'Duì. Qīngchén yǒu chénwù, cháyè xī zú le shānchuān de língqì.'
          },
          {
            speaker: '学徒 (Aprendiz)',
            text: '大自然给予我们的礼物真神奇！',
            translation: '¡Los regalos que la madre naturaleza nos brinda son verdaderamente maravillosos!',
            phonetic: 'Dàzìrán jǐyǔ wǒmen de lǐwù zhēn shénqí!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Cǎi chá (recolectar té) yào xuǎn (se debe elegir) zuì nèn de (lo más tierno de) yī yá yī yè (un brote una hoja). / Zhèyàng (de este modo) cǎi chūlai de (recolectado hacia afuera) lǜchá (té verde) wèidào (sabor/olor) cái (solo entonces) gèng qīngxiāng (más aromático) ba? / Duì. Qīngchén (temprano en la mañana) yǒu chénwù (hay niebla matinal), cháyè (hojas de té) xī zú le (absorbieron a plenitud) shānchuān de (de montañas y ríos) língqì (energía viva/espíritu). / Dàzìrán (la naturaleza) jǐyǔ wǒmen de (otorgado a nosotros) lǐwù (regalo) zhēn shénqí (muy mágico/asombroso)!',
          syntaxPattern: 'Uso de la frase de cuatro caracteres 一芽一叶 como criterio técnico agronómico. Adverbio condicional 才 (cái).',
          culturalNotes: 'La cosecha del té Qingming (明前茶) antes del festival del 5 de abril produce las hojas más valiosas de China.'
        }
      },
      {
        id: 'zh-dial-3-3',
        title: 'Cuidado del huerto de hortalizas y riego ecológico',
        context: 'Un agricultor instruye a su sobrino en el riego por goteo de los bancales de col china.',
        turns: [
          {
            speaker: '伯伯 (Tío paterno mayor)',
            text: '给白菜浇水要在太阳落山以后，不能在正午。',
            translation: 'El riego a la col china debe hacerse después de ocultarse el sol, nunca al mediodía.',
            phonetic: 'Gěi báicài jiāoshuǐ yào zài tàiyáng luòshān yǐhòu, bù néng zài zhèngwǔ.'
          },
          {
            speaker: '侄子 (Sobrino)',
            text: '为什么呢？正午浇水会伤到菜根吗？',
            translation: '¿Por qué razón? ¿Regar al mediodía quema y daña las raíces de la planta?',
            phonetic: 'Wèishénme ne? Zhèngwǔ jiāoshuǐ huì shāng dào càigēn ma?'
          },
          {
            speaker: '伯伯 (Tío paterno mayor)',
            text: '是的，土太热，冷水会把根烫坏。',
            translation: 'Así es, la tierra está demasiado caliente y el agua fría estropea las raíces.',
            phonetic: 'Shì de, tǔ tài rè, lěngshuǐ huì bǎ gēn tàng huài.'
          },
          {
            speaker: '侄子 (Sobrino)',
            text: '种菜的学问真深，我们要顺应自然。',
            translation: 'La ciencia del cultivo de la tierra es muy profunda; debemos seguir el compás de la naturaleza.',
            phonetic: 'Zhòng cài de xuéwèn zhēn shēn, wǒmen yào shùnyìng zìrán.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Gěi báicài jiāoshuǐ (regar agua a la col china) yào zài (debe ser en) tàiyáng luòshān yǐhòu (después que caiga el sol), bù néng (no se puede) zài zhèngwǔ (en el mediodía). / Wèishénme ne (por qué)? Zhèngwǔ jiāoshuǐ (regar a mediodía) huì shāng dào (puede lastimar a) càigēn (raíz vegetal) ma? / Shì de, tǔ (tierra) tài rè (demasiado caliente), lěngshuǐ (agua fría) huì bǎ gēn (disposición ba: la raíz) tàng huài (dañar por calor). / Zhòng cài de xuéwèn (la sabiduría del cultivo) zhēn shēn (muy profunda), wǒmen yào shùnyìng zìrán (adaptarnos con docilidad a la naturaleza).',
          syntaxPattern: 'Construcción con 把 (bǎ) que focaliza la afectación directa sobre el objeto: 把根烫坏 (arruinar las raíces).',
          culturalNotes: 'El principio taoísta de 顺应自然 (seguir el curso natural de las cosas) es la base de la agroecología tradicional china.'
        }
      },
      {
        id: 'zh-dial-3-4',
        title: 'La cosecha otoñal de cereales dorados',
        context: 'Dos campesinos festejan la finalización de la siega del arroz en el valle.',
        turns: [
          {
            speaker: '老刘 (Viejo Liu)',
            text: '秋天到了，田里的稻子全变成金黄色了。',
            translation: 'Ha llegado el otoño, el arrozal en los campos se ha tornado por completo de color dorado.',
            phonetic: 'Qiūtiān dào le, tián lǐ de dàozi quán biàn chéng jīnhuángsè le.'
          },
          {
            speaker: '老周 (Viejo Zhou)',
            text: '稻穗沉甸甸的，这说明颗粒非常饱满！',
            translation: 'Las espigas cuelgan pesadas por su grano; ¡eso demuestra que el arroz está rebosante!',
            phonetic: 'Dàosuì chéndiāndiān de, zhè shuōmíng kēlì fēicháng bǎomǎn!'
          },
          {
            speaker: '老刘 (Viejo Liu)',
            text: '一分耕耘，一分收获，辛勤劳动换来了成果。',
            translation: 'A cada porción de arado corresponde una porción de cosecha; el trabajo arduo rinde su fruto.',
            phonetic: 'Yì fēn gēngyún, yì fēn shōuhuò, xīnqín láodòng huàn lái le chéngguǒ.'
          },
          {
            speaker: '老周 (Viejo Zhou)',
            text: '我们明天把新米送给邻居们尝尝！',
            translation: '¡Mañana compartiremos del arroz recién cosechado con los vecinos para que lo prueben!',
            phonetic: 'Wǒmen míngtiān bǎ xīnmǐ sòng gěi línjūmen chángchang!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Qiūtiān dào le (otoño llegó ya), tián lǐ de dàozi (el arroz en los campos) quán (todo) biàn chéng (convertirse en) jīnhuángsè (dorado) le. / Dàosuì (espigas de arroz) chéndiāndiān de (pesadas/cargadas), zhè shuōmíng (esto explica) kēlì (granos) fēicháng bǎomǎn (muy llenos/plenos)! / Yì fēn gēngyún, yì fēn shōuhuò (un tanto de siembra, un tanto de cosecha), xīnqín láodòng (trabajo diligente) huàn lái le (obtuvo) chéngguǒ (frutos). / Wǒmen míngtiān bǎ xīnmǐ (el arroz nuevo) sòng gěi (enviar/regalar a) línjūmen (vecinos) chángchang (probar un poco)!',
          syntaxPattern: 'Reduplicación verbal chángchang (尝尝, probar un poco). Aforismo tradicional 一分耕耘，一分收获.',
          culturalNotes: 'Compartir las primicias de la cosecha con los vecinos refuerza el tejido de hermandad en los pueblos rurales.'
        }
      },
      {
        id: 'zh-dial-3-5',
        title: 'Paseo por el bosque de bambú y admiración del paisaje',
        context: 'Dos amigos disfrutan del aire puro y el sonido del viento entre las cañas de bambú.',
        turns: [
          {
            speaker: '明华 (Míng Huá)',
            text: '竹林里的空气真清新，听微风吹过竹叶的声音。',
            translation: 'El aire dentro del bosque de bambú es tan puro; escucha el rumor de la brisa entre las cañas.',
            phonetic: 'Zhúlín lǐ de kōngqì zhēn qīngxīn, tīng wēifēng chuī guò zhúyè de shēngyīn.'
          },
          {
            speaker: '志刚 (Zhì Gāng)',
            text: '竹子挺拔而有节，古人把它比作君子的品格。',
            translation: 'El bambú es erguido y tiene nudos firmes; los sabios antiguos lo compararon con la rectitud del noble.',
            phonetic: 'Zhúzi tǐngbá ér yǒu jié, gǔrén bǎ tā bǐ zuò jūnzǐ de pǐngé.'
          },
          {
            speaker: '明华 (Míng Huá)',
            text: '对，未出土时先有节，到凌云处仍虚心。',
            translation: 'Cierto: antes de brotar de la tierra ya tiene nudos, y al tocar las nubes conserva su interior humilde y hueco.',
            phonetic: 'Duì, wèi chūtǔ shí xiān yǒu jié, dào língyún chù réng xūxīn.'
          },
          {
            speaker: '志刚 (Zhì Gāng)',
            text: '走在山林间，身心都感到无比宁静。',
            translation: 'Caminar por estos bosques de montaña llena el cuerpo y el espíritu de una serenidad inmensa.',
            phonetic: 'Zǒu zài shānlín jiān, shēnxīn dōu gǎndào wúbǐ níngjìng.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Zhúlín lǐ de (dentro del cañaveral de bambú) kōngqì (aire) zhēn qīngxīn (muy fresco), tīng (escuchar) wēifēng (brisa leve) chuī guò (soplar a través) zhúyè de shēngyīn (sonido de hojas de bambú). / Zhúzi (el bambú) tǐngbá (erguido) ér (y además) yǒu jié (tiene nudos/integridad), gǔrén (los antiguos) bǎ tā (a él) bǐ zuò (comparar con) jūnzǐ de pǐngé (el carácter del hombre noble). / Duì, wèi chūtǔ shí (cuando aún no brota del suelo) xiān yǒu jié (primero tiene nudos), dào língyún chù (al llegar a rozar nubes) réng xūxīn (sigue teniendo corazón vacío/humilde). / Zǒu zài shānlín jiān (caminando en medio de montes), shēnxīn dōu gǎndào (cuerpo y mente sienten) wúbǐ níngjìng (incomparable paz).',
          syntaxPattern: 'Uso del juego poético de palabras: 虚心 (xūxīn) significa literalmente "interior hueco" en botánica, y "humildad" en moral confuciana.',
          culturalNotes: 'El bambú es uno de los "Cuatro Nobles" (四君子: ciruelo, orquídea, bambú y crisantemo) de la pintura y poesía clásica china.'
        }
      }
    ]
  },
  {
    id: 'zh-comm-4',
    topic: 'Comercio e Intercambio',
    title: '商业与贸易: Negociación, Tiendas Tradicionales y Mercado en Mandarín',
    substantiveGuide: `El intercambio mercantil y la cultura comercial (商业文化, shāngyè wénhuà) ostentan una trayectoria milenaria en el mundo sínico, desde las históricas caravanas de la Ruta de la Seda (丝绸之路, Sīchóu zhī Lù) hasta los bulliciosos mercados urbanos y las transacciones digitales del siglo XXI. En el aprendizaje del chino mandarín, dominar el léxico comercial, la estructura de precios y el arte de la cortesía en la compraventa es indispensable para desenvolverse con solvencia en cualquier entorno hispano-chino.

La unidad monetaria básica de China es el Renminbi (人民币, Rénmínbì), cuya unidad principal es el Yuán (元 o en el lenguaje oral coloquial 块 kuài). El yuán se subdivide en diez Jiǎo (角 o coloquialmente 毛 máo), y cada jiǎo se subdivide a su vez en diez Fēn (分). En el ámbito del comercio exterior o en El Salvador, donde la moneda de curso legal es el dólar estadounidense, este se traduce como 美元 (měiyuán) o coloquialmente 美金 (měijīn).

Para consultar el precio de una mercancía, la fórmula estándar universal es: 这个多少钱？(Zhè gè duōshao qián? ¿Cuánto cuesta esto?). Si se desea saber el valor por unidad o por peso (como el jin 市斤, equivalente tradicional a 500 gramos): 一斤多少钱？(Yì jīn duōshao qián? ¿Cuánto cuesta medio kilo?). La respuesta sigue la estructura directa: 词语 + 数量 + 货币单位 (ej. 一共三十五块钱, Yígòng sānshíwǔ kuài qián, en total son treinta y cinco yuanes).

El arte del regateo y la negociación (讨价还价, tǎojià huánhuà) en mercadillos tradicionales y bazares requiere delicadeza pragmática. Ante un precio elevado, el cliente suele exclamar con sorpresa educada: 太贵了，能便宜一点吗？(Tài guì le, néng piányi yìdiǎn ma? Es demasiado caro, ¿podría rebajar un poco?). El comerciante puede responder ofreciendo un descuento o explicando la calidad insuperable del artículo: 一分钱一分货 (Yì fēn qián yì fēn huò, la calidad corresponde exactamente al precio pagado). Si se conviene una rebaja, se utiliza el término 打折 (dǎzhé, aplicar descuento): por ejemplo, 打八折 (dǎ bā zhé) significa pagar el 80% del valor nominal, es decir, un 20% de descuento.

Al concretar el pago, el comprador pregunta por la modalidad: 可以刷卡吗？(Kěyǐ shuākǎ ma? ¿Se puede pagar con tarjeta?), ¿支持移动支付吗？(Zhīchí yídòng zhīfù ma? ¿Aceptan pago móvil?) o Cash: 我付现金 (Wǒ fù xiànjīn, pago en efectivo). El tendero entrega la mercancía acompañada de fórmulas hospitalarias: 请拿好 (Qǐng ná hǎo, tome con cuidado su compra), 这是找您的钱 (Zhè shì zhǎo nín de qián, este es su cambio) y 欢迎下次光临 (Huānyíng xià cì guānglín, bienvenido de nuevo en su próxima visita).

En la cultura empresarial y comercial del mundo sinohablante, las transacciones econ?micas van indisolublemente unidas a la construcci?n de relaciones de confianza mutua duradera o 'guanxi' (?? gu?nx?). Lejos de concebirse como un mero regateo utilitario e inmediato, el acuerdo comercial exitoso se forja a menudo en torno a mesas de t? o banquetes formales donde se eval?a la sinceridad, la generosidad y el compromiso ?tico de la contraparte. El concepto de 'rostro' o prestigio moral (?? mi?nzi) exige que las negociaciones se conduzcan con elegancia, evitando la confrontaci?n directa o poner en evidencia p?blica los errores del socio. Al comprender estos c?digos culturales profundos, los estudiantes de APP-KUSKAT adquieren una ventaja competitiva excepcional para la diplomacia, los negocios internacionales y el entendimiento intercultural de vanguardia.`,
    solvedDialogues: [
      {
        id: 'zh-dial-4-1',
        title: 'Preguntando el precio y comprando frutas en el mercado',
        context: 'Un comprador selecciona manzanas frescas en un puesto de frutas.',
        turns: [
          {
            speaker: '顾客 (Cliente)',
            text: '老板，请问这个红苹果多少钱一斤？',
            translation: 'Dueño del puesto, disculpe, ¿a cuánto está el medio kilo de estas manzanas rojas?',
            phonetic: 'Lǎobǎn, qǐngwèn zhè gè hóng píngguǒ duōshao qián yì jīn?'
          },
          {
            speaker: '老板 (Vendedor)',
            text: '五块钱一斤，很甜很新鲜，刚刚进的货。',
            translation: 'A cinco yuanes el medio kilo; están muy dulces y frescas, recién llegadas.',
            phonetic: 'Wǔ kuài qián yì jīn, hěn tián hěn xīnxiān, gānggāng jìn de huò.'
          },
          {
            speaker: '顾客 (Cliente)',
            text: '给我来两斤吧。一共多少钱？',
            translation: 'Deme un kilo (dos jins), por favor. ¿Cuánto es en total?',
            phonetic: 'Gěi wǒ lái liǎng jīn ba. Yígòng duōshao qián?'
          },
          {
            speaker: '老板 (Vendedor)',
            text: '两斤正好十块钱。给你装在袋子里了。',
            translation: 'Dos jins son exactamente diez yuanes. Ya se las he empacado en la bolsa.',
            phonetic: 'Liǎng jīn zhènghǎo shí kuài qián. Gěi nǐ zhuāng zài dàizi lǐ le.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Lǎobǎn (jefe/dueño), qǐngwèn (disculpe preguntar) zhè gè hóng píngguǒ (esta manzana roja) duōshao qián (cuánto dinero) yì jīn (un jin/medio kilo)? / Wǔ kuài qián yì jīn (cinco yuanes un jin), hěn tián (muy dulce) hěn xīnxiān (muy fresca), gānggāng (recién) jìn de huò (mercancía ingresada). / Gěi wǒ lái (deme a mí / sírvame) liǎng jīn ba (dos jins). Yígòng (en total) duōshao qián? / Liǎng jīn zhènghǎo (exactamente) shí kuài qián. Gěi nǐ zhuāng zài (colocado para ti en) dàizi lǐ (interior de la bolsa) le.',
          syntaxPattern: 'Uso del verbo 来 (lái) en imperativo coloquial comercial: 给我来两斤 (tráigame/sírvame dos jins). Clasificador de peso 斤 (jīn).',
          culturalNotes: 'El término 老板 (lǎobǎn) es la fórmula universal y amistosa para dirigirse al dependiente o dueño de cualquier negocio en China.'
        }
      },
      {
        id: 'zh-dial-4-2',
        title: 'Negociando el precio de una artesanía de seda',
        context: 'Un turista negocia el precio de un abanico tradicional bordado a mano.',
        turns: [
          {
            speaker: '顾客 (Turista)',
            text: '这把丝绸扇子真精致！请问怎么卖？',
            translation: '¡Qué primoroso y delicado está este abanico de seda! ¿A cuánto lo vende?',
            phonetic: 'Zhè bǎ sīchóu shànzi zhēn jīngzhì! Qǐngwèn zěnme mài?'
          },
          {
            speaker: '店员 (Dependiente)',
            text: '这是手工刺绣的，一件一百八十块。',
            translation: 'Este es bordado a mano artesanal, sale a ciento ochenta yuanes la pieza.',
            phonetic: 'Zhè shì shǒugōng cìxiù de, yí jiàn yì bǎi bāshí kuài.'
          },
          {
            speaker: '顾客 (Turista)',
            text: '有点太贵了。如果我买两把，能便宜一点吗？',
            translation: 'Está un poco caro. Si compro dos piezas, ¿podría hacerme una rebajita?',
            phonetic: 'Yǒudiǎn tài guì le. Rúguǒ wǒ mǎi liǎng bǎ, néng piányi yìdiǎn ma?'
          },
          {
            speaker: '店员 (Dependiente)',
            text: '行吧，两把算你三百块，怎么样？',
            translation: 'Está bien, por dos abanicos se los dejo en trescientos yuanes cerrados, ¿le parece?',
            phonetic: 'Xíng ba, liǎng bǎ suàn nǐ sān bǎi kuài, zěnmeyàng?'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Zhè bǎ (clasificador para objetos con mango: abanico) sīchóu shànzi (abanico de seda) zhēn jīngzhì (muy fino)! Qǐngwèn zěnme mài (cómo se vende)? / Zhè shì shǒugōng cìxiù de (es hecho de bordado a mano), yí jiàn (una pieza) yì bǎi bāshí kuài (180 yuanes). / Yǒudiǎn tài guì le (un poco demasiado caro). Rúguǒ (si condicional) wǒ mǎi liǎng bǎ (compro dos), néng piányi yìdiǎn (puede abaratar un poco) ma? / Xíng ba (de acuerdo), liǎng bǎ suàn nǐ (te calculo) sān bǎi kuài (300 yuanes), zěnmeyàng (qué tal)?',
          syntaxPattern: 'Condicional con 如果... (rúguǒ...). Adverbio de grado desfavorable 有点 (yǒudiǎn) ante adjetivo: 有点贵 (un poco caro).',
          culturalNotes: 'El regateo amistoso se basa en el principio de ganar-ganar (双赢 shuāngyíng), preservando siempre la armonía entre comprador y vendedor.'
        }
      },
      {
        id: 'zh-dial-4-3',
        title: 'Probándose una prenda de vestir en una tienda de ropa',
        context: 'Una clienta se prueba una camisa tradicional y consulta por tallas y colores.',
        turns: [
          {
            speaker: '顾客 (Clienta)',
            text: '你好，这件衬衫有中号的吗？这件大号太大了。',
            translation: 'Hola, ¿tienen esta camisa en talla mediana? Esta talla grande me queda enorme.',
            phonetic: 'Nǐ hǎo, zhè jiàn chènshān yǒu zhōnghào de ma? Zhè jiàn dàhào tài dà le.'
          },
          {
            speaker: '售货员 (Vendedora)',
            text: '有的，请稍等，我帮您拿一件中号的试试。',
            translation: 'Sí tenemos, espere un momento por favor, le traigo una mediana para que se la pruebe.',
            phonetic: 'Yǒu de, qǐng shāo děng, wǒ bāng nín ná yí jiàn zhōnghào de shìshi.'
          },
          {
            speaker: '顾客 (Clienta)',
            text: '这件大小正合适！还有别的颜色吗？',
            translation: '¡Esta talla me queda a la medida exacta! ¿Tienen algún otro color?',
            phonetic: 'Zhè jiàn dàxiǎo zhèng héshì! Hái yǒu bié de yánsè ma?'
          },
          {
            speaker: '售货员 (Vendedora)',
            text: '还有深蓝色和浅白色的，都非常受欢迎。',
            translation: 'También nos queda en azul marino y blanco perla, ambos son muy solicitados.',
            phonetic: 'Hái yǒu shēnlánsè hé qiǎnbáisè de, dōu fēicháng shòu huānyíng.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Nǐ hǎo, zhè jiàn (clasificador de ropa) chènshān (camisa) yǒu zhōnghào de (talla M) ma? Zhè jiàn dàhào (talla L) tài dà le (demasiado grande). / Yǒu de (sí hay), qǐng shāo děng (espere un instante), wǒ bāng nín (yo ayudo a usted) ná (traer) yí jiàn zhōnghào de (una talla M) shìshi (probarse). / Zhè jiàn dàxiǎo (tamaño) zhèng héshì (justo apropiado)! Hái yǒu (todavía hay) bié de yánsè (otros colores) ma? / Hái yǒu shēnlánsè (azul oscuro) hé qiǎnbáisè (blanco claro) de, dōu fēicháng shòu huānyíng (muy recibidos con agrado/populares).',
          syntaxPattern: 'Reduplicación tentativa verbal 试试 (shìshi, probarse a ver qué tal). Expresión pasiva 受欢迎 (ser bien recibido / popular).',
          culturalNotes: 'Las tallas en China se codifican habitualmente como 小号 (xiǎohào, S), 中号 (zhōnghào, M), 大号 (dàhào, L) y 特大号 (tèdàhào, XL).'
        }
      },
      {
        id: 'zh-dial-4-4',
        title: 'Modalidad de pago y emisión del comprobante fiscal',
        context: 'Un comensal paga la cuenta en un restaurante chino de San Salvador.',
        turns: [
          {
            speaker: '顾客 (Cliente)',
            text: '服务员，买单！请问可以刷信用卡吗？',
            translation: '¡Camarero, la cuenta por favor! ¿Disculpe, puedo pagar con tarjeta de crédito?',
            phonetic: 'Fúwùyuán, mǎidān! Qǐngwèn kěyǐ shuā xìnyòngkǎ ma?'
          },
          {
            speaker: '服务员 (Camarero)',
            text: '当然可以，信用卡或者现金都可以。',
            translation: 'Por supuesto que sí, tanto tarjeta de crédito como efectivo son bienvenidos.',
            phonetic: 'Dāngrán kěyǐ, xìnyòngkǎ huòzhě xiànjīn dōu kěyǐ.'
          },
          {
            speaker: '顾客 (Cliente)',
            text: '好的，给您卡。请帮我开一张发票。',
            translation: 'De acuerdo, aquí tiene la tarjeta. Por favor hágame una factura.',
            phonetic: 'Hǎo de, gěi nín kǎ. Qǐng bāng wǒ kāi yì zhāng fāpiào.'
          },
          {
            speaker: '服务员 (Camarero)',
            text: '没问题。这是您的卡和小票，欢迎下次光临！',
            translation: 'Sin problema. Aquí tiene de vuelta su tarjeta y el recibo, ¡lo esperamos pronto de nuevo!',
            phonetic: 'Méi wèntí. Zhè shì nín de kǎ hé xiǎopiào, huānyíng xià cì guānglín!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Fúwùyuán (camarero), mǎidān (pagar la cuenta)! Qǐngwèn kěyǐ shuā xìnyòngkǎ (deslizar tarjeta de crédito) ma? / Dāngrán kěyǐ (por supuesto se puede), xìnyòngkǎ huòzhě xiànjīn (tarjeta de crédito o efectivo) dōu kěyǐ (ambos se pueden). / Hǎo de, gěi nín kǎ (dar a usted la tarjeta). Qǐng bāng wǒ kāi (abrir/emitir) yì zhāng fāpiào (una factura fiscal). / Méi wèntí (no hay problema). Zhè shì nín de kǎ hé xiǎopiào (recibo), huānyíng xià cì guānglín (bienvenido a su próxima visita)!',
          syntaxPattern: 'Locución comercial 买单 (mǎidān, pedir la cuenta). Verbo instrumental 刷 (shuā, deslizar tarjeta).',
          culturalNotes: 'Pedir 发票 (fāpiào, comprobante fiscal) es una práctica formal indispensable en la contabilidad corporativa china.'
        }
      },
      {
        id: 'zh-dial-4-5',
        title: 'Despacho y embalaje de mercancía para exportación',
        context: 'Dos comerciantes coordinan el empaque y envío de un lote de artesanías de añil.',
        turns: [
          {
            speaker: '买方 (Comprador)',
            text: '这批萨尔瓦多蓝靛染织品什么时候能发货？',
            translation: '¿Cuándo se podrá realizar el despacho de este lote de textiles teñidos con añil salvadoreño?',
            phonetic: 'Zhè pī Sà’ěrwǎduō lándiàn rǎnzhīpǐn shénme shíhou néng fāhuò?'
          },
          {
            speaker: '供货商 (Proveedor)',
            text: '货物已经仔细包装好了，明天一早就可以发运。',
            translation: 'La mercancía ya ha sido embalada minuciosamente, mañana temprano se despacha sin falta.',
            phonetic: 'Huòwù yǐjīng zǐxì bāozhuāng hǎo le, míngtiān yì zǎo jiù kěyǐ fāyùn.'
          },
          {
            speaker: '买方 (Comprador)',
            text: '太好了，产品质量一流，我们在展会上一定会大卖。',
            translation: '¡Excelente! La calidad del producto es de primer nivel; tendremos gran éxito en la feria.',
            phonetic: 'Tài hǎo le, chǎnpǐn zhìliàng yīliú, wǒmen zài zhǎnhuì shang yídìng huì dà mài.'
          },
          {
            speaker: '供货商 (Proveedor)',
            text: '预祝我们合作愉快，互利共赢！',
            translation: '¡Les auguro una colaboración comercial fructífera y de mutuo beneficio!',
            phonetic: 'Yùzhù wǒmen hézuò yúkuài, hùlì gòngyíng!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Zhè pī (este lote) Sà’ěrwǎduō lándiàn (añil salvadoreño) rǎnzhīpǐn (textiles teñidos) shénme shíhou (cuándo) néng fāhuò (puede despachar mercancía)? / Huòwù (mercancías) yǐjīng (ya) zǐxì (minuciosamente) bāozhuāng hǎo le (empacado listo ya), míngtiān yì zǎo (mañana temprano) jiù kěyǐ fāyùn (entonces se puede enviar). / Tài hǎo le, chǎnpǐn zhìliàng yīliú (calidad de producto de primera), wǒmen zài zhǎnhuì shang (nosotros en la exposición) yídìng huì (con certeza) dà mài (vender en grande). / Yùzhù (desear de antemano) wǒmen hézuò yúkuài (nuestra cooperación feliz), hùlì gòngyíng (mutuo beneficio y victoria compartida)!',
          syntaxPattern: 'Uso del chengyu comercial por excelencia 互利共赢 (hùlì gòngyíng, beneficio mutuo). Marcador temporal de inmediatez 一早 (yì zǎo).',
          culturalNotes: 'El comercio entre El Salvador y China destaca productos emblemáticos como el café de altura y el añil artesanal (蓝靛).'
        }
      }
    ]
  },
  {
    id: 'zh-comm-5',
    topic: 'Cosmovisión y Narrativa',
    title: '哲学与节庆: Cosmovisión China, el Año Nuevo Lunar y Tradición Filosófica',
    substantiveGuide: `La cosmovisión tradicional china (世界观, shìjièguān) se articula sobre un trípode de corrientes de pensamiento que han convivido en sincretismo armónico a lo largo de más de dos milenios: el confucianismo (儒家, Rújiā), centrado en la ética social, la piedad filial y el recto gobierno; el taoísmo (道家, Dàojiā), enfocado en la armonización con el flujo primordial del universo (道, Dào) y la no-acción forzada (无为, wúwéi); y el budismo mahayana (佛教, Fójiào), que introdujo nociones de compasión universal y transitoriedad fenoménica.

El concepto nuclear de este sistema ontológico es la dualidad complementaria del Yīn y el Yáng (阴阳, yīnyáng). Lejos de concebir el bien y el mal como principios maniqueos e irreconciliables, el pensamiento sínico postula que todos los fenómenos del cosmos se transforman continuamente a través de la interacción de dos polaridades interdependientes: Yīn (lo oscuro, receptivo, femenino, frío, lunar, terrenal) y Yáng (lo luminoso, activo, masculino, cálido, solar, celeste). De su equilibrio dinámico brota la salud corporal, la paz comunitaria y la fecundidad de los campos.

Esta cosmovisión se plasma vívidamente en el ciclo de festivales tradicionales del calendario lunar (农历节日, nónglì jiérì). La festividad magna por excelencia es la Fiesta de la Primavera o Año Nuevo Chino (春节, Chūnjié), celebrada en la segunda luna nueva posterior al solsticio de invierno. Durante esta celebración de quince días, las familias viajan desde miles de kilómetros para reunirse en la cena de nochevieja (年夜饭, niányèfàn), comen empanadillas hervidas (饺子, jiǎozi) cuya forma evoca los antiguos lingotes de plata, pegan coplas primaverales rojas en los umbrales (春联, chūnlián) para ahuyentar las malas influencias y entregan sobres rojos con dinero de la buena suerte (红包, hóngbāo) a los niños y solteros.

Otras festividades esenciales son la Fiesta de las Linternas (元宵节, Yuánxiāojié), que corona el cierre del Año Nuevo con la danza del dragón y del león (舞龙舞狮, wǔlóng wǔshī); la Fiesta del Medio Otoño (中秋节, Zhōngqiūjié), donde se contempla la luna llena de agosto lunar mientras se degustan los pasteles de luna (月饼, yuèbǐng) como símbolo de plenitud familiar; y el Festival del Bote del Dragón (端午节, Duānwǔjié), en memoria del poeta patriota Qu Yuan.

En El Salvador, la celebración pública del Año Nuevo Chino y la danza del león en las plazas del centro histórico de San Salvador y recintos comunitarios congregan anualmente a miles de salvadoreños. La fiesta se transforma así en un puente vivo de fraternidad intercultural donde se comparten deseos mutuos de prosperidad económica y salud: 新年快乐 (Xīnnián kuàilè, ¡Feliz Año Nuevo!), 恭喜发财 (Gōngxǐ fācái, ¡Que la prosperidad y abundancia colmen su hogar!) y 万事如意 (Wànshì rúyì, ¡Que todos sus nobles anhelos se cumplan cabalmente!).

Las tradiciones art?sticas cl?sicas de China, particularmente el arte de la caligraf?a con pincel de pelo de cabra y tinta de holl?n de pino (?? sh?f?) y la pintura de paisajes monta?osos y aguas vivas (??? sh?nshu?hu?), constituyen senderos meditativos orientados a capturar el ritmo vital o 'q?' (?) del cosmos. En las celebraciones del A?o Nuevo Lunar, la confecci?n comunitaria de coplas antit?ticas en papel rojo (?? ch?nli?n) y la narraci?n oral de las gestas de h?roes como Sun Wukong (el Rey Mono) y Mulan transmiten de generaci?n en generaci?n la resiliencia ?tica, el optimismo y la veneraci?n por la paz c?smica que definen el alma de la civilizaci?n china.`,
    solvedDialogues: [
      {
        id: 'zh-dial-5-1',
        title: 'Preparación de la cena de Nochevieja y envoltura de empanadillas (jiaozi)',
        context: 'Una familia elabora jiaozi alrededor de la mesa la víspera del Año Nuevo Lunar.',
        turns: [
          {
            speaker: '奶奶 (Abuela)',
            text: '过年包饺子，象征着新的一年财源滚滚。',
            translation: 'Hacer empanadillas en Año Nuevo simboliza que las bendiciones y la prosperidad fluirán como agua.',
            phonetic: 'Guònián bāo jiǎozi, xiàngzhēng zhe xīn de yì nián cáiyuán gǔngǔn.'
          },
          {
            speaker: '孙子 (Nieto)',
            text: '奶奶，我包的饺子像不像古代的金元宝？',
            translation: 'Abuelita, ¿mi empanadilla se parece a los lingotes de oro de la antigüedad?',
            phonetic: 'Nǎinai, wǒ bāo de jiǎozi xiàng bu xiàng gǔdài de jīn yuánbǎo?'
          },
          {
            speaker: '奶奶 (Abuela)',
            text: '太像了！包得真结实，下锅煮绝对不会破。',
            translation: '¡Se parece muchísimo! Quedó bien sellada, al hervirla en la olla no se romperá.',
            phonetic: 'Tài xiàng le! Bāo de zhēn jiēshi, xià guō zhǔ juéduì bú huì pò.'
          },
          {
            speaker: '孙子 (Nieto)',
            text: '全家人一起动手做年夜饭，感觉真温暖！',
            translation: '¡Hacer todos juntos la cena de Nochevieja nos hace sentir un calor de hogar inmenso!',
            phonetic: 'Quán jiā rén yìqǐ dòngshǒu zuò niányèfàn, gǎnjué zhēn wēnnuǎn!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Guònián (celebrar año nuevo) bāo jiǎozi (envolver empanadillas), xiàngzhēng zhe (simbolizando) xīn de yì nián (el nuevo año) cáiyuán gǔngǔn (fuente de riquezas fluyendo). / Nǎinai, wǒ bāo de jiǎozi (el jiaozi que envolví) xiàng bu xiàng (¿se parece o no?) gǔdài de jīn yuánbǎo (lingotes de oro antiguos)? / Tài xiàng le! Bāo de zhēn jiēshi (envuelto muy firme), xià guō zhǔ (bajar a olla y hervir) juéduì bú huì pò (jamás se romperá). / Quán jiā rén (toda la familia) yìqǐ dòngshǒu (juntos mover las manos) zuò niányèfàn (cocinar cena de nochevieja), gǎnjué zhēn wēnnuǎn (sentir verdaderamente cálido)!',
          syntaxPattern: 'Pregunta afirmativo-negativa 像不像 (xiàng bu xiàng). Marcador de aspecto durativo 着 (zhe).',
          culturalNotes: 'La forma de media luna abombada del jiaozi imita los yuanbao (元宝) de oro o plata, deseando riqueza para el hogar.'
        }
      },
      {
        id: 'zh-dial-5-2',
        title: 'Intercambio de sobres rojos (Hongbao) y felicitaciones de Año Nuevo',
        context: 'Un niño saluda respetuosamente a su abuelo durante el primer día del Año Nuevo Lunar.',
        turns: [
          {
            speaker: '小明 (Xiǎomíng)',
            text: '爷爷，给您拜年了！祝您身体健康，长命百岁！',
            translation: '¡Abuelo, le presento mis respetos de Año Nuevo! ¡Le deseo salud de roble y larga vida centenaria!',
            phonetic: 'Yéye, gěi nín bài nián le! Zhù nín shēntǐ jiànkāng, chángmìng bǎi suì!'
          },
          {
            speaker: '爷爷 (Abuelo)',
            text: '好孩子！爷爷祝你学业进步，天天开心！拿着红包。',
            translation: '¡Qué buen muchacho! Tu abuelo te desea éxitos en los estudios y alegría diaria. Toma este sobre rojo.',
            phonetic: 'Hǎo háizi! Yéye zhù nǐ xuéyè jìnbù, tiāntiān kāixīn! Názhe hóngbāo.'
          },
          {
            speaker: '小明 (Xiǎomíng)',
            text: '谢谢爷爷！恭喜发财，万事如意！',
            translation: '¡Muchas gracias abuelo! ¡Que tenga gran prosperidad y que todos sus anhelos se cumplan cabalmente!',
            phonetic: 'Xièxie yéye! Gōngxǐ fācái, wànshì rúyì!'
          },
          {
            speaker: '爷爷 (Abuelo)',
            text: '新的一年，我们全家福禄双全！',
            translation: '¡En este nuevo año, que nuestra familia goce de dicha y bendiciones colmadas!',
            phonetic: 'Xīn de yì nián, wǒmen quán jiā fú lù shuāng quán!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yéye, gěi nín bài nián le (dar a usted saludo reverente de año nuevo)! Zhù nín (desear a usted) shēntǐ jiànkāng (cuerpo saludable), chángmìng bǎi suì (larga vida cien años)! / Hǎo háizi (buen niño)! Yéye zhù nǐ (abuelo te desea) xuéyè jìnbù (progreso en estudios), tiāntiān kāixīn (todos los días feliz)! Názhe (sostén/toma) hóngbāo (sobre rojo). / Xièxie yéye! Gōngxǐ fācái (enhorabuena por la prosperidad), wànshì rúyì (diez mil asuntos según tus deseos)! / Xīn de yì nián, wǒmen quán jiā (toda nuestra familia) fú lù shuāng quán (bendición y fortuna plenas)!',
          syntaxPattern: 'Uso de fórmulas tetrasilábicas de buenos augurios (吉言 jíyán): 身体健康, 长命百岁, 万事如意.',
          culturalNotes: 'El color rojo del sobre (压岁钱 yāsuìqián) simboliza la energía vital auspiciosa que protege a los menores contra la adversidad.'
        }
      },
      {
        id: 'zh-dial-5-3',
        title: 'Significado de la Danza del Dragón y del León en la fiesta patronal',
        context: 'Dos espectadores observan maravillados la danza acrobática del león en la plaza capitalina.',
        turns: [
          {
            speaker: '观光客 (Espectador)',
            text: '那两只彩色狮子跳得真高，锣鼓声太震撼了！',
            translation: '¡Esos dos leones de colores saltan altísimo; el estruendo de los gongs y tambores es impresionante!',
            phonetic: 'Nà liǎng zhī cǎisè shīzi tiào de zhēn gāo, luógǔ shēng tài zhènhàn le!'
          },
          {
            speaker: '华人同胞 (Vecino chino)',
            text: '舞狮能驱赶邪气，带来吉祥如意和好运。',
            translation: 'La danza del león ahuyenta los malos espíritus y atrae la bienandanza y la fortuna.',
            phonetic: 'Wǔshī néng qūgǎn xiéqì, dàilái jíxiáng rúyì hé hǎoyùn.'
          },
          {
            speaker: '观光客 (Espectador)',
            text: '狮子嘴里咬的青菜有什么讲究吗？',
            translation: '¿Tiene algún simbolismo especial la lechuga que el león atrapa en su boca?',
            phonetic: 'Shīzi zuǐ lǐ yǎo de qīngcài yǒu shénme jiǎngjiu ma?'
          },
          {
            speaker: '华人同胞 (Vecino chino)',
            text: '那叫“采青”，“青”和发财的“生”谐音，代表生财！',
            translation: 'Se llama "cǎi qīng" (recoger el verde); "qīng" suena igual a "shēng" (brotar riqueza), ¡representa prosperidad!',
            phonetic: 'Nà jiào “cǎi qīng”, “qīng” hé fācái de “shēng” xiéyīn, dàibiǎo shēngcái!'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Nà liǎng zhī (esos dos clasificador de animales) cǎisè shīzi (leones coloridos) tiào de zhēn gāo (saltan verdaderamente alto), luógǔ shēng (sonido de gongs y tambores) tài zhènhàn le (muy impactante)! / Wǔshī (danzar el león) néng qūgǎn xiéqì (puede disipar energías negativas), dàilái (traer consigo) jíxiáng rúyì (augurio favorable según deseos) hé hǎoyùn (buena suerte). / Shīzi zuǐ lǐ yǎo de (mordido en la boca del león) qīngcài (verdura verde) yǒu shénme jiǎngjiu (qué significado ritual) ma? / Nà jiào cǎi qīng (eso se llama recoger el verdor), qīng hé fācái de shēng xiéyīn (homófono de engendrar riquezas), dàibiǎo shēngcái (representa generar prosperidad)!',
          syntaxPattern: 'Construcción de homofonía simbólica: A 和 B 谐音 (A hé B xiéyīn, A es homófono con B).',
          culturalNotes: 'El juego de homófonos (谐音文化) es la base de incontables rituales y metáforas auspiciosas en la tradición sínica.'
        }
      },
      {
        id: 'zh-dial-5-4',
        title: 'Celebración de la Fiesta del Medio Otoño y contemplación de la luna',
        context: 'Dos amigos degustan pasteles de luna en una terraza bajo la luna llena otoñal.',
        turns: [
          {
            speaker: '丽华 (Lìhuá)',
            text: '今晚的月亮又大又圆，尝尝这块豆沙月饼吧。',
            translation: 'La luna de esta noche está grandísima y redonda; prueba este pastel de luna de pasta de frijol dulce.',
            phonetic: 'Jīnwǎn de yuèliang yòu dà yòu yuán, chángchang zhè kuài dòushā yuèbǐng ba.'
          },
          {
            speaker: '建国 (Jiànguó)',
            text: '谢谢！“但愿人长久，千里共婵娟”，苏轼的诗写得真好。',
            translation: '¡Gracias! "Que gocemos de larga vida y compartamos la belleza lunar aunque estemos a mil leguas", hermoso poema de Su Shi.',
            phonetic: 'Xièxie! “Dànyuàn rén chángjiǔ, qiānlǐ gòng chánjuān”, Sū Shì de shī xiě de zhēn hǎo.'
          },
          {
            speaker: '丽华 (Lìhuá)',
            text: '月饼的圆形象征着团圆，远方的亲人也在看同一轮明月。',
            translation: 'La forma redonda del pastel simboliza la unidad; los seres queridos lejanos contemplan esta misma luna.',
            phonetic: 'Yuèbǐng de yuánxíng xiàngzhēng zhe tuányuán, yuǎnfāng de qīnrén yě zài kàn tóng yì lún míngyuè.'
          },
          {
            speaker: '建国 (Jiànguó)',
            text: '中秋节的温情，把世界各地的人们连在了一起。',
            translation: 'La ternura y fraternidad del Medio Otoño unen a personas de todos los rincones del mundo.',
            phonetic: 'Zhōngqiūjié de wēnqíng, bǎ shìjiè gèdì de rénmen lián zài le yìqǐ.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Jīnwǎn de yuèliang (la luna de esta noche) yòu dà yòu yuán (tanto grande como redonda), chángchang (prueba) zhè kuài (clasificador de pedazos) dòushā yuèbǐng (pastel de luna de pasta dulce) ba. / Xièxie! Dànyuàn rén chángjiǔ (ojalá las personas perduren), qiānlǐ gòng chánjuān (a mil li compartan la hermosa luna), Sū Shì de shī (poema de Su Shi) xiě de zhēn hǎo (escrito muy bien). / Yuèbǐng de yuánxíng (la forma circular del pastel) xiàngzhēng zhe (simboliza) tuányuán (reunión/integridad), yuǎnfāng de qīnrén (parientes en lejanía) yě zài kàn (también están mirando) tóng yì lún míngyuè (la misma brillante luna). / Zhōngqiūjié de wēnqíng (el afecto cálido del Medio Otoño), bǎ shìjiè gèdì de rénmen (a la gente de todas partes) lián zài le yìqǐ (enlazó juntos).',
          syntaxPattern: 'Estructura correlativa 又... 又... (yòu... yòu..., tanto... como...). Cita poética clásica de la dinastía Song.',
          culturalNotes: 'El verso de Su Shi (苏轼) de la dinastía Song es el himno inmortal de afecto hacia los seres queridos distantes.'
        }
      },
      {
        id: 'zh-dial-5-5',
        title: 'El principio del Yin y Yang en la medicina tradicional y la vida cotidiana',
        context: 'Un practicante de medicina tradicional conversa con su paciente sobre el equilibrio de las energías corporales.',
        turns: [
          {
            speaker: '医生 (Médico)',
            text: '从中医的角度来看，阴阳平衡是身体健康的根本。',
            translation: 'Desde la perspectiva de la medicina china, el equilibrio del Yin y el Yang es la base fundamental de la salud.',
            phonetic: 'Cóng zhōngyī de jiǎodù lái kàn, yīnyáng pínghéng shì shēntǐ jiànkāng de gēnběn.'
          },
          {
            speaker: '患者 (Paciente)',
            text: '大夫，我最近总是容易上火，这是阳气太盛了吗？',
            translation: 'Doctor, últimamente me siento acalorado e irritable, ¿se debe a un exceso de fuego Yang en el cuerpo?',
            phonetic: 'Dàifu, wǒ zuìjìn zǒngshì róngyì shànghuǒ, zhè shì yángqì tài shèng le ma?'
          },
          {
            speaker: '医生 (Médico)',
            text: '对，少吃辛辣油腻，多喝菊花茶，滋阴降火。',
            translation: 'Exactamente. Coma menos picante y grasoso, y tome infusión de crisantemo para nutrir el Yin y disipar el calor excesivo.',
            phonetic: 'Duì, shǎo chī xīnlà yóunì, duō hē júhuāchá, zī yīn jiàng huǒ.'
          },
          {
            speaker: '患者 (Paciente)',
            text: '懂了，调和阴阳不仅是医道，也是人生的处世之道。',
            translation: 'Comprendido: armonizar el Yin y el Yang no es solo sabiduría médica, sino también la filosofía para conducir la vida.',
            phonetic: 'Dǒng le, tiáohé yīnyáng bùjǐn shì yīdào, yě shì rénshēng de chǔshì zhī dào.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Cóng zhōngyī de jiǎodù lái kàn (mirando desde el ángulo de la medicina tradicional china), yīnyáng pínghéng (equilibrio yin yang) shì shēntǐ jiànkāng de gēnběn (base de salud corporal). / Dàifu (médico), wǒ zuìjìn (últimamente) zǒngshì (siempre) róngyì shànghuǒ (fácil de subir fuego interior), zhè shì (esto es) yángqì tài shèng le (energía yang demasiado exuberante) ma? / Duì, shǎo chī (coma menos) xīnlà yóunì (picante y grasoso), duō hē (beba más) júhuāchá (té de crisantemo), zī yīn jiàng huǒ (nutrir yin bajar fuego). / Dǒng le (entendido ya), tiáohé yīnyáng (armonizar yin y yang) bùjǐn shì (no solo es) yīdào (camino médico), yě shì (también es) rénshēng de chǔshì zhī dào (el camino de conducirse en la vida).',
          syntaxPattern: 'Estructura correlativa 不仅... 也... (bùjǐn... yě..., no solo... sino también...). Expresión médica 滋阴降火.',
          culturalNotes: 'El concepto de 上火 (shànghuǒ, exceso de calor interno) guía la dietoterapia preventiva cotidiana en toda la cultura china.'
        }
      }
    ]
  }
];
