import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    minify: 'esbuild',
    cssMinify: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalized = id.replace(/\\/g, '/');
          if (normalized.includes('/node_modules/')) {
            if (normalized.includes('/react/') || normalized.includes('/react-dom/')) {
              return 'vendor-react';
            }
            if (normalized.includes('/three/')) {
              return 'vendor-three';
            }
            if (normalized.includes('/katex/')) {
              return 'vendor-katex';
            }
            if (normalized.includes('/lucide-react/')) {
              return 'vendor-icons';
            }
          }
          if (normalized.includes('/src/data/languages/english')) return 'data-lang-english';
          if (normalized.includes('/src/data/languages/nahuat')) return 'data-lang-nahuat';
          if (normalized.includes('/src/data/languages/lenca')) return 'data-lang-lenca';
          if (normalized.includes('/src/data/languages/kakawira')) return 'data-lang-kakawira';
          if (normalized.includes('/src/data/languages/german')) return 'data-lang-german';
          if (normalized.includes('/src/data/languages/arabic')) return 'data-lang-arabic';
          if (normalized.includes('/src/data/languages/mandarin')) return 'data-lang-mandarin';
        },
      },
    },
  },
});
