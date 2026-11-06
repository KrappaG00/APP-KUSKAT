import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { ALLOWED_COUNTRIES } from '../netlify/edge-functions/geo-block';

describe('Verificación de Políticas de Geo-Bloqueo y Lista Blanca de Países', () => {
  const rootDir = process.cwd();
  const redirectsPath = path.join(rootDir, 'public', '_redirects');
  const geoBlockedHtmlPath = path.join(rootDir, 'public', 'geo-blocked.html');
  const netlifyTomlPath = path.join(rootDir, 'netlify.toml');

  it('1. public/_redirects existe y contiene la regla de redirección geográfica por país', () => {
    expect(fs.existsSync(redirectsPath)).toBe(true);
    const content = fs.readFileSync(redirectsPath, 'utf-8');

    // Verificar endpoints esenciales con status 200
    expect(content).toContain('/ads.txt');
    expect(content).toContain('/robots.txt');
    expect(content).toContain('/sitemap.xml');
    expect(content).toContain('/geo-blocked.html');

    // Verificar regla de países permitidos
    expect(content).toContain('Country=');
    expect(content).toContain('sv'); // El Salvador
    expect(content).toContain('us'); // Estados Unidos
    expect(content).toContain('gt'); // Guatemala
    expect(content).toContain('mx'); // México
    expect(content).toContain('es'); // España
    expect(content).toContain('pt'); // Portugal
    expect(content).toContain('fr'); // Francia
    expect(content).toContain('de'); // Alemania
    expect(content).toContain('ch'); // Suiza
    expect(content).toContain('it'); // Italia
    expect(content).toContain('ro'); // Rumania
    expect(content).toContain('au'); // Australia

    // Regla de bloqueo 403 para el resto del mundo
    expect(content).toContain('/*    /geo-blocked.html    403!');
  });

  it('2. public/geo-blocked.html existe, es estática, no tiene anuncios y respeta la privacidad', () => {
    expect(fs.existsSync(geoBlockedHtmlPath)).toBe(true);
    const html = fs.readFileSync(geoBlockedHtmlPath, 'utf-8');

    // Cero anuncios en la pantalla de bloqueo
    expect(html).not.toContain('adsbygoogle');
    expect(html).not.toContain('ca-pub');

    // Contiene el WhatsApp oficial y 0 del número privado
    expect(html).toContain('+503 7657 4463');
    expect(html).not.toContain('7943 9901');
    expect(html).toContain('Restricción de Región Geográfica');
  });

  it('3. netlify/edge-functions/geo-block.ts define la lista blanca exacta requerida', () => {
    // América (Norte, Centro, Caribe, Sur)
    expect(ALLOWED_COUNTRIES.has('SV')).toBe(true); // El Salvador
    expect(ALLOWED_COUNTRIES.has('US')).toBe(true); // EE.UU.
    expect(ALLOWED_COUNTRIES.has('CA')).toBe(true); // Canadá
    expect(ALLOWED_COUNTRIES.has('MX')).toBe(true); // México
    expect(ALLOWED_COUNTRIES.has('GT')).toBe(true); // Guatemala
    expect(ALLOWED_COUNTRIES.has('HN')).toBe(true); // Honduras
    expect(ALLOWED_COUNTRIES.has('NI')).toBe(true); // Nicaragua
    expect(ALLOWED_COUNTRIES.has('CR')).toBe(true); // Costa Rica
    expect(ALLOWED_COUNTRIES.has('PA')).toBe(true); // Panamá
    expect(ALLOWED_COUNTRIES.has('CO')).toBe(true); // Colombia
    expect(ALLOWED_COUNTRIES.has('AR')).toBe(true); // Argentina
    expect(ALLOWED_COUNTRIES.has('BR')).toBe(true); // Brasil
    expect(ALLOWED_COUNTRIES.has('CL')).toBe(true); // Chile
    expect(ALLOWED_COUNTRIES.has('DO')).toBe(true); // Rep. Dominicana
    expect(ALLOWED_COUNTRIES.has('PR')).toBe(true); // Puerto Rico
    expect(ALLOWED_COUNTRIES.has('CU')).toBe(true); // Cuba

    // Europa permitida
    expect(ALLOWED_COUNTRIES.has('ES')).toBe(true); // España
    expect(ALLOWED_COUNTRIES.has('PT')).toBe(true); // Portugal
    expect(ALLOWED_COUNTRIES.has('FR')).toBe(true); // Francia
    expect(ALLOWED_COUNTRIES.has('DE')).toBe(true); // Alemania
    expect(ALLOWED_COUNTRIES.has('CH')).toBe(true); // Suiza
    expect(ALLOWED_COUNTRIES.has('IT')).toBe(true); // Italia
    expect(ALLOWED_COUNTRIES.has('RO')).toBe(true); // Rumania

    // Australia
    expect(ALLOWED_COUNTRIES.has('AU')).toBe(true); // Australia

    // Países NO autorizados deben estar excluidos
    expect(ALLOWED_COUNTRIES.has('RU')).toBe(false); // Rusia (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('CN')).toBe(false); // China (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('IN')).toBe(false); // India (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('NG')).toBe(false); // Nigeria (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('VN')).toBe(false); // Vietnam (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('IR')).toBe(false); // Irán (Bloqueado)
    expect(ALLOWED_COUNTRIES.has('PK')).toBe(false); // Pakistán (Bloqueado)
  });

  it('4. netlify.toml vincula correctamente la Edge Function geo-block', () => {
    expect(fs.existsSync(netlifyTomlPath)).toBe(true);
    const toml = fs.readFileSync(netlifyTomlPath, 'utf-8');
    expect(toml).toContain('geo-block');
    expect(toml).toContain('[[edge_functions]]');
  });
});
