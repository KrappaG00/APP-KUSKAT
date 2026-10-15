import React from 'react';
import { ExamCategory, SubjectMeta } from '../types';
import {
  BookOpen,
  Layers,
  Award,
  FileCode,
  Download,
  Copy,
  Check,
  Calculator,
  Feather,
  Globe,
  Atom,
  Sparkles,
  Shield,
  GraduationCap,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Scale,
  BarChart3,
  Laptop,
} from 'lucide-react';

interface HeaderProps {
  category: ExamCategory;
  onSelectCategory: (cat: ExamCategory) => void;
  subjects: SubjectMeta[];
  activeSubjectId: string;
  onSelectSubject: (id: string) => void;
  activeTab: 'explorer' | 'practice' | 'curriculum' | 'latex';
  setActiveTab: (tab: 'explorer' | 'practice' | 'curriculum' | 'latex') => void;
  onDownloadMasterTex: () => void;
  onCopyMasterTex: () => void;
  copiedTex: boolean;
  totalQuestions: number;
  onOpenDeveloperModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  category,
  onSelectCategory,
  subjects,
  activeSubjectId,
  onSelectSubject,
  activeTab,
  setActiveTab,
  onDownloadMasterTex,
  onCopyMasterTex,
  copiedTex,
  totalQuestions,
  onOpenDeveloperModal,
}) => {
  const getSubjectIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Feather':
        return <Feather className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      case 'Atom':
        return <Atom className="w-4 h-4" />;
      case 'Landmark':
        return <Landmark className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Scale':
        return <Scale className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      case 'Laptop':
        return <Laptop className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Announcement & Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          {/* Working In Progress Notice */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-center sm:text-left flex-wrap justify-center">
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 text-[9px] sm:text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              En Desarrollo
            </span>
            <span className="font-medium text-slate-200 leading-tight">
              Trabajando en prueba AVANZO y material de medicina.
            </span>
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-slate-300 font-medium text-[10px] sm:text-xs shrink-0">
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors py-0.5"
              title="WhatsApp KUSKAT: +503 7657 4463"
            >
              <span className="text-emerald-400 font-bold">WhatsApp:</span>
              <span className="font-mono">+503 7657 4463</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 flex items-center gap-1 transition-colors py-0.5"
              title="Instagram: @Kuskat.es"
            >
              <span className="text-pink-400 font-bold">Instagram:</span>
              <span>@Kuskat.es</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
        {/* Title, Logo & Category Selector */}
        <div className="flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3.5 flex-wrap">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* KUSKAT Logo */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center p-1 sm:p-1.5 shrink-0 overflow-hidden">
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-sans">
                  KUSKAT
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-md border border-blue-200">
                  Banco Maestro
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium hidden sm:block">
                {category === 'UES'
                  ? 'Admisión Universitaria • 5 Materias • 25 Subtemas'
                  : 'Academia Nacional de Seguridad Pública • Prueba Cultural 2025'}
              </p>
            </div>
          </div>

          {/* Category Pill Switcher */}
          <div className="inline-flex items-center p-0.5 bg-slate-200/80 rounded-xl text-[11px] sm:text-xs font-bold">
            <button
              onClick={() => onSelectCategory('UES')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer ${
                category === 'UES'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>UES (7,500)</span>
            </button>

            <button
              onClick={() => onSelectCategory('ANSP')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer ${
                category === 'ANSP'
                  ? 'bg-indigo-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>ANSP (250)</span>
            </button>
          </div>
        </div>

        {/* Global Navigation Tabs & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-2 flex-wrap">
          {/* Creator Profile Button */}
          <button
            onClick={onOpenDeveloperModal}
            className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-700 text-[11px] sm:text-xs font-semibold transition-all cursor-pointer shadow-2xs group shrink-0"
            title="Conoce al creador del proyecto KUSKAT"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-amber-400 shrink-0">
              <img
                src="/yeferson_perez.jpg"
                alt="Yeferson E. Perez"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="hidden md:inline">Creador:</span>
            <span className="font-bold text-slate-900 truncate max-w-[110px] sm:max-w-none">
              Yeferson E. Perez
            </span>
          </button>

          {/* Main Desktop & Tablet Navigation */}
          <nav className="flex items-center bg-slate-100 p-0.5 sm:p-1 rounded-xl text-[11px] sm:text-xs font-semibold text-slate-600 overflow-x-auto scrollbar-none touch-scroll max-w-full">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'explorer'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Explorador</span>
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'practice'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Simulador</span>
            </button>
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'curriculum'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Temario ({subjects.length})</span>
              <span className="sm:hidden">Temario</span>
            </button>
            <button
              onClick={() => setActiveTab('latex')}
              className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
                activeTab === 'latex'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'hover:text-slate-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>LaTeX</span>
            </button>
          </nav>

          {/* Quick LaTeX Action Buttons */}
          <div className="hidden lg:flex items-center gap-1.5 pl-2 border-l border-slate-200">
            <button
              onClick={onCopyMasterTex}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              title="Copiar documento LaTeX completo al portapapeles"
            >
              {copiedTex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedTex ? '¡Copiado!' : 'Copiar .tex'}</span>
            </button>

            <button
              onClick={onDownloadMasterTex}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              title="Descargar documento LaTeX Maestro"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .tex</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subject Selector Bar */}
      <div className="bg-slate-50/90 border-t border-slate-200/80 px-3 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none touch-scroll py-0.5">
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            {category === 'UES' ? 'Materias:' : 'Temario:'}
          </span>
          {subjects.map((subj) => {
            const isActive = subj.id === activeSubjectId;
            return (
              <button
                key={subj.id}
                onClick={() => {
                  onSelectSubject(subj.id);
                  if (activeTab !== 'explorer' && activeTab !== 'practice') {
                    setActiveTab('explorer');
                  }
                }}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-300 ring-2 ring-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span className={isActive ? 'text-blue-600' : 'text-slate-400'}>
                  {getSubjectIcon(subj.icon)}
                </span>
                <span className="whitespace-nowrap">{subj.number}. {subj.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                  isActive ? subj.badgeBg + ' ' + subj.badgeText : 'bg-slate-200 text-slate-600'
                }`}>
                  {subj.totalQuestions}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

