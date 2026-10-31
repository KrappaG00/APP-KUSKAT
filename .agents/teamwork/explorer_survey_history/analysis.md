# Reporte de Exploración y Análisis Arquitectónico: Historia Patria, Civismo y Cultura Cuscatleca (R2 & R4)

**Agente**: `explorer_survey_history`  
**Fecha**: 2026-10-31  
**Misión**: Auditoría y diseño curricular/arquitectónico para el refuerzo integral del módulo de Historia Patria, Civismo y Cultura Cuscatleca en APP-KUSKAT según los Requisitos R2, R4 y R6.

---

## 1. Diagnóstico del Estado Actual y Brechas Críticas

### 1.1. Inspección de `src/components/PatrioticHistoryView.tsx`
El módulo actual se encuentra implementado como un único archivo monolítico de 755 líneas (`src/components/PatrioticHistoryView.tsx`), conteniendo datos embebidos directamente en el código de la vista (hardcoded):

1. **Estructura embebida en la UI**:
   - `PATRIOTIC_SYMBOLS` (líneas 36-153): Contiene únicamente 7 símbolos nacionales (`bandera`, `escudo`, `himno`, `ave`, `flor`, `arboles`, `oracion`).
   - `HISTORICAL_PRESIDENTS` (líneas 166-477): Contiene 14 presidentes de los siglos XX y XXI (desde Dr. Manuel Enrique Araujo hasta Salvador Sánchez Cerén), con pros y contras objetivos.
2. **Pestañas de visualización limitadas**:
   - Pestaña 1: `symbols` (Ficha técnica y detalles cívicos de cada símbolo).
   - Pestaña 2: `presidents` (Acordeón con pros y contras de cada mandatario con buscador por nombre y año).
3. **Brechas sustantivas frente a R2**:
   - **Ausencia total de Época Precolombina**: Cero menciones a pueblos originarios (Pipiles/Náhuat, Mayas-Chortí/Poqomam, Lencas, Cacaopera/Kakawira), Señorío de Cuzcatlán, sitios arqueológicos nucleares (Tazumal, Joya de Cerén -Patrimonio UNESCO-, San Andrés, Cihuatán, Quelepa, Casa Blanca).
   - **Ausencia total del Proceso de Independencia y Época Federal**: Cero desarrollo de los movimientos de 1811 y 1814, Acta del 15 de septiembre de 1821, próceres nacionales (Delgado, Arce, Celis, Aguilar, José Simeón Cañas, Pedro Pablo Castillo), la República Federal de Centroamérica (1824-1839) y la resistencia a la anexión imperial mexicana.
   - **Historia Republicana fragmentada**: La historia republicana está reducida únicamente a fichas biográficas presidenciales de 1911 en adelante, omitiendo el siglo XIX cafetalero (reformas agrarias de 1881-1882 y extinción de ejidos/comunidades), el análisis estructural de 1932 (levantamiento campesino y etnocidio náhuat), y los Acuerdos de Paz de Chapultepec de 1992 como pacto de refundación institucional democrática.
   - **Ausencia total de Patrimonio Cultural y Literatura Cuscatleca**: Cero contenido sobre autores insignia (Salarrué, Claudia Lars, Alberto Masferrer, Alfredo Espino), expresiones vernáculas, fiestas y tradiciones populares (Bolas de Fuego de Nejapa, Calabiuza, Historiantes), ni gastronomía patrimonial (pupusa, atoles, gastronomía del maíz).
4. **Brechas pedagógicas frente a R4**:
   - Ninguna unidad temática cumple con el estándar de `>= 500 palabras sustantivas` en análisis conceptual continuo.
   - No existe ningún caso de estudio histórico-cívico resuelto paso a paso (el requerimiento R4 exige `>= 5 casos resueltos por tema`).
   - No existe un simulador de evaluación interactivo ni banco de preguntas formal con retroalimentación didáctica y distractores razonados.

---

## 2. Requerimientos Normativos y Estándares de Cumplimiento (R2, R4, R6)

| Requisito | Descripción | Mandato Técnico para Historia Patria |
|---|---|---|
| **R2** | Refuerzo de Historia Patria, Civismo y Cultura | Crear datos curriculares modulares organizados en 5 unidades temáticas estructuradas: Precolombino, Independencia y Federación, Historia Republicana Moderna, Símbolos Patrios y Civismo Constitucional, y Patrimonio Cultural/Literatura. |
| **R4** | Estándar de Contenido Educativo | Cada unidad/tema debe poseer estrictamente `>= 500 palabras sustantivas` de análisis riguroso (sin boilerplate, metadatos, fórmulas ni títulos repetidos) y `>= 5 casos de estudio o ejemplos prácticos resueltos`, distintos y no repetitivos. |
| **R4 (Quiz)** | Banco de Preguntas Interactivo | Integrar un banco evaluativo con preguntas multirreactivo (opción múltiple A, B, C, D), claves correctas verificadas, explicaciones didácticas fundamentadas y justificación de distractores. |
| **R6** | Integridad y Tipado Estricto | Cero errores de TypeScript (`npm run typecheck`), suite Vitest pasando al 100% (`npm run test`), ausencia de colisiones con los 17,640 reactivos del banco base y cero exposición de números telefónicos privados. |

---

## 3. Arquitectura de Datos Modular Propuesta

Para desacoplar el contenido educativo de la vista `PatrioticHistoryView.tsx` y seguir las mejores prácticas demostradas en `src/data/minedCurriculum/` y `src/data/languages/`, se establece el nuevo directorio modular:

```
src/data/patrioticHistory/
├── types.ts                        # Interfaces TypeScript del módulo
├── unit1PrecolombinoData.ts        # Unidad 1: Pueblos Originarios y Arqueología
├── unit2IndependenciaData.ts       # Unidad 2: Independencia y República Federal
├── unit3RepublicaModernaData.ts    # Unidad 3: Siglo XIX, Siglo XX, Conflicto y Paz de 1992
├── unit4SimbolosValoresData.ts     # Unidad 4: Símbolos Patrios y Deberes Cívicos Constitucionales
├── unit5PatrimonioLiteraturaData.ts # Unidad 5: Patrimonio Cultural, Literatura y Gastronomía
├── patrioticQuestionsData.ts       # Banco interactivo de reactivos con distractores razonados
└── index.ts                        # Re-exportador unificado y agregador curricular
```

### 3.1. Contrato de Interfaces TypeScript (`src/data/patrioticHistory/types.ts`)

```typescript
export type PatrioticUnitCategory =
  | 'precolombino'
  | 'independencia'
  | 'republica'
  | 'simbolos-civismo'
  | 'patrimonio-cultura';

export interface SolvedHistoricalCaseStudy {
  id: string;
  caseNumber: number;
  title: string;
  historicalPeriod: string;
  historicalContext: string;
  problemOrDilemma: string;
  civicHistoricalResolution: string;
  modernCivicLegacy: string;
  proceduralAnalysis: string; // Análisis paso a paso del caso (>= 25 palabras)
  validationQuestion: {
    statement: string;
    options: {
      A: string;
      B: string;
      C: string;
      D: string;
    };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    civicPrinciple: string;
  };
}

export interface PatrioticThematicUnit {
  id: string;
  unitNumber: number;
  category: PatrioticUnitCategory;
  title: string;
  subtitle: string;
  historicalSpan: string;
  icon: string;
  badgeColor: string;
  executiveSummary: string;
  substantiveAnalysis: string; // >= 500 palabras de prosa histórica sustantiva continua
  keyChronologicalMilestones: {
    yearOrDate: string;
    eventTitle: string;
    historicalSignificance: string;
  }[];
  primarySourcesAndDecrees: string[];
  caseStudies: SolvedHistoricalCaseStudy[]; // Exactamente >= 5 casos resueltos por unidad
}

export interface PatrioticQuestion {
  id: string;
  unitId: string;
  unitCategory: PatrioticUnitCategory;
  unitTitle: string;
  topic: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  historicalBasis: string;
  distractorRationale: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

// Preservación retrocompatible de las interfaces de símbolos y presidentes
export interface PatrioticSymbol {
  id: string;
  name: string;
  scientificOrOfficialName?: string;
  category: 'emblema' | 'himno' | 'flora' | 'fauna' | 'oracion';
  yearOfficialized: string;
  decree: string;
  meaning: string;
  detailedHistory: string;
  civicDetails: string[];
  icon: string;
}

export interface PresidentRecord {
  id: string;
  name: string;
  period: string;
  years: string;
  type: 'Constitucional' | 'Cívico-Militar' | 'De Facto' | 'Provisional';
  context: string;
  pros: string[];
  cons: string[];
}
```

---

## 4. Diseño Temático Curricular Detallado (Las 5 Unidades R2/R4)

### Unidad 1: Pueblos Originarios, Sitios Arqueológicos y el Señorío de Cuzcatlán
- **Categoría**: `precolombino`
- **Periodo**: ~1500 a.C. – 1524 d.C.
- **Núcleos Conceptuales (>= 500 palabras sustantivas)**:
  1. *Pueblos originarios y mosaico etnolingüístico*: Los Pipiles (de raíz nahua tolteca, migrantes del altiplano central mexicano hacia el 900-1200 d.C., hablantes de náhuat), los Mayas-Chortí y Poqomam (en el occidente y norte de Santa Ana/Ahuachapán/Chalatenango), los Lencas (al oriente del río Lempa: Usulután, San Miguel, Morazán, La Unión, Potón) y los Cacaopera/Kakawira (de filiación misumalpa en Morazán).
  2. *El Señorío de Cuzcatlán (Cuzcatán)*: Estructura sociopolítica confederal descentralizada, linajes nobles (*pipiltin*), comuneros (*macehualtin*), producción de cacao como moneda y tributo, y cultivos de maíz, frijol y algodón.
  3. *Arqueología Monumental y Joya de Cerén*: Tazumal (arquitectura piramidal maya del periodo clásico y posclásico en Chalchuapa), Joya de Cerén (aldea maya campesina preservada intacta bajo la ceniza volcánica del volcán Loma Caldera en el 600 d.C., declarada Patrimonio de la Humanidad por la UNESCO en 1993, "La Pompeya de América"), San Andrés (centro ceremonial y político del valle de Zapotitán), Cihuatán (gran urbe posclásica fortificada de 3 km²), Casa Blanca y Quelepa.
- **5 Casos de Estudio Histórico-Cívicos Resueltos**:
  1. *Caso 1.1: Joya de Cerén y la Vida Cotidiana Precolombina*: Análisis estratigráfico del abandono sin pérdida humana y conservación de estructuras domésticas, bodegas y temascales (*tuj*).
  2. *Caso 1.2: La Resistencia de Acaxual (1524)*: El combate entre las huestes de Pedro de Alvarado y los guerreros pipiles liderados por el mítico caudillo Atonal en Acajutla; impacto de la flecha de obsidiana que lisió a Alvarado.
  3. *Caso 1.3: La Toponimia Náhuat y la Geografía Sagrada*: Preservación toponímica de topónimos cuscatlecos (Cuscatlán = lugar de collares/riquezas; Suchitoto = lugar del pájaro flor; Ilopango = lugar del maíz tierno; Coatepeque = cerro de la serpiente).
  4. *Caso 1.4: Quelepa y el Legado Cultural Lenca Translempeño*: La zona arqueológica de Quelepa en San Miguel como puente comercial y cultural entre Mesoamérica y el Área Intermedia.
  5. *Caso 1.5: La Ciudad de Cihuatán y el Colapso Posclásico*: Análisis del incendio y destrucción ritual de Cihuatán en el siglo XI; lecciones sobre sostenibilidad ambiental y conflicto sociopolítico.

---

### Unidad 2: Proceso de Independencia, Gestas Libertarias y República Federal (1811 – 1841)
- **Categoría**: `independencia`
- **Periodo**: 1811 – 1841
- **Núcleos Conceptuales (>= 500 palabras sustantivas)**:
  1. *Causas mediatas e inmediatas*: Impacto de la invasión napoleónica a España (1808), la Constitución de Cádiz de 1812, los impuestos sobre el añil impuestos por los comerciantes monopolistas de la Capitanía General de Guatemala.
  2. *El Primer Grito de Independencia (5 de noviembre de 1811)*: Alzamiento cívico-popular en San Salvador encabezado por José Matías Delgado, Nicolás, Vicente y Manuel Aguilar, Manuel José Arce y Juan Manuel Rodríguez; la destitución del intendente Antonio Gutiérrez y Ulloa; rol protagónico de Pedro Pablo Castillo organizando a los barrios populares.
  3. *El Movimiento de Enero de 1814 y el Martirio de Celis*: Segundo intento insurreccional; la captura y martirio en prisión del médico prócer Dr. Santiago José Celis.
  4. *El Acta del 15 de Septiembre de 1821*: Proclamación de independencia redactada por José Cecilio del Valle en Guatemala; dilemas de autonomía frente a la élite oligárquica colonial.
  5. *Resistencia al Imperio de Iturbide y Época Federal (1824-1839)*: Rechazo heroico salvadoreño a la anexión forzada al Imperio Mexicano liderada por el general Vicente Filísola (1822-1823); fundación de la República Federal de Centroamérica; presidencia de Manuel José Arce (primer presidente federal salvadoreño); presidencia del paladín unionista Francisco Morazán; José Simeón Cañas y la histórica abolición de la esclavitud en Centroamérica en 1824 (décadas antes que EE.UU.).
- **5 Casos de Estudio Histórico-Cívicos Resueltos**:
  1. *Caso 2.1: El Campanario de La Merced y la Convocatoria Ciudadana de 1811*: Análisis del liderazgo civil y religioso de Delgado y la movilización de los barrios populares de San Salvador.
  2. *Caso 2.2: Pedro Pablo Castillo y el Poder Comunal de los Barrios de San Salvador*: Análisis del rol de los sectores populares, artesanos y mestizos como fuerza motriz de la gesta de 1814.
  3. *Caso 2.3: La Abolición de la Esclavitud por José Simeón Cañas (1824)*: Discurso paradigmático ante la Asamblea Nacional Constituyente de Centroamérica donando su patrimonio para indemnizar y liberar a los esclavos africanos.
  4. *Caso 2.4: La Defensa de San Salvador contra el Ejército Imperial Mexicano (1822-1823)*: El congreso salvadoreño declarando la soberanía patria e intentando pactar confederación con Estados Unidos para eludir el absolutismo imperial de Agustín de Iturbide.
  5. *Caso 2.5: La Disolución de la República Federal y la Soberanía de 1841*: El colapso del pacto federal centroamericano y la proclamación de El Salvador como República Soberana e Independiente en febrero de 1841.

---

### Unidad 3: Historia Republicana Moderna, Transformaciones Sociales y Acuerdos de Paz
- **Categoría**: `republica`
- **Periodo**: 1841 – 1992+
- **Núcleos Conceptuales (>= 500 palabras sustantivas)**:
  1. *La Transición Cafetalera del Siglo XIX*: Gobiernos liberales de Rafael Zaldívar; Decretos Legislativos de 1881 y 1882 de extinción de tierras comunales y ejidales para reconvertirlas a cafetales de exportación; concentración latifundista y surgimiento de la oligarquía de las "14 familias".
  2. *La Crisis de 1929 y el Levantamiento Indígena-Campesino de 1932*: Desplome internacional de precios del café; fraude electoral y marginación campesina en el occidente (Izalco, Nahuizalco, Tacuba, Juayúa); liderazgo de Feliciano Ama, Francisco Sánchez y Farabundo Martí; la brutal represión militar ordenada por Maximiliano Hernández Martínez (más de 25,000 campesinos asesinados) y el etnocidio lingüístico/cultural que redujo drásticamente el uso del náhuat y el traje típico (*refajo*).
  3. *El Régimen Militar y la Modernización Estatal (1944-1979)*: La histórica "Huelga de Brazos Caídos" de mayo de 1944 que derrocó a Hernández Martínez; Constitución social de 1950 bajo Óscar Osorio (creación del ISSS, presas hidroeléctricas CEL, IVU); auge del Mercado Común Centroamericano; la Guerra de las 100 Horas con Honduras en julio de 1969; fraudes electorales de 1972 y 1977 (UNO).
  4. *El Conflicto Armado Interno (1980-1992)*: Clamor popular de justicia social reprimido por escuadrones de la muerte; asesinato del Arzobispo San Óscar Arnulfo Romero el 24 de marzo de 1980; ofensiva general de 1981; ofensiva "Hasta el Tope y Punto" de noviembre de 1989; masacres de El Mozote y de los Sacerdotes Jesuitas de la UCA (Ignacio Ellacuría y compañeros).
  5. *El Proceso de Negociación y los Acuerdos de Paz de Chapultepec (16 de enero de 1992)*: Mediación de la ONU (Javier Pérez de Cuéllar); desmilitarización de la seguridad pública; disolución de los cuerpos represivos (Guardia Nacional, Policía de Hacienda); nacimiento de la Policía Nacional Civil (PNC), la Academia Nacional de Seguridad Pública (ANSP), la Procuraduría para la Defensa de los Derechos Humanos (PDDH) y la Sala de lo Constitucional independiente.
- **5 Casos de Estudio Histórico-Cívicos Resueltos**:
  1. *Caso 3.1: Las Leyes de Extinción de Ejidos de 1881-1882 y la Transformación Agraria*: Impacto económico y social de la reconversión de tierras ancestrales indígenas a fincas cafetaleras privadas.
  2. *Caso 3.2: La Huelga de Brazos Caídos de Mayo de 1944*: Análisis cívico de la resistencia no violenta encabezada por universitarios, médicos, comerciantes y obreros derrocando la dictadura de 13 años.
  3. *Caso 3.3: La Voz de los Sin Voz: El Mensaje Cívico de San Óscar Arnulfo Romero*: El papel de la denuncia profética y la defensa inquebrantable de los derechos humanos y la dignidad del pueblo antes de su magnicidio.
  4. *Caso 3.4: La Ofensiva "Hasta el Tope" de Noviembre de 1989 y el Punto de Quiebre Bélico*: Cómo la paridad militar convenció a ambas partes en conflicto de la imposibilidad de una victoria militar, precipitando la negociación política mediada por la ONU.
  5. *Caso 3.5: Los Acuerdos de Chapultepec de 1992 y el Nuevo Marco Constitucional*: La transición de una doctrina de seguridad nacional militarizada a una doctrina de seguridad pública democrática basada en los derechos humanos.

---

### Unidad 4: Símbolos Patrios Oficiales, Ley de Símbolos y Valores Cívicos Constitucionales
- **Categoría**: `simbolos-civismo`
- **Periodo**: 1912 – Vigente (Constitución de 1983)
- **Núcleos Conceptuales (>= 500 palabras sustantivas)**:
  1. *Marco Normativo e Historia Legal de los Emblemas*: Ley de Símbolos Patrios de la República de El Salvador; Decreto Legislativo del 17 de mayo de 1912 (Presidencia del Dr. Manuel Enrique Araujo) que sustituyó el pabellón de estrellas de barras inspirado en EE.UU. por la gloriosa enseña azul cobalto y blanco de la Federación Centroamericana de 1823.
  2. *Composición Heráldica y Semiótica del Escudo Nacional*: Diseño del calígrafo Rafael Barraza Rodríguez; el triángulo equilátero dorado (igualdad ante la ley de los tres poderes: Legislativo, Ejecutivo y Judicial); los 5 volcanes en cordillera bañados por dos mares (las repúblicas centroamericanas y su proyección biocéanica); el gorro frigio irradiante con la fecha sacra "15 DE SEPTIEMBRE DE 1821"; el arcoíris de esperanza; las 14 ramas de laurel con cinta azul y blanca representando los 14 departamentos de la República; y el lema nacional "DIOS UNIÓN LIBERTAD".
  3. *El Himno Nacional y la Oración a la Bandera*: Letra del Gral. Juan José Cañas y partitura del Maestro Juan Aberle (estrenado el 15 de septiembre de 1879 y ratificado por decreto de 1953); análisis cívico de sus estrofas patrióticas ("De la paz en la dicha suprema / siempre noble soñó El Salvador / fue obtenerla su eterno problema / conservarla es su gloria mayor"); la Oración a la Bandera Salvadoreña redactada en 1916 por el sabio y humanista Dr. David J. Guzmán.
  4. *Símbolos Naturales Protegidos*: El Torogoz (*Eumomota superciliosa*, Ave Nacional por decreto de 1999, símbolo de inadaptabilidad al cautiverio); la Flor de Izote (*Yucca elephantipes*, Flor Nacional decretada en 1939, valor nutricional y resistencia agraria); el Maquilíshuat (*Tabebuia rosea*) y el Árbol de Bálsamo (*Myroxylon balsamum*, decretados Árboles Nacionales en 1939 por su floración primaveral y resina medicinal protegida).
  5. *Valores Cívicos y Deberes Constitucionales (Constitución de 1983)*: Derechos fundamentales consagrados en el Art. 2 Cn.; deberes políticos y ciudadanos del Art. 73 Cn. (ejercer el voto libre y secreto, velar por la alternabilidad en la presidencia de la República, cumplir y velar que se cumpla la Constitución, prestar servicio militar y social, honrar a los símbolos patrios y preservar el medio ambiente salvadoreño).
- **5 Casos de Estudio Histórico-Cívicos Resueltos**:
  1. *Caso 4.1: Protocolo de Uso y Respeto de la Bandera Magna vs. Bandera Oficial*: Distinción legal y protocolaria entre la Bandera Magna (edificios de gobierno y misiones diplomáticas), la Bandera Oficial de uso cotidiano con la leyenda dorada "DIOS UNIÓN LIBERTAD", y la bandera civil.
  2. *Caso 4.2: La Heráldica Republicana frente a Regímenes Autoritarios*: Cómo el triángulo equilátero del Escudo Nacional salvaguarda dogmáticamente la separación e independencia de los Órganos del Estado frente a la concentración monocrática del poder.
  3. *Caso 4.3: El Mensaje de Paz y Antibelicismo en el Himno Nacional*: Análisis lírico de la primera estrofa del himno y el mandato supremo de solucionar controversias de forma pacífica y fraterna.
  4. *Caso 4.4: La Protección de la Fauna Silvestre Nacional y el Hábitat del Torogoz*: Dilema ecológico y legal sobre la prohibición de caza, comercio o enjaulamiento del ave nacional conforme a la Ley de Medio Ambiente y Vida Silvestre.
  5. *Caso 4.5: El Voto Ciudadano como Deber y Derecho Inviolable (Art. 72 y 73 Cn.)*: El sufragio como ejercicio soberano de autodeterminación, la alternabilidad republicana en el ejercicio de la Presidencia de la República y la sanción constitucional ante su vulneración.

---

### Unidad 5: Patrimonio Cultural, Literatura Cuscatleca e Identidad Nacional
- **Categoría**: `patrimonio-cultura`
- **Periodo**: Identidad y Tradición Viva
- **Núcleos Conceptuales (>= 500 palabras sustantivas)**:
  1. *Literatura Clásica Cuscatleca*:
     - *Salvador Salazar Arrué (Salarrué)*: Nacido en Sonsonate, pionero del costumbrismo lírico con "Cuentos de Barro" (1933) y "Cuentos de Cipotes"; reivindicación poética de la ternura campesina, el habla popular náhuat-española y la cosmovisión telúrica indígena frente a la modernización deshumanizante.
     - *Claudia Lars (Margarita del Carmen Brannon Vega)*: Insigne poetisa nacida en Armenia, Sonsonate; obras cumbres como "Tierra de Infancia" (evocación mágica de los paisajes rurales salvadoreños), "Fábulas del Silencio" y "Donde llegan los pasos"; profundidad lírica y humanismo universal.
     - *Alberto Masferrer*: Ensayista, educador y filósofo social de Alegría, Usulután; creador de la doctrina social del "Mínimum Vital" (1929) que propugnaba que todo ser humano tiene derecho inalienable a alimentación, techo, salud, vestido, trabajo y educación; autor de "El Dinero Maldito" (alerta contra el alcoholismo) y "Leer y Escribir".
     - *Alfredo Espino*: El poeta de la campiña salvadoreña, autor de "Jícaras Tristes" (publicada póstumamente en 1936); inmortalizó en rima lírica el árbol de fuego, el nido, los cañales y la sencillez paisajística de Cuscatlán.
  2. *Tradiciones y Manifestaciones Populares Vivas*:
     - Las Bolas de Fuego de Nejapa (conmemoración comunitaria de la erupción volcánica de El Playón en 1658 y la protección cívico-religiosa).
     - La Calabiuza de Tonacatepeque (noche del 1 de noviembre rescatando la mitología salvadoreña del Cipitío, la Siguanaba, el Cadejo y la Carreta Chillona frente a modas foráneas).
     - Danza de los Historiantes (Moros y Cristianos en Panchimalco, San Antonio Abad, Cuisnahuat y Santo Domingo de Guzmán).
     - Procesión de las Palmas de Panchimalco (mayo, ofrenda floral indígena sincrética con música de pito y tambor).
     - Las Alfombras de Aserrín en Sonsonate (Semana Santa declarada patrimonio cultural inmaterial).
  3. *Patrimonio Arquitectónico y Espacial*:
     - Centro Histórico de San Salvador: Palacio Nacional, Teatro Nacional, Catedral Metropolitana (cripta de San Óscar Romero), Iglesia El Rosario (obra maestra arquitectónica vanguardista del escultor Rubén Martínez con vitrales multicolores de concreto y hierro).
     - Iglesias coloniales centenarias: Santa Cruz de Roma en Panchimalco (siglo XVI), San Pedro Apóstol en Metapán (siglo XVIII con retablos barrocos dorados).
  4. *Gastronomía Tradicional y Cultura del Maíz*:
     - Las pupusas como plato nacional indiscutible (Decreto Legislativo de 2005 declarando el Día Nacional de la Pupusa cada segundo domingo de noviembre; tradición artesanal en Olocuilta, Los Planes de Renderos y Antiguo Cuscatlán con masas de maíz nixtamalizado y arroz).
     - La culinaria autóctona del maíz: Atol shuco (atol chuco con fermento agrio, frijoles negros *monos*, aiguashte de semilla de calabaza y chile ciruela), atol de elote, riguas, tamales pisques con ceniza y chipilín, tortas de pescado seco en semana santa, yuca frita con pescaditas o chicharrón de Juayúa.
- **5 Casos de Estudio Histórico-Cívicos Resueltos**:
  1. *Caso 5.1: "Cuentos de Barro" y la Dignidad del Campesinado Salvadoreño*: Análisis literario y sociológico del relato "La honra" o "El zungalo" de Salarrué desarticulando prejuicios raciales y clasistas coloniales.
  2. *Caso 5.2: La Doctrina del "Mínimum Vital" de Alberto Masferrer*: La pertinencia actual del ensayo de 1929 como precursor de los Derechos Económicos, Sociales y Culturales (DESC) en el derecho constitucional salvadoreño.
  3. *Caso 5.3: Claudia Lars y la Preservación de la Memoria en "Tierra de Infancia"*: La memoria histórica del paisaje salvadoreño frente al crecimiento urbano desordenado y la pérdida de raíces culturales.
  4. *Caso 5.4: La Iglesia El Rosario de Rubén Martínez y la Arquitectura Sacra Moderna*: Cómo una estructura de hormigón armado brutalista y vidrio escultórico se convirtió en un hito de paz, luz y redención en el corazón de San Salvador.
  5. *Caso 5.5: La Pupusa de Olocuilta y la Protección de la Identidad Gastronómica*: El reconocimiento legal de la pupusa como patrimonio alimentario nacional frente a controversias transnacionales de propiedad cultural.

---

## 5. Diseño del Banco de Preguntas Interactivo y Simulador de Examen

Para satisfacer R4 y habilitar la interactividad evaluativa requerida en `PatrioticHistoryView.tsx`:

1. **Volumen de reactivos**:
   - 25 preguntas interactivas incorporadas directamente dentro de los casos de estudio (1 por cada caso de estudio, 5 por unidad).
   - Un banco independiente de al menos 50 a 60 reactivos multirreactivo (`patrioticQuestionsData.ts`) distribuidos equitativamente entre las 5 unidades temáticas (10-12 preguntas por unidad).
2. **Estructura del reactivo**:
   - Cada pregunta cuenta estrictamente con 4 opciones: `A`, `B`, `C`, `D`.
   - Clave correcta verificada.
   - Justificación conceptual profunda del acierto.
   - Fundamento normativo o cita histórica primaria.
   - Justificación individual de cada distractor (`distractorRationale` para A, B, C y D), explicando por qué las otras opciones son erróneas o constituyen anacronismos históricos.
3. **Mecánica del Simulador en `PatrioticHistoryView.tsx`**:
   - Modo de práctica libre (selección por unidad temática).
   - Modo de examen oficial temporizado (ej. 30 preguntas en 30 minutos).
   - Cálculo de nota oficial salvadoreña en escala `0.0 a 10.0` (fórmula estándar: `(correctas / total) * 10`).
   - Boleta de resultados detallada (desglose por categoría temática, nota obtenida, porcentaje, estado Aprobado/Reprobado con umbral mínimo de 7.0).

---

## 6. Integración en la Interfaz de Usuario (`PatrioticHistoryView.tsx`)

Actualmente, `PatrioticHistoryView.tsx` cuenta con 2 pestañas:
```typescript
const [activeTab, setActiveTab] = useState<'symbols' | 'presidents'>('symbols');
```

La propuesta de ampliación mantiene intacto el 100% de la funcionalidad preexistente y añade las nuevas dimensiones pedagógicas:
```typescript
const [activeTab, setActiveTab] = useState<'curriculum' | 'symbols' | 'presidents' | 'quiz'>('curriculum');
```

### 6.1. Organización Visual de Pestañas:
1. **Pestaña 1: Malla Curricular e Historia Patria (`curriculum`)**:
   - Selector lateral o superior de las 5 Unidades Temáticas.
   - Visualización de la fundamentación histórica sustantiva (`>= 500 palabras`).
   - Línea de tiempo cronológica interactiva con hitos clave.
   - Acordeón interactivo con los 5 Casos de Estudio Resueltos de la unidad seleccionada.
   - Cada caso muestra su dilema, resolución, legado cívico y su pregunta de validación interactiva con retroalimentación inmediata.
2. **Pestaña 2: Símbolos Patrios Oficiales (`symbols`)**:
   - Preservación completa de las fichas oficiales de los 7 símbolos patrios.
   - Referencia cruzada con la Unidad 4 para profundizar en el marco legal de la Ley de Símbolos.
3. **Pestaña 3: Historial Presidencial Republicano (`presidents`)**:
   - Preservación íntegra de los 14 registros presidenciales con sus listas de pros y contras.
   - Búsqueda en tiempo real por nombre, período o acontecimiento histórico.
4. **Pestaña 4: Simulador de Evaluación Cívico-Histórico (`quiz`)**:
   - Barra de control de examen con filtros por categoría (`Todas`, `Precolombino`, `Independencia`, `República`, `Símbolos`, `Patrimonio`).
   - Botón de "Iniciar Examen Oficial Temporizado (30 Minutos)".
   - Temporizador dinámico regresivo.
   - Tarjeta final de resultados (Nota oficial de 0.0 a 10.0, aciertos, fallos, estatus aprobatorio).
   - Lista de reactivos con explicaciones didácticas y justificación de distractores desplegables.

---

## 7. Estrategia de Verificación y Compliance Automatizado

Para garantizar que el nuevo módulo cumpla con todos los estándares del proyecto:

1. **Nuevo archivo de prueba de cumplimiento**:
   `tests/patrioticHistoryCompliance.test.ts`
   - **Test 1**: Verifica la existencia de exactamente 5 unidades temáticas en `src/data/patrioticHistory/`.
   - **Test 2 (R4 Word Count)**: Cada una de las 5 unidades posee estrictamente `>= 500 palabras sustantivas` en su texto conceptual (`substantiveAnalysis`), normalizado sin etiquetas HTML ni metadatos.
   - **Test 3 (R4 Solved Cases)**: Cada unidad temática posee al menos 5 casos de estudio resueltos (`caseStudies.length >= 5`), con análisis paso a paso (`proceduralAnalysis.length >= 25 palabras`).
   - **Test 4 (R4 Reactivos)**: Cada caso de estudio contiene una pregunta de validación con 4 opciones A/B/C/D y clave correcta válida.
   - **Test 5 (Banco Evaluativo)**: El banco interactivo posee al menos 50 preguntas únicas, con distractores fundamentados (`distractorRationale`) y sin colisiones de ID con el banco base de 17,640 preguntas de `public/data/`.
   - **Test 6 (Invariantes)**: Cero términos de relleno (`TODO`, `TBD`, `placeholder`, `lorem ipsum`) y cero presencia de teléfonos privados.
2. **Verificación de Tipos y Construcción**:
   - `npm run typecheck` debe concluir con 0 errores.
   - `npm run test` debe ejecutar todos los tests existentes (711) más la nueva suite sin regresiones.
   - `npm run build` debe generar los bundles de producción limpiamente.

---

## 8. Recomendaciones Clave para el Agente Implementador

1. **Modularidad estricta**: No volcar las 5 unidades temáticas y el banco de preguntas dentro del archivo TSX de la vista. Colocar todo el contenido en `src/data/patrioticHistory/` con archivos dedicados por unidad.
2. **Riqueza de vocabulario y precisión historiográfica**: Evitar generalidades. Usar nombres propios, fechas exactas, nombres científicos de flora/fauna, decretos legislativos oficiales y referencias bibliográficas fidedignas (Ministerio de Educación, Academia Salvadoreña de la Historia, CONCULTURA/SECULTURA/Ministerio de Cultura).
3. **Diseño visual coherente**: Seguir el sistema de diseño corporativo y editorial de APP-KUSKAT (paleta azul cobalto `#0B1B3D`, detalles ámbar/dorado `#C59B27`, tipografía editorial, tarjetas con sombras sutiles y bordes limpios).
4. **Cumplimiento de AdSense (R5)**: En `PatrioticHistoryView.tsx`, si se integran anuncios `AdBanner`, deben ubicarse estrictamente en zonas con contenido educativo visible masivo y nunca en pantallas vacías o estados de carga.
