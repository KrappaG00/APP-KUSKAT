import { LanguageVocabulary } from './types';

export interface ArabicVocabItem extends LanguageVocabulary {
  id: string;
  root: string;
  arabic: string;
  transliteration: string;
  spanish: string;
  category: string;
  frequencyBand: 'top500' | 'top1000' | 'top2000' | 'top5000' | 'advanced';
  word: string;
  translation: string;
  phonetic?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export const ARABIC_VOCABULARY_CORPUS: ArabicVocabItem[] = [
  {
    id: 'ar_v_001', root: 'K-T-B', arabic: 'كِتَاب', word: 'كِتَاب', transliteration: 'Kitab',
    spanish: 'Libro / texto educativo', translation: 'Libro / texto educativo', phonetic: '/kiˈtaːb/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Hadhā al-kitāb mufīd jiddan li-l-muta‘allimīn.',
    exampleTranslation: 'Este libro es muy provechoso para los estudiantes.'
  },
  {
    id: 'ar_v_002', root: 'B-Y-T', arabic: 'بَيْت', word: 'بَيْت', transliteration: 'Bayt',
    spanish: 'Casa / hogar / morada familiar', translation: 'Casa / hogar / morada familiar', phonetic: '/bajt/',
    category: 'Hogar', frequencyBand: 'top500',
    exampleSentence: 'Al-bayt maftūh li-kull al-aṣdiqā’.',
    exampleTranslation: 'La casa está abierta para todos los amigos.'
  },
  {
    id: 'ar_v_003', root: 'S-L-M', arabic: 'سَلَام', word: 'سَلَام', transliteration: 'Salam',
    spanish: 'Paz / saludo tradicional de bienvenida', translation: 'Paz / saludo tradicional de bienvenida', phonetic: '/saˈlaːm/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'As-salāmu ‘alaykum wa-raḥmatu Llāh.',
    exampleTranslation: 'La paz sea con vosotros y la misericordia divina.'
  },
  {
    id: 'ar_v_004', root: 'Q-H-W', arabic: 'قَهْوَة', word: 'قَهْوَة', transliteration: 'Qahwa',
    spanish: 'Café (origen etimológico del grano y bebida)', translation: 'Café (origen etimológico del grano y bebida)', phonetic: '/ˈqah.wa/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Nashrab al-qahwa al-ma‘rūfa ma‘a al-hāl.',
    exampleTranslation: 'Tomamos el tradicional café aromatizado con cardamomo.'
  },
  {
    id: 'ar_v_005', root: 'M-D-N', arabic: 'مَدِينَة', word: 'مَدِينَة', transliteration: 'Madina',
    spanish: 'Ciudad / urbe civilizada', translation: 'Ciudad / urbe civilizada', phonetic: '/maˈdiː.na/',
    category: 'Geografía', frequencyBand: 'top500',
    exampleSentence: 'Madīnat San Salvador taḥtaḍin al-jamī‘.',
    exampleTranslation: 'La ciudad de San Salvador acoge a todas las familias con calidez.'
  },
  {
    id: 'ar_v_006', root: "'A-M-L", arabic: 'عَمَل', word: 'عَمَل', transliteration: "'Amal",
    spanish: 'Trabajo / labor productiva / oficio', translation: 'Trabajo / labor productiva / oficio', phonetic: '/ˈʕa.mal/',
    category: 'Profesión', frequencyBand: 'top500',
    exampleSentence: 'Al-‘amal aṣ-ṣādiq yajlib an-najāḥ.',
    exampleTranslation: 'El trabajo honesto y perseverante cosecha frutos duraderos.'
  },
  {
    id: 'ar_v_007', root: 'W-L-D', arabic: 'وَلَد', word: 'وَلَد', transliteration: 'Walad',
    spanish: 'Hijo / niño / muchacho', translation: 'Hijo / niño / muchacho', phonetic: '/ˈwa.lad/',
    category: 'Familia', frequencyBand: 'top500',
    exampleSentence: 'Al-walad yata‘allam al-lugha bi-shaghaf.',
    exampleTranslation: 'El niño aprende el idioma con dedicación y alegría.'
  },
  {
    id: 'ar_v_008', root: 'B-N-T', arabic: 'بِنْت', word: 'بِنْت', transliteration: 'Bint',
    spanish: 'Hija / niña / jovencita', translation: 'Hija / niña / jovencita', phonetic: '/bint/',
    category: 'Familia', frequencyBand: 'top500',
    exampleSentence: 'Al-bint taqra’ al-qiṣṣa bi-ṣawt jamīl.',
    exampleTranslation: 'La niña lee la historia con una voz melodiosa.'
  },
  {
    id: 'ar_v_009', root: 'Z-Y-T', arabic: 'زَيْت', word: 'زَيْت', transliteration: 'Zayt',
    spanish: 'Aceite de oliva (préstamo hispano)', translation: 'Aceite de oliva (préstamo hispano)', phonetic: '/zajt/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Zayt az-zaytūn aṣīl fī al-maṭbakh.',
    exampleTranslation: 'El aceite de oliva virgen es pilar de la gastronomía mediterránea.'
  },
  {
    id: 'ar_v_010', root: 'S-K-R', arabic: 'سُكَّر', word: 'سُكَّر', transliteration: 'Sukkar',
    spanish: 'Azúcar (préstamo árabe en castellano)', translation: 'Azúcar (préstamo árabe en castellano)', phonetic: '/sukˈkaːr/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Nuḍīf qalīlan min as-sukkar ilā ash-shāy.',
    exampleTranslation: 'Añadimos una pizca de azúcar al té recién servido.'
  },
  {
    id: 'ar_v_011', root: "'A-Q-D", arabic: 'عَقْد', word: 'عَقْد', transliteration: "'Aqd",
    spanish: 'Contrato legal / pacto formal', translation: 'Contrato legal / pacto formal', phonetic: '/ʕaqd/',
    category: 'Derecho', frequencyBand: 'top1000',
    exampleSentence: 'Waqa‘a at-tujjar ‘alā al-‘aqd al-jadīd.',
    exampleTranslation: 'Los comerciantes firmaron el nuevo contrato de cooperación.'
  },
  {
    id: 'ar_v_012', root: 'S-F-R', arabic: 'سَفَارَة', word: 'سَفَارَة', transliteration: 'Safara',
    spanish: 'Embajada / delegación diplomática', translation: 'Embajada / delegación diplomática', phonetic: '/saˈfaː.ra/',
    category: 'Diplomacia', frequencyBand: 'top1000',
    exampleSentence: 'As-safāra tuqaddim khadamāt li-l-muwāṭinīn.',
    exampleTranslation: 'La embajada brinda asistencia a los ciudadanos en el exterior.'
  },
  {
    id: 'ar_v_013', root: 'I-Q-T', arabic: 'اِقْتِصَاد', word: 'اِقْتِصَاد', transliteration: 'Iqtisad',
    spanish: 'Economía / comercio y finanzas', translation: 'Economía / comercio y finanzas', phonetic: '/iq.tiˈsˤaːd/',
    category: 'Economía', frequencyBand: 'top1000',
    exampleSentence: 'Al-iqtiṣād al-qawiyy ya‘tamid ‘alā al-intāj.',
    exampleTranslation: 'Una economía sólida se sustenta en la producción y el comercio justo.'
  },
  {
    id: 'ar_v_014', root: 'T-R-J', arabic: 'تَرْجَمَة', word: 'تَرْجَمَة', transliteration: 'Tarjama',
    spanish: 'Traducción / interpretación lingüística', translation: 'Traducción / interpretación lingüística', phonetic: '/tarˈdʒa.ma/',
    category: 'Lenguaje', frequencyBand: 'top1000',
    exampleSentence: 'At-tarjama tajsir al-tawāṣul bayna ash-shu‘ūb.',
    exampleTranslation: 'La traducción construye puentes de entendimiento mutuo entre los pueblos.'
  },
  {
    id: 'ar_v_015', root: 'F-L-S', arabic: 'فِلَسْطِين', word: 'فِلَسْطِين', transliteration: 'Filastin',
    spanish: 'Palestina (cuna de la diáspora cuscatleca)', translation: 'Palestina (cuna de la diáspora cuscatleca)', phonetic: '/fi.lasˈtˤiːn/',
    category: 'Historia', frequencyBand: 'top500',
    exampleSentence: 'Filasṭīn ḥāḍiratun fī qulūb al-jalya al-majarra.',
    exampleTranslation: 'Palestina está presente en la memoria viva de la diáspora en El Salvador.'
  },
  {
    id: 'ar_v_016', root: 'B-Y-T', arabic: 'بَيْت لَحْم', word: 'بَيْت لَحْم', transliteration: 'Bayt Lahm',
    spanish: 'Belén (ciudad hermana de familias en El Salvador)', translation: 'Belén (ciudad hermana de familias en El Salvador)', phonetic: '/bajt laħm/',
    category: 'Geografía', frequencyBand: 'top500',
    exampleSentence: 'Kull ‘ā’ila fī San Salvador ta‘rif Bayt Laḥm.',
    exampleTranslation: 'Numerosas familias en El Salvador conservan raíces y parentesco con Belén.'
  },
  {
    id: 'ar_v_017', root: 'C-U-S', arabic: 'كُوسْكَاتْلَان', word: 'كُوسْكَاتْلَان', transliteration: 'Kuskatlan',
    spanish: 'Cuscatlán (Tierra de preseas y collares preciosos)', translation: 'Cuscatlán (Tierra de preseas y collares preciosos)', phonetic: '/kus.katˈlaːn/',
    category: 'Cultura', frequencyBand: 'top500',
    exampleSentence: 'Kūskātlān arḍ al-karam wa-al-maḥabba.',
    exampleTranslation: 'Cuscatlán es tierra generosa que brindó abrigo y porvenir a la inmigración.'
  },
  {
    id: 'ar_v_018', root: 'H-B-B', arabic: 'حَبِيب', word: 'حَبِيب', transliteration: 'Habib',
    spanish: 'Amigo querido / hermano apreciado', translation: 'Amigo querido / hermano apreciado', phonetic: '/ħaˈbiːb/',
    category: 'Afecto', frequencyBand: 'top500',
    exampleSentence: 'Ahlan wa-sahlan yā ḥabībī.',
    exampleTranslation: 'Bienvenido seas a nuestro hogar, querido hermano.'
  },
  {
    id: 'ar_v_019', root: 'Sh-K-R', arabic: 'شُكْرًا', word: 'شُكْرًا', transliteration: 'Shukran',
    spanish: 'Gracias / sincero agradecimiento', translation: 'Gracias / sincero agradecimiento', phonetic: '/ˈʃuk.ran/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Shukran jazīlan ‘alā ḥusn aḍ-ḍiyāfa.',
    exampleTranslation: 'Muchas gracias por su cálida y esmerada hospitalidad.'
  },
  {
    id: 'ar_v_020', root: "'A-F-W", arabic: 'عَفْوًا', word: 'عَفْوًا', transliteration: "'Afwan",
    spanish: 'De nada / disculpe / con gusto', translation: 'De nada / disculpe / con gusto', phonetic: '/ˈʕaf.wan/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: '‘Afwan, lā shukra ‘alā wājib.',
    exampleTranslation: 'De nada, no hay por qué agradecer el cumplimiento del deber fraterno.'
  },
  {
    id: 'ar_v_021', root: 'U-S-R', arabic: 'أُسْرَة', word: 'أُسْرَة', transliteration: 'Usra',
    spanish: 'Familia nuclear / núcleo del hogar', translation: 'Familia nuclear / núcleo del hogar', phonetic: '/ˈus.ra/',
    category: 'Familia', frequencyBand: 'top500',
    exampleSentence: 'Al-usra tajtami‘ ‘alā mā’idat al-ghadā’.',
    exampleTranslation: 'La familia se reúne alrededor de la mesa para compartir el almuerzo.'
  },
  {
    id: 'ar_v_022', root: "'A-Y-L", arabic: 'عَائِلَة', word: 'عَائِلَة', transliteration: "'A'ila",
    spanish: 'Familia extendida / linaje emparentado', translation: 'Familia extendida / linaje emparentado', phonetic: '/ˈʕaː.ʔi.la/',
    category: 'Familia', frequencyBand: 'top500',
    exampleSentence: 'Al-‘ā’ila al-Filasṭīniyya fī El Salvador mutamāsika.',
    exampleTranslation: 'La comunidad familiar palestina en El Salvador mantiene estrechos lazos.'
  },
  {
    id: 'ar_v_023', root: 'M-T-‘', arabic: 'مَطْعَم', word: 'مَطْعَم', transliteration: 'Mat‘am',
    spanish: 'Restaurante / comedor tradicional', translation: 'Restaurante / comedor tradicional', phonetic: '/ˈmatˤ.ʕam/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Fī hādhā al-maṭ‘am yuqaddimūn aṭ-ṭa‘ām ash-sharqī.',
    exampleTranslation: 'En este restaurante sirven platillos levantinos tradicionales.'
  },
  {
    id: 'ar_v_024', root: 'K-B-B', arabic: 'كُبَّة', word: 'كُبَّة', transliteration: 'Kubba / Kibbeh',
    spanish: 'Kibbeh (albóndiga de trigo bulgur y carne)', translation: 'Kibbeh (albóndiga de trigo bulgur y carne)', phonetic: '/ˈkub.ba/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-kubba ta‘ām maḥbūb jiddan fī San Salvador.',
    exampleTranslation: 'El kibbeh es un platillo muy apreciado en la gastronomía salvadoreña.'
  },
  {
    id: 'ar_v_025', root: 'H-M-S', arabic: 'حُمُّص', word: 'حُمُّص', transliteration: 'Hummus',
    spanish: 'Hummus (crema de garbanzo y ajonjolí tahini)', translation: 'Hummus (crema de garbanzo y ajonjolí tahini)', phonetic: '/ˈħum.musˤ/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-ḥummuṣ yuqaddam ma‘a khubz at-tannūr.',
    exampleTranslation: 'El hummus se degusta tradicionalmente con pan de pita recién horneado.'
  },
  {
    id: 'ar_v_026', root: 'Kh-B-Z', arabic: 'خُبْز', word: 'خُبْز', transliteration: 'Khubz',
    spanish: 'Pan / pan pita árabe', translation: 'Pan / pan pita árabe', phonetic: '/xubz/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-khubz aṭ-ṭāzij yafūḥ bi-rā’iḥa zākiya.',
    exampleTranslation: 'El pan recién horneado desprende un aroma delicioso.'
  },
  {
    id: 'ar_v_027', root: 'S-W-Q', arabic: 'سُوق', word: 'سُوق', transliteration: 'Suq',
    spanish: 'Zoco / mercado tradicional / comercio al aire libre', translation: 'Zoco / mercado tradicional / comercio al aire libre', phonetic: '/suːq/',
    category: 'Comercio', frequencyBand: 'top500',
    exampleSentence: 'Zurnā as-sūq at-tājiriyya fī wasaṭ al-madīna.',
    exampleTranslation: 'Visitamos el concurrido mercado comercial en el centro de la ciudad.'
  },
  {
    id: 'ar_v_028', root: 'T-J-R', arabic: 'تَاجِر', word: 'تَاجِر', transliteration: 'Tajir',
    spanish: 'Comerciante / negociante emprendedor', translation: 'Comerciante / negociante emprendedor', phonetic: '/ˈtaː.dʒir/',
    category: 'Comercio', frequencyBand: 'top500',
    exampleSentence: 'At-tājir al-amīn yaḥẓā bi-thiqat az-zubunā’.',
    exampleTranslation: 'El comerciante honesto se gana la confianza de sus clientes.'
  },
  {
    id: 'ar_v_029', root: 'S-‘-R', arabic: 'سِعْر', word: 'سِعْر', transliteration: 'Si‘r',
    spanish: 'Precio / valor monetario de un bien', translation: 'Precio / valor monetario de un bien', phonetic: '/siʕr/',
    category: 'Comercio', frequencyBand: 'top500',
    exampleSentence: 'Hādhā as-si‘r munāsib li-l-jamī‘.',
    exampleTranslation: 'Este precio es justo y accesible para todos los compradores.'
  },
  {
    id: 'ar_v_030', root: 'Sh-R-Y', arabic: 'شِرَاء', word: 'شِرَاء', transliteration: 'Shira’',
    spanish: 'Compra / adquisición de mercancías', translation: 'Compra / adquisición de mercancías', phonetic: '/ʃiˈraːʔ/',
    category: 'Comercio', frequencyBand: 'top500',
    exampleSentence: 'Tammat ‘amaliyyat ash-shirā’ bi-kull suhūla.',
    exampleTranslation: 'La operación de compra se completó con total agilidad.'
  },
  {
    id: 'ar_v_031', root: 'B-Y-‘', arabic: 'بَيْع', word: 'بَيْع', transliteration: 'Bay‘',
    spanish: 'Venta / oferta comercial', translation: 'Venta / oferta comercial', phonetic: '/bajʕ/',
    category: 'Comercio', frequencyBand: 'top500',
    exampleSentence: 'Harakat al-bay‘ wa-ash-shirā’ nashīṭa al-yawm.',
    exampleTranslation: 'El flujo de compra y venta estuvo muy activo el día de hoy.'
  },
  {
    id: 'ar_v_032', root: 'M-‘-L-M', arabic: 'مُعَلِّم', word: 'مُعَلِّم', transliteration: 'Mu‘allim',
    spanish: 'Profesor / maestro / educador paciente', translation: 'Profesor / maestro / educador paciente', phonetic: '/muˈʕal.lim/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Al-mu‘allim yashraḥ dars an-naḥw bi-wuḍūḥ.',
    exampleTranslation: 'El profesor explica la lección de gramática árabe con suma claridad.'
  },
  {
    id: 'ar_v_033', root: 'T-L-M', arabic: 'تِلْمِيذ', word: 'تِلْمِيذ', transliteration: 'Tilmīdh',
    spanish: 'Alumno / estudiante aprendiz', translation: 'Alumno / estudiante aprendiz', phonetic: '/tilˈmiːð/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'At-tilmīdh yaktub al-wājib fī dāftarihi.',
    exampleTranslation: 'El alumno redacta sus ejercicios de clase en el cuaderno.'
  },
  {
    id: 'ar_v_034', root: 'M-D-R', arabic: 'مَدْرَسَة', word: 'مَدْرَسَة', transliteration: 'Madrasa',
    spanish: 'Escuela / centro de formación académica', translation: 'Escuela / centro de formación académica', phonetic: '/madˈra.sa/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Al-madrasa bayt at-ta‘allum wa-at-tarbiya.',
    exampleTranslation: 'La escuela es el hogar del conocimiento y la formación cívica.'
  },
  {
    id: 'ar_v_035', root: 'J-M-‘', arabic: 'جَامِعَة', word: 'جَامِعَة', transliteration: 'Jami‘a',
    spanish: 'Universidad / casa de estudios superiores', translation: 'Universidad / casa de estudios superiores', phonetic: '/ˈdʒaː.mi.ʕa/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Yadrus aṭ-ṭālib al-handasa fī al-jāmi‘a.',
    exampleTranslation: 'El joven estudia ingeniería en la universidad nacional.'
  },
  {
    id: 'ar_v_036', root: 'L-Gh-H', arabic: 'لُغَة', word: 'لُغَة', transliteration: 'Lugha',
    spanish: 'Lengua / idioma / medio de expresión humana', translation: 'Lengua / idioma / medio de expresión humana', phonetic: '/ˈlu.ɣa/',
    category: 'Lenguaje', frequencyBand: 'top500',
    exampleSentence: 'Al-lugha al-‘Arabiyya lughat aḍ-Ḍād al-ghamīra.',
    exampleTranslation: 'La lengua árabe es conocida universalmente como la lengua del Dhad.'
  },
  {
    id: 'ar_v_037', root: 'K-L-M', arabic: 'كَلِمَة', word: 'كَلِمَة', transliteration: 'Kalima',
    spanish: 'Palabra / vocablo con significado propio', translation: 'Palabra / vocablo con significado propio', phonetic: '/kaˈli.ma/',
    category: 'Lenguaje', frequencyBand: 'top500',
    exampleSentence: 'Al-kalima aṭ-ṭayyiba ṣadaqa.',
    exampleTranslation: 'Una palabra bondadosa y noble tiene el valor de una caridad.'
  },
  {
    id: 'ar_v_038', root: 'J-M-L', arabic: 'جُمْلَة', word: 'جُمْلَة', transliteration: 'Jumla',
    spanish: 'Oración gramatical / frase estructurada', translation: 'Oración gramatical / frase estructurada', phonetic: '/ˈdʒum.la/',
    category: 'Lenguaje', frequencyBand: 'top500',
    exampleSentence: 'Hādhihi jumla mufīda fī an-naḥw.',
    exampleTranslation: 'Esta es una oración completa con sentido gramatical pleno.'
  },
  {
    id: 'ar_v_039', root: 'Q-L-M', arabic: 'قَلَم', word: 'قَلَم', transliteration: 'Qalam',
    spanish: 'Pluma / cálamo / instrumento de caligrafía', translation: 'Pluma / cálamo / instrumento de caligrafía', phonetic: '/ˈqa.lam/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Al-qalam silāḥ al-‘ilm wa-al-ma‘rifa.',
    exampleTranslation: 'La pluma es el instrumento por excelencia del saber y la ciencia.'
  },
  {
    id: 'ar_v_040', root: 'W-R-Q', arabic: 'وَرَقَة', word: 'وَرَقَة', transliteration: 'Waraqa',
    spanish: 'Hoja de papel / documento escrito', translation: 'Hoja de papel / documento escrito', phonetic: '/waˈra.qa/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Kutibat ar-risāla ‘alā waraqa bayḍā’.',
    exampleTranslation: 'La carta fue escrita con esmero sobre una hoja blanca.'
  },
  {
    id: 'ar_v_041', root: 'Ṣ-D-Q', arabic: 'صَدِيق', word: 'صَدِيق', transliteration: 'Sadiq',
    spanish: 'Amigo leal / compañero entrañable', translation: 'Amigo leal / compañero entrañable', phonetic: '/sˤaˈdiːq/',
    category: 'Relaciones', frequencyBand: 'top500',
    exampleSentence: 'Aṣ-ṣadīq waqt aḍ-ḍīq.',
    exampleTranslation: 'El verdadero amigo se conoce en los momentos de mayor dificultad.'
  },
  {
    id: 'ar_v_042', root: 'R-F-Q', arabic: 'رَفِيق', word: 'رَفِيق', transliteration: 'Rafiq',
    spanish: 'Camarada / compañero de viaje y vida', translation: 'Camarada / compañero de viaje y vida', phonetic: '/raˈfiːq/',
    category: 'Relaciones', frequencyBand: 'top500',
    exampleSentence: 'Ar-rafīq qabla aṭ-ṭarīq.',
    exampleTranslation: 'El proverbio enseña a elegir al buen compañero antes de emprender el viaje.'
  },
  {
    id: 'ar_v_043', root: 'J-A-R', arabic: 'جَار', word: 'جَار', transliteration: 'Jar',
    spanish: 'Vecino / habitante de la misma calle o barrio', translation: 'Vecino / habitante de la misma calle o barrio', phonetic: '/dʒaːr/',
    category: 'Sociedad', frequencyBand: 'top500',
    exampleSentence: 'Al-jār qabla ad-dār fī at-turāth.',
    exampleTranslation: 'En la tradición árabe, el buen vecino se procura antes de la casa.'
  },
  {
    id: 'ar_v_044', root: 'M-S-J-D', arabic: 'مَسْجِد', word: 'مَسْجِد', transliteration: 'Masjid',
    spanish: 'Mezquita / lugar de recogimiento espiritual', translation: 'Mezquita / lugar de recogimiento espiritual', phonetic: '/ˈmas.dʒid/',
    category: 'Cultura', frequencyBand: 'top500',
    exampleSentence: 'Al-masjid yajma‘ an-nās li-ṣ-ṣalāt.',
    exampleTranslation: 'La mezquita reúne a los fieles para la oración comunitaria.'
  },
  {
    id: 'ar_v_045', root: 'K-N-S', arabic: 'كَنِيسَة', word: 'كَنِيسَة', transliteration: 'Kanisa',
    spanish: 'Iglesia / templo sagrado cristiano', translation: 'Iglesia / templo sagrado cristiano', phonetic: '/kaˈniː.sa/',
    category: 'Cultura', frequencyBand: 'top500',
    exampleSentence: 'Kanīsat al-Mahd fī Bayt Laḥm ma‘lama tārīkhiyya.',
    exampleTranslation: 'La Basílica de la Natividad en Belén es un baluarte histórico universal.'
  },
  {
    id: 'ar_v_046', root: 'Q-D-S', arabic: 'القُدْس', word: 'القُدْس', transliteration: 'Al-Quds',
    spanish: 'Jerusalén (La Santa / Ciudad Santa)', translation: 'Jerusalén (La Santa / Ciudad Santa)', phonetic: '/alˈquds/',
    category: 'Historia', frequencyBand: 'top500',
    exampleSentence: 'Al-Quds ‘āṣimat ar-rūḥ wa-al-multaqā.',
    exampleTranslation: 'Jerusalén es la capital espiritual y punto de encuentro de las civilizaciones.'
  },
  {
    id: 'ar_v_047', root: 'Sh-M-S', arabic: 'شَمْس', word: 'شَمْس', transliteration: 'Shams',
    spanish: 'Sol / astro rey (letra solar gramatical)', translation: 'Sol / astro rey (letra solar gramatical)', phonetic: '/ʃams/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'Ash-shams tushriq fī aṣ-ṣabāḥ al-bākīr.',
    exampleTranslation: 'El sol brilla resplandeciente en el amanecer despejado.'
  },
  {
    id: 'ar_v_048', root: 'Q-M-R', arabic: 'قَمَر', word: 'قَمَر', transliteration: 'Qamar',
    spanish: 'Luna / satélite plateado (letra lunar gramatical)', translation: 'Luna / satélite plateado (letra lunar gramatical)', phonetic: '/ˈqa.mar/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'Al-qamar yuḍī’u samā’ al-layl al-hādi’a.',
    exampleTranslation: 'La luna ilumina con serenidad el cielo nocturno.'
  },
  {
    id: 'ar_v_049', root: 'S-M-A', arabic: 'سَمَاء', word: 'سَمَاء', transliteration: 'Sama’',
    spanish: 'Cielo / firmamento cósmico', translation: 'Cielo / firmamento cósmico', phonetic: '/saˈmaːʔ/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'As-samā’ ṣāfiya fī yawm al-iḥtifāl.',
    exampleTranslation: 'El cielo se muestra límpido durante el día de fiesta nacional.'
  },
  {
    id: 'ar_v_050', root: 'A-R-Ḍ', arabic: 'أَرْض', word: 'أَرْض', transliteration: 'Ard',
    spanish: 'Tierra / patria / suelo que habitamos', translation: 'Tierra / patria / suelo que habitamos', phonetic: '/ʔardˤ/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'Arḍ El Salvador khuḍrā’ jādha.',
    exampleTranslation: 'La tierra salvadoreña deslumbra con su vegetación y volcanes.'
  },
  {
    id: 'ar_v_051', root: 'B-H-R', arabic: 'بَحْر', word: 'بَحْر', transliteration: 'Bahr',
    spanish: 'Mar / océano extenso', translation: 'Mar / océano extenso', phonetic: '/baħr/',
    category: 'Geografía', frequencyBand: 'top500',
    exampleSentence: 'Al-baḥr al-Muhīt al-Hādī yataṭallal ‘alā El Salvador.',
    exampleTranslation: 'El Océano Pacífico bordea la costa sur de El Salvador con hermosas playas.'
  },
  {
    id: 'ar_v_052', root: 'N-H-R', arabic: 'نَهْر', word: 'نَهْر', transliteration: 'Nahr',
    spanish: 'Río / corriente caudalosa fluvial', translation: 'Río / corriente caudalosa fluvial', phonetic: '/nahr/',
    category: 'Geografía', frequencyBand: 'top500',
    exampleSentence: 'Nahr Lempa aṭwal anhār al-bilād.',
    exampleTranslation: 'El río Lempa es el cauce fluvial más extenso y vital del país.'
  },
  {
    id: 'ar_v_053', root: 'J-B-L', arabic: 'جَبَل', word: 'جَبَل', transliteration: 'Jabal',
    spanish: 'Montaña / cerro / volcán imponente', translation: 'Montaña / cerro / volcán imponente', phonetic: '/ˈdʒa.bal/',
    category: 'Geografía', frequencyBand: 'top500',
    exampleSentence: 'Jabal San Salvador ya‘lū fawq al-‘āṣima.',
    exampleTranslation: 'El volcán de San Salvador domina con majestuosidad el valle capitalino.'
  },
  {
    id: 'ar_v_054', root: 'Sh-J-R', arabic: 'شَجَرَة', word: 'شَجَرَة', transliteration: 'Shajara',
    spanish: 'Árbol / planta de tronco leñoso', translation: 'Árbol / planta de tronco leñoso', phonetic: '/ʃaˈdʒa.ra/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'Shajarat al-Maquilishuat ramz waṭanī.',
    exampleTranslation: 'El árbol de Maquilíshuat florece con orgullo como árbol nacional.'
  },
  {
    id: 'ar_v_055', root: 'Z-H-R', arabic: 'زَهْرَة', word: 'زَهْرَة', transliteration: 'Zahra',
    spanish: 'Flor / floración perfumada', translation: 'Flor / floración perfumada', phonetic: '/ˈzah.ra/',
    category: 'Naturaleza', frequencyBand: 'top500',
    exampleSentence: 'Zahrat al-Izote al-waṭaniyya taṣlaḥ li-l-ma’kal.',
    exampleTranslation: 'La flor de Izote es la flor nacional y se saborea en guisos típicos.'
  },
  {
    id: 'ar_v_056', root: 'M-A-A', arabic: 'مَاء', word: 'مَاء', transliteration: 'Ma’',
    spanish: 'Agua potable / líquido indispensable', translation: 'Agua potable / líquido indispensable', phonetic: '/maːʔ/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-mā’ ‘unṣur al-ḥayāt al-asāsī.',
    exampleTranslation: 'El agua pura es el recurso más indispensable para la existencia.'
  },
  {
    id: 'ar_v_057', root: 'L-B-N', arabic: 'لَبَن', word: 'لَبَن', transliteration: 'Laban',
    spanish: 'Leche fresca / yogur árabe labneh', translation: 'Leche fresca / yogur árabe labneh', phonetic: '/ˈla.ban/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-labneh ma‘a zayt az-zaytūn ghaniyy bi-l-fā’ida.',
    exampleTranslation: 'El labneh aderezado con aceite de oliva es un desayuno nutritivo.'
  },
  {
    id: 'ar_v_058', root: 'L-H-M', arabic: 'لَحْم', word: 'لَحْم', transliteration: 'Lahm',
    spanish: 'Carne / alimento proteico', translation: 'Carne / alimento proteico', phonetic: '/laħm/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Yuṭbakh al-laḥm ma‘a al-aruz wa-al-bahārāt.',
    exampleTranslation: 'La carne se cocina con arroz y especias orientales aromáticas.'
  },
  {
    id: 'ar_v_059', root: 'A-R-Z', arabic: 'أَرُزّ', word: 'أَرُزّ', transliteration: 'Aruzz / Ruzz',
    spanish: 'Arroz (préstamo hispano)', translation: 'Arroz (préstamo hispano)', phonetic: '/aˈruzz/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Al-aruzz ghidhā’ asāsī fī kull bayt.',
    exampleTranslation: 'El arroz es un alimento básico presente en toda mesa salvadoreña.'
  },
  {
    id: 'ar_v_060', root: 'Sh-A-Y', arabic: 'شَاي', word: 'شَاي', transliteration: 'Shay',
    spanish: 'Té caliente / infusión con hierbabuena', translation: 'Té caliente / infusión con hierbabuena', phonetic: '/ʃaːj/',
    category: 'Alimentos', frequencyBand: 'top500',
    exampleSentence: 'Nashrab ash-shāy bi-an-na‘nā‘ ba‘da al-‘ashā’.',
    exampleTranslation: 'Tomamos té caliente aromatizado con hierbabuena después de la cena.'
  },
  {
    id: 'ar_v_061', root: 'K-B-R', arabic: 'كَبِير', word: 'كَبِير', transliteration: 'Kabir',
    spanish: 'Grande / espacioso / importante', translation: 'Grande / espacioso / importante', phonetic: '/kaˈbiːr/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Hādhā al-bayt kabīr wa-shāsi‘.',
    exampleTranslation: 'Esta casa es amplia y muy ventilada.'
  },
  {
    id: 'ar_v_062', root: 'Ṣ-Gh-R', arabic: 'صَغِير', word: 'صَغِير', transliteration: 'Saghir',
    spanish: 'Pequeño / menudo / tierno', translation: 'Pequeño / menudo / tierno', phonetic: '/sˤaˈɣiːr/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Al-‘uṣfūr aṣ-ṣaghīr yughannī ‘alā al-ghuṣn.',
    exampleTranslation: 'El pequeño pajarillo canta con dulzura posado en la rama.'
  },
  {
    id: 'ar_v_063', root: 'J-M-L', arabic: 'جَمِيل', word: 'جَمِيل', transliteration: 'Jamil',
    spanish: 'Hermoso / bello / estético', translation: 'Hermoso / bello / estético', phonetic: '/dʒaˈmiːl/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Al-khaṭṭ al-‘Arabiyy fann jamīl jiddan.',
    exampleTranslation: 'La caligrafía árabe es un arte visualmente bello y refinado.'
  },
  {
    id: 'ar_v_064', root: 'J-D-D', arabic: 'جَدِيد', word: 'جَدِيد', transliteration: 'Jadid',
    spanish: 'Nuevo / reciente / recién llegado', translation: 'Nuevo / reciente / recién llegado', phonetic: '/dʒaˈdiːd/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Ishtarat al-usra sayyāra jadīda.',
    exampleTranslation: 'La familia adquirió un vehículo nuevo para viajar por el país.'
  },
  {
    id: 'ar_v_065', root: 'Q-D-M', arabic: 'قَدِيم', word: 'قَدِيم', transliteration: 'Qadim',
    spanish: 'Antiguo / tradicional / histórico', translation: 'Antiguo / tradicional / histórico', phonetic: '/qaˈdiːm/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Tārīkh hādhihi al-madīna qadīm wa-‘arīq.',
    exampleTranslation: 'La historia de este centro urbano es antigua y milenaria.'
  },
  {
    id: 'ar_v_066', root: 'Q-R-B', arabic: 'قَرِيب', word: 'قَرِيب', transliteration: 'Qarib',
    spanish: 'Cercano / próximo en la distancia', translation: 'Cercano / próximo en la distancia', phonetic: '/qaˈriːb/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Al-maṭār qarīb min as-sāḥil.',
    exampleTranslation: 'El aeropuerto internacional se ubica próximo a la llanura costera.'
  },
  {
    id: 'ar_v_067', root: 'B-‘-D', arabic: 'بَعِيد', word: 'بَعِيد', transliteration: 'Ba‘id',
    spanish: 'Lejano / distante en el trayecto', translation: 'Lejano / distante en el trayecto', phonetic: '/baˈʕiːd/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'As-safār ilā al-Mashriq laysa ba‘īdan bi-aṭ-ṭayyāra.',
    exampleTranslation: 'El viaje al Cercano Oriente se realiza cómodamente por vía aérea.'
  },
  {
    id: 'ar_v_068', root: 'S-H-L', arabic: 'سَهْل', word: 'سَهْل', transliteration: 'Sahl',
    spanish: 'Fácil / sencillo / llanura accesible', translation: 'Fácil / sencillo / llanura accesible', phonetic: '/sahl/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Ta‘allum al-abjadiyya al-‘Arabiyya sahl bi-al-mumārasa.',
    exampleTranslation: 'Aprender el alifato árabe es sencillo mediante la práctica guiada.'
  },
  {
    id: 'ar_v_069', root: 'Ṣ-‘-B', arabic: 'صَعْب', word: 'صَعْب', transliteration: 'Sa‘b',
    spanish: 'Difícil / arduo / exigente', translation: 'Difícil / arduo / exigente', phonetic: '/sˤaʕb/',
    category: 'Cualidad', frequencyBand: 'top500',
    exampleSentence: 'Lā yūjad shay’ ṣa‘b ma‘a al-ijtihād.',
    exampleTranslation: 'No existe desafío imposible cuando se enfrenta con disciplina y tesón.'
  },
  {
    id: 'ar_v_070', root: 'T-A-R-Kh', arabic: 'تَارِيخ', word: 'تَارِيخ', transliteration: 'Tarikh',
    spanish: 'Historia / memoria / cronología documentada', translation: 'Historia / memoria / cronología documentada', phonetic: '/taːˈriːx/',
    category: 'Historia', frequencyBand: 'top500',
    exampleSentence: 'Tārīkh El Salvador ghaniyy bi-al-aḥdāth al-waṭaniyya.',
    exampleTranslation: 'La historia patria salvadoreña es fecunda en hitos de soberanía y civismo.'
  },
  {
    id: 'ar_v_071', root: 'Dh-K-R', arabic: 'ذَاكِرَة', word: 'ذَاكِرَة', transliteration: 'Dhakira',
    spanish: 'Memoria / recuerdo vivo de los antepasados', translation: 'Memoria / recuerdo vivo de los antepasados', phonetic: '/ˈðaː.ki.ra/',
    category: 'Historia', frequencyBand: 'top1000',
    exampleSentence: 'Adh-dhākira al-jamā‘iyya tuḥāfiẓ ‘alā al-huwiyya.',
    exampleTranslation: 'La memoria colectiva preserva la identidad y los valores esenciales.'
  },
  {
    id: 'ar_v_072', root: 'H-W-Y', arabic: 'هُوِيَّة', word: 'هُوِيَّة', transliteration: 'Huwiyya',
    spanish: 'Identidad cultural y ciudadana', translation: 'Identidad cultural y ciudadana', phonetic: '/huˈwij.ja/',
    category: 'Sociedad', frequencyBand: 'top1000',
    exampleSentence: 'Al-huwiyya al-Kūskātliyya tajma‘ bayna aṭ-ṭayfayn.',
    exampleTranslation: 'La identidad cuscatleca se enriquece con la diversidad de sus comunidades.'
  },
  {
    id: 'ar_v_073', root: 'W-T-N', arabic: 'وَطَن', word: 'وَطَن', transliteration: 'Watan',
    spanish: 'Patria / tierra natal amada', translation: 'Patria / tierra natal amada', phonetic: '/ˈwa.tˤan/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Ḥubb al-waṭan min al-īmān.',
    exampleTranslation: 'El amor genuino a la patria se demuestra en el servicio a la comunidad.'
  },
  {
    id: 'ar_v_074', root: 'M-W-T-N', arabic: 'مُوَاطِن', word: 'مُوَاطِن', transliteration: 'Muwatin',
    spanish: 'Ciudadano comprometido con el bien común', translation: 'Ciudadano comprometido con el bien común', phonetic: '/muˈwaː.tˤin/',
    category: 'Sociedad', frequencyBand: 'top1000',
    exampleSentence: 'Al-muwāṭin aṣ-ṣāliḥ yabnī mujtama‘ahu bi-ikhlāṣ.',
    exampleTranslation: 'El ciudadano ejemplar edifica su comunidad con rectitud y civismo.'
  },
  {
    id: 'ar_v_075', root: 'Q-A-N-W-N', arabic: 'قَانُون', word: 'قَانُون', transliteration: 'Qanun',
    spanish: 'Ley / norma jurídica (préstamo universal)', translation: 'Ley / norma jurídica (préstamo universal)', phonetic: '/qaːˈnuːn/',
    category: 'Derecho', frequencyBand: 'top1000',
    exampleSentence: 'Iḥtirām al-qānūn asās al-‘adl fī ad-dawla.',
    exampleTranslation: 'El respeto irrestricto a la ley es el pilar de la justicia republicana.'
  },
  {
    id: 'ar_v_076', root: "'A-D-L", arabic: 'عَدْل', word: 'عَدْل', transliteration: "'Adl",
    spanish: 'Justicia / rectitud moral equitativa', translation: 'Justicia / rectitud moral equitativa', phonetic: '/ʕadl/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Al-‘adl asās al-mulk wa-al-istiqrār.',
    exampleTranslation: 'La justicia equitativa es el fundamento perenne del orden pacífico.'
  },
  {
    id: 'ar_v_077', root: 'H-R-R', arabic: 'حُرِّيَّة', word: 'حُرِّيَّة', transliteration: 'Hurriyya',
    spanish: 'Libertad / soberanía ciudadana', translation: 'Libertad / soberanía ciudadana', phonetic: '/hurˈrij.ja/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Al-ḥurriyya maṣḥūba bi-al-mas’ūliyya ad-dā’ima.',
    exampleTranslation: 'La verdadera libertad va de la mano de una responsabilidad cívica constante.'
  },
  {
    id: 'ar_v_078', root: 'D-W-L', arabic: 'دَوْلَة', word: 'دَوْلَة', transliteration: 'Dawla',
    spanish: 'Estado / nación organizada jurídicamente', translation: 'Estado / nación organizada jurídicamente', phonetic: '/ˈdaw.la/',
    category: 'Diplomacia', frequencyBand: 'top500',
    exampleSentence: 'Dawlat El Salvador taḥẓā bi-makāna ma‘rūfa.',
    exampleTranslation: 'El Estado de El Salvador goza de soberanía y reconocimiento internacional.'
  },
  {
    id: 'ar_v_079', root: 'R-A-S', arabic: 'رَئِيس', word: 'رَئِيس', transliteration: 'Ra’is',
    spanish: 'Presidente / mandatario de la nación', translation: 'Presidente / mandatario de la nación', phonetic: '/raˈʔiːs/',
    category: 'Diplomacia', frequencyBand: 'top500',
    exampleSentence: 'Ra’īs al-jumhūriyya yataḥaddath ilā ash-sha‘b.',
    exampleTranslation: 'El presidente de la república se dirige a la nación con serenidad.'
  },
  {
    id: 'ar_v_080', root: 'Sh-‘-B', arabic: 'شَعْب', word: 'شَعْب', transliteration: 'Sha‘b',
    spanish: 'Pueblo / ciudadanía unida', translation: 'Pueblo / ciudadanía unida', phonetic: '/ʃaʕb/',
    category: 'Sociedad', frequencyBand: 'top500',
    exampleSentence: 'Ash-sha‘b al-Kūskātlī ma‘rūf bi-al-‘amal wa-al-karam.',
    exampleTranslation: 'El pueblo cuscatleco es admirado por su laboriosidad y calidez fraterna.'
  },
  {
    id: 'ar_v_081', root: 'W-H-D', arabic: 'وَاحِد', word: 'وَاحِد', transliteration: 'Wahid',
    spanish: 'Uno (1) en árabe', translation: 'Uno (1) en árabe', phonetic: '/ˈwaː.ħid/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: '‘Indanā kitāb wāḥid fī al-maktaba.',
    exampleTranslation: 'Tenemos un ejemplar único en la biblioteca de referencia.'
  },
  {
    id: 'ar_v_082', root: 'Th-N-Y', arabic: 'اِثْنَان', word: 'اِثْنَان', transliteration: 'Ithnan',
    spanish: 'Dos (2) en árabe / dual', translation: 'Dos (2) en árabe / dual', phonetic: '/iθˈnaːn/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Ḥaḍara aṭ-ṭālibān al-ithnān.',
    exampleTranslation: 'Ambos estudiantes asistieron puntuales a la clase de lengua.'
  },
  {
    id: 'ar_v_083', root: 'Th-L-Th', arabic: 'ثَلَاثَة', word: 'ثَلَاثَة', transliteration: 'Thalatha',
    spanish: 'Tres (3) en árabe', translation: 'Tres (3) en árabe', phonetic: '/θaˈlaː.θa/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Thalāthat ayyām min al-iḥtifāl al-bahīj.',
    exampleTranslation: 'Tres jornadas memorables duró el festival cultural en la capital.'
  },
  {
    id: 'ar_v_084', root: 'A-R-B-‘', arabic: 'أَرْبَعَة', word: 'أَرْبَعَة', transliteration: 'Arba‘a',
    spanish: 'Cuatro (4) en árabe', translation: 'Cuatro (4) en árabe', phonetic: '/ʔar.baˈʕa/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Arba‘at fuṣūl li-s-sana at-ṭabī‘iyya.',
    exampleTranslation: 'Las cuatro estaciones rigen el ciclo de la naturaleza.'
  },
  {
    id: 'ar_v_085', root: 'Kh-M-S', arabic: 'خَمْسَة', word: 'خَمْسَة', transliteration: 'Khamsa',
    spanish: 'Cinco (5) en árabe', translation: 'Cinco (5) en árabe', phonetic: '/ˈxam.sa/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Khamsat aṣdiqā’ zārū al-ma‘raḍ.',
    exampleTranslation: 'Cinco amigos visitaron la exposición de caligrafía árabe.'
  },
  {
    id: 'ar_v_086', root: 'S-T-T', arabic: 'سِتَّة', word: 'سِتَّة', transliteration: 'Sitta',
    spanish: 'Seis (6) en árabe', translation: 'Seis (6) en árabe', phonetic: '/ˈsit.ta/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Sittat ashhur min ad-dirāsa al-mukaththafa.',
    exampleTranslation: 'Seis meses de estudio intensivo rinden un sólido dominio comunicativo.'
  },
  {
    id: 'ar_v_087', root: 'S-B-‘', arabic: 'سَبْعَة', word: 'سَبْعَة', transliteration: 'Sab‘a',
    spanish: 'Siete (7) en árabe', translation: 'Siete (7) en árabe', phonetic: '/sabˈʕa/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Sab‘at ayyām fī al-usbū‘.',
    exampleTranslation: 'Siete días componen la semana laboral y festiva.'
  },
  {
    id: 'ar_v_088', root: 'Th-M-N', arabic: 'ثَمَانِيَة', word: 'ثَمَانِيَة', transliteration: 'Thamaniya',
    spanish: 'Ocho (8) en árabe', translation: 'Ocho (8) en árabe', phonetic: '/θa.maːˈni.ja/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Thamāniyat aṭfāl yala‘abūn fī al-ḥadīqa.',
    exampleTranslation: 'Ocho niños juegan alegres en el parque municipal.'
  },
  {
    id: 'ar_v_089', root: 'T-S-‘', arabic: 'تِسْعَة', word: 'تِسْعَة', transliteration: 'Tis‘a',
    spanish: 'Nueve (9) en árabe', translation: 'Nueve (9) en árabe', phonetic: '/tisˈʕa/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: 'Tis‘at kutub jadīda fī al-falsafa.',
    exampleTranslation: 'Nueve libros nuevos enriquecen el acervo filosófico.'
  },
  {
    id: 'ar_v_090', root: "'A-Sh-R", arabic: 'عَشَرَة', word: 'عَشَرَة', transliteration: "'Ashara",
    spanish: 'Diez (10) en árabe', translation: 'Diez (10) en árabe', phonetic: '/ˈʕa.ʃa.ra/',
    category: 'Números', frequencyBand: 'top500',
    exampleSentence: '‘Asharat dāqā’iq takfī li-l-murāja‘a.',
    exampleTranslation: 'Diez minutos bastan para repasar la lección con atención.'
  },
  {
    id: 'ar_v_091', root: 'Ṣ-B-H', arabic: 'صَبَاح', word: 'صَبَاح', transliteration: 'Sabah',
    spanish: 'Mañana / amanecer luminoso', translation: 'Mañana / amanecer luminoso', phonetic: '/sˤaˈbaːħ/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Ṣabāḥ al-khayr yā aṣdiqā’ī.',
    exampleTranslation: 'Buenos días tengan todos ustedes, queridos amigos.'
  },
  {
    id: 'ar_v_092', root: 'M-S-A', arabic: 'مَسَاء', word: 'مَسَاء', transliteration: 'Masa’',
    spanish: 'Tarde / atardecer sereno', translation: 'Tarde / atardecer sereno', phonetic: '/maˈsaːʔ/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Masā’ al-khayr wa-al-baraka.',
    exampleTranslation: 'Buenas tardes con paz, salud y bendición para todos.'
  },
  {
    id: 'ar_v_093', root: 'L-Y-L', arabic: 'لَيْل', word: 'لَيْل', transliteration: 'Layl',
    spanish: 'Noche / sosiego nocturno', translation: 'Noche / sosiego nocturno', phonetic: '/lajl/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Fī al-layl tahda’ aṣwāt al-madīna.',
    exampleTranslation: 'Durante la noche se apaciguan los ruidos de la gran urbe.'
  },
  {
    id: 'ar_v_094', root: 'Y-W-M', arabic: 'يَوْم', word: 'يَوْم', transliteration: 'Yawm',
    spanish: 'Día / jornada solar', translation: 'Día / jornada solar', phonetic: '/jawm/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Al-yawm yaḥmil bishārāt khayr wa-amal.',
    exampleTranslation: 'El día de hoy trae consigo noticias alentadoras de esperanza.'
  },
  {
    id: 'ar_v_095', root: 'A-S-B-‘', arabic: 'أُسْبُوع', word: 'أُسْبُوع', transliteration: 'Usbu‘',
    spanish: 'Semana / ciclo de siete días', translation: 'Semana / ciclo de siete días', phonetic: '/usˈbuːʕ/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Sanaltaqī nihāyat hādhā al-usbū‘.',
    exampleTranslation: 'Nos reuniremos al finalizar esta semana para conversar.'
  },
  {
    id: 'ar_v_096', root: 'Sh-H-R', arabic: 'شَهْر', word: 'شَهْر', transliteration: 'Shahr',
    spanish: 'Mes / ciclo lunar de treinta días', translation: 'Mes / ciclo lunar de treinta días', phonetic: '/ʃahr/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Fī hādhā ash-shahr taḥillu al-a‘yād.',
    exampleTranslation: 'En este mes celebramos con júbilo las fiestas cívicas.'
  },
  {
    id: 'ar_v_097', root: 'S-N-H', arabic: 'سَنَة', word: 'سَنَة', transliteration: 'Sana',
    spanish: 'Año / ciclo solar de doce meses', translation: 'Año / ciclo solar de doce meses', phonetic: '/ˈsa.na/',
    category: 'Tiempo', frequencyBand: 'top500',
    exampleSentence: 'Kull ‘ām wa-antum bi-khayr fī as-sana al-jadīda.',
    exampleTranslation: '¡Que cada año los colme de prosperidad, paz y dicha familiar!'
  },
  {
    id: 'ar_v_098', root: 'N-‘-M', arabic: 'نَعَم', word: 'نَعَم', transliteration: 'Na‘am',
    spanish: 'Sí / ciertamente / afirmación rotunda', translation: 'Sí / ciertamente / afirmación rotunda', phonetic: '/ˈna.ʕam/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Na‘am, anā ata‘allam al-‘Arabiyya bi-ijtihād.',
    exampleTranslation: 'Sí, estoy estudiando la lengua árabe con verdadero entusiasmo.'
  },
  {
    id: 'ar_v_099', root: 'L-A', arabic: 'لَا', word: 'لَا', transliteration: 'La',
    spanish: 'No / negación clara y respetuosa', translation: 'No / negación clara y respetuosa', phonetic: '/laː/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Lā shakka fī ahmīyat at-ta‘āwun bayna ash-shu‘ūb.',
    exampleTranslation: 'No cabe duda de la importancia cardinal de la cooperación entre pueblos.'
  },
  {
    id: 'ar_v_100', root: 'M-N', arabic: 'مِنْ فَضْلِك', word: 'مِنْ فَضْلِك', transliteration: 'Min fadlik',
    spanish: 'Por favor / si es tan amable', translation: 'Por favor / si es tan amable', phonetic: '/min fadˤ.lik/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Min faḍlik, a‘ṭinī qadaḥan min al-mā’.',
    exampleTranslation: 'Por favor, sírvame un vaso de agua fresca.'
  },
  {
    id: 'ar_v_101', root: 'H-M-D', arabic: 'الحَمْدُ لِلَّه', word: 'الحَمْدُ لِلَّه', transliteration: 'Al-hamdu li-Llah',
    spanish: 'Alabado sea Dios / gracias a Dios (expresión de gratitud)', translation: 'Alabado sea Dios / gracias a Dios (expresión de gratitud)', phonetic: '/al.ħam.du lil.laːh/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Kayfa ḥāluk? Al-ḥamdu li-Llāh, bi-khayr.',
    exampleTranslation: '¿Cómo estás? Muy bien, gracias a Dios.'
  },
  {
    id: 'ar_v_102', root: 'A-H-L', arabic: 'أَهْلًا وَسَهْلًا', word: 'أَهْلًا وَسَهْلًا', transliteration: 'Ahlan wa-sahlan',
    spanish: 'Bienvenido / sea bien acogido entre nosotros', translation: 'Bienvenido / sea bien acogido entre nosotros', phonetic: '/ʔah.lan wa.sah.lan/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Ahlan wa-sahlan bi-kull aḍ-ḍuyūf al-kirām.',
    exampleTranslation: 'Sean ustedes muy bienvenidos a nuestra casa y a nuestro país.'
  },
  {
    id: 'ar_v_103', root: 'M-‘-S-L-M', arabic: 'مَعَ السَّلَامَة', word: 'مَعَ السَّلَامَة', transliteration: 'Ma‘a as-salama',
    spanish: 'Adiós / hasta la próxima / vaya en paz', translation: 'Adiós / hasta la próxima / vaya en paz', phonetic: '/ma.ʕas.saˈlaː.ma/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Ma‘a as-salāma, narākum fī al-furṣa al-qādima.',
    exampleTranslation: 'Hasta luego, nos volveremos a encontrar muy pronto con bien.'
  },
  {
    id: 'ar_v_104', root: 'K-Y-F', arabic: 'كَيْفَ حَالُك', word: 'كَيْفَ حَالُك', transliteration: 'Kayfa haluk?',
    spanish: '¿Cómo estás? / ¿cómo se encuentra usted?', translation: '¿Cómo estás? / ¿cómo se encuentra usted?', phonetic: '/ˈkaj.fa ħaː.luk/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Kayfa ḥāluk yā ṣadīqī al-‘azīz?',
    exampleTranslation: '¿Cómo te encuentras el día de hoy, estimado amigo mío?'
  },
  {
    id: 'ar_v_105', root: 'T-F-Ḍ-L', arabic: 'تَفَضَّل', word: 'تَفَضَّل', transliteration: 'Tafaddal',
    spanish: 'Adelante / pase usted / tome asiento', translation: 'Adelante / pase usted / tome asiento', phonetic: '/taˈfadˤ.dˤal/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Tafaḍḍal bi-ad-dukhūl wa-al-julūs ma‘anā.',
    exampleTranslation: 'Adelante, tenga la bondad de pasar y tomar asiento con nosotros.'
  },
  {
    id: 'ar_v_106', root: 'M-R-H-B', arabic: 'مَرْحَبًا', word: 'مَرْحَبًا', transliteration: 'Marhaban',
    spanish: 'Hola / saludo afectuoso de encuentro', translation: 'Hola / saludo afectuoso de encuentro', phonetic: '/ˈmar.ħa.ban/',
    category: 'Cortesía', frequencyBand: 'top500',
    exampleSentence: 'Marḥaban bi-kumu fī hādhihi al-amsiya.',
    exampleTranslation: 'Hola a todos y sean bienvenidos a esta velada fraternal.'
  },
  {
    id: 'ar_v_107', root: 'Ṣ-B-R', arabic: 'صَبْر', word: 'صَبْر', transliteration: 'Sabr',
    spanish: 'Paciencia / entereza ante la adversidad', translation: 'Paciencia / entereza ante la adversidad', phonetic: '/sˤabr/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Aṣ-ṣabr miftāḥ al-faraj.',
    exampleTranslation: 'La paciencia virtuosa es la llave que abre todas las soluciones.'
  },
  {
    id: 'ar_v_108', root: 'A-M-L', arabic: 'أَمَل', word: 'أَمَل', transliteration: 'Amal',
    spanish: 'Esperanza / optimismo hacia el porvenir', translation: 'Esperanza / optimismo hacia el porvenir', phonetic: '/ˈʔa.mal/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Al-amal yuḍī’u ṭarīq al-mustaqbal.',
    exampleTranslation: 'La esperanza perseverante alumbra el rumbo de nuestro porvenir.'
  },
  {
    id: 'ar_v_109', root: '‘-Q-L', arabic: 'عَقْل', word: 'عَقْل', transliteration: "'Aql",
    spanish: 'Razón / intelecto / buen juicio', translation: 'Razón / intelecto / buen juicio', phonetic: '/ʕaql/',
    category: 'Educación', frequencyBand: 'top500',
    exampleSentence: 'Al-‘aql al-ḥakīm yuzin al-umūr bi-tarawwī.',
    exampleTranslation: 'El juicio prudente sopesa las decisiones con serenidad y tino.'
  },
  {
    id: 'ar_v_110', root: 'Q-L-B', arabic: 'قَلْب', word: 'قَلْب', transliteration: 'Qalb',
    spanish: 'Corazón / sede de los nobles afectos', translation: 'Corazón / sede de los nobles afectos', phonetic: '/qalb/',
    category: 'Cuerpo', frequencyBand: 'top500',
    exampleSentence: 'Al-qalb aṣ-ṣāfī ya‘rif ma‘nā al-maḥabba.',
    exampleTranslation: 'Un corazón noble y puro comprende el valor genuino del afecto.'
  },
  {
    id: 'ar_v_111', root: 'R-W-H', arabic: 'رُوح', word: 'رُوح', transliteration: 'Ruh',
    spanish: 'Espíritu / alma / aliento vital', translation: 'Espíritu / alma / aliento vital', phonetic: '/ruːħ/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Rūḥ at-taḍāmun tajma‘ al-mujtama‘.',
    exampleTranslation: 'El espíritu solidario une a la sociedad salvadoreña en fraternidad.'
  },
  {
    id: 'ar_v_112', root: 'Kh-T-T', arabic: 'خَطّ', word: 'خَطّ', transliteration: 'Khatt',
    spanish: 'Caligrafía árabe / trazo artístico de letras', translation: 'Caligrafía árabe / trazo artístico de letras', phonetic: '/xatˤtˤ/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Al-khaṭṭ ad-Dīwāniyy yatamayyiz bi-al-murūna.',
    exampleTranslation: 'El estilo caligráfico Diwani destaca por su elegancia y fluidez.'
  },
  {
    id: 'ar_v_113', root: 'Sh-‘-R', arabic: 'شِعْر', word: 'شِعْر', transliteration: 'Shi‘r',
    spanish: 'Poesía / versos líricos de la literatura clásica', translation: 'Poesía / versos líricos de la literatura clásica', phonetic: '/ʃiʕr/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Ash-shi‘r al-‘Arabiyy mir’āt al-wijdan.',
    exampleTranslation: 'La poesía árabe clásica es el espejo más elocuente del alma humana.'
  },
  {
    id: 'ar_v_114', root: 'A-D-B', arabic: 'أَدَب', word: 'أَدَب', transliteration: 'Adab',
    spanish: 'Literatura / cortesía y buenas costumbres', translation: 'Literatura / cortesía y buenas costumbres', phonetic: '/ˈʔa.dab/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Al-adab ar-rafī‘ yudhakkirunā bi-al-qiyam al-khālida.',
    exampleTranslation: 'La alta literatura nos recuerda los valores perennes de la humanidad.'
  },
  {
    id: 'ar_v_115', root: 'M-S-Q', arabic: 'مُوسِيقَى', word: 'مُوسِيقَى', transliteration: 'Musiqa',
    spanish: 'Música / acordes del laúd tradicional (ud)', translation: 'Música / acordes del laúd tradicional (ud)', phonetic: '/muːˈsiː.qaː/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Al-mūsīqā ash-sharqiyya tarfa‘ ar-rūḥ.',
    exampleTranslation: 'Los acordes del laúd oriental transportan el espíritu hacia la paz.'
  },
  {
    id: 'ar_v_116', root: "'A-W-D", arabic: 'عُود', word: 'عُود', transliteration: '‘Ud',
    spanish: 'Laúd oriental (origen etimológico del laúd)', translation: 'Laúd oriental (origen etimológico del laúd)', phonetic: '/ʕuːd/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Yā‘zif al-fannān ‘alā al-‘ūd bi-barā‘a.',
    exampleTranslation: 'El músico ejecuta piezas magistrales con maestría en el laúd.'
  },
  {
    id: 'ar_v_117', root: 'F-N-N', arabic: 'فَنّ', word: 'فَنّ', transliteration: 'Fann',
    spanish: 'Arte / expresión estética creadora', translation: 'Arte / expresión estética creadora', phonetic: '/fann/',
    category: 'Cultura', frequencyBand: 'top1000',
    exampleSentence: 'Al-fann yusāhim fī taqārub al-ḥaḍārāt.',
    exampleTranslation: 'El arte auténtico contribuye al acercamiento fraterno de las culturas.'
  },
  {
    id: 'ar_v_118', root: 'H-Ḍ-R', arabic: 'حَضَارَة', word: 'حَضَارَة', transliteration: 'Hadara',
    spanish: 'Civilización / patrimonio acumulado de los pueblos', translation: 'Civilización / patrimonio acumulado de los pueblos', phonetic: '/ħaˈdˤaː.ra/',
    category: 'Historia', frequencyBand: 'top1000',
    exampleSentence: 'Al-ḥaḍāra al-insāniyya thamarāt ta‘āwun al-kull.',
    exampleTranslation: 'La civilización humana es fruto del esfuerzo mancomunado de todas las naciones.'
  },
  {
    id: 'ar_v_119', root: 'B-N-A', arabic: 'بِنَاء', word: 'بِنَاء', transliteration: 'Bina’',
    spanish: 'Construcción / edificación del porvenir', translation: 'Construcción / edificación del porvenir', phonetic: '/biˈnaːʔ/',
    category: 'Profesión', frequencyBand: 'top1000',
    exampleSentence: 'Binā’ al-waṭan yataṭallab ‘amal al-jamī‘.',
    exampleTranslation: 'La construcción del bienestar patrio demanda el concurso de toda la ciudadanía.'
  },
  {
    id: 'ar_v_120', root: 'H-K-M', arabic: 'حِكْمَة', word: 'حِكْمَة', transliteration: 'Hikma',
    spanish: 'Sabiduría / prudencia en la conducta', translation: 'Sabiduría / prudencia en la conducta', phonetic: '/ˈħik.ma/',
    category: 'Valores', frequencyBand: 'top500',
    exampleSentence: 'Al-ḥikma dāllat al-mu’min ayna wajadahā.',
    exampleTranslation: 'La sabiduría es el mayor tesoro que busca el ser humano de buen corazón.'
  },
  {
    id: 'ar_v_121', root: 'Ṣ-H-H', arabic: 'صِحَّة', word: 'صِحَّة', transliteration: 'Sihha',
    spanish: 'Salud / bienestar físico y mental', translation: 'Salud / bienestar físico y mental', phonetic: '/ˈsˤiħ.ħa/',
    category: 'Salud', frequencyBand: 'top500',
    exampleSentence: 'Aṣ-ṣiḥḥa tāj ‘alā ru’ūs al-aṣiḥḥā’.',
    exampleTranslation: 'La buena salud es una corona preciada que debemos cuidar a diario.'
  },
  {
    id: 'ar_v_122', root: 'T-B-B', arabic: 'طَبِيب', word: 'طَبِيب', transliteration: 'Tabib',
    spanish: 'Médico / doctor que atiende la salud', translation: 'Médico / doctor que atiende la salud', phonetic: '/tˤaˈbiːb/',
    category: 'Profesión', frequencyBand: 'top500',
    exampleSentence: 'Aṭ-ṭabīb yuqaddim ar-ri‘āya li-l-marḍā.',
    exampleTranslation: 'El médico consagrado asiste con empatía y ciencia a los enfermos.'
  },
  {
    id: 'ar_v_123', root: 'M-S-T-Sh-F-Y', arabic: 'مُسْتَشْفَى', word: 'مُسْتَشْفَى', transliteration: 'Mustashfa',
    spanish: 'Hospital / centro de salud asistencial', translation: 'Hospital / centro de salud asistencial', phonetic: '/musˈtaʃ.faː/',
    category: 'Salud', frequencyBand: 'top500',
    exampleSentence: 'Al-mustashfā al-waṭanī yusā‘id al-jamī‘.',
    exampleTranslation: 'El hospital público brinda auxilio oportuno a quien lo necesita.'
  },
  {
    id: 'ar_v_124', root: 'D-W-A', arabic: 'دَوَاء', word: 'دَوَاء', transliteration: 'Dawa’',
    spanish: 'Medicina / remedio terapéutico', translation: 'Medicina / remedio terapéutico', phonetic: '/daˈwaːʔ/',
    category: 'Salud', frequencyBand: 'top500',
    exampleSentence: 'Kull dā’ wa-lahu dawā’ fī aṭ-ṭibb.',
    exampleTranslation: 'La ciencia médica busca incansable alivio para toda dolencia.'
  },
  {
    id: 'ar_v_125', root: 'S-F-R', arabic: 'سَفَر', word: 'سَفَر', transliteration: 'Safar',
    spanish: 'Viaje / travesía hacia nuevos horizontes', translation: 'Viaje / travesía hacia nuevos horizontes', phonetic: '/ˈsa.far/',
    category: 'Viajes', frequencyBand: 'top500',
    exampleSentence: 'As-safar yuwasse‘ al-madārik wa-al-fikr.',
    exampleTranslation: 'Viajar y conocer otras tierras amplía la visión y la tolerancia humana.'
  },
  {
    id: 'ar_v_126', root: 'T-A-R', arabic: 'طَائِرَة', word: 'طَائِرَة', transliteration: 'Ta’ira',
    spanish: 'Avión / aeronave de transporte', translation: 'Avión / aeronave de transporte', phonetic: '/ˈtˤaː.ʔi.ra/',
    category: 'Viajes', frequencyBand: 'top500',
    exampleSentence: 'Qala‘at aṭ-ṭā’ira bi-ittijāh San Salvador.',
    exampleTranslation: 'El avión despegó puntual con destino a la capital salvadoreña.'
  },
  {
    id: 'ar_v_127', root: 'M-T-A-R', arabic: 'مَطَار', word: 'مَطَار', transliteration: 'Matar',
    spanish: 'Aeropuerto / terminal aérea internacional', translation: 'Aeropuerto / terminal aérea internacional', phonetic: '/maˈtˤaːr/',
    category: 'Viajes', frequencyBand: 'top500',
    exampleSentence: 'Maṭār San Oscar Arnulfo Romero yastaqbil al-musāfirīn.',
    exampleTranslation: 'El Aeropuerto San Óscar Romero recibe cordialmente a los viajeros del mundo.'
  },
  {
    id: 'ar_v_128', root: 'F-N-D-Q', arabic: 'فُنْدُق', word: 'فُنْدُق', transliteration: 'Funduq',
    spanish: 'Hotel / hospedaje (préstamo hispano alhóndiga)', translation: 'Hotel / hospedaje (préstamo hispano alhóndiga)', phonetic: '/ˈfun.duq/',
    category: 'Viajes', frequencyBand: 'top500',
    exampleSentence: 'Al-funduq yatamayyiz bi-al-khidma al-mumtāza.',
    exampleTranslation: 'El hotel brinda una estancia confortable con esmerado servicio.'
  },
  {
    id: 'ar_v_129', root: 'T-A-Sh-Y-R-H', arabic: 'تَأْشِيرَة', word: 'تَأْشِيرَة', transliteration: 'Ta’shira',
    spanish: 'Visa / visado de entrada para viajeros', translation: 'Visa / visado de entrada para viajeros', phonetic: '/taʔˈʃiː.ra/',
    category: 'Viajes', frequencyBand: 'top1000',
    exampleSentence: 'Haṣala ‘alā ta’shīrat ad-dukhūl ilā al-bilād.',
    exampleTranslation: 'Obtuvo su visado migratorio conforme a las regulaciones vigentes.'
  },
  {
    id: 'ar_v_130', root: 'J-W-A-Z', arabic: 'جَوَاز سَفَر', word: 'جَوَاز سَفَر', transliteration: 'Jawaz safar',
    spanish: 'Pasaporte oficial de viaje internacional', translation: 'Pasaporte oficial de viaje internacional', phonetic: '/dʒaˈwaːz ˈsa.far/',
    category: 'Viajes', frequencyBand: 'top500',
    exampleSentence: 'Jawāz as-safar al-Kūskātlī yaḥmil sha‘ār al-waṭan.',
    exampleTranslation: 'El pasaporte salvadoreño luce con orgullo el escudo nacional en su portada.'
  }
];
