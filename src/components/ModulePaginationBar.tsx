import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface ModulePaginationBarProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
  onItemsPerPageChange?: (newSize: number) => void;
  itemLabel?: string;
  className?: string;
}

export const ModulePaginationBar: React.FC<ModulePaginationBarProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemLabel = 'reactivos',
  className = '',
}) => {
  if (totalItems <= 0) return null;
  if (totalPages <= 1 && totalItems <= 10) return null;

  const validCurrentPage = Math.min(Math.max(1, currentPage), Math.max(1, totalPages));
  const startItem = totalItems === 0 ? 0 : (validCurrentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(validCurrentPage * itemsPerPage, totalItems);

  const handlePageSelect = (page: number) => {
    const targetPage = Math.min(Math.max(1, page), totalPages);
    if (targetPage !== currentPage) {
      onPageChange(targetPage);
      try {
        if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch {
        // Safe fallback in test or headless environments
      }
    }
  };

  const handleSizeChange = (size: number) => {
    if (onItemsPerPageChange && size !== itemsPerPage) {
      onItemsPerPageChange(size);
      try {
        if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch {
        // Safe fallback in test or headless environments
      }
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Paginación de reactivos"
      className={`bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 ${className}`}
    >
      <div className="text-xs text-slate-600 font-medium select-none text-center sm:text-left">
        Mostrando <strong className="text-slate-900 font-bold">{startItem}</strong>–<strong className="text-slate-900 font-bold">{endItem}</strong> de <strong className="text-slate-900 font-bold">{totalItems}</strong> {itemLabel}
      </div>

      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        {/* Selector de tamaño de bloque (10 o 20) */}
        {onItemsPerPageChange && (
          <div className="flex items-center gap-1 mr-2 text-xs text-slate-500 font-mono" aria-label="Selector de bloque">
            <span className="text-[11px] font-semibold text-slate-500">Bloque:</span>
            {[10, 20].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => handleSizeChange(size)}
                aria-label={`Mostrar bloques de ${size} reactivos`}
                aria-pressed={itemsPerPage === size}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  itemsPerPage === size
                    ? 'bg-[#0B1B3D] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}

        {/* Botón Primera Página */}
        <button
          type="button"
          disabled={validCurrentPage <= 1}
          onClick={() => handlePageSelect(1)}
          aria-label="Primera página"
          title="Primera página"
          className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer transition-colors"
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        {/* Botón Página Anterior */}
        <button
          type="button"
          disabled={validCurrentPage <= 1}
          onClick={() => handlePageSelect(validCurrentPage - 1)}
          aria-label="Página anterior"
          title="Página anterior"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer text-xs font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Indicador de Página */}
        <span
          className="px-3 py-1 font-mono text-xs font-bold text-slate-800 bg-slate-100/90 rounded-lg border border-slate-200"
          aria-current="page"
        >
          Pág. {validCurrentPage} de {Math.max(1, totalPages)}
        </span>

        {/* Botón Página Siguiente */}
        <button
          type="button"
          disabled={validCurrentPage >= totalPages}
          onClick={() => handlePageSelect(validCurrentPage + 1)}
          aria-label="Página siguiente"
          title="Página siguiente"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer text-xs font-semibold transition-colors"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Botón Última Página */}
        <button
          type="button"
          disabled={validCurrentPage >= totalPages}
          onClick={() => handlePageSelect(totalPages)}
          aria-label="Última página"
          title="Última página"
          className="p-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 disabled:opacity-35 disabled:cursor-not-allowed hover:bg-slate-100 cursor-pointer transition-colors"
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};
