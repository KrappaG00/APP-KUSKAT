import { describe, it, expect } from 'vitest';
import { NOTARY_EXAM_QUESTIONS as NOTARY_QUESTIONS_FROM_DATA, NotaryQuestion } from '../src/data/notaryExamData';
import { NOTARY_EXAM_QUESTIONS as NOTARY_QUESTIONS_FROM_VIEW } from '../src/components/NotaryExamView';
import {
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
  ConstitutionalRulingCase,
  AmparoStepGuide,
} from '../src/data/constitucionalJurisprudenciaData';

describe('Módulo Legal 1: Examen de Suficiencia Notarial CSJ (notaryExamData)', () => {
  it('contiene exactamente 200 reactivos notariales de alta complejidad', () => {
    expect(NOTARY_QUESTIONS_FROM_DATA.length).toBe(200);
    // Verificación de re-exportación y retrocompatibilidad desde NotaryExamView
    expect(NOTARY_QUESTIONS_FROM_VIEW.length).toBe(200);
    expect(NOTARY_QUESTIONS_FROM_VIEW).toBe(NOTARY_QUESTIONS_FROM_DATA);
  });

  it('todos los reactivos tienen identificadores únicos correlativos not-01 a not-200', () => {
    const ids = NOTARY_QUESTIONS_FROM_DATA.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(200);

    for (let i = 1; i <= 200; i++) {
      const expectedId = i < 100 ? `not-${i.toString().padStart(2, '0')}` : `not-${i}`;
      expect(ids).toContain(expectedId);
    }
  });

  it('distribuye equitativamente 40 reactivos por cada una de las 5 subcategorías', () => {
    const categories: Record<string, number> = {
      'notarial-puro': 0,
      'lenjvod': 0,
      'sucesiones': 0,
      'contratos': 0,
      'mercantil': 0,
    };
    NOTARY_QUESTIONS_FROM_DATA.forEach(q => {
      expect(q.category).toBeDefined();
      categories[q.category!] = (categories[q.category!] || 0) + 1;
    });

    expect(categories['notarial-puro']).toBe(40);
    expect(categories['lenjvod']).toBe(40);
    expect(categories['sucesiones']).toBe(40);
    expect(categories['contratos']).toBe(40);
    expect(categories['mercantil']).toBe(40);
  });

  it('cada reactivo cumple estrictamente con el esquema NotaryQuestion', () => {
    NOTARY_QUESTIONS_FROM_DATA.forEach((q: NotaryQuestion) => {
      expect(typeof q.id).toBe('string');
      expect(q.id).toMatch(/^not-(0[1-9]|[1-9][0-9]|1[0-9]{2}|200)$/);
      expect(q.topic.trim().length).toBeGreaterThan(5);
      expect(q.legalBasis.trim().length).toBeGreaterThan(5);
      expect(q.statement.trim().length).toBeGreaterThan(20);
      expect(typeof q.explanation).toBe('string');
      expect(q.explanation.trim().length).toBeGreaterThan(20);

      // Precedente CSJ presente y genuino
      expect(q.csjPrecedent).toBeDefined();
      expect(q.csjPrecedent!.trim().length).toBeGreaterThan(15);

      // Opciones: exactamente 4 (A, B, C, D)
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBe(4);

      const optionKeys = q.options.map(o => o.key);
      expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);

      q.options.forEach(opt => {
        expect(opt.text.trim().length).toBeGreaterThan(5);
      });

      // correctKey válido y presente en las opciones
      expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);
      expect(optionKeys).toContain(q.correctKey);
    });
  });

  it('cubre exhaustivamente todas las áreas normativas requeridas', () => {
    const allText = NOTARY_QUESTIONS_FROM_DATA.map(
      q => `${q.topic} ${q.legalBasis} ${q.statement} ${q.explanation} ${q.csjPrecedent || ''}`
    ).join(' ');

    // 1. Solemnidades de testamentos abiertos y cerrados (Arts. 1009-1017 C.C.)
    expect(allText).toMatch(/1009/);
    expect(allText).toMatch(/1010/);
    expect(allText).toMatch(/1015|1016|1017/);
    expect(allText).toMatch(/testamento/i);

    // 2. Protocolización de resoluciones judiciales (Arts. 55-58 LN)
    expect(allText).toMatch(/55.*58.*Notariado|protocoliz/i);

    // 3. Otorgamiento sin DUI por testigos de conocimiento (Art. 32 LN)
    expect(allText).toMatch(/DUI/i);
    expect(allText).toMatch(/testigos de conocimiento/i);
    expect(allText).toMatch(/Art\. 32.*5/);

    // 4. Diligencias de jurisdicción voluntaria (LENJVOD: herencia y remedición de inmuebles)
    expect(allText).toMatch(/LENJVOD/);
    expect(allText).toMatch(/aceptaci[oó]n de herencia/i);
    expect(allText).toMatch(/remedici[oó]n/i);
    expect(allText).toMatch(/colindantes/i);

    // 5. Poderes con cláusula especial y sustitución (Arts. 69 y 72 CPCM)
    expect(allText).toMatch(/CPCM/);
    expect(allText).toMatch(/69/);
    expect(allText).toMatch(/72/);
    expect(allText).toMatch(/poder/i);

    // 6. Constitución de sociedades mercantiles S.A. de C.V. (Código de Comercio)
    expect(allText).toMatch(/Comercio/);
    expect(allText).toMatch(/195/);
    expect(allText).toMatch(/Sociedad An[oó]nima|S\.A\. de C\.V\./i);

    // 7. Precedentes de Sala de lo Civil y Corte Plena sobre nulidades absolutas e inhabilitación disciplinaria
    expect(allText).toMatch(/nulidad absoluta/i);
    expect(allText).toMatch(/Corte Plena/i);
    expect(allText).toMatch(/alquiler.*protocolo|inhabilitaci[oó]n|disciplinar/i);
  });
});

describe('Módulo Legal 2: Casoteca Constitucional CSJ (constitucionalJurisprudenciaData)', () => {
  it('contiene exactamente 10 sentencias paradigmáticas de la Sala de lo Constitucional', () => {
    expect(CONSTITUTIONAL_CASES.length).toBe(10);
  });

  it('todos los casos tienen identificadores únicos y formato canónico', () => {
    const ids = CONSTITUTIONAL_CASES.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);

    ids.forEach(id => {
      expect(id).toMatch(/^sc-(inc|hc|amp)-[0-9]{3}-[0-9]{4}$/);
    });
  });

  it('cada sentencia cumple rigurosamente con la interfaz ConstitutionalRulingCase', () => {
    CONSTITUTIONAL_CASES.forEach((c: ConstitutionalRulingCase) => {
      expect(typeof c.id).toBe('string');
      expect(typeof c.refNumber).toBe('string');
      expect(c.refNumber.trim().length).toBeGreaterThan(4);
      expect(typeof c.year).toBe('number');
      expect(c.year).toBeGreaterThanOrEqual(2000);
      expect(c.year).toBeLessThanOrEqual(2026);
      expect(['Inconstitucionalidad', 'Amparo', 'Hábeas Corpus', 'Controversia']).toContain(c.rulingType);

      expect(c.title.trim().length).toBeGreaterThan(10);
      expect(Array.isArray(c.constitutionalArticles)).toBe(true);
      expect(c.constitutionalArticles.length).toBeGreaterThanOrEqual(1);

      expect(c.factsSummary.trim().length).toBeGreaterThan(40);
      expect(c.ratioDecidendi.trim().length).toBeGreaterThan(50);
      expect(c.practicalImpact.trim().length).toBeGreaterThan(30);

      // Cuestionario dogmático (legalQuiz)
      expect(c.legalQuiz).toBeDefined();
      expect(c.legalQuiz.question.trim().length).toBeGreaterThan(15);
      expect(Array.isArray(c.legalQuiz.options)).toBe(true);
      expect(c.legalQuiz.options.length).toBe(4);

      const optionKeys = c.legalQuiz.options.map(o => o.key);
      expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);

      c.legalQuiz.options.forEach(opt => {
        expect(opt.text.trim().length).toBeGreaterThan(5);
      });

      expect(['A', 'B', 'C', 'D']).toContain(c.legalQuiz.correctKey);
      expect(c.legalQuiz.explanation.trim().length).toBeGreaterThan(20);
    });
  });

  it('incorpora los 4 precedentes originales más las 6 sentencias emblemáticas obligatorias', () => {
    const ids = CONSTITUTIONAL_CASES.map(c => c.id);
    // 4 precedentes originales
    expect(ids).toContain('sc-inc-044-2013'); // Amnistía 1993
    expect(ids).toContain('sc-hc-179-2011');  // Detención provisional
    expect(ids).toContain('sc-inc-004-2012'); // Reserva de ley punitiva
    expect(ids).toContain('sc-amp-408-2015'); // Salud y medicamentos

    // 6 sentencias adicionales
    expect(ids).toContain('sc-inc-021-2020'); // Decretos de emergencia sin habilitación
    expect(ids).toContain('sc-hc-119-2014');  // Hábeas corpus correctivo y hacinamiento
    expect(ids).toContain('sc-amp-713-2015'); // Acceso a la información y probidad LAIP
    expect(ids).toContain('sc-inc-028-2015'); // Reserva de ley tributaria (tasas vs impuestos)
    expect(ids).toContain('sc-inc-006-2016'); // Vicio deliberación y dispensa de trámite
    expect(ids).toContain('sc-amp-068-2011'); // Estabilidad laboral y fuero de maternidad
  });

  it('verifica que las sentencias cubren los artículos constitucionales pertinentes', () => {
    const caseMap = new Map(CONSTITUTIONAL_CASES.map(c => [c.id, c]));

    // Emergencia / Decretos ejecutivos
    const emergencyCase = caseMap.get('sc-inc-021-2020')!;
    expect(emergencyCase.constitutionalArticles.join(' ')).toMatch(/86|131|29/);
    expect(emergencyCase.ratioDecidendi).toMatch(/reserva de ley|r[eé]gimen de excepci[oó]n|Asamblea Legislativa/i);

    // Hábeas Corpus Correctivo
    const hcCase = caseMap.get('sc-hc-119-2014')!;
    expect(hcCase.constitutionalArticles.join(' ')).toMatch(/27|11/);
    expect(hcCase.ratioDecidendi).toMatch(/h[aá]beas corpus correctivo|estado de cosas inconstitucional|trato cruel/i);

    // LAIP y Probidad
    const laipCase = caseMap.get('sc-amp-713-2015')!;
    expect(laipCase.constitutionalArticles.join(' ')).toMatch(/6|85|86/);
    expect(laipCase.ratioDecidendi).toMatch(/m[aá]xima publicidad|informaci[oó]n p[uú]blica/i);

    // Tributario / Tasas vs Impuestos
    const taxCase = caseMap.get('sc-inc-028-2015')!;
    expect(taxCase.constitutionalArticles.join(' ')).toMatch(/231|131|204/);
    expect(taxCase.ratioDecidendi).toMatch(/tasas|impuesto|reserva de ley tributaria/i);

    // Deliberación democrática / Dispensa de trámite
    const deliberationCase = caseMap.get('sc-inc-006-2016')!;
    expect(deliberationCase.constitutionalArticles.join(' ')).toMatch(/135|125/);
    expect(deliberationCase.ratioDecidendi).toMatch(/deliberaci[oó]n democr[aá]tica|dispensa de tr[aá]mite/i);

    // Fuero de Maternidad
    const maternityCase = caseMap.get('sc-amp-068-2011')!;
    expect(maternityCase.constitutionalArticles.join(' ')).toMatch(/38.*11|32/);
    expect(maternityCase.ratioDecidendi).toMatch(/fuero de maternidad|estabilidad laboral reforzada/i);
  });
});

describe('Módulo Legal 3: Taller de Demanda de Amparo (AMPARO_STEP_GUIDE)', () => {
  it('contiene exactamente 5 pasos metodológicos procesales intactos', () => {
    expect(AMPARO_STEP_GUIDE.length).toBe(5);
  });

  it('los pasos son estrictamente correlativos del 1 al 5 y tienen contenido probatorio completo', () => {
    AMPARO_STEP_GUIDE.forEach((step: AmparoStepGuide, index: number) => {
      expect(step.stepNumber).toBe(index + 1);
      expect(step.title.trim().length).toBeGreaterThan(10);
      expect(step.legalRequirement.trim().length).toBeGreaterThan(10);
      expect(step.practicalGuidance.trim().length).toBeGreaterThan(20);
      expect(step.commonMistakes.trim().length).toBeGreaterThan(15);
      expect(step.modelSnippet.trim().length).toBeGreaterThan(20);
    });
  });
});
