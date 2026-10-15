import fs from 'node:fs';
import path from 'node:path';

const ENA_DIR = path.join(process.cwd(), 'public', 'data', 'ena');
const QUESTIONS_DIR = path.join(ENA_DIR, 'questions');

fs.mkdirSync(QUESTIONS_DIR, { recursive: true });

// Malla curricular oficial de la Escuela Nacional de Agricultura (ENA) "Roberto Quiñónez" - Admisión 2027
const enaCurriculum = {
  title: "Escuela Nacional de Agricultura 'Roberto Quiñónez' (ENA) - Convocatoria Admisión 2027",
  description: "Banco oficial de 1,400 preguntas de opción múltiple estructurado en las 4 materias del examen de admisión: Matemáticas, Química, Biología y Lenguaje (350 preguntas por materia).",
  totalQuestions: 1400,
  totalSubtopics: 4,
  subjects: [
    {
      id: "ena_matematicas",
      number: 1,
      name: "Matemáticas",
      codeRange: "1.1 al 1.5",
      description: "Unidades de medida agrícolas, conversiones, regla de tres, geometría de campo, álgebra, funciones y trigonometría.",
      totalSubtopics: 1,
      totalQuestions: 350,
      color: "from-lime-600 to-green-700",
      badgeBg: "bg-lime-100",
      badgeText: "text-lime-800",
      borderColor: "border-lime-200",
      icon: "Calculator",
      institution: "ENA",
      subtopics: [
        {
          id: "ena_matematicas",
          code: "1.0",
          title: "Matemáticas Agrícolas y Generales",
          subjectId: "ena_matematicas",
          questionCount: 350,
          sections: [
            "Unidades de Medida Agrícolas y Conversiones (1–70)",
            "Aritmética Aplicada, Regla de Tres y Porcentajes (71–140)",
            "Área y Volumen de Figuras Geométricas en el Campo (141–210)",
            "Álgebra, Factorización y Ecuaciones (211–280)",
            "Trigonometría, Recta, Conjuntos y Funciones (281–350)"
          ]
        }
      ]
    },
    {
      id: "ena_quimica",
      number: 2,
      name: "Química",
      codeRange: "2.1 al 2.5",
      description: "Materia, estructura del átomo, tabla periódica, enlaces químicos, tipos de reacciones y aplicaciones agropecuarias.",
      totalSubtopics: 1,
      totalQuestions: 350,
      color: "from-emerald-600 to-teal-700",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      borderColor: "border-emerald-200",
      icon: "FlaskConical",
      institution: "ENA",
      subtopics: [
        {
          id: "ena_quimica",
          code: "2.0",
          title: "Química General y Aplicada",
          subjectId: "ena_quimica",
          questionCount: 350,
          sections: [
            "Definición, Ramas y Estados de la Materia (1–70)",
            "El Átomo y su Estructura Nuclear (71–140)",
            "La Tabla Periódica y Familias de Elementos (141–210)",
            "Enlaces Químicos y Estructura Molecular (211–280)",
            "Reacciones Químicas y Agroquímica (281–350)"
          ]
        }
      ]
    },
    {
      id: "ena_biologia",
      number: 3,
      name: "Biología",
      codeRange: "3.1 al 3.5",
      description: "Materia viva, biología celular, metabolismo y fotosíntesis, genética mendeliana, reinos de la naturaleza y ecología.",
      totalSubtopics: 1,
      totalQuestions: 350,
      color: "from-green-600 to-emerald-700",
      badgeBg: "bg-green-100",
      badgeText: "text-green-800",
      borderColor: "border-green-200",
      icon: "Sprout",
      institution: "ENA",
      subtopics: [
        {
          id: "ena_biologia",
          code: "3.0",
          title: "Biología y Ciencias de la Vida",
          subjectId: "ena_biologia",
          questionCount: 350,
          sections: [
            "Materia Viva y Niveles de Organización (1–70)",
            "La Célula y sus Organelos (71–140)",
            "Metabolismo Celular y Fotosíntesis (141–210)",
            "Genética y Leyes de la Herencia (211–280)",
            "Los Seis Reinos de la Naturaleza y Ecología (281–350)"
          ]
        }
      ]
    },
    {
      id: "ena_lenguaje",
      number: 4,
      name: "Lenguaje",
      codeRange: "4.1 al 4.5",
      description: "Comunicación, técnicas de recopilación e investigación, textos argumentativos, oratoria, literatura salvadoreña y morfosintaxis.",
      totalSubtopics: 1,
      totalQuestions: 350,
      color: "from-amber-600 to-yellow-700",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
      borderColor: "border-amber-200",
      icon: "BookOpen",
      institution: "ENA",
      subtopics: [
        {
          id: "ena_lenguaje",
          code: "4.0",
          title: "Lenguaje y Comunicación Académica",
          subjectId: "ena_lenguaje",
          questionCount: 350,
          sections: [
            "Comunicación, Textos Orales y Oratoria (1–70)",
            "Técnicas de Estudio y Organizadores de Información (71–140)",
            "Investigación Científica e Informe Académico (141–210)",
            "Texto Argumentativo, Ensayo y Discurso Persuasivo (211–280)",
            "Literatura Salvadoreña y Precolombina, Morfosintaxis (281–350)"
          ]
        }
      ]
    }
  ]
};

const curPath = path.join(ENA_DIR, 'curriculum.json');
fs.writeFileSync(curPath, JSON.stringify(enaCurriculum, null, 2), 'utf-8');
console.log(`✓ Currículo ENA 2027 generado exitosamente en ${curPath}`);
console.log(`  Total materias: ${enaCurriculum.subjects.length}`);
console.log(`  Total reactivos declarados: ${enaCurriculum.totalQuestions}`);
