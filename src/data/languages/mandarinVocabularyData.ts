export interface MandarinVocabItem {
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
  { id: 'man_v_06', hanzi: '萨尔瓦多', pinyin: "Sà'ěrwǎduō", spanish: 'El Salvador (Cuscatlán)', hskLevel: 'HSK1', category: 'Geografía' },
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
