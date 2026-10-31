import { CommunicativeUnit } from './types';

export const ARABIC_COMMUNICATIVE_UNITS: CommunicativeUnit[] = [
  {
    id: 'ar-comm-1',
    topic: 'Saludos y Cortesía',
    title: 'التحيات والضيافة: Saludos Formales, Cortesía Islámica y Hospitalidad Árabe',
    substantiveGuide: `El idioma árabe estándar moderno (اللغة العربية الفصحى, al-lughah al-ʿarabiyyah al-fuṣḥā) posee uno de los sistemas de fórmulas de cortesía y tratamiento más ricos y formalizados del mundo semítico. En el mundo árabe, el acto de saludar no es una mera formalidad utilitaria, sino una manifestación de deber ético, bendición divina y hospitalidad sagrada (ضيافة, ḍiyāfah). Cada saludo conlleva una respuesta fija y armónica que no solo replica el deseo de bienestar, sino que lo amplía y embellece.

La salutación universal en el mundo arabófono, empleada por personas de todas las confesiones religiosas y entornos sociales, es "السلام عليكم" (as-salāmu ʿalaykum, la paz sea sobre vosotros). Su respuesta protocolaria y completa es "وعليكم السلام ورحمة الله وبركاته" (wa-ʿalaykumu s-salām wa-raḥmatu Llāhi wa-barakātuh, y sobre vosotros sea la paz, la misericordia de Dios y Sus bendiciones). Omitir la respuesta o reducirla a un monosílabo se percibe como una frialdad contraria a la etiqueta social (أدب, adab).

Para los momentos específicos de la jornada, el árabe articula fórmulas binarias de correspondencia simétrica: por la mañana se saluda con "صباح الخير" (ṣabāḥ al-khayr, mañana de bondad), a lo cual se responde ritualmente "صباح النور" (ṣabāḥ an-nūr, mañana de luz resplandeciente) o "صباح الورد" (ṣabāḥ al-ward, mañana de rosas). Por la tarde y noche, la fórmula correspondiente es "مساء الخير" (masāʾ al-khayr, tarde de bien), replicada con "مساء النور" (masāʾ an-nūr).

El sistema de tratamiento honorífico exige precisión según el estatus del interlocutor. Para personas con formación académica o docente se antepone "أستاذ" (ustādh, profesor/maestro) o "دكتور" (duktūr). Para el trato respetuoso general entre caballeros se emplea "سيد" (sayyid, señor) y para damas "سيدة" (sayyidah, señora) o "آنسة" (ānisah, señorita). Al acoger a un visitante en el hogar, el anfitrión pronuncia con calidez "أهلاً وسهلاً" (ahlan wa-sahlan, sed bienvenido como parte de nuestra familia y pisad tierra fértil y apacible), a lo cual el huésped responde "أهلاً بك" (ahlan bik).

La cortesía al ofrecer un asiento, comida o el paso se sintetiza en la partícula "تفضل" (tafaḍḍal, para dirigirse a un varón) o "تفضلي" (tafaḍḍalī, para una mujer), que significa "tenga la bondad / pase adelante / sírvase". El agradecimiento se expresa mediante "شكراً" (shukran, gracias) o "شكراً جزيلاً" (shukran jazīlan, muchísimas gracias), a lo que se responde invariablemente "عفواً" (ʿafwan, de nada / perdóneme) o "لا شكر على واجب" (lā shukra ʿalā wājib, no hay de qué agradecer por lo que es un deber fraterno). Para despedirse, la frase consagrada es "مع السلامة" (maʿa s-salāmah, con la paz / que la seguridad te acompañe) o "إلى اللقاء" (ilā l-liqāʾ, hasta el reencuentro).

En la historia sociocultural de El Salvador, la presencia de la comunidad salvadore?a de ascendencia ?rabe (proveniente mayoritariamente de Palestina, L?bano y Siria desde finales del siglo XIX) ha enriquecido de manera profunda y permanente la econom?a, la industria, las artes culinarias y las instituciones del pa?s. El aprendizaje de las f?rmulas can?nicas de cortes?a en lengua ?rabe, tales como 'Ahlan wa Sahlan' (????? ??????, seas recibido como de la familia y en tierra llana) o 'Marhaban' (??????, bienvenida espaciosa), conecta directamente con esta rica herencia compartida. La calidez hospitalaria levantina dicta que todo visitante, ya sea en un hogar particular o en un establecimiento de comercio, sea recibido de inmediato con una taza humeante de caf? aromatizado con cardamomo (???? qahwah) o t? dulce con menta, reafirmando los lazos sagrados de fraternidad humana que trascienden fronteras continentales.`,
    solvedDialogues: [
      {
        id: 'ar-dial-1-1',
        title: 'Encuentro formal matutino en un centro cultural',
        context: 'Dos profesionales se saludan al ingresar a una conferencia en San Salvador.',
        turns: [
          {
            speaker: 'طرق (Tāriq)',
            text: 'السلام عليكم ورحمة الله وبركاته يا أستاذ كريم.',
            translation: 'La paz sea con usted, y la misericordia de Dios y Sus bendiciones, estimado profesor Karim.',
            phonetic: 'As-salāmu ʿalaykum wa-raḥmatu Llāhi wa-barakātuhu yā ustādh Karīm.'
          },
          {
            speaker: 'كريم (Karīm)',
            text: 'وعليكم السلام ورحمة الله. صباح الخير يا أخي طارق.',
            translation: 'Y sobre usted sea la paz y la misericordia de Dios. Buenos días, mi hermano Tariq.',
            phonetic: 'Wa-ʿalaykumu s-salāmu wa-raḥmatu Llāh. Ṣabāḥu l-khayri yā akhī Ṭāriq.'
          },
          {
            speaker: 'طرق (Tāriq)',
            text: 'صباح النور والسرور. كيف حالك وحال الأسرة اليوم؟',
            translation: 'Mañana de luz y regocijo. ¿Cómo se encuentra usted y su distinguida familia hoy?',
            phonetic: 'Ṣabāḥu n-nūri wa-s-surūr. Kayfa ḥāluka wa-ḥālu l-usrah al-yawm?'
          },
          {
            speaker: 'كريم (Karīm)',
            text: 'الحمد لله، الجميع بخير وعافية. شكراً لسؤالك الكريم.',
            translation: 'Alabado sea Dios, todos estamos en excelente salud y bienestar. Gracias por su amable interés.',
            phonetic: 'Al-ḥamdu li-Llāh, al-jamīʿu bi-khayrin wa-ʿāfiyah. Shukran li-suʾālika l-karīm.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'As-salāmu ʿalaykum (la paz sobre vosotros) wa-raḥmatu (y misericordia de) Llāhi (Dios) wa-barakātuh (y Sus bendiciones) yā (partícula vocativa) ustādh (profesor) Karīm. / Wa-ʿalaykum as-salām (y sobre vosotros la paz). Ṣabāḥ al-khayr (mañana de bondad) yā akhī (oh hermano mío). / Ṣabāḥ an-nūr (mañana de luz) wa-s-surūr (y de gozo). Kayfa (cómo) ḥāluk (tu estado) wa-ḥāl (y estado de) al-usrah (la familia) al-yawm (hoy)? / Al-ḥamdu li-Llāh (la alabanza a Dios), al-jamīʿ (todos) bi-khayr (en bien) wa-ʿāfiyah (y vigor). Shukran (gracias) li-suʾālik (por tu pregunta) al-karīm (generosa).',
          syntaxPattern: 'Uso de la partícula vocativa "yā" (يا) obligatoria ante nombres propios o títulos. Pronombre posesivo enclítico "-ka" (masculino singular).',
          culturalNotes: 'Responder "الحمد لله" (al-ḥamdu li-Llāh) ante la pregunta sobre la salud es un precepto cultural universal en el mundo árabe.'
        }
      },
      {
        id: 'ar-dial-1-2',
        title: 'Recepción y bienvenida de un huésped en el hogar',
        context: 'Un anfitrión da la bienvenida a un invitado en la puerta de su residencia.',
        turns: [
          {
            speaker: 'المضيف (Anfitrión)',
            text: 'أهلاً وسهلاً ومرحباً بك في بيتنا المتواضع!',
            translation: '¡Sea usted muy bienvenido y recibido con todo el corazón en nuestro humilde hogar!',
            phonetic: 'Ahlan wa-sahlan wa-marḥaban bika fī baytinā al-mutawāḍiʿ!'
          },
          {
            speaker: 'الضيف (Invitado)',
            text: 'أهلاً بك وبأهل هذا البيت الكريم. البيت عامر بأهله.',
            translation: 'Bienhallado usted y toda la noble gente de este hogar. Que su casa esté siempre bendecida y floreciente.',
            phonetic: 'Ahlan bika wa-bi-ahli hādhā l-bayti l-karīm. Al-baytu ʿāmirun bi-ahlih.'
          },
          {
            speaker: 'المضيف (Anfitrión)',
            text: 'تفضل بالدخول، اجلس هنا واسترح من عناء السفر.',
            translation: 'Tenga la bondad de entrar, siéntese aquí y descanse del cansancio del viaje.',
            phonetic: 'Tafaḍḍal bi-d-dukhūl, ijlis hunā wa-stariḥ min ʿanāʾi s-safar.'
          },
          {
            speaker: 'الضيف (Invitado)',
            text: 'بارك الله فيك وفي كرم ضيافتك.',
            translation: 'Que Dios lo bendiga a usted y a su generosísima hospitalidad.',
            phonetic: 'Bāraka Llāhu fīka wa-fī karami ḍiyāfatik.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Ahlan wa-sahlan wa-marḥaban bika (bienvenido a ti) fī baytinā (en nuestra casa) al-mutawāḍiʿ (la humilde)! / Ahlan bika wa-bi-ahli (y con la familia de) hādhā al-bayt (esta casa) al-karīm (noble). Al-bayt ʿāmir (la casa próspera) bi-ahlih (por sus moradores). / Tafaḍḍal (sírvase/adelante) bi-d-dukhūl (con la entrada), ijlis (siéntese) hunā (aquí) wa-stariḥ (y descanse) min ʿanāʾ (de la fatiga de) as-safar (el viaje). / Bāraka Llāh fīk (Dios bendiga en ti) wa-fī karam (y en la generosidad de) ḍiyāfatik (tu hospitalidad).',
          syntaxPattern: 'Modo imperativo cortés: تafaḍḍal (تفضل) seguido de la preposición instrumental bi- (بالدخول). Expresión idiomática de bendición: البيت عامر بأهله.',
          culturalNotes: 'El honor de la hospitalidad (الضيافة) exige que el anfitrión insista en ofrecer lo mejor de su mesa antes de abordar cualquier tema profano.'
        }
      },
      {
        id: 'ar-dial-1-3',
        title: 'Ofreciendo café árabe y dulces tradicionales',
        context: 'La hija del anfitrión ofrece café con cardamomo y dátiles a los visitantes.',
        turns: [
          {
            speaker: 'مريم (Maryam)',
            text: 'تفضل يا سيدي، فنجان قهوة عربية بالهيل مع التمر.',
            translation: 'Tenga la bondad, señor mío, una taza de café árabe aromatizado con cardamomo y dátiles.',
            phonetic: 'Tafaḍḍal yā sayyidī, finjāna qahwatin ʿarabiyyatin bi-l-hayli maʿa t-tamr.'
          },
          {
            speaker: 'الزائر (Visitante)',
            text: 'تسلم يدك يا ابنتي، رائحة القهوة طيبة وزكية جداً.',
            translation: 'Que tus manos sean bendecidas y protegidas, hija mía; el aroma del café es exquisito y reconfortante.',
            phonetic: 'Taslam yaduki yā-bnatī, rāʾiḥatu l-qahwati ṭayyibatun wa-zakiyyatun jiddan.'
          },
          {
            speaker: 'مريم (Maryam)',
            text: 'صحة وعافية على قلبك. هل ترغب في المزيد؟',
            translation: 'Salud y bienestar para su corazón. ¿Desea usted una taza adicional?',
            phonetic: 'Ṣiḥḥatun wa-ʿāfiyatun ʿalā qalbik. Hal targhabu fī l-mazīd?'
          },
          {
            speaker: 'الزائر (Visitante)',
            text: 'دايمة يا رب، قهوة مباركة، كفيت ووفيت.',
            translation: 'Que sea siempre abundante en bendición; fue un café bendito, ha sido más que generoso.',
            phonetic: 'Dāʾimah yā Rabb, qahwatun mubārakah, kafayti wa-wafayti.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Tafaḍḍal yā sayyidī (señor mío), finjān (taza) qahwah (café) ʿarabiyyah (árabe) bi-l-hayl (con cardamomo) maʿa (con) at-tamr (los dátiles). / Taslam yaduk (benditas tus manos) yā-bnatī (oh hija mía), rāʾiḥat al-qahwah (aroma del café) ṭayyibah (bueno) wa-zakiyyah (puro) jiddan (muy). / Ṣiḥḥah (salud) wa-ʿāfiyah (y vigor) ʿalā qalbik (sobre tu corazón). Hal (acaso) targhab (deseas) fī al-mazīd (en más)? / Dāʾimah (permanente/siempre provista) yā Rabb (oh Señor), qahwah mubārakah (café bendito), kafayt wa-wafayt (cumpliste a plenitud).',
          syntaxPattern: 'Pronombre posesivo femenino singular "-ki" en "yaduki". Frase de buenos deseos "صحة وعافية على قلبك" equivalente al provecho hispánico.',
          culturalNotes: 'El café árabe (gahwah) con cardamomo se sirve siempre con la mano derecha en pequeñas tacitas sin asa.'
        }
      },
      {
        id: 'ar-dial-1-4',
        title: 'Despedida cordial al atardecer',
        context: 'Un colega se despide de la oficina al culminar la jornada laboral.',
        turns: [
          {
            speaker: 'سليم (Salīm)',
            text: 'حان وقت المغادرة يا زملائي، مساء الخير جميعاً.',
            translation: 'Ha llegado el momento de retirarme, estimados colegas; que tengan muy buenas tardes todos.',
            phonetic: 'Ḥāna waqtu l-mughādarati yā zumalāʾī, masāʾu l-khayri jamīʿan.'
          },
          {
            speaker: 'منى (Munā)',
            text: 'مساء النور يا سليم. شكراً جزيلاً لجهودك القيمة اليوم.',
            translation: 'Buenas tardes luminosas, Salim. Muchísimas gracias por tus valiosos esfuerzos el día de hoy.',
            phonetic: 'Masāʾu n-nūri yā Salīm. Shukran jazīlan li-juhūdika l-qayyimati l-yawm.'
          },
          {
            speaker: 'سليم (Salīm)',
            text: 'العفو، هذا واجبي. مع السلامة وإلى اللقاء غداً إن شاء الله.',
            translation: 'De nada, es mi deber. Vayan con la paz y hasta el reencuentro de mañana, si Dios quiere.',
            phonetic: 'Al-ʿafw, hādhā wājibī. Maʿa s-salāmati wa-ilā l-liqāʾi ghadan in shāʾa Llāh.'
          },
          {
            speaker: 'منى (Munā)',
            text: 'في أمان الله ورعايته، رافقتك السلامة.',
            translation: 'Bajo la protección y el cuidado de Dios quedas; que la paz y seguridad acompañen tu camino.',
            phonetic: 'Fī amāni Llāhi wa-riʿāyatih, rāfaqatka s-salāmah.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Ḥāna waqt (llegó la hora de) al-mughādarah (la partida) yā zumalāʾī (colegas míos), masāʾ al-khayr (tarde de bien) jamīʿan (a todos). / Masāʾ an-nūr yā Salīm. Shukran jazīlan (muchas gracias) li-juhūdik (por tus esfuerzos) al-qayyimah (valiosos). / Al-ʿafw (perdón/de nada), hādhā wājibī (este es mi deber). Maʿa as-salāmah (con la paz) wa-ilā al-liqāʾ (y hasta la vista) ghadan (mañana) in shāʾa Llāh (si Dios quiere). / Fī amān Llāh (en la seguridad de Dios) wa-riʿāyatih (y Su amparo), rāfaqatka (te acompañó) as-salāmah (la paz).',
          syntaxPattern: 'Uso de la expresión condicional teofórica "إن شاء الله" (in shāʾa Llāh) indispensable al hacer planes futuros.',
          culturalNotes: 'Desear "في أمان الله" (fī amāni Llāh) encomienda al viajero o caminante a la divina providencia durante su trayecto.'
        }
      },
      {
        id: 'ar-dial-1-5',
        title: 'Disculpa por una interrupción imprevista',
        context: 'Un estudiante solicita permiso cortés para hacer una consulta a su tutor.',
        turns: [
          {
            speaker: 'الطالب (Estudiante)',
            text: 'عفواً يا دكتور، أعتذر عن مقاطعتك، هل وقتك يسمح بسؤال؟',
            translation: 'Disculpe, doctor, le pido perdón por interrumpirlo, ¿dispone de un momento para una consulta?',
            phonetic: 'ʿAfwan yā duktūr, aʿtadhiru ʿan muqāṭaʿatik, hal waqtuka yasmaḥu bi-suʾāl?'
          },
          {
            speaker: 'الدكتور (Profesor)',
            text: 'لا بأس أبداً يا بني، تفضل، ما هو سؤالك؟',
            translation: 'No hay ningún problema, hijo mío; tenga la bondad, ¿cuál es su pregunta?',
            phonetic: 'Lā baʾsa abadān yā bunayy, tafaḍḍal, mā huwa suʾāluk?'
          },
          {
            speaker: 'الطالب (Estudiante)',
            text: 'أشكرك على رحابة صدرك وحسن خلقك.',
            translation: 'Le agradezco infinitamente su generosa paciencia y noble gentileza.',
            phonetic: 'Ashkuruka ʿalā raḥābati ṣadrika wa-ḥusni khuluqik.'
          },
          {
            speaker: 'الدكتور (Profesor)',
            text: 'على الرحب والسعة دائماً، العلم ينمو بالسؤال.',
            translation: 'Con todo el gusto y la mayor complacencia siempre; el conocimiento florece a través de la pregunta.',
            phonetic: 'ʿAlā r-raḥbi wa-s-saʿati dāʾiman, al-ʿilmu yanmū bi-s-suʾāl.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'ʿAfwan (disculpe) yā duktūr, aʿtadhir (me disculpo) ʿan muqāṭaʿatik (de tu interrupción), hal (acaso) waqtuk (tu tiempo) yasmaḥ (permite) bi-suʾāl (con una pregunta)? / Lā baʾs (no hay mal/problema) abadan (en absoluto) yā bunayy (oh hijito mío), tafaḍḍal (adelante), mā huwa (cuál es) suʾāluk (tu pregunta)? / Ashkuruk (te agradezco) ʿalā raḥābat ṣadrik (sobre la amplitud de tu pecho/paciencia) wa-ḥusn khuluqik (y la bondad de tu carácter). / ʿAlā ar-raḥb wa-s-saʿah (con toda bienvenida y holgura), al-ʿilm (el saber) yanmū (crece) bi-s-suʾāl (mediante la pregunta).',
          syntaxPattern: 'Metáfora anatómico-emocional clásica: رحابة الصدر (raḥābat aṣ-ṣadr, amplitud del pecho) denota paciencia y tolerancia afectuosa.',
          culturalNotes: 'El trato cariñoso "يا بني" (hijo mío) utilizado por maestros ancianos atenúa la distancia y promueve la confianza filial del alumno.'
        }
      }
    ]
  },
  {
    id: 'ar-comm-2',
    topic: 'Familia y Comunidad',
    title: 'الأسرة والمجتمع: Estructura Familiar, Linaje y la Diáspora Árabe en El Salvador',
    substantiveGuide: `La institución de la familia (الأسرة, al-usrah; o en sentido amplio العائلة, al-ʿāʾilah) es el cimiento insustituible sobre el cual se edifica la sociedad tradicional árabe y sus ramificaciones en la diáspora hispanoamericana. La cosmovisión semítica concibe al individuo como parte indisociable de una red solidaria de linajes, donde la honra, la ayuda mutua (تضامن, taḍāmun) y el cuidado intergeneracional guían la conducta cotidiana.

El léxico de parentesco en árabe estándar moderno se caracteriza por una nítida bifurcación etimológica entre la línea paterna y materna para los tíos: el hermano del padre es "عمّ" (ʿamm) y la hermana del padre es "عمّة" (ʿammah); en contraste, el hermano de la madre es "خال" (khāl) y la hermana de la madre es "خالة" (khālah). Para los abuelos, se utiliza "جدّ" (jadd, abuelo) y "جدّة" (jaddah, abuela), anteponiendo con frecuencia fórmulas de cariño reverencial. Los progenitores se denominan "أب" (ab, padre) o "والد" (wālid), y "أمّ" (umm, madre) o "والدة" (wālidah). Los hermanos son "أخ" (akh, hermano; plural إخوة ikhwah) y "أخت" (ukht, hermana; plural أخوات akhawāt).

La posesión nominal en árabe se expresa mediante pronombres sufijados o enclíticos adosados al sustantivo: "-ī" para mi (بيتي baytī, mi casa; أبي abī, mi padre); "-ka" para tu masculino (أبوك abūka); "-ki" para tu femenino (أبوكِ abūki); "-hu" para su masculino (أبوه abūhu); "-hā" para su femenino (أبوها abūhā); y "-nā" para nuestro (أسرتنا usratunā, nuestra familia). La construcción genitiva directa o Idāfah (إضافة) une dos sustantivos sin preposición intermedia (ej. بيت الجدّ baytu l-jadd, la casa del abuelo).

En la historia contemporánea de El Salvador, la migración procedente del Levante árabe —primordialmente de Belén, Jerusalén, Beit Jala, Beit Sahour y localidades del Líbano y Siria desde finales del siglo XIX y principios del XX— constituyó una de las comunidades más laboriosas e influyentes del país. Integrados plenamente en la vida productiva, el comercio textil de San Salvador y Usulután, la industria, las letras y la vida pública salvadoreña, los descendientes de la diáspora mantuvieron viva la memoria culinaria (como el kibbeh كبة, las hojas de parra rellenas ورق عنب y el pan pita خبز عربي) y el culto a los lazos familiares sagrados.

El principio de honrar a los progenitores (برّ الوالدين, birr al-wālidayn) es un mandamiento ético fundamental en las culturas del Cercano Oriente. Abandonar a los ancianos a la soledad es considerado una vergüenza moral. Las decisiones trascendentales sobre negocios, matrimonios y celebraciones se consultan invariablemente con los abuelos, cuya bendición (بركة, barakah) se considera indispensable para la prosperidad del hogar.

La solidaridad intrafamiliar en la sociedad ?rabe tradicional se manifiesta con especial elocuencia en la pr?ctica del socorro mutuo ('takaful' ?????), seg?n la cual los miembros solventes del linaje respaldan econ?micamente a los parientes en momentos de enfermedad, orfandad o emprendimiento de nuevos oficios. Asimismo, las festividades familiares como las bodas ('urs ???) o la celebraci?n del nacimiento de un hijo re?nen a centenares de parientes en torno a banquetes colectivos donde se preparan platos tradicionales como el arroz con cordero ('mansaf' ????) y dulces hojaldrados de almendra y pistacho ba?ados en miel ('baklava' ??????). La bendici?n de los abuelos sobre los nietos sella la continuidad generacional y garantiza la preservaci?n inalterada de los principios morales del honor, la lealtad y el amparo mutuo.`,
    solvedDialogues: [
      {
        id: 'ar-dial-2-1',
        title: 'Presentación de los miembros de la familia a través de recuerdos',
        context: 'Dos amigos miran un álbum familiar recordando las raíces familiares en Beit Jala y San Salvador.',
        turns: [
          {
            speaker: 'فريد (Farīd)',
            text: 'ما شاء الله! هذه صورة جميلة جداً، هل هذه عائلتك الكريمة؟',
            translation: '¡Lo que Dios ha querido! Esta es una fotografía hermosísima, ¿es esta su noble familia?',
            phonetic: 'Mā shāʾa Llāh! Hādhihi ṣūratun jamīlatun jiddan, hal hādhihi ʿāʾilatuka l-karīmah?'
          },
          {
            speaker: 'يوسف (Yūsuf)',
            text: 'نعم، هذا جدي إبراهيم وجدتي مريم، وهؤلاء والدي وإخوتي.',
            translation: 'Sí, este es mi abuelo Ibrahim y mi abuela Maryam, y estos son mis padres y mis hermanos.',
            phonetic: 'Naʿam, hādhā jaddī Ibrāhīm wa-jaddatī Maryam, wa-hāʾulāʾi wālidayya wa-ikhwatī.'
          },
          {
            speaker: 'فريد (Farīd)',
            text: 'كم أخاً وأختاً عندك يا يوسف؟',
            translation: '¿Cuántos hermanos y cuántas hermanas tienes, estimado Youssef?',
            phonetic: 'Kam akhan wa-ukhtan ʿindaka yā Yūsuf?'
          },
          {
            speaker: 'يوسف (Yūsuf)',
            text: 'عندي أخان اثنان وأخت واحدة، ونحن جميعاً نعيش في محبة وسلام.',
            translation: 'Tengo dos hermanos varones y una hermana, y todos vivimos en armonía, amor y paz.',
            phonetic: 'ʿIndī akhāni thnāni wa-ukhtun wāḥidah, wa-naḥnu jamīʿan naʿīshu fī maḥabbatin wa-salām.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Mā shāʾa Llāh (lo que quiso Dios! elogio protector)! Hādhihi (esta) ṣūrah (foto) jamīlah (bella) jiddan! Hal hādhihi ʿāʾilatuk (tu familia) al-karīmah (noble)? / Naʿam (sí), hādhā jaddī (mi abuelo) Ibrāhīm wa-jaddatī (mi abuela) Maryam, wa-hāʾulāʾi (y estos) wālidayya (mis dos padres) wa-ikhwatī (y mis hermanos). / Kam (cuántos) akhan (hermano acusativo singular tras kam) wa-ukhtan (y hermana) ʿindak (en tu haber/tienes) yā Yūsuf? / ʿIndī (yo tengo) akhān ithnān (dos hermanos dual nominativo) wa-ukht wāḥidah (y una hermana), wa-naḥnu jamīʿan (y nosotros todos) naʿīsh (vivimos) fī maḥabbah (en afecto) wa-salām (y paz).',
          syntaxPattern: 'Interrogativo de cantidad "kam" (كم) que rige obligatoriamente sustantivo singular acusativo con tanwīn: كَمْ أَخاً. Forma dual nominativa: أخوان اثنان.',
          culturalNotes: 'Pronunciar "ما شاء الله" (mā shāʾa Llāh) al admirar la belleza o ventura de otra persona previene el mal de ojo (عين al-ʿayn).'
        }
      },
      {
        id: 'ar-dial-2-2',
        title: 'Visita y bendición de los abuelos el fin de semana',
        context: 'Un nieto visita la casa de sus abuelos para compartir el almuerzo tradicional.',
        turns: [
          {
            speaker: 'الحفيد (Nieto)',
            text: 'السلام عليك يا جدي الحبيب! كيف صحتك وعافيتك اليوم؟',
            translation: '¡La paz sea sobre ti, mi amado abuelo! ¿Cómo se encuentra tu salud y vigor hoy?',
            phonetic: 'As-salāmu ʿalayka yā jaddī l-ḥabīb! Kayfa ṣiḥḥatuka wa-ʿāfiyatuka l-yawm?'
          },
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'أهلاً يا قرة عيني! الحمد لله أنا بخير ما دمتم أنتم بخير.',
            translation: '¡Bienvenido, oh alegría y luz de mis ojos! Gracias a Dios estoy bien mientras ustedes estén bien.',
            phonetic: 'Ahlan yā qurrata ʿaynī! Al-ḥamdu li-Llāhi anā bi-khayrin mā dumtum antum bi-khayr.'
          },
          {
            speaker: 'الحفيد (Nieto)',
            text: 'جئنا لزيارتكم وطلب دعائكم وبركتكم الكريمة.',
            translation: 'Hemos venido a visitarlos y a solicitar sus valiosas oraciones y bendiciones.',
            phonetic: 'Jiʾnā li-ziyāratikum wa-ṭalabi duʿāʾikum wa-barakatikumu l-karīmah.'
          },
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'رضا الله من رضا الوالدين، بارك الله في أعماركم جميعاً.',
            translation: 'El beneplácito de Dios está en la satisfacción de los padres; que Dios bendiga sus vidas con dicha.',
            phonetic: 'Riḍā Llāhi min riḍā l-wālidayn, bāraka Llāhu fī aʿmārikum jamīʿan.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'As-salāmu ʿalayka (la paz sobre ti masculino) yā jaddī al-ḥabīb (mi amado abuelo)! Kayfa (cómo) ṣiḥḥatuk (tu salud) wa-ʿāfiyatuk (y tu vitalidad) al-yawm (hoy)? / Ahlan yā qurrat ʿaynī (frescura/luz de mi ojo)! Al-ḥamdu li-Llāh anā bi-khayr mā dumtum (mientras permanezcan) antum bi-khayr. / Jiʾnā (hemos venido) li-ziyāratikum (para su visita) wa-ṭalab (y petición de) duʿāʾikum (sus oraciones) wa-barakatikum (sus bendiciones). / Riḍā Llāh (la complacencia de Dios) min riḍā al-wālidayn (de la complacencia de los padres dual genitivo), bāraka Llāh fī aʿmārikum (en sus edades/vidas) jamīʿan.',
          syntaxPattern: 'Uso de la metáfora afectuosa semítica "قرة عيني" (qurrat ʿaynī, refrigerio de mis ojos). Dual genitivo "الوالدين" (los dos padres).',
          culturalNotes: 'Solicitar la oración del abuelo (دعاء الجدّ) se considera en el Levante un escudo espiritual para los nietos.'
        }
      },
      {
        id: 'ar-dial-2-3',
        title: 'Preparación de platillos tradicionales levantinos en el hogar',
        context: 'Madre e hija preparan hojas de parra y kibbeh para la reunión familiar dominical.',
        turns: [
          {
            speaker: 'الأمّ (Madre)',
            text: 'يا ليلى، تعالي نلف ورق العنب ونحضر صينية الكبة للغداء.',
            translation: 'Layla querida, ven a enrollar las hojas de parra y a preparar la bandeja de kibbeh para el almuerzo.',
            phonetic: 'Yā Laylā, taʿālay naluffa waraqa l-ʿinabi wa-nuḥaḍḍira ṣīniyyata l-kubbati li-l-ghadāʾ.'
          },
          {
            speaker: 'الابنة (Hija)',
            text: 'حاضر يا أمي الحبيبة، لقد جهزت الأرز واللحم المفروم والبهارات.',
            translation: 'A la orden, mi amada madre; ya he preparado el arroz, la carne molida y las especias.',
            phonetic: 'Ḥāḍir yā ummī l-ḥabībah, laqad jahhaztu l-aruzza wa-l-laḥma l-mafrūma wa-l-bahārāt.'
          },
          {
            speaker: 'الأمّ (Madre)',
            text: 'أحسنتِ، الطهي بروح المحبة يجعل الطعام أشهى وأطيب.',
            translation: '¡Excelente! Cocinar con espíritu de afecto hace que los alimentos sean más exquisitos y bendecidos.',
            phonetic: 'Aḥsanti, aṭ-ṭahyu bi-rūḥi l-maḥabbati yajʿalu ṭ-ṭaʿāma ash-hā wa-aṭyab.'
          },
          {
            speaker: 'الابنة (Hija)',
            text: 'هذه الوصفات الأصيلة تذكرنا دائماً ببركة أرض أجدادنا.',
            translation: 'Estas recetas tradicionales nos recuerdan siempre la bendición de la tierra de nuestros antepasados.',
            phonetic: 'Hādhihi l-waṣafātu l-aṣīlatu tudhakkirunā dāʾiman bi-barakati arḍi ajdādinā.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yā Laylā, taʿālay (ven imperativo femenino) naluff (enrollemos) waraq al-ʿinab (hojas de uva/parra) wa-nuḥaḍḍir (y preparemos) ṣīniyyat (bandeja de) al-kibbah li-l-ghadāʾ (para el almuerzo). / Ḥāḍir (presente/a la orden) yā ummī al-ḥabībah, laqad (ciertamente partícula de perfección) jahhaztu (preparé) al-aruzz (el arroz) wa-l-laḥm al-mafrūm (y la carne picada) wa-l-bahārāt (y las especias). / Aḥsanti (bien hecho femenino singular), aṭ-ṭahy (la cocina) bi-rūḥ al-maḥabbah (con alma de amor) yajʿal (hace) aṭ-ṭaʿām (el alimento) ash-hā (más apetitoso elativo) wa-aṭyab (y más sabroso). / Hādhihi al-waṣafāt (estas recetas plural inanimado femenino) tudhakkirunā (nos recuerdan) dāʾiman bi-barakat (con la bendición de) arḍ (tierra de) ajdādinā (nuestros abuelos/ancestros).',
          syntaxPattern: 'Forma elativa comparativa y superlativa: أشهى (ash-hā) y أطيب (aṭyab) a partir del patrón أَفْعَل (afʿal). Concordancia de plural no humano con femenino singular.',
          culturalNotes: 'El kibbeh y el waraq ʿinab son símbolos de identidad patrimonial en los hogares de la comunidad palestino-salvadoreña.'
        }
      },
      {
        id: 'ar-dial-2-4',
        title: 'Consejo paterno sobre la honestidad y el trabajo digno',
        context: 'Un padre aconseja a su hijo antes de emprender un proyecto profesional.',
        turns: [
          {
            speaker: 'الأب (Padre)',
            text: 'يا بني، اجعل الصدق والأمانة رأس مالك في كل عمل.',
            translation: 'Hijo mío, haz que la veracidad y la rectitud moral sean tu principal capital en cada labor.',
            phonetic: 'Yā bunayy, ijʿali ṣ-ṣidqa wa-l-amānata raʾsa mālika fī kulli ʿamal.'
          },
          {
            speaker: 'الابن (Hijo)',
            text: 'سأعمل بنصيحتك يا أبي، فالسمعة الطيبة أثمن من الذهب.',
            translation: 'Seguiré fielmente tu consejo, padre mío, pues el buen nombre es más valioso que el oro.',
            phonetic: 'Sa-aʿmalu bi-naṣīḥatika yā abī, fa-s-sumʿatu ṭ-ṭayyibatu athmanu mina dh-dhahab.'
          },
          {
            speaker: 'الأب (Padre)',
            text: 'من زرع الصدق حصد الاحترام والمحبة من مجتمعه.',
            translation: 'Quien siembra honestidad cosecha el respeto duradero y el afecto de su comunidad.',
            phonetic: 'Man zaraʿa ṣ-ṣidqa ḥaṣada l-iḥtirāma wa-l-maḥabbata min mujtamaʿih.'
          },
          {
            speaker: 'الابن (Hijo)',
            text: 'وفقني الله لأكون عند حسن ظنك وظن أسرتنا دائماً.',
            translation: 'Que Dios me conceda el éxito para estar siempre a la altura de tu confianza y la de nuestra familia.',
            phonetic: 'Waffaqanī Llāhu li-akūna ʿinda ḥusni ẓannika wa-ẓanni usratinā dāʾiman.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yā bunayy, ijʿal (haz/convierte imperativo) aṣ-ṣidq (la verdad) wa-l-amānah (y la honradez/custodia de confianza) raʾs mālik (capital/cabeza de dinero) fī kull ʿamal (en toda obra). / Sa-aʿmal (trabajaré futuro con prefijo sa-) bi-naṣīḥatik (con tu consejo) yā abī, fa-s-sumʿah (pues la reputación) aṭ-ṭayyibah (buena) athman (más valiosa) min adh-dhahab (que el oro). / Man (quien condicional) zaraʿa (sembró pasado) aṣ-ṣidq ḥaṣada (cosechó) al-iḥtirām wa-l-maḥabbah min mujtamaʿih (de su sociedad). / Waffaqanī Llāh (Dios me asista con éxito) li-akūn (para estar) ʿinda ḥusn ẓannik (según tu buen parecer).',
          syntaxPattern: 'Oración condicional con man (مَنْ زَرَعَ... حَصَدَ). Prefijo de futuro próximo "sa-" (سـ) adjunto al verbo imperfecto: سأعمل.',
          culturalNotes: 'El concepto de "أمانة" (amānah) encarna la confianza ética inquebrantable en las relaciones interpersonales y mercantiles árabes.'
        }
      },
      {
        id: 'ar-dial-2-5',
        title: 'Solidaridad comunitaria y ayuda caritativa',
        context: 'Dos miembros de la asociación benéfica coordinan la recolección de víveres para familias vulnerables.',
        turns: [
          {
            speaker: 'خالد (Khālid)',
            text: 'هل جمعنا ما يكفي من الطرود الغذائية لتوزيعها اليوم؟',
            translation: '¿Hemos reunido suficientes paquetes de alimentos para su distribución el día de hoy?',
            phonetic: 'Hal jamaʿnā mā yakfī mina ṭ-ṭurūdi l-ghidhāʾiyyati li-tawzīʿihā l-yawm?'
          },
          {
            speaker: 'سامي (Sāmī)',
            text: 'نعم والحمد لله، أهل الخير تبرعوا بسخاء كبير للمحتاجين.',
            translation: 'Sí, alabado sea Dios, personas de corazón generoso han donado con magnanimidad para los necesitados.',
            phonetic: 'Naʿam wa-l-ḥamdu li-Llāh, ahlu l-khayri tabarraʿū bi-sakhāʾin kabīrin li-l-muḥtājīn.'
          },
          {
            speaker: 'خالد (Khālid)',
            text: 'التكافل الاجتماعي هو جوهر تعاليمنا وثقافتنا الإنسانية.',
            translation: 'La solidaridad social mutua es la médula de nuestras enseñanzas y de nuestra cultura humana.',
            phonetic: 'At-takāfulu l-ijtimāʿiyyu huwa jawharu taʿālīminā wa-thaqāfatinā l-insāniyyah.'
          },
          {
            speaker: 'سامي (Sāmī)',
            text: 'يد الله مع الجماعة، جزاكم الله كل خير على هذا التعاون.',
            translation: 'La mano protectora de Dios acompaña a la comunidad unida; que Dios les recompense con todo bien por esta colaboración.',
            phonetic: 'Yadu Llāhi maʿa l-jamāʿah, jazākumu Llāhu kulla khayrin ʿalā hādhā t-taʿāwun.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Hal jamaʿnā (¿acaso juntamos?) mā yakfī (lo que basta) min aṭ-ṭurūd (de los paquetes) al-ghidhāʾiyyah (alimenticios) li-tawzīʿihā (para distribuirlos) al-yawm? / Naʿam wa-l-ḥamdu li-Llāh, ahl al-khayr (la gente del bien) tabarraʿū (donaron pasado plural) bi-sakhāʾ kabīr (con generosidad grande) li-l-muḥtājīn (para los menesterosos plural genitivo). / At-takāful al-ijtimāʿī (la solidaridad social) huwa (es) jawhar (esencia de) taʿālīminā (nuestras doctrinas) wa-thaqāfatinā (nuestra cultura) al-insāniyyah (humana). / Yad Llāh (la mano de Dios) maʿa al-jamāʿah (con la comunidad), jazākumu Llāh (Dios les retribuya) kulla khayr (todo bien) ʿalā hādhā at-taʿāwun (sobre esta cooperación).',
          syntaxPattern: 'Uso del pronombre de separación o cópula "هو" (huwa) en oraciones ecuativas nominales. Plural masculino sano genitivo "-īn" en "المحتاجين".',
          culturalNotes: 'El refrán "يد الله مع الجماعة" (la mano de Dios está con la unión colectiva) fundamenta la vida asociativa y caritativa comunal.'
        }
      }
    ]
  },
  {
    id: 'ar-comm-3',
    topic: 'Entorno Natural y Agricultura',
    title: 'الطبيعة والزراعة: El Oasis, el Agua Sagrada y los Cultivos Mediterráneos',
    substantiveGuide: `En el espacio geográfico del mundo árabe, caracterizado por extensas zonas desérticas, valles fluviales milenarios (el Nilo, el Éufrates y el Tigris) y la franja fértil del Mediterráneo oriental, la naturaleza (طبيعة, ṭabīʿah) y la agricultura (زراعة, zirāʿah) están impregnadas de una mística de preservación del agua como don supremo de la vida. El texto coránico y la literatura poética clásica reiteran que "del agua creamos todo ser viviente" (وجعلنا من الماء كل شيء حي), elevando la gestión hídrica y el cultivo a un acto de devoción cósmica.

Los elementos del cosmos y del paisaje natural se nombran con términos de gran sonoridad: "أرض" (arḍ, tierra, suelo nutricio), "سماء" (samāʾ, cielo o bóveda celeste), "شمس" (shams, sol, gramaticalmente femenino en árabe sin requerir ta marbuta), "قمر" (qamar, luna, masculino), "ماء" (māʾ, agua viva), "نهر" (nahr, río caudaloso), "بحر" (baḥr, mar) y "جبل" (jabal, montaña o cordillera tutelar). El milagro del brote verde en medio de las tierras secas es el oasis ("واحة", wāḥah), un microclima de sombras escalonadas donde coexisten la palmera datilera, los árboles frutales y las huertas de hortalizas.

El árbol emblemático por excelencia de la cultura levantina y mediterránea es el olivo ("شجرة الزيتون", shajarat az-zaytūn). Con una longevidad que supera a menudo el milenio, el olivo simboliza el arraigo indoblegable a la tierra nativa, la paz y la generosidad incondicional: su fruto, la aceituna u oliva ("زيتون", zaytūn), provee el preciado aceite de oliva virgen ("زيت زيتون", zayt zaytūn), utilizado tanto para la alimentación como para el alumbrado y la medicina tradicional. Junto al olivo destacan la palmera datilera ("نخيل", nakhīl) con sus dátiles energéticos ("تمر", tamr), la higuera ("تين", tīn), el granado ("رمان", rummān) y los campos dorados de trigo ("قمح", qamḥ).

En la gramática árabe, una de las reglas concordanciales más célebres y distintivas es la que atañe a los plurales de cosas no humanas (جمع غير العاقل, jamʿ ghayr al-ʿāqil). Cuando un sustantivo en plural designa entidades inanimadas, plantas, animales o conceptos abstractos, el adjetivo, pronombre y verbo concordantes se colocan obligatoriamente en femenino singular: por ejemplo, "أشجار خضراء" (ashjār khaḍrāʾ, árboles verdes, donde 'ashjār' es plural masculino roto de 'shajarah', pero el adjetivo 'khaḍrāʾ' es femenino singular) o "الجبال عالية" (al-jibālu ʿāliyah, las montañas son altas).

Las técnicas tradicionales de irrigación desarrolladas por los ingenieros agrónomos árabes medievales —como los canales elevados (قناة, qanāt), las norias hidráulicas (ناعورة, nāʿūrah) y los aljibes subterráneos (صِهريج, ṣihrīj)— se extendieron por toda la península ibérica y pasaron posteriormente al continente americano a través de la colonización española. Así, acequias, norias y sistemas de siembra de cítricos conservan hasta hoy en El Salvador y Mesoamérica la impronta técnica y lingüística de la sabiduría hídrica árabe.

El legado agron?mico y bot?nico de la civilizaci?n ?rabe ?cuyo esplendor en Al-?ndalus transform? radicalmente las t?cnicas agr?colas del Mediterr?neo y del continente americano a trav?s de la introducci?n de norias hidr?ulicas, acequias y cultivos como los c?tricos, la ca?a de az?car y el olivo? encarna un modelo magistral de armonizaci?n ecol?gica. En la poes?a ?rabe cl?sica, el vergel frondoso regado por arroyos cristalinos ('bust?n' ?????) es la met?fora suprema del bienestar espiritual y de la misericordia divina sobre la tierra sedienta. Cuidar el oasis y proteger los manantiales no es solo un deber productivo, sino un acto de gratitud religiosa que asegura la fertilidad del desierto y la sustentabilidad de la vida.`,
    solvedDialogues: [
      {
        id: 'ar-dial-3-1',
        title: 'Caminata por el olivar al inicio de la cosecha de otoño',
        context: 'Dos agricultores inspeccionan la maduración de las aceitunas en las laderas de una colina.',
        turns: [
          {
            speaker: 'أحمد (Aḥmad)',
            text: 'انظر يا أخي، حبات الزيتون أصبحت سوداء وناضجة على الأغصان.',
            translation: 'Mira, hermano mío, los frutos de las aceitunas se han tornado oscuros y maduros en las ramas.',
            phonetic: 'Unẓur yā akhī, ḥabbātu z-zaytūni aṣbaḥat sawdāʾa wa-nāḍijatan ʿalā l-aghṣān.'
          },
          {
            speaker: 'محمود (Maḥmūd)',
            text: 'الحمد لله، موسم قطاف الزيتون هذا العام يبشر بإنتاج وفير.',
            translation: 'Alabado sea Dios, la temporada de cosecha de aceitunas este año promete una producción abundantísima.',
            phonetic: 'Al-ḥamdu li-Llāh, mawsimu qiṭāfi z-zaytūni hādhā l-ʿāma yubashshiru bi-intājin wafīr.'
          },
          {
            speaker: 'أحمد (Aḥmad)',
            text: 'شجرة الزيتون شجرة مباركة، تعطينا الزيت النقي وتصبر على الجفاف.',
            translation: 'El olivo es un árbol bendito; nos brinda aceite purísimo y resiste con paciencia la sequía.',
            phonetic: 'Shajaratu z-zaytūni shajaratun mubārakah, tuʿṭīnā z-zayta n-naqiyya wa-taṣbiru ʿalā l-jafāf.'
          },
          {
            speaker: 'محمود (Maḥmūd)',
            text: 'سنبدأ الجمع غداً مع العائلة، فالعمل الجماعي بركة.',
            translation: 'Comenzaremos la recolección mañana junto con toda la familia, pues la labor colectiva es bendición.',
            phonetic: 'Sa-nabdaʾu l-jamʿa ghadan maʿa l-ʿāʾilah, fa-l-ʿamalu l-jamāʿiyyu barakah.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Unẓur (mira imperativo) yā akhī, ḥabbāt (granos plural femenino sano) az-zaytūn (de la aceituna) aṣbaḥat (llegaron a ser femenino singular por regla de plural no humano) sawdāʾ (negras femenino) wa-nāḍijah (y maduras) ʿalā al-aghṣān (sobre las ramas). / Al-ḥamdu li-Llāh, mawsim qiṭāf (temporada de recolección de) az-zaytūn hādhā al-ʿām (este año) yubashshir (albricia/augura bien) bi-intāj wafīr (con producción abundante). / Shajarat az-zaytūn shajarah mubārakah (árbol bendito), tuʿṭīnā (nos da) az-zayt an-naqiyy (el aceite puro) wa-taṣbir (y es paciente) ʿalā al-jafāf (sobre la aridez). / Sa-nabdaʾ (comenzaremos futuro) al-jamʿ (la recolección) ghadan (mañana) maʿa al-ʿāʾilah, fa-l-ʿamal al-jamāʿī (pues el trabajo colectivo) barakah (bendición).',
          syntaxPattern: 'Concordancia estricta del verbo aṣbaḥat (أصبحت) en femenino singular con el sujeto plural no humano ḥabbāt az-zaytūn (حبات الزيتون).',
          culturalNotes: 'La temporada del "ʿawneh" (cosecha comunal del olivo) es una festividad que congrega a todas las generaciones en el Levante.'
        }
      },
      {
        id: 'ar-dial-3-2',
        title: 'Cuidado del manantial y del sistema de riego',
        context: 'Un anciano agricultor enseña a su nieto a limpiar el canal de agua limpia que nutre el huerto.',
        turns: [
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'يا بني، نظف مجرى القناة من الحجارة والأوراق ليجري الماء عذباً.',
            translation: 'Hijo mío, limpia el cauce del canal de piedras y hojas para que el agua fluya dulce y cristalina.',
            phonetic: 'Yā bunayy, naẓẓif majrā l-qanāti mina l-ḥijārati wa-l-awrāqi li-yajriya l-māʾu ʿadhban.'
          },
          {
            speaker: 'الحفيد (Nieto)',
            text: 'نعم يا جدي، الماء هو سر الحياة وخضرة هذا البستان.',
            translation: 'Sí, abuelito, el agua es el secreto de la vida y del verdor lozano de este huerto.',
            phonetic: 'Naʿam yā jaddī, al-māʾu huwa sirru l-ḥayāti wa-khuḍrati hādhā l-bustān.'
          },
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'حافظ على كل قطرة، فالإسراف في الماء يضر الأرض والزرع.',
            translation: 'Cuida cada gota; el despilfarro del agua perjudica a la tierra y a los sembrados.',
            phonetic: 'Ḥāfiẓ ʿalā kulli qaṭrah, fa-l-isrāfu fī l-māʾi yaḍurru l-arḍa wa-z-zarʿ.'
          },
          {
            speaker: 'الحفيد (Nieto)',
            text: 'سأعتني به دائماً، فالأرض أمانة في أعناقنا للأجيال القادمة.',
            translation: 'Lo cuidaré siempre; la tierra es una custodia sagrada sobre nuestros hombros para las generaciones venideras.',
            phonetic: 'Sa-aʿtanī bihī dāʾiman, fa-l-arḍu amānatun fī aʿnāqinā li-l-ajyāli l-qādimah.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yā bunayy, naẓẓif (limpia imperativo intensivo forma II) majrā al-qanāh (el curso del canal) min al-ḥijārah (de las piedras) wa-l-awrāq (y las hojas) li-yajriya (para que corra subjuntivo con li-) al-māʾ (el agua) ʿadhban (dulce acusativo de estado hāl). / Naʿam yā jaddī, al-māʾ huwa sirr al-ḥayāh (secreto de la vida) wa-khuḍrah (y verdor de) hādhā al-bustān (este huerto). / Ḥāfiẓ (cuida forma III) ʿalā kull qaṭrah (sobre cada gota), fa-l-isrāf (pues el derroche) fī al-māʾ yaḍurr (daña) al-arḍ wa-z-zarʿ (la tierra y la siembra). / Sa-aʿtanī (cuidaré forma VIII) bihī dāʾiman, fa-l-arḍ amānah (la tierra es custodia/confianza sagrada).',
          syntaxPattern: 'Uso de la partícula causal-final لِـ (li-) que rige verbo en modo subjuntivo con fatha: لِيَجْرِيَ المَاءُ.',
          culturalNotes: 'Proteger el agua y evitar su desperdicio es un mandato ético islámico explícito, incluso si se está frente a un río caudaloso.'
        }
      },
      {
        id: 'ar-dial-3-3',
        title: 'Recolección de granadas y frutas maduras en el huerto',
        context: 'Dos hermanas recolectan granadas y cítricos en las faldas de un monte fértil.',
        turns: [
          {
            speaker: 'سلمى (Salmā)',
            text: 'انظري إلى شجر الرمان، ثماره حمراء وكبيرة مثل الياقوت.',
            translation: 'Mira los granados; sus frutos están rojos y corpulentos semejando rubíes preciosos.',
            phonetic: 'Unẓurī ilā shajari r-rummān, thimāruhu ḥamrāʾu wa-kabīratun mithla l-yāqūt.'
          },
          {
            speaker: 'فاطمة (Fāṭimah)',
            text: 'رائحة أزهار الليمون تملأ المكان بهجة وانشراحاً.',
            translation: 'El aroma del azahar de los limoneros llena el entorno de alegría y gratísimo deleite.',
            phonetic: 'Rāʾiḥatu azhāri l-laymūni tamlaʾu l-makāna bahjatan wa-nshirāḥan.'
          },
          {
            speaker: 'سلمى (Salmā)',
            text: 'سبحان الخالق الذي جعل في الطبيعة هذا الجمال البديع!',
            translation: '¡Glorificado sea el Creador Supremo, que depositó en la naturaleza esta belleza prodigiosa!',
            phonetic: 'Subḥāna l-Khāliqi lladhī jaʿala fī ṭ-ṭabīʿati hādhā l-jamāla l-badīʿ!'
          },
          {
            speaker: 'فاطمة (Fāṭimah)',
            text: 'سنملأ السلال لنأخذ منها حصة للجيران والأقارب.',
            translation: 'Llenaremos las cestas para llevar una generosa porción a los vecinos y parientes.',
            phonetic: 'Sa-namlaʾu s-silāla li-naʾkhudha minhā ḥiṣṣatan li-l-jīrāni wa-l-aqārib.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Unẓurī (mira imperativo femenino singular) ilā shajar ar-rummān (hacia los árboles de granada), thimāruh (sus frutos) ḥamrāʾ (rojos femenino singular por plural no humano) wa-kabīrah (y grandes) mithla (semejante a) al-yāqūt (el rubí). / Rāʾiḥat azhār al-laymūn (aroma de las flores de limón) tamlaʾ (llena) al-makān (el lugar) bahjatan (de gozo) wa-nshirāḥan (y expansión de ánimo). / Subḥān al-Khāliq (gloria al Creador) alladhī (que pronombre relativo) jaʿala (puso/hizo) fī aṭ-ṭabīʿah (en la naturaleza) hādhā al-jamāl (esta hermosura) al-badīʿ (maravillosa)! / Sa-namlaʾ (llenaremos) as-silāl (las canastas) li-naʾkhudh (para tomar) minhā ḥiṣṣah (una porción de ellas) li-l-jīrān (para los vecinos) wa-l-aqārib (y parientes).',
          syntaxPattern: 'Uso de la exclamación de contemplación "سبحان الخالق" (subḥāna l-Khāliq) ante la majestuosidad natural.',
          culturalNotes: 'La granada (رمان) es considerada en el Cercano Oriente símbolo de fecundidad y paraíso terrenal.'
        }
      },
      {
        id: 'ar-dial-3-4',
        title: 'Agradecimiento por las lluvias y siembra de trigo',
        context: 'Un agricultor contempla el campo de trigo tras una noche de copiosa lluvia invernal.',
        turns: [
          {
            speaker: 'طارق (Ṭāriq)',
            text: 'الحمد لله، هطلت أمطار غزيرة البارحة وسقت الأرض العطشى.',
            translation: 'Alabado sea Dios, anoche cayeron lluvias torrenciales y saciaron la sed de la tierra sedienta.',
            phonetic: 'Al-ḥamdu li-Llāh, haṭalat amṭārun ghazīratun al-bāriḥata wa-saqati l-arḍa l-ʿaṭshā.'
          },
          {
            speaker: 'جميل (Jamīl)',
            text: 'هذه الأمطار نعمة عظيمة، ستبذر حبات القمح وتنمو السنابل.',
            translation: 'Estas lluvias son una bendición inmensa; germinarán los granos de trigo y crecerán las espigas.',
            phonetic: 'Hādhihi l-amṭāru niʿmatun ʿaẓīmah, sa-tabdhuru ḥabbātu l-qamḥi wa-tanmū s-sanābil.'
          },
          {
            speaker: 'طارق (Ṭāriq)',
            text: 'الأرض الخصبة تجود بالخير لمن يرعاها بجهده وعرقه.',
            translation: 'La tierra fértil es generosa en bienes para quien la atiende con su esfuerzo y su sudor.',
            phonetic: 'Al-arḍu l-khiṣbatu tajūdu bi-l-khayri li-man yarʿāhā bi-juhdihī wa-ʿaraqih.'
          },
          {
            speaker: 'جميل (Jamīl)',
            text: 'نسأل الله أن يبارك في هذا المحصول ليكون رزقاً حلالاً طيباً.',
            translation: 'Rogamos a Dios que bendiga esta cosecha para que sea sustento digno, lícito y bendecido.',
            phonetic: 'Nasʾalu Llāha an yubārika fī hādhā l-maḥṣūli li-yakūna rizqan ḥalālan ṭayyibā.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Al-ḥamdu li-Llāh, haṭalat (cayeron) amṭār ghazīrah (lluvias torrenciales) al-bāriḥah (anoche) wa-saqat (y regaron) al-arḍ (la tierra) al-ʿaṭshā (sedienta). / Hādhihi al-amṭār (estas lluvias) niʿmah ʿaẓīmah (gracia inmensa), sa-tabdhur (germinarán) ḥabbāt al-qamḥ (granos de trigo) wa-tanmū (y crecerán) as-sanābil (las espigas plural de sunbulah). / Al-arḍ al-khiṣbah (la tierra fértil) tajūd (es dadivosa) bi-l-khayr (con el bien) li-man (para quien) yarʿāhā (la cuida) bi-juhdih (con su esfuerzo) wa-ʿaraqih (y su sudor). / Nasʾal Llāh (pedimos a Dios) an yubārik (que bendiga) fī hādhā al-maḥṣūl (en esta cosecha) li-yakūn (para que sea) rizqan (sustento providencial) ḥalālan (lícito) ṭayyibā (bueno).',
          syntaxPattern: 'Concordancia de adjetivo femenino singular "ghazīrah" (غزيرة) con el sustantivo plural inanimado "amṭār" (أمطار).',
          culturalNotes: 'El concepto de "رزق حلال" (rizq ḥalāl) denota el fruto del trabajo honesto y en consonancia con la ley divina.'
        }
      },
      {
        id: 'ar-dial-3-5',
        title: 'El atardecer en el desierto y la contemplación de las estrellas',
        context: 'Dos viajeros contemplan la caída del sol y la aparición de las constelaciones en las dunas.',
        turns: [
          {
            speaker: 'عمر (ʿUmar)',
            text: 'ما أجمل سكون الصحراء وغروب الشمس خلف الكثبان الرملية!',
            translation: '¡Qué hermosa es la serenidad del desierto y el ocaso del sol tras las dunas de arena!',
            phonetic: 'Mā ajmala sukūna ṣ-ṣaḥrāʾi wa-ghurūba sh-shamsi khalfa l-kuthbāni r-ramliyyah!'
          },
          {
            speaker: 'بلال (Bilāl)',
            text: 'والنجوم بدأت تتلألأ في السماء الصافية لتهدي السائرين في الليل.',
            translation: 'Y las estrellas comienzan a fulgurar en el cielo despejado para guiar a los caminantes en la noche.',
            phonetic: 'Wa-n-nujūmu badaʾat tatalaʾlaʾu fī s-samāʾi ṣ-ṣāfiyati li-tahdiya s-sāʾirīna fī l-layl.'
          },
          {
            speaker: 'عمر (ʿUmar)',
            text: 'علم الفلك العربي القديم نشأ من هذه الملاحظة العميقة للأفلاك.',
            translation: 'La milenaria astronomía árabe nació justamente de esta profunda y minuciosa observación de las esferas celestes.',
            phonetic: 'ʿIlmu l-falaki l-ʿarabiyyu l-qadīmu nashaʾa min hādhihi l-mulāḥaẓati l-ʿamīqati li-l-aflāk.'
          },
          {
            speaker: 'بلال (Bilāl)',
            text: 'الكون كتاب مفتوح يدعو الإنسان إلى التأمل والخشوع.',
            translation: 'El cosmos es un libro abierto que convoca al ser humano a la contemplación y a la reverencia espiritual.',
            phonetic: 'Al-kawnu kitābun maftūḥun yadʿū l-insāna ilā t-taʾammuli wa-l-khushūʿ.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Mā ajmal (qué bello estructura exclamativa taʿajjub) sukūn (silencio de) aṣ-ṣaḥrāʾ (el desierto) wa-ghurūb ash-shams (y puesta de sol) khalfa (detrás de) al-kuthbān ar-ramliyyah (dunas arenosas)! / Wa-n-nujūm (y las estrellas) badaʾat (comenzaron) tatalaʾlaʾ (centellear) fī as-samāʾ aṣ-ṣāfiyah (en el cielo claro) li-tahdiya (para guiar) as-sāʾirīn (los caminantes) fī al-layl (en la noche). / ʿIlm al-falak (la ciencia de astronomía) al-ʿarabī al-qadīm (árabe antigua) nashaʾa (surgió) min hādhihi al-mulāḥaẓah (esta observación) al-ʿamīqah (profunda) li-l-aflāk (de las órbitas). / Al-kawn (el cosmos) kitāb maftūḥ (libro abierto) yadʿū (llama a) al-insān ilā at-taʾammul (la meditación) wa-l-khushūʿ (y la piedad reverente).',
          syntaxPattern: 'Estructura exclamativa clásica de asombro: مَا أَفْعَلَ (mā afʿala) + sustantivo acusativo: ما أجملَ سكونَ الصحراء.',
          culturalNotes: 'Los navegantes y beduinos árabes nombraron gran parte de las estrellas visibles en el firmamento (Aldebarán, Altair, Betelgeuse).'
        }
      }
    ]
  },
  {
    id: 'ar-comm-4',
    topic: 'Comercio e Intercambio',
    title: 'التجارة والسوق: El Zoco Tradicional, Negociación y Ética Comercial Árabe',
    substantiveGuide: `El comercio (تجارة, tijārah) ocupa un rango preeminente en la memoria histórica y la cultura del mundo árabe. Desde las célebres rutas caravaneras de incienso y especias de la Arabia preislámica —como el viaje de invierno a Yemen y el viaje de verano a la Gran Siria (رحلة الشتاء والصيف, riḥlat ash-shitāʾi wa-ṣ-ṣayf)— hasta las transacciones internacionales de los grandes centros metropolitanos contemporáneos, el mercado o zoco ("سوق", sūq) ha sido siempre el corazón palpitante de la vida económica, social y lingüística de la comunidad.

La institución del sūq no es un mero centro comercial impersonal, sino un espacio laberíntico organizado tradicionalmente por gremios de artesanos: el zoco de los especieros (سوق العطارين, sūq al-ʿaṭṭārīn), el de los orfebres de oro y plata (سوق الصاغة, sūq aṣ-ṣāghah), el de los sederos y pañeros (سوق القماشين, sūq al-qammāshīn) y el de los carpinteros y zapateros. En estos recintos, la transacción mercantil es indisociable de la conversación social, el intercambio de noticias, la degustación de té a la menta o café y la invocación de bendiciones recíprocas.

Para consultar el precio de un bien o servicio en árabe estándar moderno, se emplean fórmulas como: "بكم هذا؟" (bi-kam hādhā? ¿A cuánto está esto? ¿Por cuánto se vende?), "ما هو سعر هذا؟" (mā huwa siʿru hādhā? ¿Cuál es el precio de este artículo?) o "كم ثمن هذا؟" (kam thamanu hādhā? ¿Cuánto vale esto?). La respuesta del comerciante establece el valor nominal acompañado a menudo de expresiones de agasajo hacia el cliente: "هذا بخمسين دولاراً، ولكن لك بأربعين" (esto está a cincuenta dólares, pero para usted en cuarenta).

El arte del regateo y la negociación (مساومة, musāwamah) en los mercados tradicionales árabes se ejerce dentro de un marco de cordialidad y mutuo respeto. El cliente solicita cortésmente una rebaja con frases como: "هل يمكنك تخفيض السعر قليلاً؟" (hal yumkinuka takhfīḍu s-siʿri qalīlan? ¿Podría rebajar el precio un poco?) o "هذا غالٍ بعض الشيء، راعنا في السعر" (hādhā ghālin baʿḍa sh-shayʾ, rāʿinā fī s-siʿr, esto resulta algo caro, tenga consideración con nosotros en el precio). El comerciante responde defendiendo la calidad insuperable de su género, pero concediendo una rebaja amistosa para no defraudar al huésped.

La ética comercial islámica y semítica prohíbe taxativamente el fraude en las medidas y balanzas (الغش في الميزان), la ocultación de defectos en la mercancía y la especulación usuraria. El comerciante honesto y veraz (التاجر الصدوق الأمين) es venerado como una persona de honor eminente. Al cerrar el trato, el comprador dice "توكلنا على الله" (tawakkalnā ʿalā Llāh, nos encomendamos a Dios) y entrega el dinero, a lo cual el vendedor replica con deseos de bendición económica: "بارك الله لك في رزقك" (bāraka Llāhu laka fī rizqik, que Dios bendiga tu adquisición y tu sustento).

La figura hist?rica del zoco tradicional ('souk' ???) en ciudades milenarias como Damasco, Alepo, El Cairo o Jerusal?n simboliza el coraz?n latiente del comercio euroasi?tico. En estos laberintos techados de b?vedas de piedra, la compraventa de especias como el azafr?n y el comino, perfumes de ?mbar y almizcle, y finos tejidos de lino y seda se ha regido invariablemente por la confianza en la palabra empe?ada y la reputaci?n p?blica de honradez del comerciante. La negociaci?n no busca humillar a la contraparte ni obtener ganancias desmedidas a expensas de la ruina ajena, sino consolidar una alianza duradera en la que ambas partes se despidan con la sincera invocaci?n de 'R?bana yub?rik lak' (Que el Se?or te colme de bendiciones y prosperidad en lo adquirido).`,
    solvedDialogues: [
      {
        id: 'ar-dial-4-1',
        title: 'Preguntando precios de especias finas en el zoco tradicional',
        context: 'Un comprador selecciona azafrán, cardamomo y canela en una tienda de especias aromáticas.',
        turns: [
          {
            speaker: 'المشتري (Comprador)',
            text: 'السلام عليكم يا صاحب المتجر. بكم أوقية الزعفران الصافي؟',
            translation: 'La paz sea con usted, dueño de la tienda. ¿A cuánto tiene la onza de azafrán puro?',
            phonetic: 'As-salāmu ʿalaykum yā ṣāḥiba l-matjar. Bi-kam ūqiyyatu z-zaʿfarāni ṣ-ṣāfī?'
          },
          {
            speaker: 'العطار (Especiero)',
            text: 'وعليكم السلام وأهلاً بك. الأوقية بعشرين دولاراً، وهو من أجود الأنواع.',
            translation: 'Y sobre usted la paz y bienvenido sea. La onza a veinte dólares; es de la más selecta calidad.',
            phonetic: 'Wa-ʿalaykumu s-salāmu wa-ahlan bik. Al-ūqiyyatu bi-ʿishrīna dūlāran, wa-huwa min ajwadi l-anwāʿ.'
          },
          {
            speaker: 'المشتري (Comprador)',
            text: 'أريد أوقيتين من الزعفران ونصف كيلو من حب الهيل الممتاز.',
            translation: 'Deseo dos onzas de azafrán y medio kilo de cardamomo aromático de primera categoría.',
            phonetic: 'Urīdu ūqiyyatayni mina z-zaʿfarāni wa-niṣfa kīlū min ḥabbi l-hayli l-mumtāz.'
          },
          {
            speaker: 'العطار (Especiero)',
            text: 'على الرحب والسعة. الحساب الإجمالي خمسة وثلاثون دولاراً فقط.',
            translation: 'Con el mayor gusto y complacencia. La cuenta total son treinta y cinco dólares cerrados.',
            phonetic: 'ʿAlā r-raḥbi wa-s-saʿah. Al-ḥisābu l-ijmāliyyu khamsatun wa-thalāthūna dūlāran faqaṭ.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'As-salāmu ʿalaykum yā ṣāḥib al-matjar (dueño de la tienda). Bi-kam (¿a cuánto?) ūqiyyah (onza) az-zaʿfarān (el azafrán) aṣ-ṣāfī (puro)? / Wa-ʿalaykum as-salām wa-ahlan bik. Al-ūqiyyah bi-ʿishrīn dūlāran (por 20 dólares acusativo de especificación tamyīz), wa-huwa min ajwad (más selecto elativo) al-anwāʿ (los tipos/clases). / Urīd (deseo primera persona) ūqiyyatayn (dos onzas dual acusativo) min az-zaʿfarān wa-niṣf kīlū (y medio kilo) min ḥabb al-hayl (semillas de cardamomo) al-mumtāz (excelente). / ʿAlā ar-raḥb wa-s-saʿah. Al-ḥisāb al-ijmālī (la cuenta total) khamsah wa-thalāthūn dūlāran faqaṭ (35 dólares solamente).',
          syntaxPattern: 'Uso del dual acusativo con terminación "-ayn": أوقيتين (ūqiyyatayn). Numeral compuesto: خمسة وثلاثون donde las unidades contradicen en género al sustantivo contable.',
          culturalNotes: 'El zoco de las especias (العطارين) es famoso por el color y fragancia de hierbas, resinas aromáticas y condimentos orientales.'
        }
      },
      {
        id: 'ar-dial-4-2',
        title: 'Negociando respetuosamente el valor de un manto bordado',
        context: 'Una compradora contempla una kufiya bordada a mano con hilos finos de seda.',
        turns: [
          {
            speaker: 'المشترية (Compradora)',
            text: 'ما أجمل هذا التطريز اليدوي! كم تطلب في هذه الكوفية الجميلة؟',
            translation: '¡Qué primoroso bordado artesanal! ¿Cuánto pide por esta hermosa kufiya?',
            phonetic: 'Mā ajmala hādhā t-taṭrīza l-yadawī! Kam taṭlubu fī hādhihi l-kūfiyyati l-jamīlah?'
          },
          {
            speaker: 'التاجر (Vendedor)',
            text: 'سعرها أربعون دولاراً يا سيدتي، فهذا عمل يدوي أصيل من القدس.',
            translation: 'Su precio es cuarenta dólares, distinguida señora; es una labor manual auténtica de Jerusalén.',
            phonetic: 'Siʿruhā arbaʿūna dūlāran yā sayyidatī, fa-hādhā ʿamalun yadawiyyun aṣīlun mina l-Quds.'
          },
          {
            speaker: 'المشترية (Compradora)',
            text: 'صنعتها متقنة حقاً، ولكن هل يمكن تخفيض السعر إلى ثلاثين؟',
            translation: 'Su confección es verdaderamente impecable, pero ¿sería posible rebajarla a treinta dólares?',
            phonetic: 'Ṣanʿatuhā mutqanatun ḥaqqan, wa-lākin hal yumkinu takhfīḍu s-siʿri ilā thalāthīn?'
          },
          {
            speaker: 'التاجر (Vendedor)',
            text: 'إكراماً لحضورك ولذوقك الرفيع، خذيها بخمسة وثلاثين دولاراً.',
            translation: 'En honor a su grata presencia y a su refinado gusto, llévesela en treinta y cinco dólares.',
            phonetic: 'Ikrāman li-ḥuḍūriki wa-li-dhawqiki r-rafīʿ, khudhīhā bi-khamsatin wa-thalāthīna dūlāran.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Mā ajmal hādhā at-taṭrīz al-yadawī (qué bello este bordado manual)! Kam taṭlub (cuánto pides) fī hādhihi al-kūfiyyah al-jamīlah (en esta hermosa kufiya)? / Siʿruhā (su precio) arbaʿūn dūlāran (40 dólares), yā sayyidatī, fa-hādhā ʿamal yadawī aṣīl (obra manual auténtica) min al-Quds (de Jerusalén). / Ṣanʿatuhā mutqanah (su hechura es perfecta) ḥaqqan, wa-lākin hal yumkin takhfīḍ as-siʿr (rebajar el precio) ilā thalāthīn (a 30)? / Ikrāman (como muestra de honor acusativo de causa mafʿūl li-ajlih) li-ḥuḍūrik (por tu presencia) wa-li-dhawqik ar-rafīʿ (y tu fino gusto), khudhīhā (tómala imperativo femenino singular) bi-khamsah wa-thalāthīn dūlāran.',
          syntaxPattern: 'Uso del objeto de causa o finalidad (مَفْعُول لأَجْلِهِ): إِكْرَاماً لِحُضُورِكِ (en honra a tu presencia). Imperativo femenino con yā: خذيها.',
          culturalNotes: 'La kufiya con bordado negro o rojo es un emblema universal de dignidad y pertenencia cultural palestina y levantina.'
        }
      },
      {
        id: 'ar-dial-4-3',
        title: 'Compra de tela de seda para confeccionar prendas',
        context: 'Un sastre selecciona cortes de tela adamascada en el zoco textil.',
        turns: [
          {
            speaker: 'الخياط (Sastre)',
            text: 'أبحث عن قماش حريري دمشقي فاخر لتفصيل فستان تقليدي.',
            translation: 'Busco tela de seda adamascada de lujo para confeccionar un vestido tradicional.',
            phonetic: 'Abḥathu ʿan qumāshin ḥarīriyyin dimashqiyyin fākhirin li-tafṣīli fustānin taqlīdiyy.'
          },
          {
            speaker: 'بائع القماش (Comerciante)',
            text: 'تفضل وشاهد هذا الحرير المطرز بخيوط القصب الذهبية.',
            translation: 'Tenga la bondad y contemple esta seda brocada con hilos dorados de metal fino.',
            phonetic: 'Tafaḍḍal wa-shāhid hādhā l-ḥarīra l-muṭarraza bi-khuyūṭi l-qaṣabi dh-dhahabiyyah.'
          },
          {
            speaker: 'الخياط (Sastre)',
            text: 'خامته ممتازة جداً. أحتاج إلى ستة أمتار من هذا اللون الأزرق.',
            translation: 'Su textura y calidad son soberbias. Necesito seis metros de este color azul ultramar.',
            phonetic: 'Khāmatuhu mumtāzatun jiddan. Aḥtāju ilā sittati amtārin min hādhā l-lawni l-azraq.'
          },
          {
            speaker: 'بائع القماش (Comerciante)',
            text: 'سأقيسها لك بدقة وإتقان، مبروك مقدماً على الثوب الجديد.',
            translation: 'Se los mediré con minuciosa exactitud; felicitaciones anticipadas por el nuevo vestido.',
            phonetic: 'Sa-aqīsuhā laka bi-diqqatin wa-itqān, mabrūkun muqaddaman ʿalā th-thawbi l-jadīd.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Abḥath ʿan (busco verbo con preposición ʿan) qumāsh (tela) ḥarīrī (de seda) dimashqī (damasquina) fākhir (de lujo) li-tafṣīl (para cortar/diseñar) fustān (vestido) taqlīdī (tradicional). / Tafaḍḍal wa-shāhid (mira) hādhā al-ḥarīr (esta seda) al-muṭarraz (bordada) bi-khuyūṭ al-qaṣab (hilos de hilo de oro/caña) adh-dhahabiyyah (dorados). / Khāmatuh (su material) mumtāzah jiddan. Aḥtāj ilā (necesito) sittat amtār (seis metros número femenino con plural masculino miter -> amtār). / Sa-aqīsuhā lak (te la mediré) bi-diqqah (con precisión) wa-itqān (y esmero), mabrūk (bendito/felicitaciones) muqaddaman (por adelantado).',
          syntaxPattern: 'Polaridad de género en los numerales de 3 a 10: ستة أمتار (sittatu amtār, número con ta marbuta + sustantivo en plural genitivo masculino).',
          culturalNotes: 'Damasco fue célebre históricamente por el damasco (damasquinado) y telas de brocado de seda enviadas a las cortes del mundo.'
        }
      },
      {
        id: 'ar-dial-4-4',
        title: 'Pago, recibo y garantía en una transacción comercial',
        context: 'Un comprador abona el costo de artesanías de madera de olivo tallada.',
        turns: [
          {
            speaker: 'المشتري (Comprador)',
            text: 'تفضل، هذا هو المبلغ نقداً: مائة وخمسون دولاراً.',
            translation: 'Tenga la bondad, aquí tiene el importe exacto en efectivo: ciento cincuenta dólares.',
            phonetic: 'Tafaḍḍal, hādhā huwa l-mablaghu naqdan: miʾatun wa-khamsūna dūlāran.'
          },
          {
            speaker: 'البائع (Vendedor)',
            text: 'استلمت المبلغ كاملاً، تفضل فاتورة الشراء مع بطاقة الضمان.',
            translation: 'He recibido el importe íntegro; aquí tiene su factura de compra con la tarjeta de garantía.',
            phonetic: 'Istalamtu l-mablagha kāmilan, tafaḍḍal fātūrata sh-shirāʾi maʿa biṭāqati ḍ-ḍamān.'
          },
          {
            speaker: 'المشتري (Comprador)',
            text: 'شكراً لأمانتك وحسن تعاملك، قطع خشب الزيتون هذه تحف نادرة.',
            translation: 'Gracias por su honradez y excelente trato; estas tallas de madera de olivo son reliquias singulares.',
            phonetic: 'Shukran li-amānatika wa-ḥusni taʿāmulik, qiṭaʿu khashabi z-zaytūni hādhihi tuḥafun nādirah.'
          },
          {
            speaker: 'البائع (Vendedor)',
            text: 'العفو يا سيدي، بارك الله لك فيما اشتريت وأهلاً بك دائماً.',
            translation: 'De nada, estimado señor; que Dios bendiga su compra y sea usted siempre bienvenido.',
            phonetic: 'Al-ʿafwu yā sayyidī, bāraka Llāhu laka fīmā shtarayta wa-ahlan bika dāʾiman.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Tafaḍḍal, hādhā huwa al-mablagh (el monto/importe) naqdan (en efectivo acusativo adverbial): miʾah wa-khamsūn dūlāran (150 dólares). / Istalamtu (recibí forma VIII) al-mablagh kāmilan (completo acusativo de estado), tafaḍḍal fātūrat ash-shirāʾ (factura de compra) maʿa biṭāqat aḍ-ḍamān (tarjeta de garantía). / Shukran li-amānatik (a tu honradez) wa-ḥusn taʿāmulik (y buen trato), qiṭaʿ (piezas plural roto de qiṭʿah) khashab az-zaytūn (madera de olivo) hādhihi tuḥaf (joyas de arte) nādirah (raras/valiosas). / Al-ʿafw yā sayyidī, bāraka Llāh laka fīmā (en lo que) ishtarayt (compraste).',
          syntaxPattern: 'Uso de la fórmula de cierre comercial de gratitud divina: بَارَكَ اللهُ لَكَ فِيْمَا اشْتَرَيْتَ.',
          culturalNotes: 'El tallado en madera de olivo de Belén (خشب زيتون بيت لحم) es una tradición artesanal centenaria apreciada mundialmente.'
        }
      },
      {
        id: 'ar-dial-4-5',
        title: 'Despacho de café y productos salvadoreños hacia puertos árabes',
        context: 'Dos exportadores supervisan los contenedores de café de altura salvadoreño destinados a Dubái y Amán.',
        turns: [
          {
            speaker: 'المصدر (Exportador)',
            text: 'تم تجهيز شحنة البن السلفادوري الفاخر، شهادات الجودة جاهزة.',
            translation: 'Ha quedado listo el cargamento de café fino salvadoreño; los certificados de calidad están listos.',
            phonetic: 'Tamma tajhīzu shiḥnati l-bunni s-salvādūriyyi l-fākhir, shahādātu l-jawdati jāhizah.'
          },
          {
            speaker: 'الوكيل (Agente)',
            text: 'هذا البن المزروع في مرتفعات البركان يتمتع بنكهة فريدة ومطلوبة.',
            translation: 'Este grano cultivado en las faldas de la cordillera volcánica goza de un aroma y perfil únicos muy cotizados.',
            phonetic: 'Hādhā l-bunnu l-mazrūʿu fī murtafaʿāti l-burkāni yatamattaʿu bi-nakhhatin farīdatin wa-maṭlūbah.'
          },
          {
            speaker: 'المصدر (Exportador)',
            text: 'التبادل التجاري بين أمريكا الوسطى والعالم العربي يفتح آفاقاً واسعة.',
            translation: 'El intercambio comercial entre Centroamérica y el mundo árabe abre horizontes amplísimos de prosperidad.',
            phonetic: 'At-tabādulu t-tijāriyyu bayna Amrīkā l-wusṭā wa-l-ʿālami l-ʿarabiyyi yaftaḥu āfāqan wāsiʿah.'
          },
          {
            speaker: 'الوكيل (Agente)',
            text: 'بالتأكيد، التجارة تبني جسور الصداقة والازدهار المشترك بين الشعوب.',
            translation: 'Sin duda alguna; el comercio construye puentes de amistad y prosperidad compartida entre los pueblos.',
            phonetic: 'Bi-t-taʾkīd, at-tijāratu tabnī jusūra ṣ-ṣadāqati wa-l-izdihāri l-mushtarak.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Tamma tajhīz (se completó la preparación construcción pasiva con tamma + masdar) shiḥnat al-bunn (embarque de café en grano) as-salvādūrī (salvadoreño) al-fākhir (selecto), shahādāt al-jawdah (certificados de calidad) jāhizah (listos femenino singular concordancia no humano). / Hādhā al-bunn al-mazrūʿ (este café cultivado participio pasivo) fī murtafaʿāt al-burkān (en las alturas del volcán) yatamattaʿ bi- (disfruta de) nakhhah farīdah (sabor único) wa-maṭlūbah (y solicitado). / At-tabādul at-tijārī (el intercambio comercial) bayna Amrīkā al-wusṭā (América Central) wa-l-ʿālam al-ʿarabī (el mundo árabe) yaftaḥ (abre) āfāqan wāsiʿah (horizontes amplios). / Bi-t-taʾkīd (ciertamente), at-tijārah tabnī (construye) jusūr aṣ-ṣadāqah (puentes de amistad).',
          syntaxPattern: 'Construcción estilística pasiva elegante: tamma + masdar (تَمَّ تَجْهِيزُ الشُّحْنَةِ, "fue preparado el cargamento").',
          culturalNotes: 'El café salvadoreño (variedades Bourbon y Pacamara) tiene una alta demanda en los mercados gourmet de los países del Golfo Pérsico.'
        }
      }
    ]
  },
  {
    id: 'ar-comm-5',
    topic: 'Cosmovisión y Narrativa',
    title: 'الفكر والذاكرة: Filosofía, Caligrafía y Sabiduría Poética Árabe',
    substantiveGuide: `La cosmovisión árabe clásica (الفكر العربي والرؤية الكونية, al-fikru l-ʿarabiyyu wa-r-ruʾyatu l-kawniyyah) representa una de las cumbres intelectuales de la civilización humana. Su edificio civilizatorio amalgama la revelación espiritual, el humanismo poético del desierto y la audacia científica y filosófica que floreció durante la Edad de Oro islámica (العصر الذهبي, al-ʿaṣru dh-dhahabī) en Bagdad, El Cairo, Damasco y Córdoba. En este horizonte, el lenguaje no es un instrumento accesorio, sino la máxima obra de arte divina: la palabra encierra la llave para descifrar las leyes del cosmos y la belleza moral del alma.

Un elemento cardinal de la lengua árabe es su sistema morfológico de raíces y moldes triconsonánticos (نظام الجذور والأوزان, niẓāmu l-judhūri wa-l-awzān). La gran mayoría de los vocablos derivan de una raíz semántica triconsonántica abstracta que se vierte en patrones vocálicos predecibles. Por ejemplo, de la raíz K-T-B (ك-ت-ب), vinculada a la noción de escribir y registrar, brotan decenas de términos concatenados: "كَتَبَ" (kataba, él escribió), "كِتَاب" (kitāb, libro), "كَاتِب" (kātib, escritor/escriba), "مَكْتَبَة" (maktabah, biblioteca o librería), "مَكْتَب" (maktab, oficina o escritorio) y "مُكَاتَبَة" (mukātabah, correspondencia). Esta arquitectura genera una asombrosa economía conceptual y una rigurosa armonía simétrica en la prosa y la poesía.

La tradición literaria y narrativa árabe dio al mundo obras imperecederas de fantasía y alegoría moral, encabezadas por "Las mil y una noches" (ألف ليلة وليلة, Alf Laylah wa-Laylah), donde la inteligencia y elocuencia de Shahrazad (شهرزاد) transforman la tiranía en compasión mediante el poder encantador del relato continuo. Junto a la narrativa de ficción, la sabiduría popular se condensó en miles de proverbios y aforismos (حكم وأمثال, ḥikam wa-amthāl) que guían la ética cotidiana, como "الوقت كالسيف إن لم تقطعه قطعك" (el tiempo es como una espada: si no lo cortas, te corta) o "اطلبوا العلم من المهد إلى اللحد" (buscad el conocimiento desde la cuna hasta la tumba).

En el plano estético visual, la prohibición teológica de representar figuras idolátricas impulsó el desarrollo sublime de la caligrafía árabe (الخط العربي, al-khaṭṭ al-ʿarabī) y los arabescos geométricos (زخرفة إسلامية, zakhrafah islāmiyyah). La caligrafía elevó la escritura del alfabeto árabe a una disciplina de contemplación espiritual, con estilos diversos: el Naskh (نسخ, claro y litúrgico), el Thuluth (ثلث, monumental y majestuoso), el Ruq'ah (رقعة, dinámico y cotidiano), el Diwani (ديواني, sinuoso y cortesano) y el Kufic (كوفي, sobrio, geométrico y milenario).

Asimismo, el movimiento de traducción (حركة الترجمة, ḥarakatu t-tarjamah) impulsado en la Casa de la Sabiduría (بيت الحكمة, Baytu l-Ḥikmah) de Bagdad en el siglo IX preservó, comentó y enriqueció el legado filosófico y científico de Grecia (Aristóteles, Platón, Galeno), de la India y de Persia. Pensadores como Averroes (ابن رشد, Ibn Rushd), Avicena (ابن سينا, Ibn Sīnā), Al-Farabi e Ibn Jaldún —padre de la sociología y la filosofía de la historia— tendieron los puentes epistemológicos que hicieron posible el Renacimiento europeo. Esta vocación de universalidad y aprecio por el saber universal hermana la memoria árabe con todos los pueblos del mundo.

Asimismo, el florecimiento del arte de la caligraf?a ?rabe ('jatt' ??) ?desde el sobrio estilo c?fico hasta el gr?cil y sinuoso 'thuluth'? convierte la palabra escrita en una arquitectura visual de devoci?n y belleza arm?nica. En la memoria colectiva salvadore?a, los relatos de la hospitalidad de los abuelos palestinos y sus c?nticos tradicionales en las noches de fiesta preservan un puente cultural fraterno e imborrable entre Moraz?n, San Salvador y el Oriente Medio.`,
    solvedDialogues: [
      {
        id: 'ar-dial-5-1',
        title: 'Apreciación del arte de la caligrafía árabe tradicional',
        context: 'Un maestro calígrafo enseña a un aprendiz los secretos del trazo con la pluma de caña (qalam).',
        turns: [
          {
            speaker: 'المعلم (Maestro)',
            text: 'انظر يا بني، الخط العربي هندسة روحانية ظهرت بآلة جسمانية.',
            translation: 'Observa, hijo mío: la caligrafía árabe es una geometría espiritual que se manifiesta mediante un instrumento físico.',
            phonetic: 'Unẓur yā bunayy, al-khaṭṭu l-ʿarabiyyu handasatun rūḥāniyyatun ẓaharat bi-ālatin jismāniyyah.'
          },
          {
            speaker: 'التلميذ (Aprendiz)',
            text: 'ما أجمل انسياب حبر القصب على ورق الزهر المصقول!',
            translation: '¡Qué hermosa es la fluidez de la tinta de caña sobre este papel satinado purísimo!',
            phonetic: 'Mā ajmala nsiyāba ḥibri l-qaṣabi ʿalā waraqi z-zahri l-maṣqūl!'
          },
          {
            speaker: 'المعلم (Maestro)',
            text: 'الخط الجميل يزيد الحق وضوحاً، ويتطلب صبراً طويلاً ودقة بالغة.',
            translation: 'La hermosa caligrafía añade resplandor a la verdad, y exige paciencia infinita y extrema precisión.',
            phonetic: 'Al-khaṭṭu l-jamīlu yazīdu l-ḥaqqa wuḍūḥan, wa-yataṭallabu ṣabran ṭawīlan wa-diqqatan bālighah.'
          },
          {
            speaker: 'التلميذ (Aprendiz)',
            text: 'سأتدرب كل يوم حتى أتقن موازين خط الثلث والنسخ بإذن الله.',
            translation: 'Me ejercitaré diariamente hasta dominar las proporciones áureas del estilo Thuluth y Naskh, con el favor de Dios.',
            phonetic: 'Sa-atadar Rabu kulla yawmin ḥattā utqina mawāzīna khaṭṭi th-thuluthi wa-n-naskhi bi-idhni Llāh.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Unẓur yā bunayy, al-khaṭṭ al-ʿarabī (la caligrafía árabe) handasah rūḥāniyyah (geometría espiritual) ẓaharat (apareció/se manifestó) bi-ālah jismāniyyah (con instrumento corpóreo). / Mā ajmal insiyāb (qué bello el flujo taʿajjub) ḥibr al-qaṣab (tinta de caña) ʿalā waraq az-zahr al-maṣqūl (sobre papel bruñido)! / Al-khaṭṭ al-jamīl yazīd (incrementa) al-ḥaqq (la verdad) wuḍūḥan (en claridad acusativo de especificación tamyīz), wa-yataṭallab (y requiere) ṣabran ṭawīlan (paciencia larga) wa-diqqatan bālighah (y precisión consumada). / Sa-atadarrab (me entrenaré) kull yawm ḥattā utqin (hasta dominar subjuntivo con ḥattā) mawāzīn (las balanzas/proporciones) khaṭṭ ath-thuluth wa-n-naskh bi-idhn Llāh.',
          syntaxPattern: 'Uso de la partícula subordinante حَتَّى (ḥattā) que rige modo subjuntivo con fatha: حَتَّى أُتْقِنَ (ḥattā utqina). Aforismo clásico atribuido a Yaqut al-Musta\'simi.',
          culturalNotes: 'El célebre aforismo "الخط هندسة روحانية ظهرت بآلة جسمانية" sintetiza la elevación de la escritura a manifestación cósmica.'
        }
      },
      {
        id: 'ar-dial-5-2',
        title: 'Reflexión sobre los cuentos de Las mil y una noches',
        context: 'Dos estudiantes de literatura analizan el valor de la narración de Shahrazad en la biblioteca.',
        turns: [
          {
            speaker: 'زينب (Zaynab)',
            text: 'كتاب "ألف ليلة وليلة" ليس مجرد حكايات خيالية، بل هو درس في حكمة الحوار.',
            translation: 'La obra "Las mil y una noches" no es solo cuentos de fantasía, sino una profunda lección sobre la sabiduría del diálogo.',
            phonetic: 'Kitābu “Alfi Laylatin wa-Laylah” laysa mujarrada ḥikāyātin khayāliyyah, bal huwa darsun fī ḥikmati l-ḥiwār.'
          },
          {
            speaker: 'طارق (Ṭāriq)',
            text: 'بالتأكيد، فشهرزاد استطاعت بالكلمة الصادقة والذكاء أن تروض الغضب والعنف.',
            translation: 'Ciertamente; Shahrazad logró, mediante la palabra inspirada y la inteligencia, desarmar la cólera y la violencia.',
            phonetic: 'Bi-t-taʾkīd, fa-Shahrazādu staṭāʿat bi-l-kalimati ṣ-ṣādiqati wa-dh-dhakāʾi an turawwiḍa l-ghaḍaba wa-l-ʿunf.'
          },
          {
            speaker: 'زينب (Zaynab)',
            text: 'الحكاية تفتح أبواب الأمل حين تنغلق مسالك الواقع.',
            translation: 'El relato narrado abre las puertas de la esperanza cuando parecen clausurarse los senderos de la realidad.',
            phonetic: 'Al-ḥikāyatu taftaḥu abwāba l-amali ḥīna tanghaliqu masāliku l-wāqiʿ.'
          },
          {
            speaker: 'طارق (Ṭāriq)',
            text: 'وهكذا أصبح هذا التراث الأدبي ملكاً للإنسانية جمعاء عبر العصور.',
            translation: 'Y de este modo este patrimonio literario se transformó en herencia de la humanidad entera a través de los siglos.',
            phonetic: 'Wa-hākadhā aṣbaḥa hādhā t-turāthu l-adabiyyu milkan li-l-insāniyyati jamʿāʾa ʿabra l-ʿuṣūr.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Kitāb Alf Laylah wa-Laylah laysa (no es verbo negativo con predicado acusativo mujarrad) mujarrad ḥikāyāt khayāliyyah (meras historias ficticias), bal (sino conjunción adversativa) huwa dars (lección) fī ḥikmat al-ḥiwār (en la sabiduría del diálogo). / Bi-t-taʾkīd, fa-Shahrazād istaṭāʿat (pudo pasado femenino) bi-l-kalimah aṣ-ṣādiqah (con la palabra verídica) wa-dh-dhakāʾ (y la agudeza) an turawwiḍ (que dome/apacigüe subjuntivo con an) al-ghaḍab (la ira) wa-l-ʿunf (y la violencia). / Al-ḥikāyah taftaḥ abwāb al-amal (puertas de la esperanza) ḥīna (en el momento en que) tanghaliq (se cierran forma VII pasiva refleja) masālik al-wāqiʿ (senderos de la realidad). / Wa-hākadhā aṣbaḥa (así llegó a ser) hādhā at-turāth al-adabī (esta herencia literaria) milkan (propiedad) li-l-insāniyyah jamʿāʾ (para la humanidad entera).',
          syntaxPattern: 'Uso del verbo defectivo de negación لَيْسَ (laysa) que sitúa su predicado en caso acusativo: ليسَ مُجَرَّدَ حكاياتٍ.',
          culturalNotes: 'El personaje de Shahrazad encarna el triunfo de la sabiduría femenina y la narración curativa sobre la arbitrariedad.'
        }
      },
      {
        id: 'ar-dial-5-3',
        title: 'El sistema de raíces triconsonánticas y la belleza léxica',
        context: 'Un docente explica la derivación morfológica a partir de la raíz K-T-B en la pizarra.',
        turns: [
          {
            speaker: 'الأستاذ (Profesor)',
            text: 'تأملوا جذر الكلمة الثلاثي (ك-ت-ب)، كيف تتفرع منه معانٍ متعددة.',
            translation: 'Observen con atención la raíz triconsonántica elemental K-T-B; cómo se ramifican de ella múltiples significados.',
            phonetic: 'Taʾammalū jadhra l-kalimati th-thulāthī (K-T-B), kayfa tatafarraʿu minhu maʿānin mutaʿaddidah.'
          },
          {
            speaker: 'الطالبة (Estudiante)',
            text: 'منه: كتب، كتاب، كاتب، مكتبة، ومكتوب! كلها مرتبطة بالكتابة.',
            translation: '¡De ella proceden: escribió, libro, escritor, biblioteca y carta escrita! Todas unidas al acto de plasmar letras.',
            phonetic: 'Minhu: kataba, kitāb, kātib, maktabah, wa-maktūb! Kulluhā murtabiṭatun bi-l-kitābah.'
          },
          {
            speaker: 'الأستاذ (Profesor)',
            text: 'أحسنتِ، هذه العبقرية الصرفية تجعل اللغة العربية كشجرة وارفة الظلال.',
            translation: '¡Brillante! Esta genialidad morfológica hace que el idioma árabe se asemeje a un frondoso árbol de generosa sombra.',
            phonetic: 'Aḥsanti, hādhihi l-ʿabqariyyatu ṣ-ṣarfiyyatu tajʿalu l-lughata l-ʿarabiyyata ka-shajaratin wārifati ẓ-ẓilāl.'
          },
          {
            speaker: 'الطالبة (Estudiante)',
            text: 'فهم أوزان الكلمات يسهل حفظ المفردات وفهم معاني النصوص القديمة.',
            translation: 'Comprender los moldes métricos facilita memorizar el vocabulario y desentrañar los textos antiguos.',
            phonetic: 'Fahmu awzāni l-kalimāti yusahhilu ḥifẓa l-mufradāti wa-fahma maʿānī n-nuṣūṣi l-qadīmah.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Taʾammalū (mediten/contemplen imperativo plural) jadhr al-kalimah (la raíz de la palabra) ath-thulāthī (triconsonántica) K-T-B, kayfa (cómo) tatafarraʿ (se ramifican) minhu (de ella) maʿānin (significados sustantivo defectivo con tanwīn kasr) mutaʿaddidah (múltiples). / Minhu: kataba (él escribió), kitāb (libro), kātib (escritor participio activo), maktabah (biblioteca sustantivo de lugar), wa-maktūb (escrito participio pasivo)! Kulluhā murtabiṭah (todas enlazadas) bi-l-kitābah (con la escritura). / Aḥsanti, hādhihi al-ʿabqariyyah aṣ-ṣarfiyyah (esta genialidad morfológica) tajʿal al-lughah al-ʿarabiyyah ka-shajarah (como árbol) wārifat aẓ-ẓilāl (de densas sombras). / Fahm awzān al-kalimāt (comprensión de moldes de palabras) yusahhil (facilita) ḥifẓ al-mufradāt (memorización de vocabulario) wa-fahm maʿānī an-nuṣūṣ al-qadīmah (significados de textos antiguos).',
          syntaxPattern: 'Nomenclatura morfológica árabe: فَعَلَ (kataba), فِعَال (kitāb), فَاعِل (kātib), مَفْعَلَة (maktabah), مَفْعُول (maktūb). Sustantivo defectivo مَعَانٍ.',
          culturalNotes: 'El filólogo Ibn Jinni en el siglo X describió la raíz árabe como un organismo vivo que late en todas sus ramificaciones.'
        }
      },
      {
        id: 'ar-dial-5-4',
        title: 'El legado científico de la Casa de la Sabiduría (Bayt al-Hikmah)',
        context: 'Dos historiadores conversan sobre el impacto universal de los traductores y astrónomos de Bagdad.',
        turns: [
          {
            speaker: 'أكرم (Akram)',
            text: 'كانت حركة الترجمة في بغداد نموذجاً عالمياً لحوار الحضارات وتلاقي العلوم.',
            translation: 'El movimiento de traducción en Bagdad fue un modelo universal de diálogo de civilizaciones y confluencia de ciencias.',
            phonetic: 'Kānat ḥarakatu t-tarjamati fī Baghdāda namūdhajan ʿālamiyyan li-ḥiwāri l-ḥaḍārāti wa-talāqī l-ʿulūm.'
          },
          {
            speaker: 'نبيل (Nabīl)',
            text: 'علماء ذلك العصر لم يكتفوا بالنقل، بل نقدوا النظريات وطوروا المنهج التجريبي.',
            translation: 'Los sabios de aquella época no se limitaron a copiar, sino que criticaron teorías y desarrollaron el método experimental.',
            phonetic: 'ʿUlamāʾu dhālika l-ʿaṣri lam yaktafū bi-n-naql, bal naqadū n-naẓariyyāti wa-ṭawwarū l-manhaja t-tajrībī.'
          },
          {
            speaker: 'أكرم (Akram)',
            text: 'ابن رشد وابن الهيثم والخوارزمي أضاؤوا دروب المعرفة للعالم بأسره.',
            translation: 'Averroes, Alhazen y Al-Juarismi alumbraron los caminos del conocimiento para el mundo entero.',
            phonetic: 'Ibnu Rushdin wa-bnu l-Haythami wa-l-Khuwārizmiyyu aḍāʾū durūba l-maʿrifati li-l-ʿālami bi-asrih.'
          },
          {
            speaker: 'نبيل (Nabīl)',
            text: 'إن الحكمة ضالة المؤمن، أنى وجدها فهو أحق الناس بها.',
            translation: 'Ciertamente la sabiduría es el anhelo del creyente; dondequiera que la halle, es el más digno de poseerla.',
            phonetic: 'Inna l-ḥikmata ḍāllatu l-muʾmin, annā wajadahā fa-huwa aḥaqqu n-nāsi bihā.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Kānat ḥarakat at-tarjamah (el movimiento de traducción) fī Baghdād namūdhajan (modelo acusativo como predicado de kāna) ʿālamiyyan li-ḥiwār al-ḥaḍārāt (diálogo de civilizaciones) wa-talāqī al-ʿulūm (encuentro de saberes). / ʿUlamāʾ dhālika al-ʿaṣr (sabios de aquella era) lam yaktafū (no se conformaron apócope plural con lam) bi-n-naql (con la copia/traslado), bal naqadū (sino criticaron) an-naẓariyyāt (las teorías) wa-ṭawwarū al-manhaj at-tajrībī (el método experimental). / Ibn Rushd wa-bn al-Haytham wa-l-Khuwārizmī aḍāʾū (iluminaron) durūb al-maʿrifah (caminos del conocimiento) li-l-ʿālam bi-asrih (para el mundo entero). / Inna al-ḥikmah (ciertamente la sabiduría) ḍāllat al-muʾmin (anhelo/objeto extraviado del creyente), annā wajadahā (dondequiera la encuentre) fa-huwa aḥaqq an-nās bihā (él es el más digno de ella).',
          syntaxPattern: 'Uso de la partícula enfática إِنَّ (inna) que sitúa al sujeto en caso acusativo: إِنَّ الحِكْمَةَ. Negación en tiempo pasado mediante لَمْ + verbo apocopado.',
          culturalNotes: 'El término algoritmo (algorithm) deriva directamente del nombre de Abu Ja\'far Muhammad ibn Musa al-Khuwārizmī (الخوارزمي).'
        }
      },
      {
        id: 'ar-dial-5-5',
        title: 'El proverbio árabe como brújula de vida ética',
        context: 'Un abuelo comparte con su nieto proverbios sobre la paciencia y el valor del tiempo.',
        turns: [
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'يا حفيدي العزيز، احفظ هذه الحكمة: "الصبر مفتاح الفرج".',
            translation: 'Mi querido nieto, graba en tu corazón esta máxima: "La paciencia es la llave de la liberación y el desahogo".',
            phonetic: 'Yā ḥafīdī l-ʿazīz, iḥfaẓ hādhihi l-ḥikmah: “Aṣ-ṣabru miftāḥu l-faraj”.'
          },
          {
            speaker: 'الحفيد (Nieto)',
            text: 'سمعتها منك كثيراً يا جدي، ولكن كيف أطبقها حين تشتد الصعاب؟',
            translation: 'Te la he escuchado con frecuencia, abuelito, pero ¿cómo la aplico en los momentos de mayor dificultad?',
            phonetic: 'Samiʿtuhā minka kathīran yā jaddī, wa-lākin kayfa uṭabbiquhā ḥīna tashtaddu ṣ-ṣiʿāb?'
          },
          {
            speaker: 'الجدّ (Abuelo)',
            text: 'الصبر ليس استسلاماً، بل هو الثبات والعمل والأمل بأن بعد العسر يسراً.',
            translation: 'La paciencia no es resignación pasiva, sino firmeza, constancia y fe en que tras la adversidad llega el alivio.',
            phonetic: 'Aṣ-ṣabru laysa stislāman, bal huwa th-thabātu wa-l-ʿamalu wa-l-amalu bi-anna baʿda l-ʿusri yusrā.'
          },
          {
            speaker: 'الحفيد (Nieto)',
            text: 'كلامك يزرع الطمأنينة في قلبي، بارك الله في حكمتك وعمرك.',
            translation: 'Tus palabras siembran serenidad en mi alma; que Dios bendiga tu sabiduría y colme tus días.',
            phonetic: 'Kalāmuka yazraʿu ṭ-ṭumaʾnīnata fī qalbī, bāraka Llāhu fī ḥikmatika wa-ʿumrik.'
          }
        ],
        grammaticalBreakdown: {
          gloss: 'Yā ḥafīdī al-ʿazīz (mi querido nieto), iḥfaẓ (guarda/memoriza imperativo) hādhihi al-ḥikmah (este proverbio/sabiduría): Aṣ-ṣabr (la paciencia) miftāḥ (llave de) al-faraj (el alivio/la liberación). / Samiʿtuhā mink kathīran yā jaddī, wa-lākin kayfa uṭabbiquhā (cómo la aplico) ḥīna (cuando) tashtadd (se agudizan) aṣ-ṣiʿāb (las dificultades)? / Aṣ-ṣabr laysa istislāman (no es capitulación/rendición), bal huwa ath-thabāt (la perseverancia/firmeza) wa-l-ʿamal (y la acción) wa-l-amal (y la esperanza) bi-anna (en que) baʿda al-ʿusr yusrā (tras el apuro viene la holgura). / Kalāmuk yazraʿ (tu palabra siembra) aṭ-ṭumaʾnīnah (la paz sosegada) fī qalbī, bāraka Llāh fī ḥikmatik wa-ʿumrik.',
          syntaxPattern: 'Alusión textual al versículo coránico: إِنَّ مَعَ العُسْرِ يُسْراً (inna maʿa l-ʿusri yusrā). Metáfora nominal: الصبر مفتاح الفرج.',
          culturalNotes: 'El proverbio "الصبر مفتاح الفرج" es una de las divisas existenciales más repetidas en momentos de prueba en el Levante y el Magreb.'
        }
      }
    ]
  }
];
