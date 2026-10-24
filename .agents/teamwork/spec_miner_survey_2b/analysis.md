# Análisis y Especificación Técnica: Malla Curricular, Normativa Legal y Fórmulas de Taller para 10 Cursos Vocacionales en El Salvador

**Fecha**: 2026-10-23  
**Agente**: Spec Miner 2b (Curriculum & Legal Specs)  
**Directorio de Trabajo**: `.agents/teamwork/spec_miner_survey_2b`  
**Referencia Principal**: `ORIGINAL_REQUEST.md` (Requerimiento 2026-10-23T22:41:09Z) y `explorer_survey_1/handoff.md`  

---

## 1. Resumen Ejecutivo y Marco Metodológico

Esta especificación formaliza la expansión de los cursos vocacionales en la plataforma KUSKAT de 8 cursos con estructura preliminar a **10 especialidades técnicas completas**, cada una dividida estrictamente en **4 módulos temáticos de exactamente 10 horas teóricas** ($4 \times 10\text{h} = 40\text{h}$ por curso, totalizando **400 horas pedagógicas globales**). 

Cada módulo integra:
1. **Marco Normativo Salvadoreño Auténtico**: Articulación con 8 instituciones del Estado salvadoreño y sus decretos legislativos y ejecutivos vigentes.
2. **Fórmulas Matemáticas de Taller**: Ecuaciones aplicadas con desglose formal de variables, unidades del SI/ingeniería y ejercicios numéricos resueltos.
3. **Procedimientos de Seguridad y Salud Ocupacional**: Basados en el D.E. 86 y la LGPRLT (D.L. 254).
4. **Cuestionario Formativo de Autoevaluación**: 3 reactivos por módulo (12 por curso, 120 reactivos totales) con 4 opciones (A, B, C, D), clave correcta, retroalimentación técnica y fundamentación jurídica.

---

## 2. Mapeo Legal y Normativo de El Salvador (8 Instituciones Clave)

El diseño curricular se fundamenta rigurosamente en las siguientes ocho entidades normativas de El Salvador:

| # | Institución | Instrumento Jurídico Primario | Artículos Clave y Mandato Técnico |
|---|---|---|---|
| 1 | **INCAF** (Instituto Nacional de Capacitación y Formación) | **Decreto Legislativo No. 896** (D.O. No. 240, Tomo No. 441 del 22 de diciembre de 2023, vigente desde enero 2024; deroga la Ley de INSAFORP) | **Arts. 1, 3, 8 y 16**: Rectoría nacional de la formación técnica profesional, normalización de competencias laborales, acreditación de planes de estudio por horas pedagógicas y certificación ocupacional para la inserción productiva. |
| 2 | **MTPS** (Ministerio de Trabajo y Previsión Social) | **Ley General de Prevención de Riesgos en los Lugares de Trabajo (LGPRLT - D.L. 254)** y **Reglamento General (D.E. 86)** | **LGPRLT Arts. 8, 18, 34, 40** (Comités de seguridad ocupacional; suministro de EPP certificado; límite de carga manual: 25 kg hombres, 15 kg mujeres). **D.E. 86 Arts. 45-58** (Riesgo eléctrico y LOTO), **Arts. 210-225** (Excavaciones y zanjas $>1.20\text{ m}$ con entibado obligatorio), **Arts. 310-325** (Trabajos en caliente: radio de 11 m y *Fire Watch* 30-60 min). |
| 3 | **SIGET** (Superintendencia General de Electricidad y Telecomunicaciones) | **Ley General de Electricidad (D.L. 107)**, **Reglamento D.E. 70** y **Normas Técnicas de Conexión (NTCOGD 343-E-2016)** | **Arts. 1, 3, 66 y 74**: Requisitos de acometida, tableros de medición exterior, varilla de cobre Copperweld ($5/8'' \times 8\text{ ft}$, $R \le 25\,\Omega$), categorías de acreditación para electricistas (Cuarta a Primera Categoría) y código NEC / NFPA 70. |
| 4 | **MINSAL** (Ministerio de Salud) | **Código de Salud (Decreto Legislativo No. 955)** y **RTCA 67.01.33:06** | **Arts. 56 y sigs.** (Saneamiento ambiental y agua potable), **Art. 74** (Prohibición estricta de riego de hortalizas y frutas de consumo crudo con aguas residuales/servidas), **Arts. 88-105** (Inocuidad alimentaria, carnet de manipulador de alimentos obligatorio con coprocultivo/frotis, BPM y POES). |
| 5 | **MARN** (Ministerio de Medio Ambiente y Recursos Naturales) | **Ley del Medio Ambiente (D.L. 233)** y **Reglamento de Residuos Eléctricos y Electrónicos (RAEE - D.E. 41)** | **Arts. 48-52, 58, 65, 85-89**: Gestión y disposición final de residuos peligrosos (baterías de litio, acumuladores plomo-ácido, solventes, aceites lubricantes usados de motor y gases refrigerantes); principio de responsabilidad compartida y prevención de contaminación de suelos y mantos acuíferos. |
| 6 | **MAG** (Ministerio de Agricultura y Ganadería) | **Ley sobre Control de Pesticidas, Fertilizantes y Productos para Uso Agropecuario (D.L. 315)** | **Arts. 1-6, 12, 21, 28**: Registro de insumos agrícolas, prohibición de plaguicidas de extrema toxicidad (etiqueta roja / Banda Ia/Ib), límites máximos de residuos (LMR), tiempos de carencia y promoción de bioinsumos del CENTA. |
| 7 | **ANDA** (Administración Nacional de Acueductos y Alcantarillados) | **Normas Técnicas para Diseño y Construcción de Sistemas de Agua Potable y Alcantarillado Sanitario** | Criterios de acometida domiciliar ($\ge 1/2''$), presiones de servicio en la red ($10\text{ a }50\text{ m.c.a.}$ / $14.2\text{ a }71\text{ PSI}$), pendientes sanitarias mínimas ($2\%$ para $\phi \le 3''$, $1\%$ para $\phi \ge 4''$) y dimensionamiento de cisternas domiciliares ($150-250\text{ L/persona/día}$). |
| 8 | **OSARTEC / CIM** (Organismo Salvadoreño de Reglamentación Técnica / Centro de Investigaciones de Metrología) | **Ley del Sistema Salvadoreño para la Calidad (Decreto Legislativo No. 805)** | **Arts. 1-5, 24, 28-35**: Trazabilidad metrológica de instrumentos de medición (multímetros, torquímetros, manómetros, básculas de bodega bajo OIML R 76 y calibración de pesas clase $M_1/M_2$). |

---

## 3. Desglose Curricular Detallado de los 10 Cursos (40 Módulos x 10 Horas = 400 Horas)

### Curso 1: Electricidad Residencial e Industrial
- **ID**: `electricidad` | **Categoría**: `Energía & Instalaciones` | **Icono**: `⚡`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: SIGET, MTPS, INCAF, OSARTEC
- **Resumen**: Circuitos AC/DC, dimensionamiento según NEC (NFPA 70), acometidas SIGET, puesta a tierra y seguridad eléctrica LGPRLT/NFPA 70E.
- **Audiencia**: Electricistas, instaladores y técnicos de mantenimiento electromecánico.
- **Oportunidades Laborales**: Técnico electricista residencial certificado, instalador industrial, auxiliar de redes eléctricas.
- **Módulos**:
  1. *Módulo 1: Fundamentos de Circuitos y Leyes Eléctricas (10h)*:
     - Temas: Voltaje, corriente, resistencia (3h); Ley de Ohm y Ley de Watt (4h); Medición con multímetro y pinza amperimétrica (3h).
     - Competencias: Medir magnitudes eléctricas en tableros energizados; calcular corriente y potencia nominal de electrodomésticos.
     - Marco Legal: INCAF D.L. 896 Art. 3; LGPRLT D.L. 254 Art. 18.
     - Seguridad: EPP dieléctrico (calzado 18 kV, gafas Z87.1, guantes aislantes clase 00 para 500V).
  2. *Módulo 2: Instalaciones Residenciales, Canalización y Tableros (10h)*:
     - Temas: Canalización EMT y PVC (3h); Tableros de breakers y circuitos derivados (4h); Interruptores conmutados de 3 y 4 vías (3h).
     - Competencias: Alambrar tableros de distribución monofásicos 120/240V; balancear cargas entre fases A y B.
     - Marco Legal: SIGET Reglamento D.E. 70; NEC/NFPA 70 Art. 210.
     - Seguridad: Rotulación indeleble de circuitos y aislamiento en empalmes con cinta certificada UL 510.
  3. *Módulo 3: Sistemas de Puesta a Tierra y Protección Diferencial GFCI (10h)*:
     - Temas: Varilla Copperweld y electrodos de tierra (3h); Interruptores de falla a tierra GFCI y AFCI (4h); Medición de resistencia con telurómetro (3h).
     - Competencias: Instalar sistemas de puesta a tierra con resistencia $\le 25\,\Omega$; probar disparo de GFCI a $5\text{ mA}$.
     - Marco Legal: D.E. 86 MTPS Art. 52; SIGET Normas de Acometidas.
     - Seguridad: Conexión equipotencial de todas las carcasas metálicas de tableros y electrodomésticos.
  4. *Módulo 4: Seguridad Eléctrica Ocupacional, Protocolo LOTO y Normativa SIGET (10h)*:
     - Temas: Bloqueo y Etiquetado LOTO de 6 pasos (3h); Riesgo de arco eléctrico NFPA 70E (3h); Categorías de electricistas y trámites SIGET (4h).
     - Competencias: Ejecutar corte de energía con candado personal de seguridad; calcular corriente de cortocircuito disponible.
     - Marco Legal: LGPRLT D.L. 254 y D.E. 86 Arts. 45-58; SIGET Categorías de Acreditación.
     - Seguridad: Verificación de ausencia de tensión en los 3 conductores (fase-fase, fase-neutro, fase-tierra) antes de tocar bornes.

---

### Curso 2: Electrónica Analógica y Digital
- **ID**: `electronica` | **Categoría**: `Tecnología & Hardware` | **Icono**: `🔬`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: OSARTEC, MTPS, INCAF
- **Resumen**: Componentes pasivos/activos, fuentes de alimentación reguladas, osciloscopios, compuertas lógicas, microcontroladores y protección ESD.
- **Audiencia**: Técnicos mecatrónicos, reparadores electrónicos y desarrolladores de prototipos de automatización.
- **Oportunidades Laborales**: Técnico de laboratorio electrónico, diseñador de prototipos IoT, reparador de tarjetas de control industrial.
- **Módulos**:
  1. *Módulo 1: Componentes Pasivos, Semiconductores y Fuentes Lineales (10h)*:
     - Temas: Resistores, capacitores e inductores (3h); Diodos rectificadores y transistores BJT/MOSFET (4h); Fuentes reguladas con LM317/LM78xx (3h).
     - Competencias: Diseñar fuentes DC de voltaje variable con rizado menor a $10\text{ mV}$; comprobar semiconductores en placa.
     - Marco Legal: Ley del Sistema Salvadoreño para la Calidad D.L. 805; INCAF D.L. 896.
     - Seguridad: Descarga controlada de capacitores electrolíticos de potencia con resistencia de purga.
  2. *Módulo 2: Instrumentación de Laboratorio y Análisis de Señales (10h)*:
     - Temas: Osciloscopio digital y generador de funciones (4h); Mediciones de amplitud pico, RMS y frecuencia (3h); Atenuación con sondas 10X (3h).
     - Competencias: Medir señales analógicas y PWM con osciloscopio digital; depurar ruido de alimentación.
     - Marco Legal: CIM Directrices de Calibración; LGPRLT D.L. 254.
     - Seguridad: Respetar la tensión máxima de entrada del osciloscopio (300V CAT II) y conectar el caimán de tierra únicamente al chasis común.
  3. *Módulo 3: Lógica Digital, Álgebra Booleana y Circuitos Temporizadores (10h)*:
     - Temas: Compuertas lógicas TTL y CMOS (3h); Temporizador 555 en modo astable y monoestable (4h); Contadores y biestables flip-flop (3h).
     - Competencias: Montar circuitos osciladores con 555; simplificar funciones lógicas mediante mapas de Karnaugh.
     - Marco Legal: OSARTEC D.L. 805; Normas IPC.
     - Seguridad: Protección de circuitos integrados con diodos de libre circulación (flyback) en cargas inductivas.
  4. *Módulo 4: Microcontroladores, Adquisición de Señales y Protección ESD (10h)*:
     - Temas: Arquitectura básica de Arduino/ESP32 (3h); Entradas analógicas y conversión ADC (3h); Estándar de descarga electrostática ANSI/ESD S20.20 (4h).
     - Competencias: Programar lecturas analógicas con escalamiento lineal; manipular componentes sensibles en zona EPA (*ESD Protected Area*).
     - Marco Legal: ANSI/ESD S20.20; MTPS LGPRLT D.L. 254 ergonomía de banco y protección visual.
     - Seguridad: Pulsera antiestática conectada a tierra a través de resistor de $1\,\text{M}\Omega$.

---

### Curso 3: Cocina Saludable e Inocuidad Alimentaria
- **ID**: `cocina-saludable` | **Categoría**: `Alimentación & Bienestar` | **Icono**: `🥗`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: MINSAL, MTPS, INCAF
- **Resumen**: Microbiología de ETAs, Código de Salud (Arts. 88-105), carnet de manipulador, Buenas Prácticas de Manufactura (RTCA 67.01.33:06) y sistema HACCP/POES.
- **Audiencia**: Manipuladores de alimentos, chefs, cocineros institucionales y emprendedores gastronómicos.
- **Oportunidades Laborales**: Supervisor de inocuidad en restaurantes, jefe de cocina saludable, auditor de calidad en servicios de catering.
- **Módulos**:
  1. *Módulo 1: Microbiología de ETAs y Normativa Sanitaria Salvadoreña (10h)*:
     - Temas: Bacterias patógenas: Salmonella, E. coli, S. aureus (3h); Zona de peligro de temperatura ($5^\circ\text{C}-60^\circ\text{C}$) (4h); Trámite y requisitos del carnet de manipulador MINSAL (3h).
     - Competencias: Identificar fuentes de contaminación bacteriana; aplicar la regla de máximo 2 horas en zona de peligro.
     - Marco Legal: MINSAL Código de Salud D.L. 955 Arts. 88-95.
     - Seguridad: Lavado de manos clínico de 40 a 60 segundos con jabón antibacterial y secado con toalla de papel desechable.
  2. *Módulo 2: Buenas Prácticas de Manufactura (BPM) y Procedimientos POES (10h)*:
     - Temas: RTCA 67.01.33:06 en cocinas industriales (3h); Procedimientos Operativos Estandarizados de Sanitización (POES) (4h); Dosificación de hipoclorito de sodio en ppm (3h).
     - Competencias: Preparar soluciones cloradas para frutas/verduras (50 ppm) y superficies de corte (200 ppm); llevar bitácora de limpieza.
     - Marco Legal: RTCA 67.01.33:06; MINSAL Código de Salud Art. 98.
     - Seguridad: Uso de guantes impermeables y protección ocular al diluir productos químicos concentrados; prohibición de mezclar cloro con desengrasantes ácidos o amoníaco.
  3. *Módulo 3: Sistema HACCP y Control de Puntos Críticos (10h)*:
     - Temas: Los 7 principios del HACCP (3h); Puntos Críticos de Control (PCC) en cocción y enfriamiento (4h); Calibración de termómetros de vástago (3h).
     - Competencias: Monitorear temperaturas internas de cocción ($74^\circ\text{C}$ aves, $63^\circ\text{C}$ pescados/carnes rojas); registrar acciones correctivas.
     - Marco Legal: Codex Alimentarius; MINSAL Código de Salud Art. 102.
     - Seguridad: Calibración mensual del termómetro en baño de hielo ($0^\circ\text{C} \pm 1^\circ\text{C}$).
  4. *Módulo 4: Técnicas Culinarias Saludables, Balance Nutricional y Factor de Rendimiento (10h)*:
     - Temas: Métodos de cocción al vapor, horneado y sous-vide (3h); Factor de rendimiento culinario y costeo de mermas (4h); Gastronomía salvadoreña saludable (3h).
     - Competencias: Calcular factor de rendimiento (EP/AP) de carnes y vegetales; diseñar menús con vegetales autóctonos (chipilín, mora, loroco) sin exceso de sodio.
     - Marco Legal: LGPRLT D.L. 254 seguridad en calderas y freidoras; INCAF D.L. 896.
     - Seguridad: Zapatos cerrados con suela antideslizante certificada y mandil resistente al calor.

---

### Curso 4: Soldadura por Arco y Procesos Industriales
- **ID**: `soldadura` | **Categoría**: `Metalmecánica & Fabricación` | **Icono**: `🔥`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: MTPS, OSARTEC, INCAF, MARN
- **Resumen**: Metalurgia del acero, normas AWS D1.1, procesos SMAW/GMAW/GTAW y Permisos de Trabajo en Caliente bajo D.E. 86 del MTPS (radio 11m y *Fire Watch*).
- **Audiencia**: Soldadores, constructores metálicos, armadores industriales y supervisores de taller.
- **Oportunidades Laborales**: Soldador estructural homologado AWS D1.1, fabricante de recipientes no presurizados, inspector visual de uniones soldadas.
- **Módulos**:
  1. *Módulo 1: Metalurgia Básica del Acero y Proceso SMAW (10h)*:
     - Temas: Clasificación de electrodos AWS (E6011, E6013, E7018) (3h); Aporte térmico (*Heat Input*) en kJ/mm (4h); Parámetros de amperaje y polaridad DCEP/DCEN (3h).
     - Competencias: Regular amperaje según diámetro de varilla; calcular calor aportado para evitar zonas afectadas térmicamente (ZAT) frágiles.
     - Marco Legal: AWS D1.1 Sección 4; INCAF D.L. 896.
     - Seguridad: Careta fotosensible con filtro sombra DIN 10-12, peto de cuero descarne y polainas ignífugas.
  2. *Módulo 2: Procesos Semiautomáticos GMAW (MIG/MAG) y GTAW (TIG) (10h)*:
     - Temas: Alambre sólido ER70S-6 y gases de protección ($CO_2$, Argón/Mix) (3h); Velocidad de alambre y voltaje de arco (4h); Proceso GTAW para aceros inoxidables (3h).
     - Competencias: Calibrar caudal de gas entre 12 y 18 L/min; depositar cordones continuos sin porosidad en posiciones 1F y 2F.
     - Marco Legal: MTPS LGPRLT D.L. 254; AWS D1.1.
     - Seguridad: Sujeción vertical de cilindros de gas comprimido con doble cadena y capuchón protector en transporte.
  3. *Módulo 3: Criterios de Inspección Visual y Ensayos No Destructivos (10h)*:
     - Temas: Criterios de aceptación AWS D1.1 Sección 6 (3h); Carbono equivalente (CE) y susceptibilidad a fisuración (4h); Tintas penetrantes (PT) y partículas magnéticas (MT) (3h).
     - Competencias: Inspeccionar cordones visualmente descartando socavaciones mayores a $1\text{ mm}$ y poros agrupados; calcular requerimiento de precalentamiento según CE.
     - Marco Legal: Ley del Sistema Salvadoreño para la Calidad D.L. 805; AWS D1.1.
     - Seguridad: Ventilación e iluminación adecuada ($\ge 1000\text{ lux}$) para la inspección y uso de lentes con filtro UV para observadores adyacentes.
  4. *Módulo 4: Trabajos en Caliente, Prevención de Incendios y D.E. 86 MTPS (10h)*:
     - Temas: Permisos de trabajo en caliente (PT-C) (3h); Radio de seguridad de 11 metros (4h); Función del vigilante de incendios (*Fire Watch*) (3h).
     - Competencias: Diligenciar el permiso de trabajo en caliente antes de iniciar labores; verificar la ausencia de vapores inflamables con explosímetro.
     - Marco Legal: MTPS D.E. 86 Arts. 310-325; MARN D.L. 233.
     - Seguridad: Mantener vigilancia activa contra fuego durante el proceso y por al menos 30 a 60 minutos posteriores; extintor PQS de 20 lbs operativo a menos de 5 m.

---

### Curso 5: Microsoldadura y Reparación a Nivel de Componente
- **ID**: `microsoldadura` | **Categoría**: `Reparación Especializada` | **Icono**: `🔬`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: MTPS, MARN, OSARTEC, INCAF
- **Resumen**: Diagnóstico en esquemáticos y boardviews, perfiles térmicos, estándares IPC-A-610 / IPC 7711/7721, reballing BGA, micro-jumpers y gestión ambiental de baterías de litio.
- **Audiencia**: Reparadores de smartphones, tablets, laptops y técnicos de microelectrónica.
- **Oportunidades Laborales**: Especialista en microsoldadura SMD/BGA, técnico de laboratorio de recuperación de placas lógicas, micro-ensamblador certificado.
- **Módulos**:
  1. *Módulo 1: Instrumentación Microscópica, Químicos y Curvas Térmicas (10h)*:
     - Temas: Microscopios estereoscópicos y cautines C210/C245 (3h); Ley de Joule y transferencia térmica (4h); Aleaciones Sn63/Pb37 ($183^\circ\text{C}$) vs SAC305 ($217^\circ\text{C}$) (3h).
     - Competencias: Ajustar curvas de soldadura para evitar ampollado de la PCB (*delamination*); aplicar flux no-clean en dosis micrométricas.
     - Marco Legal: MTPS LGPRLT D.L. 254; OSARTEC D.L. 805.
     - Seguridad: Extracción obligatoria de vapores de colofonia con filtro de carbón activado para prevenir asma ocupacional.
  2. *Módulo 2: Interpretación de Esquemáticos, Boardviews y Remplazo SMD (10h)*:
     - Temas: Diagramas esquemáticos y nomenclatura de rieles (3h); Medición de líneas en escala de diodos (caída de tensión) (4h); Desoldeo y soldado de componentes 0201 y 0402 (3h).
     - Competencias: Localizar líneas en cortocircuito a tierra; reemplazar bobinas, condensadores y filtros EMI sin dañar componentes vecinos.
     - Marco Legal: Estándar IPC-A-610; INCAF D.L. 896.
     - Seguridad: Protección ESD con tapete disipativo conectado a tierra; uso de pinzas antimagnéticas de precisión.
  3. *Módulo 3: Reballing de Circuitos BGA y Reconstrucción con Micro-Jumpers (10h)*:
     - Temas: Limpieza de resina epóxica (underfill) a temperatura controlada (3h); Reballing con plantillas metálicas (stencils) (4h); Micro-jumpers con hilo esmaltado de $0.02\text{ mm}$ y curado UV (3h).
     - Competencias: Rebolear circuitos integrados PMIC y controladores de carga; reconstruir pistas arrancadas aplicando máscara fotosensible UV.
     - Marco Legal: Estándar IPC 7711/7721; MARN D.L. 233.
     - Seguridad: Blindaje térmico de conectores de plástico adyacentes con cinta Kapton poliamida y moneda de disipación de calor.
  4. *Módulo 4: Estándares de Calidad IPC y Gestión Ambiental de Baterías de Litio (10h)*:
     - Temas: Criterios de aceptación visual IPC-A-610 para uniones soldadas (3h); Cálculo de energía en Wh y estado de salud (SOH) de celdas Li-ion (3h); Protocolo MARN y D.E. 41 para baterías desechadas (4h).
     - Competencias: Evaluar uniones soldadas según normas internacionales; manejar y aislar terminales de celdas de litio degradadas o infladas.
     - Marco Legal: MARN Ley de Medio Ambiente D.L. 233 y D.E. 41 RAEE; MTPS D.E. 86.
     - Seguridad: Contenedor metálico ignífugo con arena seca para el confinamiento de baterías con riesgo de embalamiento térmico (*thermal runaway*).

---

### Curso 6: Reparación de Celulares y Computadoras (Laptops/PC)
- **ID**: `reparacion-dispositivos` | **Categoría**: `Soporte Técnico & Hardware` | **Icono**: `📱`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: MARN, MTPS, OSARTEC, SIGET, INCAF
- **Resumen**: Secuencia de encendido (*Power Sequence*), rieles de voltaje, reflasheo de firmware, diagnóstico de consumo con fuente DC y gestión de Residuos de Aparatos Eléctricos y Electrónicos (RAEE) bajo D.E. 41 del MARN.
- **Audiencia**: Emprendedores de talleres de soporte informático, técnicos de servicio post-venta y administradores de hardware.
- **Oportunidades Laborales**: Técnico de soporte de telefonía móvil y cómputo, especialista en diagnóstico a nivel de componente en placas madre, gestor de garantías.
- **Módulos**:
  1. *Módulo 1: Desensamble Físico, Mantenimiento Térmico y Remplazo de Pantallas (10h)*:
     - Temas: Herramientas de apertura y planchas térmicas para pantallas ($80^\circ\text{C}$) (3h); Resistencia térmica disipador-CPU y pastas térmicas de alta conductividad (4h); Sustitución de módulos de pantalla OLED/IPS y flex de carga (3h).
     - Competencias: Desarmar laptops y smartphones sin fracturar carcasas ni cables planos; reemplazar compuesto térmico en procesadores.
     - Marco Legal: LGPRLT D.L. 254; INCAF D.L. 896.
     - Seguridad: Desconexión obligatoria de la batería interna antes de desconectar cables flex de pantalla (prevención de quemado de fusible de backlight).
  2. *Módulo 2: Secuencia de Encendido (*Power Sequence*) y Diagnóstico con Fuente DC (10h)*:
     - Temas: Rieles de voltaje principales: 19V, 5V_ALW, 3.3V_ALW, VCORE (3h); Diagnóstico de consumos en fuente regulada: corto primario vs secundario (4h); Señales de control del controlador embebido (EC/KBC) (3h).
     - Competencias: Determinar fallas de encendido analizando curvas de consumo de corriente en fuente DC; localizar componentes con fugas térmicas.
     - Marco Legal: OSARTEC D.L. 805; SIGET Reglamento D.E. 70.
     - Seguridad: Calibrar la limitación de corriente de la fuente de alimentación para evitar la carbonización de pistas internas de la placa madre.
  3. *Módulo 3: Diagnóstico de BIOS/Firmware, Reflasheo y Recuperación Lógica (10h)*:
     - Temas: Programación de memorias SPI Flash con programador externo CH341A (3h); Reflasheo de ROM de fábrica en smartphones (Odin, Fastboot) (4h); Diagnóstico de desgaste de unidades SSD (TBW y S.M.A.R.T.) (3h).
     - Competencias: Extraer y grabar volcados limpios de BIOS (*Clear ME Region*); verificar la integridad de celdas de almacenamiento masivo.
     - Marco Legal: Ley Especial contra Delitos Informáticos D.L. 260 Arts. 6-12 (Acceso indebido y protección de datos privados del usuario).
     - Seguridad: Consentimiento informado por escrito del cliente para respaldos y preservación estricta del secreto de las comunicaciones.
  4. *Módulo 4: Gestión de Residuos RAEE (D.E. 41 MARN) y Ergonomía de Taller (10h)*:
     - Temas: Reglamento Especial de RAEE (D.E. 41 MARN) (3h); Segregación y reciclaje de plásticos bromados, metales nobles y pantallas rotas (4h); Ergonomía en estaciones de reparación según LGPRLT (3h).
     - Competencias: Clasificar residuos electrónicos en categorías recuperables y peligrosas; diseñar un plan de entrega a operadores autorizados por MARN.
     - Marco Legal: MARN D.E. 41 RAEE; MTPS LGPRLT D.L. 254.
     - Seguridad: Confinamiento de tubos fluorescentes CCFL viejos (vapor de mercurio) y baterías hinchadas en recipientes rígidos y señalizados.

---

### Curso 7: Agricultura Urbana y Pequeños Cultivos Agroecológicos
- **ID**: `agricultura-pequena` | **Categoría**: `Agroecología & Autosuficiencia` | **Icono**: `🌱`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: MAG, MARN, MINSAL, INCAF
- **Resumen**: Edafología, camas biointensivas, riego por goteo eficiente, Manejo Integrado de Plagas (MIP) con biopreparados del CENTA, compostaje/Bocashi y Ley sobre Control de Pesticidas del MAG (D.L. 315).
- **Audiencia**: Agricultores urbanos, productores comunitarios, promotores de huertos escolares y técnicos agroecológicos.
- **Oportunidades Laborales**: Diseñador de huertos agroecológicos urbanos, técnico de extensión comunitaria, productor de bioinsumos y hortalizas orgánicas.
- **Módulos**:
  1. *Módulo 1: Edafología Práctica, Preparación Biointensiva y Enmiendas Orgánicas (10h)*:
     - Temas: Textura y pH del suelo agrícola (3h); Balance Carbono:Nitrógeno ($C:N \approx 25:1 - 30:1$) en compostaje y bocashi (4h); Crianza de lombriz coqueta roja y lixiviados (3h).
     - Competencias: Preparar camas de doble excavación; formular pilas de compostaje con balance C:N óptimo para generar temperaturas termófilas ($55-65^\circ\text{C}$).
     - Marco Legal: MAG D.L. 315; MARN D.L. 233 conservación de suelos.
     - Seguridad: Vacunación antitetánica vigente del personal y uso de guantes de carnaza y botas para manipulación de abonos.
  2. *Módulo 2: Sistemas Eficientes de Riego por Goteo y Cosecha de Lluvia (10h)*:
     - Temas: Cálculo de lámina de riego diaria ($L_r$) y evapotranspiración (3h); Diseño de red por goteo con manguera de PE y goteros autocompensados (4h); Captación de aguas pluviales y filtros de sedimentos (3h).
     - Competencias: Instalar sistemas de micro-riego por gravedad; regular presiones operativas entre $0.8$ y $1.5\text{ bar}$.
     - Marco Legal: MINSAL Código de Salud D.L. 955 Art. 74 (Prohibición absoluta de regar hortalizas con aguas negras o servidas); ANDA Normativa.
     - Seguridad: Protección de reservorios y tanques de agua con tapaderas y telas mosquiteras para impedir la reproducción de mosquitos vectores del dengue (*Aedes aegypti*).
  3. *Módulo 3: Manejo Integrado de Plagas (MIP) y Biopreparados del CENTA (10h)*:
     - Temas: Monitoreo fitosanitario y umbrales de daño económico (3h); Elaboración de caldo sulfocálcico y extracto etanólico de nim (4h); Control biológico con crisopas y mariquitas (3h).
     - Competencias: Preparar y dosificar bioplaguicidas artesanales del catálogo CENTA; asociar cultivos trampa (tagetes/cempasúchil con tomate).
     - Marco Legal: CENTA Guías Técnicas Agroecológicas; MAG D.L. 315.
     - Seguridad: Mascarilla para vapores y gafas de seguridad durante la cocción del caldo sulfocálcico ($>100^\circ\text{C}$).
  4. *Módulo 4: Marco Legal de Pesticidas del MAG (D.L. 315) y Certificación Orgánica (10h)*:
     - Temas: Ley sobre Control de Pesticidas D.L. 315 (3h); Prohibición de agroquímicos de banda roja (paraquat, monocrotofos) (3h); Períodos de carencia y Límites Máximos de Residuos (LMR) (4h).
     - Competencias: Aplicar el protocolo de triple lavado e inutilización de envases agropecuarios; auditar parcelas bajo normativas agroecológicas.
     - Marco Legal: MAG D.L. 315; Ley del INCAF D.L. 896.
     - Seguridad: Rotulación de bodegas de insumos fitosanitarios y botiquín de primeros auxilios con antídotos específicos y protocolo de emergencia.

---

### Curso 8: Logística de Almacenes, Inventarios y Metrología
- **ID**: `logistica-metrologia` | **Categoría**: `Cadena de Suministro & Calidad` | **Icono**: `📦`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: OSARTEC, MTPS, INCAF
- **Resumen**: Distribución en planta (Layout), modelos de inventario (EOQ, ROP, ABC), Código Aduanero Uniforme Centroamericano (CAUCA IV / RECAUCA IV), aseguramiento metrológico CIM/OSARTEC (OIML R 76) y estiba segura SGA/GHS.
- **Audiencia**: Encargados de bodega, supervisores logísticos, planificadores de compras y operadores de centros de distribución.
- **Oportunidades Laborales**: Administrador de almacén y centros de distribución, analista de inventarios, despachador de aduanas y cubicaje.
- **Módulos**:
  1. *Módulo 1: Distribución en Planta (Layout), Flujos y Almacenamiento (10h)*:
     - Temas: Tipos de flujo (en "U", en "I", en "L") (3h); Factor de utilización volumétrica del espacio (4h); Delimitación de pasillos peatonales y vehiculares (3h).
     - Competencias: Diseñar el plano de distribución de bodega optimizando recorridos de montacargas; calcular el aprovechamiento cúbico del edificio.
     - Marco Legal: LGPRLT D.L. 254 (Anchos mínimos de pasillos: peatonales $\ge 1.00\text{ m}$, mixtos $\ge 1.20\text{ m} + \text{ancho de equipo}$); INCAF D.L. 896.
     - Seguridad: Instalación de espejos panorámicos en esquinas ciegas y protección perimetral en largueros de estanterías metálicas.
  2. *Módulo 2: Modelos de Inventario: EOQ, ROP y Clasificación ABC (10h)*:
     - Temas: Lote Económico de Pedido de Wilson (EOQ) (3h); Punto de reorden (ROP) e inventario de seguridad con desviación estándar (4h); Clasificación ABC por valor de utilización anual (80-15-5) (3h).
     - Competencias: Calcular la cantidad óptima a pedir minimizando costos de almacenamiento y pedido; programar compras de reposición automática.
     - Marco Legal: Código de Comercio de El Salvador Art. 411 (Libros de inventario obligatorios); OSARTEC D.L. 805.
     - Seguridad: Rotulación de capacidades máximas de carga por nivel de rack ($kg/\text{par de vigas}$) y prohibición de sobrecarga.
  3. *Módulo 3: Metrología Legal e Industrial en Bodegas (CIM / OIML R 76) (10h)*:
     - Temas: Recomendación Internacional OIML R 76 para básculas de funcionamiento no automático (3h); Verificación de excentricidad, repetibilidad y error máximo permitido ($EMP = \pm 1\,e$) (4h); Uso y custodia de masas patrón clase $M_1/M_2$ (3h).
     - Competencias: Ejecutar pruebas de metrología legal en básculas de piso y transpaletas pesadoras; interpretar certificados de calibración del CIM.
     - Marco Legal: Ley del Sistema Salvadoreño para la Calidad D.L. 805; Normas Técnicas del CIM.
     - Seguridad: Maniobra segura de pesas patrón pesadas mediante carros hidráulicos para evitar lesiones lumbares.
  4. *Módulo 4: Normativa Aduanera CAUCA IV, Etiquetado SGA/GHS y Ergonomía MTPS (10h)*:
     - Temas: Procedimientos aduaneros bajo CAUCA IV y RECAUCA IV (3h); Clasificación y señalización de sustancias químicas SGA/GHS (3h); Límites de levantamiento manual de cargas bajo el Art. 40 de la LGPRLT (4h).
     - Competencias: Cotejar pólizas y DUCA aduaneras; rotular bultos de mercancías peligrosas según pictogramas SGA; capacitar en técnica ergonómica de levantamiento.
     - Marco Legal: CAUCA IV / RECAUCA IV Arts. 50-65; LGPRLT D.L. 254 y D.E. 86 Art. 40 (Máximo 25 kg para hombres, 15 kg para mujeres).
     - Seguridad: Empleo de ayudas mecánicas (carretillas, patines hidráulicos) para toda carga que supere los límites legales permisibles.

---

### Curso 9: Mecánica y Mantenimiento Integral de Motocicletas (NUEVO)
- **ID**: `mecanica-motos` | **Categoría**: `Transporte & Movilidad` | **Icono**: `🏍️`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: VMT, MARN, MTPS, OSARTEC, INCAF
- **Resumen**: Motores de combustión interna de 4 tiempos y 2 tiempos, carburación vs inyección electrónica EFI, sistemas de frenado hidráulico (ABS/CBS), transmisión por cadena/cardán, inspección vehicular bajo la Ley de Transporte Terrestre, Tránsito y Seguridad Vial de El Salvador, y manejo de aceites usados y baterías de plomo-ácido según regulaciones del MARN.
- **Audiencia**: Mecánicos automotrices, propietarios de talleres de motos, técnicos de flotas de entrega a domicilio y motociclistas.
- **Oportunidades Laborales**: Mecánico especialista en motocicletas, técnico de diagnóstico de inyección EFI para motos, inspector de líneas mecánicas vehiculares.
- **Módulos**:
  1. *Módulo 1: Principios Termodinámicos y Motores de Combustión 4T y 2T (10h)*:
     - Temas: Ciclo Otto de 4 tiempos (admisión, compresión, combustión/fuerza, escape) (3h); Cálculo de cilindrada unitaria/total y relación de compresión ($r_c$) (4h); Calibración de holgura de válvulas con galgas de espesor (3h).
     - Competencias: Calcular la cilindrada de un motor rectificado; verificar la compresión del cilindro con manómetro de compresión; ajustar taqués de válvulas.
     - Marco Legal: Ley de Transporte Terrestre, Tránsito y Seguridad Vial D.L. 86 Art. 24; INCAF D.L. 896.
     - Seguridad: Extracción mecánica obligatoria de gases de escape en el taller para evacuar monóxido de carbono (CO) según D.E. 86 MTPS.
  2. *Módulo 2: Sistemas de Alimentación: Carburador vs Inyección Electrónica EFI (10h)*:
     - Temas: Circuitos del carburador (baja, alta, ahogador) y ajuste de mezcla (3h); Sensores del sistema EFI (TPS, MAP, IAT, CKP, sensor de oxígeno) (4h); Presión de bomba de combustible (3 bar) y lectura con escáner OBD (3h).
     - Competencias: Desarmar y sincronizar carburadores; diagnosticar códigos de falla DTC en motocicletas EFI; probar la señal de inyectores con osciloscopio.
     - Marco Legal: MARN Ley de Medio Ambiente D.L. 233 límites de emisión de CO y HC; OSARTEC D.L. 805.
     - Seguridad: Despresurizar las líneas de combustible y desconectar el borne negativo de la batería antes de intervenir inyectores para evitar inflamación.
  3. *Módulo 3: Tren de Potencia, Transmisión y Sistemas de Frenos (ABS/CBS) (10h)*:
     - Temas: Embrague multidisco en baño de aceite y caja de cambios secuencial (3h); Tensión y alineación de la cadena de transmisión secundaria (3h); Sistemas de frenado hidráulico, purga de líquido DOT 4 y antibloqueo ABS (4h).
     - Competencias: Sustituir discos y resortes de embrague; purgar circuitos de freno hidráulicos; verificar sensores inductivos de rueda ABS.
     - Marco Legal: VMT Reglamento General de Tránsito requisitos de frenos; MTPS LGPRLT D.L. 254.
     - Seguridad: Uso de guantes de nitrilo y protección ocular al manipular líquido de frenos DOT 4 (altamente higroscópico, corrosivo para la piel y pintura).
  4. *Módulo 4: Inspección Técnico-Mecánica VMT, Seguridad de Taller y Gestión MARN (10h)*:
     - Temas: Criterios de inspección técnica vehicular VMT (3h); Verificación de profundidad de labrado de neumáticos ($\ge 1.6\text{ mm}$) y estado de suspensión (3h); Manejo de aceites usados, baterías de plomo-ácido y filtros según MARN (4h).
     - Competencias: Ejecutar una inspección pre-itv completa según estándares salvadoreños; almacenar aceites usados en tambores cerrados sobre cubas antiderrames.
     - Marco Legal: VMT Reglamento de Tránsito; MARN D.L. 233 y D.E. 42 gestión de aceites lubricantes usados; MTPS D.E. 86.
     - Seguridad: Aseguramiento de motocicletas en elevadores hidráulicos mediante mordazas de rueda delantera y pasadores de tranca mecánicos.

---

### Curso 10: Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales (NUEVO)
- **ID**: `fontaneria-hidraulica` | **Categoría**: `Hidráulica & Construcción` | **Icono**: `🔧`
- **Total Horas**: 40h (4 Módulos de 10h) | **Entidades**: ANDA, MINSAL, MTPS, SIGET, INCAF
- **Resumen**: Hidráulica aplicada, normas técnicas de diseño y acometida de ANDA, Código de Salud (Arts. 56 y sigs.), tuberías PVC, CPVC y PPR termofusión, dimensionamiento de cisternas y equipos hidroneumáticos, redes de ventilación y sifones anti-olores, y prevención de riesgos en zanjas según LGPRLT.
- **Audiencia**: Fontaneros residenciales, maestros de obra, técnicos de instalaciones sanitarias y contratistas de edificación.
- **Oportunidades Laborales**: Instalador fontanero certificado, técnico instalador de cisternas y sistemas de bombeo hidroneumático, fontanero inspector de obras sanitarias.
- **Módulos**:
  1. *Módulo 1: Hidráulica Básica Aplicada, Tuberías y Accesorios (10h)*:
     - Temas: Ecuación de continuidad ($Q = A \cdot v$) y pérdidas de carga por fricción de Hazen-Williams (4h); Propiedades y uso de tuberías PVC (agua fría), CPVC (agua caliente) y PPR termofusión (3h); Procedimiento de termofusión a $260^\circ\text{C}$ (3h).
     - Competencias: Calcular diámetros de tubería para mantener velocidades entre $0.6$ y $2.0\text{ m/s}$; ejecutar uniones de PPR con termofusora calibrada sin estrangulamiento de sección.
     - Marco Legal: Normas Técnicas de ANDA para Redes Domiciliares; Ley del INCAF D.L. 896.
     - Seguridad: Uso de guantes de protección térmica para termofusión; ventilación adecuada al manipular pegamentos solventes de PVC con compuestos orgánicos volátiles (COV).
  2. *Módulo 2: Redes Sanitarias de Desagüe, Sifones y Trampas de Grasa (10h)*:
     - Temas: Diseño de ramales sanitarios con pendiente mínima ($2\%$ para tubos $\le 3''$, $1\%$ para $\ge 4''$) (4h); Trampas hidráulicas (sifón en "P") y columnas de ventilación secundaria (3h); Dimensionamiento e instalación de trampas de grasa para aguas grises (3h).
     - Competencias: Nivelar tuberías sanitarias garantizando el auto-lavado por gravedad; instalar tuberías de ventilación para prevenir el desifonamiento y escape de gases tóxicos ($H_2S$).
     - Marco Legal: MINSAL Código de Salud D.L. 955 Arts. 56-65; Normas Técnicas de Alcantarillado ANDA.
     - Seguridad: Protección respiratoria contra gases de alcantarillado (ácido sulfhídrico y metano) al intervenir pozos de visita y cajas de registro existentes.
  3. *Módulo 3: Dimensionamiento de Cisternas, Bombas y Equipos Hidroneumáticos (10h)*:
     - Temas: Cálculo de volumen de almacenamiento de cisterna según dotación poblacional (4h); Cálculo de Altura Manométrica Total ($H_{td}$) y potencia de la electrobomba (4h); Calibración de presostatos en tanques hidroneumáticos (30-50 PSI) (2h).
     - Competencias: Dimensionar cisternas de concreto o polietileno para autonomía de 48 horas; calibrar el diferencial de presión de arranque y paro de la bomba.
     - Marco Legal: ANDA Criterios de Abastecimiento de Agua; SIGET Seguridad Eléctrica de Motores.
     - Seguridad: Empleo de circuitos de flotador eléctrico en baja tensión segura ($24\text{V}$) dentro del tanque de agua para evitar electrocución.
  4. *Módulo 4: Normativa ANDA, Pruebas Hidrostáticas y Seguridad en Zanjas MTPS (10h)*:
     - Temas: Especificaciones técnicas de acometida y medidor de agua potable ANDA (3h); Protocolo de prueba de presión hidrostática ($1.5 \times P_{trabajo}$) durante 15 minutos (3h); Seguridad ocupacional en excavaciones y zanjas según D.E. 86 MTPS (4h).
     - Competencias: Ejecutar la prueba de presión con bomba hidrostática manual certificando cero fugas; aplicar entibado y escaleras de escape en zanjas profundas.
     - Marco Legal: MTPS LGPRLT D.L. 254 y D.E. 86 Arts. 210-225 (Entibado obligatorio en zanjas $>1.20\text{ m}$); MINSAL D.L. 955.
     - Seguridad: Excavaciones de más de 1.20 m requieren talud o entibado de madera/metálico, escaleras de escape cada 7.5 m y retiro del material extraído a no menos de $0.60\text{ m}$ del borde.

---

## 4. Fórmulas Matemáticas de Taller y Cálculos Técnicos por Curso

A continuación se detalla la formulación matemática rigorously tipada, con desglose de variables, unidades del Sistema Internacional / industrial salvadoreño y un problema numérico de taller con resolución paso a paso para cada uno de los 10 cursos:

### 1. Electricidad: Caída de Tensión Monofásica y Ley de Ohm/Watt
- **Ecuación KaTeX**:
  $$\% \Delta V = \frac{2 \cdot K \cdot I \cdot L}{V_n \cdot S} \times 100 \le 3\%$$
  $$V = I \cdot R \quad ; \quad P = V \cdot I = I^2 \cdot R$$
- **Variables**:
  - $\% \Delta V$: Porcentaje de caída de tensión (adimensional, máx $3\%$ para alimentadores derivados según NEC 210.19 / SIGET).
  - $K$: Resistividad del conductor de cobre ($K \approx 12.9\,\Omega\cdot\text{cmil/ft}$ o $0.0172\,\Omega\cdot\text{mm}^2/\text{m}$).
  - $I$: Corriente nominal de diseño de la carga en amperios ($A$).
  - $L$: Longitud del circuito (un solo tramo en pies o metros).
  - $V_n$: Tensión nominal del sistema en voltios ($120\text{ V}$ monofásico).
  - $S$: Sección transversal del conductor (en Circular Mils o $\text{mm}^2$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Se alimenta una motobomba monofásica de $1.5\text{ HP}$ ($I = 16\text{ A}$) a $120\text{ V}$ ubicada a $L = 25\text{ m}$ del tablero principal. Se evalúa conductor de cobre calibre 12 AWG ($S = 3.31\text{ mm}^2$, $\rho = 0.0172\,\Omega\cdot\text{mm}^2/\text{m}$). ¿Cumple con el límite máximo de caída de tensión del $3\%$ de la SIGET?
  - *Cálculo*:
    $$\Delta V = \frac{2 \cdot 0.0172\,\Omega\cdot\text{mm}^2/\text{m} \cdot 16\text{ A} \cdot 25\text{ m}}{3.31\text{ mm}^2} = \frac{13.76}{3.31} = 4.157\text{ V}$$
    $$\% \Delta V = \left(\frac{4.157\text{ V}}{120\text{ V}}\right) \times 100 = 3.46\%$$
  - *Resolución*: $3.46\% > 3.0\%$, por lo que no cumple la norma. Se debe aumentar el calibre a 10 AWG ($S = 5.26\text{ mm}^2$), donde $\% \Delta V = 2.18\% \le 3.0\%$, garantizando un arranque seguro sin sobrecalentamiento.

---

### 2. Electrónica: Constantes de Tiempo RC/RL y Regulador LM317
- **Ecuación KaTeX**:
  $$\tau = R \cdot C \quad ; \quad V_c(t) = V_{in} \cdot (1 - e^{-t/\tau})$$
  $$V_{out} = 1.25\,\text{V} \cdot \left(1 + \frac{R_2}{R_1}\right) + I_{adj} \cdot R_2$$
- **Variables**:
  - $\tau$: Constante de tiempo en segundos ($s$).
  - $R$: Resistencia en ohmios ($\Omega$).
  - $C$: Capacitancia en faradios ($F$).
  - $V_{out}$: Voltaje regulado de salida ($V$).
  - $R_1$: Resistor de referencia (típicamente $240\,\Omega$).
  - $R_2$: Resistor variable o potenciómetro de ajuste ($\Omega$).
  - $I_{adj}$: Corriente del pin de ajuste ($I_{adj} \approx 50\,\mu\text{A}$, usualmente despreciable).
- **Problema de Taller Resuelto**:
  - *Enunciado*: En un banco de pruebas electrónico se requiere fijar la salida de un regulador ajustable LM317 a exactamente $V_{out} = 9.0\text{ V}$ utilizando una resistencia fija $R_1 = 240\,\Omega$. Determinar el valor teórico de $R_2$.
  - *Cálculo*:
    $$\frac{V_{out}}{1.25} = 1 + \frac{R_2}{R_1} \implies \frac{9.0}{1.25} = 7.2 \implies \frac{R_2}{R_1} = 6.2$$
    $$R_2 = 6.2 \cdot 240\,\Omega = 1488\,\Omega$$
  - *Resolución*: Se selecciona un resistor estándar de $1.5\,\text{k}\Omega$ ($1500\,\Omega$) al $1\%$, obteniéndose $V_{out} = 1.25 \cdot (1 + 1500/240) = 9.06\text{ V}$, apto para la polarización de circuitos operacionales.

---

### 3. Cocina: Factor de Rendimiento (Yield Factor) y Dilución de Sanitizante
- **Ecuación KaTeX**:
  $$\%R = \left(\frac{EP}{AP}\right) \times 100 \quad ; \quad C_{EP} = \frac{C_{AP}}{\%R / 100}$$
  $$V_c = \frac{ppm_{deseado} \cdot V_{agua}}{C_{hipoclorito} \cdot 10}$$
- **Variables**:
  - $\%R$: Factor de rendimiento culinario porcentual.
  - $AP$: Peso tal como se compró (*As Purchased*) en kg o libras.
  - $EP$: Peso de la porción comestible limpia (*Edible Portion*) en kg o libras.
  - $C_{AP}$: Costo unitario de compra ($/kg o $/lb).
  - $C_{EP}$: Costo real de la porción comestible utilizable.
  - $V_c$: Volumen de hipoclorito de sodio concentrado a agregar en mililitros ($mL$).
  - $ppm_{deseado}$: Concentración meta de cloro libre (ej. $50\text{ ppm}$ para ensaladas, $200\text{ ppm}$ para mesas de acero inoxidable).
  - $V_{agua}$: Volumen de agua del baño en litros ($L$).
  - $C_{hipoclorito}$: Concentración en etiqueta del blanqueador comercial (típicamente $5.25\%$ o $6\%$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Un restaurante compra una pieza de lomo de res de $10\text{ lb}$ ($AP$) a $\$4.50/\text{lb}$ ($\$45.00$ en total). Tras el despiece, retiro de sebo y tejido conectivo, la carne limpia aprovechable pesa $EP = 7.8\text{ lb}$. Adicionalmente, el cocinero debe desinfectar una tina de $20\text{ L}$ de agua a $50\text{ ppm}$ para sumergir lechugas usando hipoclorito al $5\%$.
  - *Cálculo 1 (Rendimiento)*:
    $$\%R = \left(\frac{7.8}{10.0}\right) \times 100 = 78\% \quad ; \quad C_{EP} = \frac{\$4.50}{0.78} = \$5.77/\text{lb}$$
  - *Cálculo 2 (Sanitizante)*:
    $$V_c = \frac{50\text{ ppm} \cdot 20\text{ L}}{5 \cdot 10} = \frac{1000}{50} = 20\text{ mL}$$
  - *Resolución*: Cada libra neta de carne cuesta realmente $\$5.77$. Para el baño de vegetales, se deben dosificar con exactitud $20\text{ mL}$ de hipoclorito al $5\%$ en los $20\text{ L}$ de agua garantizando inocuidad según el Código de Salud del MINSAL sin generar sabor residual a cloro.

---

### 4. Soldadura: Aporte Térmico (Heat Input) y Carbono Equivalente
- **Ecuación KaTeX**:
  $$HI = \frac{60 \cdot V \cdot I}{1000 \cdot v} \times \eta \quad [\text{kJ/mm}]$$
  $$CE_{IIW} = \%C + \frac{\%Mn}{6} + \frac{\%Cr + \%Mo + \%V}{5} + \frac{\%Ni + \%Cu}{15}$$
- **Variables**:
  - $HI$: Aporte térmico o *Heat Input* en kilojulios por milímetro ($\text{kJ/mm}$).
  - $V$: Voltaje de arco de soldadura en voltios ($V$).
  - $I$: Corriente de soldadura en amperios ($A$).
  - $v$: Velocidad de avance de la torcha en milímetros por minuto ($\text{mm/min}$).
  - $\eta$: Eficiencia térmica del proceso (adimensional: $\eta = 0.8$ para SMAW; $\eta = 0.8$ para GMAW; $\eta = 0.6$ para GTAW).
  - $CE_{IIW}$: Carbono Equivalente porcentual (si $CE > 0.40\%$, se exige precalentamiento para evitar fisuras por hidrógeno bajo AWS D1.1).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Un soldador deposita un pase de raíz con electrodo E7018 ($\eta = 0.8$) a $V = 24\text{ V}$, $I = 130\text{ A}$ y una velocidad de avance medida de $v = 120\text{ mm/min}$. Determinar el aporte térmico $HI$ y validar si está dentro del rango seguro para acero estructural ASTM A36 ($0.8 - 1.5\text{ kJ/mm}$).
  - *Cálculo*:
    $$HI = \frac{60 \cdot 24\text{ V} \cdot 130\text{ A}}{1000 \cdot 120\text{ mm/min}} \times 0.8 = \frac{187200}{120000} \times 0.8 = 1.56 \times 0.8 = 1.248\text{ kJ/mm}$$
  - *Resolución*: $HI = 1.25\text{ kJ/mm}$ se sitúa en el centro del rango óptimo, garantizando fusión profunda del bisel sin generar grano austenítico grueso en la zona afectada térmicamente (ZAT).

---

### 5. Microsoldadura: Ley de Joule y Perfil Térmico de Reflujo
- **Ecuación KaTeX**:
  $$Q = I^2 \cdot R \cdot t \quad [\text{Joules}]$$
  $$R_{pista} = \rho \cdot \frac{L}{A} \quad [\Omega]$$
- **Variables**:
  - $Q$: Calor generado por efecto Joule en julios ($J$) o vatios-segundo ($W\cdot s$).
  - $I$: Corriente que atraviesa la pista o componente en amperios ($A$).
  - $R$: Resistencia de contacto o de pista en ohmios ($\Omega$).
  - $t$: Tiempo de paso de la corriente en segundos ($s$).
  - $\rho$: Resistividad del cobre electrodepositado ($1.7 \times 10^{-8}\,\Omega\cdot\text{m}$).
  - $L, A$: Longitud ($m$) y área de sección transversal ($m^2$) del microhilo o pista.
- **Problema de Taller Resuelto**:
  - *Enunciado*: En una línea de alimentación principal VDD_MAIN de un smartphone que transporta $I = 3.0\text{ A}$, una unión soldada defectuosa o fracturada presenta una resistencia parásita de contacto de $R = 0.25\,\Omega$. Calcular la potencia térmica disipada en ese punto microscópico y evaluar el riesgo de daño térmico en la placa base.
  - *Cálculo*:
    $$P = I^2 \cdot R = (3.0\text{ A})^2 \cdot 0.25\,\Omega = 9.0 \times 0.25 = 2.25\text{ W}$$
    En un tiempo de $t = 60\text{ s}$, el calor liberado es:
    $$Q = 2.25\text{ W} \cdot 60\text{ s} = 135\text{ Joules}$$
  - *Resolución*: Disipar $2.25\text{ W}$ en un pad microscópico de menos de $0.5\text{ mm}^2$ eleva localmente la temperatura por encima de $150^\circ\text{C}$ en cuestión de segundos, provocando la carbonización de la resina FR4 circundante, lo cual es fácilmente observable con una cámara térmica de diagnóstico.

---

### 6. Reparación PC/Celulares: Consumo de Corriente y Resistencia Térmica
- **Ecuación KaTeX**:
  $$I_{boot} = \frac{P_{consumida}}{V_{bateria}} \quad ; \quad E_{Wh} = \frac{C_{mAh} \cdot V_{nom}}{1000}$$
  $$R_{th} = \frac{T_j - T_a}{P_{TDP}} \quad [^\circ\text{C/W}]$$
- **Variables**:
  - $I_{boot}$: Corriente demandada durante la secuencia de arranque en amperios ($A$).
  - $P_{consumida}$: Potencia total absorbida por los rieles activos en vatios ($W$).
  - $V_{bateria}$: Tensión nominal de la batería de litio ($3.85\text{ V}$).
  - $C_{mAh}$: Capacidad nominal de la batería en miliamperios-hora ($mAh$).
  - $E_{Wh}$: Energía total almacenada en vatios-hora ($Wh$).
  - $R_{th}$: Resistencia térmica total de la solución disipadora ($^\circ\text{C/W}$).
  - $T_j$: Temperatura de la juntura del núcleo de silicio ($^\circ\text{C}$).
  - $T_a$: Temperatura ambiente dentro del chasis ($^\circ\text{C}$).
  - $P_{TDP}$: Potencia de diseño térmico (*Thermal Design Power*) en vatios ($W$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Una laptop para diseño con un microprocesador que disipa un TDP de $45\text{ W}$ opera a una temperatura ambiente de $T_a = 28^\circ\text{C}$. Con su disipador original limpio y pasta térmica fresca, la resistencia térmica es $R_{th} = 1.1^\circ\text{C/W}$. Debido a obstrucción severa por polvo y pasta cristalizada, $R_{th}$ sube a $1.8^\circ\text{C/W}$. Determinar la nueva temperatura del silicio $T_j$ y evaluar si entrará en estrangulamiento térmico (*Thermal Throttling* a $\ge 95^\circ\text{C}$).
  - *Cálculo*:
    - Estado limpio: $T_{j\_limpio} = T_a + (R_{th} \cdot TDP) = 28 + (1.1 \cdot 45) = 28 + 49.5 = 77.5^\circ\text{C}$ (Óptimo).
    - Estado sucio: $T_{j\_sucio} = 28 + (1.8 \cdot 45) = 28 + 81.0 = 109.0^\circ\text{C}$.
  - *Resolución*: Como $109^\circ\text{C} > 95^\circ\text{C}$, el procesador activa el estrangulamiento térmico disminuyendo su frecuencia a $800\text{ MHz}$ o apagándose súbitamente por disparo de protección térmica de la BIOS/EC.

---

### 7. Agricultura Urbana: Balance Carbono:Nitrógeno (C:N) y Lámina de Riego
- **Ecuación KaTeX**:
  $$\text{C:N} = \frac{\sum (M_i \cdot \%C_i)}{\sum (M_i \cdot \%N_i)} \quad \text{con meta } 25:1 \text{ a } 30:1$$
  $$L_r = \frac{ET_0 \cdot K_c}{E_a} \quad [\text{mm/día}] \quad ; \quad V_{riego} = L_r \cdot \text{Área} \quad [\text{Litros/día}]$$
- **Variables**:
  - $M_i$: Masa de materia seca del insumo orgánico $i$ en kg.
  - $\%C_i, \%N_i$: Contenido porcentual de Carbono y Nitrógeno del insumo.
  - $L_r$: Lámina bruta de riego en milímetros por día ($\text{mm/día}$, donde $1\text{ mm} = 1\text{ L/m}^2$).
  - $ET_0$: Evapotranspiración de referencia local en San Salvador ($4.2\text{ mm/día}$).
  - $K_c$: Coeficiente de cultivo según etapa fenológica (ej. $1.05$ para tomate en desarrollo).
  - $E_a$: Eficiencia de aplicación del sistema de riego por goteo ($0.90$ o $90\%$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: En un huerto urbano comunitario de $50\text{ m}^2$ cultivado con tomate en floración ($K_c = 1.05$), con $ET_0 = 4.0\text{ mm/día}$ y riego por goteo con eficiencia $E_a = 0.90$, calcular la lámina diaria de riego $L_r$ y el volumen total de agua en litros por día que se debe dosificar.
  - *Cálculo*:
    $$L_r = \frac{4.0\text{ mm/día} \cdot 1.05}{0.90} = \frac{4.2}{0.90} = 4.67\text{ mm/día}$$
    $$V_{riego} = 4.67\text{ L/m}^2/\text{día} \cdot 50\text{ m}^2 = 233.3\text{ Litros/día}$$
  - *Resolución*: Se deben programar $233.3\text{ L/día}$ distribuidos preferentemente en dos turnos de riego (mañana temprana y tarde), garantizando humedad radicular continua sin anegamiento ni proliferación fungosa.

---

### 8. Logística y Metrología: Lote Económico de Pedido (EOQ) y Error Metrológico
- **Ecuación KaTeX**:
  $$EOQ = \sqrt{\frac{2 \cdot D \cdot S}{H}} \quad ; \quad ROP = (d \cdot L) + SS$$
  $$EMP = \pm 1\,e \quad (\text{para cargas } 0 \le m \le 500\,e \text{ según OIML R 76})$$
- **Variables**:
  - $EOQ$: Cantidad óptima de lote de pedido en unidades (*Economic Order Quantity*).
  - $D$: Demanda anual del artículo en unidades/año.
  - $S$: Costo fijo por emitir cada orden de compra o pedido (\$/orden).
  - $H$: Costo unitario anual de mantener una unidad en inventario (\$/unidad/año).
  - $ROP$: Punto de reorden en unidades (*Reorder Point*).
  - $d$: Demanda promedio diaria (unidades/día).
  - $L$: Tiempo de entrega del proveedor o *Lead Time* en días.
  - $SS$: Inventario de seguridad (*Safety Stock*) en unidades ($SS = Z \cdot \sigma_L$).
  - $EMP$: Error Máximo Permitido en metrología legal (OIML R 76).
  - $e$: Escalón de verificación de la báscula (ej. $e = 50\text{ g}$ en báscula industrial de $300\text{ kg}$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Una bodega de distribución en El Salvador comercializa cajas de grapas industriales con una demanda anual constante $D = 10,000\text{ cajas/año}$. El costo administrativo de colocar una orden con el fabricante es $S = \$25.00$ y el costo anual de almacenamiento y custodia por caja es $H = \$2.00/\text{caja/año}$. Determinar el tamaño óptimo de pedido $EOQ$ y el número de órdenes anuales $N = D / EOQ$.
  - *Cálculo*:
    $$EOQ = \sqrt{\frac{2 \cdot 10000 \cdot 25}{2.00}} = \sqrt{\frac{500000}{2.00}} = \sqrt{250000} = 500\text{ unidades}$$
    $$N = \frac{10000}{500} = 20\text{ pedidos al año}$$
  - *Resolución*: Emitir exactamente 20 pedidos de 500 unidades cada uno minimiza la curva total de costos logísticos en el punto donde los costos de emitir pedidos se igualan exactamente a los costos de posesión de inventario.

---

### 9. Mecánica de Motos: Cilindrada, Relación de Compresión y Par Motor
- **Ecuación KaTeX**:
  $$V_d = \frac{\pi}{4} \cdot D^2 \cdot S \quad [\text{cm}^3\text{ o cc}] \quad ; \quad r_c = \frac{V_d + V_c}{V_c}$$
  $$P_{kW} = \frac{\tau \cdot RPM}{7121} \quad ; \quad P_{HP} = \frac{\tau \cdot RPM}{5252} \quad (\tau \text{ en lb}\cdot\text{ft})$$
- **Variables**:
  - $V_d$: Cilindrada unitaria o volumen desplazado por el pistón ($\text{cm}^3$ o cc).
  - $D$: Diámetro interior del cilindro (*Bore*) en centímetros ($cm$).
  - $S$: Carrera del pistón (*Stroke*) en centímetros ($cm$).
  - $V_c$: Volumen de la cámara de combustión (*Clearance Volume*) en centímetros cúbicos ($cc$).
  - $r_c$: Relación de compresión estática (ej. $9.5:1$ o $11.0:1$).
  - $\tau$: Par motor o torque en $\text{N}\cdot\text{m}$ o $\text{lb}\cdot\text{ft}$.
  - $RPM$: Revoluciones por minuto del cigüeñal.
  - $P$: Potencia mecánica al freno en kilovatios ($kW$) o caballos de fuerza ($HP$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: El motor monocilíndrico de una motocicleta de trabajo presenta un diámetro de pistón $D = 62.0\text{ mm}$ ($6.20\text{ cm}$) y una carrera $S = 49.5\text{ mm}$ ($4.95\text{ cm}$). El volumen medido con bureta en la cámara de combustión es $V_c = 16.5\text{ cc}$. Calcular la cilindrada unitaria $V_d$ y la relación de compresión $r_c$.
  - *Cálculo*:
    $$V_d = \frac{3.14159265}{4} \cdot (6.20)^2 \cdot 4.95 = 0.785398 \cdot 38.44 \cdot 4.95 = 149.44\text{ cc}$$
    $$r_c = \frac{149.44 + 16.5}{16.5} = \frac{165.94}{16.5} = 10.057 \approx 10.1:1$$
  - *Resolución*: El motor tiene una cilindrada comercial de $150\text{ cc}$ con una relación de compresión de $10.1:1$, lo que exige combustible de al menos 90 octanos (gasolina regular o especial) para evitar fenómenos de autoencendido o detonación (*knocking*).

---

### 10. Fontanería e Hidráulica: Hazen-Williams, Caudal y Cisternas
- **Ecuación KaTeX**:
  $$Q = A \cdot v \quad [\text{m}^3\text{/s o L/s}]$$
  $$h_f = 10.67 \cdot \frac{L \cdot Q^{1.852}}{C^{1.852} \cdot D^{4.87}} \quad [\text{m.c.a.}]$$
  $$V_{cisterna} = N_{personas} \cdot \text{Dotación} \cdot Días_{reserva} \quad [\text{Litros}]$$
- **Variables**:
  - $Q$: Caudal volumétrico en metros cúbicos por segundo ($\text{m}^3\text{/s}$) o litros por segundo ($L/s$).
  - $A$: Área de sección interior del tubo en metros cuadrados ($m^2$).
  - $v$: Velocidad de flujo del agua en metros por segundo ($m/s$).
  - $h_f$: Pérdida de carga o presión por fricción en metros de columna de agua ($\text{m.c.a.}$, donde $1\text{ m.c.a.} \approx 1.42\text{ PSI}$).
  - $L$: Longitud equivalente de tubería en metros ($m$).
  - $C$: Coeficiente de rugosidad de Hazen-Williams ($C = 150$ para PVC/CPVC/PPR nuevo y liso).
  - $D$: Diámetro interno de la tubería en metros ($m$).
  - $V_{cisterna}$: Volumen útil mínimo de almacenamiento en litros ($L$).
- **Problema de Taller Resuelto**:
  - *Enunciado*: Una vivienda unifamiliar en San Salvador albergará a 5 residentes permanentes. Según las normas de ANDA, la dotación diaria es de $200\text{ L/persona/día}$ y se exige una reserva mínima de autonomía para 2 días completos ante cortes de red. Determinar el volumen de cisterna requerido y el caudal $Q$ en un grifo de lavadero conectado a tubería de PVC de $1/2''$ ($D_{int} = 16\text{ mm} = 0.016\text{ m}$) si la velocidad del agua es $v = 1.0\text{ m/s}$.
  - *Cálculo 1 (Cisterna)*:
    $$V_{cisterna} = 5\text{ personas} \cdot 200\text{ L/día} \cdot 2\text{ días} = 2,000\text{ Litros} \quad (2.0\text{ m}^3)$$
  - *Cálculo 2 (Caudal)*:
    $$A = \frac{\pi \cdot (0.016\text{ m})^2}{4} = \frac{3.14159 \cdot 0.000256}{4} = 0.000201\text{ m}^2$$
    $$Q = 0.000201\text{ m}^2 \cdot 1.0\text{ m/s} = 0.000201\text{ m}^3\text{/s} = 0.201\text{ L/s} \approx 12.06\text{ L/min}$$
  - *Resolución*: Se requiere un tanque cisterna de $2.0\text{ m}^3$ ($2,000\text{ L}$), y el caudal de $0.20\text{ L/s}$ cumple sobradamente con el estándar de confort de griferías residenciales ($0.15\text{ L/s}$) sin generar exceso de ruido por velocidad.

---

## 5. Especificación del Banco Formativo de 120 Preguntas (3 por Módulo x 4 Módulos x 10 Cursos)

A continuación se define la estructura técnica homogénea de los 120 reactivos, organizados por curso y módulo, con 4 opciones A/B/C/D, respuesta correcta, retroalimentación formativa y fundamento normativo salvadoreño:

### Estructura del Objeto Tipado
```typescript
export interface CourseQuizQuestion {
  id: string; // ej: 'elec-m1-q1'
  statement: string; // Planteamiento del problema de taller
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Razonamiento técnico detallado
  legalOrTechnicalBasis: string; // Cita formal con artículo de ley o norma
}
```

### Inventario y Matriz de los 120 Reactivos

#### Curso 1: Electricidad Residencial e Industrial (`electricidad`)
- **Módulo 1: Fundamentos y Mediciones**
  - `elec-m1-q1`: Cálculo de corriente con Ley de Ohm en circuito monofásico 120V con resistencia de 15 Ω ($I = 8\text{ A}$). Correcta: A. Base: INCAF D.L. 896 Art. 16.
  - `elec-m1-q2`: Posición de perilla de multímetro para medir tensión en tomacorriente residencial en El Salvador (ACV 200V o superior). Correcta: B. Base: OSARTEC D.L. 805 / NFPA 70E.
  - `elec-m1-q3`: Conductor mínimo según NEC para circuito de iluminación de 15A (Calibre 14 AWG de cobre). Correcta: C. Base: SIGET Reglamento D.E. 70 / NEC 210.
- **Módulo 2: Instalaciones Residenciales y Tableros**
  - `elec-m2-q1`: Caída de tensión máxima permitida por la normativa para circuitos derivados residenciales (3% del voltaje nominal). Correcta: B. Base: SIGET Acuerdo 343 / NEC 210.19.
  - `elec-m2-q2`: Función y ubicación obligatoria de interruptores termomagnéticos GFCI (Protección diferencial a tierra en baños, cocinas y zonas húmedas). Correcta: D. Base: NEC 210.8 / LGPRLT D.L. 254.
  - `elec-m2-q3`: Balance de cargas en tablero bifásico 120/240V: diferencia porcentual máxima aceptable entre fases (10% a 15%). Correcta: A. Base: SIGET Normas de Acometidas.
- **Módulo 3: Sistemas de Puesta a Tierra**
  - `elec-m3-q1`: Valor máximo de resistencia permisible para varilla de puesta a tierra residencial según SIGET (25 ohmios). Correcta: C. Base: SIGET Normas Técnicas / NEC 250.56.
  - `elec-m3-q2`: Material y dimensiones reglamentarias de la varilla de tierra convencional (Cobre o Copperweld de 5/8" de diámetro y 8 pies de longitud). Correcta: A. Base: D.E. 86 MTPS Art. 52.
  - `elec-m3-q3`: Umbral de corriente de fuga que activa el disparo instantáneo de un tomacorriente GFCI de protección humana (4 a 6 miliamperios). Correcta: B. Base: UL 943 / D.E. 86 MTPS.
- **Módulo 4: Seguridad Ocupacional y Protocolo LOTO**
  - `elec-m4-q1`: Secuencia inicial obligatoria en el procedimiento de Bloqueo y Etiquetado (LOTO) bajo D.E. 86 (Notificar a los afectados, apagar equipo y aislar las fuentes de energía). Correcta: A. Base: MTPS D.E. 86 Arts. 45-58.
  - `elec-m4-q2`: Comprobación instrumental de tensión cero tras bloqueo (Regla de oro: probar medidor en fuente viva, medir circuito desenergizado y reprobar medidor en fuente viva). Correcta: C. Base: NFPA 70E / D.E. 86.
  - `elec-m4-q3`: Categoría mínima requerida por SIGET para firmar planos eléctricos de edificaciones residenciales e industriales (Tercera Categoría o superior según kVA). Correcta: D. Base: SIGET Reglamento de Categorías.

---

#### Curso 2: Electrónica Analógica y Digital (`electronica`)
- **Módulo 1: Pasivos, Semiconductores y Fuentes**
  - `elec-tron-m1-q1`: Resistencia requerida en divisor con LM317 para obtener 5.0V con R1 = 240 Ω ($R_2 = 720\,\Omega$). Correcta: B. Base: Hoja de datos LM317 / OSARTEC D.L. 805.
  - `elec-tron-m1-q2`: Comportamiento de un diodo de silicio polarizado en directa en escala de diodos ($0.6\text{ V a }0.7\text{ V}$). Correcta: A. Base: INCAF D.L. 896.
  - `elec-tron-m1-q3`: Procedimiento de seguridad para manipular condensadores electrolíticos de alto voltaje (Descargarlos con resistencia de potencia de 1kΩ y verificar tensión cero). Correcta: C. Base: LGPRLT D.L. 254.
- **Módulo 2: Instrumentación y Señales**
  - `elec-tron-m2-q1`: Relación entre voltaje pico y voltaje eficaz RMS en señal senoidal pura ($V_{rms} = V_{pico} / \sqrt{2} \approx 0.707 \cdot V_{pico}$). Correcta: D. Base: CIM Metrología de Voltaje.
  - `elec-tron-m2-q2`: Atenuación 10X de la sonda del osciloscopio y su efecto en la impedancia de entrada (Multiplica por 10 la impedancia de entrada a 10 MΩ reduciendo el efecto de carga). Correcta: B. Base: OSARTEC D.L. 805.
  - `elec-tron-m2-q3`: Constante de tiempo tau en circuito RC serie con R = 10 kΩ y C = 100 µF ($\tau = 1.0\text{ segundo}$). Correcta: A. Base: INCAF D.L. 896.
- **Módulo 3: Lógica Digital y Temporizadores**
  - `elec-tron-m3-q1`: Tabla de verdad de compuerta NAND: salida en nivel BAJO (0) (Únicamente cuando todas las entradas están en nivel ALTO 1). Correcta: C. Base: Estándar IEEE / INCAF.
  - `elec-tron-m3-q2`: Función del pin 4 (RESET) en el circuito integrado temporizador 555 (Debe conectarse a Vcc para evitar reinicios aleatorios no deseados). Correcta: A. Base: Datasheet NE555.
  - `elec-tron-m3-q3`: Diodo volante (flyback) en paralelo con la bobina de un relé (Protege al transistor de conmutación contra picos de fuerza contraelectromotriz). Correcta: B. Base: LGPRLT D.L. 254.
- **Módulo 4: Microcontroladores y Protección ESD**
  - `elec-tron-m4-q1`: Lectura del convertidor analógico a digital (ADC) de 10 bits (0-1023) a 2.5V con referencia de 5.0V (Valor digital 511 o 512). Correcta: C. Base: Microchip/Atmel Spec.
  - `elec-tron-m4-q2`: Resistencia integrada obligatoria en la talonera o pulsera antiestática ESD (1 Megaohmio para proteger al operador contra descargas eléctricas accidentales). Correcta: D. Base: ANSI/ESD S20.20.
  - `elec-tron-m4-q3`: Riesgo ergonómico y físico de humos al estañar placas electrónicas en el taller (Inhalación de vapores tóxicos de colofonia que causan sensibilización respiratoria). Correcta: A. Base: MTPS LGPRLT D.L. 254 Art. 34.

---

#### Curso 3: Cocina Saludable e Inocuidad Alimentaria (`cocina-saludable`)
- **Módulo 1: Microbiología de ETAs y Normativa Sanitaria**
  - `coci-m1-q1`: Rango de temperatura de la "Zona de Peligro" donde las bacterias se multiplican rápidamente (Entre 5°C y 60°C). Correcta: B. Base: MINSAL Código de Salud D.L. 955 Art. 88.
  - `coci-m1-q2`: Exámenes médicos obligatorios para tramitar el Carnet de Manipulador de Alimentos MINSAL (Examen clínico general, coprocultivo y frotis faríngeo). Correcta: C. Base: Código de Salud Arts. 88-92.
  - `coci-m1-q3`: Tiempo máximo que un alimento cocido potencialmente peligroso puede permanecer en zona de peligro (Máximo 2 horas antes de refrigerar o desechar). Correcta: A. Base: RTCA 67.01.33:06.
- **Módulo 2: Buenas Prácticas de Manufactura y POES**
  - `coci-m2-q1`: Concentración recomendada de cloro activo para desinfección de verduras de hoja que se consumen crudas (50 ppm). Correcta: D. Base: MINSAL Guía Técnica de Manipulación.
  - `coci-m2-q2`: Prevención de la contaminación cruzada en tablas de picar (Uso de códigos de color diferenciados: roja para carnes rojas crudas, verde para vegetales). Correcta: A. Base: RTCA 67.01.33:06.
  - `coci-m2-q3`: Prohibición de recipientes secundarios para químicos de limpieza en cocina (Está estrictamente prohibido reutilizar botellas de refresco o agua para envasar cloro o desengrasantes). Correcta: B. Base: MTPS D.E. 86 Art. 98.
- **Módulo 3: Sistema HACCP y Puntos Críticos**
  - `coci-m3-q1`: Temperatura mínima interna de cocción segura para carne de aves y pollo (74°C durante al menos 15 segundos). Correcta: C. Base: Codex Alimentarius / MINSAL Art. 102.
  - `coci-m3-q2`: Enfriamiento rápido de caldos o guisos calientes según HACCP (Bajar de 60°C a 21°C en 2 horas, y de 21°C a 5°C en las siguientes 4 horas). Correcta: A. Base: HACCP / RTCA.
  - `coci-m3-q3`: Calibración de termómetro bimetálico en punto de fusión de hielo (Debe marcar 0°C ± 1°C sumergido en agua con hielo molido). Correcta: B. Base: OSARTEC D.L. 805 / MINSAL.
- **Módulo 4: Técnicas Saludables y Factor de Rendimiento**
  - `coci-m4-q1`: Fórmula del Factor de Rendimiento culinario (%R = [Peso porción comestible / Peso comprado] x 100). Correcta: A. Base: INCAF D.L. 896 Gastronomía.
  - `coci-m4-q2`: Ventaja nutricional de la cocción al vapor frente al hervido prolongado (Preserva las vitaminas hidrosolubles del complejo B y vitamina C). Correcta: D. Base: INCAF Nutrición.
  - `coci-m4-q3`: Calzado de seguridad reglamentario en cocinas industriales bajo D.E. 86 MTPS (Zapatos cerrados de cuero o polímero con suela antideslizante certificada). Correcta: C. Base: MTPS LGPRLT D.L. 254.

---

#### Curso 4: Soldadura por Arco y Procesos Industriales (`soldadura`)
- **Módulo 1: Metalurgia y Proceso SMAW**
  - `sold-m1-q1`: Significado del número "70" en el electrodo de soldadura AWS E7018 (Resistencia mínima a la tracción de 70,000 PSI o 70 ksi). Correcta: B. Base: AWS D1.1 / INCAF.
  - `sold-m1-q2`: Efecto de un avance excesivamente lento en soldadura por arco SMAW (Incrementa el calor aportado produciendo un cordón excesivamente ancho y grano grueso frágil). Correcta: A. Base: AWS D1.1 Sección 4.
  - `sold-m1-q3`: Tipo de filtro de sombra para soldadura por electrodo revestido con 120A (Sombra DIN 10 u 11). Correcta: C. Base: D.E. 86 MTPS Art. 312.
- **Módulo 2: Procesos GMAW (MIG/MAG) y GTAW (TIG)**
  - `sold-m2-q1`: Gas de protección inerte puro comúnmente utilizado en el proceso GTAW / TIG (Argón al 100%). Correcta: D. Base: AWS D1.1.
  - `sold-m2-q2`: Caudal recomendado de gas para soldadura GMAW en taller cerrado (12 a 18 Litros por minuto o 25 a 35 CFH). Correcta: B. Base: AWS D1.1 / MTPS.
  - `sold-m2-q3`: Traslado de cilindros de gas comprimido en el taller metalmecánico (En carretilla porta-cilindros con cadenas de seguridad y capuchón metálico roscado). Correcta: A. Base: MTPS LGPRLT D.L. 254.
- **Módulo 3: Inspección Visual y Ensayos**
  - `sold-m3-q1`: Defecto de soldadura consistente en una ranura fundida en el metal base no rellenada por la soldadura (Socavación o *undercut*). Correcta: C. Base: AWS D1.1 Sección 6.
  - `sold-m3-q2`: Umbral de Carbono Equivalente (CE) a partir del cual el acero estructural exige precalentamiento obligatorio (CE superior a 0.40%). Correcta: B. Base: AWS D1.1 Anexo H.
  - `sold-m3-q3`: Ensayo no destructivo adecuado para detectar discontinuidades abiertas a la superficie en metales no ferrosos (Líquidos penetrantes PT). Correcta: D. Base: OSARTEC D.L. 805 Ensayos.
- **Módulo 4: Trabajos en Caliente y Seguridad D.E. 86**
  - `sold-m4-q1`: Radio mínimo libre de materiales combustibles e inflamables alrededor del área de soldadura según D.E. 86 (11 metros o 35 pies). Correcta: A. Base: MTPS D.E. 86 Art. 312 / NFPA 51B.
  - `sold-m4-q2`: Tiempo mínimo obligatorio de vigilancia contra incendios (*Fire Watch*) tras finalizar un trabajo en caliente (Al menos 30 a 60 minutos continuos). Correcta: B. Base: MTPS D.E. 86 Art. 315.
  - `sold-m4-q3`: Tipo y capacidad mínima del extintor portátil que debe estar disponible a menos de 5 metros del punto de soldeo (Extintor de Polvo Químico Seco PQS tipo ABC de al menos 20 lbs). Correcta: C. Base: MTPS D.E. 86.

---

#### Curso 5: Microsoldadura y Nivel de Componente (`microsoldadura`)
- **Módulo 1: Equipamiento Microscópico y Químicos**
  - `micro-m1-q1`: Temperatura de fusión de la soldadura eutéctica de estaño-plomo Sn63/Pb37 (183°C). Correcta: B. Base: IPC J-STD-006.
  - `micro-m1-q2`: Peligro ocupacional derivado de los vapores emanados al fundir resina colofonia del flux (Irritación bronquial y desarrollo de asma ocupacional). Correcta: A. Base: MTPS LGPRLT D.L. 254.
  - `micro-m1-q3`: Tipo de tobera de aire caliente adecuada para extraer un circuito integrado QFN pequeño sin sobrecalentar el entorno (Tobera circular pequeña de 4 a 6 mm con flujo de aire moderado). Correcta: C. Base: IPC 7711/7721.
- **Módulo 2: Esquemáticos, Boardviews y Remplazo SMD**
  - `micro-m2-q1`: Interpretación de una lectura de 0.000V en escala de diodos con punta roja a tierra en una línea de alimentación principal (La línea se encuentra en cortocircuito franco a tierra). Correcta: D. Base: Estándar IPC / INCAF.
  - `micro-m2-q2`: Procedimiento para retirar un condensador cerámico SMD 0402 dañado sin romper las pistas de cobre (Aplicar aleación de bajo punto de fusión o utilizar dos cautines simultáneamente). Correcta: B. Base: IPC 7711.
  - `micro-m2-q3`: Protección de conectores plásticos adyacentes frente al calor de la tobera (Cubrirlos con cinta Kapton de poliamida y cinta de aluminio disipadora). Correcta: A. Base: Prácticas de Taller IPC.
- **Módulo 3: Reballing BGA y Micro-Jumpers**
  - `micro-m3-q1`: Diámetro común del microhilo de cobre esmaltado utilizado para puentear pistas arrancadas en placas lógicas (0.01 a 0.02 mm). Correcta: C. Base: IPC 7721.
  - `micro-m3-q2`: Producto químico y herramienta utilizados para fijar y aislar un micro-jumper recién reconstruido (Máscara de soldadura curable con luz ultravioleta UV). Correcta: A. Base: IPC 7721 Rework.
  - `micro-m3-q3`: Causa común por la cual las esferas de estaño se unen entre sí formando puentes durante el calentamiento del stencil BGA (Exceso de calor aplicado súbitamente o exceso de pasta de estaño). Correcta: D. Base: IPC-A-610.
- **Módulo 4: Calidad IPC y Gestión de Baterías de Litio**
  - `micro-m4-q1`: Fenómeno peligroso originado por un cortocircuito interno o perforación de una celda de polímero de litio (Embalamiento térmico o *thermal runaway* con desprendimiento de gases tóxicos y llama violenta). Correcta: B. Base: MARN D.L. 233 / D.E. 41.
  - `micro-m4-q2`: Protocolo inmediato de seguridad para una batería de smartphone inflada o en riesgo de ignición (Confinarla en un recipiente metálico cerrado lleno de arena seca o vermiculita). Correcta: C. Base: MTPS D.E. 86 / MARN.
  - `micro-m4-q3`: Conversión de miliamperios-hora a vatios-hora en una batería de 4000 mAh y 3.85V nominales ($Wh = [4000 \cdot 3.85] / 1000 = 15.4\text{ Wh}$). Correcta: A. Base: OSARTEC D.L. 805 / OIML.

---

#### Curso 6: Reparación de Celulares y Computadoras (`reparacion-dispositivos`)
- **Módulo 1: Desensamble Físico y Mantenimiento Térmico**
  - `rep-m1-q1`: Temperatura máxima recomendada en la plancha separadora para ablandar el pegamento de pantallas OLED sin dañarlas (75°C a 80°C). Correcta: B. Base: Prácticas de Taller de Fabricantes.
  - `rep-m1-q2`: Acción obligatoria previa a retirar el flex de pantalla o componentes en una laptop desmontada (Desconectar físicamente la batería principal y pulsar botón de encendido para purgar capacitores). Correcta: A. Base: MTPS LGPRLT D.L. 254.
  - `rep-m1-q3`: Función primordial de la pasta térmica entre el procesador y el tubo de cobre del disipador (Rellenar las micro-imperfecciones de aire entre las superficies metálicas mejorando la conducción). Correcta: C. Base: INCAF D.L. 896 Hardware.
- **Módulo 2: Secuencia de Encendido (*Power Sequence*)**
  - `rep-m2-q1`: Consumo típico en miliamperios de un smartphone apagado y conectado a la fuente DC antes de presionar el botón de encendido (0.000 A; cualquier consumo previo denota fuga o corto primario). Correcta: D. Base: Diagnóstico Hardware.
  - `rep-m2-q2`: Primer riel de voltaje que debe aparecer en la placa madre de una laptop al conectar el cargador de 19V (El riel principal VIN/BATT+ de 19V distribuido a través de los MOSFETs de entrada). Correcta: B. Base: Arquitectura PC.
  - `rep-m2-q3`: Componente programable encargado de gestionar la secuencia de encendido y el teclado en laptops (El chip controlador embebido EC o KBC). Correcta: A. Base: Hardware PC.
- **Módulo 3: BIOS, Firmware y Solución Lógica**
  - `rep-m3-q1`: Síntoma clásico en laptops atribuible a una región ME (Management Engine) de la BIOS corrupta (El equipo enciende pero tarda exactamente 30 segundos o varios minutos en mostrar imagen). Correcta: C. Base: Intel Architecture Spec.
  - `rep-m3-q2`: Marco legal penal salvadoreño que sanciona el acceso no autorizado a los datos, fotos o chats de dispositivos de clientes bajo reparación (Ley Especial contra Delitos Informáticos y Conexos D.L. 260 Arts. 6 y 10). Correcta: B. Base: D.L. 260 Arts. 6-12.
  - `rep-m3-q3`: Parámetro S.M.A.R.T. fundamental para evaluar la vida remanente de un disco de estado sólido SSD (Porcentaje de bloques de repuesto disponibles o TBW consumidos). Correcta: D. Base: OSARTEC D.L. 805.
- **Módulo 4: Gestión de Residuos RAEE (D.E. 41) y Taller**
  - `rep-m4-q1`: Decreto salvadoreño que regula la clasificación, almacenamiento y disposición de Residuos de Aparatos Eléctricos y Electrónicos (Reglamento Especial de RAEE - Decreto Ejecutivo No. 41 del MARN). Correcta: A. Base: MARN D.E. 41.
  - `rep-m4-q2`: Sustancia tóxica contenida en las lámparas de retroiluminación CCFL de monitores y laptops antiguas (Vapor de mercurio metálico). Correcta: C. Base: MARN D.L. 233.
  - `rep-m4-q3`: Manejo del solvente alcohol isopropílico en el taller informático (Almacenarlo en dispensadores anti-goteo herméticos lejos de fuentes de calor y chispas). Correcta: B. Base: MTPS D.E. 86.

---

#### Curso 7: Agricultura Urbana y Pequeños Cultivos (`agricultura-pequena`)
- **Módulo 1: Edafología y Abonos Orgánicos**
  - `agri-m1-q1`: Relación óptima Carbono:Nitrógeno (C:N) para una pila de compostaje eficiente y equilibrada (Entre 25:1 y 30:1). Correcta: B. Base: CENTA Guía de Compostaje / MAG.
  - `agri-m1-q2`: Rango de temperatura alcanzado en la fase termófila del compost que elimina patógenos y semillas de malezas (Entre 55°C y 65°C). Correcta: C. Base: MARN D.L. 233 Conservación de Suelos.
  - `agri-m1-q3`: Especie de lombriz predilecta para la lumbricultura en sistemas de reciclaje urbano de materia orgánica (Eisenia fetida o Lombriz Roja Californiana). Correcta: A. Base: CENTA Guías Técnicas.
- **Módulo 2: Riego Eficiente y Cosecha de Lluvia**
  - `agri-m2-q1`: Prohibición legal expresa en El Salvador sobre el agua de riego para hortalizas de consumo crudo (El Código de Salud prohíbe terminantemente regar hortalizas con aguas residuales crudas o servidas). Correcta: D. Base: MINSAL Código de Salud D.L. 955 Art. 74.
  - `agri-m2-q2`: Ventaja del riego por goteo comparado con el riego tradicional por inundación o manguera (Ahorro de agua de entre un 50% y 70% y reducción de enfermedades foliares por hongos). Correcta: A. Base: ANDA / CENTA.
  - `agri-m2-q3`: Medida preventiva en reservorios y pilas de captación pluvial urbana para evitar la transmisión de dengue (Colocar tapas herméticas o mallas mosquiteras que impidan la postura de huevos del zancudo Aedes aegypti). Correcta: B. Base: MINSAL Código de Salud.
- **Módulo 3: Manejo Integrado de Plagas y CENTA**
  - `agri-m3-q1`: Ingredientes base para la preparación del caldo sulfocálcico agroecológico (Azufre en polvo, cal viva hidratada y agua hervida). Correcta: C. Base: CENTA Manual de Biopreparados.
  - `agri-m3-q2`: Modo de acción principal del extracto de nim (*Azadirachta indica*) sobre insectos masticadores y chupadores (Inhibidor de la hormona de la muda ecdisona y repelente anti-alimentario). Correcta: A. Base: MAG D.L. 315.
  - `agri-m3-q3`: Principio de la asociación de cultivos: intercalar albahaca o cempasúchil con tomateras (Emisión de terpenos y compuestos volátiles que repelen moscas blancas y nematodos). Correcta: B. Base: CENTA Prácticas Agroecológicas.
- **Módulo 4: Ley de Pesticidas del MAG (D.L. 315)**
  - `agri-m4-q1`: Categoría toxicológica de plaguicidas cuya venta y aplicación está sujeta a máxima restricción o prohibición por su extrema letalidad (Plaguicidas con Banda Roja - Categoría Ia y Ib Extremadamente Tóxicos). Correcta: D. Base: MAG D.L. 315 Ley sobre Control de Pesticidas.
  - `agri-m4-q2`: Definición técnica del "Período de Carencia" de un agroquímico (Tiempo mínimo obligatorio en días entre la última aplicación del producto y la cosecha para consumo humano). Correcta: B. Base: MAG D.L. 315 Art. 28.
  - `agri-m4-q3`: Protocolo ambiental obligatorio para envases vacíos de agroquímicos antes de entregarlos al acopio (Procedimiento de triple lavado, perforado de fondo y almacenamiento seguro). Correcta: C. Base: MARN D.L. 233 / MAG Programa CampoLimpio.

---

#### Curso 8: Logística de Almacenes, Inventarios y Metrología (`logistica-metrologia`)
- **Módulo 1: Layout, Flujos y Recepción**
  - `log-m1-q1`: Ancho mínimo reglamentario para pasillos principales peatonales en bodegas según la LGPRLT (Al menos 1.00 metro de ancho despejado). Correcta: A. Base: MTPS LGPRLT D.L. 254.
  - `log-m1-q2`: Fórmula para el cálculo del peso volumétrico aéreo internacional de una caja ($[Largo \times Ancho \times Alto] / 5000$). Correcta: C. Base: IATA / OSARTEC D.L. 805.
  - `log-m1-q3`: Distribución de bodega en flujo en forma de "U" (Permite unificar el muelle de recepción y despacho optimizando el uso de personal y equipos de carga). Correcta: B. Base: INCAF Logística.
- **Módulo 2: Modelos de Inventario: EOQ, ROP y ABC**
  - `log-m2-q1`: Variable "S" en la fórmula clásica del Lote Económico de Pedido (EOQ) (El costo fijo por emitir cada orden de compra o pedido). Correcta: D. Base: Modelos de Inventario / OSARTEC.
  - `log-m2-q2`: Criterio de la Ley de Pareto en la clasificación de inventarios ABC (Los artículos clase "A" representan aproximadamente el 15-20% de las referencias pero el 70-80% del valor total de inventario). Correcta: A. Base: Código de Comercio Art. 411.
  - `log-m2-q3`: Método contable de valuación de inventarios donde los primeros artículos en ingresar son los primeros en venderse o despacharse (Método PEPS o FIFO). Correcta: C. Base: Código de Comercio de El Salvador.
- **Módulo 3: Metrología Legal e Industrial (OIML R 76)**
  - `log-m3-q1`: Documento internacional adoptado en El Salvador por OSARTEC y CIM para instrumentos de pesaje de funcionamiento no automático (Recomendación OIML R 76). Correcta: B. Base: OSARTEC D.L. 805 / OIML R 76.
  - `log-m3-q2`: Prueba metrológica donde se coloca la carga patrón sucesivamente en el centro y en las cuatro esquinas de la plataforma de la báscula (Prueba de excentricidad de carga). Correcta: A. Base: CIM Directrices Metrológicas.
  - `log-m3-q3`: Clase de pesas patrón comúnmente requeridas para la calibración y verificación periódica de básculas industriales de plataforma clase III (Pesas patrón clase M1 o M2). Correcta: D. Base: CIM / OIML R 111.
- **Módulo 4: CAUCA IV, Estiba SGA y Ergonomía MTPS**
  - `log-m4-q1`: Límite máximo de peso para manipulación manual de cargas en hombres adultos estipulado en el Art. 40 de la LGPRLT (25 kilogramos). Correcta: B. Base: MTPS LGPRLT D.L. 254 Art. 40.
  - `log-m4-q2`: Límite máximo legal de levantamiento manual de carga para mujeres trabajadoras según el Art. 40 de la LGPRLT (15 kilogramos). Correcta: C. Base: MTPS LGPRLT Art. 40.
  - `log-m4-q3`: Instrumento aduanero centroamericano vigente que rige el régimen de almacenes generales de depósito y declaraciones de mercancías (CAUCA IV y su reglamento RECAUCA IV). Correcta: A. Base: CAUCA IV Arts. 50-65.

---

#### Curso 9: Mecánica de Motocicletas (`mecanica-motos`)
- **Módulo 1: Principios Termodinámicos y Motores**
  - `moto-m1-q1`: Fórmula para el cálculo de la cilindrada unitaria de un motor a partir del diámetro interior del cilindro (D) y la carrera del pistón (S) ($V_d = [\pi / 4] \cdot D^2 \cdot S$). Correcta: A. Base: Termodinámica / VMT D.L. 86.
  - `moto-m1-q2`: Definición técnica de la relación de compresión $r_c$ en un motor de combustión ($r_c = [V_d + V_c] / V_c$). Correcta: C. Base: INCAF Mecánica Automotriz.
  - `moto-m1-q3`: Peligro mortal derivado de encender motores de motocicletas en talleres cerrados sin extractor de gases (Intoxicación severa por monóxido de carbono CO inodoro e incoloro). Correcta: B. Base: MTPS D.E. 86 Arts. 200+.
- **Módulo 2: Sistemas de Alimentación: Carburador vs EFI**
  - `moto-m2-q1`: Relación estequiométrica teórica aire/gasolina en masa para una combustión completa (14.7 kg de aire por 1 kg de gasolina; factor lambda = 1.0). Correcta: D. Base: MARN D.L. 233 / OSARTEC.
  - `moto-m2-q2`: Presión manométrica de combustible típica en el riel de inyectores de una motocicleta moderna con inyección electrónica EFI (Aproximadamente 3 bar o 43 a 45 PSI). Correcta: B. Base: Manuales de Fabricante EFI.
  - `moto-m2-q3`: Sensor encargado de medir la posición angular de la mariposa de aceleración en un sistema EFI (Sensor TPS - *Throttle Position Sensor*). Correcta: A. Base: Diagnóstico OBD Motos.
- **Módulo 3: Transmisión y Frenos Hidráulicos (ABS/CBS)**
  - `moto-m3-q1`: Propiedad fundamental del líquido de frenos automotriz DOT 3 y DOT 4 que exige su recambio cada 1 o 2 años (Es altamente higroscópico, absorbiendo humedad del aire que reduce drásticamente su punto de ebullición). Correcta: C. Base: VMT Reglamento de Tránsito.
  - `moto-m3-q2`: Principio físico que multiplica la fuerza ejercida en la maneta de freno hacia los pistones de la pinza (Ley o Principio de Pascal: $P = F_1 / A_1 = F_2 / A_2$). Correcta: A. Base: Física Hidráulica.
  - `moto-m3-q3`: Holgura o juego libre vertical recomendado en el tramo intermedio de la cadena de transmisión secundaria (Aproximadamente 20 a 30 mm). Correcta: D. Base: Manuales de Servicio de Motocicletas.
- **Módulo 4: Inspección VMT y Gestión de Residuos MARN**
  - `moto-m4-q1`: Profundidad mínima reglamentaria del dibujo de la banda de rodadura de los neumáticos de motocicleta para circular legalmente en El Salvador (Al menos 1.6 milímetros). Correcta: B. Base: VMT Reglamento General de Tránsito Art. 24.
  - `moto-m4-q2`: Obligación ambiental de los talleres mecánicos respecto a los aceites usados de cárter (Almacenarlos en recipientes herméticos rotulados sobre bandejas de retención y entregarlos a gestores autorizados por el MARN). Correcta: C. Base: MARN D.L. 233 y D.E. 42.
  - `moto-m4-q3`: Riesgo químico durante la recarga de baterías tradicionales de plomo-ácido con electrolito líquido (Desprendimiento de gas hidrógeno inflamable y riesgo de explosión ante chispas). Correcta: A. Base: MTPS D.E. 86.

---

#### Curso 10: Fontanería e Hidráulica (`fontaneria-hidraulica`)
- **Módulo 1: Hidráulica Básica, Tuberías y Accesorios**
  - `font-m1-q1`: Ecuación fundamental de continuidad que relaciona caudal volumétrico (Q), área (A) y velocidad (v) ($Q = A \cdot v$). Correcta: A. Base: Hidráulica Aplicada / ANDA.
  - `font-m1-q2`: Ventaja principal de la tubería de Polipropileno Copolímero Random (PPR) unida por termofusión frente al PVC cementado (Forma una unión molecular homogénea y monolítica sin pegamentos químicos, altamente resistente a temperatura y presión). Correcta: C. Base: Normas Técnicas ANDA.
  - `font-m1-q3`: Temperatura normalizada de trabajo para la matriz de la máquina termofusora en uniones de PPR (260°C ± 10°C). Correcta: B. Base: Especificaciones DIN 16962 / INCAF.
- **Módulo 2: Redes Sanitarias, Sifones y Trampas**
  - `font-m2-q1`: Pendiente mínima recomendada por normas sanitarias para tuberías horizontales de drenaje con diámetros de 2" y 3" (Pendiente mínima del 2.0%). Correcta: D. Base: MINSAL Código de Salud D.L. 955 / ANDA.
  - `font-m2-q2`: Propósito indispensable de la columna de ventilación sanitaria en una instalación domiciliaria (Evitar que el efecto de sifonaje rompa el sello hidráulico de los sifones y entren gases mefíticos a la vivienda). Correcta: A. Base: Código de Salud Arts. 56-65.
  - `font-m2-q3`: Ubicación y función de una trampa de grasa en una vivienda o comercio (Se instala en el desagüe exclusivo del fregadero de cocina para retener grasas antes de descargar a la red pública o fosa séptica). Correcta: B. Base: ANDA Normas de Alcantarillado.
- **Módulo 3: Dimensionamiento de Cisternas y Bombas**
  - `font-m3-q1`: Dotación promedio de agua potable diaria por persona estipulada en los criterios de diseño de ANDA para zonas urbanas residenciales (150 a 250 Litros por habitante al día). Correcta: C. Base: ANDA Criterios de Abastecimiento.
  - `font-m3-q2`: Cálculo de cisterna para 5 habitantes con dotación de 200 L/hab/día y autonomía de reserva de 2 días ($5 \times 200 \times 2 = 2,000\text{ Litros}$ o $2.0\text{ m}^3$). Correcta: A. Base: ANDA Normas de Conexión.
  - `font-m3-q3`: Calibración estándar de presostato para un sistema hidroneumático residencial de baja presión (Arranque a 30 PSI y corte a 50 PSI). Correcta: B. Base: Prácticas de Taller Hidráulico.
- **Módulo 4: Normativa ANDA, Pruebas y Seguridad en Zanjas**
  - `font-m4-q1`: Presión hidrostática de prueba exigida para tuberías de agua potable recién instaladas antes de cubrirlas (1.5 veces la presión de trabajo normal, manteniendo un mínimo de 100 PSI durante 15 a 30 minutos sin pérdida). Correcta: D. Base: ANDA Normas de Construcción.
  - `font-m4-q2`: Profundidad a partir de la cual el Reglamento D.E. 86 del MTPS exige entibado, apuntalamiento o talud obligatorio en zanjas y excavaciones (Profundidades mayores a 1.20 metros). Correcta: C. Base: MTPS D.E. 86 Art. 212.
  - `font-m4-q3`: Distancia máxima permitida entre escaleras de mano o rampas de salida en una zanja para evacuación de emergencia según D.E. 86 (No mayor a 7.5 metros de recorrido horizontal). Correcta: A. Base: MTPS D.E. 86 Art. 218.

---

## 6. Verificación de Características y Casos Borde (Spec Miner Discovery Tables)

### Features Discovered
| # | Categoría | Característica | Descripción | Entradas | Salidas | Comportamiento ante Error | Descubierto Vía |
|---|---|---|---|---|---|---|---|
| 1 | Arquitectura de Datos | Desacoplamiento a `technicalCoursesData.ts` | Separación de los datos monolíticos de UI a un módulo de datos tipado en `src/data/` | Arreglo de 10 cursos | Objeto inmutable tipado exportable | Fallo en compilación tsc si falta campo | `ORIGINAL_REQUEST.md` R1 |
| 2 | Cobertura Curricular | 10 Cursos Vocacionales | Ampliación del catálogo con los cursos de Motocicletas y Fontanería | IDs únicos en kebab-case | Objetos `TechnicalCourse` con metadata | Error 404/Null si ID no existe en mapa | `ORIGINAL_REQUEST.md` R1 |
| 3 | Cuantificación Horaria | 4 Módulos x 10 Horas = 40h por curso | Estructura pedagógica homogénea de 40 módulos de exactamente 10h cada uno | Cursos con propiedad `modules` | Suma de 40h por curso y 400h globales | Falla suite unitaria si $\sum \neq 40$ | `ORIGINAL_REQUEST.md` R2 |
| 4 | Marco Legal | Integración de 8 Entidades Salvadoreñas | Citas textuales de artículos vigentes de SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF | Objeto `legalFramework` | Badges normativos con decreto oficial | Omisión de cita genera fallo en prueba de integridad | `ORIGINAL_REQUEST.md` R1/R2 |
| 5 | Cálculos de Taller | Visor de Fórmulas Matemáticas | Expresiones con variables, unidades SI y problemas numéricos de taller | Objeto `workshopFormulas` | Renderizado matemático formateado KaTeX | Formato de variables faltante invalida test | `ORIGINAL_REQUEST.md` R2 |
| 6 | Evaluación Formativa | Simulador Interactivo de Autoevaluación | Banco de 120 reactivos (3 por módulo) con 4 opciones A/B/C/D y retroalimentación inmediata | Selección de opción A/B/C/D | Estado de acierto/fallo con fundamento legal | Clave inválida o id colisionado genera excepción | `ORIGINAL_REQUEST.md` R2 |
| 7 | Seguridad Ocupacional | Procedimientos D.E. 86 / LGPRLT | Protocolos de EPP, LOTO, *Fire Watch*, zanjas y límites de carga manual | Objeto `safetyProcedures` | Tarjeta de advertencia de seguridad | Alerta visual en interfaz | `ORIGINAL_REQUEST.md` R2 |
| 8 | Retrocompatibilidad UI | Proxy re-exportador en `src/views/` | Mantenimiento de exportaciones en `components/` y proxy en `views/` | Imports desde ambos paths | Resolución idéntica de componentes | Resuelve inconsistencia de nomenclatura de rutas | `explorer_survey_1/handoff.md` |

### Edge Cases
| # | Característica | Entrada | Comportamiento Observado / Especificado |
|---|---|---|---|
| 1 | Cómputo de Horas por Módulo | Módulo con suma de subtemas diferente de 10h | El test unitario `technicalCourses.test.ts` valida estrictamente que la suma de `analyticalTopics.reduce((acc, t) => acc + t.hours, 0) === 10`. Si difiere, la prueba rechaza el archivo de datos. |
| 2 | Unicidad de IDs en Preguntas | ID duplicado entre módulos o cursos | El test unitario recolecta los 120 reactivos en un `Set` y verifica que `set.size === 120`. Evita colisiones de estado en el simulador interactivo de React. |
| 3 | Normalización de Opciones | Pregunta con 3 opciones o sin clave D | Se tipa estrictamente como `{ A: string; B: string; C: string; D: string }` y `correctAnswer: 'A' \| 'B' \| 'C' \| 'D'`. TypeScript emite error de compilación si falta alguna opción. |
| 4 | Representación de Fórmulas en Pantalla | Fórmulas con fracciones complejas y exponentes | Renderizado a través del componente existente `KaTeXRenderer.tsx` con respaldo en texto plano matemático para evitar cuelgues si falla el motor KaTeX. |
| 5 | Invocación de `views/TechnicalCoursesView` | Importador buscando la ruta de la solicitud original | `src/views/TechnicalCoursesView.tsx` re-exporta íntegramente `../components/TechnicalCoursesView`, garantizando cero rupturas de importación. |
| 6 | Integridad de Invariantes Globales | Verificación con bancos existentes | Las modificaciones no tocan `src/data/bankData.ts` (17,640 preguntas intactas), ni agregan teléfonos no autorizados (`git grep "7943 9901"` = 0). |

---

## 7. Plan de Verificación para Implementación

Para asegurar que los desarrolladores posteriores (`worker_*`) cumplan con los más altos estándares:
1. **Archivo de Datos**: `src/data/technicalCoursesData.ts` debe estructurarse con interfaces TypeScript rigurosas y exportar `TECHNICAL_COURSES` y `SALVADORAN_NORMATIVE_INSTITUTIONS`.
2. **Suite de Pruebas**: Crear `tests/technicalCourses.test.ts` evaluando:
   - Exactamente 10 cursos.
   - Exactamente 4 módulos por curso (40 módulos totales).
   - Exactamente 10 horas por módulo y 40 horas por curso (400 horas teóricas totales).
   - Presencia de marco legal con las 8 entidades obligatorias.
   - Presencia de fórmulas de taller con variables y aplicación.
   - Exactamente 120 preguntas de autoevaluación con IDs únicos, 4 opciones (A/B/C/D), clave válida y base legal.
3. **Comandos de Comprobación**:
   - `npm run typecheck`
   - `npx vitest run tests/technicalCourses.test.ts`
   - `npm test`
   - `npm run validate:bank`
   - `git grep "7943 9901"`
