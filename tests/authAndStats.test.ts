import { describe, it, expect, beforeEach } from 'vitest';
import { calculateScorePoints, isDateInTimeframe, getLeaderboard, getTopOnePerInstitution } from '../src/services/statsService';
import { registerUser, loginUser, getCurrentUser, logoutUser, hashPassword } from '../src/services/authService';

describe('Servicio de Puntuación KUSKAT (+1 por acierto, -2 por error, tope 0)', () => {
  it('otorga +1 por cada acierto y -2 por cada error en modo estricto por defecto', () => {
    // 10 correctas (10) - 2 equivocadas (4) = 6 puntos
    expect(calculateScorePoints(10, 2)).toBe(6);
  });

  it('el tope más bajo por conteo es estrictamente 0', () => {
    // 2 correctas (2) - 5 equivocadas (10) = -8 -> tope 0
    expect(calculateScorePoints(2, 5)).toBe(0);
    // 0 correctas - 10 equivocadas = -20 -> tope 0
    expect(calculateScorePoints(0, 10)).toBe(0);
    // 0 y 0 = 0
    expect(calculateScorePoints(0, 0)).toBe(0);
  });

  it('calcula correctamente exámenes perfectos', () => {
    expect(calculateScorePoints(100, 0)).toBe(100);
  });

  it('calcula puntaje psicométrico estándar con corrección por azar (1/3 por error para 4 opciones)', () => {
    // 60 correctas, 40 errores -> 60 - 40/3 = 60 - 13.33 = 46.67 puntos
    expect(calculateScorePoints(60, 40, 'standard', 4)).toBe(46.67);
  });

  it('calcula puntaje en modo directo sin penalización', () => {
    expect(calculateScorePoints(75, 25, 'direct')).toBe(75);
  });
});

describe('Filtros Temporales y Reinicio Anual (1 enero - 31 diciembre)', () => {
  it('filtro diario solo incluye la fecha de hoy', () => {
    const today = new Date();
    const todayIso = today.toISOString();
    expect(isDateInTimeframe(todayIso, 'diario', today)).toBe(true);

    const yesterday = new Date(today.getTime() - 24 * 3600 * 1000);
    expect(isDateInTimeframe(yesterday.toISOString(), 'diario', today)).toBe(false);
  });

  it('el ciclo anual se reinicia el 31 de diciembre / 1 de enero', () => {
    const currentYear = new Date().getFullYear();
    const thisYearRecord = new Date(currentYear, 5, 15).toISOString();
    const previousYearRecord = new Date(currentYear - 1, 11, 31).toISOString();

    expect(isDateInTimeframe(thisYearRecord, 'anual')).toBe(true);
    // Un examen del 31 de diciembre del año anterior ya caducó en el ranking anual actual
    expect(isDateInTimeframe(previousYearRecord, 'anual')).toBe(false);
  });
});

describe('Top 1 y Top 10 por Institución', () => {
  it('devuelve el Top 1 para cada una de las instituciones oficiales (incluyendo INGLES) antes de interactuar', () => {
    const topOnes = getTopOnePerInstitution('anual');
    expect(topOnes).toHaveLength(7);
    expect(topOnes.map(t => t.institution)).toEqual(['UES', 'ESCALAFON', 'AVANZO', 'ASD', 'ENA', 'ANSP', 'INGLES']);
    topOnes.forEach(t => {
      expect(t.entry).not.toBeNull();
      expect(t.entry?.rank).toBe(1);
      expect(t.entry?.scorePoints).toBeGreaterThan(0);
    });
  });

  it('devuelve el Top 10 cuando se selecciona una categoría', () => {
    const top10Ues = getLeaderboard('UES', 'anual');
    expect(top10Ues.length).toBeLessThanOrEqual(10);
    expect(top10Ues.length).toBeGreaterThan(0);
    expect(top10Ues[0].rank).toBe(1);
    // Los puntajes deben estar ordenados descendentemente
    for (let i = 0; i < top10Ues.length - 1; i++) {
      expect(top10Ues[i].scorePoints).toBeGreaterThanOrEqual(top10Ues[i + 1].scorePoints);
    }
  });
});

import { safeStorage } from '../src/services/safeStorage';

describe('Autenticación y Consentimiento Legal con Minimización de Datos', () => {
  beforeEach(() => {
    safeStorage.clear();
  });

  it('valida minimización de datos: solo username, email y password', async () => {
    const res = await registerUser({
      username: 'usuario1',
      email: 'usuario1@kuskat.sv',
      password: 'password123',
      termsAccepted: true,
      privacyAccepted: true
    });
    expect(res.success).toBe(true);
    expect(res.user?.username).toBe('usuario1');
    expect(res.user?.email).toBe('usuario1@kuskat.sv');
    // La contraseña nunca se almacena en texto plano
    expect(res.user?.passwordHash).toBeDefined();
    expect(res.user?.passwordHash).not.toBe('password123');
  });

  it('exige obligatoriamente las dos casillas separadas de consentimiento', async () => {
    const resSinTerminos = await registerUser({
      username: 'usuario2',
      email: 'usuario2@kuskat.sv',
      password: 'password123',
      termsAccepted: false,
      privacyAccepted: true
    });
    expect(resSinTerminos.success).toBe(false);
    expect(resSinTerminos.message).toContain('Términos y Condiciones');

    const resSinPrivacidad = await registerUser({
      username: 'usuario3',
      email: 'usuario3@kuskat.sv',
      password: 'password123',
      termsAccepted: true,
      privacyAccepted: false
    });
    expect(resSinPrivacidad.success).toBe(false);
    expect(resSinPrivacidad.message).toContain('Privacidad');
  });

  it('almacena registro de auditoría de cuándo y cómo se aceptó el consentimiento', async () => {
    const res = await registerUser({
      username: 'auditor1',
      email: 'auditor1@kuskat.sv',
      password: 'password123',
      termsAccepted: true,
      privacyAccepted: true
    });
    expect(res.success).toBe(true);
    const audit = res.user?.consent;
    expect(audit).toBeDefined();
    expect(audit?.termsAccepted).toBe(true);
    expect(audit?.privacyAccepted).toBe(true);
    expect(audit?.termsVersion).toBe('1.0.0 (2026-10)');
    expect(audit?.method).toBe('formulario_registro_doble_casilla');
    expect(new Date(audit!.acceptedAt).getTime()).toBeGreaterThan(0);
  });

  it('permite iniciar y cerrar sesión localmente', async () => {
    await registerUser({
      username: 'loginTest',
      email: 'login@kuskat.sv',
      password: 'secretPassword123',
      termsAccepted: true,
      privacyAccepted: true
    });

    logoutUser();
    expect(getCurrentUser()).toBeNull();

    const loginRes = await loginUser('loginTest', 'secretPassword123');
    expect(loginRes.success).toBe(true);
    expect(getCurrentUser()?.username).toBe('loginTest');
  });
});
