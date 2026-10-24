import { describe, it, expect } from 'vitest';
import {
  ANSP_ASCENSO_QUESTIONS,
  POLICE_PROMOTION_QUESTIONS,
  POLICE_RANKS,
} from '../src/data/anspAscensoData';
import {
  COMPLIANCE_QUESTIONS,
  COMPLIANCE_QUESTIONS_DATA,
  COMPLIANCE_SECTORS,
} from '../src/data/complianceAmlData';

describe('Módulo de Seguridad Pública: Ascenso Policial ANSP', () => {
  it('contiene exactamente 200 reactivos completos en ANSP_ASCENSO_QUESTIONS', () => {
    expect(ANSP_ASCENSO_QUESTIONS).toBeDefined();
    expect(ANSP_ASCENSO_QUESTIONS.length).toBe(200);
  });

  it('mantiene retrocompatibilidad idéntica con POLICE_PROMOTION_QUESTIONS (200 reactivos)', () => {
    expect(POLICE_PROMOTION_QUESTIONS).toBeDefined();
    expect(POLICE_PROMOTION_QUESTIONS.length).toBe(200);
    expect(POLICE_PROMOTION_QUESTIONS).toBe(ANSP_ASCENSO_QUESTIONS);
  });

  it('distribuye exactamente 66 Cabo, 67 Sargento, y 67 Oficial', () => {
    const cabos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Cabo');
    const sargentos = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Sargento');
    const oficiales = ANSP_ASCENSO_QUESTIONS.filter((q) => q.escalafon === 'Oficial');

    expect(cabos.length).toBe(66);
    expect(sargentos.length).toBe(67);
    expect(oficiales.length).toBe(67);

    // Mapeo recíproco a rank ('cabo', 'sargento', 'oficial')
    expect(ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'cabo').length).toBe(66);
    expect(ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'sargento').length).toBe(67);
    expect(ANSP_ASCENSO_QUESTIONS.filter((q) => q.rank === 'oficial').length).toBe(67);
  });

  it('todos los reactivos poseen identificadores únicos sin colisiones', () => {
    const ids = ANSP_ASCENSO_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(200);
  });

  it('cada reactivo cumple estrictamente con el contrato de datos y calidad de distractores', () => {
    const validLetters = ['A', 'B', 'C', 'D'];

    ANSP_ASCENSO_QUESTIONS.forEach((q) => {
      // Campos requeridos no vacíos
      expect(q.id.trim().length).toBeGreaterThan(0);
      expect(q.statement.trim().length).toBeGreaterThan(20);
      expect(q.topic.trim().length).toBeGreaterThan(0);
      expect(q.explanation.trim().length).toBeGreaterThan(20);
      expect(q.legalBasis.trim().length).toBeGreaterThan(5);

      // Escalafón y rank válidos
      expect(['Cabo', 'Sargento', 'Oficial']).toContain(q.escalafon);
      expect(['cabo', 'sargento', 'oficial']).toContain(q.rank);

      // Opciones: exactamente 4 { key, text }
      expect(q.options).toHaveLength(4);
      const optionKeys = q.options.map((o) => o.key);
      expect(optionKeys).toEqual(['A', 'B', 'C', 'D']);
      q.options.forEach((opt) => {
        expect(opt.text.trim().length).toBeGreaterThan(5);
      });

      // Clave correcta
      expect(validLetters).toContain(q.correctAnswer);
      const correctExists = q.options.some((o) => o.key === q.correctAnswer);
      expect(correctExists).toBe(true);

      // Rationale para todos los distractores
      expect(q.distractorRationale).toBeDefined();
      validLetters.forEach((letter) => {
        expect(q.distractorRationale[letter as 'A' | 'B' | 'C' | 'D']).toBeDefined();
        expect(q.distractorRationale[letter as 'A' | 'B' | 'C' | 'D'].trim().length).toBeGreaterThan(5);
      });
    });
  });

  it('incorpora los temas normativos y operativos requeridos por el estándar salvadoreño e internacional', () => {
    const allStatementsAndBases = ANSP_ASCENSO_QUESTIONS.map(
      (q) => `${q.topic} ${q.statement} ${q.legalBasis} ${q.explanation}`
    ).join(' ');

    // 1. Procedimientos ITOP y embalaje balístico
    expect(allStatementsAndBases).toMatch(/ITOP|Inspección Técnica Ocular/i);
    expect(allStatementsAndBases).toMatch(/balístic|casquill/i);

    // 2. Flagrancia material y Ley de Responsabilidad Penal Juvenil
    expect(allStatementsAndBases).toMatch(/flagrancia/i);
    expect(allStatementsAndBases).toMatch(/Ley de Responsabilidad Penal Juvenil|LRPJ/i);

    // 3. Cadena de custodia
    expect(allStatementsAndBases).toMatch(/cadena de custodia/i);

    // 4. Auxilio urgente bajo LEIV
    expect(allStatementsAndBases).toMatch(/LEIV|Vida Libre de Violencia para las Mujeres/i);

    // 5. Dirección funcional con FGR
    expect(allStatementsAndBases).toMatch(/Fiscalía General de la República|FGR|dirección funcional/i);

    // 6. Régimen disciplinario de la Ley de la Carrera Policial
    expect(allStatementsAndBases).toMatch(/Ley de la Carrera Policial/i);
    expect(allStatementsAndBases).toMatch(/falta muy grave|faltas graves/i);

    // 7. Control de armería y bitácora de armamento
    expect(allStatementsAndBases).toMatch(/armería|bitácora|arma de equipo/i);

    // 8. Régimen de excepción y derechos inderogables (Arts. 29-31 Cn.)
    expect(allStatementsAndBases).toMatch(/régimen de excepción/i);
    expect(allStatementsAndBases).toMatch(/inderogable|Art\. 31|29.*Constitución/i);

    // 9. Estándares ONU y Corte IDH sobre proporcionalidad y uso de la fuerza
    expect(allStatementsAndBases).toMatch(/ONU|Corte Interamericana|Corte IDH/i);
    expect(allStatementsAndBases).toMatch(/proporcionalidad|necesidad|uso.*fuerza/i);

    // 10. Intervención de telecomunicaciones bajo la LEIT
    expect(allStatementsAndBases).toMatch(/LEIT|Intervención de las Telecomunicaciones/i);
  });

  it('mantiene la metadata de escalafones en POLICE_RANKS', () => {
    expect(POLICE_RANKS.length).toBe(4);
    const rankIds = POLICE_RANKS.map((r) => r.id);
    expect(rankIds).toEqual(['all', 'cabo', 'sargento', 'oficial']);
  });
});

describe('Módulo de Cumplimiento Normativo: AML y Seguros SSF', () => {
  it('contiene exactamente 200 preguntas completas en COMPLIANCE_QUESTIONS', () => {
    expect(COMPLIANCE_QUESTIONS).toBeDefined();
    expect(COMPLIANCE_QUESTIONS.length).toBe(200);
  });

  it('mantiene retrocompatibilidad idéntica con COMPLIANCE_QUESTIONS_DATA (200 preguntas)', () => {
    expect(COMPLIANCE_QUESTIONS_DATA).toBeDefined();
    expect(COMPLIANCE_QUESTIONS_DATA.length).toBe(200);
    expect(COMPLIANCE_QUESTIONS_DATA).toBe(COMPLIANCE_QUESTIONS);
  });

  it('distribuye exactamente 100 preguntas de AML y 100 preguntas de Seguros', () => {
    const aml = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'AML');
    const seguros = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'Seguros');

    expect(aml.length).toBe(100);
    expect(seguros.length).toBe(100);
  });

  it('todas las preguntas poseen identificadores únicos', () => {
    const ids = COMPLIANCE_QUESTIONS.map((q) => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(200);
  });

  it('cada pregunta cumple con el contrato de opciones objeto { A, B, C, D } y respuestas válidas', () => {
    const validLetters = ['A', 'B', 'C', 'D'];

    COMPLIANCE_QUESTIONS.forEach((q) => {
      // Textos no vacíos
      expect(q.id.trim().length).toBeGreaterThan(0);
      expect(q.statement.trim().length).toBeGreaterThan(20);
      expect(q.area.trim().length).toBeGreaterThan(0);
      expect(q.categoryLabel.trim().length).toBeGreaterThan(0);
      expect(q.explanation.trim().length).toBeGreaterThan(20);
      expect(q.legalBasis.trim().length).toBeGreaterThan(5);

      // Categoría válida
      expect(['AML', 'Seguros']).toContain(q.category);

      // Opciones como objeto con claves A, B, C, D
      expect(q.options).toBeDefined();
      expect(typeof q.options).toBe('object');
      expect(Array.isArray(q.options)).toBe(false);
      validLetters.forEach((letter) => {
        const optText = q.options[letter as 'A' | 'B' | 'C' | 'D'];
        expect(typeof optText).toBe('string');
        expect(optText.trim().length).toBeGreaterThan(5);
      });

      // Clave correcta válida
      expect(validLetters).toContain(q.correctAnswer);
      expect(q.options[q.correctAnswer]).toBeDefined();

      // Distractor rationales
      expect(q.distractorRationale).toBeDefined();
    });
  });

  it('incorpora los temas regulatorios exigidos de AML y Seguros mercantiles', () => {
    const allAmlText = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'AML')
      .map((q) => `${q.statement} ${q.explanation} ${q.legalBasis} ${q.area}`)
      .join(' ');

    const allSegurosText = COMPLIANCE_QUESTIONS.filter((q) => q.category === 'Seguros')
      .map((q) => `${q.statement} ${q.explanation} ${q.legalBasis} ${q.area}`)
      .join(' ');

    // 1. Tipología UIF: Pitufeo / Estructuración (Smurfing)
    expect(allAmlText).toMatch(/pitufeo|estructuración|smurfing/i);

    // 2. Debida Diligencia Intensificada (DDI), PEPs, offshore y fideicomisos
    expect(allAmlText).toMatch(/Debida Diligencia Intensificada|DDI|reforzada/i);
    expect(allAmlText).toMatch(/PEP|Personas Expuestas Políticamente/i);
    expect(allAmlText).toMatch(/offshore|fideicomiso/i);

    // 3. Sujetos obligados no financieros (APNFD Art. 9-A LCLDA)
    expect(allAmlText).toMatch(/APNFD|Sujetos Obligados No Financieros|9-A/i);
    expect(allAmlText).toMatch(/bienes raíces|vehículos|metales/i);

    // 4. Beneficiario Final (UBO >= 10%)
    expect(allAmlText).toMatch(/Beneficiario Final|UBO|10%/i);

    // 5. Autonomía del delito de lavado y extinción de dominio (LEDAB)
    expect(allAmlText).toMatch(/autónom/i);
    expect(allAmlText).toMatch(/extinción de dominio|LEDAB/i);

    // 6. Infraseguro y regla proporcional (Art. 1383 C.Com.)
    expect(allSegurosText).toMatch(/infraseguro/i);
    expect(allSegurosText).toMatch(/1383/);
    expect(allSegurosText).toMatch(/regla proporcional/i);

    // 7. Sobreseguro doloso vs de buena fe (Art. 1381 C.Com.)
    expect(allSegurosText).toMatch(/sobreseguro/i);
    expect(allSegurosText).toMatch(/1381/);

    // 8. Subrogación legal mercantil de la aseguradora (Arts. 1391 y 1393 C.Com.)
    expect(allSegurosText).toMatch(/subrog/i);
    expect(allSegurosText).toMatch(/1391|1393/);

    // 9. Cláusula de suicidio de 2 años e incontestabilidad
    expect(allSegurosText).toMatch(/suicidio/i);
    expect(allSegurosText).toMatch(/dos años|2 años/i);
    expect(allSegurosText).toMatch(/incontestabilidad|1481/i);

    // 10. Fianzas de compras públicas (cumplimiento, anticipo, buena obra)
    expect(allSegurosText).toMatch(/cumplimiento de contrato/i);
    expect(allSegurosText).toMatch(/anticipo/i);
    expect(allSegurosText).toMatch(/buena obra/i);
  });

  it('mantiene la estructura y sectores de COMPLIANCE_SECTORS', () => {
    expect(COMPLIANCE_SECTORS.length).toBe(3);
    const sectorIds = COMPLIANCE_SECTORS.map((s) => s.id);
    expect(sectorIds).toContain('all');
    expect(sectorIds).toContain('AML');
    expect(sectorIds).toContain('Seguros');
  });
});
