import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Printer,
  FileCode,
  Share2,
  X,
  ExternalLink,
  Sparkles,
  QrCode,
  Check,
} from 'lucide-react';
import {
  AcademicCertificate,
  generateCertificateLatex,
} from '../services/certificateService';

interface CertificateModalProps {
  certificate: AcademicCertificate;
  isOpen: boolean;
  onClose: () => void;
  showToast?: (msg: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose,
  showToast,
}) => {
  const [copiedLatex, setCopiedLatex] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopyLatex = async () => {
    const code = generateCertificateLatex(certificate);
    try {
      await navigator.clipboard.writeText(code);
      setCopiedLatex(true);
      if (showToast) showToast('Código LaTeX del Diploma copiado al portapapeles');
      setTimeout(() => setCopiedLatex(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleCopyHash = async () => {
    try {
      await navigator.clipboard.writeText(certificate.verificationHash);
      setCopiedHash(true);
      if (showToast) showToast('Firma SHA-256 copiada');
      setTimeout(() => setCopiedHash(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(certificate.validationUrl);
      setCopiedLink(true);
      if (showToast) showToast('Enlace de validación pública copiado');
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/65 backdrop-blur-xs animate-fade-in font-sans-ui text-[#111625]"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] rounded-2xl border-2 border-[#C59B27] shadow-corporate-elevated max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera Superior de la Ventana */}
        <div className="bg-[#0B1B3D] p-4 sm:p-5 text-white border-b border-[#1A2E5A] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#C59B27]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-editorial text-white">
                Diploma Oficial de Acreditación KUSKAT
              </h3>
              <p className="text-[11px] text-slate-300 font-mono-exam">
                ID Oficial: {certificate.certificateId}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar diploma"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Diploma (Diseño Heráldico Imprimible) */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-5 print:p-0">
          <div
            id="printable-diploma"
            className="bg-white border-4 border-[#0B1B3D] p-6 sm:p-10 rounded-xl relative shadow-corporate-subtle space-y-6 text-center overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FAF9F5 0%, #FFFFFF 100%)',
            }}
          >
            {/* Filete ornamental interior dorado */}
            <div className="absolute inset-1.5 border border-[#C59B27] pointer-events-none rounded-lg" />

            {/* Encabezado Soberano */}
            <div className="space-y-1 relative z-10">
              <span className="font-mono-exam text-[10px] sm:text-xs font-bold text-[#0B1B3D] tracking-widest uppercase block">
                REPÚBLICA DE EL SALVADOR • CONSEJO EVALUATIVO SOBERANO
              </span>
              <h4 className="font-editorial text-xs sm:text-sm font-bold text-[#C59B27] tracking-wider uppercase">
                {certificate.institutionAuthority}
              </h4>
              <div className="pt-2">
                <span className="inline-block border-b-2 border-[#0B1B3D] pb-1 px-4 text-xl sm:text-3xl font-editorial font-bold text-[#0B1B3D] tracking-tight">
                  DIPLOMA DE ACREDITACIÓN
                </span>
              </div>
            </div>

            {/* Concesión al Estudiante */}
            <div className="space-y-2 relative z-10 py-1">
              <p className="text-xs text-[#64748B] italic">
                Por cuanto se hace constar solemnemente que:
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#0B1B3D] tracking-wide border-b border-[#E5E3D8] pb-2 inline-block px-6">
                {certificate.studentName.toUpperCase()}
              </h2>
              {certificate.studentId && (
                <p className="text-[11px] font-mono-exam text-[#64748B]">
                  Identificación: {certificate.studentId}
                </p>
              )}
            </div>

            {/* Logro y Módulo */}
            <div className="space-y-2 relative z-10 max-w-xl mx-auto">
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Ha completado y aprobado satisfactoriamente la evaluación teórica, normativa y pericial correspondiente a:
              </p>
              <div className="p-3 bg-[#FAF9F5] rounded-lg border border-[#C59B27]/40">
                <span className="font-editorial text-base sm:text-lg font-bold text-[#0B1B3D] block">
                  {certificate.moduleTitle}
                </span>
                <span className="text-xs font-mono-exam font-bold text-[#1E7E34] block mt-0.5">
                  Calificación Oficial Obtenida: {certificate.score} • (Mínimo: {certificate.passingScoreRequired})
                </span>
              </div>
              {certificate.honors && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#C59B27] text-[#C59B27] text-xs font-bold font-mono-exam">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{certificate.honors}</span>
                </div>
              )}
            </div>

            {/* Pie del Diploma con QR y Firmas */}
            <div className="pt-4 border-t border-[#EAE8DD] grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-xs relative z-10">
              {/* Firma 1 */}
              <div className="space-y-1 text-center order-2 sm:order-1">
                <div className="w-32 mx-auto border-b border-[#0B1B3D] pb-1 font-mono-exam text-[10px] text-slate-400">
                  Firma Electrónica
                </div>
                <span className="font-bold text-[#0B1B3D] block">Comité Evaluador</span>
                <span className="text-[10px] text-[#64748B] block">Plataforma KUSKAT</span>
              </div>

              {/* Código QR Verificable */}
              <div className="flex flex-col items-center justify-center space-y-1 order-1 sm:order-2">
                <img
                  src={certificate.qrSvgDataUrl}
                  alt={`Código QR de Verificación ${certificate.certificateId}`}
                  className="w-24 h-24 rounded-lg border border-[#0B1B3D]/30 p-1 bg-white shadow-2xs"
                />
                <span className="text-[9px] font-mono-exam text-[#64748B] tracking-tight">
                  Escanear para verificar
                </span>
              </div>

              {/* Firma 2 */}
              <div className="space-y-1 text-center order-3">
                <div className="w-32 mx-auto border-b border-[#0B1B3D] pb-1 font-mono-exam text-[10px] text-slate-400">
                  {certificate.issuedDateFormatted}
                </div>
                <span className="font-bold text-[#0B1B3D] block">Dirección de Acreditación</span>
                <span className="text-[10px] text-[#64748B] block">Sello Digital Verificado</span>
              </div>
            </div>

            {/* Huella Criptográfica SHA-256 */}
            <div className="pt-2 text-[10px] font-mono-exam text-[#64748B] bg-[#FAF9F5] p-2 rounded-md border border-[#E5E3D8] flex items-center justify-between gap-2 overflow-hidden">
              <span className="truncate">
                SHA-256: <strong>{certificate.verificationHash}</strong>
              </span>
              <button
                type="button"
                onClick={handleCopyHash}
                className="shrink-0 text-[#0B1B3D] hover:text-[#132A5C] flex items-center gap-1 cursor-pointer"
                title="Copiar Hash SHA-256 completo"
              >
                {copiedHash ? <Check className="w-3.5 h-3.5 text-[#1E7E34]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Barra de Acciones de Exportación */}
          <div className="flex items-center justify-between gap-2 flex-wrap pt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLatex}
                className="px-3.5 py-2 bg-white hover:bg-[#FAF9F5] border border-[#E5E3D8] hover:border-[#0B1B3D] rounded-lg text-xs font-mono-exam font-bold text-[#0B1B3D] flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="Copiar código LaTeX para compilar en Overleaf o TeX Live"
              >
                <FileCode className="w-4 h-4 text-[#C59B27]" />
                <span>{copiedLatex ? '¡Código LaTeX Copiado!' : 'Copiar Código LaTeX'}</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="px-3.5 py-2 bg-white hover:bg-[#FAF9F5] border border-[#E5E3D8] hover:border-[#0B1B3D] rounded-lg text-xs font-mono-exam font-bold text-[#0B1B3D] flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="Copiar enlace de validación"
              >
                <Share2 className="w-4 h-4 text-[#1E7E34]" />
                <span>{copiedLink ? '¡Enlace Copiado!' : 'Copiar Enlace'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] rounded-lg text-xs font-mono-exam font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4 text-[#C59B27]" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
