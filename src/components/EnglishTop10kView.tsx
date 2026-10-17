import React, { useState, useEffect, useMemo } from 'react';
import {
  Volume2,
  Search,
  Filter,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  BookMarked,
  Sparkles,
  Layers,
  ArrowUpDown,
  RotateCcw,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import {
  TopWord,
  FrequencyBand,
  FREQUENCY_BANDS,
  INITIAL_TOP_WORDS,
  fetchTop10000Words
} from '../data/languages/englishTop10kData';
import { VariantType } from '../data/languages/englishData';

interface EnglishTop10kViewProps {
  variant: VariantType;
}

const ITEMS_PER_PAGE = 50;

export default function EnglishTop10kView({ variant }: EnglishTop10kViewProps) {
  // Estado del corpus completo de 10,000 palabras (inicia con caché síncrono de 200 palabras)
  const [words, setWords] = useState<TopWord[]>(INITIAL_TOP_WORDS);
  const [isLoadingFull, setIsLoadingFull] = useState<boolean>(true);

  // Filtros de navegación
  const [selectedBand, setSelectedBand] = useState<FrequencyBand>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedPos, setSelectedPos] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('all');

  // Modo Flashcard / Auto-evaluación (oculta traducciones hasta hacer clic)
  const [flashcardMode, setFlashcardMode] = useState<boolean>(false);
  const [revealedWords, setRevealedWords] = useState<Record<number, boolean>>({});

  // Paginación
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Carga en segundo plano del archivo completo de 10,000 palabras
  useEffect(() => {
    let isMounted = true;
    fetchTop10000Words().then((data) => {
      if (isMounted && data && data.length > 0) {
        setWords(data);
        setIsLoadingFull(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Pronunciación de voz nativa
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = variant === 'UK' ? 'en-GB' : 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Extraer lista única de categorías gramaticales
  const posOptions = useMemo(() => {
    const set = new Set<string>();
    words.forEach((w) => {
      if (w.pos) {
        // normalizar
        const main = w.pos.split('/')[0].trim();
        set.add(main);
      }
    });
    return Array.from(set).sort();
  }, [words]);

  // Filtrado reactivo de palabras
  const filteredWords = useMemo(() => {
    const bandInfo = FREQUENCY_BANDS.find((b) => b.id === selectedBand);
    const maxRank = bandInfo ? bandInfo.maxRank : 10000;

    return words.filter((item) => {
      // Filtro de banda de ranking
      if (item.r > maxRank) return false;

      // Filtro de nivel MCER
      if (selectedLevel !== 'all' && item.lvl !== selectedLevel) return false;

      // Filtro de categoría gramatical
      if (selectedPos !== 'all' && !item.pos.toLowerCase().includes(selectedPos.toLowerCase())) return false;

      // Filtro por letra inicial
      if (selectedLetter !== 'all' && !item.w.toLowerCase().startsWith(selectedLetter.toLowerCase())) return false;

      // Búsqueda libre
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesRank = item.r.toString() === q || `#${item.r}` === q;
        const matchesWord = item.w.toLowerCase().includes(q);
        const matchesEs = item.es.toLowerCase().includes(q);
        return matchesRank || matchesWord || matchesEs;
      }

      return true;
    });
  }, [words, selectedBand, selectedLevel, selectedPos, selectedLetter, searchQuery]);

  // Reiniciar a página 1 cuando cambia algún filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBand, selectedLevel, selectedPos, selectedLetter, searchQuery]);

  // Métricas de paginación
  const totalPages = Math.max(1, Math.ceil(filteredWords.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedWords = useMemo(() => {
    const startIdx = (validCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredWords.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredWords, validCurrentPage]);

  const toggleReveal = (rank: number) => {
    setRevealedWords((prev) => ({
      ...prev,
      [rank]: !prev[rank]
    }));
  };

  const getLevelBadgeColor = (lvl: string) => {
    switch (lvl) {
      case 'A1': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'A2': return 'bg-teal-100 text-teal-800 border-teal-300';
      case 'B1': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'B2': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      case 'C1': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'C2': return 'bg-rose-100 text-rose-800 border-rose-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="space-y-6">
      {/* Banner de Presentación del Corpus 10K */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-xs font-bold font-mono">
              <BookMarked className="w-3.5 h-3.5" />
              <span>CORPUS LINGÜÍSTICO OFICIAL • 10,000 PALABRAS MÁS USADAS</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black tracking-tight font-caslon">
              Las 10,000 Palabras Más Frecuentes del Idioma Inglés
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Basado en el análisis de corpus estadístico internacional (Oxford 5000 y Google Web Trillion Word Corpus). Cubre desde las palabras funcionales elementales del nivel A1 hasta el léxico de maestría C2, con traducción al español, categoría gramatical y oraciones contextuales.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-white/10 backdrop-blur-xs px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-mono">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Estado del Corpus:</span>
              <span className="font-black text-amber-300">
                {isLoadingFull ? 'Cargando 10,000 palabras...' : `${words.length.toLocaleString()} palabras cargadas`}
              </span>
            </div>

            <button
              onClick={() => setFlashcardMode(!flashcardMode)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer shadow-xs border ${
                flashcardMode
                  ? 'bg-amber-500 border-amber-400 text-slate-950 font-black'
                  : 'bg-white/15 border-white/20 text-white hover:bg-white/25'
              }`}
            >
              {flashcardMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{flashcardMode ? 'Modo Flashcard Activo' : 'Activar Modo Flashcard'}</span>
            </button>
          </div>
        </div>

        {/* Selector de Bandas de Frecuencia */}
        <div className="mt-6 pt-4 border-t border-white/15">
          <span className="block text-[11px] font-bold text-slate-400 mb-2 uppercase tracking-wider">
            Bandas de Frecuencia y Dominio Lingüístico:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {FREQUENCY_BANDS.map((band) => {
              const isSelected = selectedBand === band.id;
              return (
                <button
                  key={band.id}
                  onClick={() => setSelectedBand(band.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-md font-black'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  title={band.description}
                >
                  {band.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Controles de Búsqueda y Filtros */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
          {/* Barra de Búsqueda */}
          <div className="lg:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar en inglés, español o número de ranking (ej: 'water', 'agua', '#25')..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filtro por Nivel MCER */}
          <div className="lg:col-span-3">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none font-semibold text-slate-700 cursor-pointer"
            >
              <option value="all">Todos los Niveles MCER (A1 a C2)</option>
              <option value="A1">Nivel A1 (Acceso / Principiante)</option>
              <option value="A2">Nivel A2 (Plataforma / Elemental)</option>
              <option value="B1">Nivel B1 (Umbral / Intermedio)</option>
              <option value="B2">Nivel B2 (Avanzado / Intermedio Alto)</option>
              <option value="C1">Nivel C1 (Dominio Operativo Eficaz)</option>
              <option value="C2">Nivel C2 (Maestría Nativa)</option>
            </select>
          </div>

          {/* Filtro por Categoría Gramatical */}
          <div className="lg:col-span-4">
            <select
              value={selectedPos}
              onChange={(e) => setSelectedPos(e.target.value)}
              className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:outline-none font-semibold text-slate-700 cursor-pointer"
            >
              <option value="all">Todas las Categorías Gramaticales</option>
              {posOptions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Selector de Letra Inicial (A - Z) */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-1 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pr-2">
            Letra:
          </span>
          <button
            onClick={() => setSelectedLetter('all')}
            className={`px-2 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedLetter === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Todas
          </button>
          {alphabetLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center shrink-0 ${
                selectedLetter === letter
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Resumen de Resultados y Paginación Superior */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-600 font-medium">
            Mostrando <strong>{filteredWords.length === 0 ? 0 : (validCurrentPage - 1) * ITEMS_PER_PAGE + 1}</strong> -{' '}
            <strong>{Math.min(validCurrentPage * ITEMS_PER_PAGE, filteredWords.length)}</strong> de{' '}
            <strong className="text-slate-900">{filteredWords.length.toLocaleString()} palabras</strong> encontradas
          </div>

          {/* Botones de Paginación */}
          <div className="flex items-center gap-1.5 self-center sm:self-auto">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={validCurrentPage === 1}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Primera página"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={validCurrentPage === 1}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 font-mono font-bold text-slate-700 bg-slate-50 rounded-xl border border-slate-200">
              Página {validCurrentPage} de {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={validCurrentPage >= totalPages}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Página siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={validCurrentPage >= totalPages}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Última página"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Palabras / Tarjetas */}
      {filteredWords.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
          <BookMarked className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No se encontraron palabras con esos filtros</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
            Prueba ajustando el término de búsqueda, cambiando la banda de frecuencia o seleccionando "Todos los niveles".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedBand('all');
              setSelectedLevel('all');
              setSelectedPos('all');
              setSelectedLetter('all');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 cursor-pointer"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {paginatedWords.map((item) => {
            const isRevealed = !flashcardMode || revealedWords[item.r];

            return (
              <div
                key={item.r}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        #{item.r}
                      </span>
                      <h3 className="text-base font-black text-slate-900 tracking-tight">
                        {item.w}
                      </h3>
                      <button
                        type="button"
                        onClick={() => speakText(item.w)}
                        className="p-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                        title={`Escuchar pronunciación de "${item.w}"`}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${getLevelBadgeColor(
                          item.lvl
                        )}`}
                      >
                        {item.lvl}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                      {item.pos}
                    </span>
                  </div>

                  {/* Traducción con soporte de Modo Flashcard */}
                  <div className="mt-2.5">
                    {isRevealed ? (
                      <p className="text-sm font-bold text-indigo-950">
                        {item.es}
                      </p>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleReveal(item.r)}
                        className="w-full py-1.5 px-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold hover:bg-amber-100 transition-colors cursor-pointer text-left flex items-center justify-between"
                      >
                        <span>👁️ Mostrar traducción al español</span>
                        <span className="text-[10px] font-mono font-bold">CLICK</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Oración de Ejemplo */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs">
                  <p className="text-slate-800 italic leading-snug">
                    "{item.ex}"
                  </p>
                  {isRevealed ? (
                    <p className="text-slate-500 text-[11px] mt-1 leading-snug">
                      {item.exEs}
                    </p>
                  ) : (
                    <p className="text-slate-400 text-[10px] italic mt-1">
                      [Ejemplo en español oculto en modo flashcard]
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Paginación Inferior */}
      {filteredWords.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-600 font-medium">
            Página <strong>{validCurrentPage}</strong> de <strong>{totalPages}</strong> ({filteredWords.length.toLocaleString()} palabras)
          </span>

          <div className="flex items-center gap-1.5 self-center sm:self-auto">
            <button
              onClick={() => {
                setCurrentPage(1);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={validCurrentPage === 1}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Primera página"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={validCurrentPage === 1}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 font-mono font-bold text-slate-700 bg-slate-50 rounded-xl border border-slate-200">
              {validCurrentPage} / {totalPages}
            </span>

            <button
              onClick={() => {
                setCurrentPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={validCurrentPage >= totalPages}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Página siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage(totalPages);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              disabled={validCurrentPage >= totalPages}
              className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
              title="Última página"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
