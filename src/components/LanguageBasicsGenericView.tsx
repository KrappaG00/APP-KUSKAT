import React, { useState, useMemo } from 'react';
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
  RotateCcw,
} from 'lucide-react';
import { getLanguageBasics, LANGUAGES_CATALOG } from '../data/languages/languagesRegistry';

interface LanguageBasicsGenericViewProps {
  languageId: string;
}

export default function LanguageBasicsGenericView({ languageId }: LanguageBasicsGenericViewProps) {
  const basicsData = useMemo(() => getLanguageBasics(languageId), [languageId]);
  const langManifest = useMemo(() => LANGUAGES_CATALOG.find((l) => l.id === languageId), [languageId]);

  const [activeTab, setActiveTab] = useState<'alphabet' | 'numbers' | 'colors' | 'objects'>('alphabet');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [converterInput, setConverterInput] = useState<number>(12);

  // Sintetizador de voz Web Speech API
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (languageId === 'german') utterance.lang = 'de-DE';
      else if (languageId === 'arabic') utterance.lang = 'ar-SA';
      else if (languageId === 'mandarin') utterance.lang = 'zh-CN';
      else utterance.lang = 'es-SV'; // Para náhuat, lenca y kakawira usamos fonética
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!basicsData) {
    return (
      <div className="p-8 text-center text-slate-500">
        No hay datos de fundamentos disponibles para este idioma.
      </div>
    );
  }

  // Filtrado de alfabeto / fonética
  const filteredAlphabet = useMemo(() => {
    if (!basicsData.alphabet) return [];
    if (!searchTerm.trim()) return basicsData.alphabet;
    const q = searchTerm.toLowerCase().trim();
    return basicsData.alphabet.filter((item: any) => {
      const name = (item.name || item.pinyin || item.letter || '').toLowerCase();
      const translit = (item.transliteration || item.spanish || '').toLowerCase();
      const mnem = (item.salvadoranMnemonic || '').toLowerCase();
      return name.includes(q) || translit.includes(q) || mnem.includes(q);
    });
  }, [basicsData.alphabet, searchTerm]);

  // Filtrado de números
  const filteredNumbers = useMemo(() => {
    if (!basicsData.numbers) return [];
    if (!searchTerm.trim()) return basicsData.numbers;
    const q = searchTerm.toLowerCase().trim();
    return basicsData.numbers.filter((num: any) => {
      const nStr = num.number?.toString() || '';
      const name = (num.name || num.arabicName || num.hanzi || num.pinyin || '').toLowerCase();
      const translit = (num.transliteration || num.spanish || '').toLowerCase();
      const notes = (num.notes || '').toLowerCase();
      return nStr.includes(q) || name.includes(q) || translit.includes(q) || notes.includes(q);
    });
  }, [basicsData.numbers, searchTerm]);

  // Conversión en vivo del algoritmo
  const convertedWord = useMemo(() => {
    if (typeof basicsData.numberToWords === 'function') {
      try {
        return basicsData.numberToWords(converterInput);
      } catch {
        return 'Número no disponible';
      }
    }
    return '';
  }, [basicsData, converterInput]);

  return (
    <div className="space-y-6">
      {/* Encabezado del Módulo */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fundamentos Esenciales • {langManifest?.name}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Alfabeto, Números, Colores y Objetos Cotidianos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Módulo interactivo completo diseñado para hispanohablantes de El Salvador. Incluye pronunciación fonética,
            conversor numérico en tiempo real y léxico de la vida diaria sin necesidad de enlaces externos.
          </p>

          {/* Selector de pestañas internas */}
          <div className="pt-2 flex overflow-x-auto scrollbar-none touch-scroll flex-nowrap sm:flex-wrap gap-2 max-w-full">
            <button
              onClick={() => { setActiveTab('alphabet'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'alphabet'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{languageId === 'mandarin' ? 'Fonética y Tonos' : 'Alfabeto / Escritura'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('numbers'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'numbers'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <Hash className="w-4 h-4" />
              <span>Números y Conversor</span>
            </button>

            <button
              onClick={() => { setActiveTab('colors'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'colors'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Colores e Idioms</span>
            </button>

            <button
              onClick={() => { setActiveTab('objects'); setSearchTerm(''); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shrink-0 ${
                activeTab === 'objects'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Objetos Cotidianos</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: ALFABETO / FONÉTICA / TONOS */}
      {/* ==================================================================== */}
      {activeTab === 'alphabet' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar letra, pronunciación o mnemotecnia..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 px-2 font-mono">
              Mostrando {filteredAlphabet.length} elementos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredAlphabet.map((item: any, idx: number) => {
              const mainSymbol = item.letter || item.pinyin || item.isolated || item.hanziExample || '';
              const subName = item.name || item.spanish || '';
              const ipa = item.transliteration || item.ipa || item.pinyin || '';
              const mnemonic = item.salvadoranMnemonic || item.notes || '';

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-indigo-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-black text-indigo-950 font-serif">
                      {mainSymbol}
                    </span>
                    <button
                      onClick={() => speakText(mainSymbol)}
                      className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer"
                      title="Escuchar audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-800">{subName}</span>
                      <span className="text-xs font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-md font-semibold">
                        {ipa}
                      </span>
                    </div>

                    {item.type && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.type === 'solar' ? '☀️ Letra Solar' : item.type === 'lunar' ? '🌙 Letra Lunar' : item.type}
                      </span>
                    )}

                    {mnemonic && (
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <span className="font-semibold text-slate-700">Mnemotecnia:</span> {mnemonic}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: NÚMEROS Y CONVERSOR ALGORÍTMICO EN TIEMPO REAL */}
      {/* ==================================================================== */}
      {activeTab === 'numbers' && (
        <div className="space-y-6">
          {/* Conversor en vivo */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-6 text-white shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Hash className="w-6 h-6 text-white" />
                <h3 className="text-lg font-black tracking-tight">
                  Conversor Algorítmico Numérico en Vivo
                </h3>
              </div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Motor Nativo KUSKAT
              </span>
            </div>

            <p className="text-amber-100 text-xs sm:text-sm">
              Escribe cualquier número entero para generar instantáneamente su expresión gramatical exacta en {langManifest?.name}:
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="number"
                min="0"
                max="9999"
                value={converterInput}
                onChange={(e) => setConverterInput(parseInt(e.target.value) || 0)}
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 font-black text-lg focus:outline-hidden w-full sm:w-48 shadow-inner"
              />
              <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center justify-between">
                <span className="text-sm sm:text-base font-black tracking-wide text-white">
                  {convertedWord || 'Ingresa un número'}
                </span>
                <button
                  onClick={() => speakText(convertedWord)}
                  className="p-1.5 rounded-lg bg-white/20 text-white hover:bg-white/30 cursor-pointer"
                  title="Escuchar audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabla de Números */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar número en la lista..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden font-medium"
                />
              </div>
              <span className="text-xs font-bold text-slate-500 font-mono">
                {filteredNumbers.length} números registrados
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-black uppercase text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Cifra</th>
                    <th className="py-3 px-4">Escritura Vernácula</th>
                    <th className="py-3 px-4">Transliteración / Pinyin</th>
                    <th className="py-3 px-4">Español / Notas</th>
                    <th className="py-3 px-4 text-center">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredNumbers.map((num: any, idx: number) => {
                    const cifra = num.number;
                    const nativeTxt = num.name || num.arabicName || num.hanzi || num.easternArabic || '';
                    const transTxt = num.transliteration || num.pinyin || '';
                    const noteTxt = num.notes || num.spanish || '';

                    return (
                      <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                        <td className="py-3 px-4 font-black text-indigo-950 font-mono">
                          {cifra} {num.easternArabic ? `(${num.easternArabic})` : ''}
                        </td>
                        <td className="py-3 px-4 font-bold text-slate-900 font-serif text-base">
                          {nativeTxt}
                        </td>
                        <td className="py-3 px-4 font-mono text-indigo-700 font-semibold">
                          {transTxt}
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {noteTxt}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => speakText(nativeTxt || transTxt)}
                            className="p-1 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-800 transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: COLORES E IDIOMS CULTURALES */}
      {/* ==================================================================== */}
      {activeTab === 'colors' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {basicsData.colors.map((color: any, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div
                  className="w-full h-24 rounded-2xl shadow-inner border border-black/10 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/40 text-white backdrop-blur-xs">
                    {color.hex}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-black text-slate-900 text-base">{color.name}</span>
                    <button
                      onClick={() => speakText(color.name || color.masculine || color.hanzi)}
                      className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {color.masculine && (
                    <div className="text-xs font-semibold text-indigo-700">
                      Masc: {color.masculine} {color.feminine ? `| Fem: ${color.feminine}` : ''}
                    </div>
                  )}

                  {color.hanzi && (
                    <div className="text-xs font-semibold text-indigo-700">
                      {color.hanzi} ({color.pinyin})
                    </div>
                  )}

                  {(color.idiom || color.symbolism) && (
                    <p className="text-xs text-slate-600 pt-2 border-t border-slate-100 leading-relaxed italic">
                      "{color.idiom || color.symbolism}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 4: OBJETOS COTIDIANOS CATEGORIZADOS */}
      {/* ==================================================================== */}
      {activeTab === 'objects' && (
        <div className="space-y-6">
          {basicsData.objects.map((cat: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Package className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {cat.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {cat.items.map((item: any, iIdx: number) => {
                  const vern = item.name || item.arabic || item.hanzi || item.german || '';
                  const phon = item.translit || item.pinyin || item.phonetic || item.plural || '';
                  const spa = item.spanish || '';

                  return (
                    <div
                      key={iIdx}
                      className="p-3 bg-slate-50 hover:bg-indigo-50/50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="font-black text-slate-900 text-sm font-serif">
                          {vern}
                        </div>
                        {phon && <div className="text-xs text-indigo-600 font-mono">{phon}</div>}
                        <div className="text-xs text-slate-500 font-medium">{spa}</div>
                      </div>
                      <button
                        onClick={() => speakText(vern)}
                        className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer"
                        title="Escuchar audio"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
