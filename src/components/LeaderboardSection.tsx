import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Medal,
  Crown,
  Calendar,
  Flame,
  UserCheck,
  ChevronRight,
  RotateCcw,
  Info,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { Institution } from '../types';
import {
  LeaderboardEntry,
  LeaderboardTimeframe,
  TopOneSummary,
  User
} from '../types/auth';
import {
  getLeaderboard,
  getTopOnePerInstitution,
  INSTITUTIONS_LIST
} from '../services/statsService';
import { getCurrentUser } from '../services/authService';

interface LeaderboardSectionProps {
  onOpenAccountModal?: () => void;
}

export const LeaderboardSection: React.FC<LeaderboardSectionProps> = ({
  onOpenAccountModal
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Institution | null>(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState<LeaderboardTimeframe>('anual');

  // Top 1 summaries for initial non-interacted view
  const [topOnes, setTopOnes] = useState<TopOneSummary[]>([]);
  // Top 10 list for interactive category view
  const [top10List, setTop10List] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
    // Cargar Top 1 inicial
    const summaries = getTopOnePerInstitution(selectedTimeframe);
    setTopOnes(summaries);
  }, [selectedTimeframe]);

  useEffect(() => {
    if (selectedCategory) {
      const list = getLeaderboard(
        selectedCategory,
        selectedTimeframe,
        currentUser?.id
      );
      setTop10List(list);
    }
  }, [selectedCategory, selectedTimeframe, currentUser]);

  const timeframeLabels: { id: LeaderboardTimeframe; label: string; desc: string }[] = [
    { id: 'diario', label: 'Diario', desc: 'Rendimiento de las últimas 24 horas' },
    { id: 'mensual', label: 'Mensual', desc: 'Acumulado del mes en curso' },
    { id: 'trimestral', label: 'Trimestral', desc: 'Ciclo académico trimestral' },
    { id: 'semestral', label: 'Semestral', desc: 'Primer o segundo semestre lectivo' },
    { id: 'anual', label: 'Anual', desc: 'Inicia el 1 de enero y se reinicia el 31 de diciembre' }
  ];

  return (
    <section
      aria-label="Clasificación y Estadísticas Nacionales KUSKAT"
      className="mt-12 pt-8 border-t border-slate-800 space-y-6"
    >
      {/* Header with Title and Explanation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 border border-slate-800">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Trophy className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-white tracking-wide flex items-center gap-2">
              Tabla de Estadísticas y Top 10 Nacional KUSKAT
            </h2>
          </div>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            Puntuación oficial de rendimiento:{' '}
            <strong className="text-emerald-400">+1 punto</strong> por cada acierto,{' '}
            <strong className="text-rose-400">-2 puntos</strong> por cada error (el tope más bajo es{' '}
            <strong className="text-white">0</strong>). El ciclo anual comprende del{' '}
            <span className="text-amber-300 font-medium">1 de enero al 31 de diciembre</span> y se reinicia cada fin de año.
          </p>
        </div>

        {/* Timeframe selector */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-700/80 self-start md:self-auto">
          {timeframeLabels.map(tf => (
            <button
              key={tf.id}
              onClick={() => setSelectedTimeframe(tf.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedTimeframe === tf.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title={tf.desc}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* VISTA 1: ANTES DE INTERACTUAR -> MUESTRA EL TOP 1 DE CADA CATEGORÍA */}
      {selectedCategory === null ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                Líderes Actuales: Top 1 de Cada Institución ({selectedTimeframe})
              </h3>
              <p className="text-xs text-slate-400">
                Selecciona cualquier institución para desplegar la tabla completa con el Top 10 detallado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topOnes.map(({ institution, institutionLabel, entry }) => (
              <div
                key={institution}
                className="group relative p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
                      {institution}
                    </span>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-sm">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                      <span>TOP #1</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-slate-400 font-medium line-clamp-1">
                      {institutionLabel}
                    </h4>
                    <p className="text-base font-bold text-white mt-1 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                      {entry ? entry.username : 'Sin registros aún'}
                    </p>
                  </div>

                  {entry ? (
                    <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800/80 text-center text-xs">
                      <div>
                        <span className="block text-[10px] text-slate-500 uppercase">Puntos</span>
                        <span className="font-bold text-amber-400 text-sm">{entry.scorePoints}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 uppercase">Aciertos</span>
                        <span className="font-bold text-emerald-400 text-sm">{entry.correctTotal}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] text-slate-500 uppercase">Exámenes</span>
                        <span className="font-bold text-blue-400 text-sm">{entry.examsCount}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2 text-xs text-slate-500 italic">
                      ¡Sé el primero en liderar esta categoría!
                    </div>
                  )}
                </div>

                <div className="pt-3 mt-2 relative z-10">
                  <button
                    onClick={() => setSelectedCategory(institution)}
                    className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group-hover:shadow"
                  >
                    <span>Ver Top 10 de {institution}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* VISTA 2: INTERACTIVA -> TOP 10 DE LA CATEGORÍA SELECCIONADA */
        <div className="space-y-4 animate-fade-in">
          {/* Back button and Category Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ver Top 1 de todas las categorías</span>
            </button>

            {/* Institution category tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {INSTITUTIONS_LIST.map(inst => (
                <button
                  key={inst.id}
                  onClick={() => setSelectedCategory(inst.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === inst.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700/60'
                  }`}
                >
                  {inst.id}
                </button>
              ))}
            </div>
          </div>

          {/* Subheader info */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Medal className="w-5 h-5 text-amber-400" />
                Top 10 Oficial: {INSTITUTIONS_LIST.find(i => i.id === selectedCategory)?.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Periodo: <span className="capitalize font-medium text-slate-300">{selectedTimeframe}</span> • Ordenado por mayor puntaje KUSKAT
              </p>
            </div>

            {!currentUser && onOpenAccountModal && (
              <button
                onClick={onOpenAccountModal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inicia sesión para figurar en el Top
              </button>
            )}
          </div>

          {/* Top 10 Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-800/80 text-slate-400 font-semibold border-b border-slate-700">
                  <th className="py-3 px-4 w-16 text-center">Rango</th>
                  <th className="py-3 px-4">Estudiante</th>
                  <th className="py-3 px-4 text-center">Puntaje (+1 / -2)</th>
                  <th className="py-3 px-4 text-center">Aciertos / Errores</th>
                  <th className="py-3 px-4 text-center">Exámenes</th>
                  <th className="py-3 px-4 text-right">Última Prueba</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-slate-300">
                {top10List.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-slate-500 italic">
                      No hay registros en esta categoría para el periodo seleccionado.
                    </td>
                  </tr>
                ) : (
                  top10List.map(entry => {
                    const isUser = entry.isCurrentUser;
                    return (
                      <tr
                        key={entry.rank}
                        className={`transition-colors ${
                          isUser
                            ? 'bg-blue-900/30 font-semibold border-l-4 border-l-blue-500'
                            : entry.rank === 1
                            ? 'bg-amber-950/20 hover:bg-amber-950/30'
                            : 'hover:bg-slate-800/40'
                        }`}
                      >
                        {/* Rank */}
                        <td className="py-3 px-4 text-center font-bold">
                          {entry.rank === 1 && (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-sm shadow-sm">
                              👑 1
                            </span>
                          )}
                          {entry.rank === 2 && (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-300/20 text-slate-200 border border-slate-300/40 text-sm">
                              🥈 2
                            </span>
                          )}
                          {entry.rank === 3 && (
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-700/20 text-amber-500 border border-amber-700/40 text-sm">
                              🥉 3
                            </span>
                          )}
                          {entry.rank > 3 && (
                            <span className="text-slate-400 text-xs">#{entry.rank}</span>
                          )}
                        </td>

                        {/* Estudiante */}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white">{entry.username}</span>
                            {isUser && (
                              <span className="px-1.5 py-0.5 rounded bg-blue-500 text-white text-[10px] uppercase font-bold">
                                Tú
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Puntos */}
                        <td className="py-3 px-4 text-center">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-bold text-sm border border-amber-500/20">
                            {entry.scorePoints} pts
                          </span>
                        </td>

                        {/* Aciertos / Errores */}
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5 text-xs">
                            <span className="text-emerald-400 font-semibold">
                              +{entry.correctTotal}
                            </span>
                            <span className="text-slate-500">/</span>
                            <span className="text-rose-400 font-semibold">
                              -{entry.incorrectTotal}
                            </span>
                          </div>
                        </td>

                        {/* Exámenes */}
                        <td className="py-3 px-4 text-center font-medium text-slate-300">
                          {entry.examsCount}
                        </td>

                        {/* Última Prueba */}
                        <td className="py-3 px-4 text-right text-slate-400 text-[11px]">
                          {new Date(entry.lastExamDate).toLocaleDateString('es-SV', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};
