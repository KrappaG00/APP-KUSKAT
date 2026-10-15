import React, { useState, useEffect } from 'react';
import { ExamCategory, SubjectMeta, Institution } from '../types';
import { fetchSubtopicQuestions, generateLatexForQuestions } from '../services/bancoService';
import { Download, Copy, Check, Search, FileCode, ExternalLink, HelpCircle } from 'lucide-react';

interface LatexViewerProps {
  category: ExamCategory;
  subjects: SubjectMeta[];
  onDownloadTex: (fileName: string, content?: string) => void;
}

export const LatexViewer: React.FC<LatexViewerProps> = ({ category, subjects, onDownloadTex }) => {
  const [selectedScope, setSelectedScope] = useState<string>('master'); // 'master' or subject/subtopic code
  const [latexContent, setLatexContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Reset scope when category changes
  useEffect(() => {
    setSelectedScope('master');
  }, [category]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const masterFile = category === 'ANSP' ? '/banco_preguntas_ansp.tex' : '/banco_preguntas_maestro.tex';

    if (selectedScope === 'master') {
      fetch(masterFile)
        .then((res) => res.text())
        .then((text) => {
          if (isMounted) {
            setLatexContent(text);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('Error loading master tex:', err);
          if (isMounted) setLoading(false);
        });
    } else {
      // Find subject or subtopic
      let foundTitle = '';
      let foundCode = selectedScope;
      for (const s of subjects) {
        if (s.id === selectedScope) {
          foundTitle = s.name;
          foundCode = s.codeRange;
          break;
        }
        const sub = s.subtopics.find((st) => st.id === selectedScope);
        if (sub) {
          foundTitle = sub.title;
          foundCode = sub.code;
          break;
        }
      }

      const targetInst: Institution = category === 'ALL' ? (selectedScope.startsWith('ansp_') ? 'ANSP' : 'UES') : category;
      fetchSubtopicQuestions(targetInst, selectedScope)
        .then((qList) => {
          if (isMounted) {
            const generated = generateLatexForQuestions(foundTitle, foundCode, qList, true);
            setLatexContent(generated);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('Error generating subtopic tex:', err);
          if (isMounted) setLoading(false);
        });
    }

    return () => {
      isMounted = false;
    };
  }, [category, selectedScope, subjects]);

  const handleCopy = () => {
    navigator.clipboard.writeText(latexContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (selectedScope === 'master') {
      const defName = category === 'ANSP' ? 'banco_preguntas_ansp.tex' : 'banco_preguntas_maestro.tex';
      onDownloadTex(defName, latexContent);
    } else {
      onDownloadTex(`banco_${category}_${selectedScope.replace(/[\.\s]/g, '_')}.tex`, latexContent);
    }
  };

  const lineCount = latexContent ? latexContent.split('\n').length : 0;
  const fileSizeKb = latexContent ? (new Blob([latexContent]).size / 1024).toFixed(1) : '0';

  const previewSnippet = React.useMemo(() => {
    if (!latexContent) return '';
    if (!searchQuery.trim()) {
      return latexContent.split('\n').slice(0, 100).join('\n');
    }
    const qLower = searchQuery.toLowerCase();
    const matched = latexContent
      .split('\n')
      .filter((l) => l.toLowerCase().includes(qLower))
      .slice(0, 100)
      .join('\n');
    return matched || '% No se encontraron coincidencias para la búsqueda.';
  }, [latexContent, searchQuery]);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header & Controls */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                Compilador LaTeX & KaTeX • {category}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-mono">
                {fileSizeKb} KB • {lineCount.toLocaleString()} líneas
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Exportador y Visor LaTeX ({category})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              {category === 'ANSP'
                ? 'Exporta el cuestionario oficial de 250 preguntas de la ANSP formateado en LaTeX con opciones múltiples y solucionario.'
                : 'Exporta la compilación completa de las 7,500 preguntas universitarias o selecciona materias y subtemas individuales.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Descargar .tex</span>
            </button>
          </div>
        </div>

        {/* Scope Selector */}
        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-center justify-between">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0 hidden sm:inline">
              Alcance:
            </span>
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="p-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-800 w-full sm:w-80 truncate"
            >
              <option value="master">
                {category === 'ANSP'
                  ? '📄 Documento Maestro ANSP (250 Preguntas)'
                  : '📄 Documento Maestro UES (7,500 Preguntas)'}
              </option>
              {subjects.map((subj) => (
                <optgroup key={subj.id} label={`${subj.number}. ${subj.name}`}>
                  <option value={subj.id}>
                    Materia {subj.number}. {subj.name} ({subj.totalQuestions} Q)
                  </option>
                  {subj.subtopics.length > 1 &&
                    subj.subtopics.map((st) => (
                      <option key={st.id} value={st.id}>
                        — {st.code} {st.title} ({st.questionCount} Q)
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Code Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar en código LaTeX..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>
        </div>
      </div>

      {/* Code Preview Box */}
      <div className="bg-slate-950 rounded-2xl sm:rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-xl text-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3 mb-3 sm:mb-4 font-mono">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shrink-0" />
            <span className="pl-1 sm:pl-2 text-slate-300 font-bold truncate">
              {selectedScope === 'master'
                ? category === 'ANSP'
                  ? 'banco_preguntas_ansp.tex'
                  : 'banco_preguntas_maestro.tex'
                : `banco_${selectedScope}.tex`}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 shrink-0">100 líneas {searchQuery && '(filtradas)'}</span>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-400 font-mono text-xs">
            Cargando código LaTeX...
          </div>
        ) : (
          <pre className="font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto touch-scroll text-emerald-400 max-h-[500px] scrollbar-thin">
            <code>{previewSnippet}</code>
          </pre>
        )}
      </div>

      {/* Compilation Guide */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex items-start gap-3.5 text-xs text-slate-600">
        <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <strong className="text-slate-800 block text-xs">
            ¿Cómo compilar este documento LaTeX?
          </strong>
          <p>
            El archivo generado es 100% estándar y compatible con cualquier compilador moderno (TeX Live, MiKTeX, Overleaf). Utiliza paquetes estándar como <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">amsmath</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">geometry</code>, <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">multicol</code> y <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-700 font-mono">tcolorbox</code>. Para compilarlo directamente en terminal, ejecuta <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-900 font-mono">pdflatex {category === 'ANSP' ? 'banco_preguntas_ansp.tex' : 'banco_preguntas_maestro.tex'}</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
