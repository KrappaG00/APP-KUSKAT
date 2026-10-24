import React from 'react';
import {
  X,
  MessageCircle,
  Instagram,
  Compass,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Award,
  School,
  UserCheck,
} from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0B1B3D]/70 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF9F5] rounded-xl border border-[#D5D3C7] shadow-corporate-elevated max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors cursor-pointer z-20"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Banner - Corporate Sovereign Navy */}
        <div className="bg-[#0B1B3D] border-b border-[#1A2E5A] p-6 text-white text-center relative overflow-hidden shrink-0">
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo and Developer Avatar */}
            <div className="flex items-center justify-center gap-3.5 mb-3.5">
              <div className="w-14 h-14 rounded-lg bg-[#07132B] p-2 border border-[#C59B27]/40 flex items-center justify-center shadow-sm">
                <img
                  src="/kuskat_logo.png"
                  alt="Logo KUSKAT"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-14 h-14 rounded-lg overflow-hidden border border-[#C59B27] shadow-sm shrink-0 bg-[#07132B]">
                <img
                  src="/yeferson_perez.jpg"
                  alt="Yeferson E. Perez - Desarrollador KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#132A5C] text-[#C59B27] text-[11px] font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30 mb-1.5">
              <span>Fundador & Desarrollador</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-editorial font-bold tracking-tight text-white">
              Yeferson E. Perez
            </h3>
            <p className="text-xs text-[#CBD5E1] font-sans-ui mt-0.5">
              Dirección Académica & Plataforma Tecnológica KUSKAT
            </p>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-5 sm:p-6 space-y-4 text-[#111625] overflow-y-auto touch-scroll flex-1 font-sans-ui">
          {/* Biography & Academic Profile */}
          <div className="bg-white p-4 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle space-y-3">
            <h4 className="font-mono-exam text-[11px] font-bold text-[#475569] uppercase tracking-wider flex items-center gap-2">
              <UserCheck className="w-3.5 h-3.5 text-[#0B1B3D]" />
              <span>Perfil Académico & Formación</span>
            </h4>

            <div className="space-y-2">
              <div className="flex items-start gap-2.5 p-2 rounded-md bg-[#FAF9F5] border border-[#E5E3D8]">
                <GraduationCap className="w-4 h-4 text-[#0B1B3D] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1E293B] leading-snug font-medium">
                  <strong>Estudiante de Ciencias Computacionales y Ciencias Médicas, proximamente :).</strong>
                </p>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-md bg-[#FAF9F5] border border-[#E5E3D8]">
                <Award className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1E293B] leading-snug font-medium">
                  <strong>Exalumno de Jóvenes Talento - ASD Morazán.</strong>
                </p>
              </div>

              <div className="flex items-start gap-2.5 p-2 rounded-md bg-[#FAF9F5] border border-[#E5E3D8]">
                <School className="w-4 h-4 text-[#9E472A] shrink-0 mt-0.5" />
                <p className="text-xs text-[#1E293B] leading-snug font-medium">
                  <strong>Educación media cursada en CECEM.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* About KUSKAT */}
          <div className="bg-[#F4F3ED] p-4 rounded-lg border border-[#E5E3D8] text-xs leading-relaxed space-y-1.5">
            <h4 className="font-mono-exam text-[11px] font-bold text-[#475569] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#0B1B3D]" />
              <span>Sobre el Proyecto KUSKAT</span>
            </h4>
            <p className="text-[#334155] leading-relaxed">
              <strong>KUSKAT</strong> es una plataforma salvadoreña de preparación académica integral diseñada para maximizar el desempeño en pruebas de admisión universitaria (UES) y de la Academia Nacional de Seguridad Pública (ANSP).
            </p>
          </div>

          {/* Institutional Agenda & R&D */}
          <div className="bg-white p-4 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#0B1B3D] text-[#C59B27] rounded-md shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider">
                  Agenda de Investigación & Desarrollo:
                </p>
                <p className="text-xs text-[#475569] leading-snug">
                  Trabajando en material de medicina. Los anuncios que contiene la página representan un apoyo económico directo para sustentar los estudios universitarios del desarrollador.
                </p>
                <div className="pt-1.5 flex flex-wrap gap-2 text-[11px] font-mono-exam">
                  <span className="inline-flex items-center gap-1 bg-[#FAF9F5] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#E5E3D8]">
                    <CheckCircle2 className="w-3 h-3 text-[#1E7E34]" /> Prueba AVANZO
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#FAF9F5] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#E5E3D8]">
                    <CheckCircle2 className="w-3 h-3 text-[#1E7E34]" /> Material de Medicina
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Official Communication Channels */}
          <div className="space-y-2 pt-1">
            <h4 className="text-[11px] font-bold font-mono-exam text-[#64748B] uppercase tracking-wider">
              Canales Oficiales de Comunicación:
            </h4>

            {/* Business WhatsApp - KUSKAT (Mandatory +503 7657 4463 preserved) */}
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#E5E3D8] hover:border-[#1E7E34] text-[#111625] transition-all text-xs font-semibold group cursor-pointer shadow-corporate-subtle"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#1E7E34] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-xs">WhatsApp KUSKAT (Oficial)</span>
                  <span className="text-xs text-[#1E7E34] font-mono-exam">+503 7657 4463</span>
                </div>
              </div>
              <span className="text-[11px] font-bold font-mono-exam bg-[#F4F3ED] text-[#1E7E34] px-2 py-0.5 rounded border border-[#E5E3D8] shrink-0">
                Atención Estudiantil
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-[#FAF9F5] border border-[#E5E3D8] hover:border-[#C59B27] text-[#111625] transition-all text-xs font-semibold group cursor-pointer shadow-corporate-subtle"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-xs">Instagram Institucional</span>
                  <span className="text-xs text-[#64748B] font-mono-exam">@Kuskat.es</span>
                </div>
              </div>
              <span className="text-[11px] font-bold font-mono-exam bg-[#F4F3ED] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#E5E3D8] shrink-0">
                Seguir
              </span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F2F1EA] px-6 py-3 border-t border-[#E5E3D8] text-center text-xs text-[#64748B] font-mono-exam">
          <span>KUSKAT © 2026 • Plataforma Académica Soberana</span>
        </div>
      </div>
    </div>
  );
};

