import React, { useState } from 'react';
import {
  Volume2,
  Sparkles,
  Hash,
  Palette,
  Package,
  Search,
  BookOpen,
  Info,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import {
  ALPHABET_DATA,
  AlphabetLetter,
  SPELLING_CONVENTIONS,
  NUMBERS_CARDINALS_ORDINALS,
  NUMBER_RULES,
  numberToEnglishWords,
  COLORS_DATA,
  COLOR_IDIOMS,
  EVERYDAY_OBJECTS_CATEGORIES,
  EverydayObject
} from '../data/languages/englishBasicsData';
import { VariantType } from '../data/languages/englishData';
import { playAudioSpeech } from '../utils/audioSpeechHelper';

interface EnglishBasicsViewProps {
  variant: VariantType;
}

export default function EnglishBasicsView({ variant }: EnglishBasicsViewProps) {
  // Pestaña activa en Fundamentos: alphabet | numbers | colors | objects
  const [activeTab, setActiveTab] = useState<'alphabet' | 'numbers' | 'colors' | 'objects'>('alphabet');

  // Sintetizador de voz nativo Web Speech API robusto
  const speakText = (text: string) => {
    playAudioSpeech(text, variant === 'UK' ? 'en-GB' : 'en-US');
  };

  // =========================================================================
  // ESTADOS DEL ABECEDARIO
  // =========================================================================
  const [alphabetFilter, setAlphabetFilter] = useState<'all' | 'vowel' | 'consonant'>('all');
  const [alphabetSearch, setAlphabetSearch] = useState<string>('');

  const filteredAlphabet = ALPHABET_DATA.filter((item) => {
    if (alphabetFilter !== 'all' && item.type !== alphabetFilter) return false;
    if (alphabetSearch.trim()) {
      const q = alphabetSearch.toLowerCase().trim();
      return (
        item.letter.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.sampleWord.toLowerCase().includes(q) ||
        item.sampleWordEs.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // =========================================================================
  // ESTADOS DE LOS NÚMEROS Y CONVERSOR
  // =========================================================================
  const [converterInput, setConverterInput] = useState<string>('2026');
  const [numbersSearch, setNumbersSearch] = useState<string>('');
  const [numbersRange, setNumbersRange] = useState<'all' | '0-20' | '21-100' | '100+'>('all');

  const converterNumber = parseInt(converterInput, 10);
  const converterResult = !isNaN(converterNumber) && converterNumber >= 0 && converterNumber <= 999999999
    ? numberToEnglishWords(converterNumber)
    : 'Ingresa un número entero entre 0 y 999,999,999';

  const filteredNumbers = NUMBERS_CARDINALS_ORDINALS.filter((entry) => {
    if (numbersRange === '0-20' && (entry.number < 0 || entry.number > 20)) return false;
    if (numbersRange === '21-100' && (entry.number < 21 || entry.number > 100)) return false;
    if (numbersRange === '100+' && entry.number < 100) return false;

    if (numbersSearch.trim()) {
      const q = numbersSearch.toLowerCase().trim();
      return (
        entry.number.toString().includes(q) ||
        entry.cardinal.toLowerCase().includes(q) ||
        entry.ordinal.toLowerCase().includes(q) ||
        entry.ordinalAbbr.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // =========================================================================
  // ESTADOS DE LOS COLORES
  // =========================================================================
  const [colorCategory, setColorCategory] = useState<'all' | 'primary' | 'secondary' | 'neutral' | 'shades'>('all');
  const [colorSearch, setColorSearch] = useState<string>('');

  const filteredColors = COLORS_DATA.filter((color) => {
    if (colorCategory !== 'all' && color.category !== colorCategory) return false;
    if (colorSearch.trim()) {
      const q = colorSearch.toLowerCase().trim();
      return (
        color.nameEn.toLowerCase().includes(q) ||
        color.nameEs.toLowerCase().includes(q) ||
        (color.usVsUk && color.usVsUk.toLowerCase().includes(q))
      );
    }
    return true;
  });

  // =========================================================================
  // ESTADOS DE OBJETOS COTIDIANOS
  // =========================================================================
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(EVERYDAY_OBJECTS_CATEGORIES[0].id);
  const [objectsSearch, setObjectsSearch] = useState<string>('');

  const currentCategory = EVERYDAY_OBJECTS_CATEGORIES.find((c) => c.id === selectedCategoryId) || EVERYDAY_OBJECTS_CATEGORIES[0];

  const filteredObjects = currentCategory.items.filter((obj) => {
    if (!objectsSearch.trim()) return true;
    const q = objectsSearch.toLowerCase().trim();
    return (
      obj.nameEn.toLowerCase().includes(q) ||
      obj.nameEs.toLowerCase().includes(q) ||
      obj.pluralEn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6">
      {/* Banner de Fundamentos */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold font-mono tracking-wide backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>NIVEL FUNDACIONAL • THE BASICS</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight">
              Fundamentos Esenciales del Idioma Inglés
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              El abecedario fonético con IPA y reglas de deletreo, sistema numérico cardinal y ordinal con conversor en vivo, espectro cromático con expresiones idiomáticas y más de 190 objetos cotidianos con pronunciación nativa y artículos.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-white/20 self-start md:self-auto text-xs font-semibold">
            <Volume2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Voz nativa: {variant === 'UK' ? '🇬🇧 British English' : '🇺🇸 American English'}</span>
          </div>
        </div>

        {/* Pestañas de sub-navegación interna */}
        <div className="mt-6 flex overflow-x-auto scrollbar-none touch-scroll flex-nowrap sm:flex-wrap gap-2 pt-4 border-t border-white/15 max-w-full">
          <button
            onClick={() => setActiveTab('alphabet')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
              activeTab === 'alphabet'
                ? 'bg-white text-blue-900 shadow-md font-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Abecedario (26 Letras)</span>
          </button>

          <button
            onClick={() => setActiveTab('numbers')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
              activeTab === 'numbers'
                ? 'bg-white text-indigo-900 shadow-md font-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span>Números y Conversor</span>
          </button>

          <button
            onClick={() => setActiveTab('colors')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
              activeTab === 'colors'
                ? 'bg-white text-purple-900 shadow-md font-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Colores e Idioms</span>
          </button>

          <button
            onClick={() => setActiveTab('objects')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
              activeTab === 'objects'
                ? 'bg-white text-emerald-900 shadow-md font-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Objetos Cotidianos (190+)</span>
          </button>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 1. SECCIÓN: EL ABECEDARIO (THE ALPHABET) */}
      {/* ===================================================================== */}
      {activeTab === 'alphabet' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>The English Alphabet</span>
                  <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                    26 Letters (5 Vowels • 21 Consonants)
                  </span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Haz clic en el botón de audio de cualquier tarjeta para escuchar el nombre de la letra y su palabra de ejemplo.
                </p>
              </div>

              {/* Filtros de vocales/consonantes y búsqueda */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                  <button
                    onClick={() => setAlphabetFilter('all')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      alphabetFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Todas (26)
                  </button>
                  <button
                    onClick={() => setAlphabetFilter('vowel')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      alphabetFilter === 'vowel' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Vocales (5)
                  </button>
                  <button
                    onClick={() => setAlphabetFilter('consonant')}
                    className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                      alphabetFilter === 'consonant' ? 'bg-white text-purple-600 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Consonantes (21)
                  </button>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={alphabetSearch}
                    onChange={(e) => setAlphabetSearch(e.target.value)}
                    placeholder="Buscar letra o palabra..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Cuadrícula de 26 Tarjetas de Letras */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-5">
              {filteredAlphabet.map((letter) => {
                const isVowel = letter.type === 'vowel';
                return (
                  <div
                    key={letter.letter}
                    className={`rounded-2xl p-3.5 border transition-all duration-200 flex flex-col justify-between hover:shadow-md ${
                      isVowel
                        ? 'bg-blue-50/50 border-blue-200 hover:border-blue-400'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-2xl font-black text-slate-900 font-serif">
                            {letter.letter}
                          </span>
                          <span className="text-sm font-semibold text-slate-500">
                            {letter.letter.toLowerCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-1.5 py-0.2 rounded">
                            {letter.ipa}
                          </span>
                          <span className="text-[10px] text-slate-500 font-medium">
                            ({letter.phoneticEs})
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => speakText(`${letter.letter}, as in ${letter.sampleWord}`)}
                        className="p-1.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors cursor-pointer"
                        title={`Escuchar letra ${letter.letter} y ejemplo`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800">
                          {letter.sampleWord}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {letter.sampleWordIpa}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {letter.sampleWordEs}
                      </p>
                    </div>

                    <p className="text-[10px] text-slate-500 mt-2 line-clamp-2 leading-tight" title={letter.phoneticTip}>
                      💡 {letter.phoneticTip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tarjetas de convenciones de deletreo, símbolos y diferencias US vs UK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Símbolos y correos */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs">
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Deletreo de Correos Electrónicos y Símbolos Web</span>
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Al deletrear tu correo o un enlace web en inglés, nunca digas "arroba" ni "punto". Usa estas expresiones nativas:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-mono font-bold text-slate-800">@ (arroba)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">at /æt/</span>
                    <button
                      onClick={() => speakText('at')}
                      className="p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-mono font-bold text-slate-800">. (punto en web/email)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">dot /dɒt/</span>
                    <button
                      onClick={() => speakText('dot')}
                      className="p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-mono font-bold text-slate-800">_ (guion bajo)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">underscore</span>
                    <button
                      onClick={() => speakText('underscore')}
                      className="p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-mono font-bold text-slate-800">- (guion medio)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">hyphen / dash</span>
                    <button
                      onClick={() => speakText('hyphen, or dash')}
                      className="p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-mono font-bold text-slate-800">/ (barra diagonal)</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-blue-700">slash / forward slash</span>
                    <button
                      onClick={() => speakText('slash')}
                      className="p-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 cursor-pointer"
                    >
                      <Volume2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Letras Mudas y la diferencia con la letra Z */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div>
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-emerald-500" />
                  <span>Diferencia Crítica: La Letra Z (US vs UK)</span>
                </h4>
                <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-amber-900">🇺🇸 En Estados Unidos:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-amber-900">"Zee" /ziː/</span>
                      <button
                        onClick={() => speakText('Zee')}
                        className="p-1 rounded-md bg-amber-200 text-amber-900 hover:bg-amber-300 cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-amber-900">🇬🇧 En Reino Unido / Commonwealth:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-amber-900">"Zed" /zed/</span>
                      <button
                        onClick={() => {
                          if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                            window.speechSynthesis.cancel();
                            const u = new SpeechSynthesisUtterance('Zed');
                            u.lang = 'en-GB';
                            window.speechSynthesis.speak(u);
                          }
                        }}
                        className="p-1 rounded-md bg-amber-200 text-amber-900 hover:bg-amber-300 cursor-pointer"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2 mb-2">
                  <Info className="w-4 h-4 text-blue-500" />
                  <span>Letras Mudas Frecuentes (Silent Letters)</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-800">B muda:</span> climb, thumb, debt, doubt
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-800">K muda:</span> know, knee, knife, knock
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-800">W muda:</span> write, wrist, answer, sword
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="font-bold text-slate-800">L muda:</span> walk, talk, calm, half, would
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 2. SECCIÓN: NÚMEROS Y CONVERSOR INTERACTIVO */}
      {/* ===================================================================== */}
      {activeTab === 'numbers' && (
        <div className="space-y-6">
          {/* Conversor en Vivo de Números a Palabras */}
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xs">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-bold font-mono">
                <Hash className="w-3.5 h-3.5" />
                <span>CONVERSOR ALGORÍTMICO INTERACTIVO</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Escribe cualquier número y obtén su lectura exacta en inglés
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200">
                Aprende la estructura de guiones, centenas, millares y millones en tiempo real con pronunciación nativa.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-5">
                <label className="block text-xs font-bold text-indigo-200 mb-1.5 uppercase tracking-wider">
                  Número (0 a 999,999,999)
                </label>
                <input
                  type="number"
                  min="0"
                  max="999999999"
                  value={converterInput}
                  onChange={(e) => setConverterInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-indigo-400/30 text-white text-lg font-bold font-mono focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-indigo-300/50"
                  placeholder="Ej. 2026"
                />
              </div>

              <div className="md:col-span-7 bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/15 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
                    En Inglés Escrito
                  </span>
                  <button
                    type="button"
                    onClick={() => speakText(converterResult)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Pronunciar</span>
                  </button>
                </div>
                <p className="text-base sm:text-lg font-black text-amber-300 mt-2 capitalize font-mono leading-snug">
                  {converterResult}
                </p>
              </div>
            </div>

            {/* Accesos rápidos */}
            <div className="mt-4 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-indigo-300 font-semibold">Probar números de ejemplo:</span>
              {['7', '12', '21', '45', '100', '256', '1984', '2026', '1000000'].map((preset) => (
                <button
                  key={preset}
                  onClick={() => setConverterInput(preset)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold transition-colors cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Reglas de Oro de los Números en Inglés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {NUMBER_RULES.slice(0, 3).map((rule, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-black text-xs flex items-center justify-center mb-3">
                    #{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">{rule.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{rule.explanation}</p>
                </div>
                {rule.example && (
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-semibold text-indigo-800">Ejemplo: </span>
                    <span className="font-mono text-slate-700">{rule.example}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tabla de Referencia Cardinales y Ordinales */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Tabla Maestra de Cardinales y Ordinales
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Los ordinales indican orden, posición o fechas de calendario (1st, 2nd, 3rd, 4th...).
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                  <button
                    onClick={() => setNumbersRange('all')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      numbersRange === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setNumbersRange('0-20')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      numbersRange === '0-20' ? 'bg-white text-indigo-600 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    0 - 20
                  </button>
                  <button
                    onClick={() => setNumbersRange('21-100')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      numbersRange === '21-100' ? 'bg-white text-indigo-600 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    21 - 100
                  </button>
                  <button
                    onClick={() => setNumbersRange('100+')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      numbersRange === '100+' ? 'bg-white text-indigo-600 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    100+
                  </button>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={numbersSearch}
                    onChange={(e) => setNumbersSearch(e.target.value)}
                    placeholder="Filtrar número..."
                    className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto pt-4">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5 px-3">Cifra</th>
                    <th className="py-2.5 px-3">Cardinal</th>
                    <th className="py-2.5 px-3">Ordinal</th>
                    <th className="py-2.5 px-3">Abrev.</th>
                    <th className="py-2.5 px-3">Pronunciación Guía</th>
                    <th className="py-2.5 px-3">Audio</th>
                    <th className="py-2.5 px-3">Nota Pedagógica</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredNumbers.map((entry) => (
                    <tr key={entry.number} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-2.5 px-3 font-mono font-black text-slate-900">
                        {entry.number.toLocaleString()}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-indigo-700">
                        {entry.cardinal}
                      </td>
                      <td className="py-2.5 px-3 font-semibold text-slate-800">
                        {entry.ordinal}
                      </td>
                      <td className="py-2.5 px-3 font-mono text-slate-500 font-bold">
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">
                          {entry.ordinalAbbr}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 font-mono">
                        {entry.pronunciationEs}
                      </td>
                      <td className="py-2.5 px-3">
                        <button
                          type="button"
                          onClick={() => speakText(`${entry.cardinal}, ${entry.ordinal}`)}
                          className="p-1 rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100 cursor-pointer"
                          title={`Pronunciar ${entry.cardinal}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 text-[11px]">
                        {entry.note || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 3. SECCIÓN: COLORES E IDIOMS CROMÁTICOS */}
      {/* ===================================================================== */}
      {activeTab === 'colors' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>Espectro de Colores en Inglés</span>
                  <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
                    {filteredColors.length} Colores & Matices
                  </span>
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Diferencias ortográficas entre Color (US) y Colour (UK), Gray vs Grey, y ejemplos reales.
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold text-slate-600">
                  <button
                    onClick={() => setColorCategory('all')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      colorCategory === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => setColorCategory('primary')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      colorCategory === 'primary' ? 'bg-white text-purple-700 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Primarios
                  </button>
                  <button
                    onClick={() => setColorCategory('secondary')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      colorCategory === 'secondary' ? 'bg-white text-purple-700 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Secundarios
                  </button>
                  <button
                    onClick={() => setColorCategory('neutral')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      colorCategory === 'neutral' ? 'bg-white text-purple-700 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Neutros
                  </button>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={colorSearch}
                    onChange={(e) => setColorSearch(e.target.value)}
                    placeholder="Buscar color..."
                    className="pl-8 pr-3 py-1 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Grilla de Colores */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 pt-5">
              {filteredColors.map((color) => {
                const isLight = ['#FFFFFF', '#FFFF00', '#F5F5DC', '#FFC0CB', '#E6E6FA'].includes(color.hex.toUpperCase());
                return (
                  <div
                    key={color.id}
                    className="rounded-2xl border border-slate-200 bg-white p-3.5 flex flex-col justify-between hover:shadow-md transition-all group"
                  >
                    <div>
                      {/* Cuadro de Color */}
                      <div
                        className="w-full h-16 rounded-xl border border-slate-200/80 shadow-xs flex items-end justify-between p-2 relative overflow-hidden"
                        style={{ backgroundColor: color.hex }}
                      >
                        <span
                          className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded backdrop-blur-xs ${
                            isLight ? 'bg-black/20 text-slate-900' : 'bg-white/30 text-white'
                          }`}
                        >
                          {color.hex}
                        </span>
                        <button
                          type="button"
                          onClick={() => speakText(color.nameEn)}
                          className={`p-1 rounded-md backdrop-blur-xs cursor-pointer ${
                            isLight
                              ? 'bg-black/20 text-slate-900 hover:bg-black/30'
                              : 'bg-white/30 text-white hover:bg-white/40'
                          }`}
                          title={`Pronunciar ${color.nameEn}`}
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-2.5">
                        <div className="flex items-center justify-between">
                          <h4 className="font-black text-sm text-slate-900">
                            {color.nameEn}
                          </h4>
                          <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                            {color.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">
                          {color.nameEs}
                        </p>
                        {color.usVsUk && (
                          <span className="inline-block mt-1 text-[10px] font-semibold text-purple-700 bg-purple-50 px-1.5 py-0.2 rounded border border-purple-200">
                            {color.usVsUk}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-500 leading-tight">
                      <p className="italic text-slate-700">"{color.sampleSentenceEn}"</p>
                      <p className="text-slate-400 mt-0.5">{color.sampleSentenceEs}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sección de Modismos Cromáticos (Color Idioms) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Modismos y Expresiones con Colores (Color Idioms)</span>
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                En inglés, los colores expresan emociones, estados financieros y situaciones inesperadas sin traducción literal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {COLOR_IDIOMS.map((idiom, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col justify-between hover:bg-white hover:shadow-xs transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-sm text-purple-900">
                        "{idiom.idiom}"
                      </h4>
                      <button
                        type="button"
                        onClick={() => speakText(idiom.idiom)}
                        className="p-1 rounded-md bg-purple-100 text-purple-700 hover:bg-purple-200 cursor-pointer"
                        title="Pronunciar modismo"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-2 space-y-1 text-xs">
                      <p>
                        <strong className="text-slate-700">Significado real: </strong>
                        <span className="text-slate-900 font-semibold">{idiom.realMeaning}</span>
                      </p>
                      <p className="text-slate-500 text-[11px]">
                        Literal: <em>{idiom.literalTranslation}</em>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200/70 text-xs">
                    <p className="italic text-slate-800">"{idiom.exampleEn}"</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{idiom.exampleEs}</p>
                    <p className="text-[10px] text-amber-800 bg-amber-50 rounded-lg p-1.5 mt-2 border border-amber-200/60">
                      💡 {idiom.originNote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 4. SECCIÓN: OBJETOS COTIDIANOS (10 CATEGORÍAS, 190+ OBJETOS) */}
      {/* ===================================================================== */}
      {activeTab === 'objects' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs">
            {/* Selector de Categorías Temáticas */}
            <div className="pb-4 border-b border-slate-100 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>Vocabulario Temático de Objetos Cotidianos</span>
                    <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                      10 Categorías • 190+ Palabras con IPA
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Aprende el artículo indefinido correcto (a / an), forma plural irregular y variantes de inglés americano vs británico.
                  </p>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={objectsSearch}
                    onChange={(e) => setObjectsSearch(e.target.value)}
                    placeholder="Buscar objeto..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Botones de las 10 Categorías */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar">
                {EVERYDAY_OBJECTS_CATEGORIES.map((cat) => {
                  const isSelected = cat.id === selectedCategoryId;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategoryId(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-xs font-black'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span>{cat.iconEmoji}</span>
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {cat.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Encabezado de la Categoría Seleccionada */}
            <div className="py-3 flex items-center justify-between text-xs text-slate-600 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentCategory.iconEmoji}</span>
                <span className="font-bold text-slate-900">{currentCategory.name} ({currentCategory.englishTitle})</span>
                <span>• {currentCategory.description}</span>
              </div>
              <span className="font-mono text-emerald-700 font-bold">
                Mostrando {filteredObjects.length} de {currentCategory.items.length} objetos
              </span>
            </div>

            {/* Grilla de Objetos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 pt-4">
              {filteredObjects.map((obj) => (
                <div
                  key={obj.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col justify-between hover:shadow-md hover:border-emerald-300 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-3xl p-1 bg-slate-50 rounded-xl border border-slate-100">
                          {obj.emoji}
                        </span>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded border border-emerald-200 font-mono">
                              {obj.article}
                            </span>
                            <h4 className="font-black text-sm text-slate-900">
                              {obj.nameEn}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-600 font-medium">
                            {obj.nameEs}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => speakText(`${obj.article} ${obj.nameEn}`)}
                        className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors cursor-pointer"
                        title={`Escuchar "${obj.article} ${obj.nameEn}"`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-3 space-y-1 text-xs">
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Fonética: <strong className="font-mono text-slate-700">{obj.ipa}</strong></span>
                        <span>Plural: <strong className="text-slate-800">{obj.pluralEn}</strong></span>
                      </div>

                      {obj.usVsUkNote && (
                        <div className="p-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 text-[10px] font-medium">
                          🌐 {obj.usVsUkNote}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] leading-tight">
                    <p className="italic text-slate-800">"{obj.exampleEn}"</p>
                    <p className="text-slate-400 mt-0.5">{obj.exampleEs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
