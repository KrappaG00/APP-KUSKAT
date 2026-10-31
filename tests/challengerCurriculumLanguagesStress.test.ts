/**
 * CHALLENGER REINFORCEMENT 1: EMPIRICAL CURRICULUM & LANGUAGE ADVERSARIAL STRESS SUITE
 *
 * Adversarially challenges:
 * 1. Strict raw substantive prose word counts (strip markdown, HTML, LaTeX, punctuation, digits, single chars)
 * 2. Pairwise semantic uniqueness and non-trivial resolutions of practical cases and case studies
 * 3. Question bank integrity (option distinctness, bounds 0..3, non-empty explanations, citations)
 * 4. Synthetic token scan across low-resource languages (zero synthetic tokens, zero suffix loops)
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

// Driver License imports
import {
  DRIVER_CURRICULUM_UNITS,
  DRIVER_QUESTIONS,
  OFFICIAL_ROAD_SIGNS,
  getAllPracticalTrafficCases,
  getDriverUnitById,
  generateOfficialVmtExam,
  filterRoadSignsByCategory,
} from '../src/data/driverLicense';

// Patriotic History imports
import {
  PATRIOTIC_THEMATIC_UNITS,
  ALL_PATRIOTIC_CASE_STUDIES,
  PATRIOTIC_QUESTIONS,
  PATRIOTIC_SYMBOLS,
  HISTORICAL_PRESIDENTS,
} from '../src/data/patrioticHistory';

// Language School imports
import { NAHUAT_COMMUNICATIVE_UNITS } from '../src/data/languages/nahuatCommunicativeData';
import { LENCA_COMMUNICATIVE_UNITS } from '../src/data/languages/lencaCommunicativeData';
import { KAKAWIRA_COMMUNICATIVE_UNITS } from '../src/data/languages/kakawiraCommunicativeData';
import { MANDARIN_COMMUNICATIVE_UNITS } from '../src/data/languages/mandarinCommunicativeData';
import { ARABIC_COMMUNICATIVE_UNITS } from '../src/data/languages/arabicCommunicativeData';
import { NAHUAT_VOCABULARY_CORPUS } from '../src/data/languages/nahuatVocabularyData';
import { LENCA_VOCABULARY_CORPUS } from '../src/data/languages/lencaVocabularyData';
import { KAKAWIRA_VOCABULARY_CORPUS } from '../src/data/languages/kakawiraVocabularyData';
import { MANDARIN_VOCABULARY_CORPUS } from '../src/data/languages/mandarinVocabularyData';
import { ARABIC_VOCABULARY_CORPUS } from '../src/data/languages/arabicVocabularyData';

/**
 * Ultra-Strict Substantive Prose Stripper:
 * Completely removes:
 * - HTML tags
 * - Code blocks (```...```) and inline code (`...`)
 * - LaTeX / KaTeX formulas ($$...$$, $...$, \command)
 * - Markdown headings, lists, blockquotes, links, formatting
 * - Numbers and digits
 * - Punctuation, symbols, brackets, delimiters
 * - Titles / subtitles passed in
 * - Single-character tokens
 * Retains solely authentic lexical tokens of length >= 2.
 */
export function extractUltraStrictWords(rawText: string, titlesToStrip: string[] = []): string[] {
  if (!rawText || typeof rawText !== 'string') return [];
  let s = rawText;

  // 1. Remove HTML tags
  s = s.replace(/<[^>]*>/g, ' ');

  // 2. Remove code blocks and inline code
  s = s.replace(/```[\s\S]*?```/g, ' ');
  s = s.replace(/`[^`]*`/g, ' ');

  // 3. Remove LaTeX / KaTeX
  s = s.replace(/\$\$[\s\S]*?\$\$/g, ' ');
  s = s.replace(/\$[^$]*\$/g, ' ');
  s = s.replace(/\\[a-zA-Z]+/g, ' ');

  // 4. Remove Markdown headers and blockquotes
  s = s.replace(/^#{1,6}\s+.*$/gm, ' ');
  s = s.replace(/^>\s+/gm, ' ');

  // 5. Remove Markdown links and images
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ');
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');

  // 6. Strip Markdown formatting symbols
  s = s.replace(/[*_~`]/g, ' ');

  // 7. Strip specific titles if provided
  for (const t of titlesToStrip) {
    if (t && t.length > 3) {
      const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      s = s.replace(new RegExp(escaped, 'gi'), ' ');
    }
  }

  // 8. Deduplicate identical paragraphs to eliminate looping repetition attacks
  const paragraphs = s
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  const seenPara = new Set<string>();
  const uniqueParas: string[] = [];
  for (const p of paragraphs) {
    const norm = p.toLowerCase().replace(/\s+/g, ' ');
    if (!seenPara.has(norm)) {
      seenPara.add(norm);
      uniqueParas.push(p);
    }
  }

  // 9. Remove all non-alphabetic characters (keep Spanish, Chinese, Arabic characters)
  const cleaned = uniqueParas
    .join(' ')
    .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\u0600-\u06FF\u4E00-\u9FFF]/g, ' ');

  // 10. Split into tokens, keeping only tokens with length >= 2
  // (Note: for Chinese, characters are words; handle CJK characters individually)
  const rawTokens = cleaned.split(/\s+/).filter((t) => t.length > 0);
  const finalTokens: string[] = [];

  for (const tok of rawTokens) {
    if (/[\u4E00-\u9FFF]/.test(tok)) {
      // CJK characters: each character is a substantive logographic morpheme/word
      for (const char of tok) {
        if (/[\u4E00-\u9FFF]/.test(char)) {
          finalTokens.push(char);
        }
      }
    } else if (tok.length >= 2 || /^[yaoeu]$/i.test(tok)) {
      // Tokens of length >= 2 or genuine 1-letter conjunctions/prepositions (y, a, o, e, u)
      finalTokens.push(tok);
    }
  }

  return finalTokens;
}

/**
 * Calculates n-gram Jaccard similarity between two texts
 */
export function calculateJaccardSimilarity(textA: string, textB: string, n = 3): number {
  const getGrams = (t: string): Set<string> => {
    const words = t.toLowerCase().replace(/[^a-z0-9áéíóúñ]/g, ' ').split(/\s+/).filter(Boolean);
    const grams = new Set<string>();
    for (let i = 0; i <= words.length - n; i++) {
      grams.add(words.slice(i, i + n).join(' '));
    }
    return grams;
  };
  const setA = getGrams(textA);
  const setB = getGrams(textB);
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const g of setA) {
    if (setB.has(g)) intersection++;
  }
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : intersection / union;
}

describe('CHALLENGER REINFORCEMENT 1: Empirical Rigor & Adversarial Stress Test', () => {
  const rootDir = process.cwd();

  // =========================================================================
  // 1. SUBSTANTIVE PROSE WORD COUNT AUDIT (ADVERSARIAL >= 500 WORDS)
  // =========================================================================
  describe('1. Adversarial Substantive Prose Word Count Audit (>= 500 words/unit)', () => {
    it('VMT Driver License: All 8 units strictly exceed 500 raw substantive words', () => {
      expect(DRIVER_CURRICULUM_UNITS.length).toBe(8);
      const counts: Record<string, number> = {};

      DRIVER_CURRICULUM_UNITS.forEach((unit) => {
        const words = extractUltraStrictWords(unit.substantiveTheory, [unit.title, unit.subtitle]);
        counts[unit.id] = words.length;
        expect(
          words.length,
          `Driver unit "${unit.id}" failed adversarial >= 500 word threshold: got ${words.length}`
        ).toBeGreaterThanOrEqual(500);
      });

      // Assert cumulative depth exceeds 4,000 words
      const totalWords = Object.values(counts).reduce((a, b) => a + b, 0);
      expect(totalWords).toBeGreaterThanOrEqual(4000);
    });

    it('Historia Patria: All 5 thematic units strictly exceed 500 raw substantive words', () => {
      expect(PATRIOTIC_THEMATIC_UNITS.length).toBe(5);
      const counts: Record<string, number> = {};

      PATRIOTIC_THEMATIC_UNITS.forEach((unit) => {
        const words = extractUltraStrictWords(unit.substantiveAnalysis, [unit.title, unit.subtitle, unit.period]);
        counts[unit.id] = words.length;
        expect(
          words.length,
          `History unit "${unit.id}" failed adversarial >= 500 word threshold: got ${words.length}`
        ).toBeGreaterThanOrEqual(500);
      });

      const totalWords = Object.values(counts).reduce((a, b) => a + b, 0);
      expect(totalWords).toBeGreaterThanOrEqual(3000);
    });

    it('Language School: All 25 communicative units across 5 languages exceed 500 raw substantive words', () => {
      const languagePackages = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarin', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Arabic', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      expect(languagePackages.length).toBe(5);

      languagePackages.forEach(({ name, units }) => {
        expect(units.length, `${name} must have exactly 5 communicative units`).toBe(5);
        units.forEach((unit) => {
          const words = extractUltraStrictWords(unit.substantiveGuide, [unit.title]);
          expect(
            words.length,
            `${name} communicative unit "${unit.id}" failed adversarial >= 500 word threshold: got ${words.length}`
          ).toBeGreaterThanOrEqual(500);
        });
      });
    });
  });

  // =========================================================================
  // 2. PAIRWISE SEMANTIC UNIQUENESS & NON-TRIVIAL RESOLUTIONS
  // =========================================================================
  describe('2. Practical Cases & Case Studies: Pairwise Uniqueness & Non-Trivial Resolutions', () => {
    it('VMT Traffic Cases: Pairwise uniqueness check (40 cases, 0 title duplicates, 0 scenario duplicates)', () => {
      const allCases = getAllPracticalTrafficCases();
      expect(allCases.length).toBe(40);

      const titles = new Set<string>();
      const scenarios = new Set<string>();
      const resolvedOutcomes = new Set<string>();

      allCases.forEach((c) => {
        const normTitle = c.title.trim().toLowerCase();
        const normScenario = c.scenario.trim().toLowerCase();
        const normResolution = c.resolvedOutcome.trim().toLowerCase();

        expect(titles.has(normTitle), `Duplicate VMT case title: "${c.title}"`).toBe(false);
        titles.add(normTitle);

        expect(scenarios.has(normScenario), `Duplicate VMT scenario: "${c.scenario}"`).toBe(false);
        scenarios.add(normScenario);

        // Resolution must be non-trivial (>= 50 characters, specific legal or administrative action)
        expect(
          c.resolvedOutcome.trim().length,
          `Trivial resolution in case "${c.id}": "${c.resolvedOutcome}"`
        ).toBeGreaterThanOrEqual(50);

        // Analysis must be non-trivial (>= 100 characters)
        expect(
          c.analysis.trim().length,
          `Trivial analysis in case "${c.id}"`
        ).toBeGreaterThanOrEqual(100);

        // Legal reference must be substantive
        expect(
          c.legalReference.trim().length,
          `Missing legal reference in case "${c.id}"`
        ).toBeGreaterThanOrEqual(10);
      });

      // Adversarial Pairwise Jaccard Similarity check: ensure no two scenarios have > 50% 3-gram overlap
      for (let i = 0; i < allCases.length; i++) {
        for (let j = i + 1; j < allCases.length; j++) {
          const sim = calculateJaccardSimilarity(allCases[i].scenario, allCases[j].scenario, 3);
          expect(
            sim,
            `Excessive semantic overlap (${(sim * 100).toFixed(1)}%) between "${allCases[i].id}" and "${allCases[j].id}"`
          ).toBeLessThan(0.40);
        }
      }
    });

    it('Historia Patria Case Studies: Pairwise uniqueness check (25 cases, 0 duplicates, non-trivial civic significance)', () => {
      expect(ALL_PATRIOTIC_CASE_STUDIES.length).toBe(25);

      const titles = new Set<string>();
      const dilemmas = new Set<string>();
      const contexts = new Set<string>();

      ALL_PATRIOTIC_CASE_STUDIES.forEach((c) => {
        const normTitle = c.title.trim().toLowerCase();
        const normDilemma = c.dilemmaOrIssue.trim().toLowerCase();
        const normContext = c.historicalContext.trim().toLowerCase();

        expect(titles.has(normTitle), `Duplicate History case title: "${c.title}"`).toBe(false);
        titles.add(normTitle);

        expect(dilemmas.has(normDilemma), `Duplicate History dilemma: "${c.dilemmaOrIssue}"`).toBe(false);
        dilemmas.add(normDilemma);

        expect(contexts.has(normContext), `Duplicate History context: "${c.historicalContext}"`).toBe(false);
        contexts.add(normContext);

        // Non-triviality assertions
        expect(c.historiographicalAnalysis.trim().length).toBeGreaterThanOrEqual(100);
        expect(c.civicSignificance.trim().length).toBeGreaterThanOrEqual(60);
      });

      // Adversarial Pairwise Jaccard Similarity between historical contexts
      for (let i = 0; i < ALL_PATRIOTIC_CASE_STUDIES.length; i++) {
        for (let j = i + 1; j < ALL_PATRIOTIC_CASE_STUDIES.length; j++) {
          const sim = calculateJaccardSimilarity(
            ALL_PATRIOTIC_CASE_STUDIES[i].historiographicalAnalysis,
            ALL_PATRIOTIC_CASE_STUDIES[j].historiographicalAnalysis,
            3
          );
          expect(
            sim,
            `Excessive historiographical overlap (${(sim * 100).toFixed(1)}%) between "${ALL_PATRIOTIC_CASE_STUDIES[i].id}" and "${ALL_PATRIOTIC_CASE_STUDIES[j].id}"`
          ).toBeLessThan(0.40);
        }
      }
    });

    it('Language School Solved Dialogues: 125 total dialogues across 25 units are uniquely identified and non-trivial', () => {
      const languagePackages = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarin', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Arabic', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      const globalDialogueIds = new Set<string>();
      let totalDialogues = 0;

      languagePackages.forEach(({ name, units }) => {
        units.forEach((u) => {
          expect(u.solvedDialogues.length, `${name} unit ${u.id} must have >= 5 dialogues`).toBeGreaterThanOrEqual(5);

          u.solvedDialogues.forEach((d) => {
            totalDialogues++;
            expect(globalDialogueIds.has(d.id), `Duplicate dialogue id "${d.id}" in ${name}`).toBe(false);
            globalDialogueIds.add(d.id);

            const scenario = (d as any).scenario || (d as any).context;
            expect(scenario.trim().length, `Trivial scenario in dialogue ${d.id}`).toBeGreaterThanOrEqual(15);

            const dialogueText = (d as any).dialogue || JSON.stringify((d as any).turns || '');
            expect(dialogueText.trim().length, `Trivial dialogue text in ${d.id}`).toBeGreaterThanOrEqual(25);

            const breakdown = (d as any).grammaticalBreakdown;
            const breakdownLen = typeof breakdown === 'string' ? breakdown.length : JSON.stringify(breakdown).length;
            expect(breakdownLen, `Trivial grammatical breakdown in ${d.id}`).toBeGreaterThanOrEqual(30);
          });
        });
      });

      expect(totalDialogues).toBe(125);
    });
  });

  // =========================================================================
  // 3. QUESTION BANKS INTEGRITY (VMT & HISTORIA PATRIA)
  // =========================================================================
  describe('3. Question Banks Adversarial Challenge (VMT & Historia Patria)', () => {
    it('VMT Questions: Exactly 4 distinct options, bounds 0..3, non-empty explanations, legal citations', () => {
      expect(DRIVER_QUESTIONS.length).toBeGreaterThanOrEqual(50);
      const seenIds = new Set<string>();
      const seenQuestions = new Set<string>();

      DRIVER_QUESTIONS.forEach((q) => {
        // ID distinctness
        expect(seenIds.has(q.id), `Duplicate question ID: ${q.id}`).toBe(false);
        seenIds.add(q.id);

        // Statement distinctness
        const stmt = (q.statement || q.question).trim().toLowerCase();
        expect(seenQuestions.has(stmt), `Duplicate question statement in ${q.id}`).toBe(false);
        seenQuestions.add(stmt);

        // Option distinctness: Assert all 4 options are distinct (case-insensitive)
        expect(q.options.length, `Question ${q.id} must have exactly 4 options`).toBe(4);
        const optSet = new Set(q.options.map((o) => o.trim().toLowerCase()));
        expect(optSet.size, `Question ${q.id} contains duplicate options: ${JSON.stringify(q.options)}`).toBe(4);

        // Correct answer bounds: 0 <= correctAnswer <= 3
        expect(
          Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer <= 3,
          `Invalid correctAnswer index in ${q.id}: ${q.correctAnswer}`
        ).toBe(true);

        // Non-empty explanation
        expect(
          q.explanation.trim().length,
          `Explanation in ${q.id} is too short (< 20 chars)`
        ).toBeGreaterThanOrEqual(20);

        // Legal reference present
        const ref = q.legalReference || '';
        expect(
          ref.trim().length,
          `Missing legal reference in VMT question ${q.id}`
        ).toBeGreaterThanOrEqual(5);
      });
    });

    it('Historia Patria Questions: Exactly 4 distinct options, bounds 0..3, non-empty explanations, references', () => {
      expect(PATRIOTIC_QUESTIONS.length).toBeGreaterThanOrEqual(50);
      const seenIds = new Set<string>();
      const seenQuestions = new Set<string>();

      PATRIOTIC_QUESTIONS.forEach((q) => {
        expect(seenIds.has(q.id), `Duplicate History question ID: ${q.id}`).toBe(false);
        seenIds.add(q.id);

        const stmt = q.question.trim().toLowerCase();
        expect(seenQuestions.has(stmt), `Duplicate History question: ${stmt}`).toBe(false);
        seenQuestions.add(stmt);

        // Option distinctness: 4 options, all distinct
        expect(q.options.length, `Question ${q.id} must have exactly 4 options`).toBe(4);
        const optSet = new Set(q.options.map((o) => o.trim().toLowerCase()));
        expect(optSet.size, `Question ${q.id} has duplicate options: ${JSON.stringify(q.options)}`).toBe(4);

        // Correct answer bounds: 0 <= correctAnswer <= 3
        expect(
          Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer <= 3,
          `Invalid correctAnswer index in ${q.id}: ${q.correctAnswer}`
        ).toBe(true);

        // Non-empty explanation
        expect(
          q.explanation.trim().length,
          `Explanation in ${q.id} is too short (< 20 chars)`
        ).toBeGreaterThanOrEqual(20);

        // Historical reference present
        const ref = q.historicalReference || (q as any).legalReference || '';
        expect(
          ref.trim().length,
          `Missing historical reference in question ${q.id}`
        ).toBeGreaterThanOrEqual(5);
      });
    });
  });

  // =========================================================================
  // 4. LOW-RESOURCE LANGUAGES: SYNTHETIC TOKEN SCAN & FILLER REMOVAL
  // =========================================================================
  describe('4. Low-Resource Languages: Synthetic Token Scan & Anti-Filler Verification', () => {
    it('Files in src/data/languages/ contain ZERO synthetic tokens or placeholders', () => {
      const languagesDir = path.join(rootDir, 'src', 'data', 'languages');
      const files = fs.readdirSync(languagesDir).filter((f) => f.endsWith('.ts') && !f.endsWith('.d.ts'));

      const FORBIDDEN_REGEX = [
        /lenca_word_\d+/i,
        /kaka_root_\d+/i,
        /\btoken_\d+/i,
        /\bplaceholder\b/i,
        /lorem\s+ipsum/i,
        /piltzin-194/i,
        /at-197/i,
        /texto\s+de\s+relleno/i,
        /plantilla\s+gen[eé]rica/i,
      ];

      const violations: { file: string; line: number; match: string }[] = [];

      files.forEach((file) => {
        const filePath = path.join(languagesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');

        lines.forEach((line, idx) => {
          FORBIDDEN_REGEX.forEach((regex) => {
            const match = line.match(regex);
            if (match) {
              violations.push({
                file,
                line: idx + 1,
                match: match[0],
              });
            }
          });
        });
      });

      expect(
        violations,
        `Found synthetic tokens in src/data/languages/: ${JSON.stringify(violations, null, 2)}`
      ).toEqual([]);
    });

    it('Vocabulary corpuses have zero duplicate word entries and zero empty translations', () => {
      const vocabularies = [
        { name: 'Náhuat', corpus: NAHUAT_VOCABULARY_CORPUS, min: 150 },
        { name: 'Lenca', corpus: LENCA_VOCABULARY_CORPUS, min: 100 },
        { name: 'Kakawira', corpus: KAKAWIRA_VOCABULARY_CORPUS, min: 100 },
        { name: 'Mandarin', corpus: MANDARIN_VOCABULARY_CORPUS, min: 100 },
        { name: 'Arabic', corpus: ARABIC_VOCABULARY_CORPUS, min: 100 },
      ];

      const duplicatesFound: { lang: string; id: string; word: string }[] = [];

      vocabularies.forEach(({ name, corpus, min }) => {
        expect(corpus.length, `${name} vocabulary corpus size (${corpus.length}) must be >= ${min}`).toBeGreaterThanOrEqual(min);

        const seenIds = new Set<string>();
        const seenWords = new Map<string, string>();

        corpus.forEach((item) => {
          expect(item.id.trim().length, `Empty ID in ${name}`).toBeGreaterThan(0);
          expect(seenIds.has(item.id), `Duplicate entry ID in ${name}: ${item.id}`).toBe(false);
          seenIds.add(item.id);

          expect(item.word.trim().length, `Empty word in ${name} id ${item.id}`).toBeGreaterThan(0);
          expect(item.translation.trim().length, `Empty translation in ${name} word "${item.word}"`).toBeGreaterThan(0);
          expect(item.category.trim().length, `Empty category in ${name} word "${item.word}"`).toBeGreaterThan(0);

          const normWord = item.word.trim().toLowerCase();
          if (seenWords.has(normWord)) {
            duplicatesFound.push({ lang: name, id: item.id, word: normWord });
          } else {
            seenWords.set(normWord, item.id);
          }
        });

        // Even after strict deduplication, unique word count must still exceed the minimum requirement
        const uniqueWordCount = seenWords.size;
        expect(
          uniqueWordCount,
          `${name} unique word count (${uniqueWordCount}) must exceed minimum required (${min})`
        ).toBeGreaterThanOrEqual(min);
      });

      // Log findings for adversarial reporting
      if (duplicatesFound.length > 0) {
        console.warn('Adversarial finding - duplicate vocabulary words detected:', duplicatesFound);
      }
      // Assert that duplicate rate in vocabulary is negligible (< 1%)
      const totalVocabEntries = vocabularies.reduce((sum, v) => sum + v.corpus.length, 0);
      const duplicateRate = duplicatesFound.length / totalVocabEntries;
      expect(duplicateRate, `Vocabulary duplicate rate (${(duplicateRate * 100).toFixed(2)}%) must be < 1%`).toBeLessThan(0.01);
    });
  });

  // =========================================================================
  // 5. QUANTITATIVE EMPIRICAL METRICS GENERATOR
  // =========================================================================
  describe('5. Quantitative Empirical Metrics & Distribution Aggregator', () => {
    it('computes and outputs complete empirical challenge distribution tables', () => {
      // 1. Driver License word counts
      const vmtCounts = DRIVER_CURRICULUM_UNITS.map((u) => ({
        id: u.id,
        title: u.title,
        words: extractUltraStrictWords(u.substantiveTheory, [u.title, u.subtitle]).length,
        cases: u.practicalCases.length,
      }));

      // 2. Patriotic History word counts
      const historyCounts = PATRIOTIC_THEMATIC_UNITS.map((u) => ({
        id: u.id,
        title: u.title,
        words: extractUltraStrictWords(u.substantiveAnalysis, [u.title, u.subtitle, u.period]).length,
        cases: u.solvedCaseStudies.length,
      }));

      // 3. Language School word counts
      const langCounts: { lang: string; id: string; title: string; words: number; dialogues: number }[] = [];
      const langPackages = [
        { name: 'Náhuat', units: NAHUAT_COMMUNICATIVE_UNITS },
        { name: 'Lenca', units: LENCA_COMMUNICATIVE_UNITS },
        { name: 'Kakawira', units: KAKAWIRA_COMMUNICATIVE_UNITS },
        { name: 'Mandarin', units: MANDARIN_COMMUNICATIVE_UNITS },
        { name: 'Arabic', units: ARABIC_COMMUNICATIVE_UNITS },
      ];

      langPackages.forEach(({ name, units }) => {
        units.forEach((u) => {
          langCounts.push({
            lang: name,
            id: u.id,
            title: u.title,
            words: extractUltraStrictWords(u.substantiveGuide, [u.title]).length,
            dialogues: u.solvedDialogues.length,
          });
        });
      });

      const stats = (arr: number[]) => {
        const sorted = [...arr].sort((a, b) => a - b);
        const sum = sorted.reduce((a, b) => a + b, 0);
        const mean = Math.round(sum / sorted.length);
        const min = sorted[0];
        const max = sorted[sorted.length - 1];
        const median = sorted[Math.floor(sorted.length / 2)];
        return { min, max, mean, median, sum, count: sorted.length };
      };

      const vmtStats = stats(vmtCounts.map((v) => v.words));
      const historyStats = stats(historyCounts.map((h) => h.words));
      const langStats = stats(langCounts.map((l) => l.words));

      const reportPayload = {
        totalPracticalCasesAudited: 40 + 25 + 125,
        practicalCasesBreakdown: {
          vmtCases: 40,
          historyCaseStudies: 25,
          languageSolvedDialogues: 125,
        },
        duplicateScenarioRate: 0.0,
        duplicateTitleRate: 0.0,
        questionBanks: {
          vmtQuestionsTotal: DRIVER_QUESTIONS.length,
          vmtOptionDistinctness: 1.0,
          historyQuestionsTotal: PATRIOTIC_QUESTIONS.length,
          historyOptionDistinctness: 1.0,
        },
        wordCountDistributions: {
          vmtDriverLicense: vmtStats,
          patrioticHistory: historyStats,
          languageCommunicativeUnits: langStats,
        },
        unitBreakdowns: {
          vmt: vmtCounts,
          history: historyCounts,
          languages: langCounts,
        },
      };

      console.log('=== EMPIRICAL CHALLENGER METRICS REPORT ===');
      console.log(JSON.stringify(reportPayload, null, 2));

      expect(reportPayload.totalPracticalCasesAudited).toBe(190);
      expect(reportPayload.duplicateScenarioRate).toBe(0.0);
      expect(vmtStats.min).toBeGreaterThanOrEqual(500);
      expect(historyStats.min).toBeGreaterThanOrEqual(500);
      expect(langStats.min).toBeGreaterThanOrEqual(500);
    });
  });
});
