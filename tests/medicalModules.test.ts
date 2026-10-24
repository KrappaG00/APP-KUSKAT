import { describe, it, expect } from 'vitest';
import { CSSP_JUNTAS, CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { BRANCHING_CLINICAL_CASES } from '../src/data/residentadoBranchingCases';

describe('Módulo de Salud CSSP — csspHealthData', () => {
  it('contiene exactamente 200 preguntas oficiales en CSSP_QUESTIONS_DATA', () => {
    expect(CSSP_QUESTIONS_DATA).toHaveLength(200);
  });

  it('cuenta con exactamente 5 Juntas de Vigilancia debidamente definidas en CSSP_JUNTAS', () => {
    expect(CSSP_JUNTAS).toHaveLength(5);
    const juntaIds = CSSP_JUNTAS.map((j) => j.id);
    expect(juntaIds).toEqual(['jvpm', 'jvpo', 'jvpe', 'jvpqf', 'jvpps']);
  });

  it('distribuye exactamente 40 preguntas por cada Junta de Vigilancia', () => {
    const counts: Record<string, number> = {
      jvpm: 0,
      jvpo: 0,
      jvpe: 0,
      jvpqf: 0,
      jvpps: 0,
    };

    CSSP_QUESTIONS_DATA.forEach((q) => {
      counts[q.juntaId] = (counts[q.juntaId] || 0) + 1;
    });

    expect(counts.jvpm).toBe(40);
    expect(counts.jvpo).toBe(40);
    expect(counts.jvpe).toBe(40);
    expect(counts.jvpqf).toBe(40);
    expect(counts.jvpps).toBe(40);
  });

  it('garantiza la integridad estructural y contratos de tipo en todos los 200 reactivos', () => {
    const seenIds = new Set<string>();

    CSSP_QUESTIONS_DATA.forEach((q) => {
      // Unicidad de identificador
      expect(seenIds.has(q.id)).toBe(false);
      seenIds.add(q.id);

      // Junta válida y nombre consistente
      expect(['jvpm', 'jvpo', 'jvpe', 'jvpqf', 'jvpps']).toContain(q.juntaId);
      expect(q.juntaName.length).toBeGreaterThan(5);

      // Campos obligatorios no vacíos
      expect(q.area.trim().length).toBeGreaterThan(3);
      expect(q.legalBasis.trim().length).toBeGreaterThan(5);
      expect(q.statement.trim().length).toBeGreaterThan(15);
      expect(q.explanation.trim().length).toBeGreaterThan(20);

      // Opciones A, B, C, D
      expect(Object.keys(q.options).sort()).toEqual(['A', 'B', 'C', 'D']);
      expect(q.options.A.trim().length).toBeGreaterThan(0);
      expect(q.options.B.trim().length).toBeGreaterThan(0);
      expect(q.options.C.trim().length).toBeGreaterThan(0);
      expect(q.options.D.trim().length).toBeGreaterThan(0);

      // Respuesta correcta válida
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

      // Distractores justificados para todas las opciones erróneas
      const wrongOptions = ['A', 'B', 'C', 'D'].filter((opt) => opt !== q.correctAnswer);
      wrongOptions.forEach((optKey) => {
        expect(q.distractorRationale[optKey]).toBeDefined();
        expect(q.distractorRationale[optKey].trim().length).toBeGreaterThan(10);
      });
    });
  });

  it('incorpora los fundamentos jurídicos y sanitarios salvadoreños obligatorios', () => {
    const allLegalBasesAndStatements = CSSP_QUESTIONS_DATA.map(
      (q) => `${q.legalBasis} ${q.statement} ${q.explanation}`
    ).join(' ');

    // Código de Salud (Arts. 40, 42, 43, 48, 102, 136-138)
    expect(allLegalBasesAndStatements).toContain('Código de Salud');
    expect(allLegalBasesAndStatements).toContain('Art. 40');
    expect(allLegalBasesAndStatements).toContain('Art. 42');
    expect(allLegalBasesAndStatements).toContain('Art. 43');
    expect(allLegalBasesAndStatements).toContain('Art. 48');
    expect(allLegalBasesAndStatements).toContain('Art. 102');
    expect(allLegalBasesAndStatements).toMatch(/136|138/);

    // Código Penal (Art. 146 y 175) & Código Procesal Penal (Art. 265)
    expect(allLegalBasesAndStatements).toContain('Art. 146');
    expect(allLegalBasesAndStatements).toContain('Art. 175');
    expect(allLegalBasesAndStatements).toContain('Art. 265');

    // Ley Crecer Juntos Art. 16 y 61-64
    expect(allLegalBasesAndStatements).toContain('Ley Crecer Juntos');
    expect(allLegalBasesAndStatements).toContain('Art. 16');

    // Ley de Medicamentos y DNM / Farmacovigilancia CNFV
    expect(allLegalBasesAndStatements).toContain('Ley de Medicamentos');
    expect(allLegalBasesAndStatements).toContain('DNM');
    expect(allLegalBasesAndStatements).toContain('CNFV');

    // RTS 13.01.01:14 y Buenas Prácticas
    expect(allLegalBasesAndStatements).toContain('RTS 13.01.01:14');
    expect(allLegalBasesAndStatements).toMatch(/Buenas Prácticas|BPA|BPD/);
  });
});

describe('Módulo de Casos Clínicos Ramificados de Residentado (ENAR) — residentadoBranchingCases', () => {
  it('contiene exactamente 4 casos clínicos secuenciales ramificados', () => {
    expect(BRANCHING_CLINICAL_CASES).toHaveLength(4);
  });

  it('cubre las cuatro especialidades médicas troncales en el orden adecuado', () => {
    const specialties = BRANCHING_CLINICAL_CASES.map((c) => c.specialty);
    expect(specialties).toEqual([
      'Medicina Interna',
      'Pediatría',
      'Gineco-Obstetricia',
      'Cirugía',
    ]);
  });

  it('verifica que cada caso cuente con al menos 3 etapas y exactamente 1 opción óptima por etapa', () => {
    BRANCHING_CLINICAL_CASES.forEach((c) => {
      expect(c.stages.length).toBeGreaterThanOrEqual(3);
      expect(c.patientDescription.trim().length).toBeGreaterThan(15);
      expect(c.initialVitals.bp).toBeDefined();
      expect(c.initialVitals.hr).toBeGreaterThan(0);

      c.stages.forEach((stage, idx) => {
        expect(stage.stageNumber).toBe(idx + 1);
        expect(stage.stageTitle.trim().length).toBeGreaterThan(5);
        expect(stage.narrative.trim().length).toBeGreaterThan(20);
        expect(stage.options.length).toBeGreaterThanOrEqual(2);

        const optimalOptions = stage.options.filter((o) => o.isOptimal);
        expect(optimalOptions).toHaveLength(1);

        stage.options.forEach((opt) => {
          expect(opt.action.trim().length).toBeGreaterThan(10);
          expect(opt.consequenceText.trim().length).toBeGreaterThan(10);
          expect(opt.learningPoint.trim().length).toBeGreaterThan(10);
          expect(opt.minsalProtocolRef.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  it('valida el Caso 3 (Gineco-Obstetricia): Código Naranja, Protocolo de Zuspan, Monitoreo y Antídoto', () => {
    const obGynCase = BRANCHING_CLINICAL_CASES.find((c) => c.specialty === 'Gineco-Obstetricia');
    expect(obGynCase).toBeDefined();
    expect(obGynCase!.title).toContain('Código Naranja');

    const allText = JSON.stringify(obGynCase);

    // Esquema de Zuspan intravenoso con sulfato de magnesio al 20% (4g carga en 15-20 min, infusión 1-2 g/h)
    expect(allText).toContain('Zuspan');
    expect(allText).toMatch(/Sulfato de Magnesio|sulfato de magnesio/);
    expect(allText).toContain('20%');
    expect(allText).toMatch(/4\s*g/);
    expect(allText).toMatch(/15-20\s*min/);
    expect(allText).toMatch(/1-2\s*g\/h/);

    // Vigilancia de toxicidad: reflejos rotulianos presentes, FR >= 12 rpm y diuresis > 30 mL/h con sonda Foley
    expect(allText).toMatch(/rotulianos|reflejos/);
    expect(allText).toMatch(/FR\s*>=\s*12|12\s*rpm/);
    expect(allText).toMatch(/diuresis\s*>\s*30|30\s*mL\/h/);
    expect(allText).toMatch(/sonda Foley|Foley/);

    // Antídoto: Gluconato de Calcio al 10% (1g IV lento en 3-5 min)
    expect(allText).toContain('Gluconato de Calcio al 10%');
    expect(allText).toMatch(/1\s*g/);
    expect(allText).toMatch(/3-5\s*min/);

    // Metas tensionales con Labetalol o Hidralazina
    expect(allText).toMatch(/Labetalol|Hidralazina/);
    expect(allText).toMatch(/140-150/);

    // Interrupción del embarazo (cesárea de urgencia)
    expect(allText).toMatch(/cesárea de urgencia|interrupción/);
  });

  it('valida el Caso 4 (Cirugía General y Trauma): ATLS 10.ª Edición, PTM 1:1:1, Ácido Tranexámico, Control de Daños y Second-Look', () => {
    const surgeryCase = BRANCHING_CLINICAL_CASES.find((c) => c.specialty === 'Cirugía');
    expect(surgeryCase).toBeDefined();
    expect(surgeryCase!.id).toBe('branching-case-trauma-choque-iv');
    expect(surgeryCase!.title).toContain('Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10.ª Edición)');

    const allText = JSON.stringify(surgeryCase);

    // Etapa 1: Triaje y reanimación: PTM 1:1:1, Ácido Tranexámico 1g (<3h), Reanimación hipotensiva permisiva (meta PAS 80-90)
    expect(allText).toMatch(/1:1:1/);
    expect(allText).toMatch(/Ácido Tranexámico/);
    expect(allText).toMatch(/1\s*g/);
    expect(allText).toMatch(/3\s*horas/);
    expect(allText).toMatch(/hipotensiva permisiva|PAS 80-90/);

    // Etapa 2: Laparotomía de control de daños (Damage Control Surgery), Tríada de la muerte, Empaquetamiento perihepático, Bolsa de Bogotá / VAC
    expect(allText).toMatch(/Control de Daños|Damage Control/);
    expect(allText).toMatch(/Tríada de la Muerte|hipotermia|acidosis|coagulopatía/);
    expect(allText).toMatch(/empaquetamiento|packing/);
    expect(allText).toMatch(/bolsa de Bogotá|VAC/);

    // Etapa 3: Cuidados intensivos y reexploración programada (Second-Look) a las 24-48h para desempaquetamiento y cierre diferido
    expect(allText).toMatch(/Second-Look|reexploración/);
    expect(allText).toMatch(/24-48\s*horas/);
    expect(allText).toMatch(/desempaquetamiento/);
    expect(allText).toMatch(/cierre definitivo|cierre diferido/);
  });
});
