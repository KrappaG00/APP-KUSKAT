import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  HelpCircle,
  Library,
  ChevronDown,
  ChevronUp,
  FileText,
  BookmarkCheck,
  Scale,
  Award,
} from 'lucide-react';
import { CategoryTheoryItem, LanguageTheoryItem } from '../data/categoryTheoryData';
import { MathText } from './CategoryHierarchyViewer';

interface CategoryTheoryViewProps {
  theory: CategoryTheoryItem | LanguageTheoryItem;
  defaultExpanded?: boolean;
  onClose?: () => void;
  className?: string;
}

export const CategoryTheoryView: React.FC<CategoryTheoryViewProps> = ({
  theory,
  defaultExpanded = true,
  onClose,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [copiedCitationIndex, setCopiedCitationIndex] = useState<number | null>(null);

  const handleCopyCitation = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCitationIndex(index);
    setTimeout(() => {
      setCopiedCitationIndex(null);
    }, 2500);
  };

  const isCategoryItem = 'categoryName' in theory;
  const title = isCategoryItem ? theory.categoryName : `${theory.name} (${theory.nativeName})`;
  const badgeText = theory.badgeText;

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden transition-all ${className}`}
    >
      {/* Cabecera / Banner del Módulo Teórico */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 text-white cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="space-y-1.5 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/25 border border-blue-400/30 text-blue-300 text-xs font-bold font-mono">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>{theory.wordCount.toLocaleString()} palabras (≥500 ✓)</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Normas APA 7.ª Edición</span>
            </span>
            <span className="text-xs text-slate-300 font-mono hidden sm:inline-block">
              {badgeText}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-2">
            <span>{title}</span>
          </h3>
          <p className="text-xs text-slate-300 line-clamp-1">
            Fundamentación teórica profunda, justificación del porqué, ejemplos resueltos y bibliografía oficial APA 7.ª
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-bold bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-xl transition-colors cursor-pointer border border-white/15"
          >
            <span>{isExpanded ? 'Contraer Marco Teórico' : 'Expandir Teoría Completa'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Contenido Extendido de la Teoría */}
      {isExpanded && (
        <div className="p-5 sm:p-7 space-y-6 text-slate-800 text-xs sm:text-sm leading-relaxed">
          {/* 1. SECCIÓN: EL PORQUÉ (JUSTIFICACIÓN EPISTEMOLÓGICA Y NORMATIVA) */}
          <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <h4>1. El Porqué de la Categoría (Propósito, Marco Legal y Justificación):</h4>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify whitespace-pre-line">
              {theory.whyExplanation}
            </p>
          </div>

          {/* 2. SECCIÓN: TEORÍA Y MARCO CONCEPTUAL OFICIAL */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
              <h4>2. Marco Teórico y Desarrollo Académico Oficial:</h4>
            </div>
            <p className="text-slate-700 leading-relaxed text-justify whitespace-pre-line">
              {theory.detailedTheory}
            </p>
          </div>

          {/* 3. SECCIÓN: PRINCIPIOS RECTORES */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <h4>3. Principios Rectores y Estándares de Evaluación:</h4>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
              {theory.keyPrinciples.map((principle, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 bg-slate-50/80 p-3 rounded-xl border border-slate-100 text-xs text-slate-700"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <span className="leading-relaxed">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SECCIÓN: EJEMPLOS PRÁCTICOS MODELADOS CON RESOLUCIÓN */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <h4>4. Ejemplos Prácticos y Modelados con Solución Detallada:</h4>
            </div>

            <div className="space-y-4">
              {theory.examples.map((example, exIdx) => (
                <div
                  key={exIdx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                    <span className="font-bold text-xs text-indigo-900 font-mono">
                      #{exIdx + 1} • {example.title}
                    </span>
                    <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md">
                      Modelo Kuskat Oficial
                    </span>
                  </div>

                  <div className="font-medium text-slate-800 text-xs sm:text-sm leading-relaxed">
                    <MathText text={example.statement} />
                  </div>

                  {/* Opciones */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {example.options.map((opt) => {
                      const isCorrect = opt.key === example.correctAnswer;
                      return (
                        <div
                          key={opt.key}
                          className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[11px] shrink-0 ${
                              isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {opt.key}
                          </span>
                          <span className="pt-0.5">
                            <MathText text={opt.text} />
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explicación del ejemplo */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Clave Correcta: Opción {example.correctAnswer} — Justificación Analítica:</span>
                    </div>
                    <div className="text-slate-700 leading-relaxed pl-5 text-justify">
                      <MathText text={example.explanation} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. SECCIÓN: CITAS BIBLIOGRÁFICAS EN FORMATO APA 7.ª EDICIÓN */}
          <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-amber-200/80 flex-wrap gap-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs sm:text-sm uppercase tracking-wider">
                <Library className="w-4 h-4 text-amber-700 shrink-0" />
                <h4>5. Referencias Bibliográficas Oficiales en Formato APA 7.ª Edición:</h4>
              </div>
              <span className="text-[11px] font-bold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200 font-mono">
                {theory.apaReferences.length} Fuentes Citadas
              </span>
            </div>

            <p className="text-xs text-amber-900/80 leading-relaxed">
              Las siguientes referencias corresponden a los marcos regulatorios, decretos legislativos, programas oficiales del MINED y fuentes académicas arbitradas que sustentan epistemológicamente esta categoría:
            </p>

            <div className="space-y-2.5 pt-1">
              {theory.apaReferences.map((ref, rIdx) => {
                const isCopied = copiedCitationIndex === rIdx;
                return (
                  <div
                    key={rIdx}
                    className="bg-white rounded-xl border border-amber-200/90 p-3 sm:p-3.5 text-xs text-slate-800 flex items-start justify-between gap-3 shadow-2xs hover:border-amber-300 transition-colors"
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <p className="leading-relaxed text-justify font-sans">
                        {ref.formattedCitation}
                      </p>
                      {ref.url && (
                        <span className="inline-block text-[11px] text-blue-600 hover:text-blue-800 underline font-mono break-all">
                          {ref.url}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCitation(ref.formattedCitation, rIdx)}
                      className={`p-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                      title="Copiar cita en formato APA 7.ª Edición"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isCopied ? 'Copiada' : 'Copiar APA'}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
