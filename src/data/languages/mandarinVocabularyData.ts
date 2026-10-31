import { LanguageVocabulary } from './types';

export interface MandarinVocabItem extends LanguageVocabulary {
  id: string;
  hanzi: string;
  pinyin: string;
  spanish: string;
  hskLevel: 'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6';
  category: string;
  word: string;
  translation: string;
  phonetic?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export const MANDARIN_VOCABULARY_CORPUS: MandarinVocabItem[] = [
  {
    id: 'man_v_001', hanzi: '你好', word: '你好', pinyin: 'Nǐ hǎo',
    spanish: 'Hola / saludo cordial', translation: 'Hola / saludo cordial', phonetic: '[ni˨˩ xaʊ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Saludos',
    exampleSentence: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',
    exampleTranslation: '¡Hola! Es un gran gusto conocerte.'
  },
  {
    id: 'man_v_002', hanzi: '谢谢', word: '谢谢', pinyin: 'Xièxie',
    spanish: 'Gracias / sincero agradecimiento', translation: 'Gracias / sincero agradecimiento', phonetic: '[ɕjɛ˥˩.ɕjɛ]',
    hskLevel: 'HSK1', category: 'Cortesía',
    exampleSentence: 'Fēicháng xièxie nǐ de rèqíng bāngzhù.',
    exampleTranslation: 'Muchísimas gracias por tu generosa ayuda.'
  },
  {
    id: 'man_v_003', hanzi: '再见', word: '再见', pinyin: 'Zàijiàn',
    spanish: 'Adiós / hasta la vista', translation: 'Adiós / hasta la vista', phonetic: '[tsaɪ̯˥˩ tɕjɛn˥˩]',
    hskLevel: 'HSK1', category: 'Saludos',
    exampleSentence: 'Míngtiān jiàn, zàijiàn péngyou!',
    exampleTranslation: '¡Hasta mañana, nos vemos amigo!'
  },
  {
    id: 'man_v_004', hanzi: '朋友', word: '朋友', pinyin: 'Péngyou',
    spanish: 'Amigo / compañero leal', translation: 'Amigo / compañero leal', phonetic: '[pʰɤŋ˧˥ joʊ̯]',
    hskLevel: 'HSK1', category: 'Relaciones',
    exampleSentence: 'Wǒmen shì duō nián de hǎo péngyou.',
    exampleTranslation: 'Nosotros somos buenos amigos desde hace muchos años.'
  },
  {
    id: 'man_v_005', hanzi: '中国', word: '中国', pinyin: 'Zhōngguó',
    spanish: 'China (El País del Centro)', translation: 'China (El País del Centro)', phonetic: '[ʈʂʊŋ˥ kwo˧˥]',
    hskLevel: 'HSK1', category: 'Geografía',
    exampleSentence: 'Zhōngguó yǒu zhe yōujiǔ de lìshǐ hé wénhuà.',
    exampleTranslation: 'China posee una historia y una cultura milenaria admirable.'
  },
  {
    id: 'man_v_006', hanzi: '萨尔瓦多', word: '萨尔瓦多', pinyin: "Sà'ěrwǎduō",
    spanish: 'El Salvador (Tierra de Cuscatlán)', translation: 'El Salvador (Tierra de Cuscatlán)', phonetic: '[sa˥˩ ɤɻ˨˩ wa˨˩ two˥]',
    hskLevel: 'HSK1', category: 'Geografía',
    exampleSentence: "Sà'ěrwǎduō rénmín fēicháng qínláo hé rèqíng.",
    exampleTranslation: 'El pueblo salvadoreño es sumamente trabajador y hospitalario.'
  },
  {
    id: 'man_v_007', hanzi: '喜欢', word: '喜欢', pinyin: 'Xǐhuan',
    spanish: 'Gustar / agradar / apreciar', translation: 'Gustar / agradar / apreciar', phonetic: '[ɕi˨˩ xwan]',
    hskLevel: 'HSK1', category: 'Emociones',
    exampleSentence: 'Wǒ hěn xǐhuan xuéxí hànyǔ hé wénhuà.',
    exampleTranslation: 'Me agrada profundamente aprender el idioma y la cultura china.'
  },
  {
    id: 'man_v_008', hanzi: '高兴', word: '高兴', pinyin: 'Gāoxìng',
    spanish: 'Feliz / contento / alegre', translation: 'Feliz / contento / alegre', phonetic: '[kaʊ̯˥ ɕiŋ˥˩]',
    hskLevel: 'HSK1', category: 'Emociones',
    exampleSentence: 'Jīntiān dàjiā dōu fēicháng gāoxìng.',
    exampleTranslation: 'Hoy todos nos encontramos sumamente contentos y animados.'
  },
  {
    id: 'man_v_009', hanzi: '老师', word: '老师', pinyin: 'Lǎoshī',
    spanish: 'Profesor / maestro respetado', translation: 'Profesor / maestro respetado', phonetic: '[laʊ̯˨˩ ʂʐ̩˥]',
    hskLevel: 'HSK1', category: 'Educación',
    exampleSentence: 'Lǎoshī nài-xīn de jiāo wǒmen fāyīn.',
    exampleTranslation: 'El profesor nos enseña la pronunciación tonal con gran paciencia.'
  },
  {
    id: 'man_v_010', hanzi: '学生', word: '学生', pinyin: 'Xuésheng',
    spanish: 'Estudiante / alumno', translation: 'Estudiante / alumno', phonetic: '[ɕɥɛ˧˥ ʂəŋ]',
    hskLevel: 'HSK1', category: 'Educación',
    exampleSentence: 'Xuéshengmen zài jiàoshì lǐ rènzhēn tīngkè.',
    exampleTranslation: 'Los alumnos atienden la clase en el aula con suma atención.'
  },
  {
    id: 'man_v_011', hanzi: '学校', word: '学校', pinyin: 'Xuéxiào',
    spanish: 'Escuela / colegio / centro educativo', translation: 'Escuela / colegio / centro educativo', phonetic: '[ɕɥɛ˧˥ ɕjaʊ̯˥˩]',
    hskLevel: 'HSK1', category: 'Educación',
    exampleSentence: 'Wǒmen de xuéxiào huánjìng yōuměi.',
    exampleTranslation: 'El entorno de nuestra escuela es armónico y agradable.'
  },
  {
    id: 'man_v_012', hanzi: '汉语', word: '汉语', pinyin: 'Hànyǔ',
    spanish: 'Idioma chino / lengua mandarín estándar', translation: 'Idioma chino / lengua mandarín estándar', phonetic: '[xan˥˩ y˨˩˦]',
    hskLevel: 'HSK1', category: 'Lenguaje',
    exampleSentence: 'Hànyǔ shì shìjiè shàng shǐyòng rénshù zuì duō de yǔyán.',
    exampleTranslation: 'El chino es el idioma con mayor número de hablantes nativos del mundo.'
  },
  {
    id: 'man_v_013', hanzi: '家', word: '家', pinyin: 'Jiā',
    spanish: 'Casa / hogar / familia', translation: 'Casa / hogar / familia', phonetic: '[tɕja˥]',
    hskLevel: 'HSK1', category: 'Hogar',
    exampleSentence: "Wǒ de jiā zài Shèng Sà'ěrwǎduō.",
    exampleTranslation: 'Mi hogar se encuentra en San Salvador.'
  },
  {
    id: 'man_v_014', hanzi: '爸爸', word: '爸爸', pinyin: 'Bàba',
    spanish: 'Papá / padre querido', translation: 'Papá / padre querido', phonetic: '[pa˥˩.pa]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Wǒ bàba měitiān zǎoshang qù shàngbān.',
    exampleTranslation: 'Mi padre va a laborar todas las mañanas temprano.'
  },
  {
    id: 'man_v_015', hanzi: '妈妈', word: '妈妈', pinyin: 'Māma',
    spanish: 'Mamá / madre protectora', translation: 'Mamá / madre protectora', phonetic: '[ma˥.ma]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Wǒ māma zuò de fàn fēicháng hǎochī.',
    exampleTranslation: 'La comida que prepara mi madre es deliciosa.'
  },
  {
    id: 'man_v_016', hanzi: '哥哥', word: '哥哥', pinyin: 'Gēge',
    spanish: 'Hermano mayor', translation: 'Hermano mayor', phonetic: '[kɤ˥.kɤ]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Wǒ gēge zài dàxué dúshū.',
    exampleTranslation: 'Mi hermano mayor estudia en la universidad.'
  },
  {
    id: 'man_v_017', hanzi: '弟弟', word: '弟弟', pinyin: 'Dìdi',
    spanish: 'Hermano menor', translation: 'Hermano menor', phonetic: '[ti˥˩.ti]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Dìdi xǐhuan zài huāyuán lǐ wánshuǎ.',
    exampleTranslation: 'Mi hermano menor se divierte jugando en el jardín.'
  },
  {
    id: 'man_v_018', hanzi: '姐姐', word: '姐姐', pinyin: 'Jiějie',
    spanish: 'Hermana mayor', translation: 'Hermana mayor', phonetic: '[tɕjɛ˨˩.tɕjɛ]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Jiějie zài yīyuàn dāng hùshi.',
    exampleTranslation: 'Mi hermana mayor trabaja con esmero en el hospital.'
  },
  {
    id: 'man_v_019', hanzi: '妹妹', word: '妹妹', pinyin: 'Mèimei',
    spanish: 'Hermana menor', translation: 'Hermana menor', phonetic: '[meɪ̯˥˩.meɪ̯]',
    hskLevel: 'HSK1', category: 'Familia',
    exampleSentence: 'Mèimei jīnnián shàng xiǎoxué yī niánjí.',
    exampleTranslation: 'Mi hermana menor cursa el primer grado de primaria.'
  },
  {
    id: 'man_v_020', hanzi: '吃', word: '吃', pinyin: 'Chī',
    spanish: 'Comer / alimentarse', translation: 'Comer / alimentarse', phonetic: '[ʈʂʰʐ̩˥]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Wǒmen yìqǐ chī wǔfàn ba.',
    exampleTranslation: 'Vayamos a almorzar juntos al mediodía.'
  },
  {
    id: 'man_v_021', hanzi: '喝', word: '喝', pinyin: 'Hē',
    spanish: 'Beber / tomar té o agua', translation: 'Beber / tomar té o agua', phonetic: '[xɤ˥]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Qǐng hē yì bēi rè chá.',
    exampleTranslation: 'Por favor, tome una taza de té caliente.'
  },
  {
    id: 'man_v_022', hanzi: '水', word: '水', pinyin: 'Shuǐ',
    spanish: 'Agua pura / líquido vital', translation: 'Agua pura / líquido vital', phonetic: '[ʂweɪ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Měitiān duō hē shuǐ duì shēntǐ hǎo.',
    exampleTranslation: 'Beber suficiente agua a diario es excelente para la salud.'
  },
  {
    id: 'man_v_023', hanzi: '茶', word: '茶', pinyin: 'Chá',
    spanish: 'Té verde o negro tradicional', translation: 'Té verde o negro tradicional', phonetic: '[ʈʂʰa˧˥]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Zhōngguó lǜchá wèidao qīngxiāng.',
    exampleTranslation: 'El té verde chino posee un aroma delicado y refrescante.'
  },
  {
    id: 'man_v_024', hanzi: '炒面', word: '炒面', pinyin: 'Chǎomiàn',
    spanish: 'Chaomín / fideos salteados (plato popular en El Salvador)', translation: 'Chaomín / fideos salteados (plato popular en El Salvador)', phonetic: '[ʈʂʰaʊ̯˨˩ mjɛn˥˩]',
    hskLevel: 'HSK2', category: 'Alimentos',
    exampleSentence: "Chǎomiàn zài Sà'ěrwǎduō fēicháng shòu huānyíng.",
    exampleTranslation: 'El chaomín es uno de los platillos más populares y queridos en El Salvador.'
  },
  {
    id: 'man_v_025', hanzi: '米饭', word: '米饭', pinyin: 'Mǐfàn',
    spanish: 'Arroz blanco cocido', translation: 'Arroz blanco cocido', phonetic: '[mi˨˩ fan˥˩]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Wǒ xǐhuan chī mǐfàn pèi shūcài.',
    exampleTranslation: 'Me gusta comer arroz blanco acompañado de vegetales frescos.'
  },
  {
    id: 'man_v_026', hanzi: '菜', word: '菜', pinyin: 'Cài',
    spanish: 'Plato de comida / verdura / cocina', translation: 'Plato de comida / verdura / cocina', phonetic: '[tsʰaɪ̯˥˩]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Zhōngcān de cài fēicháng fēngfù.',
    exampleTranslation: 'Los platillos de la gastronomía china son sumamente variados.'
  },
  {
    id: 'man_v_027', hanzi: '饭馆', word: '饭馆', pinyin: 'Fànguǎn',
    spanish: 'Restaurante / comedor tradicional', translation: 'Restaurante / comedor tradicional', phonetic: '[fan˥˩ kwan˨˩˦]',
    hskLevel: 'HSK1', category: 'Alimentos',
    exampleSentence: 'Zhè jiā zhōngcānguǎn de càiyáo hěn zhèngzōng.',
    exampleTranslation: 'Las recetas de este restaurante chino son muy auténticas.'
  },
  {
    id: 'man_v_028', hanzi: '买', word: '买', pinyin: 'Mǎi',
    spanish: 'Comprar / adquirir', translation: 'Comprar / adquirir', phonetic: '[maɪ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Comercio',
    exampleSentence: 'Wǒ xiǎng mǎi yì běn hànyǔ cídiǎn.',
    exampleTranslation: 'Deseo comprar un diccionario de lengua china.'
  },
  {
    id: 'man_v_029', hanzi: '卖', word: '卖', pinyin: 'Mài',
    spanish: 'Vender / comerciar', translation: 'Vender / comerciar', phonetic: '[maɪ̯˥˩]',
    hskLevel: 'HSK2', category: 'Comercio',
    exampleSentence: 'Shāngdiàn lǐ mài gè zhǒng xīnxiān shuǐguǒ.',
    exampleTranslation: 'La tienda vende toda clase de frutas frescas de temporada.'
  },
  {
    id: 'man_v_030', hanzi: '多少钱', word: '多少钱', pinyin: 'Duōshǎo qián',
    spanish: '¿Cuánto cuesta? / ¿cuál es el precio?', translation: '¿Cuánto cuesta? / ¿cuál es el precio?', phonetic: '[two˥ ʂaʊ̯ tɕʰjɛn˧˥]',
    hskLevel: 'HSK1', category: 'Comercio',
    exampleSentence: 'Qǐngwèn, zhè jiàn yīfu duōshǎo qián?',
    exampleTranslation: 'Disculpe, ¿cuánto cuesta esta prenda de vestir?'
  },
  {
    id: 'man_v_031', hanzi: '钱', word: '钱', pinyin: 'Qián',
    spanish: 'Dinero / moneda / divisa', translation: 'Dinero / moneda / divisa', phonetic: '[tɕʰjɛn˧˥]',
    hskLevel: 'HSK1', category: 'Comercio',
    exampleSentence: 'Jiéyuē yòng qián shì yí gè hǎo xíguàn.',
    exampleTranslation: 'Ahorrar y administrar bien el dinero es una excelente virtud.'
  },
  {
    id: 'man_v_032', hanzi: '大', word: '大', pinyin: 'Dà',
    spanish: 'Grande / espacioso / mayor', translation: 'Grande / espacioso / mayor', phonetic: '[ta˥˩]',
    hskLevel: 'HSK1', category: 'Cualidad',
    exampleSentence: 'Zhōngguó de chéngshì hěn dà.',
    exampleTranslation: 'Las metrópolis en China son de escala inmensa y moderna.'
  },
  {
    id: 'man_v_033', hanzi: '小', word: '小', pinyin: 'Xiǎo',
    spanish: 'Pequeño / menudo / chico', translation: 'Pequeño / menudo / chico', phonetic: '[ɕjaʊ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Cualidad',
    exampleSentence: 'Zhè zhī xiǎogǒu fēicháng kě’ài.',
    exampleTranslation: 'Este perrito cachorro es sumamente tierno y juguetón.'
  },
  {
    id: 'man_v_034', hanzi: '多', word: '多', pinyin: 'Duō',
    spanish: 'Mucho / abundante / numeroso', translation: 'Mucho / abundante / numeroso', phonetic: '[two˥]',
    hskLevel: 'HSK1', category: 'Cantidad',
    exampleSentence: 'Lǐtáng lǐ yǒu hěn duō rén.',
    exampleTranslation: 'Hay muchas personas congregadas en el auditorio.'
  },
  {
    id: 'man_v_035', hanzi: '少', word: '少', pinyin: 'Shǎo',
    spanish: 'Poco / escaso / reducido', translation: 'Poco / escaso / reducido', phonetic: '[ʂaʊ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Cantidad',
    exampleSentence: 'Tā shuō de huà hěn shǎo, dàn hěn yǒu fènliàng.',
    exampleTranslation: 'Habla poco, pero sus palabras tienen gran peso y sabiduría.'
  },
  {
    id: 'man_v_036', hanzi: '冷', word: '冷', pinyin: 'Lěng',
    spanish: 'Frío / gélido', translation: 'Frío / gélido', phonetic: '[lɤŋ˨˩˦]',
    hskLevel: 'HSK1', category: 'Clima',
    exampleSentence: 'Jīntiān tiānqì bǐjiào lěng, duō chuān yīfu.',
    exampleTranslation: 'Hoy el clima está fresco, abrígate adecuadamente.'
  },
  {
    id: 'man_v_037', hanzi: '热', word: '热', pinyin: 'Rè',
    spanish: 'Caliente / caluroso', translation: 'Caliente / caluroso', phonetic: '[ʐɤ˥˩]',
    hskLevel: 'HSK1', category: 'Clima',
    exampleSentence: 'Xiàtiān tiānqì hěn rè.',
    exampleTranslation: 'En la época seca el calor se siente con intensidad.'
  },
  {
    id: 'man_v_038', hanzi: '一', word: '一', pinyin: 'Yī',
    spanish: 'Uno (1) en mandarín', translation: 'Uno (1) en mandarín', phonetic: '[i˥]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Yí ge rén yào yǒu zérèngǎn.',
    exampleTranslation: 'Toda persona debe cultivar un alto sentido del deber.'
  },
  {
    id: 'man_v_039', hanzi: '二', word: '二', pinyin: 'Èr',
    spanish: 'Dos (2) en conteo ordinal', translation: 'Dos (2) en conteo ordinal', phonetic: '[aɚ˥˩]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Yī, èr, sān, wǒmen kāishǐ.',
    exampleTranslation: 'Uno, dos, tres, comencemos la práctica.'
  },
  {
    id: 'man_v_040', hanzi: '三', word: '三', pinyin: 'Sān',
    spanish: 'Tres (3) en mandarín', translation: 'Tres (3) en mandarín', phonetic: '[san˥]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Sān ge rén tóng xīn, huángtǔ biàn chéng jīn.',
    exampleTranslation: 'Cuando tres voluntades se unen, transforman la tierra en riqueza.'
  },
  {
    id: 'man_v_041', hanzi: '四', word: '四', pinyin: 'Sì',
    spanish: 'Cuatro (4) en mandarín', translation: 'Cuatro (4) en mandarín', phonetic: '[sz̩˥˩]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Yì nián yǒu sì ge jìjié.',
    exampleTranslation: 'Un año comprende cuatro estaciones naturales.'
  },
  {
    id: 'man_v_042', hanzi: '五', word: '五', pinyin: 'Wǔ',
    spanish: 'Cinco (5) en mandarín', translation: 'Cinco (5) en mandarín', phonetic: '[u˨˩˦]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Wǒ yǒu wǔ gè tóngxué.',
    exampleTranslation: 'Tengo cinco compañeros en el grupo de estudio.'
  },
  {
    id: 'man_v_043', hanzi: '六', word: '六', pinyin: 'Liù',
    spanish: 'Seis (6) / símbolo de fluidez y buen augurio', translation: 'Seis (6) / símbolo de fluidez y buen augurio', phonetic: '[ljoʊ̯˥˩]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Xīngqīliù wǒmen qù gōngyuán.',
    exampleTranslation: 'El día sábado iremos a caminar al parque.'
  },
  {
    id: 'man_v_044', hanzi: '七', word: '七', pinyin: 'Qī',
    spanish: 'Siete (7) en mandarín', translation: 'Siete (7) en mandarín', phonetic: '[tɕʰi˥]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Yí ge xīngqī yǒu qī tiān.',
    exampleTranslation: 'Una semana completa consta de siete días.'
  },
  {
    id: 'man_v_045', hanzi: '八', word: '八', pinyin: 'Bā',
    spanish: 'Ocho (8) / símbolo de prosperidad y fortuna', translation: 'Ocho (8) / símbolo de prosperidad y fortuna', phonetic: '[pa˥]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Bā diǎn zhōng kāishǐ shàngkè.',
    exampleTranslation: 'A las ocho en punto da inicio la jornada de clases.'
  },
  {
    id: 'man_v_046', hanzi: '九', word: '九', pinyin: 'Jiǔ',
    spanish: 'Nueve (9) / símbolo de longevidad perenne', translation: 'Nueve (9) / símbolo de longevidad perenne', phonetic: '[tɕjoʊ̯˨˩˦]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Jiǔ yuè shì kāixué de jìjié.',
    exampleTranslation: 'Septiembre es la temporada del retorno a las aulas.'
  },
  {
    id: 'man_v_047', hanzi: '十', word: '十', pinyin: 'Shí',
    spanish: 'Diez (10) / símbolo de completitud perfecta', translation: 'Diez (10) / símbolo de completitud perfecta', phonetic: '[ʂʐ̩˧˥]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Shí quán shí měi shì yī zhǒng lǐxiǎng.',
    exampleTranslation: 'La perfección cabal es un ideal que inspira la excelencia.'
  },
  {
    id: 'man_v_048', hanzi: '两', word: '两', pinyin: 'Liǎng',
    spanish: 'Dos (2) con clasificadores de cantidad', translation: 'Dos (2) con clasificadores de cantidad', phonetic: '[ljaŋ˨˩˦]',
    hskLevel: 'HSK1', category: 'Números',
    exampleSentence: 'Wǒ yǒu liǎng běn shū.',
    exampleTranslation: 'Tengo dos libros sobre mi escritorio.'
  },
  {
    id: 'man_v_049', hanzi: '百', word: '百', pinyin: 'Bǎi',
    spanish: 'Cien (100) en mandarín', translation: 'Cien (100) en mandarín', phonetic: '[paɪ̯˨˩˦]',
    hskLevel: 'HSK2', category: 'Números',
    exampleSentence: 'Zhè běn shū yǒu yībǎi yè.',
    exampleTranslation: 'Este libro contiene exactamente cien páginas de lectura.'
  },
  {
    id: 'man_v_050', hanzi: '千', word: '千', pinyin: 'Qiān',
    spanish: 'Mil (1,000) en mandarín', translation: 'Mil (1,000) en mandarín', phonetic: '[tɕʰjɛn˥]',
    hskLevel: 'HSK3', category: 'Números',
    exampleSentence: 'Yì qiān nián de lìshǐ jīdiàn.',
    exampleTranslation: 'Mil años de historia viva forjan un legado perdurable.'
  },
  {
    id: 'man_v_051', hanzi: '万', word: '万', pinyin: 'Wàn',
    spanish: 'Diez mil (10,000) / unidad básica de cuenta china', translation: 'Diez mil (10,000) / unidad básica de cuenta china', phonetic: '[wan˥˩]',
    hskLevel: 'HSK3', category: 'Números',
    exampleSentence: 'Wàn lǐ chángchéng wénmíng zhōngwài.',
    exampleTranslation: 'La Gran Muralla de los Diez Mil Li es admirada universalmente.'
  },
  {
    id: 'man_v_052', hanzi: '今天', word: '今天', pinyin: 'Jīntiān',
    spanish: 'Hoy / el día presente', translation: 'Hoy / el día presente', phonetic: '[tɕin˥ tʰjɛn˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Jīntiān tiānqì fēicháng qínglǎng.',
    exampleTranslation: 'Hoy el tiempo se presenta sumamente soleado y agradable.'
  },
  {
    id: 'man_v_053', hanzi: '明天', word: '明天', pinyin: 'Míngtiān',
    spanish: 'Mañana / en el día venidero', translation: 'Mañana / en el día venidero', phonetic: '[miŋ˧˥ tʰjɛn˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Míngtiān wǒmen yǒu yí gè kǎoshì.',
    exampleTranslation: 'Mañana presentaremos una prueba de aprovechamiento.'
  },
  {
    id: 'man_v_054', hanzi: '昨天', word: '昨天', pinyin: 'Zuótiān',
    spanish: 'Ayer / en el día anterior', translation: 'Ayer / en el día anterior', phonetic: '[tswo˧˥ tʰjɛn˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Zuótiān wǒ zài túshūguǎn kànshū.',
    exampleTranslation: 'Ayer estuve leyendo atentamente en la biblioteca municipal.'
  },
  {
    id: 'man_v_055', hanzi: '上午', word: '上午', pinyin: 'Shàngwǔ',
    spanish: 'La mañana / antes del mediodía', translation: 'La mañana / antes del mediodía', phonetic: '[ʂaŋ˥˩ u˨˩˦]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Shàngwǔ wǒmen xuéxí hànyǔ fāyīn.',
    exampleTranslation: 'Por la mañana practicamos los tonos y sonidos del mandarín.'
  },
  {
    id: 'man_v_056', hanzi: '下午', word: '下午', pinyin: 'Xiàwǔ',
    spanish: 'La tarde / después del mediodía', translation: 'La tarde / después del mediodía', phonetic: '[ɕja˥˩ u˨˩˦]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Xiàwǔ tiānqì bǐjiào liángshuai.',
    exampleTranslation: 'Por la tarde el clima se torna templado y sereno.'
  },
  {
    id: 'man_v_057', hanzi: '晚上', word: '晚上', pinyin: 'Wǎnshang',
    spanish: 'La noche / caída de la noche', translation: 'La noche / caída de la noche', phonetic: '[wan˨˩ ʂaŋ]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Wǎnshang jiārén yìqǐ chīfàn liáotiān.',
    exampleTranslation: 'Por la noche la familia comparte la cena y amenas charlas.'
  },
  {
    id: 'man_v_058', hanzi: '星期', word: '星期', pinyin: 'Xīngqī',
    spanish: 'Semana / día de la semana', translation: 'Semana / día de la semana', phonetic: '[ɕiŋ˥ tɕʰi˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Jīntiān shì xīngqīsān.',
    exampleTranslation: 'Hoy es día miércoles conforme al calendario.'
  },
  {
    id: 'man_v_059', hanzi: '月', word: '月', pinyin: 'Yuè',
    spanish: 'Mes / luna en el firmamento', translation: 'Mes / luna en el firmamento', phonetic: '[yɛ˥˩]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Yí nián yǒu shí’èr ge yuè.',
    exampleTranslation: 'Un año se divide en doce meses calendáricos.'
  },
  {
    id: 'man_v_060', hanzi: '年', word: '年', pinyin: 'Nián',
    spanish: 'Año / ciclo solar de 365 días', translation: 'Año / ciclo solar de 365 días', phonetic: '[njɛn˧˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Xīn nián kuàilè, wànshì rúyì!',
    exampleTranslation: '¡Feliz Año Nuevo, prosperidad y bendiciones en todo propósito!'
  },
  {
    id: 'man_v_061', hanzi: '点', word: '点', pinyin: 'Diǎn',
    spanish: 'Hora / en punto / gota o punto ortográfico', translation: 'Hora / en punto / gota o punto ortográfico', phonetic: '[tjɛn˨˩˦]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Xiànzài shì zǎoshang qī diǎn bàn.',
    exampleTranslation: 'En este momento son las siete y media de la mañana.'
  },
  {
    id: 'man_v_062', hanzi: '分', word: '分', pinyin: 'Fēn',
    spanish: 'Minuto / fracción / dividir', translation: 'Minuto / fracción / dividir', phonetic: '[fən˥]',
    hskLevel: 'HSK1', category: 'Tiempo',
    exampleSentence: 'Hái chà shí fēnzhōng jiù xiàkè le.',
    exampleTranslation: 'Faltan apenas diez minutos para culminar la sesión.'
  },
  {
    id: 'man_v_063', hanzi: '看', word: '看', pinyin: 'Kàn',
    spanish: 'Ver / mirar / leer un libro', translation: 'Ver / mirar / leer un libro', phonetic: '[kʰan˥˩]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Wǒ xǐhuan zài jiā kànshū.',
    exampleTranslation: 'Disfruto dedicar tiempo a la lectura tranquila en el hogar.'
  },
  {
    id: 'man_v_064', hanzi: '听', word: '听', pinyin: 'Tīng',
    spanish: 'Escuchar / oír con atención', translation: 'Escuchar / oír con atención', phonetic: '[tʰiŋ˥]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Qǐng nǐmen rènzhēn tīng lùyīn.',
    exampleTranslation: 'Por favor, escuchen con mucha atención la grabación fonética.'
  },
  {
    id: 'man_v_065', hanzi: '说', word: '说', pinyin: 'Shuō',
    spanish: 'Hablar / pronunciar / decir', translation: 'Hablar / pronunciar / decir', phonetic: '[ʂwo˥]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Tā shuō zhōngwén shuō de hěn liúlì.',
    exampleTranslation: 'Él pronuncia el idioma chino con notable fluidez y soltura.'
  },
  {
    id: 'man_v_066', hanzi: '写', word: '写', pinyin: 'Xiě',
    spanish: 'Escribir / trazar caracteres chinos', translation: 'Escribir / trazar caracteres chinos', phonetic: '[ɕjɛ˨˩˦]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Xiě hànzì xūyào zhùyì bǐshùn.',
    exampleTranslation: 'Escribir caracteres chinos requiere respetar el orden correcto de trazos.'
  },
  {
    id: 'man_v_067', hanzi: '做', word: '做', pinyin: 'Zuò',
    spanish: 'Hacer / elaborar / dedicarse a un oficio', translation: 'Hacer / elaborar / dedicarse a un oficio', phonetic: '[tswo˥˩]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Nǐ zài zuò shénme ne?',
    exampleTranslation: '¿A qué actividad te estás dedicando en este momento?'
  },
  {
    id: 'man_v_068', hanzi: '去', word: '去', pinyin: 'Qù',
    spanish: 'Ir / dirigirse hacia un destino', translation: 'Ir / dirigirse hacia un destino', phonetic: '[tɕʰy˥˩]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Míngtiān wǒmen qù túshūguǎn.',
    exampleTranslation: 'Mañana nos dirigiremos a la biblioteca a investigar.'
  },
  {
    id: 'man_v_069', hanzi: '来', word: '来', pinyin: 'Lái',
    spanish: 'Venir / llegar hacia acá', translation: 'Venir / llegar hacia acá', phonetic: '[laɪ̯˧˥]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Huānyíng lái dào wǒmen de jiā.',
    exampleTranslation: 'Sean ustedes muy bienvenidos a visitar nuestro hogar.'
  },
  {
    id: 'man_v_070', hanzi: '回', word: '回', pinyin: 'Huí',
    spanish: 'Regresar / retornar al punto de partida', translation: 'Regresar / retornar al punto de partida', phonetic: '[xweɪ̯˧˥]',
    hskLevel: 'HSK1', category: 'Acción',
    exampleSentence: 'Wǒ xiàwǔ wǔ diǎn huí jiā.',
    exampleTranslation: 'Retornaré a mi casa a las cinco en punto de la tarde.'
  },
  {
    id: 'man_v_071', hanzi: '住', word: '住', pinyin: 'Zhù',
    spanish: 'Vivir / habitar / residir en una ciudad', translation: 'Vivir / habitar / residir en una ciudad', phonetic: '[ʈʂu˥˩]',
    hskLevel: 'HSK1', category: 'Hogar',
    exampleSentence: 'Wǒ zhù zài shǒudū San Salvador.',
    exampleTranslation: 'Yo resido en la capital de San Salvador.'
  },
  {
    id: 'man_v_072', hanzi: '工作', word: '工作', pinyin: 'Gōngzuò',
    spanish: 'Trabajo / empleo / trabajar con ahínco', translation: 'Trabajo / empleo / trabajar con ahínco', phonetic: '[kʊŋ˥ tswo˥˩]',
    hskLevel: 'HSK1', category: 'Profesión',
    exampleSentence: 'Wǒ hěn rè’ài wǒ de gōngzuò.',
    exampleTranslation: 'Amo profundamente mi profesión y me entrego a ella con fervor.'
  },
  {
    id: 'man_v_073', hanzi: '学习', word: '学习', pinyin: 'Xuéxí',
    spanish: 'Aprender / estudiar con constancia', translation: 'Aprender / estudiar con constancia', phonetic: '[ɕɥɛ˧˥ ɕi˧˥]',
    hskLevel: 'HSK1', category: 'Educación',
    exampleSentence: 'Xuéxí hànzì ràng rén kāikuò yǎnjiè.',
    exampleTranslation: 'Aprender caracteres chinos amplía el horizonte de pensamiento de las personas.'
  },
  {
    id: 'man_v_074', hanzi: '认识', word: '认识', pinyin: 'Rènshi',
    spanish: 'Conocer a una persona / familiarizarse', translation: 'Conocer a una persona / familiarizarse', phonetic: '[ʐən˥˩ ʂʐ̩]',
    hskLevel: 'HSK1', category: 'Relaciones',
    exampleSentence: 'Hěn gāoxìng rènshi nǐmen!',
    exampleTranslation: '¡Es un honor y una alegría inmensa conocerlos a ustedes!'
  },
  {
    id: 'man_v_075', hanzi: '觉得', word: '觉得', pinyin: 'Juéde',
    spanish: 'Sentir / opinar / considerar', translation: 'Sentir / opinar / considerar', phonetic: '[tɕɥɛ˧˥ tə]',
    hskLevel: 'HSK2', category: 'Pensamiento',
    exampleSentence: 'Wǒ juéde zhè běn shū hěn yǒu yìsi.',
    exampleTranslation: 'Considero que este texto aporta perspectivas sumamente valiosas.'
  },
  {
    id: 'man_v_076', hanzi: '知道', word: '知道', pinyin: 'Zhīdào',
    spanish: 'Saber / tener conocimiento de un hecho', translation: 'Saber / tener conocimiento de un hecho', phonetic: '[ʈʂʐ̩˥ taʊ̯]',
    hskLevel: 'HSK2', category: 'Pensamiento',
    exampleSentence: 'Wǒ zhīdào zhè jiàn shì de yuányīn.',
    exampleTranslation: 'Tengo conocimiento cabal de las razones que motivaron el hecho.'
  },
  {
    id: 'man_v_077', hanzi: '懂', word: '懂', pinyin: 'Dǒng',
    spanish: 'Comprender / entender cabalmente', translation: 'Comprender / entender cabalmente', phonetic: '[tʊŋ˨˩˦]',
    hskLevel: 'HSK2', category: 'Pensamiento',
    exampleSentence: 'Nǐ tīng dǒng lǎoshī de jiěshì le ma?',
    exampleTranslation: '¿Comprendiste con claridad la explicación brindada por el maestro?'
  },
  {
    id: 'man_v_078', hanzi: '问', word: '问', pinyin: 'Wèn',
    spanish: 'Preguntar / formular una interrogante', translation: 'Preguntar / formular una interrogante', phonetic: '[wən˥˩]',
    hskLevel: 'HSK2', category: 'Acción',
    exampleSentence: 'Qǐngwèn, túshūguǎn zěnme zǒu?',
    exampleTranslation: 'Disculpe la pregunta, ¿cómo se llega a la biblioteca desde aquí?'
  },
  {
    id: 'man_v_079', hanzi: '回答', word: '回答', pinyin: 'Huídá',
    spanish: 'Responder / contestar a una pregunta', translation: 'Responder / contestar a una pregunta', phonetic: '[xweɪ̯˧˥ ta˧˥]',
    hskLevel: 'HSK2', category: 'Acción',
    exampleSentence: 'Tā de huídá fēicháng zhǔnquè.',
    exampleTranslation: 'Su respuesta fue sumamente acertada y precisa.'
  },
  {
    id: 'man_v_080', hanzi: '帮助', word: '帮助', pinyin: 'Bāngzhù',
    spanish: 'Ayudar / auxilio y solidaridad fraterna', translation: 'Ayudar / auxilio y solidaridad fraterna', phonetic: '[paŋ˥ ʈʂu˥˩]',
    hskLevel: 'HSK2', category: 'Valores',
    exampleSentence: 'Hùxiāng bāngzhù shì wǒmen de chuántǒng.',
    exampleTranslation: 'La ayuda mutua entre vecinos es una tradición sagrada en la comunidad.'
  },
  {
    id: 'man_v_081', hanzi: '希望', word: '希望', pinyin: 'Xīwàng',
    spanish: 'Esperanza / anhelar un futuro próspero', translation: 'Esperanza / anhelar un futuro próspero', phonetic: '[ɕi˥ waŋ˥˩]',
    hskLevel: 'HSK2', category: 'Emociones',
    exampleSentence: 'Wǒ xīwàng dàjiā dōu jiànkāng kuàilè.',
    exampleTranslation: 'Anhelo sinceramente que todos gocen de plena salud y dicha.'
  },
  {
    id: 'man_v_082', hanzi: '准备', word: '准备', pinyin: 'Zhǔnbèi',
    spanish: 'Preparar / disponer los preparativos', translation: 'Preparar / disponer los preparativos', phonetic: '[ʈʂwən˨˩ peɪ̯˥˩]',
    hskLevel: 'HSK2', category: 'Acción',
    exampleSentence: 'Wǒmen yǐjīng zhǔnbèi hǎo kǎoshì le.',
    exampleTranslation: 'Nos encontramos plenamente preparados para afrontar el examen.'
  },
  {
    id: 'man_v_083', hanzi: '容易', word: '容易', pinyin: 'Róngyì',
    spanish: 'Fácil / sencillo de asimilar', translation: 'Fácil / sencillo de asimilar', phonetic: '[ʐʊŋ˧˥ i˥˩]',
    hskLevel: 'HSK2', category: 'Cualidad',
    exampleSentence: 'Zhè dào tí hěn róngyì jiědá.',
    exampleTranslation: 'Este ejercicio es muy sencillo de resolver siguiendo las reglas.'
  },
  {
    id: 'man_v_084', hanzi: '难', word: '难', pinyin: 'Nán',
    spanish: 'Difícil / complejo / desafiante', translation: 'Difícil / complejo / desafiante', phonetic: '[nan˧˥]',
    hskLevel: 'HSK2', category: 'Cualidad',
    exampleSentence: 'Yǒuxiē hànzì bǐjiào nán xiě.',
    exampleTranslation: 'Algunos caracteres son complejos de trazar pero revelan gran belleza.'
  },
  {
    id: 'man_v_085', hanzi: '快', word: '快', pinyin: 'Kuài',
    spanish: 'Rápido / veloz / pronto', translation: 'Rápido / veloz / pronto', phonetic: '[kʰwaɪ̯˥˩]',
    hskLevel: 'HSK1', category: 'Cualidad',
    exampleSentence: 'Gāotiě sùdù fēicháng kuài.',
    exampleTranslation: 'El tren de alta velocidad se desplaza a una rapidez extraordinaria.'
  },
  {
    id: 'man_v_086', hanzi: '慢', word: '慢', pinyin: 'Màn',
    spanish: 'Lento / pausado con prudencia', translation: 'Lento / pausado con prudencia', phonetic: '[man˥˩]',
    hskLevel: 'HSK2', category: 'Cualidad',
    exampleSentence: 'Qǐng shuō de màn yìdiǎn.',
    exampleTranslation: 'Por favor, hable un poco más despacio para comprender cada tono.'
  },
  {
    id: 'man_v_087', hanzi: '新', word: '新', pinyin: 'Xīn',
    spanish: 'Nuevo / innovador / flamante', translation: 'Nuevo / innovador / flamante', phonetic: '[ɕin˥]',
    hskLevel: 'HSK1', category: 'Cualidad',
    exampleSentence: 'Wǒ mǎi le yì běn xīn cídiǎn.',
    exampleTranslation: 'Adquirí un diccionario recién editado para mis estudios.'
  },
  {
    id: 'man_v_088', hanzi: '旧', word: '旧', pinyin: 'Jiù',
    spanish: 'Viejo / antiguo / usado', translation: 'Viejo / antiguo / usado', phonetic: '[tɕjoʊ̯˥˩]',
    hskLevel: 'HSK2', category: 'Cualidad',
    exampleSentence: 'Zhè jiàn jiù yīfu fēicháng shūfu.',
    exampleTranslation: 'Esta prenda antigua es sumamente cómoda para descansar.'
  },
  {
    id: 'man_v_089', hanzi: '对', word: '对', pinyin: 'Duì',
    spanish: 'Correcto / exacto / hacia', translation: 'Correcto / exacto / hacia', phonetic: '[tweɪ̯˥˩]',
    hskLevel: 'HSK1', category: 'Cualidad',
    exampleSentence: 'Nǐ de huídá fēicháng duì.',
    exampleTranslation: 'Tu respuesta ha sido completamente certera y correcta.'
  },
  {
    id: 'man_v_090', hanzi: '错', word: '错', pinyin: 'Cuò',
    spanish: 'Incorrecto / error remediable', translation: 'Incorrecto / error remediable', phonetic: '[tsʰwo˥˩]',
    hskLevel: 'HSK2', category: 'Cualidad',
    exampleSentence: 'Fàndào cuòwù yào yǒngyú gǎizhèng.',
    exampleTranslation: 'Cuando se comete una falta es deber rectificarla con entereza.'
  },
  {
    id: 'man_v_091', hanzi: '身体', word: '身体', pinyin: 'Shēntǐ',
    spanish: 'Cuerpo / estado de salud', translation: 'Cuerpo / estado de salud', phonetic: '[ʂən˥ tʰi˨˩˦]',
    hskLevel: 'HSK2', category: 'Salud',
    exampleSentence: 'Zhù nǐ shēntǐ jiànkāng!',
    exampleTranslation: '¡Te deseo vigorosa salud y bienestar integral!'
  },
  {
    id: 'man_v_092', hanzi: '医生', word: '医生', pinyin: 'Yīshēng',
    spanish: 'Médico / doctor facultativo', translation: 'Médico / doctor facultativo', phonetic: '[i˥ ʂəŋ]',
    hskLevel: 'HSK1', category: 'Profesión',
    exampleSentence: 'Yīshēng zài yīyuàn jiùmǐng fùshāng.',
    exampleTranslation: 'El médico consagra su vocación al servicio de la salud pública.'
  },
  {
    id: 'man_v_093', hanzi: '医院', word: '医院', pinyin: 'Yīyuàn',
    spanish: 'Hospital / centro de atención médica', translation: 'Hospital / centro de atención médica', phonetic: '[i˥ yɛn˥˩]',
    hskLevel: 'HSK1', category: 'Salud',
    exampleSentence: 'Yīyuàn de shèshī fēicháng xiàndàihuà.',
    exampleTranslation: 'Las instalaciones del hospital son modernas y eficientes.'
  },
  {
    id: 'man_v_094', hanzi: '车', word: '车', pinyin: 'Chē',
    spanish: 'Carro / vehículo / coche', translation: 'Carro / vehículo / coche', phonetic: '[ʈʂʰɤ˥]',
    hskLevel: 'HSK1', category: 'Transporte',
    exampleSentence: 'Wǒmen zuò gōnggòng qìchē qù shàngxué.',
    exampleTranslation: 'Tomamos el autobús de servicio público para acudir a clases.'
  },
  {
    id: 'man_v_095', hanzi: '车站', word: '车站', pinyin: 'Chēzhàn',
    spanish: 'Estación de autobuses o tren', translation: 'Estación de autobuses o tren', phonetic: '[ʈʂʰɤ˥ ʈʂan˥˩]',
    hskLevel: 'HSK1', category: 'Transporte',
    exampleSentence: 'Huǒchēzhàn lǐ yǒu hěn duō lǚkè.',
    exampleTranslation: 'En la estación ferroviaria hay muchos viajeros esperando partida.'
  },
  {
    id: 'man_v_096', hanzi: '飞机', word: '飞机', pinyin: 'Fēijī',
    spanish: 'Avión / transporte aéreo', translation: 'Avión / transporte aéreo', phonetic: '[feɪ̯˥ tɕi˥]',
    hskLevel: 'HSK1', category: 'Transporte',
    exampleSentence: 'Fēijī zhǔnshí zài jīchǎng jiàngluò.',
    exampleTranslation: 'El avión aterrizó con puntualidad en la pista del aeropuerto.'
  },
  {
    id: 'man_v_097', hanzi: '机场', word: '机场', pinyin: 'Jīchǎng',
    spanish: 'Aeropuerto / terminal aérea', translation: 'Aeropuerto / terminal aérea', phonetic: '[tɕi˥ ʈʂʰaŋ˨˩˦]',
    hskLevel: 'HSK2', category: 'Transporte',
    exampleSentence: "Sà'ěrwǎduō guójì jīchǎng hěn fánmáng.",
    exampleTranslation: 'El Aeropuerto Internacional de El Salvador registra un tráfico constante.'
  },
  {
    id: 'man_v_098', hanzi: '路', word: '路', pinyin: 'Lù',
    spanish: 'Camino / calle / ruta vial', translation: 'Camino / calle / ruta vial', phonetic: '[lu˥˩]',
    hskLevel: 'HSK2', category: 'Transporte',
    exampleSentence: 'Zhè tiáo lù tōngwǎng shānshàng.',
    exampleTranslation: 'Esta carretera asciende serpenteando hacia las faldas del volcán.'
  },
  {
    id: 'man_v_099', hanzi: '左边', word: '左边', pinyin: 'Zuǒbian',
    spanish: 'Lado izquierdo / a la izquierda', translation: 'Lado izquierdo / a la izquierda', phonetic: '[tswo˨˩ pjan]',
    hskLevel: 'HSK2', category: 'Ubicación',
    exampleSentence: 'Yínháng zài shāngdiàn de zuǒbian.',
    exampleTranslation: 'La sucursal bancaria se encuentra justo a la izquierda del comercio.'
  },
  {
    id: 'man_v_100', hanzi: '右边', word: '右边', pinyin: 'Yòubian',
    spanish: 'Lado derecho / a la derecha', translation: 'Lado derecho / a la derecha', phonetic: '[joʊ̯˥˩ pjan]',
    hskLevel: 'HSK2', category: 'Ubicación',
    exampleSentence: 'Túshūguǎn zài yòubian.',
    exampleTranslation: 'El acceso a la biblioteca se halla a mano derecha del corredor.'
  },
  {
    id: 'man_v_101', hanzi: '前边', word: '前边', pinyin: 'Qiánbian',
    spanish: 'Adelante / en la parte frontal', translation: 'Adelante / en la parte frontal', phonetic: '[tɕʰjɛn˧˥ pjan]',
    hskLevel: 'HSK2', category: 'Ubicación',
    exampleSentence: 'Gōngyuán jiù zài qiánbian.',
    exampleTranslation: 'El parque recreativo se visualiza justo al frente.'
  },
  {
    id: 'man_v_102', hanzi: '后边', word: '后边', pinyin: 'Hòubian',
    spanish: 'Atrás / en la parte posterior', translation: 'Atrás / en la parte posterior', phonetic: '[xoʊ̯˥˩ pjan]',
    hskLevel: 'HSK2', category: 'Ubicación',
    exampleSentence: 'Xuéxiào hòubian yǒu yí gè cāochǎng.',
    exampleTranslation: 'Detrás de la escuela se extiende una cancha deportiva comunitaria.'
  },
  {
    id: 'man_v_103', hanzi: '里边', word: '里边', pinyin: 'Lǐbian',
    spanish: 'Adentro / en el interior', translation: 'Adentro / en el interior', phonetic: '[li˨˩ pjan]',
    hskLevel: 'HSK1', category: 'Ubicación',
    exampleSentence: 'Wūzi lǐbian fēicháng nuǎnhuo.',
    exampleTranslation: 'El interior de la estancia resulta sumamente acogedor y cálido.'
  },
  {
    id: 'man_v_104', hanzi: '努力', word: '努力', pinyin: 'Nǔlì',
    spanish: 'Esforzado / empeño constante / diligente', translation: 'Esforzado / empeño constante / diligente', phonetic: '[nu˨˩ li˥˩]',
    hskLevel: 'HSK3', category: 'Valores',
    exampleSentence: 'Zhǐyào nǔlì, jiù néng shíxiàn mèngxiǎng.',
    exampleTranslation: 'Con esfuerzo tesonero y disciplina se alcanzan los mayores ideales.'
  },
  {
    id: 'man_v_105', hanzi: '坚持', word: '坚持', pinyin: 'Jiānchí',
    spanish: 'Perseverar / mantenerse firme en el propósito', translation: 'Perseverar / mantenerse firme en el propósito', phonetic: '[tɕjɛn˥ ʈʂʰʐ̩˧˥]',
    hskLevel: 'HSK4', category: 'Valores',
    exampleSentence: 'Jiānchí dàodǐ jiù shì shènglì.',
    exampleTranslation: 'Perseverar hasta el fin es la clave para la victoria personal y cívica.'
  },
  {
    id: 'man_v_106', hanzi: '环境', word: '环境', pinyin: 'Huánjìng',
    spanish: 'Medio ambiente / entorno natural y ecológico', translation: 'Medio ambiente / entorno natural y ecológico', phonetic: '[xwan˧˥ tɕiŋ˥˩]',
    hskLevel: 'HSK3', category: 'Sociedad',
    exampleSentence: 'Bǎohù shēngtài huánjìng shì měi ge rén de zérèn.',
    exampleTranslation: 'Proteger el medio ambiente ecológico es un deber ciudadano colectivo.'
  },
  {
    id: 'man_v_107', hanzi: '文化', word: '文化', pinyin: 'Wénhuà',
    spanish: 'Cultura / civilización y costumbres', translation: 'Cultura / civilización y costumbres', phonetic: '[wən˧˥ xwa˥˩]',
    hskLevel: 'HSK3', category: 'Cultura',
    exampleSentence: 'Zhōng-Sà liǎng guó wénhuà jiāoliú fánróng.',
    exampleTranslation: 'El intercambio cultural entre China y El Salvador florece con hermandad.'
  },
  {
    id: 'man_v_108', hanzi: '经济', word: '经济', pinyin: 'Jīngjì',
    spanish: 'Economía / desarrollo productivo', translation: 'Economía / desarrollo productivo', phonetic: '[tɕiŋ˥ tɕi˥˩]',
    hskLevel: 'HSK4', category: 'Economía',
    exampleSentence: 'Tuīdòng jīngjì fāzhǎn zàofú rénmín.',
    exampleTranslation: 'Impulsar el desarrollo económico redunda en bienestar para el pueblo.'
  },
  {
    id: 'man_v_109', hanzi: '合作', word: '合作', pinyin: 'Hézuò',
    spanish: 'Cooperación / trabajar juntos en armonía', translation: 'Cooperación / trabajar juntos en armonía', phonetic: '[xɤ˧˥ tswo˥˩]',
    hskLevel: 'HSK4', category: 'Sociedad',
    exampleSentence: 'Liǎng guó zài duō lǐngyù kāizhǎn wùshí hézuò.',
    exampleTranslation: 'Ambas naciones despliegan una cooperación pragmática en múltiples áreas.'
  },
  {
    id: 'man_v_110', hanzi: '全面', word: '全面', pinyin: 'Quánmiàn',
    spanish: 'Integral / exhaustivo / completo', translation: 'Integral / exhaustivo / completo', phonetic: '[tɕʰɥɛn˧˥ mjɛn˥˩]',
    hskLevel: 'HSK5', category: 'Cualidad',
    exampleSentence: 'Zhànlüè huǒbàn guānxì quánmiàn fāzhǎn.',
    exampleTranslation: 'Los lazos de asociación estratégica se consolidan de manera integral.'
  },
  {
    id: 'man_v_111', hanzi: '推动', word: '推动', pinyin: 'Tuīdòng',
    spanish: 'Impulsar / promover activamente', translation: 'Impulsar / promover activamente', phonetic: '[tʰweɪ̯˥ tʊŋ˥˩]',
    hskLevel: 'HSK5', category: 'Acción',
    exampleSentence: 'Gòngtóng tuīdòng jiàoyù shìyè jīnbù.',
    exampleTranslation: 'Impulsamos juntos el avance continuo de la educación de calidad.'
  },
  {
    id: 'man_v_112', hanzi: '和谐', word: '和谐', pinyin: 'Héxié',
    spanish: 'Armonioso / paz social y concordia', translation: 'Armonioso / paz social y concordia', phonetic: '[xɤ˧˥ ɕjɛ˧˥]',
    hskLevel: 'HSK6', category: 'Filosofía',
    exampleSentence: 'Jiànshè héxié shèhuì shì gòngtóng de yuànwàng.',
    exampleTranslation: 'Construir una sociedad armónica es la aspiración compartida de la ciudadanía.'
  },
  {
    id: 'man_v_113', hanzi: '命运共同体', word: '命运共同体', pinyin: 'Mìngyùn Gòngtóngtǐ',
    spanish: 'Comunidad de destino compartido para la humanidad', translation: 'Comunidad de destino compartido para la humanidad', phonetic: '[miŋ˥˩ yz̩n˥˩ kʊŋ˥˩ tʰʊŋ˧˥ tʰi˨˩˦]',
    hskLevel: 'HSK6', category: 'Diplomacia',
    exampleSentence: 'Gòujiàn rénlèi mìngyùn gòngtóngtǐ.',
    exampleTranslation: 'Construir una comunidad de futuro compartido para toda la humanidad.'
  },
  {
    id: 'man_v_114', hanzi: '和平', word: '和平', pinyin: 'Hépíng',
    spanish: 'Paz / concordia pacífica internacional', translation: 'Paz / concordia pacífica internacional', phonetic: '[xɤ˧˥ pʰiŋ˧˥]',
    hskLevel: 'HSK4', category: 'Valores',
    exampleSentence: 'Hépíng yǔ fāzhǎn shì shídài de zhǔtí.',
    exampleTranslation: 'La paz y el desarrollo equitativo constituyen los pilares de la era actual.'
  },
  {
    id: 'man_v_115', hanzi: '尊重', word: '尊重', pinyin: 'Zūnzhòng',
    spanish: 'Respetar / consideración y deferencia mutua', translation: 'Respetar / consideración y deferencia mutua', phonetic: '[tswən˥ ʈʂʊŋ˥˩]',
    hskLevel: 'HSK4', category: 'Valores',
    exampleSentence: 'Hùxiāng zūnzhòng shì jiāowǎng de jīchǔ.',
    exampleTranslation: 'El respeto mutuo es el cimiento indispensable de toda relación fructífera.'
  },
  {
    id: 'man_v_116', hanzi: '信任', word: '信任', pinyin: 'Xìnrèn',
    spanish: 'Confianza / fe y credibilidad recíproca', translation: 'Confianza / fe y credibilidad recíproca', phonetic: '[ɕin˥˩ ʐən˥˩]',
    hskLevel: 'HSK4', category: 'Valores',
    exampleSentence: 'Xìnrèn yào kào shíjiàn hé xíngdòng láo láo jiànlì.',
    exampleTranslation: 'La confianza se construye sólidamente a través de hechos rectos y coherentes.'
  },
  {
    id: 'man_v_117', hanzi: '传统', word: '传统', pinyin: 'Chuántǒng',
    spanish: 'Tradición / costumbres heredadas veneradas', translation: 'Tradición / costumbres heredadas veneradas', phonetic: '[ʈʂʰwan˧˥ tʰʊŋ˨˩˦]',
    hskLevel: 'HSK4', category: 'Cultura',
    exampleSentence: 'Zhōngguó chuántǒng jiérì fēicháng rènao.',
    exampleTranslation: 'Las festividades tradicionales chinas se viven con gran júbilo y reunión.'
  },
  {
    id: 'man_v_118', hanzi: '节日', word: '节日', pinyin: 'Jiérì',
    spanish: 'Fiesta / festival / día conmemorativo', translation: 'Fiesta / festival / día conmemorativo', phonetic: '[tɕjɛ˧˥ ʐʐ̩˥˩]',
    hskLevel: 'HSK3', category: 'Cultura',
    exampleSentence: 'Chūnjié shì zuì zhòngyào de chuántǒng jiérì.',
    exampleTranslation: 'El Festival de la Primavera (Año Nuevo Chino) es la fiesta más solemne y alegre.'
  },
  {
    id: 'man_v_119', hanzi: '春节', word: '春节', pinyin: 'Chūnjié',
    spanish: 'Fiesta de la Primavera / Año Nuevo Chino lunar', translation: 'Fiesta de la Primavera / Año Nuevo Chino lunar', phonetic: '[ʈʂʰwən˥ tɕjɛ˧˥]',
    hskLevel: 'HSK3', category: 'Cultura',
    exampleSentence: 'Chūnjié qījiān jiārén tuánjù yí táng.',
    exampleTranslation: 'Durante la Fiesta de la Primavera las familias se reúnen en un solo regocijo.'
  },
  {
    id: 'man_v_120', hanzi: '饺子', word: '饺子', pinyin: 'Jiǎozi',
    spanish: 'Jiaozi / empanadillas chinas tradicionales', translation: 'Jiaozi / empanadillas chinas tradicionales', phonetic: '[tɕjaʊ̯˨˩.tsz̩]',
    hskLevel: 'HSK3', category: 'Alimentos',
    exampleSentence: 'Chūnjié de shíhou wǒmen bāo jiǎozi.',
    exampleTranslation: 'En la víspera del Año Nuevo preparamos en familia ricos jiaozi de carne.'
  },
  {
    id: 'man_v_121', hanzi: '书法', word: '书法', pinyin: 'Shūfǎ',
    spanish: 'Caligrafía tradicional china con pincel y tinta', translation: 'Caligrafía tradicional china con pincel y tinta', phonetic: '[ʂu˥ fa˨˩˦]',
    hskLevel: 'HSK4', category: 'Cultura',
    exampleSentence: 'Tā de shūfǎ zuòpǐn jùyǒu hěn gāo de yìshù jiàzhí.',
    exampleTranslation: 'Sus obras de caligrafía con pincel poseen un elevado valor artístico.'
  },
  {
    id: 'man_v_122', hanzi: '京剧', word: '京剧', pinyin: 'Jīngjù',
    spanish: 'Ópera de Pekín / arte dramático clásico chino', translation: 'Ópera de Pekín / arte dramático clásico chino', phonetic: '[tɕiŋ˥ tɕy˥˩]',
    hskLevel: 'HSK4', category: 'Cultura',
    exampleSentence: 'Jīngjù shì Zhōngguó de guóbǎo zhī yī.',
    exampleTranslation: 'La Ópera de Pekín es considerada uno de los más excelsos tesoros nacionales.'
  },
  {
    id: 'man_v_123', hanzi: '图书', word: '图书', pinyin: 'Túshū',
    spanish: 'Libros y publicaciones encuadernadas', translation: 'Libros y publicaciones encuadernadas', phonetic: '[tʰu˧˥ ʂu˥]',
    hskLevel: 'HSK2', category: 'Educación',
    exampleSentence: 'Túshūguǎn lǐ cángshū liáng duō.',
    exampleTranslation: 'La biblioteca nacional custodia un rico y vasto acervo de obras impresas.'
  },
  {
    id: 'man_v_124', hanzi: '知识', word: '知识', pinyin: 'Zhīshi',
    spanish: 'Conocimiento / saberes científicos y humanísticos', translation: 'Conocimiento / saberes científicos y humanísticos', phonetic: '[ʈʂʐ̩˥ ʂʐ̩]',
    hskLevel: 'HSK3', category: 'Educación',
    exampleSentence: 'Zhīshi jiù shì lìliàng.',
    exampleTranslation: 'El conocimiento fundamentado es la mayor fuerza transformadora de la sociedad.'
  },
  {
    id: 'man_v_125', hanzi: '科学', word: '科学', pinyin: 'Kēxué',
    spanish: 'Ciencia / investigación metódica rigurosa', translation: 'Ciencia / investigación metódica rigurosa', phonetic: '[kʰɤ˥ ɕɥɛ˧˥]',
    hskLevel: 'HSK4', category: 'Educación',
    exampleSentence: 'Kēxué jìshù zhúbù gǎibiàn shìjiè.',
    exampleTranslation: 'La ciencia y la tecnología transforman de manera positiva el bienestar humano.'
  },
  {
    id: 'man_v_126', hanzi: '成功', word: '成功', pinyin: 'Chénggōng',
    spanish: 'Éxito / logro meritorio alcanzado con perseverancia', translation: 'Éxito / logro meritorio alcanzado con perseverancia', phonetic: '[ʈʂʰɤŋ˧˥ kʊŋ˥]',
    hskLevel: 'HSK3', category: 'Valores',
    exampleSentence: 'Zhùhè nǐ qǔdé le jùdà de chénggōng!',
    exampleTranslation: '¡Te felicitamos cordialmente por haber alcanzado un éxito tan meritorio!'
  },
  {
    id: 'man_v_127', hanzi: '未来', word: '未来', pinyin: 'Wèilái',
    spanish: 'Futuro / horizonte del porvenir promisorio', translation: 'Futuro / horizonte del porvenir promisorio', phonetic: '[weɪ̯˥˩ laɪ̯˧˥]',
    hskLevel: 'HSK3', category: 'Tiempo',
    exampleSentence: 'Qīngnián shì guójiā de wèilái.',
    exampleTranslation: 'La juventud estudiosa y cívica encarna el porvenir próspero de la patria.'
  },
  {
    id: 'man_v_128', hanzi: '幸福', word: '幸福', pinyin: 'Xìngfú',
    spanish: 'Felicidad / bienestar pleno de la familia', translation: 'Felicidad / bienestar pleno de la familia', phonetic: '[ɕiŋ˥˩ fu˧˥]',
    hskLevel: 'HSK3', category: 'Emociones',
    exampleSentence: 'Zhù nǐmen shēnghuó xìngfú mǎnmǎn!',
    exampleTranslation: '¡Les deseamos una vida colmada de ventura, plenitud y paz hogareña!'
  },
  {
    id: 'man_v_129', hanzi: '礼貌', word: '礼貌', pinyin: 'Lǐmào',
    spanish: 'Educación y cortesía en el trato social', translation: 'Educación y cortesía en el trato social', phonetic: '[li˨˩ maʊ̯˥˩]',
    hskLevel: 'HSK3', category: 'Cortesía',
    exampleSentence: 'Tā duì rén fēicháng yǒu lǐmào.',
    exampleTranslation: 'Él siempre demuestra una cortesía y deferencia impecable hacia las personas.'
  },
  {
    id: 'man_v_130', hanzi: '友谊', word: '友谊', pinyin: 'Yǒuyì',
    spanish: 'Amistad / confraternidad entre los pueblos', translation: 'Amistad / confraternidad entre los pueblos', phonetic: '[joʊ̯˨˩ i˥˩]',
    hskLevel: 'HSK4', category: 'Relaciones',
    exampleSentence: 'Zhōng-Sà yǒuyì chángcún, suìsuì fānghuá!',
    exampleTranslation: '¡Que la amistad chino-salvadoreña perdure por siempre floreciente y fructífera!'
  }
];
