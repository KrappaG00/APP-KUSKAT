export interface DepartmentData {
  id: string;
  name: string;
  capital: string;
  region: 'Occidental' | 'Central' | 'Paracentral' | 'Oriental';
  coordinates: { x: number; y: number }; // Relative map center for 3D positioning
  polygon: [number, number][]; // Simplified boundary points for 3D polygon mesh
  schoolsCount: number;
  studentsCount: number;
  featuredSubject: string;
  bestCategory: string;
  municipalitiesCount: number;
  description: string;
}

export const DEPARTMENTS_DATA: DepartmentData[] = [
  {
    id: 'ahuachapan',
    name: 'Ahuachapán',
    capital: 'Ahuachapán',
    region: 'Occidental',
    coordinates: { x: -215, y: 12 },
    polygon: [
      [-240, 35], [-200, 38], [-190, 10], [-205, -15], [-235, -10], [-245, 15]
    ],
    schoolsCount: 348,
    studentsCount: 42100,
    featuredSubject: 'Ciencias Naturales y Química',
    bestCategory: 'Admisión UES & ASD Jóvenes Talento',
    municipalitiesCount: 12,
    description: 'Puerta occidental de El Salvador, destacada por su fuerte desempeño en ciencias biológicas y proyectos agroambientales.',
  },
  {
    id: 'santa_ana',
    name: 'Santa Ana',
    capital: 'Santa Ana',
    region: 'Occidental',
    coordinates: { x: -155, y: 45 },
    polygon: [
      [-195, 38], [-145, 68], [-125, 40], [-140, 15], [-175, 12], [-190, 30]
    ],
    schoolsCount: 580,
    studentsCount: 89400,
    featuredSubject: 'Matemática y Física',
    bestCategory: 'Facultad Multidisciplinaria de Occidente (FMOcc - UES)',
    municipalitiesCount: 13,
    description: 'Polo académico y universitario del occidente, con alto rigor en álgebra, cálculo y ciencias de la salud.',
  },
  {
    id: 'sonsonate',
    name: 'Sonsonate',
    capital: 'Sonsonate',
    region: 'Occidental',
    coordinates: { x: -165, y: -25 },
    polygon: [
      [-195, 8], [-145, 12], [-135, -20], [-155, -45], [-195, -35], [-205, -10]
    ],
    schoolsCount: 460,
    studentsCount: 68200,
    featuredSubject: 'Lenguaje y Literatura',
    bestCategory: 'Prueba Nacional AVANZO & ENA',
    municipalitiesCount: 16,
    description: 'Tierra de tradición y riqueza cultural náhuat-pipil, destacando en comprensión lectora, producción textual y agronomía.',
  },
  {
    id: 'chalatenango',
    name: 'Chalatenango',
    capital: 'Chalatenango',
    region: 'Central',
    coordinates: { x: -55, y: 68 },
    polygon: [
      [-135, 42], [-65, 85], [10, 80], [-5, 45], [-65, 35], [-120, 38]
    ],
    schoolsCount: 395,
    studentsCount: 35900,
    featuredSubject: 'ASD Jóvenes Talento y Ciencias de la Tierra',
    bestCategory: 'Academia Sabatina Departamental (ASD)',
    municipalitiesCount: 33,
    description: 'Cuna de talentos olímpicos y destacada participación en las pruebas del programa Jóvenes Talento en 5.°, 6.° y 7.° grado.',
  },
  {
    id: 'la_libertad',
    name: 'La Libertad',
    capital: 'Santa Tecla',
    region: 'Central',
    coordinates: { x: -85, y: -18 },
    polygon: [
      [-130, 10], [-60, 20], [-45, -15], [-65, -45], [-125, -38], [-135, -15]
    ],
    schoolsCount: 720,
    studentsCount: 145000,
    featuredSubject: 'Precálculo, Química y Tecnología',
    bestCategory: 'Admisión UES y Prueba AVANZO',
    municipalitiesCount: 22,
    description: 'Eje de innovación educativa y tecnológica, con alto volumen de postulantes con notas sobresalientes en bachillerato.',
  },
  {
    id: 'san_salvador',
    name: 'San Salvador',
    capital: 'San Salvador',
    region: 'Central',
    coordinates: { x: -25, y: 12 },
    polygon: [
      [-55, 30], [5, 35], [15, 10], [-5, -10], [-45, -5], [-55, 15]
    ],
    schoolsCount: 890,
    studentsCount: 210000,
    featuredSubject: 'Medicina, Ingeniería y Formación Docente',
    bestCategory: 'Admisión Universitaria UES Central y Escalafón Docente',
    municipalitiesCount: 19,
    description: 'Centro neurálgico del país, albergando la mayor concentración de aspirantes preuniversitarios y docentes en formación continua.',
  },
  {
    id: 'cuscatlan',
    name: 'Cuscatlán',
    capital: 'Cojutepeque',
    region: 'Central',
    coordinates: { x: 25, y: 22 },
    polygon: [
      [5, 40], [50, 42], [55, 15], [20, 5], [5, 20]
    ],
    schoolsCount: 290,
    studentsCount: 38500,
    featuredSubject: 'Estudios Sociales y Civismo Constitucional',
    bestCategory: 'KUSKAT Histórico & Convocatorias Nacionales',
    municipalitiesCount: 16,
    description: 'Corazón histórico que inspira el nombre de KUSKAT; sobresaliente en análisis histórico, geografía y memoria cívica.',
  },
  {
    id: 'la_paz',
    name: 'La Paz',
    capital: 'Zacatecoluca',
    region: 'Paracentral',
    coordinates: { x: 10, y: -40 },
    polygon: [
      [-35, -12], [45, -10], [55, -48], [-15, -55], [-40, -35]
    ],
    schoolsCount: 410,
    studentsCount: 52000,
    featuredSubject: 'Legislación y Seguridad Ciudadana',
    bestCategory: 'Academia Nacional de Seguridad Pública (ANSP) y ENA',
    municipalitiesCount: 22,
    description: 'Sede de instituciones de formación vocacional y técnica, con gran número de aprobados en la prueba cultural de la ANSP y ENA.',
  },
  {
    id: 'cabanas',
    name: 'Cabañas',
    capital: 'Sensuntepeque',
    region: 'Paracentral',
    coordinates: { x: 65, y: 50 },
    polygon: [
      [15, 68], [95, 65], [105, 35], [55, 35], [20, 48]
    ],
    schoolsCount: 275,
    studentsCount: 31400,
    featuredSubject: 'Biología, Ecología y Geografía',
    bestCategory: 'Escalafón Docente y Bachillerato AVANZO',
    municipalitiesCount: 9,
    description: 'Riqueza en biodiversidad y recursos hídricos, impulsando docentes con gran vocación en educación ambiental y ciencias integradas.',
  },
  {
    id: 'san_vicente',
    name: 'San Vicente',
    capital: 'San Vicente',
    region: 'Paracentral',
    coordinates: { x: 80, y: -8 },
    polygon: [
      [45, 12], [110, 15], [115, -25], [60, -30], [45, -5]
    ],
    schoolsCount: 310,
    studentsCount: 36800,
    featuredSubject: 'Didáctica de la Matemática ESMATE',
    bestCategory: 'Facultad Multidisciplinaria Paracentral (FMP - UES)',
    municipalitiesCount: 13,
    description: 'Referente pedagógico en la zona paracentral salvadoreña, con vocación magisterial y preparación universitaria sólida.',
  },
  {
    id: 'usulutan',
    name: 'Usulután',
    capital: 'Usulután',
    region: 'Oriental',
    coordinates: { x: 145, y: -42 },
    polygon: [
      [105, -15], [175, -10], [185, -45], [130, -58], [95, -45]
    ],
    schoolsCount: 510,
    studentsCount: 64500,
    featuredSubject: 'Ciencias Agropecuarias y Química Marina',
    bestCategory: 'Escuela Nacional de Agricultura (ENA) & AVANZO',
    municipalitiesCount: 23,
    description: 'El granero de El Salvador; alumnos con destacada vocación agronómica, biológica y postulantes destacados a la ENA.',
  },
  {
    id: 'san_miguel',
    name: 'San Miguel',
    capital: 'San Miguel',
    region: 'Oriental',
    coordinates: { x: 175, y: 10 },
    polygon: [
      [120, 28], [215, 35], [225, -10], [165, -15], [125, 5]
    ],
    schoolsCount: 670,
    studentsCount: 112000,
    featuredSubject: 'Matemática Superior, Medicina y Derecho',
    bestCategory: 'Facultad Multidisciplinaria Oriental (FMOri - UES)',
    municipalitiesCount: 20,
    description: 'Faro cultural y universitario del oriente salvadoreño, aportando una de las mayores promociones de ingreso a la UES y ANSP.',
  },
  {
    id: 'morazan',
    name: 'Morazán',
    capital: 'San Francisco Gotera',
    region: 'Oriental',
    coordinates: { x: 205, y: 58 },
    polygon: [
      [145, 68], [235, 78], [245, 45], [195, 38], [155, 42]
    ],
    schoolsCount: 330,
    studentsCount: 34200,
    featuredSubject: 'Historia Contemporánea y Ciudadanía',
    bestCategory: 'Ciencias Sociales & Escalafón Docente',
    municipalitiesCount: 26,
    description: 'Tierra de memoria y resiliencia, con docentes y estudiantes destacados en ciencias históricas, educación cívica y valores democráticos.',
  },
  {
    id: 'la_union',
    name: 'La Unión',
    capital: 'La Unión',
    region: 'Oriental',
    coordinates: { x: 255, y: -8 },
    polygon: [
      [220, 20], [278, 25], [285, -35], [235, -45], [215, -15]
    ],
    schoolsCount: 380,
    studentsCount: 44900,
    featuredSubject: 'Idioma Inglés y Comercio Internacional',
    bestCategory: 'Prueba AVANZO Inglés & Formación Técnica',
    municipalitiesCount: 18,
    description: 'Extremo oriental con proyección hacia el Golfo de Fonseca, destacado en competencias de inglés y habilidades comerciales.',
  },
];
