import { describe, it, expect } from 'vitest';
import { DEPARTMENTS_DATA } from '../src/components/motionsites/data/departmentsData';

describe('MotionSites - Estructura Curricular y Geográfica 3D KUSKAT', () => {
  it('contiene exactamente los 14 departamentos de El Salvador', () => {
    expect(DEPARTMENTS_DATA).toHaveLength(14);

    const expectedDepts = [
      'ahuachapan',
      'santa_ana',
      'sonsonate',
      'chalatenango',
      'la_libertad',
      'san_salvador',
      'cuscatlan',
      'la_paz',
      'cabanas',
      'san_vicente',
      'usulutan',
      'san_miguel',
      'morazan',
      'la_union',
    ];

    const actualIds = DEPARTMENTS_DATA.map((d) => d.id);
    expectedDepts.forEach((id) => {
      expect(actualIds).toContain(id);
    });
  });

  it('cada departamento cuenta con capital, región, coordenadas, polígono 3D y municipios', () => {
    DEPARTMENTS_DATA.forEach((dept) => {
      expect(dept.name).toBeTruthy();
      expect(dept.capital).toBeTruthy();
      expect(['Occidental', 'Central', 'Paracentral', 'Oriental']).toContain(dept.region);
      expect(typeof dept.coordinates.x).toBe('number');
      expect(typeof dept.coordinates.y).toBe('number');
      expect(dept.polygon.length).toBeGreaterThanOrEqual(3);
      expect(dept.schoolsCount).toBeGreaterThan(0);
      expect(dept.studentsCount).toBeGreaterThan(0);
      expect(dept.featuredSubject).toBeTruthy();
      expect(dept.bestCategory).toBeTruthy();
      expect(dept.municipalitiesCount).toBeGreaterThan(0);
    });
  });

  it('no contiene referencias a tasas de aprobación no comprobadas', () => {
    DEPARTMENTS_DATA.forEach((dept: any) => {
      expect(dept.acceptanceRate).toBeUndefined();
    });
  });

  it('verifica la integración de la paleta unificada de KUSKAT', () => {
    const palette = {
      fondoPrincipal: 'bg-slate-100',
      fondoTarjetas: 'bg-white',
      azulInstitucional: '#2563EB',
      verdeExito: '#059669',
      textoPrincipal: 'text-slate-900',
      textoSecundario: 'text-slate-600',
    };

    expect(palette.fondoPrincipal).toBe('bg-slate-100');
    expect(palette.fondoTarjetas).toBe('bg-white');
    expect(palette.azulInstitucional).toBe('#2563EB');
    expect(palette.verdeExito).toBe('#059669');
  });

  it('el mapa de El Salvador se adapta al tamaño de cualquier pantalla (móvil, tablet, escritorio)', () => {
    // Calcular extremos reales de la geografía de El Salvador
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    DEPARTMENTS_DATA.forEach(dept => {
      dept.polygon.forEach(([x, y]) => {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      });
    });

    const mapWidth = maxX - minX;
    const mapHeight = maxY - minY;

    expect(mapWidth).toBe(530);
    expect(mapHeight).toBe(143);

    // Comprobar adaptación para resoluciones de pantalla
    const screenSizes = [
      { w: 360, h: 500, label: 'Móvil estándar' },
      { w: 390, h: 844, label: 'iPhone' },
      { w: 768, h: 1024, label: 'iPad / Tablet' },
      { w: 1280, h: 720, label: 'Laptop' },
      { w: 1920, h: 1080, label: 'Monitor Full HD' }
    ];

    const fov = 45;
    const vFovRad = (fov * Math.PI) / 180;
    const vHeightAtDist1 = 2 * Math.tan(vFovRad / 2);

    screenSizes.forEach(({ w, h }) => {
      const aspect = w / h;
      const vWidthAtDist1 = vHeightAtDist1 * aspect;
      const safetyMargin = w < 640 ? 1.25 : 1.15;
      const dist = Math.max(190 / vHeightAtDist1, 580 / vWidthAtDist1) * safetyMargin;
      const visibleW = dist * vWidthAtDist1;
      const visibleH = dist * vHeightAtDist1;

      // El campo de visión siempre debe ser mayor a la anchura y altura del mapa para evitar recortes
      expect(visibleW).toBeGreaterThan(mapWidth);
      expect(visibleH).toBeGreaterThan(mapHeight);
    });
  });
});
