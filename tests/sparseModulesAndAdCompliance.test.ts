/**
 * AUTOMATED COMPLIANCE & PLATFORM INTEGRITY TEST SUITE (Milestone M5)
 *
 * Rigorous programmatic verification of:
 * - Suite A: Licencia de Conducir VMT & Seguridad Vial (R1 & R4)
 * - Suite B: Historia Patria, Civismo y Cultura Cuscatleca (R2 & R4)
 * - Suite C: Escuela de Idiomas - Low-Resource & Indigenous Languages (R3 & R4)
 * - Suite D: Google AdSense Policy Compliance & Content Guards (R5)
 *
 * Verifies substantive word counts (>= 500 words per unit/topic without boilerplate),
 * distinct concrete solved cases (>= 5 per unit), authentic lexicons, and ad suppression guards.
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Suite A imports: Licencia de Conducir VMT
import {
  DRIVER_CURRICULUM_UNITS,
  DRIVER_QUESTIONS,
  OFFICIAL_ROAD_SIGNS,
  getAllPracticalTrafficCases,
  getDriverUnitById,
  generateOfficialVmtExam,
  filterRoadSignsByCategory,
} from '../src/data/driverLicense';

// Suite B imports: Historia Patria, Civismo y Cultura
import {
  PATRIOTIC_THEMATIC_UNITS,
  ALL_PATRIOTIC_CASE_STUDIES,
  PATRIOTIC_QUESTIONS,
  PATRIOTIC_SYMBOLS,
  HISTORICAL_PRESIDENTS,
} from '../src/data/patrioticHistory';

// Suite C imports: Escuela de Idiomas
import { NAHUAT_VOCABULARY_CORPUS } from '../src/data/languages/nahuatVocabularyData';
import { LENCA_VOCABULARY_CORPUS } from '../src/data/languages/lencaVocabularyData';
import { KAKAWIRA_VOCABULARY_CORPUS } from '../src/data/languages/kakawiraVocabularyData';
import { MANDARIN_VOCABULARY_CORPUS } from '../src/data/languages/mandarinVocabularyData';
import { ARABIC_VOCABULARY_CORPUS } from '../src/data/languages/arabicVocabularyData';
import { NAHUAT_COMMUNICATIVE_UNITS } from '../src/data/languages/nahuatCommunicativeData';
import { LENCA_COMMUNICATIVE_UNITS } from '../src/data/languages/lencaCommunicativeData';
import { KAKAWIRA_COMMUNICATIVE_UNITS } from '../src/data/languages/kakawiraCommunicativeData';
import { MANDARIN_COMMUNICATIVE_UNITS } from '../src/data/languages/mandarinCommunicativeData';
import { ARABIC_COMMUNICATIVE_UNITS } from '../src/data/languages/arabicCommunicativeData';

// Suite D imports: Google AdSense Components & Guards
import { AdBanner, countSubstantiveWords as adBannerCountWords } from '../src/components/AdBanner';
import { LateralAdRails } from '../src/components/LateralAdRails';

/**
 * Strict Substantive Word Counter:
 * Removes markdown headings (#, ##, ###), code blocks, inline code,
 * LaTeX / KaTeX formulas and commands, repeated titles, and punctuation delimiters.
 * Ensures genuine lexical tokens are counted without artificial inflation.
 */
export function countSubstantiveWordsStrict(rawText: string, titlesToStrip: string[] = []): number {
  if (!rawText || typeof rawText !== 'string') return 0;
  let text = rawText;

  // 1. Strip markdown headings (e.g. #, ##, ###, ####)
  text = text.replace(/^#{1,6}\s+.*$/gm, ' ');

  // 2. Strip code blocks and inline code
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/`[^`]*`/g, ' ');

  // 3. Strip KaTeX/LaTeX ($$...$$, $...$, \frac, etc.)
  text = text.replace(/\$\$[\s\S]*?\$\$/g, ' ');
  text = text.replace(/\$[^$]*\$/g, ' ');
  text = text.replace(/\\[a-zA-Z]+/g, ' ');

  // 4. Strip markdown formatting (*, **, _, __, ~~, etc.)
  text = text.replace(/[*_~[\]()]/g, ' ');

  // 5. Strip repeated titles (beyond first occurrence) to prevent inflation
  for (const t of titlesToStrip) {
    if (t && t.length > 3) {
      const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      let occurrences = 0;
      text = text.replace(new RegExp(escaped, 'gi'), (match) => {
        occurrences++;
        return occurrences === 1 ? match : ' ';
      });
    }
  }

  // 6. Deduplicate identical paragraphs to prevent looping repetitions
  const paragraphs = text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  const seen = new Set<string>();
  const uniqueParagraphs: string[] = [];
  for (const p of paragraphs) {
    const norm = p.toLowerCase().replace(/\s+/g, ' ');
    if (!seen.has(norm)) {
      seen.add(norm);
      uniqueParagraphs.push(p);
    }
  }

  // 7. Strip punctuation, control symbols, and delimiters
  const cleanedText = uniqueParagraphs
    .join(' ')
    .replace(/[{}()[\]=+*/^_<>|•:;,.!?'"`\-\\\/]/g, ' ')
    .trim();

  // 8. Count genuine lexical tokens
  const words = cleanedText.split(/\s+/).filter((w) => w.length > 0);
  return words.length;
}

describe('M5 Automated Compliance & Platform Integrity Test Suite', () => {
  const rootDir = process.cwd();

  // =========================================================================
  // SUITE A: LICENCIA DE CONDUCIR VMT & SEGURIDAD VIAL (R1 & R4)
  // =========================================================================
  describe('Suite A (R1 & R4): Licencia de Conducir VMT & Seguridad Vial', () => {
    it('contiene exactamente 8 unidades temáticas oficiales del Reglamento de Tránsito y VMT', () => {
      expect(DRIVER_CURRICULUM_UNITS).toBeDefined();
      expect(Array.isArray(DRIVER_CURRICULUM_UNITS)).toBe(true);
      expect(DRIVER_CURRICULUM_UNITS.length).toBe(8);

      const expectedUnitIds = [
        'u1-marco-legal',
        'u2-senalizacion-vial',
        'u3-preferencia-paso',
        'u4-velocidades-distancias',
        'u5-condiciones-adversas',
        'u6-seguridad-vehicular',
        'u7-alcoholemia-delito',
        'u8-accidentologia-fonat',
      ];

      const actualUnitIds = DRIVER_CURRICULUM_UNITS.map((u) => u.id);
      expect(actualUnitIds).toEqual(expectedUnitIds);

      // Cada unidad debe tener campos requeridos no vacíos
      DRIVER_CURRICULUM_UNITS.forEach((unit) => {
        expect(unit.title.trim().length).toBeGreaterThan(10);
        expect(unit.subtitle.trim().length).toBeGreaterThan(10);
        expect(unit.icon.trim().length).toBeGreaterThan(0);
        expect(Array.isArray(unit.practicalCases)).toBe(true);
      });
    });

    it('cada una de las 8 unidades contiene >= 500 palabras de teoría sustantiva sin boilerplate', () => {
      let totalSubstantiveWords = 0;
      const unitWordCounts: Record<string, number> = {};

      DRIVER_CURRICULUM_UNITS.forEach((unit) => {
        const substantiveCount = countSubstantiveWordsStrict(unit.substantiveTheory, [unit.title, unit.subtitle]);
        unitWordCounts[unit.id] = substantiveCount;
        totalSubstantiveWords += substantiveCount;

        expect(
          substantiveCount,
          `La unidad ${unit.id} (${unit.title}) debe tener >= 500 palabras sustantivas (obtenidas: ${substantiveCount})`
        ).toBeGreaterThanOrEqual(500);

        // Verificar que la teoría contiene referencias a legislación salvadoreña real
        const hasLegalCitations =
          /Ley de Transporte Terrestre|Reglamento General de Tránsito|Código Penal|Art|Decreto|FONAT|SIECA/i.test(
            unit.substantiveTheory
          );
        expect(
          hasLegalCitations,
          `La unidad ${unit.id} debe incluir citas jurídicas del marco salvadoreño`
        ).toBe(true);
      });

      // Total acumulado en las 8 unidades debe superar las 5,000 palabras
      expect(totalSubstantiveWords).toBeGreaterThanOrEqual(5000);
    });

    it('cada unidad contiene al menos 5 casos prácticos de tránsito resueltos (total >= 40 casos)', () => {
      const allCases = getAllPracticalTrafficCases();
      expect(allCases.length).toBeGreaterThanOrEqual(40);
      expect(allCases.length).toBe(40);

      const caseIds = new Set<string>();

      DRIVER_CURRICULUM_UNITS.forEach((unit) => {
        expect(
          unit.practicalCases.length,
          `La unidad ${unit.id} debe contener al menos 5 casos prácticos resueltos`
        ).toBeGreaterThanOrEqual(5);

        unit.practicalCases.forEach((trafficCase) => {
          // Unicidad de identificadores
          expect(caseIds.has(trafficCase.id), `ID de caso duplicado: ${trafficCase.id}`).toBe(false);
          caseIds.add(trafficCase.id);

          // Estructura de caso práctico obligatorio por R1 y R4
          expect(trafficCase.title.trim().length, `Título de ${trafficCase.id} demasiado corto`).toBeGreaterThanOrEqual(5);
          expect(
            trafficCase.scenario.trim().length,
            `Escenario de ${trafficCase.id} debe describir el hecho vial (>= 40 caracteres)`
          ).toBeGreaterThanOrEqual(40);
          expect(
            trafficCase.legalReference.trim().length,
            `Referencia legal de ${trafficCase.id} no puede estar vacía`
          ).toBeGreaterThanOrEqual(5);
          expect(
            trafficCase.analysis.trim().length,
            `Análisis técnico de ${trafficCase.id} debe ser sustantivo (>= 40 caracteres)`
          ).toBeGreaterThanOrEqual(40);
          expect(
            trafficCase.resolvedOutcome.trim().length,
            `Resolución legal de ${trafficCase.id} debe ser concreta (>= 20 caracteres)`
          ).toBeGreaterThanOrEqual(20);

          // Verificar que el escenario menciona contexto vial concreto de El Salvador
          const hasVialContext =
            /redondel|carril|velocidad|bulevar|intersección|autopista|peatón|vehículo|semáforo|curva|alcohol|frenado|vía|accidente/i.test(
              trafficCase.scenario + ' ' + trafficCase.analysis
            );
          expect(hasVialContext, `Caso ${trafficCase.id} debe contextualizarse en dinámica de tránsito`).toBe(true);
        });
      });
    });

    it('el banco de preguntas oficial de tránsito contiene >= 50 preguntas balanceadas con 4 opciones', () => {
      expect(DRIVER_QUESTIONS.length).toBeGreaterThanOrEqual(50);
      expect(DRIVER_QUESTIONS.length).toBe(56);

      const optionCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
      const uniqueIds = new Set<string>();

      DRIVER_QUESTIONS.forEach((q) => {
        // ID único
        expect(uniqueIds.has(q.id), `ID de pregunta duplicado: ${q.id}`).toBe(false);
        uniqueIds.add(q.id);

        // Enunciado sustantivo
        const statement = q.statement || q.question;
        expect(statement, `Pregunta ${q.id} debe tener enunciado no vacío`).toBeDefined();
        expect(statement.trim().length).toBeGreaterThanOrEqual(15);

        // Exactamente 4 opciones
        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length, `Pregunta ${q.id} debe tener exactamente 4 opciones`).toBe(4);
        q.options.forEach((opt, idx) => {
          expect(opt.trim().length, `Opción ${idx} de pregunta ${q.id} no puede estar vacía`).toBeGreaterThan(0);
        });

        // Índice de respuesta correcta válido (0..3)
        expect([0, 1, 2, 3]).toContain(q.correctAnswer);
        optionCounts[q.correctAnswer as 0 | 1 | 2 | 3]++;

        // Justificación pedagógica no vacía
        expect(q.explanation.trim().length).toBeGreaterThanOrEqual(15);

        // Categoría válida
        expect(['teorico', 'psicologico']).toContain(q.category);
      });

      // Balance en la distribución de respuestas correctas (ninguna opción > 40% ni < 15%)
      const totalQ = DRIVER_QUESTIONS.length;
      Object.entries(optionCounts).forEach(([optIdx, count]) => {
        const ratio = count / totalQ;
        expect(
          ratio,
          `Opción ${optIdx} tiene ratio ${ratio.toFixed(2)}, debe estar equilibrada entre 0.15 y 0.40`
        ).toBeGreaterThanOrEqual(0.15);
        expect(
          ratio,
          `Opción ${optIdx} tiene ratio ${ratio.toFixed(2)}, debe estar equilibrada entre 0.15 y 0.40`
        ).toBeLessThanOrEqual(0.40);
      });
    });

    it('la función generadora generateOfficialVmtExam crea exámenes válidos de 30 preguntas con balance oficial', () => {
      const exam = generateOfficialVmtExam(30);
      expect(exam.length).toBe(30);

      const teoricas = exam.filter((q) => q.category === 'teorico');
      const psicologicas = exam.filter((q) => q.category === 'psicologico');

      // 20 teóricas y 10 psicológicas conforme al estándar VMT
      expect(teoricas.length).toBe(20);
      expect(psicologicas.length).toBe(10);
    });

    it('el catálogo de señales oficiales de tránsito contiene >= 24 señales con códigos SIECA e iconos SVG', () => {
      expect(OFFICIAL_ROAD_SIGNS.length).toBeGreaterThanOrEqual(24);
      expect(OFFICIAL_ROAD_SIGNS.length).toBe(27);

      const categories = new Set(OFFICIAL_ROAD_SIGNS.map((s) => s.category || s.type));
      expect(categories.has('reglamentaria')).toBe(true);
      expect(categories.has('preventiva')).toBe(true);
      expect(categories.has('informativa')).toBe(true);

      const reglamentarias = filterRoadSignsByCategory('reglamentaria');
      const preventivas = filterRoadSignsByCategory('preventiva');
      const informativas = filterRoadSignsByCategory('informativa');

      expect(reglamentarias.length).toBeGreaterThanOrEqual(8);
      expect(preventivas.length).toBeGreaterThanOrEqual(8);
      expect(informativas.length).toBeGreaterThanOrEqual(8);

      OFFICIAL_ROAD_SIGNS.forEach((sign) => {
        expect(sign.id.trim().length).toBeGreaterThan(0);
        expect(sign.name.trim().length).toBeGreaterThan(0);
        expect(sign.description.trim().length).toBeGreaterThan(10);

        // Código SIECA oficial
        const sieca = sign.siecaCode || sign.code;
        expect(sieca, `Señal ${sign.id} debe tener código SIECA`).toBeDefined();
        expect(sieca.trim().length).toBeGreaterThan(0);

        // Icono SVG renderizable
        expect(sign.iconSvg).toContain('<svg');
        expect(sign.iconSvg).toContain('viewBox');
      });
    });

    it('getDriverUnitById recupera unidades válidas y maneja IDs inexistentes con undefined', () => {
      const u1 = getDriverUnitById('u1-marco-legal');
      expect(u1).toBeDefined();
      expect(u1?.title).toContain('Marco Legal');

      const nonExistent = getDriverUnitById('unit-inexistente-99');
      expect(nonExistent).toBeUndefined();
    });
  });

  // =========================================================================
  // SUITE B: HISTORIA PATRIA, CIVISMO Y CULTURA CUSCATLECA (R2 & R4)
  // =========================================================================
  describe('Suite B (R2 & R4): Historia Patria, Civismo y Cultura Cuscatleca', () => {
    it('contiene exactamente 5 unidades temáticas oficiales que cubren toda la evolución histórica', () => {
      expect(PATRIOTIC_THEMATIC_UNITS).toBeDefined();
      expect(PATRIOTIC_THEMATIC_UNITS.length).toBe(5);

      const expectedIds = [
        'unit-precolombino',
        'unit-independencia',
        'unit-republica-moderna',
        'unit-simbolos-valores',
        'unit-patrimonio-literatura',
      ];

      const actualIds = PATRIOTIC_THEMATIC_UNITS.map((u) => u.id);
      expect(actualIds).toEqual(expectedIds);

      PATRIOTIC_THEMATIC_UNITS.forEach((unit) => {
        expect(unit.title.trim().length).toBeGreaterThan(10);
        expect(unit.period.trim().length).toBeGreaterThan(5);
        expect(unit.subtitle.trim().length).toBeGreaterThan(10);
        expect(Array.isArray(unit.keyMilestones)).toBe(true);
        expect(unit.keyMilestones.length).toBeGreaterThanOrEqual(5);
      });
    });

    it('cada una de las 5 unidades temáticas contiene >= 500 palabras de análisis historiográfico sustantivo', () => {
      let totalSubstantiveWords = 0;

      PATRIOTIC_THEMATIC_UNITS.forEach((unit) => {
        const words = countSubstantiveWordsStrict(unit.substantiveAnalysis, [unit.title, unit.subtitle, unit.period]);
        totalSubstantiveWords += words;

        expect(
          words,
          `Unidad histórica ${unit.id} (${unit.title}) debe tener >= 500 palabras sustantivas (obtenidas: ${words})`
        ).toBeGreaterThanOrEqual(500);

        // Verificar que el análisis historiográfico cita eventos o conceptos clave
        const hasHistoriographicalTokens =
          /Cuzcatlán|Pipil|Independencia|República|Constitución|Acuerdos de Paz|Salarrué|Patrimonio|1811|1821|1932|1992/i.test(
            unit.substantiveAnalysis
          );
        expect(
          hasHistoriographicalTokens,
          `Unidad ${unit.id} debe contener conceptos o hitos históricos sustantivos`
        ).toBe(true);
      });

      // Total acumulado en las 5 unidades debe superar las 3,500 palabras
      expect(totalSubstantiveWords).toBeGreaterThanOrEqual(3500);
    });

    it('cada unidad histórica contiene al menos 5 casos de estudio histórico-cívicos resueltos (total >= 25 casos)', () => {
      expect(ALL_PATRIOTIC_CASE_STUDIES.length).toBeGreaterThanOrEqual(25);
      expect(ALL_PATRIOTIC_CASE_STUDIES.length).toBe(25);

      const caseIds = new Set<string>();

      PATRIOTIC_THEMATIC_UNITS.forEach((unit) => {
        expect(
          unit.solvedCaseStudies.length,
          `La unidad ${unit.id} debe contener al menos 5 casos de estudio resueltos`
        ).toBeGreaterThanOrEqual(5);

        unit.solvedCaseStudies.forEach((caseStudy) => {
          expect(caseIds.has(caseStudy.id), `ID de caso histórico duplicado: ${caseStudy.id}`).toBe(false);
          caseIds.add(caseStudy.id);

          expect(caseStudy.title.trim().length).toBeGreaterThanOrEqual(5);
          expect(
            caseStudy.historicalContext.trim().length,
            `Contexto de ${caseStudy.id} debe ser sustantivo (>= 30 caracteres)`
          ).toBeGreaterThanOrEqual(30);
          expect(
            caseStudy.dilemmaOrIssue.trim().length,
            `Dilema cívico de ${caseStudy.id} debe ser sustantivo (>= 30 caracteres)`
          ).toBeGreaterThanOrEqual(30);
          expect(
            caseStudy.historiographicalAnalysis.trim().length,
            `Análisis historiográfico de ${caseStudy.id} debe ser profundo (>= 40 caracteres)`
          ).toBeGreaterThanOrEqual(40);
          expect(
            caseStudy.civicSignificance.trim().length,
            `Significado cívico de ${caseStudy.id} debe ser concreto (>= 30 caracteres)`
          ).toBeGreaterThanOrEqual(30);
        });
      });
    });

    it('el banco de preguntas de historia patria contiene >= 50 preguntas con 4 opciones y citas históricas', () => {
      expect(PATRIOTIC_QUESTIONS.length).toBeGreaterThanOrEqual(50);
      expect(PATRIOTIC_QUESTIONS.length).toBe(55);

      const uniqueQuestionIds = new Set<string>();
      const validThematicUnitIds = new Set(PATRIOTIC_THEMATIC_UNITS.map((u) => u.id));

      PATRIOTIC_QUESTIONS.forEach((q) => {
        expect(uniqueQuestionIds.has(q.id), `ID de reactivo duplicado: ${q.id}`).toBe(false);
        uniqueQuestionIds.add(q.id);

        expect(q.question.trim().length).toBeGreaterThanOrEqual(15);
        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length, `Pregunta ${q.id} debe tener exactamente 4 opciones`).toBe(4);
        expect([0, 1, 2, 3]).toContain(q.correctAnswer);
        expect(q.explanation.trim().length).toBeGreaterThanOrEqual(15);
        expect(validThematicUnitIds.has(q.thematicUnitId), `thematicUnitId inválido en ${q.id}: ${q.thematicUnitId}`).toBe(true);

        const ref = q.historicalReference || (q as any).legalReference;
        expect(ref, `Pregunta ${q.id} debe tener referencia histórica o bibliográfica`).toBeDefined();
        expect(ref.trim().length).toBeGreaterThanOrEqual(5);
      });
    });

    it('preserva íntegros los 7 símbolos patrios oficiales y los 17 presidentes históricos', () => {
      expect(PATRIOTIC_SYMBOLS.length).toBe(7);

      const expectedSymbolIds = ['bandera', 'escudo', 'himno', 'ave', 'flor', 'arboles', 'oracion'];
      const actualSymbolIds = PATRIOTIC_SYMBOLS.map((s) => s.id);
      expect(actualSymbolIds).toEqual(expectedSymbolIds);

      PATRIOTIC_SYMBOLS.forEach((sym) => {
        expect(sym.name.trim().length).toBeGreaterThan(0);
        expect(sym.decree.trim().length).toBeGreaterThan(5);
        expect(sym.detailedHistory.trim().length).toBeGreaterThan(20);
        expect(sym.meaning.trim().length).toBeGreaterThan(20);
        expect(Array.isArray(sym.civicDetails)).toBe(true);
        expect(sym.civicDetails.length).toBeGreaterThanOrEqual(2);
      });

      expect(HISTORICAL_PRESIDENTS.length).toBeGreaterThanOrEqual(17);
      expect(HISTORICAL_PRESIDENTS.length).toBe(17);

      HISTORICAL_PRESIDENTS.forEach((pres) => {
        expect(pres.name.trim().length).toBeGreaterThan(0);
        expect(pres.period.trim().length).toBeGreaterThan(0);
        expect(pres.context.trim().length).toBeGreaterThan(15);
        expect(Array.isArray(pres.pros)).toBe(true);
        expect(Array.isArray(pres.cons)).toBe(true);
      });
    });
  });

  // =========================================================================
  // SUITE C: ESCUELA DE IDIOMAS - LOW-RESOURCE & INDIGENOUS LANGUAGES (R3 & R4)
  // =========================================================================
  describe('Suite C (R3 & R4): Escuela de Idiomas - Lenguas Originarias y de Bajos Recursos', () => {
    it('cero tokens sintéticos o marcadores de posición (lenca_word_, kaka_root_, etc.) en los archivos léxicos', () => {
      const vocabFiles = [
        'src/data/languages/nahuatVocabularyData.ts',
        'src/data/languages/lencaVocabularyData.ts',
        'src/data/languages/kakawiraVocabularyData.ts',
        'src/data/languages/mandarinVocabularyData.ts',
        'src/data/languages/arabicVocabularyData.ts',
      ];

      vocabFiles.forEach((relPath) => {
        const fullPath = path.join(rootDir, relPath);
        expect(fs.existsSync(fullPath), `El archivo ${relPath} debe existir`).toBe(true);
        const code = fs.readFileSync(fullPath, 'utf-8');

        // Verificar ausencia de tokens sintéticos identificados en el relevamiento
        expect(code).not.toMatch(/lenca_word_\d+/);
        expect(code).not.toMatch(/kaka_root_\d+/);
        expect(code).not.toMatch(/piltzin-194/);
        expect(code).not.toMatch(/at-197/);
      });
    });

    it('los repositorios de vocabulario alcanzan conteos auténticos sustantivos en las 5 lenguas', () => {
      // Requisitos mínimos según especificación R3
      expect(NAHUAT_VOCABULARY_CORPUS.length, 'Náhuat debe tener >= 150 palabras auténticas').toBeGreaterThanOrEqual(150);
      expect(LENCA_VOCABULARY_CORPUS.length, 'Lenca Potón debe tener >= 100 palabras auténticas').toBeGreaterThanOrEqual(100);
      expect(KAKAWIRA_VOCABULARY_CORPUS.length, 'Kakawira/Cacaopera debe tener >= 100 palabras auténticas').toBeGreaterThanOrEqual(100);
      expect(MANDARIN_VOCABULARY_CORPUS.length, 'Mandarín debe tener >= 100 palabras auténticas').toBeGreaterThanOrEqual(100);
      expect(ARABIC_VOCABULARY_CORPUS.length, 'Árabe debe tener >= 100 palabras auténticas').toBeGreaterThanOrEqual(100);

      // Verificación de integridad estructural en cada entrada de vocabulario
      const allVocabularies = [
        { name: 'Náhuat', data: NAHUAT_VOCABULARY_CORPUS },
        { name: 'Lenca', data: LENCA_VOCABULARY_CORPUS },
        { name: 'Kakawira', data: KAKAWIRA_VOCABULARY_CORPUS },
        { name: 'Mandarín', data: MANDARIN_VOCABULARY_CORPUS },
        { name: 'Árabe', data: ARABIC_VOCABULARY_CORPUS },
      ];

      allVocabularies.forEach(({ name, data }) => {
        const ids = new Set<string>();
        data.forEach((entry) => {
          expect(ids.has(entry.id), `ID duplicado en ${name}: ${entry.id}`).toBe(false);
          ids.add(entry.id);

          expect(entry.word.trim().length, `Palabra en ${name} no puede estar vacía`).toBeGreaterThan(0);
          expect(entry.translation.trim().length, `Traducción en ${name} no puede estar vacía`).toBeGreaterThan(0);
          expect(entry.category.trim().length, `Categoría en ${name} no puede estar vacía`).toBeGreaterThan(0);
        });
      });
    });

    it('las 5 lenguas poseen 5 unidades comunicativas cada una (25 unidades en total)', () => {
      const languageUnits = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarín', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Árabe', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      languageUnits.forEach(({ name, units }) => {
        expect(units.length, `${name} debe tener exactamente 5 unidades comunicativas`).toBe(5);
      });
    });

    it('cada una de las 25 unidades comunicativas contiene >= 500 palabras de guía sustantiva', () => {
      const languageUnits = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarín', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Árabe', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      languageUnits.forEach(({ name, units }) => {
        units.forEach((unit) => {
          const words = countSubstantiveWordsStrict(unit.substantiveGuide, [unit.title]);
          expect(
            words,
            `Guía comunicativa ${unit.id} en ${name} (${unit.title}) debe tener >= 500 palabras (obtenidas: ${words})`
          ).toBeGreaterThanOrEqual(500);
        });
      });
    });

    it('cada una de las 25 unidades comunicativas contiene al menos 5 diálogos resueltos con desgloses gramaticales (total >= 125 diálogos)', () => {
      const languageUnits = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarín', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Árabe', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      let totalSolvedDialogues = 0;

      languageUnits.forEach(({ name, units }) => {
        units.forEach((unit) => {
          expect(
            unit.solvedDialogues.length,
            `Unidad ${unit.id} en ${name} debe tener al menos 5 diálogos resueltos`
          ).toBeGreaterThanOrEqual(5);

          unit.solvedDialogues.forEach((dlg) => {
            totalSolvedDialogues++;
            expect(dlg.id.trim().length).toBeGreaterThan(0);

            // Context o Scenario
            const contextText = (dlg as any).scenario || (dlg as any).context;
            expect(contextText, `Contexto/escenario de ${dlg.id} no puede estar vacío`).toBeDefined();
            expect(contextText.trim().length).toBeGreaterThanOrEqual(15);

            // Dialogue o Turns
            const hasDialogue = typeof (dlg as any).dialogue === 'string' && (dlg as any).dialogue.trim().length >= 15;
            const hasTurns = Array.isArray((dlg as any).turns) && (dlg as any).turns.length >= 2;
            expect(hasDialogue || hasTurns, `Diálogo/turnos de ${dlg.id} no puede estar vacío`).toBe(true);

            // Desglose gramatical puede ser string o estructurado
            const breakdown = (dlg as any).grammaticalBreakdown;
            if (typeof breakdown === 'string') {
              expect(breakdown.trim().length).toBeGreaterThanOrEqual(20);
            } else if (typeof breakdown === 'object' && breakdown !== null) {
              expect(
                breakdown.gloss || breakdown.syntaxPattern || breakdown.morphology || breakdown.culturalNotes,
                `Desglose gramatical de ${dlg.id} debe contener campos explicativos`
              ).toBeDefined();
            } else {
              throw new Error(`Diálogo ${dlg.id} en ${name} carece de desglose gramatical válido`);
            }
          });
        });
      });

      expect(totalSolvedDialogues).toBeGreaterThanOrEqual(125);
    });
  });

  // =========================================================================
  // SUITE D: GOOGLE ADSENSE POLICY COMPLIANCE & CONTENT GUARDS (R5)
  // =========================================================================
  describe('Suite D (R5): Google AdSense Policy Compliance & Content Guards', () => {
    describe('1. Compuertas de Contenido en AdBanner', () => {
      it('renderiza null cuando isLoading={true} (pantalla de carga sin contenido publicable)', () => {
        const html = renderToStaticMarkup(React.createElement(AdBanner, { isLoading: true }));
        expect(html).toBe('');
      });

      it('renderiza null cuando isEmpty={true} (búsqueda o filtro sin resultados)', () => {
        const html = renderToStaticMarkup(React.createElement(AdBanner, { isEmpty: true }));
        expect(html).toBe('');
      });

      it('renderiza null cuando hasPublisherContent={false} (pantalla sin contenido editorial)', () => {
        const html = renderToStaticMarkup(React.createElement(AdBanner, { hasPublisherContent: false }));
        expect(html).toBe('');
      });

      it('renderiza null cuando contentSnippet no alcanza minSubstantiveWords (contenido de bajo valor)', () => {
        // Snippet con solo 3 palabras sustantivas frente a un mínimo de 15
        const html = renderToStaticMarkup(
          React.createElement(AdBanner, {
            contentSnippet: 'Texto muy breve',
            minSubstantiveWords: 15,
          })
        );
        expect(html).toBe('');
      });

      it('renderiza el contenedor publicitario autorizado cuando todas las condiciones de contenido sustantivo se cumplen', () => {
        const substantiveText =
          'El Reglamento General de Tránsito y Seguridad Vial establece en el marco jurídico salvadoreño las pautas de circulación vehicular preferente en redondeles y avenidas principales.';
        const html = renderToStaticMarkup(
          React.createElement(AdBanner, {
            hasPublisherContent: true,
            isLoading: false,
            isEmpty: false,
            minSubstantiveWords: 10,
            contentSnippet: substantiveText,
            slotId: '4241045160_test',
          })
        );

        // Debe renderizar el bloque de anuncio con la leyenda reglamentaria y el slot
        expect(html).toContain('ANUNCIO PATROCINADO POR GOOGLE ADS');
        expect(html).toContain('ca-pub-4241045160320459');
        expect(html).toContain('data-ad-slot="4241045160_test"');
        expect(html).toContain('data-ad-format="horizontal"');
      });

      it('la función exportada countSubstantiveWords descarta etiquetas HTML, KaTeX y símbolos no alfanuméricos', () => {
        const messyText = '<p>Texto inicial con <strong>marcado HTML</strong> y fórmula $$x^2 + y^2 = r^2$$ con \\frac{a}{b}.</p>';
        const count = adBannerCountWords(messyText);
        expect(count).toBeGreaterThan(0);
        // Debe contar únicamente palabras genuinas: Texto, inicial, con, marcado, HTML, fórmula, etc.
        expect(count).toBeGreaterThanOrEqual(6);
        expect(count).toBeLessThanOrEqual(12);

        expect(adBannerCountWords('')).toBe(0);
        expect(adBannerCountWords(undefined)).toBe(0);
        expect(adBannerCountWords('$$formula_pura$$')).toBe(0);
      });
    });

    describe('2. Compuertas de Contenido en LateralAdRails', () => {
      const centralChild = React.createElement('div', { id: 'main-view' }, 'Contenido Central');

      it('no monta rieles laterales publicitarios cuando isLoading={true}', () => {
        const html = renderToStaticMarkup(
          React.createElement(LateralAdRails, { activeTab: 'practice', isLoading: true }, centralChild)
        );
        expect(html).not.toContain('kuskat-lateral-skyscraper');
        expect(html).toContain('Contenido Central');
      });

      it('no monta rieles laterales publicitarios cuando isEmpty={true}', () => {
        const html = renderToStaticMarkup(
          React.createElement(LateralAdRails, { activeTab: 'practice', isEmpty: true }, centralChild)
        );
        expect(html).not.toContain('kuskat-lateral-skyscraper');
        expect(html).toContain('Contenido Central');
      });

      it('no monta rieles laterales publicitarios cuando hasPublisherContent={false}', () => {
        const html = renderToStaticMarkup(
          React.createElement(LateralAdRails, { activeTab: 'practice', hasPublisherContent: false }, centralChild)
        );
        expect(html).not.toContain('kuskat-lateral-skyscraper');
        expect(html).toContain('Contenido Central');
      });

      it('no monta rieles laterales en la pestaña categories (arquitectura por diseño)', () => {
        const html = renderToStaticMarkup(
          React.createElement(LateralAdRails, { activeTab: 'categories', hasPublisherContent: true }, centralChild)
        );
        expect(html).not.toContain('kuskat-lateral-skyscraper');
        expect(html).toContain('Contenido Central');
      });

      it('monta rieles laterales cuando hay contenido sustantivo en pestañas autorizadas (practice)', () => {
        const substantiveSnippet =
          'Pregunta de simulación sobre límites de velocidad reglamentarios y maniobras de adelantamiento en carretera abierta.';
        const html = renderToStaticMarkup(
          React.createElement(
            LateralAdRails,
            {
              activeTab: 'practice',
              hasPublisherContent: true,
              isLoading: false,
              isEmpty: false,
              minSubstantiveWords: 5,
              contentSnippet: substantiveSnippet,
            },
            centralChild
          )
        );
        expect(html).toContain('kuskat-lateral-skyscraper');
        expect(html).toContain('Contenido Central');
      });
    });

    describe('3. Riqueza Semántica en index.html (> 3,500 palabras prerenderizadas para Mediapartners-Google)', () => {
      const indexHtmlPath = path.join(rootDir, 'index.html');

      it('index.html existe y contiene un cuerpo estático prerenderizado dentro de <div id="root">', () => {
        expect(fs.existsSync(indexHtmlPath)).toBe(true);
        const html = fs.readFileSync(indexHtmlPath, 'utf-8');
        expect(html).toContain('<div id="root">');
      });

      it('el contenido estático dentro de <div id="root"> supera estrictamente las 3,500 palabras sustantivas', () => {
        const html = fs.readFileSync(indexHtmlPath, 'utf-8');
        const rootStart = html.indexOf('<div id="root">');
        expect(rootStart).toBeGreaterThan(-1);

        const rootEnd = html.lastIndexOf('</div>');
        expect(rootEnd).toBeGreaterThan(rootStart);

        const innerRootHtml = html.substring(rootStart + '<div id="root">'.length, rootEnd);

        // Descartar etiquetas HTML y contar palabras
        const plainText = innerRootHtml.replace(/<[^>]+>/g, ' ');
        const words = plainText.split(/\s+/).filter((w) => w.length > 0);

        expect(
          words.length,
          `El contenido estático en index.html debe tener > 3,500 palabras para crawlers (obtenidas: ${words.length})`
        ).toBeGreaterThan(3500);
      });

      it('el contenido prerenderizado aborda formalmente los módulos reforzados (ESMATE, VMT, Historia Patria, Idiomas)', () => {
        const html = fs.readFileSync(indexHtmlPath, 'utf-8');
        expect(html).toMatch(/MINED-ESMATE|ESMATE/);
        expect(html).toMatch(/Licencia de Conducir VMT|Reglamento General de Tránsito/);
        expect(html).toMatch(/Historia Patria|Civismo y Cultura Cuscatleca/);
        expect(html).toMatch(/Náhuat|Lenca|Kakawira/);
      });
    });

    describe('4. Estructura de Metadatos JSON-LD Schema.org para Rastreadores Educativos', () => {
      const indexHtmlPath = path.join(rootDir, 'index.html');

      it('index.html contiene un bloque JSON-LD estructurado válido conforme a Schema.org', () => {
        const html = fs.readFileSync(indexHtmlPath, 'utf-8');
        const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        expect(jsonLdMatch).not.toBeNull();

        const jsonStr = jsonLdMatch![1].trim();
        const parsed = JSON.parse(jsonStr);
        expect(parsed).toBeDefined();
        expect(parsed['@context']).toBe('https://schema.org');
        expect(Array.isArray(parsed['@graph'])).toBe(true);
      });

      it('define entidades estructuradas EducationalOrganization y múltiples entidades Course', () => {
        const html = fs.readFileSync(indexHtmlPath, 'utf-8');
        const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
        const parsed = JSON.parse(jsonLdMatch![1]);
        const graph: any[] = parsed['@graph'];

        const org = graph.find((item) => item['@type'] === 'EducationalOrganization');
        expect(org, 'Debe definir @type EducationalOrganization').toBeDefined();
        expect(org.name).toContain('KUSKAT');
        expect(org.url).toBe('https://kuskates.com/');

        const courses = graph.filter((item) => item['@type'] === 'Course');
        expect(courses.length, 'Debe definir múltiples cursos curriculares').toBeGreaterThanOrEqual(4);

        courses.forEach((course) => {
          expect(course.name.trim().length).toBeGreaterThan(0);
          expect(course.description.trim().length).toBeGreaterThan(20);
          expect(course.provider).toBeDefined();
          expect(course.isAccessibleForFree).toBe(true);
        });
      });
    });

    describe('5. Verificación de Archivos Estáticos de Rastreo (ads.txt, robots.txt, sitemap.xml)', () => {
      it('public/ads.txt declara los IDs de editor autorizados de Google AdSense con estado DIRECT', () => {
        const adsTxtPath = path.join(rootDir, 'public', 'ads.txt');
        expect(fs.existsSync(adsTxtPath)).toBe(true);
        const content = fs.readFileSync(adsTxtPath, 'utf-8');

        expect(content).toContain('pub-4241045160320459');
        expect(content).toContain('pub-5120531548842494');
        expect(content).toContain('DIRECT');
        expect(content).toContain('f08c47fec0942fa0');
      });

      it('public/robots.txt permite explícitamente a Mediapartners-Google y declara el sitemap oficial', () => {
        const robotsTxtPath = path.join(rootDir, 'public', 'robots.txt');
        expect(fs.existsSync(robotsTxtPath)).toBe(true);
        const content = fs.readFileSync(robotsTxtPath, 'utf-8');

        expect(content).toContain('User-agent: Mediapartners-Google');
        expect(content).toContain('User-agent: Googlebot');
        expect(content).toContain('User-agent: AdsBot-Google');
        expect(content).toContain('Allow: /');
        expect(content).toContain('Sitemap: https://kuskates.com/sitemap.xml');
      });

      it('public/sitemap.xml contiene las rutas educativas principales con fecha 2026-10-31', () => {
        const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
        expect(fs.existsSync(sitemapPath)).toBe(true);
        const content = fs.readFileSync(sitemapPath, 'utf-8');

        expect(content).toContain('<urlset');
        expect(content).toContain('driver-license');
        expect(content).toContain('patriotic-history');
        expect(content).toContain('languages');
        expect(content).toContain('academic-reinforcement');
        expect(content).toContain('practice');
        expect(content).toContain('<lastmod>2026-10-31</lastmod>');
      });
    });

    describe('6. Verificación Adversarial y Casos Límite de Integridad (Adversarial Stress)', () => {
      it('ninguna pregunta del simulador VMT ni de historia patria contiene opciones duplicadas entre sí', () => {
        // En cada reactivo, las 4 opciones deben ser mutuamente excluyentes y no repetidas
        DRIVER_QUESTIONS.forEach((q) => {
          const uniqueOptions = new Set(q.options.map((o) => o.trim().toLowerCase()));
          expect(uniqueOptions.size, `Pregunta VMT ${q.id} contiene opciones duplicadas`).toBe(4);
        });

        PATRIOTIC_QUESTIONS.forEach((q) => {
          const uniqueOptions = new Set(q.options.map((o) => o.trim().toLowerCase()));
          expect(uniqueOptions.size, `Pregunta Historia ${q.id} contiene opciones duplicadas`).toBe(4);
        });
      });

      it('ningún caso práctico de tránsito ni caso histórico comparte textos o escenarios duplicados', () => {
        const allTrafficCases = getAllPracticalTrafficCases();
        const trafficScenarios = new Set(allTrafficCases.map((c) => c.scenario.trim().toLowerCase()));
        expect(trafficScenarios.size, 'Los 40 casos de tránsito deben tener escenarios distintos').toBe(40);

        const patrioticDilemmas = new Set(ALL_PATRIOTIC_CASE_STUDIES.map((c) => c.dilemmaOrIssue.trim().toLowerCase()));
        expect(patrioticDilemmas.size, 'Los 25 casos históricos deben tener dilemas distintos').toBe(25);
      });

      it('AdBanner suprime anuncios ante entradas adversas (HTML puro sin texto, KaTeX aislado, espacios en blanco)', () => {
        // Entrada solo con espacios
        expect(renderToStaticMarkup(React.createElement(AdBanner, { contentSnippet: '    ' }))).toBe('');

        // Entrada con etiquetas HTML vacías
        expect(renderToStaticMarkup(React.createElement(AdBanner, { contentSnippet: '<div><span></span><p></p></div>' }))).toBe('');

        // Entrada solo con KaTeX / LaTeX
        expect(renderToStaticMarkup(React.createElement(AdBanner, { contentSnippet: '$$\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$' }))).toBe('');

        // Entrada mixta donde las palabras no alcanzan el umbral mínimo
        expect(renderToStaticMarkup(React.createElement(AdBanner, { contentSnippet: '<div>$$x+y$$ solo dos palabras</div>', minSubstantiveWords: 10 }))).toBe('');
      });

      it('todos los repositorios de lenguas de bajos recursos carecen de términos genéricos de relleno', () => {
        const genericFillerRegex = /lorem|ipsum|dummy|placeholder|temp_word|test_token/i;

        [NAHUAT_VOCABULARY_CORPUS, LENCA_VOCABULARY_CORPUS, KAKAWIRA_VOCABULARY_CORPUS].forEach((corpus) => {
          corpus.forEach((item) => {
            expect(item.word).not.toMatch(genericFillerRegex);
            expect(item.translation).not.toMatch(genericFillerRegex);
          });
        });
      });
    });
  });
});
