import React from 'react';
import { BookOpen, GraduationCap, Award, Shield, Sprout, ArrowUpRight } from 'lucide-react';
import { Institution } from '../../data';

interface CourseItem {
  id: string;
  title: string;
  institution: Institution;
  questionCount: number;
  badge: string;
  description: string;
  icon: React.ReactNode;
}

interface Courses3DSectionProps {
  onEnroll: (institution: Institution) => void;
}

export const Courses3DSection: React.FC<Courses3DSectionProps> = ({ onEnroll }) => {
  const COURSES: CourseItem[] = [
    {
      id: 'ues',
      title: 'Admisión Universitaria UES',
      institution: 'UES',
      questionCount: 7500,
      badge: 'Fase I & II • Medicina e Ingenierías',
      description:
        'Preparación integral en Matemática, Física, Química, Biología, Ciencias Sociales y Lenguaje con banco verificado y justificaciones KaTeX.',
      icon: <GraduationCap className="w-5 h-5 text-white" />,
    },
    {
      id: 'escalafon',
      title: 'Escalafón Docente Nivel 1',
      institution: 'ESCALAFON',
      questionCount: 3300,
      badge: 'MINED 2026 • Tribunal Calificador',
      description:
        'Prueba de ascenso magisterial con los 11 componentes normativos: Ley Carrera Docente, Ley Crecer Juntos, Didáctica y 10 especialidades de aula.',
      icon: <Award className="w-5 h-5 text-white" />,
    },
    {
      id: 'avanzo',
      title: 'Prueba Nacional AVANZO',
      institution: 'AVANZO',
      questionCount: 3000,
      badge: 'Bachillerato Nacional 2025',
      description:
        'Dominio de las 5 áreas clave del MINED: Precálculo, Ciudadanía y Valores, Ciencia y Tecnología, Lengua y Literatura e Idioma Inglés.',
      icon: <BookOpen className="w-5 h-5 text-white" />,
    },
    {
      id: 'asd',
      title: 'ASD Jóvenes Talento',
      institution: 'ASD',
      questionCount: 2190,
      badge: '5.°, 6.° y 7.° Grado',
      description:
        'Academia Sabatina Departamental para olimpiadas académicas en Matemática y Ciencias Naturales con metodología avanzada y resolución guiada.',
      icon: <Award className="w-5 h-5 text-white" />,
    },
    {
      id: 'ena',
      title: 'Admisión ENA Agrícola',
      institution: 'ENA',
      questionCount: 1400,
      badge: 'Técnico Agropecuario 2027',
      description:
        'Admisión a la Escuela Nacional de Agricultura Roberto Quiñónez en Matemáticas Agrarias, Química General, Biología Aplicada y Lenguaje Técnico.',
      icon: <Sprout className="w-5 h-5 text-white" />,
    },
    {
      id: 'ansp',
      title: 'Academia Nacional ANSP',
      institution: 'ANSP',
      questionCount: 250,
      badge: 'Prueba Cultural Nivel Básico PNC',
      description:
        'Reactivos oficiales en Constitución de la República, Derechos Humanos, Ley Orgánica de la PNC, Geografía y Realidad Nacional Salvadoreña.',
      icon: <Shield className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-caslon tracking-micro uppercase mb-2 sm:mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Catálogo Formativo KUSKAT
          </div>
          <h2 className="font-montenegrin text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wide">
            Cursos y Convocatorias Destacadas
          </h2>
          <p className="font-caslon text-sm sm:text-lg text-slate-600 tracking-editorial mt-2 sm:mt-3 px-2">
            Especialización pedagógica de alto rendimiento con bancos de preguntas verificados y progresión en tres niveles de aprendizaje.
          </p>
        </div>

        {/* Cuadrícula de Tarjetas 3D con elevación al hover en paleta limpia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 perspective-1000">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden transform-style-3d transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl shadow-xs flex flex-col justify-between"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Encabezado con degradado azul/índigo y título en Montenegrin Gothic One */}
              <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 p-5 text-white relative">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20">
                    {course.icon}
                  </div>
                  <span className="font-caslon text-xs font-semibold text-white tracking-micro uppercase bg-black/20 px-2.5 py-1 rounded-full border border-white/20">
                    {course.questionCount.toLocaleString()} Reactivos
                  </span>
                </div>

                <h3 className="font-montenegrin text-xl sm:text-2xl text-white tracking-wide mt-1 line-clamp-1">
                  {course.title}
                </h3>
                <span className="font-caslon text-xs text-blue-100 tracking-editorial mt-0.5 block">
                  {course.badge}
                </span>
              </div>

              {/* Cuerpo de la tarjeta con descripción */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="font-caslon text-sm text-slate-600 font-normal leading-relaxed tracking-editorial">
                  {course.description}
                </p>
              </div>

              {/* Botón "Inscribirse" en azul institucional */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onEnroll(course.institution)}
                  className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-caslon text-sm font-bold tracking-micro uppercase transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01]"
                >
                  <span>Inscribirse al Simulador</span>
                  <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
