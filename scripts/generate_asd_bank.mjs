import fs from 'node:fs';
import path from 'node:path';

const ASD_DIR = path.join(process.cwd(), 'public', 'data', 'asd');
const QUESTIONS_DIR = path.join(ASD_DIR, 'questions');

fs.mkdirSync(QUESTIONS_DIR, { recursive: true });

// Malla curricular de ASD
const asdCurriculum = {
  title: "Academia Sabatina Departamental (ASD) - Jóvenes Talento",
  description: "Banco oficial de 2,190 preguntas de opción múltiple estructurado por grados académicos (Quinto, Sexto y Séptimo Grado) en Matemática y Ciencias Naturales (365 preguntas por materia).",
  totalQuestions: 2190,
  totalSubtopics: 6,
  subjects: [
    {
      id: "asd_5",
      number: 1,
      name: "Quinto Grado (5.° Grado)",
      codeRange: "5.1 y 5.2",
      description: "Preparación académica de 5.° Grado en Matemática (ESMATE) y Ciencias Naturales (Ciencia y Tecnología).",
      totalSubtopics: 2,
      totalQuestions: 730,
      color: "from-emerald-600 to-teal-700",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      borderColor: "border-emerald-200",
      icon: "GraduationCap",
      institution: "ASD",
      subtopics: [
        {
          id: "5_matematica",
          code: "5.1",
          title: "Matemática (5.° Grado)",
          subjectId: "asd_5",
          questionCount: 365,
          sections: [
            "Unidad 1: Divisibilidad, Múltiplos y Divisores (1–35)",
            "Unidad 2: Polígonos y Triángulos (36–65)",
            "Unidad 3: Multiplicación y División de Decimales por Naturales (66–95)",
            "Unidad 4: Gráficas de Líneas y Datos (96–120)",
            "Unidad 5: Multiplicación y División de Decimales por Decimales (121–155)",
            "Unidad 6: Cantidad por Unidad y Rapidez (156–185)",
            "Unidad 7: Fracciones y Operaciones (186–230)",
            "Unidad 8: Área de Triángulos y Cuadriláteros (231–265)",
            "Unidad 9: Medidas y Conversión de Unidades (266–295)",
            "Unidad 10: Multiplicación y División de Fracciones por Naturales (296–330)",
            "Unidad 11: Cuerpos Geométricos y Volumen (331–365)"
          ]
        },
        {
          id: "5_ciencias",
          code: "5.2",
          title: "Ciencias Naturales (5.° Grado)",
          subjectId: "asd_5",
          questionCount: 365,
          sections: [
            "Unidad 1: La Materia y sus Propiedades (1–40)",
            "Unidad 2: La Célula y los Reinos de la Naturaleza (41–85)",
            "Unidad 3: El Cuerpo Humano y la Salud (86–140)",
            "Unidad 4: Las Plantas y el Reino Vegetal (141–185)",
            "Unidad 5: Ecosistemas y Biodiversidad de El Salvador (186–235)",
            "Unidad 6: Fuerzas, Máquinas Simples y Energía (236–285)",
            "Unidad 7: La Tierra, el Clima y el Universo (286–365)"
          ]
        }
      ]
    },
    {
      id: "asd_6",
      number: 2,
      name: "Sexto Grado (6.° Grado)",
      codeRange: "6.1 y 6.2",
      description: "Preparación académica de 6.° Grado en Matemática (ESMATE) y Ciencias Naturales (Ciencia y Tecnología).",
      totalSubtopics: 2,
      totalQuestions: 730,
      color: "from-blue-600 to-indigo-700",
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-800",
      borderColor: "border-blue-200",
      icon: "BookOpen",
      institution: "ASD",
      subtopics: [
        {
          id: "6_matematica",
          code: "6.1",
          title: "Matemática (6.° Grado)",
          subjectId: "asd_6",
          questionCount: 365,
          sections: [
            "Unidad 1: Operaciones con Fracciones (1–40)",
            "Unidad 2: Cantidades Variables y Números Romanos (41–70)",
            "Unidad 3: División de Fracciones y Jerarquía (71–110)",
            "Unidad 4: Razones y Porcentajes (111–155)",
            "Unidad 5: Proporcionalidad Directa e Inversa (156–200)",
            "Unidad 6: Longitud de la Circunferencia y Área del Círculo (201–240)",
            "Unidad 7: Análisis de Datos y Media Aritmética (241–280)",
            "Unidad 8: Volumen de Prismas y Cilindros (281–320)",
            "Unidad 9: Conversión de Medidas del Sistema Internacional (321–345)",
            "Unidad 10: Transformaciones Geométricas y Simetría (346–365)"
          ]
        },
        {
          id: "6_ciencias",
          code: "6.2",
          title: "Ciencias Naturales (6.° Grado)",
          subjectId: "asd_6",
          questionCount: 365,
          sections: [
            "Unidad 1: Investigación Científica y Magnitudes Físicas (1–35)",
            "Unidad 2: Estructura de la Materia y Cambios Químicos (36–80)",
            "Unidad 3: Sistemas de Coordinación del Cuerpo Humano (81–135)",
            "Unidad 4: Reproducción y Genética en los Seres Vivos (136–180)",
            "Unidad 5: Dinámica de los Ecosistemas y Ciclos Biogeoquímicos (181–235)",
            "Unidad 6: Electricidad, Magnetismo y Circuitos (236–285)",
            "Unidad 7: Fenómenos Geológicos y Gestión de Riesgos (286–365)"
          ]
        }
      ]
    },
    {
      id: "asd_7",
      number: 3,
      name: "Séptimo Grado (7.° Grado)",
      codeRange: "7.1 y 7.2",
      description: "Preparación académica de 7.° Grado en Matemática (ESMATE) y Ciencias Naturales (Ciencia y Tecnología).",
      totalSubtopics: 2,
      totalQuestions: 730,
      color: "from-purple-600 to-pink-700",
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-800",
      borderColor: "border-purple-200",
      icon: "Award",
      institution: "ASD",
      subtopics: [
        {
          id: "7_matematica",
          code: "7.1",
          title: "Matemática (7.° Grado)",
          subjectId: "asd_7",
          questionCount: 365,
          sections: [
            "Unidad 1: Números Positivos, Negativos y el Cero (1–35)",
            "Unidad 2: Operaciones con Números con Signo (36–80)",
            "Unidad 3: Ecuaciones de Primer Grado con una Incógnita (81–135)",
            "Unidad 4: Expresiones Algebraicas y Términos Semejantes (136–180)",
            "Unidad 5: Proporcionalidad Directa e Inversa con Gráficas (181–225)",
            "Unidad 6: Geometría Plana y Construcciones (226–270)",
            "Unidad 7: Perímetro, Área y Cuerpos Geométricos (271–320)",
            "Unidad 8: Estadística Descriptiva y Probabilidad (321–365)"
          ]
        },
        {
          id: "7_ciencias",
          code: "7.2",
          title: "Ciencias Naturales (7.° Grado)",
          subjectId: "asd_7",
          questionCount: 365,
          sections: [
            "Unidad 1: Naturaleza de la Ciencia y Trabajo Experimental (1–35)",
            "Unidad 2: Estructura Atómica y Tabla Periódica (36–90)",
            "Unidad 3: Enlaces Químicos y Reacciones (91–135)",
            "Unidad 4: Biología Celular y Genética Mendeliana (136–190)",
            "Unidad 5: Fisiología Humana e Inmunología (191–235)",
            "Unidad 6: Cinemática y Leyes del Movimiento de Newton (236–285)",
            "Unidad 7: Ecología, Recursos Hídricos y Cambio Climático (286–330)",
            "Unidad 8: Astronomía y Geología Terrestre (331–365)"
          ]
        }
      ]
    }
  ]
};

fs.writeFileSync(path.join(ASD_DIR, 'curriculum.json'), JSON.stringify(asdCurriculum, null, 2), 'utf-8');
console.log('Currículo ASD guardado en public/data/asd/curriculum.json');
