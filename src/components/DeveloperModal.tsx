import React from 'react';
import {
  X,
  MessageCircle,
  Instagram,
  Sparkles,
  Rocket,
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden relative animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer z-10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-7 text-white text-center relative overflow-hidden shrink-0">
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo and Developer Avatar */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 p-2 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                <img
                  src="/kuskat_logo.png"
                  alt="Logo KUSKAT"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg shrink-0">
                <img
                  src="/yeferson_perez.jpg"
                  alt="Yeferson E. Perez - Desarrollador KUSKAT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Desarrollador & Creador</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Yeferson E. Perez
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Fundador & Desarrollador del Proyecto KUSKAT
            </p>
          </div>
        </div>

        {/* Content Body - Scrollable on mobile */}
        <div className="p-5 sm:p-7 space-y-4 sm:space-y-5 text-slate-700 overflow-y-auto touch-scroll flex-1">
          {/* Biography & Academic Profile of Yeferson E. Perez */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-4 sm:p-5 rounded-2xl border border-slate-200/90 text-xs sm:text-sm space-y-3">
            <h4 className="font-extrabold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span>Perfil Académico & Biografía</span>
            </h4>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800 leading-snug font-medium">
                  <strong>Estudiante de Ciencias Computacionales y Ciencias Médicas, proximamente :).</strong>
                </p>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800 leading-snug font-medium">
                  <strong>Exalumno de Jóvenes Talento - ASD Morazán.</strong>
                </p>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <School className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-800 leading-snug font-medium">
                  <strong>Educación media cursada en CECEM.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* About KUSKAT */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs sm:text-sm leading-relaxed space-y-2">
            <h4 className="font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Sobre el Proyecto KUSKAT</span>
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              <strong>KUSKAT</strong> es una plataforma salvadoreña de preparación académica integral diseñada para maximizar el desempeño en pruebas de admisión universitaria (UES) y de la Academia Nacional de Seguridad Pública (ANSP).
            </p>
          </div>

          {/* Working in progress */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-200/80">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 text-white rounded-xl shrink-0 mt-0.5 shadow-xs">
                <Rocket className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                  Próximos Lanzamientos en Desarrollo:
                </p>
                <p className="text-xs font-semibold text-blue-800 leading-snug">
                  Trabajando en prueba AVANZO y material de medicina.
                </p>
                <div className="pt-1 flex flex-wrap gap-2 text-[11px] font-medium text-blue-700">
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-blue-200 shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Prueba AVANZO
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-blue-200 shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Material de Medicina
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Channels */}
          <div className="space-y-2.5 pt-1">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Canales de Comunicación & WhatsApp:
            </h4>

            {/* Business WhatsApp - KUSKAT */}
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-950 transition-all text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold">WhatsApp KUSKAT (Negocio)</span>
                  <span className="text-xs text-emerald-800 font-mono font-medium">+503 7657 4463</span>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-white text-emerald-700 px-2.5 py-1 rounded-xl shadow-2xs border border-emerald-200 shrink-0">
                Estudiantes
              </span>
            </a>

            {/* Personal WhatsApp - Yeferson Perez */}
            <a
              href="https://wa.me/50379439901?text=Hola%20Yeferson%20Perez,%20paso%20a%20saludar,%20estoy%20en%20la%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 text-blue-950 transition-all text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold">WhatsApp Personal (Yeferson E. Perez)</span>
                  <span className="text-xs text-blue-800 font-mono font-medium">+503 7943 9901</span>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-white text-blue-700 px-2.5 py-1 rounded-xl shadow-2xs border border-blue-200 shrink-0">
                Saludar
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 hover:bg-pink-100/80 border border-pink-200 text-slate-900 transition-all text-xs sm:text-sm font-semibold group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold">Instagram Oficial</span>
                  <span className="text-xs text-pink-700 font-medium">@Kuskat.es</span>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-white text-pink-700 px-2.5 py-1 rounded-xl shadow-2xs border border-pink-200 shrink-0">
                Seguir
              </span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center text-xs text-slate-500">
          <span>KUSKAT © 2026 • Todos los derechos reservados</span>
        </div>
      </div>
    </div>
  );
};

