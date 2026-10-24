import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showDetails: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
    errorInfo: null,
    showDetails: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[KUSKAT ErrorBoundary] Uncaught runtime error caught:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoToSimulator = () => {
    try {
      localStorage.setItem('kuskat_3d_loader_seen', 'true');
    } catch {
      // ignore
    }
    window.location.href = window.location.pathname + '?tab=practice';
  };

  private handleResetAndGoHome = () => {
    try {
      localStorage.removeItem('kuskat_3d_loader_seen');
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.href = window.location.pathname + '?tab=categories';
  };

  private toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  public render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || 'Error desconocido';
      const stack = this.state.error?.stack || '';
      const componentStack = this.state.errorInfo?.componentStack || '';

      return (
        <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4 font-caslon text-slate-800">
          {/* Tarjeta de Recuperación KUSKAT */}
          <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 text-center space-y-6">
            {/* Logo e Icono */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-3 shadow-inner">
                <AlertTriangle className="w-8 h-8 text-amber-600 animate-pulse" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-montenegrin font-bold text-2xl text-slate-900 tracking-tight">KUSKAT</span>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Sistema de Recuperación
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-2">
                Se detectó una interrupción inesperada
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md leading-relaxed">
                El sistema aisló el error para prevenir pantallas en blanco y resguardar tu progreso. Puedes recargar o ingresar directamente a las secciones de estudio.
              </p>
            </div>

            {/* Botones de Acción de Recuperación Rápida */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Recargar</span>
              </button>

              <button
                onClick={this.handleGoToSimulator}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ir al Simulador</span>
              </button>

              <button
                onClick={this.handleResetAndGoHome}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Categorías</span>
              </button>
            </div>

            {/* Aviso informativo */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-left text-xs text-slate-600 space-y-1">
              <p className="font-bold text-slate-800">
                Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.
              </p>
              <p className="text-[11px] text-slate-500">
                Soporte directo vía WhatsApp: <a href="https://wa.me/50376574463" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">+503 7657 4463</a> • Instagram: <a href="https://instagram.com/Kuskat.es" target="_blank" rel="noopener noreferrer" className="text-pink-600 font-bold hover:underline">@Kuskat.es</a>
              </p>
            </div>

            {/* Desplegable de Detalles Técnicos */}
            <div className="pt-2 border-t border-slate-100 text-left">
              <button
                onClick={this.toggleDetails}
                className="flex items-center justify-between w-full text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors py-1 cursor-pointer"
              >
                <span>Detalles técnicos del error</span>
                {this.state.showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {this.state.showDetails && (
                <div className="mt-2 p-3 bg-slate-900 rounded-xl text-emerald-400 font-mono text-[11px] leading-relaxed max-h-48 overflow-y-auto space-y-2 border border-slate-800">
                  <p className="text-rose-400 font-bold">{errorMessage}</p>
                  {stack && <pre className="text-slate-400 whitespace-pre-wrap text-[10px]">{stack}</pre>}
                  {componentStack && (
                    <pre className="text-slate-500 whitespace-pre-wrap text-[9px] border-t border-slate-800 pt-1">
                      {componentStack}
                    </pre>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
