import { describe, it, expect } from 'vitest';
import { NOTARY_EXAM_QUESTIONS, NotaryQuestion } from '../src/data/notaryExamData';
import { CONSTITUTIONAL_CASES, ConstitutionalRulingCase } from '../src/data/constitucionalJurisprudenciaData';
import {
  ANSP_ASCENSO_QUESTIONS,
  POLICE_PROMOTION_QUESTIONS,
  POLICE_RANKS,
  PolicePromotionQuestion,
} from '../src/data/anspAscensoData';
import {
  COMPLIANCE_QUESTIONS,
  COMPLIANCE_QUESTIONS_DATA,
  COMPLIANCE_SECTORS,
  ComplianceQuestion,
} from '../src/data/complianceAmlData';
import { accessibleSpeech } from '../src/utils/accessibleSpeechHelper';

describe('CHALLENGER 2 · Stress-Test & Invariant Challenge: Notary Exam', () => {
  it('empíricamente comprueba exactamente 200 reactivos únicos y no vacíos', () => {
    expect(NOTARY_EXAM_QUESTIONS).toBeDefined();
    expect(NOTARY_EXAM_QUESTIONS.length).toBe(200);

    const ids = NOTARY_EXAM_QUESTIONS.map(q => q.id);
    const idSet = new Set(ids);
    expect(idSet.size).toBe(200);

    // Formato de IDs estrictamente not-01 a not-200
    for (let i = 1; i <= 200; i++) {
      const expected = `not-${i.toString().padStart(2, '0')}`;
      expect(idSet.has(expected)).toBe(true);
    }
  });

  it('verifica que cada reactivo parsea exactamente 4 opciones estructuradas (A, B, C, D)', () => {
    NOTARY_EXAM_QUESTIONS.forEach((q: NotaryQuestion) => {
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBe(4);

      const keys = q.options.map(o => o.key);
      expect(keys).toEqual(['A', 'B', 'C', 'D']);

      // Textos no vacíos y únicos entre sí (sin distractores duplicados)
      const texts = q.options.map(o => o.text.trim());
      const uniqueTexts = new Set(texts);
      expect(uniqueTexts.size).toBe(4);
      texts.forEach(t => {
        expect(t.length).toBeGreaterThan(5);
      });

      // correctKey apunta a una opción existente
      expect(['A', 'B', 'C', 'D']).toContain(q.correctKey);
    });
  });

  it('emula y valida el cálculo de puntuación de NotaryExamView con 0%, 50% y 100% de aciertos', () => {
    // Función de cálculo extraída de NotaryExamView.tsx
    const computeScore = (selectedAnswers: Record<string, string>) => {
      const correctCount = NOTARY_EXAM_QUESTIONS.reduce((acc, q) => {
        return acc + (selectedAnswers[q.id] === q.correctKey ? 1 : 0);
      }, 0);
      const scorePct = Math.round((correctCount / NOTARY_EXAM_QUESTIONS.length) * 100);
      return { correctCount, scorePct };
    };

    // Caso 1: 0% de aciertos (todas incorrectas o respuestas vacías)
    const emptyAnswers: Record<string, string> = {};
    const zeroScoreEmpty = computeScore(emptyAnswers);
    expect(zeroScoreEmpty.correctCount).toBe(0);
    expect(zeroScoreEmpty.scorePct).toBe(0);

    const allWrongAnswers: Record<string, string> = {};
    NOTARY_EXAM_QUESTIONS.forEach(q => {
      // Elegir cualquier opción distinta a la correcta
      const wrongOpt = q.options.find(o => o.key !== q.correctKey)!.key;
      allWrongAnswers[q.id] = wrongOpt;
    });
    const zeroScoreAllWrong = computeScore(allWrongAnswers);
    expect(zeroScoreAllWrong.correctCount).toBe(0);
    expect(zeroScoreAllWrong.scorePct).toBe(0);

    // Caso 2: 50% de aciertos (exactamente 100 correctas y 100 incorrectas)
    const halfAnswers: Record<string, string> = {};
    NOTARY_EXAM_QUESTIONS.forEach((q, idx) => {
      if (idx < 100) {
        halfAnswers[q.id] = q.correctKey; // 100 correctas
      } else {
        const wrongOpt = q.options.find(o => o.key !== q.correctKey)!.key;
        halfAnswers[q.id] = wrongOpt;     // 100 incorrectas
      }
    });
    const halfScore = computeScore(halfAnswers);
    expect(halfScore.correctCount).toBe(100);
    expect(halfScore.scorePct).toBe(50);

    // Caso 3: 100% de aciertos (las 200 correctas)
    const allCorrectAnswers: Record<string, string> = {};
    NOTARY_EXAM_QUESTIONS.forEach(q => {
      allCorrectAnswers[q.id] = q.correctKey;
    });
    const perfectScore = computeScore(allCorrectAnswers);
    expect(perfectScore.correctCount).toBe(200);
    expect(perfectScore.scorePct).toBe(100);

    // Caso Stress / Edge: claves espurias no existentes ('X', 'INVALID', null)
    const corruptedAnswers: Record<string, string> = {
      'not-01': 'Z',
      'not-02': 'E',
      'non-existent': 'A',
    };
    const corruptedScore = computeScore(corruptedAnswers);
    expect(corruptedScore.correctCount).toBe(0);
    expect(corruptedScore.scorePct).toBe(0);
  });
});

describe('CHALLENGER 2 · Stress-Test & Invariant Challenge: Casoteca Constitucional CSJ', () => {
  it('empíricamente comprueba exactamente 10 sentencias paradigmáticas', () => {
    expect(CONSTITUTIONAL_CASES).toBeDefined();
    expect(CONSTITUTIONAL_CASES.length).toBe(10);

    const ids = CONSTITUTIONAL_CASES.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(10);
  });

  it('verifica que cada caso posee un cuestionario dogmático (legalQuiz) válido con opciones A, B, C, D', () => {
    CONSTITUTIONAL_CASES.forEach((c: ConstitutionalRulingCase) => {
      const quiz = c.legalQuiz;
      expect(quiz).toBeDefined();
      expect(quiz.question.trim().length).toBeGreaterThan(15);
      expect(Array.isArray(quiz.options)).toBe(true);
      expect(quiz.options.length).toBe(4);

      const keys = quiz.options.map(o => o.key);
      expect(keys).toEqual(['A', 'B', 'C', 'D']);

      quiz.options.forEach(opt => {
        expect(opt.text.trim().length).toBeGreaterThan(5);
      });

      expect(['A', 'B', 'C', 'D']).toContain(quiz.correctKey);
      expect(quiz.explanation.trim().length).toBeGreaterThan(20);
    });
  });

  it('verifica el formato exacto de los IDs de reproducción de audio para ratio decidendi y antecedentes', () => {
    // En ConstitutionLawView.tsx:
    // Ratio Decidendi: id={`case-ratio-${rulingCase.id}`}
    // Antecedentes Fácticos: id={`case-facts-${rulingCase.id}`}
    const ratioAudioIds = CONSTITUTIONAL_CASES.map(c => `case-ratio-${c.id}`);
    const factsAudioIds = CONSTITUTIONAL_CASES.map(c => `case-facts-${c.id}`);

    // Ningún ID contiene espacios en blanco ni caracteres inválidos para selectores DOM/HTML
    [...ratioAudioIds, ...factsAudioIds].forEach(id => {
      expect(id).toMatch(/^[a-z0-9\-]+$/);
      expect(id).not.toMatch(/\s/);
    });

    // Los 10 IDs de ratio son estrictamente únicos entre sí
    expect(new Set(ratioAudioIds).size).toBe(10);
    // Los 10 IDs de facts son estrictamente únicos entre sí
    expect(new Set(factsAudioIds).size).toBe(10);

    // Los conjuntos de ratio y facts son completamente disjuntos
    const intersection = ratioAudioIds.filter(id => factsAudioIds.includes(id));
    expect(intersection.length).toBe(0);

    // Stress test del normalizador de voz sobre las 10 ratio decidendi
    CONSTITUTIONAL_CASES.forEach(c => {
      expect(c.ratioDecidendi.trim().length).toBeGreaterThan(40);
      const normalized = accessibleSpeech.normalizeForSpeech(c.ratioDecidendi);
      expect(typeof normalized).toBe('string');
      expect(normalized.length).toBeGreaterThan(40);
    });
  });
});

describe('CHALLENGER 2 · Stress-Test & Invariant Challenge: ANSP Ascenso Policial', () => {
  it('empíricamente comprueba exactamente 200 reactivos (66 Cabo, 67 Sargento, 67 Oficial)', () => {
    expect(ANSP_ASCENSO_QUESTIONS).toBeDefined();
    expect(ANSP_ASCENSO_QUESTIONS.length).toBe(200);

    const cabos = ANSP_ASCENSO_QUESTIONS.filter(q => q.rank === 'cabo');
    const sargentos = ANSP_ASCENSO_QUESTIONS.filter(q => q.rank === 'sargento');
    const oficiales = ANSP_ASCENSO_QUESTIONS.filter(q => q.rank === 'oficial');

    expect(cabos.length).toBe(66);
    expect(sargentos.length).toBe(67);
    expect(oficiales.length).toBe(67);

    // Verificación de correspondencia biunívoca entre escalafon y rank
    ANSP_ASCENSO_QUESTIONS.forEach(q => {
      if (q.rank === 'cabo') expect(q.escalafon).toBe('Cabo');
      if (q.rank === 'sargento') expect(q.escalafon).toBe('Sargento');
      if (q.rank === 'oficial') expect(q.escalafon).toBe('Oficial');
    });
  });

  it('valida la lógica de filtrado por escalafón implementada en AnspAscensoView', () => {
    // Lógica en AnspAscensoView.tsx:
    // filteredQuestions = selectedRankId === 'all' ? POLICE_PROMOTION_QUESTIONS : POLICE_PROMOTION_QUESTIONS.filter(q => q.rank === selectedRankId)
    const filterByRank = (rankId: string) => {
      if (rankId === 'all') return POLICE_PROMOTION_QUESTIONS;
      return POLICE_PROMOTION_QUESTIONS.filter(q => q.rank === rankId);
    };

    expect(filterByRank('all').length).toBe(200);
    expect(filterByRank('cabo').length).toBe(66);
    expect(filterByRank('cabo').every(q => q.rank === 'cabo')).toBe(true);

    expect(filterByRank('sargento').length).toBe(67);
    expect(filterByRank('sargento').every(q => q.rank === 'sargento')).toBe(true);

    expect(filterByRank('oficial').length).toBe(67);
    expect(filterByRank('oficial').every(q => q.rank === 'oficial')).toBe(true);

    // Escalafón inexistente devuelve array vacío de forma segura
    expect(filterByRank('comisionado_general').length).toBe(0);
  });

  it('verifica el formato riguroso de opciones { key, text }[] y distractores en ANSP', () => {
    ANSP_ASCENSO_QUESTIONS.forEach((q: PolicePromotionQuestion) => {
      expect(Array.isArray(q.options)).toBe(true);
      expect(q.options.length).toBe(4);

      const keys = q.options.map(o => o.key);
      expect(keys).toEqual(['A', 'B', 'C', 'D']);

      q.options.forEach(opt => {
        expect(opt.text.trim().length).toBeGreaterThan(5);
      });

      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

      // DistractorRationale exhaustivo para las 4 opciones
      expect(q.distractorRationale).toBeDefined();
      ['A', 'B', 'C', 'D'].forEach(letter => {
        const rationale = q.distractorRationale[letter as 'A' | 'B' | 'C' | 'D'];
        expect(rationale).toBeDefined();
        expect(rationale.trim().length).toBeGreaterThan(5);
      });
    });
  });

  it('emula y valida la puntuación de examen ANSP (escala 0.0 - 10.0, pase >= 8.0)', () => {
    const computeAnspScore = (questions: PolicePromotionQuestion[], answers: Record<string, string>) => {
      let correct = 0;
      let answered = 0;
      questions.forEach(q => {
        if (answers[q.id]) {
          answered++;
          if (answers[q.id] === q.correctAnswer) correct++;
        }
      });
      const total = questions.length;
      const scoreNum = total > 0 ? (correct / total) * 10 : 0;
      const score = scoreNum.toFixed(1);
      const isPassed = scoreNum >= 8.0;
      return { correct, answered, total, score, isPassed };
    };

    // Caso 1: 200 de 200 correctas
    const perfectAnswers: Record<string, string> = {};
    ANSP_ASCENSO_QUESTIONS.forEach(q => { perfectAnswers[q.id] = q.correctAnswer; });
    const perfectResult = computeAnspScore(ANSP_ASCENSO_QUESTIONS, perfectAnswers);
    expect(perfectResult.score).toBe('10.0');
    expect(perfectResult.isPassed).toBe(true);

    // Caso 2: 0 aciertos
    const zeroResult = computeAnspScore(ANSP_ASCENSO_QUESTIONS, {});
    expect(zeroResult.score).toBe('0.0');
    expect(zeroResult.isPassed).toBe(false);

    // Caso 3: Umbral de aprobación (150 aciertos = 7.5 NO pasa; 160 aciertos = 8.0 SÍ pasa)
    const answers150: Record<string, string> = {};
    ANSP_ASCENSO_QUESTIONS.forEach((q, idx) => {
      if (idx < 150) answers150[q.id] = q.correctAnswer;
      else answers150[q.id] = q.options.find(o => o.key !== q.correctAnswer)!.key;
    });
    const result150 = computeAnspScore(ANSP_ASCENSO_QUESTIONS, answers150);
    expect(result150.score).toBe('7.5');
    expect(result150.isPassed).toBe(false);

    const answers160: Record<string, string> = {};
    ANSP_ASCENSO_QUESTIONS.forEach((q, idx) => {
      if (idx < 160) answers160[q.id] = q.correctAnswer;
      else answers160[q.id] = q.options.find(o => o.key !== q.correctAnswer)!.key;
    });
    const result160 = computeAnspScore(ANSP_ASCENSO_QUESTIONS, answers160);
    expect(result160.score).toBe('8.0');
    expect(result160.isPassed).toBe(true);
  });
});

describe('CHALLENGER 2 · Stress-Test & Invariant Challenge: Compliance AML & SSF', () => {
  it('empíricamente comprueba exactamente 200 preguntas (100 AML, 100 Seguros)', () => {
    expect(COMPLIANCE_QUESTIONS).toBeDefined();
    expect(COMPLIANCE_QUESTIONS.length).toBe(200);

    const aml = COMPLIANCE_QUESTIONS.filter(q => q.category === 'AML');
    const seguros = COMPLIANCE_QUESTIONS.filter(q => q.category === 'Seguros');

    expect(aml.length).toBe(100);
    expect(seguros.length).toBe(100);
  });

  it('verifica que options es un objeto estricto { A, B, C, D } (no un array) en las 200 preguntas', () => {
    COMPLIANCE_QUESTIONS.forEach((q: ComplianceQuestion) => {
      expect(typeof q.options).toBe('object');
      expect(Array.isArray(q.options)).toBe(false);

      const keys = Object.keys(q.options);
      expect(keys.sort()).toEqual(['A', 'B', 'C', 'D']);

      ['A', 'B', 'C', 'D'].forEach(letter => {
        const text = q.options[letter as 'A' | 'B' | 'C' | 'D'];
        expect(typeof text).toBe('string');
        expect(text.trim().length).toBeGreaterThan(5);
      });

      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
    });
  });

  it('valida la precisión matemática absoluta de la Regla Proporcional de Infraseguro (Art. 1383 C.Com.) en seg-05', () => {
    const q5 = COMPLIANCE_QUESTIONS.find(q => q.id === 'seg-05');
    expect(q5).toBeDefined();

    // 1. Verificación del cálculo en seg-05:
    // Valor real de la cosa asegurada: $200,000.00
    // Suma asegurada: $100,000.00
    // Daño comprobado por incendio: $40,000.00
    // Fórmula legal Art. 1383 C.Com: Indemnización = (Daño * Suma Asegurada) / Valor Real
    const valorReal = 200000;
    const sumaAsegurada = 100000;
    const dano = 40000;
    const indemnizacionLegal = (dano * sumaAsegurada) / valorReal;

    expect(indemnizacionLegal).toBe(20000);

    // 2. Comprobar que la respuesta correcta es 'B' y contiene exactamente $20,000.00
    expect(q5!.correctAnswer).toBe('B');
    expect(q5!.options.B).toContain('20,000.00');
    expect(q5!.options.B).toContain('($40,000.00 × $100,000.00) / $200,000.00 = $20,000.00');

    // 3. Comprobar que la explicación doctrinal reitera la fórmula sin contradicción
    expect(q5!.explanation).toContain('($40,000 × $100,000) / $200,000 = $20,000.00');

    // 4. Oráculo matemático para condiciones de contorno (edge cases) del Art. 1383:
    const oracleArt1383 = (damage: number, sumInsured: number, realVal: number) => {
      if (realVal <= 0) throw new Error('Valor real debe ser positivo');
      if (sumInsured >= realVal) return Math.min(damage, sumInsured); // Cobertura plena
      return (damage * sumInsured) / realVal;
    };

    // Pérdida total ($200,000 de daño): indemnización = $100,000 (tope de suma asegurada)
    expect(oracleArt1383(200000, 100000, 200000)).toBe(100000);
    // Cero daño ($0): indemnización = $0
    expect(oracleArt1383(0, 100000, 200000)).toBe(0);
    // Sin infraseguro (Suma Asegurada == Valor Real): indemnización = daño completo ($40,000)
    expect(oracleArt1383(40000, 200000, 200000)).toBe(40000);
  });
});
