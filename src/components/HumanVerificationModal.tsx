import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, Bot } from 'lucide-react';

export const VERIFICATION_STORAGE_KEY = 'kuskat_bot_challenge_date';

export const getTodayKey = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export interface HumanVerificationModalProps {
  onVerified?: () => void;
  forceOpen?: boolean;
}

export const HumanVerificationModal: React.FC<HumanVerificationModalProps> = ({
  onVerified,
  forceOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    try {
      const storedDate = localStorage.getItem(VERIFICATION_STORAGE_KEY);
      const today = getTodayKey();
      if (storedDate !== today) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } catch {
      // Si el acceso a localStorage está bloqueado, mostrar para asegurar verificación
      setIsOpen(true);
    }
  }, [forceOpen]);

  const OPTIONS = [
    { key: 'A', value: 3, label: '3' },
    { key: 'B', value: 4, label: '4' },
    { key: 'C', value: 5, label: '5' },
    { key: 'D', value: 22, label: '22' },
  ];

  const handleSelectOption = (value: number) => {
    setSelectedOption(value);
    setErrorMessage(null);

    // ¿Cuánto es 2 + 2 ? -> 4
    if (value === 4) {
      setIsSuccess(true);
      try {
        localStorage.setItem(VERIFICATION_STORAGE_KEY, getTodayKey());
      } catch {
        // Fallback silencioso
      }

      setTimeout(() => {
        setIsOpen(false);
        if (onVerified) {
          onVerified();
        }
      }, 700);
    } else {
      setIsSuccess(false);
      setErrorMessage('Respuesta incorrecta. Selecciona la opción correcta para continuar :)');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="human-verification-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-all duration-300"
      data-is-modal="true"
      data-testid="human-verification-modal"
    >
      <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 text-center shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
        {/* Cabecera / Icono */}
        <div className="flex flex-col items-center gap-2">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-xs transition-colors duration-200 ${
              isSuccess ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-700'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-8 h-8 animate-bounce" />
            ) : (
              <ShieldCheck className="w-8 h-8" />
            )}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-slate-500" />
            <span>Verificación de Seguridad</span>
          </div>

          <h2
            id="human-verification-title"
            className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight"
          >
            ¿Cuánto es 2 + 2 ?
          </h2>
        </div>

        {/* Mensaje obligatorio requerido por el usuario */}
        <div className="p-3.5 bg-blue-50/80 border border-blue-200/80 rounded-2xl text-blue-900 text-xs sm:text-sm font-medium leading-relaxed">
          Es un requisito para poder acceder al proyecto y asegurarnos que no eres un robot :)
        </div>

        {/* Opciones de Opción Múltiple */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {OPTIONS.map((opt) => {
            const isSelected = selectedOption === opt.value;
            const isCorrect = opt.value === 4;

            let buttonStyle =
              'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300';
            if (isSelected) {
              if (isCorrect) {
                buttonStyle = 'bg-emerald-600 text-white border-emerald-600 shadow-sm';
              } else {
                buttonStyle = 'bg-rose-50 text-rose-700 border-rose-300 ring-2 ring-rose-400/20';
              }
            }

            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => handleSelectOption(opt.value)}
                disabled={isSuccess}
                className={`py-3.5 px-4 rounded-xl text-base font-bold transition-all duration-150 border flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:scale-[1.02] active:scale-[0.98] ${buttonStyle}`}
                aria-label={`Opción ${opt.key}: ${opt.label}`}
              >
                <span className="text-xs font-mono opacity-60 font-semibold">{opt.key})</span>
                <span className="text-lg">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mensaje de Error */}
        {errorMessage && (
          <div
            className="flex items-center justify-center gap-2 text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 rounded-xl py-2 px-3 animate-shake"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Mensaje de Éxito */}
        {isSuccess && (
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl py-2 px-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>¡Acceso autorizado! Bienvenido a KUSKAT...</span>
          </div>
        )}

        <div className="text-[11px] text-slate-400 font-medium">
          Verificación diaria única • KUSKAT El Salvador
        </div>
      </div>
    </div>
  );
};
