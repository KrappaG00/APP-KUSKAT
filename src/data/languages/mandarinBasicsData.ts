export interface MandarinPinyinItem {
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
