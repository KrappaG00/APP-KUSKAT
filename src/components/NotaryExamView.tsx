import React, { useState, useMemo, useEffect } from 'react';
import {
  Scale,
  Scroll,
  BookMarked,
  Award,
  FileText,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Search,
  HelpCircle,
  Sparkles,
  Gavel,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Brain,
  Filter,
} from 'lucide-react';

import {
  NotaryQuestion,
  NOTARY_EXAM_QUESTIONS,
} from '../data/notaryExamData';
import { ModulePaginationBar } from './ModulePaginationBar';

export type { NotaryQuestion };
export { NOTARY_EXAM_QUESTIONS };

export const NOTARY_SUBCATEGORIES = [
  { id: 'all', name: 'Todas las Materias', icon: '📜' },
  { id: 'notarial-puro', name: 'Notarial Puro', icon: '⚖️' },
  { id: 'lenjvod', name: 'LENJVOD', icon: '📂' },
  { id: 'sucesiones', name: 'Sucesiones', icon: '🏛️' },
  { id: 'contratos', name: 'Contratos', icon: '📑' },
  { id: 'mercantil', name: 'Mercantil', icon: '🏢' },
];

export const NotaryExamView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'study' | 'jurisprudence' | 'simulator'>('study');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isGraded, setIsGraded] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return NOTARY_EXAM_QUESTIONS;
    return NOTARY_EXAM_QUESTIONS.filter((q) => {
      if ((q as any).category === selectedCategory) return true;
      const text = `${q.topic} ${q.legalBasis} ${q.statement}`.toLowerCase();
      switch (selectedCategory) {
        case 'notarial-puro':
          return text.includes('notariado') && !text.includes('lenjvod') && !text.includes('comercio') && !text.includes('cpcm');
        case 'lenjvod':
          return text.includes('lenjvod') || text.includes('jurisdicción voluntaria') || text.includes('remedición');
        case 'sucesiones':
          return text.includes('testamento') || text.includes('herencia') || text.includes('suces');
        case 'contratos':
          return text.includes('contrato') || text.includes('poder') || text.includes('cpcm') || text.includes('compraventa');
        case 'mercantil':
          return text.includes('mercantil') || text.includes('sociedad') || text.includes('comercio');
        default:
          return true;
      }
    });
  }, [selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / itemsPerPage));
  const validCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const paginatedQuestions = useMemo(() => {
    const start = (validCurrentPage - 1) * itemsPerPage;
    return filteredQuestions.slice(start, start + itemsPerPage);
  }, [filteredQuestions, validCurrentPage, itemsPerPage]);

  const handleSelectOption = (questionId: string, optionKey: string) => {
    if (isGraded) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsGraded(false);
    setCurrentPage(1);
  };

  const correctCount = NOTARY_EXAM_QUESTIONS.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctKey ? 1 : 0);
  }, 0);

  const scorePct = Math.round((correctCount / NOTARY_EXAM_QUESTIONS.length) * 100);

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui">
      {/* Banner Principal Corporativo */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Corte Suprema de Justicia (CSJ) • Sección de Notariado</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Examen de Notariado de El Salvador • Jurisprudencia & Práctica Notarial
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] max-w-3xl leading-relaxed">
            Plataforma especializada de preparación para el examen anual de autorización para el ejercicio del Notariado.
            Comprende la <strong>Ley de Notariado</strong>, la <strong>Ley del Ejercicio Notarial de la Jurisdicción Voluntaria</strong>,
            el <strong>Código Civil</strong> y la jurisprudencia vinculante de la <strong>Sala de lo Civil de la CSJ</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('study')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
                activeTab === 'study' ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs' : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <BookMarked className="w-4 h-4 text-[#C59B27]" />
              <span>1. Ejes Sustantivos de la Función Notarial</span>
            </button>

            <button
              onClick={() => setActiveTab('jurisprudence')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
                activeTab === 'jurisprudence' ? 'bg-[#FAF9F5] text-[#0B1B3D] shadow-xs' : 'bg-white/10 text-[#CBD5E1] hover:bg-white/20'
              }`}
            >
              <Gavel className="w-4 h-4 text-[#C59B27]" />
              <span>2. Jurisprudencia Vinculante CSJ</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-1.5 ${
                activeTab === 'simulator' ? 'bg-[#C59B27] text-[#07132B] shadow-xs font-extrabold' : 'bg-[#132A5C] text-[#C59B27] border border-[#C59B27]/40 hover:bg-[#1A3875]'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>3. Simulador de Evaluación Notarial</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: MATERIAL SUSTANTIVO */}
      {/* ==================================================================== */}
      {activeTab === 'study' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E5E3D8]">
              <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-bold">
                <Scroll className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-base font-bold text-[#111625]">Estructura del Instrumento Público Matriz</h3>
                <p className="text-xs text-[#64748B]">Art. 32 de la Ley de Notariado</p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#334155] leading-relaxed">
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#0B1B3D] text-[11px] mb-1">1. Encabezamiento:</strong>
                Número de escritura, ciudad o municipio, hora y fecha en letras, nombre y generales del notario autorizante.
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#0B1B3D] text-[11px] mb-1">2. Comparecencia:</strong>
                Nombres, edades, profesiones, domicilios y documentos de identidad (DUI/Pasaporte/NIT) de los otorgantes.
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#0B1B3D] text-[11px] mb-1">3. Cuerpo o Disposición:</strong>
                Cláusulas contractuales que contienen el negocio jurídico (compraventa, donación, mutuo, hipoteca, testamento).
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#0B1B3D] text-[11px] mb-1">4. Conclusión & Cierre:</strong>
                Fe notarial de lectura íntegra en un solo acto, ratificación, firmas o impresión digital con firma a ruego.
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#E5E3D8]">
              <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-base font-bold text-[#111625]">Responsabilidad y Fe Pública Notarial</h3>
                <p className="text-xs text-[#64748B]">Doctrina y consecuencias disciplinarias</p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#334155] leading-relaxed">
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#9E472A] text-[11px] mb-1">• Fe Pública Notarial:</strong>
                Presunción legal de veracidad de los hechos presenciados por el notario en el ejercicio de sus funciones. Solo destruible por querella de falsedad o falsedad material/ideológica.
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#9E472A] text-[11px] mb-1">• Responsabilidad Civil y Daños:</strong>
                El notario responde patrimonialmente con sus bienes por los perjuicios que cause a las partes por dolo, negligencia o ignorancia inexcusable de las leyes.
              </div>
              <div className="bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                <strong className="block font-mono-exam text-[#9E472A] text-[11px] mb-1">• Jurisdicción Voluntaria (LENJVOD):</strong>
                Facultad exclusiva para tramitar actos sin contienda: herencias, rectificaciones de partidas, títulos supletorios y matrimonios.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: JURISPRUDENCIA VINCULANTE CSJ */}
      {/* ==================================================================== */}
      {activeTab === 'jurisprudence' && (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle">
            <span className="font-mono-exam font-bold text-xs text-[#0B1B3D] uppercase">
              Criterios Vinculantes de la Sala de lo Civil y Corte Plena de la CSJ:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono-exam font-bold text-[10px] bg-[#0B1B3D] text-[#FAF9F5] px-2 py-0.5 rounded">
                  Ref. 184-CAC-2018
                </span>
                <strong className="font-editorial text-sm text-[#111625]">Unidad de Acto en Testamentos</strong>
              </div>
              <p className="text-[#475569] leading-relaxed">
                La salida física de uno de los 3 testigos instrumentales durante la lectura del testamento abierto genera nulidad absoluta insanable de toda la disposición mortis causa, sin que pueda convalidarse por confirmación posterior.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono-exam font-bold text-[10px] bg-[#0B1B3D] text-[#FAF9F5] px-2 py-0.5 rounded">
                  Corte Plena CSJ
                </span>
                <strong className="font-editorial text-sm text-[#111625]">Infracción al Art. 9 de la Ley de Notariado</strong>
              </div>
              <p className="text-[#475569] leading-relaxed">
                Autorizar donaciones o ventas en las que resulten beneficiados parientes dentro del 4.° grado de consanguinidad es causal de inhabilitación profesional forzosa por atentar contra la imparcialidad del oficio público delegado.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono-exam font-bold text-[10px] bg-[#0B1B3D] text-[#FAF9F5] px-2 py-0.5 rounded">
                  Ref. 94-CAC-2015
                </span>
                <strong className="font-editorial text-sm text-[#111625]">Testamento de Persona Invidente</strong>
              </div>
              <p className="text-[#475569] leading-relaxed">
                La omisión de hacer constar en el texto la doble lectura del testamento otorgado por persona ciega (primero por el notario y luego por el testigo elegido) vicia de nulidad de pleno derecho el instrumento.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono-exam font-bold text-[10px] bg-[#0B1B3D] text-[#FAF9F5] px-2 py-0.5 rounded">
                  Sala de lo Civil
                </span>
                <strong className="font-editorial text-sm text-[#111625]">Firma a Ruego & Huella Dactilar</strong>
              </div>
              <p className="text-[#475569] leading-relaxed">
                Si un compareciente no sabe o no puede firmar, debe estampar obligatoriamente su huella digital y hacerse constar que una persona distinta firma a su ruego. La ausencia de huella acarrea nulidad relativa.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: SIMULADOR DE EVALUACIÓN NOTARIAL */}
      {/* ==================================================================== */}
      {activeTab === 'simulator' && (
        <div className="space-y-6">
          {/* BARRA DE FILTROS POR SUBCATEGORÍA */}
          <div className="bg-white rounded-xl p-4 border border-[#E5E3D8] shadow-corporate-subtle flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Materia:
              </span>
              {NOTARY_SUBCATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0B1B3D] text-white shadow-sm font-bold'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 text-xs font-medium cursor-pointer flex items-center gap-1 font-mono-exam"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>

          {/* Calificación al evaluar */}
          {isGraded && (
            <div className="bg-[#FAF9F5] border-2 border-[#C59B27] rounded-xl p-5 shadow-corporate-card space-y-3 animate-fade-in font-sans-ui">
              <div className="flex items-center justify-between">
                <h4 className="font-editorial text-lg font-bold text-[#111625] flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#C59B27]" />
                  Dictamen Oficial del Examen de Notariado
                </h4>
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono-exam font-bold uppercase ${
                  scorePct >= 70 ? 'bg-[#1E7E34] text-white' : 'bg-[#9E472A] text-white'
                }`}>
                  {scorePct >= 70 ? 'Aprobado Satisfactorio (Apto para Notario)' : 'Requiere Estudio Doctrinal Profundo'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-exam">
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Porcentaje</span>
                  <span className="text-2xl font-bold text-[#0B1B3D]">{scorePct}%</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Aciertos</span>
                  <span className="text-2xl font-bold text-[#1E7E34]">{correctCount}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Errores</span>
                  <span className="text-2xl font-bold text-[#9E472A]">{NOTARY_EXAM_QUESTIONS.length - correctCount}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] text-center">
                  <span className="text-[10px] text-[#64748B] block">Total Reactivos</span>
                  <span className="text-2xl font-bold text-[#475569]">{NOTARY_EXAM_QUESTIONS.length}</span>
                </div>
              </div>
            </div>
          )}

          {/* BARRA SUPERIOR DE PAGINACIÓN */}
          <ModulePaginationBar
            currentPage={validCurrentPage}
            totalPages={totalPages}
            totalItems={filteredQuestions.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={(size) => {
              setItemsPerPage(size);
              setCurrentPage(1);
            }}
            itemLabel="reactivos notariales"
          />

          {/* Preguntas */}
          <div className="space-y-4">
            {paginatedQuestions.map((q, idx) => {
              const globalIndex = (validCurrentPage - 1) * itemsPerPage + idx + 1;
              const selected = selectedAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-[#E5E3D8] shadow-corporate-subtle p-5 space-y-3 font-sans-ui"
                >
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-[#EAE8DD]">
                    <span className="font-mono-exam font-bold text-[#0B1B3D]">
                      Caso Notarial #{globalIndex}: {q.topic}
                    </span>
                    <span className="text-[10px] font-mono-exam bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E5E3D8] text-[#64748B]">
                      {q.legalBasis}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#111625] leading-relaxed">
                    {q.statement}
                  </p>

                  <div className="space-y-2 pt-1">
                    {q.options.map(opt => {
                      const isSelected = selected === opt.key;
                      const isCorrect = opt.key === q.correctKey;

                      let style = 'bg-[#FAF9F5] border-[#E5E3D8] hover:bg-[#F2F1EA] text-[#111625]';
                      let badge = 'bg-white text-[#475569] border-[#E5E3D8]';

                      if (isGraded) {
                        if (isCorrect) {
                          style = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold';
                          badge = 'bg-[#1E7E34] text-white border-transparent';
                        } else if (isSelected && !isCorrect) {
                          style = 'bg-rose-50 border-rose-400 text-rose-950';
                          badge = 'bg-[#9E472A] text-white border-transparent';
                        }
                      } else if (isSelected) {
                        style = 'bg-[#0B1B3D] border-[#1A2E5A] text-white';
                        badge = 'bg-white text-[#0B1B3D] border-transparent font-bold';
                      }

                      return (
                        <div
                          key={opt.key}
                          onClick={() => handleSelectOption(q.id, opt.key)}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer text-xs sm:text-sm ${style}`}
                        >
                          <span className={`w-6 h-6 rounded flex items-center justify-center font-mono-exam font-bold shrink-0 text-xs border ${badge}`}>
                            {opt.key}
                          </span>
                          <span className="flex-1 pt-0.5">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {isGraded && (
                    <div className="mt-3 p-3.5 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8] text-xs text-[#334155] space-y-1.5 font-sans-ui">
                      <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                        <HelpCircle className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>Fundamentación Legal y Doctrinal:</span>
                      </div>
                      <p className="leading-relaxed pl-5 text-[#475569]">{q.explanation}</p>
                      {q.csjPrecedent && (
                        <div className="pl-5 pt-1 text-[11px] font-mono-exam text-[#0B1B3D]">
                          <strong>Jurisprudencia CSJ:</strong> {q.csjPrecedent}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* BARRA INFERIOR DE PAGINACIÓN */}
          <ModulePaginationBar
            currentPage={validCurrentPage}
            totalPages={totalPages}
            totalItems={filteredQuestions.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={(size) => {
              setItemsPerPage(size);
              setCurrentPage(1);
            }}
            itemLabel="reactivos notariales"
          />

          {/* Botones */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg border border-[#E5E3D8] text-xs font-bold text-[#475569] hover:bg-[#FAF9F5] transition-colors flex items-center gap-1.5 cursor-pointer font-mono-exam"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpiar Respuestas</span>
            </button>

            {!isGraded ? (
              <button
                onClick={() => setIsGraded(true)}
                className="px-5 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-subtle flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C59B27]" />
                <span>Calificar y Ver Solucionario Jurisprudencial</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleReset();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-lg bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] text-xs font-bold transition-all shadow-corporate-subtle flex items-center gap-2 cursor-pointer font-mono-exam"
              >
                <span>Volver a Intentar</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotaryExamView;
