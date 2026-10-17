export interface ArabicLetter {
  letter: string;
  name: string;
  transliteration: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  type: 'solar' | 'lunar';
  salvadoranMnemonic: string;
}

export const ARABIC_ALPHABET_DATA: ArabicLetter[] = [
  { letter: 'ا', name: 'Alif', transliteration: 'ā / a', isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا', type: 'lunar', salvadoranMnemonic: 'Como la "a" abierta en San Salvador; no se une a la izquierda.' },
  { letter: 'ب', name: 'Bāʾ', transliteration: 'b', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', type: 'lunar', salvadoranMnemonic: 'Un barquito con un punto abajo; suena como "b" en barro o pupusa.' },
  { letter: 'ت', name: 'Tāʾ', transliteration: 't', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', type: 'solar', salvadoranMnemonic: 'Dos puntos arriba sonriendo; "t" clara como en Torola.' },
  { letter: 'ث', name: 'Thāʾ', transliteration: 'th', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', type: 'solar', salvadoranMnemonic: 'Tres puntos arriba; sonido como la "z" española peninsular o "th" inglesa en think.' },
  { letter: 'ج', name: 'Jīm', transliteration: 'j / dj', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', type: 'lunar', salvadoranMnemonic: 'Un punto en la barriga; como la "y" fuerte o "j" en jeep.' },
  { letter: 'ح', name: 'Ḥāʾ', transliteration: 'ḥ', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', type: 'lunar', salvadoranMnemonic: 'Sin puntos; suspiro faríngeo limpio como limpiar un vidrio con el aliento.' },
  { letter: 'خ', name: 'Khāʾ', transliteration: 'kh', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', type: 'lunar', salvadoranMnemonic: 'Un punto arriba; sonido áspero como la "j" en jilote o jícara.' },
  { letter: 'د', name: 'Dāl', transliteration: 'd', isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', type: 'solar', salvadoranMnemonic: 'Como "d" en Danza; no se conecta a la letra siguiente.' },
  { letter: 'ذ', name: 'Dhāl', transliteration: 'dh', isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', type: 'solar', salvadoranMnemonic: 'Dál con un punto; como la "th" en the en inglés o la d interdental suave.' },
  { letter: 'ر', name: 'Rāʾ', transliteration: 'r', isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', type: 'solar', salvadoranMnemonic: 'Como un tobogán hacia abajo; "r" simple vibrante como en río.' },
  { letter: 'ز', name: 'Zāy', transliteration: 'z', isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', type: 'solar', salvadoranMnemonic: 'Rā con punto arriba; zumbido de abeja "z" sonoro.' },
  { letter: 'س', name: 'Sīn', transliteration: 's', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', type: 'solar', salvadoranMnemonic: 'Tres dientes pequeños; "s" suave y clara como en Sonsonate.' },
  { letter: 'ش', name: 'Shīn', transliteration: 'sh', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', type: 'solar', salvadoranMnemonic: 'Tres dientes con tres puntos; sonido "sh" como en chucho o show.' },
  { letter: 'ص', name: 'Ṣād', transliteration: 'ṣ', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', type: 'solar', salvadoranMnemonic: '"S" enfática y profunda, bajando el fondo de la lengua.' },
  { letter: 'ض', name: 'Ḍād', transliteration: 'ḍ', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', type: 'solar', salvadoranMnemonic: 'La letra insignia del idioma ("Lughat ad-Dad"); "d" enfática y resonante.' },
  { letter: 'ط', name: 'Ṭāʾ', transliteration: 'ṭ', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', type: 'solar', salvadoranMnemonic: '"T" enfática y velarizada, más grave y contundente.' },
  { letter: 'ظ', name: 'Ẓāʾ', transliteration: 'ẓ', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', type: 'solar', salvadoranMnemonic: '"Dh" enfática interdental con resonancia faríngea profunda.' },
  { letter: 'ع', name: 'ʿAyn', transliteration: 'ʿ', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', type: 'lunar', salvadoranMnemonic: 'Fricativa faríngea sonora única; presionar la garganta al pronunciar "a".' },
  { letter: 'غ', name: 'Ghayn', transliteration: 'gh', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', type: 'lunar', salvadoranMnemonic: 'Como la "r" francesa arrastrada o hacer gárgaras muy suaves.' },
  { letter: 'ف', name: 'Fāʾ', transliteration: 'f', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', type: 'lunar', salvadoranMnemonic: 'Un punto arriba con lazo; "f" labiodental como en flor.' },
  { letter: 'ق', name: 'Qāf', transliteration: 'q', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', type: 'lunar', salvadoranMnemonic: 'Dos puntos arriba; "k" uvular profunda originada en la campanilla.' },
  { letter: 'ك', name: 'Kāf', transliteration: 'k', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', type: 'lunar', salvadoranMnemonic: '"K" común como en Cuscatlán; adentro lleva una mini kaf o hamza.' },
  { letter: 'ل', name: 'Lām', transliteration: 'l', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', type: 'solar', salvadoranMnemonic: 'Como un bastón de anciano; "l" limpia como en Lempa.' },
  { letter: 'م', name: 'Mīm', transliteration: 'm', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', type: 'lunar', salvadoranMnemonic: 'Un circulito con cola; "m" dulce como en Morazán.' },
  { letter: 'ن', name: 'Nūn', transliteration: 'n', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', type: 'solar', salvadoranMnemonic: 'Un cuenco con una semilla adentro; "n" como en Nahuizalco.' },
  { letter: 'ه', name: 'Hāʾ', transliteration: 'h', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', type: 'lunar', salvadoranMnemonic: '"H" aspirada suave en la glotis como en hotel en inglés.' },
  { letter: 'و', name: 'Wāw', transliteration: 'w / ū', isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', type: 'lunar', salvadoranMnemonic: 'Semivocal "w" o "u" larga; no se une por la izquierda.' },
  { letter: 'ي', name: 'Yāʾ', transliteration: 'y / ī', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', type: 'lunar', salvadoranMnemonic: 'Como un cisne con dos puntos abajo; "y" o "i" larga.' }
];

export interface ArabicNumberItem {
  number: number;
  easternArabic: string;
  arabicName: string;
  transliteration: string;
  notes: string;
}

export const ARABIC_NUMBERS_DATA: ArabicNumberItem[] = [
  { number: 0, easternArabic: '٠', arabicName: 'صِفْر', transliteration: 'Sifr', notes: 'Origen directo de nuestra palabra "cero" y "cifra".' },
  { number: 1, easternArabic: '١', arabicName: 'وَاحِد', transliteration: 'Wahid', notes: 'Masculino: Wahid, Femenino: Wahida.' },
  { number: 2, easternArabic: '٢', arabicName: 'اِثْنَان', transliteration: 'Ithnan', notes: 'Dual: Ithnan / Ithnayn.' },
  { number: 3, easternArabic: '٣', arabicName: 'ثَلَاثَة', transliteration: 'Thalatha', notes: 'Invierte el género con el sustantivo contado.' },
  { number: 4, easternArabic: '٤', arabicName: 'أَرْبَعَة', transliteration: 'Arbaʿa', notes: 'Base de las 4 estaciones y 4 puntos cardinales.' },
  { number: 5, easternArabic: '٥', arabicName: 'خَمْسَة', transliteration: 'Khamsa', notes: 'El amuleto protector tradicional de la Mano de Fátima (Khamsa).' },
  { number: 6, easternArabic: '٦', arabicName: 'سِتَّة', transliteration: 'Sitta', notes: 'Sitta ayyam (seis días).' },
  { number: 7, easternArabic: '٧', arabicName: 'سَبْعَة', transliteration: 'Sabʿa', notes: 'Sabʿa samawat (siete cielos).' },
  { number: 8, easternArabic: '٨', arabicName: 'ثَمَانِيَة', transliteration: 'Thamaniya', notes: 'Thamaniya tullab (ocho estudiantes).' },
  { number: 9, easternArabic: '٩', arabicName: 'تِسْعَة', transliteration: 'Tisʿa', notes: 'Tisʿa kutub.' },
  { number: 10, easternArabic: '١٠', arabicName: 'عَشَرَة', transliteration: 'ʿAshara', notes: 'ʿAshara rukaʿat.' },
  { number: 20, easternArabic: '٢٠', arabicName: 'عِشْرُونَ', transliteration: 'ʿIshrun', notes: 'Plural regular: ʿIshrun / ʿIshrin.' },
  { number: 30, easternArabic: '٣٠', arabicName: 'ثَلَاثُونَ', transliteration: 'Thalathun', notes: 'Thalathun yawman.' },
  { number: 40, easternArabic: '٤٠', arabicName: 'أَرْبَعُونَ', transliteration: 'Arbaʿun', notes: 'Las mil y una noches (Alí Babá).' },
  { number: 50, easternArabic: '٥٠', arabicName: 'خَمْسُونَ', transliteration: 'Khamsun', notes: 'Khamsun sana (cincuenta años).' },
  { number: 100, easternArabic: '١٠٠', arabicName: 'مِائَة', transliteration: 'Miʾa', notes: 'Miʾa / Miʾat bayt.' },
  { number: 1000, easternArabic: '١٠٠٠', arabicName: 'أَلْف', transliteration: 'Alf', notes: 'Alf layla wa layla (Mil y una noches).' }
];

export function numberToArabicWords(num: number): string {
  if (num === 0) return 'صِفْر (Sifr)';
  if (num < 0) return 'سَالِب ' + numberToArabicWords(-num);
  
  const ones = ['', 'وَاحِد (Wahid)', 'اِثْنَان (Ithnan)', 'ثَلَاثَة (Thalatha)', 'أَرْبَعَة (Arbaʿa)', 'خَمْسَة (Khamsa)', 'سِتَّة (Sitta)', 'سَبْعَة (Sabʿa)', 'ثَمَانِيَة (Thamaniya)', 'تِسْعَة (Tisʿa)'];
  const teens = ['عَشَرَة (ʿAshara)', 'أَحَدَ عَشَرَ (Ahada ʿAshar)', 'اثْنَا عَشَرَ (Ithna ʿAshar)', 'ثَلَاثَةَ عَشَرَ (Thalathata ʿAshar)', 'أَرْبَعَةَ عَشَرَ (Arbaʿata ʿAshar)', 'خَمْسَةَ عَشَرَ (Khamsata ʿAshar)', 'سِتَّةَ عَشَرَ (Sittata ʿAshar)', 'سَبْعَةَ عَشَرَ (Sabʿata ʿAshar)', 'ثَمَانِيَةَ عَشَرَ (Thamaniyata ʿAshar)', 'تِسْعَةَ عَشَرَ (Tisʿata ʿAshar)'];
  const tens = ['', '', 'عِشْرُونَ (ʿIshrun)', 'ثَلَاثُونَ (Thalathun)', 'أَرْبَعُونَ (Arbaʿun)', 'خَمْسُونَ (Khamsun)', 'سِتُّونَ (Sittun)', 'سَبْعُونَ (Sabʿun)', 'ثَمَانُونَ (Thamanun)', 'تِسْعُونَ (Tisʿun)'];
  
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) {
    const rem = num % 10;
    const tenVal = Math.floor(num / 10);
    if (rem === 0) return tens[tenVal];
    return ones[rem].split(' ')[0] + ' وَ' + tens[tenVal];
  }
  if (num === 100) return 'مِائَة (Miʾa)';
  if (num < 1000) {
    const h = Math.floor(num / 100);
    const r = num % 100;
    const hName = h === 1 ? 'مِائَة' : h === 2 ? 'مِائَتَان' : ones[h].split(' ')[0] + ' مِائَة';
    if (r === 0) return hName;
    return hName + ' وَ' + numberToArabicWords(r);
  }
  return num.toString();
}

export const ARABIC_COLORS_DATA = [
  { name: 'Rojo', masculine: 'أَحْمَر (Ahmar)', feminine: 'حَمْرَاء (Hamraʾ)', hex: '#DC2626', idiom: 'Al-Bahr al-Ahmar (El Mar Rojo) y la flor de izote en primavera.' },
  { name: 'Azul', masculine: 'أَزْرَق (Azraq)', feminine: 'زَرْقَاء (Zarqaʾ)', hex: '#2563EB', idiom: 'Lawn as-samaʾ (Color del cielo cuscatleco).' },
  { name: 'Verde', masculine: 'أَخْضَر (Akhdar)', feminine: 'خَضْرَاء (Khadraʾ)', hex: '#16A34A', idiom: 'Símbolo supremo de fertilidad, la milpa y los valles de Morazán.' },
  { name: 'Blanco', masculine: 'أَبْيَض (Abyad)', feminine: 'بَيْضَاء (Baydaʾ)', hex: '#F8FAFC', idiom: 'Qalb abyad (Corazón blanco / persona bondadosa y sin malicia).' },
  { name: 'Negro', masculine: 'أَسْوَد (Aswad)', feminine: 'سَوْدَاء (Sawdaʾ)', hex: '#0F172A', idiom: 'Al-Hajar al-Aswad (La piedra negra) y noche estrellada.' },
  { name: 'Amarillo', masculine: 'أَصْفَر (Asfar)', feminine: 'صَفْرَاء (Safraʾ)', hex: '#EAB308', idiom: 'Color del sol y de las espigas de maíz maduro.' },
  { name: 'Marrón / Café', masculine: 'بُنِّيّ (Bunniyy)', feminine: 'بُنِّيَّة (Bunniyya)', hex: '#78350F', idiom: 'Derivado directamente de "Bunn" (grano de café salvadoreño).' },
  { name: 'Naranja', masculine: 'بُرْتُقَالِيّ (Burtuqaliyy)', feminine: 'بُرْتُقَالِيَّة (Burtuqaliyya)', hex: '#EA580C', idiom: 'Derivado del nombre de la naranja (Burtuqal).' }
];

export const ARABIC_OBJECTS_CATEGORIES = [
  {
    category: 'Hogar y Hospitalidad (Al-Bayt wa ad-Diyafa)',
    items: [
      { arabic: 'بَيْت', translit: 'Bayt', spanish: 'Casa / Hogar' },
      { arabic: 'بَاب', translit: 'Bab', spanish: 'Puerta' },
      { arabic: 'نَافِذَة', translit: 'Nafidha', spanish: 'Ventana' },
      { arabic: 'طَاوِلَة', translit: 'Tawila', spanish: 'Mesa' },
      { arabic: 'كُرْسِيّ', translit: 'Kursiyy', spanish: 'Silla' },
      { arabic: 'فِنْجَان', translit: 'Finjan', spanish: 'Tacita de café árabe' }
    ]
  },
  {
    category: 'Alimentos y Tradición (At-Taʿam wa at-Turath)',
    items: [
      { arabic: 'خُبْز', translit: 'Khubz', spanish: 'Pan (pan pita)' },
      { arabic: 'قَهْوَة', translit: 'Qahwa', spanish: 'Café (origen etimológico mundial)' },
      { arabic: 'شَاي', translit: 'Shay', spanish: 'Té caliente con menta' },
      { arabic: 'زَيْتُون', translit: 'Zaytun', spanish: 'Aceitunas' },
      { arabic: 'زَيْت الزَّيْتُون', translit: 'Zayt az-zaytun', spanish: 'Aceite de oliva virgen' },
      { arabic: 'حُمُّص', translit: 'Hummus', spanish: 'Garbanzos / Crema de garbanzo' }
    ]
  },
  {
    category: 'Escuela y Aprendizaje (Al-Madrasa wa at-Taʿallum)',
    items: [
      { arabic: 'كِتَاب', translit: 'Kitab', spanish: 'Libro' },
      { arabic: 'قَلَم', translit: 'Qalam', spanish: 'Bolígrafo / Pluma' },
      { arabic: 'دَفْتَر', translit: 'Daftar', spanish: 'Cuaderno de notas' },
      { arabic: 'مَدْرَسَة', translit: 'Madrasa', spanish: 'Escuela / Colegio' },
      { arabic: 'جَامِعَة', translit: 'Jamiʿa', spanish: 'Universidad' },
      { arabic: 'أُسْتَاذ', translit: 'Ustadh', spanish: 'Profesor / Maestro' }
    ]
  }
];
