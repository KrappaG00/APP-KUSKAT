import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import geoBlockHandler, {
  GOOGLE_BOT_REGEX,
  PRERENDERED_TABS,
  resolvePrerenderedTab,
} from '../netlify/edge-functions/geo-block';

describe('Verificación de Acceso Global, Enrutamiento Pre-renderizado y Política AdSense', () => {
  const rootDir = process.cwd();
  const redirectsPath = path.join(rootDir, 'public', '_redirects');
  const netlifyTomlPath = path.join(rootDir, 'netlify.toml');

  it('1. public/_redirects permite acceso global sin bloqueo por país ni HTTP 403', () => {
    expect(fs.existsSync(redirectsPath)).toBe(true);
    const content = fs.readFileSync(redirectsPath, 'utf-8');

    // Verificar endpoints esenciales y páginas E-E-A-T con status 200
    expect(content).toContain('/ads.txt');
    expect(content).toContain('/robots.txt');
    expect(content).toContain('/sitemap.xml');
    expect(content).toContain('/privacidad.html');
    expect(content).toContain('/terminos.html');
    expect(content).toContain('/sobre-nosotros.html');
    expect(content).toContain('/contacto.html');

    // Prohibido cualquier bloqueo por país o HTTP 403
    expect(content).not.toContain('Country=');
    expect(content).not.toContain('403!');
    expect(content).toContain('/*    /index.html     200');
  });

  it('2. netlify.toml vincula correctamente la Edge Function geo-block', () => {
    expect(fs.existsSync(netlifyTomlPath)).toBe(true);
    const toml = fs.readFileSync(netlifyTomlPath, 'utf-8');
    expect(toml).toContain('geo-block');
    expect(toml).toContain('[[edge_functions]]');
  });

  it('3. geoBlockHandler permite acceso global desde cualquier país (EE.UU., El Salvador, Europa, Asia, etc.) sin devolver 403', async () => {
    const testCountries = ['SV', 'US', 'IE', 'GB', 'DE', 'ES', 'IN', 'SG', 'JP', 'RU', 'CN', 'NG', 'BR', 'AU'];

    for (const country of testCountries) {
      let nextCalled = false;
      const fakeRequest = new Request('https://kuskates.com/', {
        headers: { 'user-agent': 'Mozilla/5.0' },
      });
      const fakeContext = {
        geo: { country: { code: country } },
        next: async () => {
          nextCalled = true;
          return new Response('OK', { status: 200 });
        },
        rewrite: async () => new Response('Rewritten', { status: 200 }),
      };

      const res = await geoBlockHandler(fakeRequest, fakeContext);
      expect(nextCalled).toBe(true);
      expect(res.status).toBe(200);
    }
  });

  it('4. geoBlockHandler otorga paso libre a rastreadores oficiales de Google (Googlebot, Mediapartners-Google)', async () => {
    const googleBots = [
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Mediapartners-Google',
      'Mozilla/5.0 (compatible; AdsBot-Google; +http://www.google.com/adsbot.html)',
      'FeedFetcher-Google; (+http://www.google.com/feedfetcher.html)',
      'Google-Adwords-Instant (+http://www.google.com/adsbot.html)',
    ];

    for (const botUa of googleBots) {
      expect(GOOGLE_BOT_REGEX.test(botUa)).toBe(true);

      const fakeRequest = new Request('https://kuskates.com/?tab=academic-reinforcement', {
        headers: { 'user-agent': botUa, accept: 'text/html' },
      });
      let rewrittenTo = '';
      const fakeContext = {
        geo: { country: { code: 'US' } },
        next: async () => new Response('OK', { status: 200 }),
        rewrite: async (target: string) => {
          rewrittenTo = target;
          return new Response('Prerendered HTML', { status: 200 });
        },
      };

      const res = await geoBlockHandler(fakeRequest, fakeContext);
      expect(res.status).toBe(200);
      expect(rewrittenTo).toBe('/routes/academic-reinforcement.html');
    }
  });

  it('5. resolvePrerenderedTab resuelve pestañas oficiales y alias heredados', () => {
    expect(PRERENDERED_TABS.size).toBe(23);
    expect(resolvePrerenderedTab('academic-reinforcement')).toBe('academic-reinforcement');
    expect(resolvePrerenderedTab('refuerzo')).toBe('academic-reinforcement');
    expect(resolvePrerenderedTab('simulator')).toBe('practice');
    expect(resolvePrerenderedTab('unknown-tab')).toBeNull();
  });
});
