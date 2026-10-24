import React, { useState } from 'react';
import {
  FileText,
  Download,
  Copy,
  Check,
  Printer,
  Sparkles,
  BookOpen,
  Code,
  AlertTriangle,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';
import { ONE_PAGE_SHEETS, OnePageSheet } from '../data/onePageSheetsData';
import { KaTeXMath } from '../utils/mathRenderer';
import { AudioSpeechButton } from './AudioSpeechButton';

interface OnePageCheatSheetsViewProps {
  showToast?: (msg: string) => void;
}

export const OnePageCheatSheetsView: React.FC<OnePageCheatSheetsViewProps> = ({
  showToast,
}) => {
  const [selectedSheetId, setSelectedSheetId] = useState<string>(ONE_PAGE_SHEETS[0].id);
  const [copiedLatex, setCopiedLatex] = useState<boolean>(false);
  const [showCodeViewer, setShowCodeViewer] = useState<boolean>(false);

  const activeSheet: OnePageSheet =
    ONE_PAGE_SHEETS.find((s) => s.id === selectedSheetId) || ONE_PAGE_SHEETS[0];

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(activeSheet.latexCode);
    setCopiedLatex(true);
    setTimeout(() => setCopiedLatex(false), 2500);
    if (showToast) showToast('¡Código LaTeX copiado al portapapeles!');
  };

  const handleDownloadLatex = () => {
    const blob = new Blob([activeSheet.latexCode], { type: 'text/x-tex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeSheet.id}_kuskat_1page.tex`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (showToast) showToast(`Descargando ${link.download}...`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 font-sans-ui text-[#111625]">
      {/* Encabezado Corporativo Soberano */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Recursos Pedagógicos de 1 Página (Cheat Sheets) • LaTeX / PDF</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-editorial text-[#FAF9F5]">
            Formularios y Fichas Mnemotécnicas Ejecutivas
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Hojas de síntesis de altísima densidad visual y conceptual condensadas en <strong>exactamente 1 página tamaño carta</strong>. Diseñadas bajo tipografía matemática rigurosa para repaso rápido antes del examen y descarga ultraliviana (&lt;120 KB) compatible con Overleaf y TeX Live.
          </p>

          <div className="pt-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono-exam text-slate-400">Materias disponibles:</span>
            {ONE_PAGE_SHEETS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedSheetId(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedSheetId === s.id
                    ? 'bg-[#C59B27] text-[#0B1B3D] font-black shadow-xs'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.title.split(':')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ficha Activa y Barra de Acciones */}
      <div className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-7 space-y-6">
        {/* Cabecera de la Ficha Seleccionada */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E3D8] pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10.5px] font-mono-exam font-bold px-2 py-0.5 rounded border ${activeSheet.badgeColor}`}>
                {activeSheet.category.toUpperCase()}
              </span>
              <span className="font-mono-exam text-xs text-[#64748B]">
                {activeSheet.authority}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-editorial text-[#0B1B3D] pt-1 flex items-center gap-2">
              <span>{activeSheet.icon}</span>
              <span>{activeSheet.title}</span>
            </h3>
            <p className="text-xs text-[#475569] max-w-2xl leading-relaxed">
              {activeSheet.summary}
            </p>
          </div>

          {/* Botonera de Exportación */}
          <div className="flex items-center gap-2 flex-wrap shrink-0">
            <AudioSpeechButton
              id={`sheet-speech-${activeSheet.id}`}
              textToSpeak={`${activeSheet.title}. ${activeSheet.summary}`}
              label="Escuchar Resumen"
            />

            <button
              type="button"
              onClick={() => setShowCodeViewer(!showCodeViewer)}
              className="px-3 py-2 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] font-mono-exam text-xs font-bold rounded-lg border border-[#E5E3D8] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Code className="w-3.5 h-3.5 text-[#0B1B3D]" />
              <span>{showCodeViewer ? 'Ocultar .tex' : 'Ver Código .tex'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyLatex}
              className="px-3.5 py-2 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] font-mono-exam text-xs font-bold rounded-lg border border-[#E5E3D8] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              {copiedLatex ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Copiar .tex</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownloadLatex}
              className="px-3.5 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-mono-exam text-xs font-bold rounded-lg border border-[#1A2E5A] inline-flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Descargar .tex</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] font-mono-exam text-xs font-bold rounded-lg border border-[#E5E3D8] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Imprimir o Guardar como PDF de 1 página"
            >
              <Printer className="w-3.5 h-3.5 text-[#475569]" />
              <span>Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* Visor de Código Fuente LaTeX si está expandido */}
        {showCodeViewer && (
          <div className="bg-[#07132B] rounded-xl border border-[#1E3A70] p-4 text-[#FAF9F5] space-y-2 animate-fade-in">
            <div className="flex items-center justify-between text-xs border-b border-[#1E3A70] pb-2 font-mono-exam text-slate-400">
              <span className="font-bold text-[#C59B27]">Código Fuente Compilable en Overleaf / TeX Live:</span>
              <span>{activeSheet.latexCode.split('\n').length} líneas</span>
            </div>
            <pre className="font-mono-exam text-xs text-emerald-400 max-h-64 overflow-y-auto overflow-x-auto p-2 bg-[#0B1B3D] rounded border border-[#1A2E5A] leading-relaxed">
              <code>{activeSheet.latexCode}</code>
            </pre>
          </div>
        )}

        {/* Maquetación de la Ficha en 3 Columnas (Representación Fiel de 1 Página) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeSheet.sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E5E3D8] pb-2">
                  <h4 className="font-bold text-sm font-editorial text-[#0B1B3D]">
                    {sec.title}
                  </h4>
                  <span className="font-mono-exam text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded border border-[#E5E3D8]">
                    {sec.badge}
                  </span>
                </div>

                <p className="text-xs text-[#475569] leading-snug">
                  {sec.content}
                </p>

                {/* Fórmulas y Reglas */}
                <div className="space-y-2.5 pt-1">
                  {sec.formulasOrRules.map((item, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-white p-3 rounded-lg border border-[#E5E3D8] space-y-1.5"
                    >
                      <span className="font-mono-exam text-[11px] font-bold text-[#0B1B3D] block">
                        {item.label}:
                      </span>
                      <div className="bg-[#FAF9F5] p-2 rounded border border-[#EAE8DD] text-xs font-mono-exam text-[#0B1B3D] overflow-x-auto">
                        <KaTeXMath text={`$${item.formula}$`} />
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        <KaTeXMath text={item.explanation} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trampa Común de Examen */}
              <div className="bg-amber-50/80 p-3 rounded-lg border border-amber-200 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-mono-exam font-bold text-amber-900 text-[11px] uppercase tracking-wider">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>¡Trampa Común de Examen!</span>
                </div>
                <p className="text-amber-950 leading-relaxed text-[11px] pl-5">
                  {sec.commonPitfall}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de Página Institucional */}
        <div className="pt-4 border-t border-[#E5E3D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-exam text-[#64748B]">
          <span>Plataforma KUSKAT • Ficha Institucional de 1 Página Formato Carta</span>
          <span>WhatsApp Oficial: +503 7657 4463 • Libre Distribución</span>
        </div>
      </div>
    </div>
  );
};

export default OnePageCheatSheetsView;
