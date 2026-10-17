export interface ArabicVocabItem {
  id: string;
  root: string;
  arabic: string;
  transliteration: string;
  spanish: string;
  category: string;
  frequencyBand: 'top500' | 'top1000' | 'top2000' | 'top5000' | 'advanced';
}

export const ARABIC_VOCABULARY_CORPUS: ArabicVocabItem[] = [
  { id: 'ar_v_01', root: 'K-T-B', arabic: 'كِتَاب', transliteration: 'Kitab', spanish: 'Libro', category: 'Educación', frequencyBand: 'top500' },
  { id: 'ar_v_02', root: 'B-Y-T', arabic: 'بَيْت', transliteration: 'Bayt', spanish: 'Casa / Hogar', category: 'Hogar', frequencyBand: 'top500' },
  { id: 'ar_v_03', root: 'S-L-M', arabic: 'سَلَام', transliteration: 'Salam', spanish: 'Paz / Saludo', category: 'Valores', frequencyBand: 'top500' },
  { id: 'ar_v_04', root: 'Q-H-W', arabic: 'قَهْوَة', transliteration: 'Qahwa', spanish: 'Café', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_05', root: 'M-D-N', arabic: 'مَدِينَة', transliteration: 'Madina', spanish: 'Ciudad', category: 'Geografía', frequencyBand: 'top500' },
  { id: 'ar_v_06', root: "'A-M-L", arabic: 'عَمَل', transliteration: "'Amal", spanish: 'Trabajo / Labor', category: 'Profesión', frequencyBand: 'top500' },
  { id: 'ar_v_07', root: 'W-L-D', arabic: 'وَلَد', transliteration: 'Walad', spanish: 'Niño / Muchacho', category: 'Familia', frequencyBand: 'top500' },
  { id: 'ar_v_08', root: 'B-N-T', arabic: 'بِنْت', transliteration: 'Bint', spanish: 'Niña / Hija', category: 'Familia', frequencyBand: 'top500' },
  { id: 'ar_v_09', root: 'Z-Y-T', arabic: 'زَيْت', transliteration: 'Zayt', spanish: 'Aceite (préstamo en castellano)', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_10', root: 'S-K-R', arabic: 'سُكَّر', transliteration: 'Sukkar', spanish: 'Azúcar (préstamo en castellano)', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_11', root: "'A-Q-D", arabic: 'عَقْد', transliteration: "'Aqd", spanish: 'Contrato legal', category: 'Derecho', frequencyBand: 'top1000' },
  { id: 'ar_v_12', root: 'S-F-R', arabic: 'سَفَارَة', transliteration: 'Safara', spanish: 'Embajada', category: 'Diplomacia', frequencyBand: 'top1000' },
  { id: 'ar_v_13', root: 'I-Q-T', arabic: 'اِقْتِصَاد', transliteration: 'Iqtisad', spanish: 'Economía', category: 'Economía', frequencyBand: 'top1000' },
  { id: 'ar_v_14', root: 'T-R-J', arabic: 'تَرْجَمَة', transliteration: 'Tarjama', spanish: 'Traducción', category: 'Lenguaje', frequencyBand: 'top1000' },
  { id: 'ar_v_15', root: 'F-L-S', arabic: 'فِلَسْطِين', transliteration: 'Filastin', spanish: 'Palestina (cuna de la diáspora salvadoreña)', category: 'Historia', frequencyBand: 'top500' },
  { id: 'ar_v_16', root: 'B-Y-T', arabic: 'بَيْت لَحْم', transliteration: 'Bayt Lahm', spanish: 'Belén (ciudad hermana de familias en El Salvador)', category: 'Geografía', frequencyBand: 'top500' },
  { id: 'ar_v_17', root: 'C-U-S', arabic: 'كُوسْكَاتْلَان', transliteration: 'Kuskatlan', spanish: 'Cuscatlán (Tierra de cosas preciosas)', category: 'Cultura', frequencyBand: 'top500' },
  { id: 'ar_v_18', root: 'H-B-B', arabic: 'حَبِيب', transliteration: 'Habib', spanish: 'Amado / Querido amigo', category: 'Afecto', frequencyBand: 'top500' },
  { id: 'ar_v_19', root: 'Sh-K-R', arabic: 'شُكْرًا', transliteration: 'Shukran', spanish: 'Gracias', category: 'Cortesía', frequencyBand: 'top500' },
  { id: 'ar_v_20', root: "'A-F-W", arabic: 'عَفْوًا', transliteration: "'Afwan", spanish: 'De nada / Disculpe', category: 'Cortesía', frequencyBand: 'top500' }
];
