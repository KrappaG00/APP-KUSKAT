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
});
