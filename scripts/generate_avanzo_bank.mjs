import fs from 'node:fs';
import path from 'node:path';

const AVANZO_DIR = path.join(process.cwd(), 'public', 'data', 'avanzo');
const QUESTIONS_DIR = path.join(AVANZO_DIR, 'questions');

fs.mkdirSync(QUESTIONS_DIR, { recursive: true });

// Malla curricular oficial de AVANZO 2025 (MINED El Salvador)
const avanzoCurriculum = {
  title: "Prueba Nacional AVANZO 2025 - Ministerio de Educación de El Salvador",
  description: "Banco oficial estandarizado de 3,000 preguntas de opción múltiple estructurado en las 5 áreas de evaluación para Segundo Año de Bachillerato (600 preguntas por sección).",
  totalQuestions: 3000,
  totalSubtopics: 5,
  subjects: [
    {
      id: "avanzo_precalculo",
      number: 1,
      name: "Precálculo",
      codeRange: "4.1.1 al 4.1.5",
      description: "Álgebra, funciones reales, geometría analítica, trigonometría y estadística descriptiva.",
      totalSubtopics: 1,
      totalQuestions: 600,
      color: "from-amber-600 to-orange-700",
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-800",
      borderColor: "border-amber-200",
      icon: "Calculator",
      institution: "AVANZO",
      subtopics: [
        {
          id: "avanzo_precalculo",
          code: "4.1",
          title: "Precálculo (Bachillerato)",
          subjectId: "avanzo_precalculo",
          questionCount: 600,
          sections: [
            "Bloque 1: Álgebra, Ecuaciones y Desigualdades (1–120)",
            "Bloque 2: Funciones Reales y Modelado Matemático (121–240)",
            "Bloque 3: Geometría Analítica y Cónicas (241–360)",
            "Bloque 4: Trigonometría e Identidades (361–480)",
            "Bloque 5: Estadística y Probabilidad (481–600)"
          ]
        }
      ]
    },
    {
      id: "avanzo_ciudadania",
      number: 2,
      name: "Ciudadanía y Valores",
      codeRange: "4.2.1 al 4.2.3",
      description: "Investigación social, desarrollo histórico de El Salvador, Constitución, derechos humanos y convivencia democrática.",
      totalSubtopics: 1,
      totalQuestions: 600,
      color: "from-rose-600 to-pink-700",
      badgeBg: "bg-rose-100",
      badgeText: "text-rose-800",
      borderColor: "border-rose-200",
      icon: "Landmark",
      institution: "AVANZO",
      subtopics: [
        {
          id: "avanzo_ciudadania",
          code: "4.2",
          title: "Ciudadanía y Valores",
          subjectId: "avanzo_ciudadania",
          questionCount: 600,
          sections: [
            "Bloque 1: La Investigación en Ciencias Sociales (1–200)",
            "Bloque 2: Desarrollo Histórico, Social y Económico de El Salvador (201–400)",
            "Bloque 3: Sociedad, Democracia, Estado de Derecho y Convivencia (401–600)"
          ]
        }
      ]
    },
    {
      id: "avanzo_ciencias",
      number: 3,
      name: "Ciencia y Tecnología",
      codeRange: "4.3.1 al 4.3.3",
      description: "Física (mecánica, termodinámica y ondas), Química (enlaces, estequiometría y carbono) y Biología (célula, genética y medio ambiente).",
      totalSubtopics: 1,
      totalQuestions: 600,
      color: "from-teal-600 to-cyan-700",
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-800",
      borderColor: "border-teal-200",
      icon: "Atom",
      institution: "AVANZO",
      subtopics: [
        {
          id: "avanzo_ciencias",
          code: "4.3",
          title: "Ciencia y Tecnología",
          subjectId: "avanzo_ciencias",
          questionCount: 600,
          sections: [
            "Bloque 1: Física y Leyes del Movimiento (1–200)",
            "Bloque 2: Química y Transformaciones de la Materia (201–400)",
            "Bloque 3: Biología, Genética y Medio Ambiente (401–600)"
          ]
        }
      ]
    },
    {
      id: "avanzo_lengua",
      number: 4,
      name: "Lengua y Literatura",
      codeRange: "4.4.1 al 4.4.4",
      description: "Texto narrativo, poético, argumentativo, expositivo, literatura salvadoreña y normativa lingüística.",
      totalSubtopics: 1,
      totalQuestions: 600,
      color: "from-violet-600 to-purple-700",
      badgeBg: "bg-violet-100",
      badgeText: "text-violet-800",
      borderColor: "border-violet-200",
      icon: "BookOpen",
      institution: "AVANZO",
      subtopics: [
        {
          id: "avanzo_lengua",
          code: "4.4",
          title: "Lengua y Literatura",
          subjectId: "avanzo_lengua",
          questionCount: 600,
          sections: [
            "Bloque 1: Texto Narrativo y Literatura Salvadoreña (1–150)",
            "Bloque 2: Texto Poético y Recursos Estilísticos (151–300)",
            "Bloque 3: Texto Argumentativo y Ensayístico (301–450)",
            "Bloque 4: Texto Expositivo, Cohesión y Normativa Lingüística (451–600)"
          ]
        }
      ]
    },
    {
      id: "avanzo_ingles",
      number: 5,
      name: "Inglés",
      codeRange: "4.5.1 al 4.5.3",
      description: "Comprensión lectora, gramática, vocabulario y lenguaje funcional según el Marco Común Europeo (Pre-A1 a B1).",
      totalSubtopics: 1,
      totalQuestions: 600,
      color: "from-sky-600 to-blue-700",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-800",
      borderColor: "border-sky-200",
      icon: "Globe",
      institution: "AVANZO",
      subtopics: [
        {
          id: "avanzo_ingles",
          code: "4.5",
          title: "Inglés (Marco MCER)",
          subjectId: "avanzo_ingles",
          questionCount: 600,
          sections: [
            "Bloque 1: Reading Comprehension & Everyday Texts (1–200)",
            "Bloque 2: Grammar & Sentence Structure (201–400)",
            "Bloque 3: Functional Language & Daily Communication (401–600)"
          ]
        }
      ]
    }
  ]
};

const curPath = path.join(AVANZO_DIR, 'curriculum.json');
fs.writeFileSync(curPath, JSON.stringify(avanzoCurriculum, null, 2), 'utf-8');
console.log(`✓ Currículo AVANZO 2025 generado exitosamente en ${curPath}`);
console.log(`  Total materias: ${avanzoCurriculum.subjects.length}`);
console.log(`  Total reactivos declarados: ${avanzoCurriculum.totalQuestions}`);
