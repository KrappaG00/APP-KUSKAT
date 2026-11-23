import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import katex from 'katex';
import {
  ALL_GRADES_DATA,
  getGrades,
  getGradeDetail,
  getSubject,
  getGradeOfficialResources,
  getAllMinedResources,
  getPrimeraInfanciaArticulationResources,
  getResourcesBySubject,
  getResourcesByGradeAndSubject,
  getUnit,
  getUnitQuestions,
  getAllUnits,
  getAllMultiSubjectUnits,
  buildFallback50Questions,
  searchCurriculum,
  MINED_CATALOG,
  MINED_SUBJECT_METADATA,
  SUBJECT_CODE_MAP,
  GradeLevelId,
  SubjectId,
} from '../src/data/minedCurriculum';
import { countSubstantiveLessonWords } from './curriculumR4Compliance.test';
import { AcademicReinforcementView } from '../src/components/AcademicReinforcementView';
import {
  getMinedTextIndex,
  loadMinedTextDocument,
  searchInMinedTextDocument,
  clearMinedTextCache,
  type MinedTextDocument,
} from '../src/services/minedTextService';

const verifiedKaTeXCache = new Set<string>();

function assertBalancedAndValidKaTeX(text: string, context: string): void {
  if (text.includes('${')) {
    throw new Error(`Uninterpolated template literal found in ${context}: "${text}"`);
  }
  const withoutDisplay = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  const singleDollars = (withoutDisplay.match(/\$/g) || []).length;
  if (singleDollars % 2 !== 0) {
    throw new Error(`Odd number of $ delimiters in ${context}: "${text}"`);
  }

  const inlineMatches = withoutDisplay.match(/\$([^$]+)\$/g) || [];
  for (const m of inlineMatches) {
    const expr = m.slice(1, -1);
    if (!verifiedKaTeXCache.has(expr)) {
      katex.renderToString(expr, { throwOnError: true, strict: 'ignore' });
      verifiedKaTeXCache.add(expr);
    }
  }
}

const ALL_GRADE_IDS: GradeLevelId[] = [
  '1-grado',
  '2-grado',
  '3-grado',
  '4-grado',
  '5-grado',
  '6-grado',
  '7-grado',
  '8-grado',
  '9-grado',
  '1-bachillerato',
  '2-bachillerato',
];

const ALL_SUBJECT_IDS: SubjectId[] = [
  'matematica-esmate',
  'lenguaje-eslengua',
  'ciencia-tecnologia',
  'ciudadania-valores',
  'educacion-artistica',
  'educacion-fisica',
  'educacion-financiera',
];

const NON_MATH_SUBJECT_IDS: Exclude<SubjectId, 'matematica-esmate'>[] = [
  'lenguaje-eslengua',
  'ciencia-tecnologia',
  'ciudadania-valores',
  'educacion-artistica',
  'educacion-fisica',
  'educacion-financiera',
];

const PROHIBITED_DOMAINS = [
  /iurisacademia/i,
  /iuriscaeli/i,
  /englisch-hilfen/i,
  /englishteststore/i,
  /agendaweb/i,
];

describe('MINED Multi-Subject Curriculum & Official Resources Integration', () => {
  describe('1. Official MINED Downloadable Resources Manifest (98 Entries)', () => {
    it('contains all 98 official manifest entries (97 downloaded OK [95 PDFs + 2 JPEGs] + 1 documented HTTP 404)', () => {
      const allResources = getAllMinedResources();
      expect(allResources.length).toBe(98);

      const okResources = allResources.filter((r) => r.status === 'success');
      const notFoundResources = allResources.filter((r) => r.status === 'error');
      expect(okResources.length).toBe(97);
      expect(notFoundResources.length).toBe(1);
      expect(notFoundResources[0].url).toContain('Guía metodológica Artes 3.° grado.pdf');

      const pdfOk = okResources.filter((r) => r.filename.toLowerCase().endsWith('.pdf'));
      const jpegOk = okResources.filter(
        (r) =>
          r.filename.toLowerCase().endsWith('.jpeg') || r.filename.toLowerCase().endsWith('.jpg')
      );
      expect(pdfOk.length).toBe(95);
      expect(jpegOk.length).toBe(2);

      // Verify SHA-256 and bytes on all 97 OK resources
      okResources.forEach((res) => {
        expect(res.url).toMatch(/^https:\/\/www\.mined\.gob\.sv\//);
        expect(res.sha256, `Missing sha256 on ${res.id}`).toMatch(/^[a-f0-9]{64}$/);
        expect(res.sizeBytes, `Invalid sizeBytes on ${res.id}`).toBeGreaterThan(10000);
        expect(res.title.trim().length).toBeGreaterThan(5);
        expect(res.gradeIds.length).toBeGreaterThanOrEqual(1);
      });
    });

    it('maps the 19 Educación Inicial y Parvularia articulation resources to 1-grado', () => {
      const articulation = getPrimeraInfanciaArticulationResources();
      expect(articulation.length).toBe(19);
      articulation.forEach((res) => {
        expect(res.isArticulationPrimeraInfancia).toBe(true);
        expect(res.gradeIds).toContain('1-grado');
      });

      const firstGradeResources = getGradeOfficialResources('1-grado', 'ALL', 'ALL');
      expect(firstGradeResources.length).toBeGreaterThanOrEqual(25);
    });

    it('maps downloadable resources across all 11 grades and filters accurately by subject and docType (both "all" and "ALL")', () => {
      ALL_GRADE_IDS.forEach((gradeId) => {
        const gradeRes = getGradeOfficialResources(gradeId, 'ALL', 'ALL');
        expect(gradeRes.length, `Grade ${gradeId} should have mapped MINED resources`).toBeGreaterThan(0);

        const detail = getGradeDetail(gradeId);
        expect(detail?.resources?.length).toBe(gradeRes.length);
      });

      // Verify subject resource counts match manifest categories
      expect(getResourcesBySubject('ciencia-tecnologia').length).toBeGreaterThanOrEqual(31);
      expect(getResourcesBySubject('ciudadania-valores').length).toBeGreaterThanOrEqual(10);
      expect(getResourcesBySubject('educacion-financiera').length).toBeGreaterThanOrEqual(1);
      expect(getResourcesBySubject('lenguaje-eslengua').length).toBeGreaterThanOrEqual(21);
      expect(getResourcesBySubject('educacion-artistica').length).toBeGreaterThanOrEqual(7);
      expect(getResourcesBySubject('educacion-fisica').length).toBeGreaterThanOrEqual(9);

      // Filter by docType and verify case-insensitivity for 'all' | 'ALL'
      const cienciaAllLower = getResourcesByGradeAndSubject('4-grado', 'ciencia-tecnologia', 'all');
      const cienciaAllUpper = getResourcesByGradeAndSubject('4-grado', 'ciencia-tecnologia', 'ALL');
      expect(cienciaAllUpper.length).toBe(cienciaAllLower.length);
      expect(cienciaAllUpper.length).toBeGreaterThanOrEqual(2);

      const cienciaLibros4G = getGradeOfficialResources('4-grado', 'ciencia-tecnologia', 'Libro de Texto');
      expect(cienciaLibros4G.length).toBeGreaterThanOrEqual(1);
      cienciaLibros4G.forEach((r) => {
        expect(r.docType).toBe('Libro de Texto');
        expect(r.subjectIds).toContain('ciencia-tecnologia');
      });
    });
  });

  describe('2. Multi-Subject Coverage Across All 11 Grades (7 Official Subjects) & Catalog Alignment', () => {
    it('ensures every grade in ALL_GRADES_DATA and MINED_CATALOG has all 7 official subjects and matching unit IDs/counts', () => {
      ALL_SUBJECT_IDS.forEach((subId) => {
        expect(MINED_SUBJECT_METADATA[subId]).toBeDefined();
        expect(SUBJECT_CODE_MAP[subId]).toBeDefined();
      });

      ALL_GRADE_IDS.forEach((gradeId) => {
        const grade = getGradeDetail(gradeId);
        expect(grade).toBeDefined();
        expect(grade!.subjects.length).toBe(7);

        // subjects[0] must remain matematica-esmate
        expect(grade!.subjects[0].id).toBe('matematica-esmate');

        ALL_SUBJECT_IDS.forEach((subId) => {
          const subj = getSubject(gradeId, subId);
          expect(subj, `Missing subject ${subId} in ${gradeId}`).toBeDefined();
          expect(subj!.units.length).toBeGreaterThanOrEqual(2);
        });

        const catalogGrade = getGrades().find((g) => g.id === gradeId);
        expect(catalogGrade).toBeDefined();
        expect(catalogGrade!.subjectCount).toBe(7);
        const expectedTotalUnits = catalogGrade!.subjects.reduce((acc, s) => acc + s.units.length, 0);
        expect(catalogGrade!.totalUnits).toBe(expectedTotalUnits);

        const catalogSubIds = catalogGrade!.subjects.map((s) => s.id);
        ALL_SUBJECT_IDS.forEach((subId) => {
          expect(catalogSubIds).toContain(subId);
        });

        // Every catalog unit ID must resolve in getUnit() and getUnitQuestions()
        catalogGrade!.subjects.forEach((catSub) => {
          catSub.units.forEach((catUnit) => {
            const resolvedUnit = getUnit(gradeId, catUnit.id);
            expect(resolvedUnit, `Catalog unit ${catUnit.id} failed to resolve in ${gradeId}`).toBeDefined();
            const qs = getUnitQuestions(gradeId, catUnit.id);
            expect(qs.length, `Catalog unit ${catUnit.id} failed to return 50 questions`).toBe(50);
          });
        });
      });

      // Verify legacy unit ID alias resolution
      expect(getUnit('1-grado', '1-grado-len-u1')).toBeDefined();
      expect(getUnitQuestions('1-grado', '1-grado-len-u1').length).toBe(50);
    });

    it('preserves the 97 ESMATE unit default contract on getAllUnits() while returning all 229 units on getAllMultiSubjectUnits()', () => {
      const defaultEsmateUnits = getAllUnits();
      expect(defaultEsmateUnits.length).toBe(97);

      const allMultiUnits = getAllMultiSubjectUnits();
      // 97 ESMATE units + (11 grades * 6 subjects * 2 units = 132 units) = 229 total units
      expect(allMultiUnits.length).toBe(229);

      NON_MATH_SUBJECT_IDS.forEach((subId) => {
        const subjectUnits = getAllUnits({ subjectId: subId });
        expect(subjectUnits.length).toBe(22); // 11 grades * 2 units (Tomo 1 & Tomo 2)
      });
    });
  });

  describe('3. Pedagogical Depth (>= 500 Substantive Words, >= 5 Solved Step-by-Step Examples, and Valid KaTeX) Across All Multi-Subject Units', () => {
    it('verifies every lesson in all 6 non-ESMATE subjects has >= 500 substantive words, 0 boilerplate fillers, >= 5 solved examples, and balanced KaTeX', () => {
      const multiUnits = getAllMultiSubjectUnits().filter(
        (item) => item.subjectId !== 'matematica-esmate'
      );
      expect(multiUnits.length).toBe(132);

      multiUnits.forEach(({ gradeId, gradeName, subjectId, unit }) => {
        expect([1, 2]).toContain(unit.tomo);
        expect(unit.competencies.length).toBeGreaterThanOrEqual(2);
        expect(unit.lessons.length).toBeGreaterThanOrEqual(1);

        unit.lessons.forEach((lesson) => {
          const { substantiveWordCount, detectedFillers } = countSubstantiveLessonWords(
            lesson,
            unit.title,
            gradeName
          );
          expect(
            detectedFillers,
            `Detected filler in ${gradeId}/${subjectId}/${lesson.id}`
          ).toEqual([]);
          expect(
            substantiveWordCount,
            `Lesson ${lesson.id} in ${gradeId}/${subjectId} has ${substantiveWordCount} substantive words (< 500)`
          ).toBeGreaterThanOrEqual(500);

          // Verify >= 5 distinct step-by-step solved examples
          expect(lesson.examples).toBeDefined();
          expect(lesson.examples!.length).toBeGreaterThanOrEqual(5);
          const uniqueExamples = new Set(lesson.examples!.map((e) => e.trim()));
          expect(uniqueExamples.size).toBe(lesson.examples!.length);

          lesson.examples!.forEach((ex, idx) => {
            expect(ex, `Example ${idx + 1} in ${lesson.id} missing Paso 1`).toMatch(/Paso 1:/);
            expect(ex, `Example ${idx + 1} in ${lesson.id} missing Paso 2`).toMatch(/Paso 2:/);
            expect(ex, `Example ${idx + 1} in ${lesson.id} missing Paso 3`).toMatch(/Paso 3:/);
            expect(ex, `Example ${idx + 1} in ${lesson.id} missing Solución`).toMatch(/Solución:/);
            assertBalancedAndValidKaTeX(ex, `${lesson.id}.examples[${idx}]`);
          });

          // Verify KaTeX on P, S, C, conclusionFormula, and R
          assertBalancedAndValidKaTeX(lesson.problema, `${lesson.id}.problema`);
          assertBalancedAndValidKaTeX(lesson.solucion, `${lesson.id}.solucion`);
          assertBalancedAndValidKaTeX(lesson.conclusion, `${lesson.id}.conclusion`);
          if (lesson.conclusionFormula) {
            expect(() =>
              katex.renderToString(lesson.conclusionFormula!, {
                throwOnError: true,
                strict: 'ignore',
              })
            ).not.toThrow();
          }
          lesson.resuelve.forEach((rItem, rIdx) => {
            assertBalancedAndValidKaTeX(rItem.exercise, `${lesson.id}.resuelve[${rIdx}].exercise`);
            if (rItem.hint) {
              assertBalancedAndValidKaTeX(rItem.hint, `${lesson.id}.resuelve[${rIdx}].hint`);
            }
            if (rItem.answer) {
              assertBalancedAndValidKaTeX(rItem.answer, `${lesson.id}.resuelve[${rIdx}].answer`);
            }
          });

          // Verify >= 2 resuelve items
          expect(lesson.resuelve.length).toBeGreaterThanOrEqual(2);

          // Verify zero prohibited citations
          const combinedText = `${lesson.problema} ${lesson.solucion} ${lesson.conclusion} ${lesson.examples!.join(' ')}`;
          PROHIBITED_DOMAINS.forEach((regex) => {
            expect(combinedText).not.toMatch(regex);
          });
        });
      });
    });
  });

  describe('4. 50-Question Simulator Integrity, Subject-Prefixed IDs, Valid KaTeX, and Distractor Rationales Across All 229 Units', () => {
    it(
      'verifies all 229 units return 50 valid questions with unique MINED-{SUBJECT_CODE} IDs, balanced KaTeX, and both distractorRationale and distractorRationales',
      () => {
        const allMultiUnits = getAllMultiSubjectUnits();
        const seenQuestionIds = new Set<string>();

        allMultiUnits.forEach(({ gradeId, subjectId, unit }) => {
          const expectedCode = SUBJECT_CODE_MAP[subjectId];
          const questions = getUnitQuestions(gradeId, unit.id);
          expect(questions.length, `Unit ${unit.id} must have 50 questions`).toBe(50);

          const keyCounts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };

          questions.forEach((q) => {
            expect(q.subjectId).toBe(subjectId);
            expect(q.gradeId).toBe(gradeId);
            expect(q.unitId).toBe(unit.id);
            expect(q.id).toMatch(
              new RegExp(`^MINED-${expectedCode}-(?:[1-9]G|10G|11G|1B|2B)-U\\d{2}-Q\\d{3}$`)
            );

            expect(seenQuestionIds.has(q.id), `Duplicate question ID ${q.id}`).toBe(false);
            seenQuestionIds.add(q.id);

            expect(q.options.length).toBe(4);
            expect(new Set(q.options).size).toBe(4);
            expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
            keyCounts[q.correctAnswer]++;

            expect(q.officialBookRef).toMatch(/MINED|ESMATE|ESLENGUA|LIBRO|UNIDAD/i);

            // Both distractorRationale (singular) and distractorRationales (plural) must be populated on all 229 units
            expect(q.distractorRationale, `Missing distractorRationale on ${q.id}`).toBeDefined();
            expect(q.distractorRationales, `Missing distractorRationales on ${q.id}`).toBeDefined();
            expect(q.distractorRationale!.A.length).toBeGreaterThan(15);
            expect(q.distractorRationale!.B.length).toBeGreaterThan(15);
            expect(q.distractorRationale!.C.length).toBeGreaterThan(15);
            expect(q.distractorRationale!.D.length).toBeGreaterThan(15);

            if (subjectId !== 'matematica-esmate') {
              assertBalancedAndValidKaTeX(q.statement, `${q.id}.statement`);
              assertBalancedAndValidKaTeX(q.explanation, `${q.id}.explanation`);
              q.options.forEach((opt, oIdx) => {
                assertBalancedAndValidKaTeX(opt, `${q.id}.options[${oIdx}]`);
              });
            }
          });

          // Balanced answer distribution (12 or 13 per key)
          expect(keyCounts.A).toBeGreaterThanOrEqual(10);
          expect(keyCounts.B).toBeGreaterThanOrEqual(10);
          expect(keyCounts.C).toBeGreaterThanOrEqual(10);
          expect(keyCounts.D).toBeGreaterThanOrEqual(10);
        });

        // 229 units * 50 questions = 11,450 unique questions
        expect(seenQuestionIds.size).toBe(11450);

        // Verify buildFallback50Questions uses subject-specific IDs and bookName
        const sampleUnit = getUnit('4-grado', 'mined-cie-4g-u01')!;
        const fallbackQs = buildFallback50Questions(sampleUnit, '4-grado', 'ciencia-tecnologia');
        expect(fallbackQs.length).toBe(50);
        expect(fallbackQs[0].id).toMatch(/^MINED-CIE-4G-U01-Q001$/);
        expect(fallbackQs[0].officialBookRef).toContain('MINED Ciencia y Tecnología');
      },
      20000
    );
  });

  describe('5. Search & UI Rendering of Multi-Subject Reinforcement View', () => {
    it('finds multi-subject units and lessons via searchCurriculum()', () => {
      const eslenguaResults = searchCurriculum('Coherencia Discursiva');
      expect(eslenguaResults.length).toBeGreaterThan(0);
      expect(eslenguaResults.some((r) => r.subjectId === 'lenguaje-eslengua')).toBe(true);

      const finanzasResults = searchCurriculum('Presupuesto Familiar');
      expect(finanzasResults.length).toBeGreaterThan(0);
      expect(finanzasResults.some((r) => r.subjectId === 'educacion-financiera')).toBe(true);

      const artesResults = searchCurriculum('Armonía Cromática');
      expect(artesResults.length).toBeGreaterThan(0);
      expect(artesResults.some((r) => r.subjectId === 'educacion-artistica')).toBe(true);
    });

    it('renders AcademicReinforcementView with all 7 subject tabs and the Biblioteca Textual Oficial MINED', () => {
      const html = renderToStaticMarkup(React.createElement(AcademicReinforcementView));
      expect(html).toContain('Refuerzo Académico (1° a 9° Grado y Bachillerato)');
      expect(html).toContain('Matemática (ESMATE)');
      expect(html).toContain('Lengua y Literatura (ESLENGUA)');
      expect(html).toContain('Ciencia y Tecnología');
      expect(html).toContain('Ciudadanía y Valores');
      expect(html).toContain('Educación Artística (Artes)');
      expect(html).toContain('Educación Física');
      expect(html).toContain('Finanzas y Economía');
      expect(html).toContain('Biblioteca Textual Oficial MINED');
      expect(html).toContain('Leer Contenido Oficial');
      expect(html).not.toContain('Abrir PDF Oficial');
    });
  });

  describe('6. Mined Textual Library Integrity (public/mined-texts & minedTextService)', () => {
    const MINED_TEXTS_DIR = path.resolve(__dirname, '../public/mined-texts');
    const MINED_MEDIA_DIR = path.join(MINED_TEXTS_DIR, 'media');

    beforeEach(() => {
      clearMinedTextCache();
      vi.restoreAllMocks();
    });

    it('contains valid public/mined-texts/index.json with all 98 resources and corresponding JSON files', () => {
      const indexPath = path.join(MINED_TEXTS_DIR, 'index.json');
      expect(fs.existsSync(indexPath)).toBe(true);

      const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
      expect(indexData.totalResources).toBe(98);
      expect(Array.isArray(indexData.resources)).toBe(true);
      expect(indexData.resources.length).toBe(98);

      const validCoverages = new Set(['full', 'partial', 'image', 'unavailable']);
      for (const entry of indexData.resources) {
        expect(entry.id).toMatch(/^mined-res-\d{3}$/);
        expect(validCoverages.has(entry.textCoverage)).toBe(true);
        const docPath = path.join(MINED_TEXTS_DIR, `${entry.id}.json`);
        expect(fs.existsSync(docPath), `Falta archivo textual ${entry.id}.json`).toBe(true);
      }

      expect(indexData.summary.image).toBe(2);
      expect(indexData.summary.unavailable).toBeGreaterThanOrEqual(1);
    });

    it('contains both Primera Infancia JPEG infographics in public/mined-texts/media/', () => {
      const img1 = path.join(MINED_MEDIA_DIR, 'mensaje-institucional-1.jpeg');
      const img2 = path.join(MINED_MEDIA_DIR, 'mensaje-institucional-2.jpeg');

      expect(fs.existsSync(img1)).toBe(true);
      expect(fs.existsSync(img2)).toBe(true);
      expect(fs.statSync(img1).size).toBeGreaterThan(1000);
      expect(fs.statSync(img2).size).toBeGreaterThan(1000);
    });

    it('minedTextService loads index/documents with cache and searches accents-insensitively', async () => {
      const indexPath = path.join(MINED_TEXTS_DIR, 'index.json');
      const realIndexJson = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
      const firstFullEntry = realIndexJson.resources.find(
        (r: { textCoverage: string }) => r.textCoverage === 'full'
      );
      expect(firstFullEntry).toBeDefined();

      const realDocJson: MinedTextDocument = JSON.parse(
        fs.readFileSync(path.join(MINED_TEXTS_DIR, `${firstFullEntry.id}.json`), 'utf-8')
      );

      const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
        const url = String(input);
        if (url.endsWith('/mined-texts/index.json')) {
          return new Response(JSON.stringify(realIndexJson), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        if (url.endsWith(`/mined-texts/${firstFullEntry.id}.json`)) {
          return new Response(JSON.stringify(realDocJson), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return new Response('Not Found', { status: 404 });
      });

      vi.stubGlobal('fetch', fetchMock);

      const idx1 = await getMinedTextIndex();
      const idx2 = await getMinedTextIndex();
      expect(idx1.totalResources).toBe(98);
      expect(idx2).toBe(idx1);

      const doc1 = await loadMinedTextDocument(firstFullEntry.id);
      const doc2 = await loadMinedTextDocument(firstFullEntry.id);
      expect(doc1.id).toBe(firstFullEntry.id);
      expect(doc1.pages.length).toBeGreaterThan(0);
      expect(doc2).toBe(doc1);
      // Only 2 fetches total (index + 1 document) due to in-memory cache
      expect(fetchMock).toHaveBeenCalledTimes(2);

      // Search inside document
      const sampleDoc: MinedTextDocument = {
        ...doc1,
        pages: [
          {
            pageNumber: 1,
            text: 'Educación Básica y Matemática para El Salvador.',
            charCount: 47,
          },
          {
            pageNumber: 2,
            text: 'Comunicación y lectura comprensiva.',
            charCount: 35,
          },
        ],
      };
      const matches = searchInMinedTextDocument(sampleDoc, 'educacion');
      expect(matches.length).toBe(1);
      expect(matches[0].pageNumber).toBe(1);
      expect(matches[0].matchCount).toBe(1);
      expect(searchInMinedTextDocument(sampleDoc, 'a').length).toBe(0);
    });
  });
});

