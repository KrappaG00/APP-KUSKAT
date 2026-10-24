import { describe, it, expect } from 'vitest';
import { ADMIN_LAW_QUESTIONS } from '../src/data/derechoAdministrativoData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';
import { INGENIERIA_QUESTIONS } from '../src/data/ingenieriaCienciasData';
import { NOTARY_EXAM_QUESTIONS } from '../src/data/notaryExamData';
import { CSSP_QUESTIONS_DATA } from '../src/data/csspHealthData';
import { ANSP_ASCENSO_QUESTIONS } from '../src/data/anspAscensoData';
import { COMPLIANCE_QUESTIONS_DATA } from '../src/data/complianceAmlData';

describe('VERIFICACIÓN MASIVA: 200 Preguntas por Módulo Especializado (1,400 Reactivos)', () => {
  describe('1. Derecho Administrativo y Firma Electrónica (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(ADMIN_LAW_QUESTIONS).toBeDefined();
      expect(ADMIN_LAW_QUESTIONS.length).toBe(200);

      const ids = ADMIN_LAW_QUESTIONS.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye 150 preguntas de LPA y 50 de Firma Electrónica', () => {
      const firma = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'firma-electronica');
      const lpa = ADMIN_LAW_QUESTIONS.filter((q) => q.category !== 'firma-electronica');

      expect(firma.length).toBe(50);
      expect(lpa.length).toBe(150);

      const comun = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'procedimiento-comun');
      const recursos = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'recursos-administrativos');
      const silencio = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'silencio-administrativo');
      const sancionadora = ADMIN_LAW_QUESTIONS.filter((q) => q.category === 'potestad-sancionadora');

      expect(comun.length).toBe(38);
      expect(recursos.length).toBe(38);
      expect(silencio.length).toBe(37);
      expect(sancionadora.length).toBe(37);
    });

    it('cada reactivo cumple con el contrato de 4 opciones A/B/C/D y justificaciones', () => {
      ADMIN_LAW_QUESTIONS.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        expect(q.options).toBeDefined();
        ['A', 'B', 'C', 'D'].forEach((key) => {
          const optText = q.options[key as 'A' | 'B' | 'C' | 'D'];
          expect(typeof optText).toBe('string');
          expect(optText.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('2. Atención Primaria en Salud y Farmacovigilancia (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(SALUD_PRIMARIA_QUESTIONS).toBeDefined();
      expect(SALUD_PRIMARIA_QUESTIONS.length).toBe(200);

      const ids = SALUD_PRIMARIA_QUESTIONS.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye 150 Guías Clínicas MINSAL y 50 de Farmacovigilancia', () => {
      const fv = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'farmacovigilancia');
      const guias = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category !== 'farmacovigilancia');

      expect(fv.length).toBe(50);
      expect(guias.length).toBe(150);

      const htaDm2 = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'hta-dm2');
      const dengue = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'dengue');
      const iras = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'iras');
      const materno = SALUD_PRIMARIA_QUESTIONS.filter((q) => q.category === 'materno-infantil');

      expect(htaDm2.length).toBe(60);
      expect(dengue.length).toBe(30);
      expect(iras.length).toBe(30);
      expect(materno.length).toBe(30);
    });

    it('cada reactivo cumple con el contrato clínico y opciones no vacías', () => {
      SALUD_PRIMARIA_QUESTIONS.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.clinicalExplanation.trim().length).toBeGreaterThan(20);
        expect(q.officialGuidelineRef.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        ['A', 'B', 'C', 'D'].forEach((key) => {
          const optText = q.options[key as 'A' | 'B' | 'C' | 'D'];
          expect(typeof optText).toBe('string');
          expect(optText.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('3. Métodos Cuantitativos y Ciencias de Ingeniería (200 problemas)', () => {
    it('posee exactamente 200 problemas analíticos con identificadores únicos', () => {
      expect(INGENIERIA_QUESTIONS).toBeDefined();
      expect(INGENIERIA_QUESTIONS.length).toBe(200);

      const ids = INGENIERIA_QUESTIONS.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye exactamente 50 problemas por cada una de las 4 disciplinas', () => {
      const algebra = INGENIERIA_QUESTIONS.filter((q) => q.category === 'algebra-lineal');
      const trigo = INGENIERIA_QUESTIONS.filter((q) => q.category === 'trigonometria-analitica');
      const conicas = INGENIERIA_QUESTIONS.filter((q) => q.category === 'geometria-conicas');
      const fisica = INGENIERIA_QUESTIONS.filter((q) => q.category === 'fisica-mecanica');

      expect(algebra.length).toBe(50);
      expect(trigo.length).toBe(50);
      expect(conicas.length).toBe(50);
      expect(fisica.length).toBe(50);
    });

    it('cada problema analítico cuenta con deducción paso a paso y solución formal', () => {
      INGENIERIA_QUESTIONS.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.problemStatement.trim().length).toBeGreaterThan(15);
        expect(q.formalSolution.trim().length).toBeGreaterThan(15);
        expect(Array.isArray(q.stepByStepDerivation)).toBe(true);
        expect(q.stepByStepDerivation.length).toBeGreaterThan(0);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        ['A', 'B', 'C', 'D'].forEach((key) => {
          const optText = q.options[key as 'A' | 'B' | 'C' | 'D'];
          expect(typeof optText).toBe('string');
          expect(optText.trim().length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('4. Examen de Suficiencia Notarial CSJ (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(NOTARY_EXAM_QUESTIONS).toBeDefined();
      expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);

      const ids = NOTARY_EXAM_QUESTIONS.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye exactamente 40 reactivos por cada una de las 5 categorías notariales', () => {
      const notarial = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === 'notarial-puro');
      const lenjvod = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === 'lenjvod');
      const sucesiones = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === 'sucesiones');
      const contratos = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === 'contratos');
      const mercantil = NOTARY_EXAM_QUESTIONS.filter((q) => q.category === 'mercantil');

      expect(notarial.length).toBe(40);
      expect(lenjvod.length).toBe(40);
      expect(sucesiones.length).toBe(40);
      expect(contratos.length).toBe(40);
      expect(mercantil.length).toBe(40);
    });

    it('cada reactivo notarial incluye precedentes jurisprudenciales y base legal', () => {
      NOTARY_EXAM_QUESTIONS.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);
        q.options.forEach((opt) => {
          expect(['A', 'B', 'C', 'D']).toContain(opt.key);
          expect(opt.text.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('5. Juntas de Vigilancia del CSSP (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(CSSP_QUESTIONS_DATA).toBeDefined();
      expect(CSSP_QUESTIONS_DATA.length).toBe(200);

      const ids = CSSP_QUESTIONS_DATA.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye exactamente 40 reactivos por cada una de las 5 Juntas', () => {
      const jvpm = CSSP_QUESTIONS_DATA.filter((q) => q.juntaId === 'jvpm');
      const jvpo = CSSP_QUESTIONS_DATA.filter((q) => q.juntaId === 'jvpo');
      const jvpe = CSSP_QUESTIONS_DATA.filter((q) => q.juntaId === 'jvpe');
      const jvpqf = CSSP_QUESTIONS_DATA.filter((q) => q.juntaId === 'jvpqf');
      const jvpps = CSSP_QUESTIONS_DATA.filter((q) => q.juntaId === 'jvpps');

      expect(jvpm.length).toBe(40);
      expect(jvpo.length).toBe(40);
      expect(jvpe.length).toBe(40);
      expect(jvpqf.length).toBe(40);
      expect(jvpps.length).toBe(40);
    });

    it('cada reactivo sanitario incluye base legal y desglose de distractores', () => {
      CSSP_QUESTIONS_DATA.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        ['A', 'B', 'C', 'D'].forEach((key) => {
          const optText = q.options[key];
          expect(typeof optText).toBe('string');
          expect(optText.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('6. Ascenso Policial ANSP (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(ANSP_ASCENSO_QUESTIONS).toBeDefined();
      expect(ANSP_ASCENSO_QUESTIONS.length).toBe(200);

      const ids = ANSP_ASCENSO_QUESTIONS.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye exactamente 66 Cabo, 67 Sargento y 67 Oficial', () => {
      const cabo = ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'cabo');
      const sargento = ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'sargento');
      const oficial = ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'oficial');

      expect(cabo.length).toBe(66);
      expect(sargento.length).toBe(67);
      expect(oficial.length).toBe(67);
    });

    it('cada reactivo policial incluye fundamento legal y distractores estructurados', () => {
      ANSP_ASCENSO_QUESTIONS.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);
        q.options.forEach((opt) => {
          expect(['A', 'B', 'C', 'D']).toContain(opt.key);
          expect(opt.text.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });

  describe('7. Cumplimiento Normativo AML & Seguros SSF (200 reactivos)', () => {
    it('posee exactamente 200 reactivos con identificadores únicos', () => {
      expect(COMPLIANCE_QUESTIONS_DATA).toBeDefined();
      expect(COMPLIANCE_QUESTIONS_DATA.length).toBe(200);

      const ids = COMPLIANCE_QUESTIONS_DATA.map((q) => q.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(200);
    });

    it('distribuye exactamente 100 AML y 100 Seguros', () => {
      const aml = COMPLIANCE_QUESTIONS_DATA.filter((q) => q.category === 'AML');
      const seguros = COMPLIANCE_QUESTIONS_DATA.filter((q) => q.category === 'Seguros');

      expect(aml.length).toBe(100);
      expect(seguros.length).toBe(100);
    });

    it('cada reactivo financiero/regulatorio cumple con el contrato de opciones objeto', () => {
      COMPLIANCE_QUESTIONS_DATA.forEach((q) => {
        expect(q.id.trim().length).toBeGreaterThan(0);
        expect(q.statement.trim().length).toBeGreaterThan(20);
        expect(q.explanation.trim().length).toBeGreaterThan(20);
        expect(q.legalBasis.trim().length).toBeGreaterThan(5);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

        expect(typeof q.options).toBe('object');
        expect(Array.isArray(q.options)).toBe(false);
        ['A', 'B', 'C', 'D'].forEach((key) => {
          const optText = q.options[key as 'A' | 'B' | 'C' | 'D'];
          expect(typeof optText).toBe('string');
          expect(optText.trim().length).toBeGreaterThan(5);
        });
      });
    });
  });
});
