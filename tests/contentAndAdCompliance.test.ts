import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { curriculumService } from '../src/data/minedCurriculum/curriculumService';
import { TECHNICAL_COURSES } from '../src/data/technicalCoursesData';

/**
 * Cuenta palabras sustantivas en español excluyendo comandos LaTeX, delimitadores y metadatos.
 */
function countGenuineWords(text: string): number {
  const cleaned = text
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\$[^$]*\$/g, ' ')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}()[\]=+*/^_<>|•:;,.!?'"`-]/g, ' ')
    .trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter((w) => w.length > 0).length;
}

describe('SUITE DE AUDITORÍA: Cumplimiento de >=500 Palabras, >=5 Ejemplos, Balance A/B/C/D y Monetización AdSense', () => {
  const ROOT_DIR = path.resolve(__dirname, '..');

  it('1. Infraestructura publicitaria y SEO: existen public/ads.txt, public/robots.txt y public/sitemap.xml válidos', () => {
    const adsTxtPath = path.join(ROOT_DIR, 'public/ads.txt');
    const robotsTxtPath = path.join(ROOT_DIR, 'public/robots.txt');
    const sitemapXmlPath = path.join(ROOT_DIR, 'public/sitemap.xml');

    expect(fs.existsSync(adsTxtPath)).toBe(true);
    expect(fs.existsSync(robotsTxtPath)).toBe(true);
    expect(fs.existsSync(sitemapXmlPath)).toBe(true);

    const adsTxt = fs.readFileSync(adsTxtPath, 'utf-8');
    expect(adsTxt).toContain('google.com, pub-4241045160320459, DIRECT, f08c47fec0942fa0');

    const robotsTxt = fs.readFileSync(robotsTxtPath, 'utf-8');
    expect(robotsTxt).toContain('Mediapartners-Google');
    expect(robotsTxt).toContain('Sitemap: https://kuskates.com/sitemap.xml');

    const sitemapXml = fs.readFileSync(sitemapXmlPath, 'utf-8');
    expect(sitemapXml).toContain('<urlset');
    expect(sitemapXml).toContain('https://kuskates.com/?tab=academic-reinforcement');
    expect(sitemapXml).toContain('https://kuskates.com/?tab=technical-courses');
  });

  it('2. Google Consent Mode v2, enrutamiento SEO en kuskates.com y transparencia publicitaria están integrados', () => {
    const indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf-8');
    expect(indexHtml).toContain("gtag('consent', 'default'");
    expect(indexHtml).toContain('ad_storage');
    expect(indexHtml).toContain('ad_user_data');
    expect(indexHtml).toContain('ad_personalization');
    expect(indexHtml).toContain('application/ld+json');
    expect(indexHtml).toContain('EducationalOrganization');
    expect(indexHtml).toContain('https://kuskates.com/');

    const appTsx = fs.readFileSync(path.join(ROOT_DIR, 'src/App.tsx'), 'utf-8');
    expect(appTsx).toContain('TAB_SEO_TITLES');
    expect(appTsx).toContain('https://kuskates.com/?tab=');

    const cookieBanner = fs.readFileSync(path.join(ROOT_DIR, 'src/components/CookieBanner.tsx'), 'utf-8');
    expect(cookieBanner).toContain('Google AdSense');
    expect(cookieBanner).not.toContain('No empleamos cookies publicitarias');
  });

  it('3. Cada una de las 112 lecciones MINED cumple estrictamente >= 500 palabras y >= 5 ejemplos concretos y distintos', () => {
    const allUnits = curriculumService.getAllUnits();
    expect(allUnits.length).toBe(97);

    let totalLessons = 0;
    for (const { unit } of allUnits) {
      for (const lesson of unit.lessons) {
        totalLessons++;
        expect(Array.isArray(lesson.examples), `Lección ${lesson.id} debe tener arreglo examples`).toBe(true);
        expect(
          lesson.examples!.length,
          `Lección ${lesson.id} debe tener al menos 5 ejemplos concretos`
        ).toBeGreaterThanOrEqual(5);

        // Verificar que los 5 ejemplos sean distintos entre sí
        const uniqueExamples = new Set(lesson.examples!.map((e) => e.trim()));
        expect(
          uniqueExamples.size,
          `Los ejemplos de la lección ${lesson.id} deben ser distintos`
        ).toBe(lesson.examples!.length);

        // Contar palabras sustantivas sin duplicar campos
        const resuelveProse = lesson.resuelve
          .map((r) => `${r.exercise} ${r.hint || ''} ${r.answer || ''}`)
          .join(' ');
        const examplesProse = lesson.examples!.join(' ');
        const fullUniqueLessonProse = [
          lesson.problema,
          lesson.solucion,
          lesson.conclusion,
          examplesProse,
          resuelveProse,
        ].join(' ');

        const wordCount = countGenuineWords(fullUniqueLessonProse);
        expect(
          wordCount,
          `Lección ${lesson.id} (${lesson.title}) tiene ${wordCount} palabras, debe tener >= 500 palabras`
        ).toBeGreaterThanOrEqual(500);
      }
    }

    expect(totalLessons).toBe(112);
  });

  it('4. Las 97 unidades oficiales MINED poseen bancos de 50 preguntas con distribución equilibrada de claves A, B, C y D', () => {
    const allUnits = curriculumService.getAllUnits();
    expect(allUnits.length).toBe(97);

    for (const { gradeId, unit } of allUnits) {
      const questions = curriculumService.getUnitQuestions(gradeId, unit.id);
      expect(questions.length, `Unidad ${unit.id} debe retornar 50 preguntas`).toBe(50);

      const counts: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
      for (const q of questions) {
        counts[q.correctAnswer] = (counts[q.correctAnswer] || 0) + 1;
      }

      // En un banco equilibrado de 50 preguntas, cada clave A, B, C, D aparece entre 12 y 13 veces
      expect(counts.A, `Unidad ${unit.id} clave A desbalanceada: ${counts.A}`).toBeGreaterThanOrEqual(12);
      expect(counts.A, `Unidad ${unit.id} clave A desbalanceada: ${counts.A}`).toBeLessThanOrEqual(13);
      expect(counts.B, `Unidad ${unit.id} clave B desbalanceada: ${counts.B}`).toBeGreaterThanOrEqual(12);
      expect(counts.B, `Unidad ${unit.id} clave B desbalanceada: ${counts.B}`).toBeLessThanOrEqual(13);
      expect(counts.C, `Unidad ${unit.id} clave C desbalanceada: ${counts.C}`).toBeGreaterThanOrEqual(12);
      expect(counts.C, `Unidad ${unit.id} clave C desbalanceada: ${counts.C}`).toBeLessThanOrEqual(13);
      expect(counts.D, `Unidad ${unit.id} clave D desbalanceada: ${counts.D}`).toBeGreaterThanOrEqual(12);
      expect(counts.D, `Unidad ${unit.id} clave D desbalanceada: ${counts.D}`).toBeLessThanOrEqual(13);
    }
  });

  it('5. Todos los cursos técnicos vocacionales (40 módulos y 160 temas) cumplen >= 500 palabras y >= 5 ejemplos distintos', () => {
    expect(TECHNICAL_COURSES.length).toBe(10);

    for (const course of TECHNICAL_COURSES) {
      for (const mod of course.modules) {
        expect(Array.isArray(mod.examples)).toBe(true);
        expect(mod.examples!.length).toBeGreaterThanOrEqual(5);

        for (const topic of mod.topics) {
          expect(typeof topic.content).toBe('string');
          expect(Array.isArray(topic.examples)).toBe(true);
          expect(topic.examples!.length).toBeGreaterThanOrEqual(5);

          const uniqueTopicExamples = new Set(topic.examples!.map((e) => e.trim()));
          expect(uniqueTopicExamples.size).toBe(topic.examples!.length);

          const topicWords = countGenuineWords(topic.content!);
          expect(
            topicWords,
            `Tema "${topic.title}" en ${course.id} tiene ${topicWords} palabras, requiere >= 500`
          ).toBeGreaterThanOrEqual(500);
        }
      }
    }
  });
});
