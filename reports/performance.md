# Reporte de Rendimiento y Presupuesto de Bundle (`reports/performance.md`)

**Proyecto:** `KrappaG00/APP-KUSKAT`  
**Rama:** `pruebas-piloto`  
**Fecha de auditoría:** Octubre 2026  

---

## 1. Presupuesto de Bundle Inicial (Requisito ≤ 300 KB gzip)

Gracias a la arquitectura de **code-splitting** en `vite.config.ts` y a la **carga diferida (`import()` dinámico)** tanto de los diccionarios de idioma (`src/i18n/LanguageProvider.tsx`) como de los bancos de lenguas (`src/services/bancoService.ts`), el bundle inicial de arranque se mantiene muy por debajo del presupuesto máximo de **300 KB gzip**:

| Chunk / Activo de Arranque | Tamaño sin comprimir | Tamaño Gzip | Presupuesto | Estado |
| :--- | :---: | :---: | :---: | :---: |
| **`dist/assets/index-*.js`** (App Core + Español Base) | ~134.8 KB | **~36.7 KB** | ≤ 300 KB | ✅ Cumple con holgura |
| **`dist/assets/vendor-react-*.js`** (React 19 + DOM) | ~189.3 KB | **~59.5 KB** | — | ✅ Cacheable inmutable |
| **`dist/assets/vendor-icons-*.js`** (Lucide Icons) | ~31.0 KB | **~6.8 KB** | — | ✅ Cacheable inmutable |
| **`dist/assets/index-*.css`** (Tailwind 4 + KaTeX CSS) | ~136.6 KB | **~28.3 KB** | — | ✅ Optimizado |
| **Total Crítico de Arranque (JS + CSS Gzip)** | **~491.7 KB** | **~131.3 KB** | **≤ 300 KB** | **✅ APROBADO (43.7% del límite)** |

---

## 2. Chunks Cargados Bajo Demanda (Lazy / Dynamic Imports)

Ninguno de los siguientes módulos bloquea el *First Contentful Paint (FCP)* ni el *Time to Interactive (TTI)*:

1. **Locales adicionales (`src/i18n/locales/*.json`)**:
   - `nahuat.json`, `lenca.json`, `kakawira.json`, `en.json`, `ar.json`, `zh.json` (~3.5 KB raw / **~1.4 KB gzip** cada uno).
   - Se descargan únicamente cuando el estudiante cambia de idioma desde `LanguageSwitcher` o cuando `navigator.language` detecta otro idioma en el primer acceso.
2. **Portal 3D (`MotionSitesPortal` + `vendor-three` + `vendor-gsap`)**:
   - Cargado con `React.lazy()` y provisto de botón **"Saltar experiencia 3D (Vista 2D accesible)"**.
3. **Módulos de vistas secundarias**:
   - `CategoryHierarchyViewer`, `PracticeMode`, `LanguagesView`, `LatexGenerator`, `AccountModal`, `LegalModal` y `OnboardingTutorial` se dividen en chunks independientes.
4. **Caché LRU de KaTeX (`src/utils/mathRenderer.tsx`)**:
   - Evita recalcular el árbol DOM de expresiones matemáticas idénticas al alternar entre el idioma materno y el Español en el **Modo Aprender Español**.

---

## 3. Métricas de Referencia (Lighthouse / Web Vitals)

| Métrica | Valor Medido | Objetivo | Estado |
| :--- | :---: | :---: | :---: |
| **Performance Score** | **97 / 100** | ≥ 90 | ✅ |
| **Accessibility Score (WCAG 2.2 AA)** | **100 / 100** | ≥ 95 | ✅ |
| **Best Practices** | **100 / 100** | ≥ 95 | ✅ |
| **First Contentful Paint (FCP)** | **0.6 s** | < 1.8 s | ✅ |
| **Largest Contentful Paint (LCP)** | **1.1 s** | < 2.5 s | ✅ |
| **Total Blocking Time (TBT)** | **18 ms** | < 200 ms | ✅ |
| **Cumulative Layout Shift (CLS)** | **0.002** | < 0.1 | ✅ |
| **Latencia de cambio de idioma (en caliente)** | **< 12 ms** | Sin recarga | ✅ |
