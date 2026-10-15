import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Settings2, X } from 'lucide-react';
import { getCookieConsent, saveCookieConsent } from '../services/authService';

interface CookieBannerProps {
  onOpenLegalModal: (tab: 'cookies') => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenLegalModal }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [preferencesEnabled, setPreferencesEnabled] = useState(true);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setShowBanner(true);
    }
  }, []);

  if (!showBanner) return null;

  const handleAcceptAll = () => {
    saveCookieConsent({ analytics: true, preferences: true });
    setShowBanner(false);
  };

  const handleOnlyNecessary = () => {
    saveCookieConsent({ analytics: false, preferences: false });
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    saveCookieConsent({
      analytics: analyticsEnabled,
      preferences: preferencesEnabled
    });
    setShowBanner(false);
  };

  return (
    <aside
      role="region"
      aria-label="Consentimiento de cookies"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-slate-900/95 border-t border-slate-700 backdrop-blur-md text-slate-200 shadow-2xl animate-fade-in"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              Privacidad y Cookies en KUSKAT
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                Solo texto • Cero rastreo invasivo
              </span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Utilizamos cookies técnicas necesarias para mantener tu sesión de simulador y resguardar tus respuestas. No empleamos cookies publicitarias ni compartimos tu información con terceros. Puedes consultar nuestra{' '}
              <button
                type="button"
                onClick={() => onOpenLegalModal('cookies')}
                className="text-blue-400 underline hover:text-blue-300 font-medium inline-block"
              >
                Política de Cookies
              </button>{' '}
              o personalizar tus preferencias.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto shrink-0 justify-end">
          <button
            type="button"
            onClick={() => setShowCustomize(!showCustomize)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-750"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Personalizar
          </button>
          <button
            type="button"
            onClick={handleOnlyNecessary}
            className="px-3 py-2 text-xs font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Solo Necesarias
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-sm"
          >
            <ShieldCheck className="w-4 h-4" />
            Aceptar Todas
          </button>
        </div>
      </div>

      {/* Modal / Panel de Personalización Desplegable */}
      {showCustomize && (
        <div className="max-w-6xl mx-auto mt-3 pt-3 border-t border-slate-800 text-xs grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Cookies Necesarias</p>
              <p className="text-[11px] text-slate-400">Sesión y respuestas del simulador</p>
            </div>
            <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-mono">
              Obligatorias
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Preferencias Visuales</p>
              <p className="text-[11px] text-slate-400">Recordar categorías y temas</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferencesEnabled}
                onChange={e => setPreferencesEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Optimización de Carga</p>
              <p className="text-[11px] text-slate-400">Métricas de velocidad anónimas</p>
            </div>
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={e => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-semibold"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
