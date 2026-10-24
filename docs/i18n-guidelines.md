# Guía de Internacionalización e Interculturalidad Bilingüe — APP-KUSKAT (`docs/i18n-guidelines.md`)

## 1. Propósito Pedagógico y Epistemológico
El sistema multilingüe de **APP-KUSKAT** no trata a las lenguas originarias de El Salvador (**Náhuat**, **Lenca** y **Kakawira**) como simples decoraciones folclóricas ni como dialectos subordinados al español, sino como **vehículos legítimos de pensamiento científico, matemático, histórico y ciudadano**.

Simultáneamente, provee el **Modo "Aprender Español"** como puente de Educación Intercultural Bilingüe (EIB) para que:
1. Comunidades hablantes o en proceso de revitalización de **Náhuat**, **Lenca** o **Kakawira** puedan estudiar el contenido desde su propia cosmovisión lingüística.
2. Estudiantes hablantes de lenguas extranjeras (**Inglés**, **Árabe** con soporte RTL y **Mandarín** con script logográfico) o de lenguas originarias adquieran el **español académico salvadoreño** requerido en pruebas nacionales (**UES**, **AVANZO**, **Escalafón Docente**, **ASD**, **ENA**, **ANSP**), comparando lado a lado los conceptos y consultando el glosario técnico contextual.

---

## 2. Arquitectura Técnica (`src/i18n/`)

```text
src/i18n/
├── index.ts                # Punto de entrada público (exports de hooks y utilidades)
├── types.ts                # Tipos estrictos TypeScript (AppLocale, LanguageMeta, GlossaryTerm, etc.)
├── LanguageProvider.tsx    # Contexto React 19, carga lazy de diccionarios, sincronización DOM y authService
├── questionTranslator.ts   # Traductor intercultural de reactivos y Glosario Técnico por lengua
└── locales/
    ├── es.json             # Español (base 100% y fallback garantizado)
    ├── nahuat.json         # Náhuat Pipil de El Salvador (Tushak / Witzapan)
    ├── lenca.json          # Lenca salvadoreño (Potón — Chilanga / Guatajiagua)
    ├── kakawira.json       # Kakawira / Cacaopera (Morazán)
    ├── en.json             # Inglés internacional (English)
    ├── ar.json             # Árabe estándar moderno (العربية — RTL obligatorio)
    └── zh.json             # Chino mandarín simplificado (中文 — script logográfico)
```

### 2.1 Decisiones de Ingeniería
- **Cero dependencias externas pesadas**: Se implementó un motor propio sobre React Context (`LanguageProvider`) con tipado estricto TypeScript (`strict: true`), evitando inflar el bundle inicial y manteniendo el presupuesto muy por debajo de **300 KB gzip**.
- **Carga diferida (`import()` dinámico)**: El idioma base (`es.json`) está disponible sincrónicamente para garantizar cero parpadeo y fallback instantáneo; cualquier otro idioma se descarga bajo demanda mediante `loadLocaleChunk(locale)`.
- **Persistencia doble**:
  - `localStorage` bajo la clave `kuskat.lang` (y `kuskat.learn_es` para el Modo Aprender Español).
  - Sincronización automática con el perfil del usuario autenticado (`authService.updateUserPreferredLanguage(locale)`).
- **Detección del navegador**: En el primer acceso sin preferencia previa, se inspecciona `navigator.language` y `navigator.languages`, con fallback seguro a `'es'`.
- **Nunca exponer claves crudas**: Si una clave no existiera en el idioma activo ni en `es.json`, el motor humaniza el último segmento de la clave y registra el aviso en consola durante desarrollo, jamás mostrando cadenas tipo `question.title.missing`.

---

## 3. Convenciones de Traducción, Tono y Nivel de Lectura

### 3.1 Principios Generales
1. **Autónimos obligatorios**: En todo selector de idioma (`LanguageSwitcher`), cada lengua se muestra siempre por su nombre propio nativo (`Español`, `Náhuat`, `Lenca`, `Kakawira`, `English`, `العربية`, `中文`).
2. **Iconografía culturalmente respetuosa**: No se utilizan banderas estatales extranjeras para representar pueblos originarios. Se emplean monogramas culturales estilizados (`NH`, `LN`, `KK`, `ES`, `EN`, `ع`, `中`) con alto contraste WCAG 2.2 AA.
3. **Preservación de notación matemática y científica**:
   - Toda expresión en LaTeX/KaTeX (`$...$`, `\(...\)`) debe mantenerse intacta durante la traducción.
   - En árabe (`dir="rtl"`), los bloques `.katex` se aíslan con `direction: ltr; unicode-bidi: isolate;` para que ecuaciones como \(f(x) = ax^2 + bx + c\) no inviertan el orden de sus operadores.

### 3.2 Criterio para Términos Técnicos en Lenguas Originarias
Al traducir reactivos de Matemática, Física, Química o Biología a **Náhuat**, **Lenca** o **Kakawira**:
- **Caso A — Término patrimonial o neologismo pedagógico consensuado**: Se utiliza el término propio acompañado de su explicación contextual en el Glosario Intercultural (ej. en Náhuat: *Tapual* para número/ecuación, *Koton / Tatzayanilis* para fracción, * Tatukalis* para fotosíntesis).
- **Caso B — Préstamo técnico justificado**: Cuando un tecnicismo internacional (ej. *logaritmo*, *estequiometría*, *electronegatividad*) no posee calco directo sin riesgo de distorsionar la precisión científica de una prueba de admisión universitaria, se conserva el préstamo técnico adaptado morfológicamente y se etiqueta explícitamente en la UI con el badge **`Préstamo técnico justificado`**, explicando su significado en la lengua materna.
