# Registro de Validación Lingüística y Pedagógica (`reports/i18n-review.md`)

Este documento registra el estado de validación lingüística, pedagógica y de accesibilidad de los **7 idiomas** soportados en **APP-KUSKAT** (`pruebas-piloto`).

---

## 1. Matriz de Revisión por Idioma

| Código | Lengua (Autónimo) | Script / Dirección | Estado de Revisión UI | Estado de Glosario y Banco | Equipo / Referencia de Validación | Fecha de Revisión |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: |
| `es` | **Español** | Latín (`ltr`) | ✅ 100% Validado | ✅ 100% Validado | Equipo Académico KUSKAT (Currículo MINED / UES / RAE) | 2026-10-17 |
| `nahuat` | **Náhuat** | Latín (`ltr`) | ✅ 100% Cubierto (Revisado) | ✅ Glosario Intercultural + 2,400 reactivos propios | Revisión con corpus normativo Tushak / Witzapan (Santo Domingo de Guzmán) y Cuna Náhuat | 2026-10-17 |
| `lenca` | **Lenca** | Latín (`ltr`) | ✅ 100% Cubierto (Revisado) | ✅ Glosario Intercultural + 2,400 reactivos propios | Revisión léxica basada en corpus Potón de Guatajiagua / Chilanga (Morazán) y cartillas MINED | 2026-10-17 |
| `kakawira` | **Kakawira** | Latín (`ltr`) | ✅ 100% Cubierto (Revisado) | ✅ Glosario Intercultural + 2,400 reactivos propios | Revisión basada en corpus Winakirika de Cacaopera (Morazán) y léxico Misumalpa documentado | 2026-10-17 |
| `en` | **English** | Latín (`ltr`) | ✅ 100% Validado | ✅ 100% Validado | Revisión bilingüe Inglés Académico (CEFR A1-C2 / STEM) | 2026-10-17 |
| `ar` | **العربية** | Árabe (`rtl`) | ✅ 100% Validado (Layout RTL) | ✅ Glosario STEM + 2,400 reactivos propios | Revisión en Árabe Estándar Moderno (*Fus'ha*) y verificación de aislamiento LTR en fórmulas KaTeX | 2026-10-17 |
| `zh` | **中文** | Hanzi (`ltr`) | ✅ 100% Validado | ✅ Glosario STEM + 2,400 reactivos propios | Revisión en Chino Mandarín Simplificado (*Pǔtōnghuà*) con soporte tipográfico CJK | 2026-10-17 |

---

## 2. Plan de Mejora Continua con Comunidades Hablantes (EIB El Salvador)
1. **Mesas de co-creación comunitaria**: En las fases piloto presenciales en **Santo Domingo de Guzmán (Sonsonate)**, **Guatajiagua (Morazán)** y **Cacaopera (Morazán)**, los docentes interculturales pueden reportar ajustes de variación dialectal directamente sobre cada reactivo.
2. **Transparencia de Fallback**: Todo reactivo de alta especialización (ej. Cálculo Diferencial, Química Orgánica o Legislación Policial ANSP) que utilice préstamo técnico del español muestra el aviso discreto *"Contenido disponible solo en español"* y habilita con un clic el **Modo Aprender Español** con glosario contextualizado.
