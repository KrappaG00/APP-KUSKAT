/**
 * EMPIRICAL ADVERSARIAL STRESS TEST SUITE: GOOGLE ADSENSE GUARDS & CRAWLABLE ASSETS
 *
 * Authored by: challenger_reinforcement_2
 * Scope:
 * 1. Adversarial boundary & edge-case testing of AdBanner & LateralAdRails content guards
 * 2. Static and architectural inspection of screen ad placements (CategoryHierarchyViewer & PracticeMode)
 * 3. Crawlable asset verification: index.html (>3,500 static words, Schema.org JSON-LD), ads.txt, robots.txt, sitemap.xml
 */

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { AdBanner, countSubstantiveWords } from '../src/components/AdBanner';
import { LateralAdRails } from '../src/components/LateralAdRails';

describe('Adversarial Challenge: Google AdSense Guards & Crawlable Assets', () => {
  const rootDir = process.cwd();

  // Helper to generate N authentic Latin words of 3+ letters to avoid single-letter truncation
  const generateWordCorpus = (count: number): string => {
    const vocabulary = [
      'legislacion', 'transito', 'seguridad', 'vehiculo', 'conductor',
      'velocidad', 'prioridad', 'interseccion', 'redondel', 'normativa',
      'historia', 'cuscatlan', 'independencia', 'republica', 'constitucion',
      'nahuat', 'lenguaje', 'dialogo', 'gramatica', 'cultura'
    ];
    const words: string[] = [];
    for (let i = 0; i < count; i++) {
      words.push(vocabulary[i % vocabulary.length]);
    }
    return words.join(' ');
  };

  // =========================================================================
  // 1. ADVERSARIAL CONTENT GUARDS (AdBanner & LateralAdRails)
  // =========================================================================
  describe('1. Content Guards: Boundary and Edge Cases', () => {
    it('AdBanner: edge case isLoading=true completely suppresses rendering (returns null)', () => {
      const html = renderToStaticMarkup(
        React.createElement(AdBanner, {
          isLoading: true,
          hasPublisherContent: true,
          contentSnippet: generateWordCorpus(600),
          minSubstantiveWords: 500,
        })
      );
      expect(html).toBe('');
    });

    it('AdBanner: edge case isEmpty=true completely suppresses rendering (returns null)', () => {
      const html = renderToStaticMarkup(
        React.createElement(AdBanner, {
          isEmpty: true,
          isLoading: false,
          hasPublisherContent: true,
          contentSnippet: generateWordCorpus(600),
          minSubstantiveWords: 500,
        })
      );
      expect(html).toBe('');
    });

    it('AdBanner: edge case hasPublisherContent=false completely suppresses rendering (returns null)', () => {
      const html = renderToStaticMarkup(
        React.createElement(AdBanner, {
          hasPublisherContent: false,
          isLoading: false,
          isEmpty: false,
          contentSnippet: generateWordCorpus(600),
          minSubstantiveWords: 500,
        })
      );
      expect(html).toBe('');
    });

    it('AdBanner: boundary test at exactly 499 words vs 500 words when minSubstantiveWords=500', () => {
      const text499 = generateWordCorpus(499);
      const text500 = generateWordCorpus(500);
      const text501 = generateWordCorpus(501);

      // Verify word counter precision
      expect(countSubstantiveWords(text499)).toBe(499);
      expect(countSubstantiveWords(text500)).toBe(500);
      expect(countSubstantiveWords(text501)).toBe(501);

      // 499 words must be REJECTED (suppressed)
      const html499 = renderToStaticMarkup(
        React.createElement(AdBanner, {
          contentSnippet: text499,
          minSubstantiveWords: 500,
          hasPublisherContent: true,
          isLoading: false,
          isEmpty: false,
        })
      );
      expect(html499).toBe('');

      // 500 words must be ACCEPTED (rendered)
      const html500 = renderToStaticMarkup(
        React.createElement(AdBanner, {
          contentSnippet: text500,
          minSubstantiveWords: 500,
          hasPublisherContent: true,
          isLoading: false,
          isEmpty: false,
        })
      );
      expect(html500).toContain('ANUNCIO PATROCINADO POR GOOGLE ADS');
      expect(html500).toContain('ca-pub-4241045160320459');

      // 501 words must be ACCEPTED (rendered)
      const html501 = renderToStaticMarkup(
        React.createElement(AdBanner, {
          contentSnippet: text501,
          minSubstantiveWords: 500,
          hasPublisherContent: true,
          isLoading: false,
          isEmpty: false,
        })
      );
      expect(html501).toContain('ANUNCIO PATROCINADO POR GOOGLE ADS');
    });

    it('LateralAdRails: edge cases isLoading=true, isEmpty=true, hasPublisherContent=false suppress rails', () => {
      const central = React.createElement('p', null, 'Target Content');

      const htmlLoading = renderToStaticMarkup(
        React.createElement(LateralAdRails, { activeTab: 'practice', isLoading: true }, central)
      );
      expect(htmlLoading).not.toContain('kuskat-lateral-skyscraper');
      expect(htmlLoading).toContain('Target Content');

      const htmlEmpty = renderToStaticMarkup(
        React.createElement(LateralAdRails, { activeTab: 'practice', isEmpty: true }, central)
      );
      expect(htmlEmpty).not.toContain('kuskat-lateral-skyscraper');

      const htmlNoPub = renderToStaticMarkup(
        React.createElement(LateralAdRails, { activeTab: 'practice', hasPublisherContent: false }, central)
      );
      expect(htmlNoPub).not.toContain('kuskat-lateral-skyscraper');
    });

    it('LateralAdRails: boundary test at 499 words vs 500 words when minSubstantiveWords=500', () => {
      const central = React.createElement('p', null, 'Target Content');
      const text499 = generateWordCorpus(499);
      const text500 = generateWordCorpus(500);

      // 499 words must suppress rails
      const html499 = renderToStaticMarkup(
        React.createElement(
          LateralAdRails,
          {
            activeTab: 'practice',
            contentSnippet: text499,
            minSubstantiveWords: 500,
            hasPublisherContent: true,
            isLoading: false,
            isEmpty: false,
          },
          central
        )
      );
      expect(html499).not.toContain('kuskat-lateral-skyscraper');
      expect(html499).toContain('Target Content');

      // 500 words must mount rails
      const html500 = renderToStaticMarkup(
        React.createElement(
          LateralAdRails,
          {
            activeTab: 'practice',
            contentSnippet: text500,
            minSubstantiveWords: 500,
            hasPublisherContent: true,
            isLoading: false,
            isEmpty: false,
          },
          central
        )
      );
      expect(html500).toContain('kuskat-lateral-skyscraper');
      expect(html500).toContain('Target Content');
    });

    it('Source verification: Under ALL suppressed conditions, adsbygoogle.push is unreachable', () => {
      const adBannerSource = fs.readFileSync(path.join(rootDir, 'src/components/AdBanner.tsx'), 'utf-8');
      const lateralSource = fs.readFileSync(path.join(rootDir, 'src/components/LateralAdRails.tsx'), 'utf-8');

      [adBannerSource, lateralSource].forEach((code) => {
        // Assert isGuardedOut guards useEffect execution
        expect(code).toMatch(/if\s*\(\s*isGuardedOut\s*\)\s*\{\s*return;\s*\}/);
        // Assert component returns null or unwrapped children when guarded
        expect(code).toMatch(/if\s*\(\s*isGuardedOut\s*\)\s*\{\s*return\s+null;\s*\}/);
      });
    });
  });

  // =========================================================================
  // 2. SCREEN AD PLACEMENTS & POLICY AUDIT
  // =========================================================================
  describe('2. Screen Ad Placements: CategoryHierarchyViewer & PracticeMode Audit', () => {
    it('CategoryHierarchyViewer: Every AdBanner binds isLoading to loadingQuestions', () => {
      const categoriesPath = path.join(rootDir, 'src/components/CategoryHierarchyViewer.tsx');
      const code = fs.readFileSync(categoriesPath, 'utf-8');

      // Extract all AdBanner JSX instances
      const bannerMatches = code.match(/<AdBanner[\s\S]*?\/>/g);
      expect(bannerMatches).not.toBeNull();
      expect(bannerMatches!.length).toBe(5);

      bannerMatches!.forEach((banner) => {
        expect(banner).toContain('isLoading={loadingQuestions}');
        expect(banner).toContain('hasPublisherContent={hasSubstantiveCategoryContent}');
        expect(banner).toContain('isEmpty={filteredCategories.length === 0}');
      });
    });

    it('PracticeMode: Audit for ad stacking and missing content guards', () => {
      const practicePath = path.join(rootDir, 'src/components/PracticeMode.tsx');
      const code = fs.readFileSync(practicePath, 'utf-8');

      // Audit Pantalla 1: Lines 1488-1492 contain stacked ads
      const stackedBlock1 = code.match(
        /<AdBanner[^>]*slotId="4241045160_s_b3"[^>]*\/>\s*<AdBanner[^>]*slotId="4241045160_s_b4"[^>]*\/>\s*<AdBanner[^>]*slotId="4241045160_s_b5"[^>]*\/>/
      );

      // Audit Pantalla 3: Lines 2473-2499 contain 5 consecutive stacked ads
      const stackedBlock3 = code.match(
        /<AdBanner[^>]*slotId="4241045160_sr_b1"[^>]*\/>[\s\S]*?<AdBanner[^>]*slotId="4241045160_sr_b2"[^>]*\/>[\s\S]*?<AdBanner[^>]*slotId="4241045160_sr_b3"[^>]*\/>[\s\S]*?<AdBanner[^>]*slotId="4241045160_sr_b4"[^>]*\/>[\s\S]*?<AdBanner[^>]*slotId="4241045160_sr_b5"[^>]*\/>/
      );

      // These detect the presence of consecutive ad units without intervening publisher content
      const hasStackingInConfig = stackedBlock1 !== null;
      const hasStackingInResults = stackedBlock3 !== null;

      // Report empirical finding: Are there stacked ads in PracticeMode?
      // Google AdSense policies explicitly state: "Publishers may not place ads in a stacked format
      // (consecutive ad units without substantive editorial content separating them)."
      // We document this empirical observation:
      expect({
        hasStackingInConfig,
        hasStackingInResults,
      }).toEqual({
        hasStackingInConfig: true,
        hasStackingInResults: true,
      });
    });
  });

  // =========================================================================
  // 3. CRAWLABLE ASSETS & STRUCTURED METADATA
  // =========================================================================
  describe('3. Crawlable Assets: Static Semantic HTML, JSON-LD, ads.txt, robots.txt, sitemap.xml', () => {
    const indexHtmlPath = path.join(rootDir, 'index.html');
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

    it('index.html: exact static semantic text inside <div id="root"> has > 3,500 words', () => {
      const rootStart = indexHtml.indexOf('<div id="root">');
      expect(rootStart).toBeGreaterThan(-1);

      const rootEnd = indexHtml.lastIndexOf('</div>');
      expect(rootEnd).toBeGreaterThan(rootStart);

      const innerRoot = indexHtml.substring(rootStart + '<div id="root">'.length, rootEnd);
      const plainText = innerRoot.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const words = plainText.split(/\s+/).filter((w) => w.length > 0);

      console.log(`[EMPIRICAL METRIC] Static words inside <div id="root">: ${words.length}`);
      expect(words.length).toBeGreaterThan(3500);
      expect(words.length).toBeGreaterThanOrEqual(3700);
    });

    it('index.html: static content thoroughly details all 4 reinforced curriculum pillars', () => {
      expect(indexHtml).toContain('MINED-ESMATE');
      expect(indexHtml).toContain('Licencia de Conducir VMT');
      expect(indexHtml).toContain('Historia Patria, Civismo y Cultura Cuscatleca');
      expect(indexHtml).toContain('Escuela de Lenguas Originarias e Internacionales');
      expect(indexHtml).toContain('Náhuat');
      expect(indexHtml).toContain('Lenca Potón');
      expect(indexHtml).toContain('Kakawira');
    });

    it('index.html: JSON-LD block parses with JSON.parse and meets Schema.org requirements', () => {
      const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      expect(jsonLdMatch).not.toBeNull();

      const rawJson = jsonLdMatch![1].trim();
      let parsed: any;
      expect(() => {
        parsed = JSON.parse(rawJson);
      }).not.toThrow();

      expect(parsed['@context']).toBe('https://schema.org');
      expect(Array.isArray(parsed['@graph'])).toBe(true);

      const graph: any[] = parsed['@graph'];

      // EducationalOrganization entity
      const org = graph.find((item) => item['@type'] === 'EducationalOrganization');
      expect(org).toBeDefined();
      expect(org.name).toBe('KUSKAT - Plataforma Salvadoreña de Excelencia Académica y Científica');
      expect(org.url).toBe('https://kuskates.com/');
      expect(org.description.length).toBeGreaterThan(50);
      expect(org.areaServed).toBeDefined();

      // Course entities (at least 4)
      const courses = graph.filter((item) => item['@type'] === 'Course');
      console.log(`[EMPIRICAL METRIC] JSON-LD Entities: Total ${graph.length}, Courses: ${courses.length}`);
      courses.forEach((c) => console.log(`  - Course: ${c.name}`));
      expect(courses.length).toBeGreaterThanOrEqual(4);

      courses.forEach((course) => {
        expect(course['@id']).toMatch(/^https:\/\/kuskates\.com\/#course-/);
        expect(course.name.length).toBeGreaterThan(15);
        expect(course.description.length).toBeGreaterThan(50);
        expect(course.provider).toBeDefined();
        expect(course.provider['@id']).toBe('https://kuskates.com/#organization');
        expect(course.isAccessibleForFree).toBe(true);
      });
    });

    it('public/ads.txt: valid format, DIRECT, publisher IDs pub-5120531548842494 and pub-4241045160320459', () => {
      const adsTxt = fs.readFileSync(path.join(rootDir, 'public/ads.txt'), 'utf-8');
      const lines = adsTxt.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0 && !l.startsWith('#'));

      console.log(`[EMPIRICAL METRIC] ads.txt verified lines: ${JSON.stringify(lines)}`);
      expect(lines.length).toBe(2);
      expect(lines).toContain('google.com, pub-4241045160320459, DIRECT, f08c47fec0942fa0');
      expect(lines).toContain('google.com, pub-5120531548842494, DIRECT, f08c47fec0942fa0');
    });

    it('public/robots.txt: directives allow Mediapartners-Google, Googlebot, AdsBot-Google and declare sitemap', () => {
      const robotsTxt = fs.readFileSync(path.join(rootDir, 'public/robots.txt'), 'utf-8');
      const normalized = robotsTxt.replace(/\r\n/g, '\n');
      console.log(`[EMPIRICAL METRIC] robots.txt contains Mediapartners-Google and sitemap`);
      expect(normalized).toContain('User-agent: Mediapartners-Google\nAllow: /');
      expect(normalized).toContain('User-agent: Googlebot\nAllow: /');
      expect(normalized).toContain('User-agent: AdsBot-Google\nAllow: /');
      expect(normalized).toContain('Sitemap: https://kuskates.com/sitemap.xml');
    });

    it('public/sitemap.xml: valid XML structure and covers all reinforced study modules with lastmod 2026-10-31', () => {
      const sitemap = fs.readFileSync(path.join(rootDir, 'public/sitemap.xml'), 'utf-8');
      const urlCount = (sitemap.match(/<url>/g) || []).length;
      console.log(`[EMPIRICAL METRIC] sitemap.xml total URLs: ${urlCount}`);

      expect(sitemap).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(sitemap).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

      const expectedRoutes = [
        'https://kuskates.com/',
        'https://kuskates.com/?tab=academic-reinforcement',
        'https://kuskates.com/?tab=practice',
        'https://kuskates.com/?tab=categories',
        'https://kuskates.com/?tab=driver-license',
        'https://kuskates.com/?tab=patriotic-history',
        'https://kuskates.com/?tab=languages',
      ];

      expectedRoutes.forEach((route) => {
        expect(sitemap).toContain(`<loc>${route}</loc>`);
      });

      expect(sitemap).toContain('<lastmod>2026-10-31</lastmod>');
    });
  });
});
