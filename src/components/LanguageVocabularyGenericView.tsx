import React, { useState, useMemo } from 'react';
import {
  Volume2,
  Search,
  Filter,
  Eye,
  EyeOff,
  BookMarked,
  Sparkles,
  Layers,
  RotateCcw,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { getLanguageVocabulary, LANGUAGES_CATALOG } from '../data/languages/languagesRegistry';
import { playAudioSpeech } from '../utils/audioSpeechHelper';

interface LanguageVocabularyGenericViewProps {
  languageId: string;
}

export default function LanguageVocabularyGenericView({ languageId }: LanguageVocabularyGenericViewProps) {
  const vocabItems = useMemo(() => getLanguageVocabulary(languageId), [languageId]);
  const langManifest = useMemo(() => LANGUAGES_CATALOG.find((l) => l.id === languageId), [languageId]);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  // Sintetizador de voz nativo Web Speech API robusto
  const speakText = (text: string) => {
    playAudioSpeech(text, languageId);
  };

  const categories = useMemo(() => {
    const set = new Set<string>();
    vocabItems.forEach((item: any) => {
      if (item.category) set.add(item.category);
    });
    return Array.from(set);
  }, [vocabItems]);

  const filteredItems = useMemo(() => {
    return vocabItems.filter((item: any) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const vern = (item.nahuat || item.lenca || item.kakawira || item.german || item.arabic || item.hanzi || '').toLowerCase();
        const trans = (item.transliteration || item.pinyin || item.phonetic || '').toLowerCase();
        const spa = (item.spanish || '').toLowerCase();
        const cat = (item.category || '').toLowerCase();
        const root = (item.root || '').toLowerCase();
        return vern.includes(q) || trans.includes(q) || spa.includes(q) || cat.includes(q) || root.includes(q);
      }
      return true;
    });
  }, [vocabItems, selectedCategory, searchQuery]);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6">
      {/* Encabezado del Corpus */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Corpus Lexical • {langManifest?.name}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Vocabulario y Raíces de Alta Frecuencia
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Corpus léxico estructurado para la asimilación autónoma. Incluye modo flashcard para auto-evaluación,
            clasificación temático-conceptual y pronunciación fonética integrada.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setFlashcardMode(!flashcardMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                flashcardMode
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              {flashcardMode ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>{flashcardMode ? 'Modo Normal (Ver Traducciones)' : 'Modo Flashcard (Ocultar Respuestas)'}</span>
            </button>

            <span className="text-xs font-bold font-mono text-indigo-300 bg-indigo-900/40 px-3 py-2 rounded-xl border border-indigo-500/20">
              Total en Corpus: {vocabItems.length} vocablos
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por palabra, raíz, pinyin o traducción..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
          />
        </div>

        {categories.length > 0 && (
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 font-medium focus:outline-hidden"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Grid de Palabras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item: any, idx: number) => {
          const vern = item.nahuat || item.lenca || item.kakawira || item.german || item.arabic || item.hanzi || '';
          const trans = item.transliteration || item.pinyin || item.phonetic || item.plural || '';
          const spa = item.spanish || '';
          const cat = item.category || '';
          const isRevealed = !flashcardMode || revealedIds[item.id || idx];

          return (
            <div
              key={item.id || idx}
              onClick={() => flashcardMode && toggleReveal(item.id || idx)}
              className={`bg-white rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                flashcardMode ? 'cursor-pointer hover:border-amber-400 shadow-xs' : 'border-slate-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-serif">
                    {vern}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakText(vern);
                    }}
                    className="p-1 rounded-lg bg-slate-50 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 cursor-pointer"
                    title="Escuchar audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {trans && (
                  <span className="text-xs font-mono font-semibold text-indigo-600 block mt-0.5">
                    {trans}
                  </span>
                )}

                {item.root && (
                  <span className="inline-block mt-1 text-[10px] font-bold font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-md">
                    Raíz: {item.root}
                  </span>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {cat}
                  </span>
                  {item.hskLevel && (
                    <span className="text-[10px] font-bold bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded-md font-mono">
                      {item.hskLevel}
                    </span>
                  )}
                  {item.frequencyBand && (
                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded-md font-mono">
                      {item.frequencyBand}
                    </span>
                  )}
                </div>

                <div className="text-sm font-bold text-slate-800">
                  {isRevealed ? (
                    spa
                  ) : (
                    <span className="text-xs text-amber-600 italic bg-amber-50 px-2 py-1 rounded-md block text-center">
                      Haz clic para revelar significado
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
