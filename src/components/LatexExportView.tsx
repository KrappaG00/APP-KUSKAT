import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, Download, Sparkles } from 'lucide-react';
import {
  Question,
  QUESTIONS_DATA,
  generateLatexDocument,
  generateOmrSheetLatex,
} from '../data';

export type LatexScope =
  | 'ALL'
  | 'UES'
  | 'ESCALAFON'
  | 'AVANZO'
  | 'ASD'
  | 'ENA'
  | 'ANSP'
  | 'INGLES'
  | 'custom'
  | 'OMR_50'
  | 'OMR_100';

interface LatexExportViewProps {
  initialScope?: LatexScope;
  customQuestions?: Question[] | null;
  customTitle?: string | null;
  showToast: (msg: string) => void;
  topAd?: React.ReactNode;
  middleAd?: React.ReactNode;
  bottomAd?: React.ReactNode;
}

export const LatexExportView: React.FC<LatexExportViewProps> = ({
  initialScope = 'ALL',
  customQuestions = null,
  customTitle = null,
  showToast,
  topAd,
  middleAd,
  bottomAd,
}) => {
  const [latexScope, setLatexScope] = useState<LatexScope>(initialScope);
  const [copiedLatex, setCopiedLatex] = useState<boolean>(false);

  useEffect(() => {
    setLatexScope(initialScope);
  }, [initialScope, customQuestions, customTitle]);

  const currentLatexCode = useMemo(() => {
    let targetQuestions = QUESTIONS_DATA;
    let docTitle =
      'Compilación Completa Kuskat (UES, ESCALAFÓN, AVANZO, ASD, ENA, ANSP & IDIOMAS)';

    if (latexScope === 'OMR_50') {
      return generateOmrSheetLatex(50, 'Evaluación Institucional KUSKAT (50 Ítems)');
    }
    if (latexScope === 'OMR_100') {
      return generateOmrSheetLatex(100, 'Evaluación Institucional KUSKAT (100 Ítems)');
    }

    if (latexScope === 'custom' && customQuestions && customQuestions.length > 0) {
      targetQuestions = customQuestions;
      docTitle = customTitle || 'Compilación Personalizada de Categoría';
    } else if (latexScope === 'UES') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'UES');
      docTitle = 'Admisión Universitaria UES';
    } else if (latexScope === 'ESCALAFON') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ESCALAFON');
      docTitle = 'Ascenso al Nivel Uno del Escalafón Docente 2026';
    } else if (latexScope === 'AVANZO') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'AVANZO');
      docTitle = 'Prueba Nacional AVANZO 2025';
    } else if (latexScope === 'ASD') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ASD');
      docTitle = 'Academia Sabatina Departamental (ASD)';
    } else if (latexScope === 'ENA') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ENA');
      docTitle = 'Escuela Nacional de Agricultura "Roberto Quiñónez" (ENA)';
    } else if (latexScope === 'ANSP') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ANSP');
      docTitle = 'Academia Nacional de Seguridad Pública (ANSP)';
    } else if (latexScope === 'INGLES') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'INGLES');
      docTitle = 'Compendio de Idiomas • Inglés Internacional (A1-C2)';
    }

    return generateLatexDocument(targetQuestions, docTitle);
  }, [latexScope, customQuestions, customTitle]);

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(currentLatexCode);
    setCopiedLatex(true);
    showToast('¡Código LaTeX copiado al portapapeles!');
    setTimeout(() => setCopiedLatex(false), 2500);
  };

  const handleDownloadLatex = () => {
    const blob = new Blob([currentLatexCode], { type: 'text/x-tex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `banco_preguntas_kuskat_${latexScope.toLowerCase()}.tex`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Descargando archivo .tex...');
  };

  return (
    <div className="space-y-6">
      {topAd ?? null}

      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Exportador de Documentos LaTeX
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Genera código fuente estándar compilable en Overleaf o TeX Live con clave y solucionario.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyLatex}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              {copiedLatex ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedLatex ? '¡Copiado!' : 'Copiar .tex'}</span>
            </button>

            <button
              onClick={handleDownloadLatex}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar .tex</span>
            </button>
          </div>
        </div>

        {/* Selector de Alcance */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">Alcance:</span>
          <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold overflow-x-auto scrollbar-none touch-scroll max-w-full gap-1">
            {customQuestions && (
              <button
                onClick={() => setLatexScope('custom')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                  latexScope === 'custom' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                }`}
              >
                {customTitle || 'Selección de Categoría'} ({customQuestions.length})
              </button>
            )}
            <button
              onClick={() => setLatexScope('ALL')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Todo el Banco ({QUESTIONS_DATA.length})
            </button>
            <button
              onClick={() => setLatexScope('UES')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'UES' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              UES
            </button>
            <button
              onClick={() => setLatexScope('ESCALAFON')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'ESCALAFON' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Escalafón
            </button>
            <button
              onClick={() => setLatexScope('AVANZO')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'AVANZO' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              AVANZO
            </button>
            <button
              onClick={() => setLatexScope('ASD')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'ASD' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              ASD
            </button>
            <button
              onClick={() => setLatexScope('ENA')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'ENA' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              ENA
            </button>
            <button
              onClick={() => setLatexScope('ANSP')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                latexScope === 'ANSP' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              ANSP
            </button>
            <button
              onClick={() => setLatexScope('OMR_50')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 font-bold flex items-center gap-1 ${
                latexScope === 'OMR_50' ? 'bg-[#C59B27] text-[#0B1B3D] shadow-xs' : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
              }`}
            >
              <span>Hoja OMR (50 ítems)</span>
            </button>
            <button
              onClick={() => setLatexScope('OMR_100')}
              className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 font-bold flex items-center gap-1 ${
                latexScope === 'OMR_100' ? 'bg-[#C59B27] text-[#0B1B3D] shadow-xs' : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
              }`}
            >
              <span>Hoja OMR (100 ítems)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Visor de Código LaTeX */}
      <div className="bg-slate-950 rounded-3xl border border-slate-800 p-5 shadow-xl text-slate-200 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
            <span className="pl-2 font-bold text-slate-300">documento_kuskat.tex</span>
          </div>
          <span>{currentLatexCode.split('\n').length} líneas</span>
        </div>

        <pre className="font-mono text-xs leading-relaxed overflow-x-auto touch-scroll text-emerald-400 max-h-[500px]">
          <code>{currentLatexCode}</code>
        </pre>
      </div>

      {middleAd ?? null}

      {/* Guía Rápida de Compilación */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Instrucciones de Compilación del Documento LaTeX</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">1. En Overleaf</span>
            <p className="text-slate-500 leading-relaxed">
              Crea un proyecto en blanco, reemplaza el contenido de main.tex por el código copiado y presiona Recompile (Ctrl + Enter).
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">2. En TeX Live / MiKTeX</span>
            <p className="text-slate-500 leading-relaxed">
              Descarga el archivo .tex y compila con el motor pdflatex o xelatex para obtener el documento tipográfico listo para imprimir.
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <span className="font-bold text-slate-900 block">3. Paquetes Incluidos</span>
            <p className="text-slate-500 leading-relaxed">
              Incluye amsmath, amssymb, geometry, babel con soporte en español y solucionario con justificaciones pedagógicas completas.
            </p>
          </div>
        </div>
      </div>

      {/* Panel de Resumen Técnico */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-4 sm:p-5 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Documento estandarizado bajo normas tipográficas de la comunidad matemática y científica.</span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shrink-0">
          UTF-8 • TeX Live 2026 Compatible
        </span>
      </div>

      {bottomAd ?? null}
    </div>
  );
};

export default LatexExportView;
