# Análisis de Arquitectura y Estructura UI: Cursos Técnicos Vocacionales KUSKAT

**Fecha**: 2026-10-23  
**Autor**: Explorer 1 (Codebase & UI Structure)  
**Directorio de Trabajo**: `.agents/teamwork/explorer_survey_1`  
**Objetivo**: Estudio exhaustivo de `TechnicalCoursesView.tsx`, desacoplamiento a `src/data/technicalCoursesData.ts`, diseño curricular de 10 oficios vocacionales (40h cada uno, 400h totales), marco normativo salvadoreño (8 entidades) y requerimientos de UI para el simulador y visor de fórmulas.

---

## 1. Resumen Ejecutivo y Hallazgos Principales

1. **Ubicación del Componente en el Repositorio**:
   - El componente activo reside en `src/components/TechnicalCoursesView.tsx` (consumido vía lazy-load en `src/App.tsx:81`).
   - El directorio `src/views/` **no existe** en el proyecto (todos los módulos de vista residen en `src/components/`).
   - Para garantizar compatibilidad total retrocompatible frente a cualquier importador o referencia futura, se mantendrán las exportaciones en `src/components/TechnicalCoursesView.tsx` y se recomienda proveer un archivo de re-exportación en `src/views/TechnicalCoursesView.tsx`.

2. **Estado Actual de los Datos**:
   - En `src/components/TechnicalCoursesView.tsx:42-299`, el arreglo `TECHNICAL_COURSES` está acoplado monolíticamente dentro del archivo del componente.
   - Contiene actualmente **8 cursos**, cada uno con únicamente **3 módulos informales** (sin horas estipuladas, sin citas legales formales, sin fórmulas técnicas ni evaluaciones formativas).
   - Faltan los cursos #9 (*Mecánica y Mantenimiento Integral de Motocicletas*) y #10 (*Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales*).

3. **Alcance de la Transformación Requerida**:
   - Desacoplar todos los datos al nuevo archivo tipado `src/data/technicalCoursesData.ts`.
   - Expandir el catálogo a exactamente **10 cursos vocacionales**.
   - Reestructurar cada curso en exactamente **4 módulos de 10 horas teóricas** ($4 \times 10\text{h} = 40\text{h}$ por curso; $10 \times 40\text{h} = 400\text{h}$ globales).
   - Incorporar en cada módulo:
     - Competencias laborales según estándares INCAF / ITCA-FEPADE.
     - Marco legal salvadoreño con artículos textuales de las 8 entidades clave (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
     - Fórmulas de cálculo de taller (Ohm, caída de tensión, Heat Input, C:N de composta, Hazen-Williams, EOQ, cilindrada/compresión, etc.).
     - Procedimientos de seguridad y EPP bajo LGPRLT (D.L. 254) y D.E. 86.
     - Banco de autoevaluación interactiva con retroalimentación inmediata (mínimo 3 preguntas A/B/C/D por módulo = 12 por curso = 120 preguntas totales con IDs únicos).

---

## 2. Inspección del Componente Existente (`src/components/TechnicalCoursesView.tsx`)

### 2.1 Interfaz Original
```typescript
// src/components/TechnicalCoursesView.tsx líneas 23-40
export interface TechnicalCourse {
  id: string;
  title: string;
  category: string;
  icon: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  summary: string;
  targetAudience: string;
  modules: {
    number: number;
    title: string;
    description: string;
    practicalSkills: string[];
  }[];
  jobOpportunities: string[];
}
```

### 2.2 Inventario de Cursos Actuales (8 cursos existentes con 3 módulos cada uno)
1. `electricidad`: 'Electricidad Residencial e Industrial' (`Energía & Instalaciones`, ⚡) - 3 módulos
2. `electronica`: 'Electrónica Analógica y Digital' (`Tecnología & Hardware`, 🔬) - 3 módulos
3. `cocina-saludable`: 'Cocina Saludable y Nutrición Integral' (`Alimentación & Bienestar`, 🥗) - 3 módulos
4. `soldadura`: 'Soldadura por Arco Eléctrico y Procesos Industriales' (`Metalmecánica & Fabricación`, 🔥) - 3 módulos
5. `microsoldadura`: 'Microsoldadura y Reparación a Nivel de Componente' (`Reparación Especializada`, 🔬) - 3 módulos
6. `reparacion-dispositivos`: 'Reparación de Celulares y Computadoras (Laptops/PC)' (`Soporte Técnico & Hardware`, 📱) - 3 módulos
7. `agricultura-pequena`: 'Agricultura para Pequeños Cultivos y Huertos Urbanos' (`Agroecología & Autosuficiencia`, 🌱) - 3 módulos
8. `logistica-metrologia`: 'Logística de Almacenes y Metrología Logística' (`Cadena de Suministro & Calidad`, 📦) - 3 módulos

### 2.3 Limitaciones del Estado Actual
- **Falta de horas**: No hay cuantificación horaria ni desglose cronológico.
- **Falta de 4to módulo**: Todos los cursos tienen solo 3 módulos.
- **Cero referencias normativas salvadoreñas**: Ningún artículo del Código de Salud, LGPRLT, SIGET, MARN, MAG, ANDA, OSARTEC o INCAF.
- **Cero fórmulas de taller**: No se proporcionan cálculos de dimensionamiento ni variables de taller.
- **Cero evaluaciones formativas**: No hay preguntas de comprobación ni simulador de autoevaluación.
- **Ausencia de los cursos #9 y #10**:
  - Curso 9: Mecánica y Mantenimiento Integral de Motocicletas.
  - Curso 10: Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales.

---

## 3. Plan de Desacoplamiento a `src/data/technicalCoursesData.ts`

### 3.1 Modelo de Datos Extendido (Preservando 100% de Compatibilidad)
Para no romper ningún acceso previo a `course.modules[i].practicalSkills` o a los campos base del curso, la interfaz extendida mantiene todos los campos existentes y añade las nuevas capacidades:

```typescript
export interface LegalCitation {
  institution: 'SIGET' | 'MTPS' | 'MINSAL' | 'MARN' | 'MAG' | 'ANDA' | 'OSARTEC' | 'INCAF';
  law: string;
  articles: string;
  citationText: string;
}

export interface WorkshopFormula {
  title: string;
  formula: string;
  variables: { symbol: string; meaning: string; unit: string }[];
  example: string;
  practicalApplication: string;
}

export interface SafetyProcedure {
  title: string;
  protocol: string;
  normativeRef: string;
  epp: string[];
}

export interface CourseQuizQuestion {
  id: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalOrTechnicalBasis: string;
}

export interface TechnicalCourseModule {
  number: number; // 1 | 2 | 3 | 4
  title: string;
  hours: number; // Siempre exactamente 10
  objectives: string[];
  description: string;
  analyticalTopics: { topic: string; hours: number }[]; // Suma = 10h
  practicalSkills: string[]; // Retrocompatible
  legalFramework: LegalCitation[];
  workshopFormulas: WorkshopFormula[];
  safetyProcedures: SafetyProcedure[];
  quizQuestions: CourseQuizQuestion[]; // Mínimo 3 reactivos
}

export interface TechnicalCourse {
  id: string;
  title: string;
  category: string;
  icon: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  summary: string;
  targetAudience: string;
  totalHours: number; // Siempre exactamente 40
  normativeEntities: ('SIGET' | 'MTPS' | 'MINSAL' | 'MARN' | 'MAG' | 'ANDA' | 'OSARTEC' | 'INCAF')[];
  modules: TechnicalCourseModule[]; // Exactamente 4 módulos
  jobOpportunities: string[];
}
```

### 3.2 Estrategia de Re-exportación Retrocompatible
1. En `src/components/TechnicalCoursesView.tsx`:
   ```typescript
   export type {
     TechnicalCourse,
     TechnicalCourseModule,
     LegalCitation,
     WorkshopFormula,
     SafetyProcedure,
     CourseQuizQuestion,
   } from '../data/technicalCoursesData';
   export {
     TECHNICAL_COURSES,
     SALVADORAN_NORMATIVE_INSTITUTIONS,
   } from '../data/technicalCoursesData';
   ```
2. Crear un proxy en `src/views/TechnicalCoursesView.tsx`:
   ```typescript
   export * from '../components/TechnicalCoursesView';
   export { default } from '../components/TechnicalCoursesView';
   ```
   Esto asegura que tanto `import ... from '@/components/TechnicalCoursesView'` como `import ... from '@/views/TechnicalCoursesView'` funcionen de forma idéntica e impecable.

---

## 4. Marco Normativo Salvadoreño: Las 8 Entidades Obligatorias

| Sigla | Nombre Oficial de la Institución | Marco Legal Primario / Decretos | Aplicación Técnica Directa en los Cursos |
|---|---|---|---|
| **SIGET** | Superintendencia General de Electricidad y Telecomunicaciones | Ley General de Electricidad (D.L. 107), Reglamento D.E. 70, Acuerdos de Generación Distribuida (NTCOGD 343-E-2016) | Curso 1 (Electricidad: acometidas, tableros, categorías de electricistas) y Curso 2 (Electrónica). |
| **MTPS** | Ministerio de Trabajo y Previsión Social | Ley General de Prevención de Riesgos en los Lugares de Trabajo (LGPRLT D.L. 254), Reglamento D.E. 86 | Cursos 1, 2, 4, 5, 8, 9, 10: Seguridad eléctrica, trabajos en caliente (radio 11m, vigilante de fuego), manipulación manual de cargas (Art. 40: 25kg hombres, 15kg mujeres), zanjas y EPP. |
| **MINSAL** | Ministerio de Salud | Código de Salud (D.L. 955), RTCA 67.01.33:06 | Curso 3 (Cocina: Arts. 88-105 inocuidad, carnet de manipulador, POES/HACCP), Curso 7 (prohibición de aguas servidas en hortalizas) y Curso 10 (Arts. 56+ calidad del agua domiciliar). |
| **MARN** | Ministerio de Medio Ambiente y Recursos Naturales | Ley de Medio Ambiente (D.L. 233), Reglamento de RAEE (D.E. 41) | Curso 5 (Microsoldadura: baterías litio), Curso 6 (Reparación dispositivos: RAEE), Curso 9 (aceites usados de motos) y Curso 7 (conservación de suelos). |
| **MAG** | Ministerio de Agricultura y Ganadería | Ley sobre Control de Pesticidas, Fertilizantes y Productos para Uso Agropecuario (D.L. 315) | Curso 7 (Agricultura: prohibición de plaguicidas de etiqueta roja, fomento de bioinsumos CENTA). |
| **ANDA** | Administración Nacional de Acueductos y Alcantarillados | Normas Técnicas para Diseño y Acometidas de Agua Potable y Alcantarillado Sanitario | Curso 10 (Fontanería: diámetros mínimos, presiones residuales, cálculo de cisterna, materiales aprobados PVC/CPVC/PPR). |
| **OSARTEC / CIM** | Organismo Salvadoreño de Reglamentación Técnica / Centro de Investigaciones de Metrología | Ley del Sistema Salvadoreño para la Calidad (D.L. 805), Recomendación OIML R 76 | Curso 8 (Logística: aseguramiento metrológico de básculas industriales, pesaje comercial) y Curso 2 (calibración de multímetros). |
| **INCAF** | Instituto Nacional de Capacitación y Formación | Ley del INCAF (D.L. 896 de 2024, sustitutiva de INSAFORP) | Marco rector en los 10 cursos: definición de estándares por competencias laborales, diseño curricular y certificación técnica ocupacional. |

---

## 5. Diseño Curricular Detallado de los 10 Cursos (40h cada uno, 4 Módulos x 10h)

### Curso 1: Electricidad Residencial e Industrial (40h)
- **Categoría**: `Energía & Instalaciones` | **Icono**: `⚡`
- **Módulo 1 (10h)**: Fundamentos de Circuitos Eléctricos, Leyes Físicas y Mediciones.
  - *Fórmula*: Ley de Ohm y Ley de Watt ($V = I \cdot R$, $P = V \cdot I$).
  - *Leyes*: LGPRLT D.L. 254 Art. 18; INCAF D.L. 896.
- **Módulo 2 (10h)**: Instalaciones Residenciales, Canalización y Tableros de Distribución.
  - *Fórmula*: Caída de tensión monofásica ($\Delta V = \frac{2 \cdot K \cdot I \cdot L}{S} \le 3\%$).
  - *Leyes*: NEC / NFPA 70 Art. 210; SIGET Reglamento D.E. 70.
- **Módulo 3 (10h)**: Puesta a Tierra, Protección Diferencial (GFCI) y Balance de Cargas.
  - *Fórmula*: Resistencia de varilla Copperweld ($R \le 25\,\Omega$).
  - *Leyes*: SIGET Normativa de Enlaces; D.E. 86 Art. 52.
- **Módulo 4 (10h)**: Seguridad Ocupacional Eléctrica, Bloqueo/Etiquetado (LOTO) y Acometidas SIGET.
  - *Fórmula*: Corriente de cortocircuito disponible ($I_{cc} = \frac{V_n}{Z_{tr}}$) y energía de arco.
  - *Leyes*: MTPS D.E. 86 Arts. 45-58; SIGET Categorías de Electricistas.

### Curso 2: Electrónica Analógica y Digital (40h)
- **Categoría**: `Tecnología & Hardware` | **Icono**: `🔬`
- **Módulo 1 (10h)**: Componentes Pasivos, Semiconductores y Fuentes Lineales Reguladas.
  - *Fórmula*: Regulador LM317 ($V_{out} = 1.25\,(1 + \frac{R_2}{R_1}) + I_{adj} R_2$).
  - *Leyes*: OSARTEC D.L. 805; INCAF D.L. 896.
- **Módulo 2 (10h)**: Instrumentación de Laboratorio, Señales Periódicas y Osciloscopio Digital.
  - *Fórmula*: Período, frecuencia y valor eficaz ($V_{rms} = \frac{V_{peak}}{\sqrt{2}}$).
  - *Leyes*: CIM Metrología de Frecuencia; LGPRLT D.L. 254.
- **Módulo 3 (10h)**: Lógica Digital, Álgebra de Boole y Circuitos Temporizadores.
  - *Fórmula*: Frecuencia y ciclo de trabajo de NE555 astable ($f = \frac{1.44}{(R_1 + 2R_2) C}$).
  - *Leyes*: Estándar IPC; INCAF Competencias Digitales.
- **Módulo 4 (10h)**: Microcontroladores (Arduino/ESP32), Sensores y Protección ESD.
  - *Fórmula*: Divisor resistivo y resolución ADC ($V_{adc} = V_{in} \cdot \frac{ADC}{2^n - 1}$).
  - *Leyes*: ANSI/ESD S20.20; LGPRLT D.L. 254 ergonomía y riesgos ópticos.

### Curso 3: Cocina Saludable e Inocuidad Alimentaria (40h)
- **Categoría**: `Alimentación & Bienestar` | **Icono**: `🥗`
- **Módulo 1 (10h)**: Microbiología de ETAs y Normativa Sanitaria Salvadoreña.
  - *Fórmula*: Zona de Peligro de Temperatura ($5^\circ\text{C} - 60^\circ\text{C}$ máx 2h).
  - *Leyes*: MINSAL Código de Salud D.L. 955 Arts. 88-95 (Carnet de manipulador).
- **Módulo 2 (10h)**: Buenas Prácticas de Manufactura (BPM / RTCA) y Procedimientos POES.
  - *Fórmula*: Dilución de hipoclorito de sodio ($V_c = \frac{C_d \cdot V_d}{C_c}$).
  - *Leyes*: RTCA 67.01.33:06; MINSAL Art. 98.
- **Módulo 3 (10h)**: Sistema de Análisis de Peligros y Puntos Críticos de Control (HACCP).
  - *Fórmula*: Cocción mínima interna ($74^\circ\text{C}$ aves, $63^\circ\text{C}$ res/pescado).
  - *Leyes*: Codex Alimentarius / MINSAL D.L. 955 Art. 102.
- **Módulo 4 (10h)**: Técnicas de Cocción Saludables, Balance Nutricional y Gastronomía Nacional.
  - *Fórmula*: Cálculo de Factor de Rendimiento culinario ($\%R = \frac{EP}{AP} \times 100$).
  - *Leyes*: MTPS D.L. 254 seguridad en calderas/fogones; INCAF D.L. 896.

### Curso 4: Soldadura por Arco y Procesos Industriales (40h)
- **Categoría**: `Metalmecánica & Fabricación` | **Icono**: `🔥`
- **Módulo 1 (10h)**: Metalurgia Básica del Acero y Proceso SMAW (Electrodo Revestido).
  - *Fórmula*: Aporte térmico (*Heat Input*) ($H = \frac{60 \cdot V \cdot I}{1000 \cdot v} \times \eta$ en kJ/mm).
  - *Leyes*: AWS D1.1 Sección 4; INCAF D.L. 896.
- **Módulo 2 (10h)**: Procesos Semiautomáticos GMAW (MIG/MAG) y GTAW (TIG).
  - *Fórmula*: Caudal de gas de protección ($Q_{gas} \approx 12 - 18\,\text{L/min}$).
  - *Leyes*: MTPS LGPRLT D.L. 254; AWS D1.1.
- **Módulo 3 (10h)**: Inspección de Cordones de Soldadura, Criterios de Aceptación y END.
  - *Fórmula*: Carbono Equivalente ($CE = \%C + \frac{\%Mn}{6} + \frac{\%Cr + \%Mo + \%V}{5} + \frac{\%Ni + \%Cu}{15}$).
  - *Leyes*: OSARTEC D.L. 805 Ensayos Mecánicos; AWS D1.1 Sección 6.
- **Módulo 4 (10h)**: Seguridad en Trabajos en Caliente, Prevención de Incendios y D.E. 86 MTPS.
  - *Fórmula*: Radio de despeje de inflamables (11 metros bajo D.E. 86).
  - *Leyes*: MTPS D.E. 86 Arts. 310-325 (*Fire Watch* obligatorio 30 min post-trabajo); MARN D.L. 233.

### Curso 5: Microsoldadura y Reparación a Nivel de Componente (40h)
- **Categoría**: `Reparación Especializada` | **Icono**: `🔬`
- **Módulo 1 (10h)**: Instrumentación Microscópica, Químicos de Taller y Curvas Térmicas.
  - *Fórmula*: Punto eutéctico de aleaciones ($183^\circ\text{C}$ Sn63/Pb37 vs $217^\circ\text{C}$ SAC305).
  - *Leyes*: MTPS LGPRLT D.L. 254 extracción de vapores; OSARTEC D.L. 805.
- **Módulo 2 (10h)**: Lectura de Diagramas Esquemáticos, Boardviews y Remplazo SMD.
  - *Fórmula*: Capacidad de corriente de pistas de PCB (IPC-2152: $I = k \cdot \Delta T^b \cdot A^c$).
  - *Leyes*: IPC-A-610; INCAF D.L. 896.
- **Módulo 3 (10h)**: Reballing de Circuitos BGA, Extracción de Underfill y Micro-Jumpers.
  - *Fórmula*: Resistencia y caída de microhilo ($R = \rho \cdot \frac{L}{A}$).
  - *Leyes*: IPC 7711/7721 Rework and Repair; MARN D.L. 233.
- **Módulo 4 (10h)**: Estándares de Calidad IPC y Gestión Ambiental de Baterías de Litio.
  - *Fórmula*: Densidad energética de celdas de Li-ion ($Wh/kg = \frac{V_{nom} \cdot Ah}{Masa}$).
  - *Leyes*: MARN D.L. 233 y D.E. 41 manejo de pilas y acumuladores; MTPS D.E. 86.

### Curso 6: Reparación de Celulares y Computadoras (Laptops/PC) (40h)
- **Categoría**: `Soporte Técnico & Hardware` | **Icono**: `📱`
- **Módulo 1 (10h)**: Desensamble Físico, Mantenimiento Térmico y Remplazo de Periféricos.
  - *Fórmula*: Resistencia térmica del disipador ($R_{th} = \frac{T_j - T_a}{TDP}$ en $^\circ\text{C/W}$).
  - *Leyes*: MTPS D.L. 254 seguridad con alcohol isopropílico; INCAF D.L. 896.
- **Módulo 2 (10h)**: Secuencia de Encendido (*Power Sequence*) y Diagnóstico con Fuente DC.
  - *Fórmula*: Detección de consumos en reposo ($I_{leak} = \frac{P_{standby}}{V_{bat}}$).
  - *Leyes*: OSARTEC D.L. 805; SIGET Reglamento D.E. 70.
- **Módulo 3 (10h)**: Diagnóstico de BIOS/Firmware, Reflasheo y Solución Lógica.
  - *Fórmula*: Salud de disco duro y celdas flash SSD (TBW y S.M.A.R.T.).
  - *Leyes*: Ley Especial contra Delitos Informáticos D.L. 260 Arts. 6-12.
- **Módulo 4 (10h)**: Gestión de Residuos RAEE (D.E. 41 MARN) y Privacidad del Usuario.
  - *Fórmula*: Tasa de generación de chatarra electrónica ($kg\text{ RAEE}/año$).
  - *Leyes*: MARN D.E. 41 Reglamento Especial de Residuos Eléctricos; Constitución Art. 2.

### Curso 7: Agricultura Urbana y Pequeños Cultivos Agroecológicos (40h)
- **Categoría**: `Agroecología & Autosuficiencia` | **Icono**: `🌱`
- **Módulo 1 (10h)**: Edafología Práctica, Preparación Biointensiva y Enmiendas Orgánicas.
  - *Fórmula*: Relación Carbono/Nitrógeno en composta ($\text{C:N} = \frac{\sum (W_i \cdot C_i)}{\sum (W_i \cdot N_i)} \approx 25:1 - 30:1$).
  - *Leyes*: MAG D.L. 315; MARN D.L. 233 conservación de suelos.
- **Módulo 2 (10h)**: Sistemas Eficientes de Riego por Goteo y Cosecha de Lluvia.
  - *Fórmula*: Caudal total y evapotranspiración ($Q_t = n \cdot q_g$; $L_r = \frac{ET_c \cdot K_c}{E_a}$).
  - *Leyes*: MINSAL Código de Salud D.L. 955 Art. 74 (prohibición de aguas residuales); ANDA Normativa.
- **Módulo 3 (10h)**: Manejo Integrado de Plagas (MIP) y Biopreparados del CENTA.
  - *Fórmula*: Dosis de biopreparado de nim o sulfocalcico ($V_1 C_1 = V_2 C_2$).
  - *Leyes*: CENTA Guías Técnicas; MAG D.L. 315.
- **Módulo 4 (10h)**: Marco Legal de Control de Pesticidas del MAG (D.L. 315) y Soberanía.
  - *Fórmula*: Límite Máximo de Residuos (LMR en mg/kg).
  - *Leyes*: MAG D.L. 315 Ley sobre Control de Pesticidas; INCAF D.L. 896.

### Curso 8: Logística de Almacenes, Inventarios y Metrología (40h)
- **Categoría**: `Cadena de Suministro & Calidad` | **Icono**: `📦`
- **Módulo 1 (10h)**: Distribución en Planta (Layout), Flujos y Recepción de Mercancías.
  - *Fórmula*: Utilización de espacio volumétrico ($\eta_{cubo} = \frac{V_{util}}{V_{total}} \times 100$).
  - *Leyes*: MTPS LGPRLT D.L. 254 pasillos y salidas de emergencia; INCAF D.L. 896.
- **Módulo 2 (10h)**: Modelos de Inventario (EOQ, ROP y Clasificación ABC).
  - *Fórmula*: Lote Económico de Pedido de Wilson ($EOQ = \sqrt{\frac{2 \cdot D \cdot S}{H}}$).
  - *Leyes*: Código de Comercio Art. 411; OSARTEC D.L. 805.
- **Módulo 3 (10h)**: Metrología Legal e Industrial en Bodegas (CIM / OSARTEC OIML R 76).
  - *Fórmula*: Error máximo permitido de básculas ($EMP = \pm 1\,e$).
  - *Leyes*: OSARTEC D.L. 805 y OIML R 76 Instrumentos de Pesaje de Funcionamiento No Automático.
- **Módulo 4 (10h)**: Normativa Aduanera CAUCA IV, Estiba Segura SGA/GHS y Ergonomía MTPS.
  - *Fórmula*: Límite de carga manual (MTPS Art. 40: 25 kg hombres, 15 kg mujeres).
  - *Leyes*: CAUCA IV / RECAUCA IV Arts. 50-65; MTPS D.E. 86 ergonomía de levantamiento.

### Curso 9: Mecánica y Mantenimiento Integral de Motocicletas (40h - NUEVO)
- **Categoría**: `Transporte & Movilidad` | **Icono**: `🏍️`
- **Módulo 1 (10h)**: Principios Termodinámicos y Motores de Combustión 4T y 2T.
  - *Fórmula*: Cilindrada unitaria ($V_d = \frac{\pi}{4} D^2 S$) y Relación de Compresión ($r_c = \frac{V_d + V_c}{V_c}$).
  - *Leyes*: VMT Ley de Transporte Terrestre D.L. 86 Art. 24; INCAF D.L. 896.
- **Módulo 2 (10h)**: Sistemas de Alimentación (Carburador vs EFI), Sensores y Diagnóstico OBD.
  - *Fórmula*: Relación Estequiométrica Aire/Combustible ($\lambda = \frac{AFR_{real}}{14.7:1}$).
  - *Leyes*: MARN D.L. 233 emisiones vehiculares de gases; OSARTEC D.L. 805.
- **Módulo 3 (10h)**: Transmisión (Embrague, Caja, Cadena) y Frenos Hidráulicos (ABS/CBS).
  - *Fórmula*: Presión hidráulica en circuito de frenos (Pascal: $P = \frac{F_1}{A_1} = \frac{F_2}{A_2}$).
  - *Leyes*: VMT D.L. 86 especificaciones técnicas de seguridad en frenado; MTPS D.L. 254.
- **Módulo 4 (10h)**: Inspección Técnico-Mecánica VMT, Seguridad de Taller y Residuos MARN.
  - *Fórmula*: Profundidad mínima de labrado de neumáticos ($h_{tread} \ge 1.6\,\text{mm}$).
  - *Leyes*: VMT Reglamento General de Tránsito; MARN D.L. 233 manejo de aceites usados y baterías plomo-ácido; MTPS D.E. 86 ventilación de CO.

### Curso 10: Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales (40h - NUEVO)
- **Categoría**: `Hidráulica & Construcción` | **Icono**: `🔧`
- **Módulo 1 (10h)**: Hidráulica Básica Aplicada, Tuberías (PVC, CPVC, PPR Termofusión) y Accesorios.
  - *Fórmula*: Pérdida de carga por fricción de Hazen-Williams ($h_f = 10.67 \cdot \frac{L \cdot Q^{1.852}}{C^{1.852} \cdot D^{4.87}}$).
  - *Leyes*: ANDA Normas Técnicas para Instalaciones Domiciliares; INCAF D.L. 896.
- **Módulo 2 (10h)**: Redes Sanitarias de Desagüe, Sifones, Ventilaciones y Trampas de Grasa.
  - *Fórmula*: Pendiente mínima de drenaje sanitario ($S \ge 2\%$ para tubos $\le 3''$, $S \ge 1\%$ para $\ge 4''$).
  - *Leyes*: MINSAL Código de Salud D.L. 955 Arts. 56-65; ANDA Normas de Alcantarillado.
- **Módulo 3 (10h)**: Dimensionamiento de Cisternas, Bombas y Equipos Hidroneumáticos.
  - *Fórmula*: Capacidad de Cisterna ($V_{cisterna} = N_{personas} \cdot \text{Dotación} \cdot \text{Días de Reserva}$) y Potencia Hidráulica ($P_b = \frac{\gamma \cdot Q \cdot H}{75 \cdot \eta}$).
  - *Leyes*: ANDA Criterios de Abastecimiento; SIGET Seguridad de Motores.
- **Módulo 4 (10h)**: Normas Técnicas ANDA, Código de Salud (Arts. 56+) y Seguridad en Zanjas MTPS.
  - *Fórmula*: Presión de prueba hidrostática ($P_{prueba} = 1.5 \cdot P_{trabajo}$ durante 15 minutos sin caída).
  - *Leyes*: MTPS LGPRLT D.L. 254 y D.E. 86 Arts. 210-225 (apuntalamiento y entibado de zanjas $>1.20\text{ m}$); MINSAL D.L. 955.

---

## 6. Requerimientos de UI para la Nueva Experiencia Interactiva

### 6.1 Navegación Modular (4 Módulos x 10h)
- Selector de módulos en la cabecera del curso:
  - Botones tipo píldora/pestaña: `Módulo 1 (10h)`, `Módulo 2 (10h)`, `Módulo 3 (10h)`, `Módulo 4 (10h)`.
  - Indicador de progreso visual: total 40h teóricas, badge de INCAF.
  - Visualización del desglose analítico de temas con sus horas específicas (ej. 3h teoría, 4h laboratorio de taller, 3h seguridad y normativa = 10h).

### 6.2 Ficha de Marco Normativo Salvadoreño
- Componente de insignias legales oficiales para las 8 instituciones:
  - Tarjetas compactas o badges con acrónimo (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF), decreto legislativo oficial, y botón expandible para leer la cita textual exacta del artículo de ley aplicable.

### 6.3 Visor de Fórmulas Técnicas de Taller
- Panel dedicado con fondo contrastado y tipografía técnica:
  - Título del cálculo de taller.
  - Expresión matemática formateada (compatible con KaTeX / renderizado matemático nítido).
  - Tabla de variables con símbolo, significado y unidad de medida (V, A, W, kJ/mm, ppm, bar, PSI, etc.).
  - Ejemplo práctico de aplicación con datos numéricos de taller real salvadoreño.

### 6.4 Simulador de Autoevaluación Formativa
- Por cada módulo, cuestionario interactivo de 3 preguntas de opción múltiple:
  - Selección de opciones A, B, C, D con interacción reactiva.
  - Retroalimentación visual inmediata: verde esmeralda para la opción correcta, rojo suave para la incorrecta.
  - Despliegue de la justificación técnica exhaustiva y la fundamentación legal con número de artículo de ley salvadoreña.
  - Botón de reinicio de prueba y contador de puntaje obtenido.

### 6.5 Filtros Dinámicos y Buscador en Tiempo Real
- Buscador reactivo que filtra en vivo por:
  - Título del curso.
  - Resumen y perfil del aspirante.
  - Módulos, competencias prácticas y fórmulas.
  - Siglas de leyes salvadoreñas (ej. "MTPS", "SIGET", "ANDA", "HACCP", "NEC").
- Pestañas de categorías dinámicas:
  - `Todos (10)`
  - `Energía & Instalaciones`
  - `Tecnología & Hardware`
  - `Alimentación & Bienestar`
  - `Metalmecánica & Fabricación`
  - `Reparación Especializada`
  - `Soporte Técnico & Hardware`
  - `Agroecología & Autosuficiencia`
  - `Cadena de Suministro & Calidad`
  - `Transporte & Movilidad`
  - `Hidráulica & Construcción`

---

## 7. Plan de Verificación y Pruebas Automatizadas

Se especificará la suite `tests/technicalCourses.test.ts` con las siguientes validaciones:
1. **Conteo de Cursos**: `TECHNICAL_COURSES.length === 10`.
2. **Conteo de Módulos**: Cada curso tiene exactamente 4 módulos (`modules.length === 4`); total global de 40 módulos.
3. **Cómputo Horario**: Cada módulo tiene `hours === 10`, cada curso tiene `totalHours === 40`, suma total global de exactamente 400 horas teóricas.
4. **Marco Legal Salvadoreño**: Cada módulo cita al menos un decreto/artículo válido de las instituciones reguladoras (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
5. **Fórmulas de Taller**: Cada módulo incluye al menos una fórmula matemática con variables, ejemplo y aplicación.
6. **Integridad del Banco de Preguntas**: Cada módulo tiene al menos 3 preguntas de autoevaluación (120 reactivos totales).
7. **Unicidad de Identificadores**: 120 IDs de preguntas 100% únicos sin colisiones.
8. **Contrato de Opciones**: Todas las preguntas tienen 4 opciones (A, B, C, D), una respuesta correcta válida, explicación y base legal.
9. **Compatibilidad Retrocompatible**: Las interfaces y arreglos exportados desde `src/components/TechnicalCoursesView.tsx` mantienen paridad funcional completa.
10. **Invariantes del Sistema**: Cero errores en `npm run typecheck`, 100% pruebas en `npm test`, banco base intacto en `npm run validate:bank`, y 0 ocurrencias de teléfonos privados.
