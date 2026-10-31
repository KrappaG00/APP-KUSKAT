/**
 * SUITE DE AUDITORÍA Y CUMPLIMIENTO DEL REQUISITO R4:
 * Verificación programática exhaustiva de calidad curricular oficial ESMATE-MINED.
 *
 * Valida:
 * 1. Existencia exacta de 97 unidades curriculares oficiales MINED (1° Grado a 2° Bachillerato).
 * 2. Cada lección cumple estrictamente con >= 500 palabras de contenido sustantivo conceptual real,
 *    excluyendo código LaTeX ($$...$$, $...$), comandos (\frac, \text, etc.), metadatos, títulos repetidos
 *    y párrafos duplicados.
 * 3. Cada lección cuenta con al menos 5 ejemplos resueltos paso a paso, concretos, distintos entre sí
 *    y con profundidad procedimental (>= 25 palabras por ejemplo).
 * 4. Cero frases genéricas, plantillas parametrizadas o párrafos de relleno en todo el currículo.
 * 5. Verificación adversarial y de integridad del algoritmo de conteo sustantivo.
 */

import { describe, it, expect } from 'vitest';
import { curriculumService } from '../src/data/minedCurriculum/curriculumService';
import type { PscerLesson, GradeLevelId } from '../src/data/minedCurriculum/types';

/**
 * Patrones de relleno y plantillas sintéticas identificadas en versiones preliminares
 * que deben ser detectadas y eliminadas según el Requisito R1 y R4.
 */
export const KNOWN_BOILERPLATE_PATTERNS: RegExp[] = [
  /Contexto pedagógico y análisis heurístico del problema inicial[\s\S]*?nuevo concepto en estudio\./gi,
  /Desarrollo metodológico detallado paso a paso[\s\S]*?cuaderno de ejercicios ESMATE\./gi,
  /Síntesis formal y orientaciones didácticas de dominio[\s\S]*?programa oficial de matemática de El Salvador\./gi,
  /Ejemplo \d \(Aplicación directa del modelo ESMATE[\s\S]*?libro de texto\./gi,
  /Ejemplo \d \(Resolución analítica guiada[\s\S]*?dominio procedimental del tema\./gi,
  /Ejemplo \d \(Modelado contextualizado en un centro escolar[\s\S]*?cuaderno de trabajo\./gi,
  /Ejemplo \d \(Diagnóstico de errores frecuentes[\s\S]*?igualdad de partida\./gi,
  /Ejemplo \d \(Caso integrador de evaluación sumativa[\s\S]*?contexto educativo salvadoreño\./gi,
  /En un proyecto académico desarrollado en[\s\S]*?cuaderno de trabajo\./gi,
  /En un proyecto académico desarrollado en/gi,
  /centro escolar de (San Salvador|Santa Ana|San Miguel|Sonsonate|Ahuachapán|Chalatenango|La Libertad|Usulután|Cuscatlán|La Paz|Cabañas|San Vicente|Morazán|La Unión)[\s\S]*?cuaderno de trabajo/gi,
];

/**
 * Algoritmo canónico de conteo de palabras sustantivas (explorer_test_invariants/handoff.md § 3.2):
 * Normaliza texto, extrae delimitadores KaTeX, comandos LaTeX, títulos repetidos,
 * detecta plantillas de relleno y deduplica párrafos idénticos.
 */
export function countSubstantiveLessonWords(
  lesson: PscerLesson,
  unitTitle: string,
  gradeName: string
): {
  substantiveWordCount: number;
  filteredText: string;
  detectedFillers: string[];
} {
  // 1. Recopilar prosa de la lección sin campos duplicados
  const proseSegments: string[] = [
    lesson.problema || '',
    lesson.solucion || '',
    lesson.conclusion || '',
    ...(lesson.examples || []),
    ...(lesson.resuelve || []).map((r) => `${r.exercise} ${r.hint || ''} ${r.answer || ''}`),
  ];

  let rawText = proseSegments.join('\n\n');

  // 2. Eliminar bloques de fórmulas matemáticas LaTeX ($$...$$ y $...$)
  rawText = rawText.replace(/\$\$[\s\S]*?\$\$/g, ' ');
  rawText = rawText.replace(/\$[^$]*\$/g, ' ');

  // 3. Eliminar palabras de control y comandos LaTeX (\frac, \sqrt, \dots, \text, etc.)
  rawText = rawText.replace(/\\[a-zA-Z]+/g, ' ');

  // 4. Eliminar títulos repetidos y metadatos (a partir de la 2ª ocurrencia para no inflar conteos)
  const titlesToStrip = [lesson.title, unitTitle, gradeName, lesson.lessonNumber, lesson.id];
  for (const t of titlesToStrip) {
    if (t && t.length > 2) {
      const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      let occurrences = 0;
      rawText = rawText.replace(new RegExp(escaped, 'gi'), (match) => {
        occurrences++;
        return occurrences === 1 ? match : ' ';
      });
    }
  }

  // 5. Detectar y eliminar párrafos de plantilla sintética / boilerplate
  const detectedFillers: string[] = [];
  for (const pattern of KNOWN_BOILERPLATE_PATTERNS) {
    const matches = rawText.match(pattern);
    if (matches) {
      detectedFillers.push(...matches);
      rawText = rawText.replace(pattern, ' ');
    }
  }

  // 6. Deduplicar párrafos idénticos dentro de la misma lección para evitar inflado
  const paragraphs = rawText
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  const seenParagraphs = new Set<string>();
  const uniqueParagraphs: string[] = [];
  for (const p of paragraphs) {
    const norm = p.toLowerCase().replace(/\s+/g, ' ');
    if (!seenParagraphs.has(norm)) {
      seenParagraphs.add(norm);
      uniqueParagraphs.push(p);
    }
  }

  // 7. Eliminar puntuación, símbolos de control y delimitadores no léxicos
  const cleanedText = uniqueParagraphs
    .join(' ')
    .replace(/[{}()[\]=+*/^_<>|•:;,.!?'"`\-\\]/g, ' ')
    .trim();

  // 8. Contar palabras genuinas no vacías
  const words = cleanedText.split(/\s+/).filter((w) => w.length > 0);

  return {
    substantiveWordCount: words.length,
    filteredText: cleanedText,
    detectedFillers,
  };
}

describe('REQUISITO R4: Verificación Automatizada de Calidad Curricular ESMATE-MINED', () => {
  const allUnits = curriculumService.getAllUnits();

  // -------------------------------------------------------------------------
  // 1. INVARIANTE ESTRUCTURAL: 97 UNIDADES OFICIALES
  // -------------------------------------------------------------------------
  describe('1. Verificación de Malla Curricular Oficial de 97 Unidades', () => {
    it('curriculumService.getAllUnits() retorna exactamente 97 unidades oficiales', () => {
      expect(allUnits).toBeDefined();
      expect(allUnits.length).toBe(97);
    });

    it('distribución oficial exacta por grado escolar (1° Grado a 2° Bachillerato)', () => {
      const EXPECTED_GRADE_DISTRIBUTION: Record<GradeLevelId, { expectedUnits: number; label: string }> = {
        '1-grado': { expectedUnits: 8, label: '1° Grado' },
        '2-grado': { expectedUnits: 9, label: '2° Grado' },
        '3-grado': { expectedUnits: 10, label: '3° Grado' },
        '4-grado': { expectedUnits: 9, label: '4° Grado' },
        '5-grado': { expectedUnits: 10, label: '5° Grado' },
        '6-grado': { expectedUnits: 11, label: '6° Grado' },
        '7-grado': { expectedUnits: 8, label: '7° Grado' },
        '8-grado': { expectedUnits: 8, label: '8° Grado' },
        '9-grado': { expectedUnits: 8, label: '9° Grado' },
        '1-bachillerato': { expectedUnits: 8, label: '1° Bachillerato' },
        '2-bachillerato': { expectedUnits: 8, label: '2° Bachillerato' },
      };

      const actualUnitsPerGrade: Record<string, number> = {};
      for (const { gradeId } of allUnits) {
        actualUnitsPerGrade[gradeId] = (actualUnitsPerGrade[gradeId] || 0) + 1;
      }

      let grandTotal = 0;
      for (const [gradeId, info] of Object.entries(EXPECTED_GRADE_DISTRIBUTION)) {
        const actual = actualUnitsPerGrade[gradeId] || 0;
        expect(actual, `${info.label} (${gradeId}) debe tener exactamente ${info.expectedUnits} unidades`).toBe(
          info.expectedUnits
        );
        grandTotal += actual;
      }

      expect(grandTotal).toBe(97);
    });

    it('todas las 97 unidades contienen lecciones P-S-C-E-R estructuradas', () => {
      for (const { unit, gradeName } of allUnits) {
        expect(
          unit.lessons.length,
          `La unidad ${unit.id} en ${gradeName} debe contener al menos 1 lección`
        ).toBeGreaterThanOrEqual(1);

        for (const lesson of unit.lessons) {
          expect(lesson.id).toBeTruthy();
          expect(lesson.title).toBeTruthy();
          expect(lesson.problema).toBeTruthy();
          expect(lesson.solucion).toBeTruthy();
          expect(lesson.conclusion).toBeTruthy();
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 2. CONTEO SUSTANTIVO: >= 500 PALABRAS POR LECCIÓN
  // -------------------------------------------------------------------------
  describe('2. Verificación de >= 500 Palabras Sustantivas por Lección', () => {
    it('cada lección en las 97 unidades cumple estrictamente >= 500 palabras conceptuales', () => {
      const failures: string[] = [];
      let totalLessonsAudited = 0;

      for (const { gradeName, unit } of allUnits) {
        for (const lesson of unit.lessons) {
          totalLessonsAudited++;
          const { substantiveWordCount, detectedFillers } = countSubstantiveLessonWords(
            lesson,
            unit.title,
            gradeName
          );

          if (detectedFillers.length > 0) {
            failures.push(
              `[RELLENO EN ${lesson.id}]: Se detectaron ${detectedFillers.length} patrones de relleno en ${lesson.title}`
            );
          }

          if (substantiveWordCount < 500) {
            failures.push(
              `[PALABRAS INSUFICIENTES EN ${lesson.id} (${unit.id} - ${gradeName})]: tiene ${substantiveWordCount} palabras sustantivas (requiere >= 500)`
            );
          }
        }
      }

      expect(totalLessonsAudited).toBeGreaterThanOrEqual(97);
      expect(failures, `Fallas de contenido sustantivo encontradas:\n${failures.join('\n')}`).toEqual([]);
    });

    it('proporciones pedagógicas sustantivas en Problema, Solución y Conclusión', () => {
      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const probTokens = lesson.problema.split(/\s+/).filter(Boolean).length;
          const solTokens = lesson.solucion.split(/\s+/).filter(Boolean).length;
          const concTokens = lesson.conclusion.split(/\s+/).filter(Boolean).length;

          expect(
            probTokens,
            `Problema de ${lesson.id} debe ser una situación contextualizada (>= 40 palabras)`
          ).toBeGreaterThanOrEqual(40);

          expect(
            solTokens,
            `Solución de ${lesson.id} debe ser un desarrollo analítico paso a paso (>= 80 palabras)`
          ).toBeGreaterThanOrEqual(80);

          expect(
            concTokens,
            `Conclusión de ${lesson.id} debe formalizar conceptos/teoremas (>= 40 palabras)`
          ).toBeGreaterThanOrEqual(40);
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. EJEMPLOS RESUELTOS: >= 5 EJEMPLOS DISTINTOS Y PROCEDIMENTALES
  // -------------------------------------------------------------------------
  describe('3. Verificación de >= 5 Ejemplos Distintos y Paso a Paso por Lección', () => {
    it('cada lección contiene al menos 5 ejemplos resueltos paso a paso y no vacíos', () => {
      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          expect(
            Array.isArray(lesson.examples),
            `Lección ${lesson.id} debe definir el arreglo examples`
          ).toBe(true);

          expect(
            lesson.examples!.length,
            `Lección ${lesson.id} (${lesson.title}) debe contener al menos 5 ejemplos resueltos`
          ).toBeGreaterThanOrEqual(5);
        }
      }
    });

    it('todos los ejemplos dentro de una lección son mutuamente distintos (sin copias ni duplicados)', () => {
      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          const normalizedExamples = lesson.examples!.map((ex) =>
            ex.trim().toLowerCase().replace(/\s+/g, ' ')
          );
          const uniqueSet = new Set(normalizedExamples);

          expect(
            uniqueSet.size,
            `Lección ${lesson.id} contiene ejemplos duplicados (${uniqueSet.size} únicos de ${lesson.examples!.length})`
          ).toBe(lesson.examples!.length);
        }
      }
    });

    it('cada ejemplo individual posee profundidad procedimental (>= 25 palabras)', () => {
      const shortExamples: string[] = [];

      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          lesson.examples!.forEach((ex, idx) => {
            const words = ex.trim().split(/\s+/).filter((w) => w.length > 1);
            if (words.length < 25) {
              shortExamples.push(
                `Lección ${lesson.id} Ejemplo ${idx + 1}: solo ${words.length} palabras ("${ex.slice(0, 60)}...")`
              );
            }
          });
        }
      }

      expect(shortExamples, `Ejemplos con profundidad insuficiente:\n${shortExamples.join('\n')}`).toEqual([]);
    });

    it('cada ejemplo demuestra estructura analítica y secuencial paso a paso', () => {
      for (const { unit } of allUnits) {
        for (const lesson of unit.lessons) {
          lesson.examples!.forEach((ex, idx) => {
            const hasStepIndicators =
              /Paso 1|Paso 2|Solución|Procedimiento|Sustituyendo|Calculando|Despejando/i.test(ex);
            expect(
              hasStepIndicators,
              `Lección ${lesson.id} Ejemplo ${idx + 1} debe contener indicadores de resolución procedimental`
            ).toBe(true);
          });
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. AUSENCIA TOTAL DE BOILERPLATE Y RELLENO
  // -------------------------------------------------------------------------
  describe('4. Verificación de Cero Frases de Relleno o Plantillas Sintéticas', () => {
    it('cero patrones de plantillas sintéticas de departamentos o gradeHelpers en ninguna lección', () => {
      const violations: string[] = [];

      for (const { unit, gradeName } of allUnits) {
        for (const lesson of unit.lessons) {
          const { detectedFillers } = countSubstantiveLessonWords(lesson, unit.title, gradeName);
          if (detectedFillers.length > 0) {
            violations.push(`${lesson.id} (${lesson.title}): ${detectedFillers.join(' | ')}`);
          }

          // Verificación directa de frases específicas
          const fullProse = [
            lesson.problema,
            lesson.solucion,
            lesson.conclusion,
            ...(lesson.examples || []),
          ].join(' ');

          if (fullProse.includes('En un proyecto académico desarrollado en')) {
            violations.push(`${lesson.id}: contiene plantilla de proyecto académico`);
          }
          if (fullProse.includes('Contexto pedagógico y análisis heurístico del problema inicial')) {
            violations.push(`${lesson.id}: contiene plantilla de contexto pedagógico`);
          }
          if (fullProse.includes('Desarrollo metodológico detallado paso a paso:')) {
            violations.push(`${lesson.id}: contiene plantilla de desarrollo metodológico`);
          }
        }
      }

      expect(violations, `Violaciones de relleno detectadas:\n${violations.join('\n')}`).toEqual([]);
    });
  });

  // -------------------------------------------------------------------------
  // 5. PRUEBAS ADVERSARIALES Y DE ROBUSTEZ DEL ALGORITMO
  // -------------------------------------------------------------------------
  describe('5. Pruebas Adversariales y de Integridad del Algoritmo de Conteo', () => {
    it('una lección vacía produce exactamente 0 palabras sustantivas', () => {
      const emptyLesson: PscerLesson = {
        id: 'test-empty',
        lessonNumber: '1.1',
        title: 'Lección vacía',
        problema: '',
        solucion: '',
        conclusion: '',
        resuelve: [],
        examples: [],
      };
      const res = countSubstantiveLessonWords(emptyLesson, 'Unidad de Prueba', '1° Grado');
      expect(res.substantiveWordCount).toBe(0);
      expect(res.detectedFillers).toEqual([]);
    });

    it('bloques y fórmulas KaTeX ($$...$$ y $...$) no son contados como palabras sustantivas', () => {
      const mathOnlyLesson: PscerLesson = {
        id: 'test-math',
        lessonNumber: '1.1',
        title: 'Solo fórmulas',
        problema: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$ $$\\int_0^1 x^2 dx$$',
        solucion: '$\\alpha + \\beta = \\gamma$ $\\sum_{i=1}^n i = \\frac{n(n+1)}{2}$',
        conclusion: '$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$',
        resuelve: [],
        examples: [],
      };
      const res = countSubstantiveLessonWords(mathOnlyLesson, 'Fórmulas Puras', 'Bachillerato');
      expect(res.substantiveWordCount).toBe(0);
    });

    it('comandos LaTeX aislados sin delimitadores son eliminados correctamente', () => {
      const latexCommandsLesson: PscerLesson = {
        id: 'test-latex',
        lessonNumber: '1.1',
        title: 'Comandos LaTeX',
        problema: '\\frac \\sqrt \\sum \\int \\prod \\text \\alpha \\beta \\gamma',
        solucion: '\\mathbf \\mathit \\quad \\qquad \\phantom',
        conclusion: '\\begin \\end \\left \\right',
        resuelve: [],
        examples: [],
      };
      const res = countSubstantiveLessonWords(latexCommandsLesson, 'Prueba LaTeX', 'Grado');
      expect(res.substantiveWordCount).toBe(0);
    });

    it('párrafos idénticos duplicados son deduplicados y no inflan el conteo', () => {
      const baseParagraph =
        'Este es un párrafo sustantivo con contenido pedagógico auténtico sobre conceptos matemáticos relevantes.';
      const lessonWithDuplicateParagraphs: PscerLesson = {
        id: 'test-dup-paragraphs',
        lessonNumber: '1.1',
        title: 'Prueba Duplicados',
        problema: `${baseParagraph}\n\n${baseParagraph}\n\n${baseParagraph}`,
        solucion: `${baseParagraph}\n\n${baseParagraph}`,
        conclusion: baseParagraph,
        resuelve: [],
        examples: [],
      };

      const res = countSubstantiveLessonWords(
        lessonWithDuplicateParagraphs,
        'Unidad Duplicados',
        'Grado'
      );

      const singleCount = countSubstantiveLessonWords(
        {
          id: 'test-single',
          lessonNumber: '1.1',
          title: 'Prueba Duplicados',
          problema: baseParagraph,
          solucion: '',
          conclusion: '',
          resuelve: [],
          examples: [],
        },
        'Unidad Duplicados',
        'Grado'
      );

      // El conteo con párrafos repetidos 6 veces debe ser idéntico al del párrafo único
      expect(res.substantiveWordCount).toBe(singleCount.substantiveWordCount);
    });

    it('detecta y reporta correctamente patrones conocidos de plantillas genéricas', () => {
      const adversarialFillerLesson: PscerLesson = {
        id: 'test-adversarial-filler',
        lessonNumber: '1.1',
        title: 'Lección Adversarial con Relleno',
        problema:
          'Contexto pedagógico y análisis heurístico del problema inicial (Clase 1.1): En esta primera etapa fundamental de la secuencia didáctica oficial del Ministerio de Educación de El Salvador (MINED)... nuevo concepto en estudio.',
        solucion:
          'Desarrollo metodológico detallado paso a paso: En primer lugar, estructuramos la información extraída del problema inicial... cuaderno de ejercicios ESMATE.',
        conclusion:
          'Síntesis formal y orientaciones didácticas de dominio: Esta conclusión constituye el pilar teórico... programa oficial de matemática de El Salvador.',
        resuelve: [],
        examples: [
          'En un proyecto académico desarrollado en un centro escolar de San Salvador... cuaderno de trabajo.',
        ],
      };

      const res = countSubstantiveLessonWords(
        adversarialFillerLesson,
        'Unidad Relleno',
        '1° Grado'
      );

      expect(res.detectedFillers.length).toBeGreaterThanOrEqual(4);
    });

    it('preserva correctamente caracteres con tilde, diéresis y la letra eñe (á, é, í, ó, ú, ñ, ü)', () => {
      const spanishLesson: PscerLesson = {
        id: 'test-spanish',
        lessonNumber: '1.1',
        title: 'Ortografía en español',
        problema:
          'Árboles matemáticos, cálculo aritmético, función trigonométrica, número irracional, hipótesis geométrica.',
        solucion:
          'Año escolar, diseño pedagógico, lingüística aplicada, vergüenza, cigüeña, pingüino.',
        conclusion: 'Comprensión conceptual, síntesis analítica, resolución ordenada.',
        resuelve: [],
        examples: [],
      };

      const res = countSubstantiveLessonWords(spanishLesson, 'Ortografía', 'Grado');
      expect(res.substantiveWordCount).toBe(25);
      expect(res.filteredText).toContain('Árboles');
      expect(res.filteredText).toContain('trigonométrica');
      expect(res.filteredText).toContain('lingüística');
      expect(res.filteredText).toContain('Año');
    });

    it('detecta ejemplos inválidos con profundidad insuficiente (< 25 palabras)', () => {
      const shallowExamples = [
        'Paso 1: Sumar 2 + 2. Solución: 4.',
        'Paso 1: Multiplicar 3 por 5. Solución: 15.',
        'Paso 1: Restar 10 menos 3. Solución: 7.',
        'Paso 1: Dividir 20 entre 4. Solución: 5.',
        'Paso 1: Elevar al cuadrado. Solución: 9.',
      ];

      const shallowCounts = shallowExamples.map(
        (ex) => ex.trim().split(/\s+/).filter((w) => w.length > 1).length
      );

      shallowCounts.forEach((c) => {
        expect(c).toBeLessThan(25);
      });
    });
  });
});
