import { describe, it, expect } from 'vitest';
import {
  NOTARY_EXAM_QUESTIONS,
  NOTARY_THEMATIC_UNITS,
  NOTARY_VADEMECUM_DEADLINES,
  NOTARY_JURISPRUDENCE_RECORDS,
  NOTARY_SPECIAL_PROTOCOLS,
} from '../src/data/notaryExamData';
import { NOTARY_SUBCATEGORIES } from '../src/components/NotaryExamView';

describe('Examen del Notariado - Refuerzo IurisAcademia', () => {
  describe('Invariantes Base y Banco de 200 Reactivos', () => {
    it('mantiene exactamente 200 preguntas en NOTARY_EXAM_QUESTIONS', () => {
      expect(NOTARY_EXAM_QUESTIONS).toHaveLength(200);
    });

    it('tiene IDs canónicos desde not-01 hasta not-200 correlativos', () => {
      for (let i = 1; i <= 200; i++) {
        const expectedId = `not-${i.toString().padStart(2, '0')}`;
        expect(NOTARY_EXAM_QUESTIONS[i - 1].id).toBe(expectedId);
      }
    });

    it('distribuye 40 preguntas por cada una de las 5 materias sustantivas', () => {
      const counts: Record<string, number> = {};
      NOTARY_EXAM_QUESTIONS.forEach(q => {
        counts[q.category] = (counts[q.category] || 0) + 1;
      });

      const substantiveCategories = NOTARY_SUBCATEGORIES.filter(c => c.id !== 'all');
      expect(substantiveCategories).toHaveLength(5);
      substantiveCategories.forEach(cat => {
        expect(counts[cat.id]).toBe(40);
      });
    });

    it('todas las preguntas tienen fundamentación jurídica explícita con artículo o ley', () => {
      NOTARY_EXAM_QUESTIONS.forEach(q => {
        expect(q.legalBasis).toBeDefined();
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(q.explanation.trim().length).toBeGreaterThan(15);
        expect(q.options).toHaveLength(4);
      });
    });
  });

  describe('Regla de Unidades Temáticas (Mínimo 500 palabras y 5 ejemplos distintos)', () => {
    it('cuenta con las 5 unidades rectoras del ejercicio notarial', () => {
      expect(NOTARY_THEMATIC_UNITS).toBeDefined();
      expect(NOTARY_THEMATIC_UNITS.length).toBe(5);
    });

    it('cada unidad temática cumple estrictamente >= 500 palabras pedagógicas', () => {
      NOTARY_THEMATIC_UNITS.forEach(unit => {
        const textWords = unit.content.trim().split(/\s+/).filter(w => w.length > 0).length;
        expect(
          textWords,
          `La unidad ${unit.id}: "${unit.title}" tiene ${textWords} palabras (requiere >= 500)`
        ).toBeGreaterThanOrEqual(500);
      });
    });

    it('cada unidad temática cuenta con al menos 5 ejemplos prácticos concretos y diferenciados', () => {
      NOTARY_THEMATIC_UNITS.forEach(unit => {
        expect(
          unit.examples.length,
          `La unidad ${unit.id}: "${unit.title}" tiene ${unit.examples.length} ejemplos (requiere >= 5)`
        ).toBeGreaterThanOrEqual(5);

        // Validar que cada ejemplo tenga título y cláusula/caso sustancial
        const titles = new Set<string>();
        unit.examples.forEach(ex => {
          expect(ex.title.trim().length).toBeGreaterThan(5);
          expect(ex.description.trim().length).toBeGreaterThan(25);
          expect(titles.has(ex.title)).toBe(false);
          titles.add(ex.title);
        });
      });
    });
  });

  describe('Vademécum de Plazos Fatales y Obligaciones Notariales', () => {
    it('contiene al menos 8 plazos críticos del ejercicio notarial', () => {
      expect(NOTARY_VADEMECUM_DEADLINES).toBeDefined();
      expect(NOTARY_VADEMECUM_DEADLINES.length).toBeGreaterThanOrEqual(8);
    });

    it('cada plazo define artículo legal, plazo exacto, consecuencia jurídica y consejo práctico', () => {
      NOTARY_VADEMECUM_DEADLINES.forEach(deadline => {
        expect(deadline.id).toBeDefined();
        expect(deadline.area.trim().length).toBeGreaterThan(3);
        expect(deadline.title.trim().length).toBeGreaterThan(5);
        expect(deadline.deadline.trim().length).toBeGreaterThan(5);
        expect(deadline.legalBasis.trim().length).toBeGreaterThan(3);
        expect(deadline.consequence.trim().length).toBeGreaterThan(10);
        expect(deadline.practicalAdvice.trim().length).toBeGreaterThan(10);
      });
    });
  });

  describe('Compendio de Jurisprudencia Vinculante CSJ', () => {
    it('cuenta con precedentes de la Sala de lo Civil y Corte Plena CSJ', () => {
      expect(NOTARY_JURISPRUDENCE_RECORDS).toBeDefined();
      expect(NOTARY_JURISPRUDENCE_RECORDS.length).toBeGreaterThanOrEqual(4);
    });

    it('cada precedente contiene referencia oficial, tribunal emisor, ratio decidendi y regla clave', () => {
      NOTARY_JURISPRUDENCE_RECORDS.forEach(record => {
        expect(record.refNumber.trim().length).toBeGreaterThan(3);
        expect(record.court.trim().length).toBeGreaterThan(5);
        expect(record.subject.trim().length).toBeGreaterThan(5);
        expect(record.legalIssue.trim().length).toBeGreaterThan(10);
        expect(record.ratioDecidendi.trim().length).toBeGreaterThan(20);
        expect(record.keyRule.trim().length).toBeGreaterThan(20);
      });
    });
  });

  describe('Protocolos Notariales Especiales de Comparecencia', () => {
    it('cubre comparecencias excepcionales (sin DUI con testigos de conocimiento, intérprete, ruego, ciegos)', () => {
      expect(NOTARY_SPECIAL_PROTOCOLS).toBeDefined();
      expect(NOTARY_SPECIAL_PROTOCOLS.length).toBeGreaterThanOrEqual(4);
      NOTARY_SPECIAL_PROTOCOLS.forEach(proto => {
        expect(proto.id).toBeDefined();
        expect(proto.title.trim().length).toBeGreaterThan(5);
        expect(proto.circumstance.trim().length).toBeGreaterThan(10);
        expect(proto.requiredProcedure.trim().length).toBeGreaterThan(20);
        expect(proto.legalBasis.trim().length).toBeGreaterThan(3);
        expect(proto.mandatoryClauses.length).toBeGreaterThanOrEqual(1);
        expect(proto.commonErrors.trim().length).toBeGreaterThan(15);
      });
    });
  });
});
