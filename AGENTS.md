# Reglas Institucionales y Guardrails de Ingeniería — KUSKAT

Estas reglas son de cumplimiento obligatorio en toda modificación, expansión curricular o mantenimiento del repositorio KUSKAT:

## 1. Política Estricta de Citación Institucional
- **Prohibición de sitios terceros no oficiales:** Queda estrictamente prohibido citar, mencionar o enlazar sitios web pequeños, blogs o academias externas no oficiales (tales como *IurisAcademia*, *IurisCaeli*, *Englisch-hilfen.de*, *Englishteststore.net*, *Agendaweb.org* o similares).
- **Fuentes autorizadas:** Únicamente se permite citar y referenciar:
  1. **Instituciones oficiales de Gobierno:** Corte Suprema de Justicia (CSJ), Ministerio de Educación, Ciencia y Tecnología (MINED / ESMATE), Ministerio de Salud (MINSAL), Superintendencia de Regulación Sanitaria (SRS / DNM), Consejo Superior de Salud Pública (CSSP), Superintendencia del Sistema Financiero (SSF), Unidad de Investigación Financiera (UIF - FGR), Banco Central de Reserva (BCR), Superintendencia General de Electricidad y Telecomunicaciones (SIGET), Viceministerio de Transporte (VMT), Policía Nacional Civil (PNC) y Academia Nacional de Seguridad Pública (ANSP).
  2. **Organismos internacionales y entidades certificadoras de primer nivel:** SICA, SIECA, CEPAL, OMS/OPS, Consejo de Europa (MCER/CEFR), Cambridge Assessment English, British Council, ETS (TOEFL), AWS, NFPA/NEC.

## 2. Densidad Publicitaria y Cumplimiento Google AdSense (2 a 3 Anuncios por Página)
- **Límite por página:** Toda página o vista activa de la aplicación debe mostrar **mínimo 2 anuncios y máximo 3 anuncios** (`2 <= anuncios <= 3`), con la excepción estricta del **Portal de Inicio**, el cual **no contiene ningún anuncio** publicitario por instrucción expresa del usuario.
- **Cero apilamiento (No Ad Stacking):** Nunca colocar múltiples banners publicitarios consecutivos sin contenido editorial sustantivo entre ellos.
- **Compuertas de contenido (Content Guards):** Nunca renderizar anuncios en pantallas en carga (`isLoading`), vacías (`isEmpty`), modales de alerta/navegación o vistas con contenido insuficiente.

## 3. Estándar de Profundidad Pedagógica y Calidad de Bancos
- **Teoría sustantiva:** Cada unidad temática o lección debe desarrollar al menos **500 palabras sustantivas** de doctrina, normativa o explicación técnica real, sin plantillas repetitivas ni texto de relleno (*boilerplate*).
- **Casuística resuelta:** Cada unidad o categoría teórica debe incluir **5 ejemplos o casos prácticos resueltos paso a paso** con planteamiento, análisis/fórmula y resolución fundamentada.
- **Integridad de reactivos:** Todos los reactivos de opción múltiple (A, B, C, D) deben tener enunciados, opciones, explicaciones y análisis de distractores (`distractorRationale`) 100% únicos y coherentes. Queda prohibido inflar bancos clonando preguntas con sufijos como `(Reactivo ...)` o repetir múltiples veces `"Respuesta correcta"` en los distractores.

## 4. Invariantes de UI, Privacidad y Arquitectura
- **Menú superior responsive:** El encabezado principal (`HeaderNavbar` y `LanguageSwitcher`) debe mantenerse compacto y adaptable en pantallas móviles (desde 320px), garantizando que el botón **Menú** sea siempre 100% visible sin desbordamiento horizontal.
- **Portal de Inicio — Presentación del Fundador:** Denominado **Portal de Inicio** (completamente libre de anuncios) y con la presentación exclusiva de su fundador Yeferson E. Perez (sin espacios adicionales de colaboradores pendientes), sin el mapa de El Salvador.
- **Modelo 100% gratuito:** Cero muros de pago, suscripciones o bloqueos comerciales; 100% financiado por anuncios.
- **Privacidad y Banco Base:** Preservar intactos los 17,640 reactivos base en `public/data/`, conservar el WhatsApp oficial `+503 7657 4463` y mantener **0 ocurrencias** del número privado `7943 9901` en todo el repositorio.
