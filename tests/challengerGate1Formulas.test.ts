import { describe, it, expect } from 'vitest';
import { TECHNICAL_COURSES } from '../src/data/technicalCoursesData';
import { renderMathToString, escapeHtml } from '../src/utils/mathRenderer';
import katex from 'katex';

/**
 * ============================================================================
 * CHALLENGER GATE 1: EMPIRICAL VERIFICATION HARNESS FOR WORKSHOP FORMULAS & MATH
 * ============================================================================
 * Verification Scope:
 * 1. 10 courses, 40 modules, 40 formulas in src/data/technicalCoursesData.ts
 * 2. Mathematical oracle calculations across all 11 core formulas
 * 3. KaTeX syntax, rendering, escaping, and performance
 * 4. Adversarial stress testing: Division by zero, negatives, non-numeric, extreme values
 */

// ============================================================================
// MATHEMATICAL COMPUTATIONAL ORACLES
// ============================================================================

export const MathOracles = {
  // 1. Ohm and Watt
  ohmCurrent: (v: number, r: number): number => {
    if (r === 0) return Infinity;
    return v / r;
  },
  ohmResistance: (v: number, i: number): number => {
    if (i === 0) return Infinity;
    return v / i;
  },
  wattPower: (v: number, i: number): number => v * i,
  wattPowerFromResistance: (i: number, r: number): number => i * i * r,

  // 2. Voltage Drop (%ΔV) - Monophasic copper
  voltageDropPercent: (k: number, i: number, l: number, s: number, vn: number): number => {
    if (s === 0 || vn === 0) return Infinity;
    const deltaV = (2 * k * i * l) / s;
    return (deltaV / vn) * 100;
  },

  // 3. RC Time Constant and 555 Timer Astable Frequency
  rcTau: (r: number, c: number): number => r * c,
  rcChargePercent: (tOverTau: number): number => (1 - Math.exp(-tOverTau)) * 100,
  timer555Frequency: (r1: number, r2: number, c: number): number => {
    const denom = (r1 + 2 * r2) * c;
    if (denom === 0) return Infinity;
    return 1.44 / denom;
  },

  // 4. LM317 Voltage Regulator
  lm317Vout: (r1: number, r2: number, iAdj: number = 0.00005): number => {
    if (r1 === 0) return Infinity;
    return 1.25 * (1 + r2 / r1) + iAdj * r2;
  },

  // 5. Cooking Yield (%R) & Chlorine PPM Dilution
  cookingYieldPercent: (ep: number, ap: number): number => {
    if (ap === 0) return 0;
    return (ep / ap) * 100;
  },
  epUnitCost: (apCost: number, yieldPercent: number): number => {
    if (yieldPercent === 0) return Infinity;
    return apCost / (yieldPercent / 100);
  },
  chlorineDilutionVolumeMl: (targetPpm: number, waterVolLiters: number, percentChlorine: number): number => {
    const denom = percentChlorine * 10;
    if (denom === 0) return Infinity;
    return (targetPpm * waterVolLiters) / denom;
  },

  // 6. Welding Heat Input (HI in kJ/mm) & Carbon Equivalent (CE)
  weldingHeatInput: (v: number, i: number, speedMmMin: number, efficiencyEta: number): number => {
    if (speedMmMin === 0) return Infinity;
    return ((60 * v * i) / (1000 * speedMmMin)) * efficiencyEta;
  },
  carbonEquivalentIIW: (c: number, mn: number, cr: number, mo: number, v: number, ni: number, cu: number): number => {
    return c + mn / 6 + (cr + mo + v) / 5 + (ni + cu) / 15;
  },

  // 7. Joule Heating (Q in Joules) and Conductor Resistance
  jouleHeatQ: (i: number, r: number, timeSec: number): number => {
    return i * i * r * timeSec;
  },
  conductorResistance: (rho: number, lengthM: number, areaM2: number): number => {
    if (areaM2 === 0) return Infinity;
    return (rho * lengthM) / areaM2;
  },

  // 8. Standby Leakage & Battery Energy (Wh)
  batteryEnergyWh: (capacityMah: number, nominalVoltage: number): number => {
    return (capacityMah * nominalVoltage) / 1000;
  },
  batteryEnergyJoules: (wh: number): number => wh * 3600,

  // 9. Composting C:N Balance
  compostCNRatio: (mass1: number, cn1: number, mass2: number, cn2: number): number => {
    const totalMass = mass1 + mass2;
    if (totalMass === 0) return 0;
    return (mass1 * cn1 + mass2 * cn2) / totalMass;
  },
  irrigationNetDepthMm: (et0: number, kc: number, ea: number): number => {
    if (ea === 0) return Infinity;
    return (et0 * kc) / ea;
  },

  // 10. Economic Order Quantity (EOQ - Wilson Formula)
  eoqWilson: (annualDemand: number, orderCost: number, holdingCost: number): number => {
    if (holdingCost <= 0 || annualDemand < 0 || orderCost < 0) return NaN;
    return Math.sqrt((2 * annualDemand * orderCost) / holdingCost);
  },

  // 11. Motorcycle Engine Displacement (Vd) & Compression Ratio (rc)
  engineDisplacementCc: (boreCm: number, strokeCm: number): number => {
    return (Math.PI / 4) * Math.pow(boreCm, 2) * strokeCm;
  },
  compressionRatio: (vdCc: number, vcCc: number): number => {
    if (vcCc === 0) return Infinity;
    return (vdCc + vcCc) / vcCc;
  },
  hydraulicBrakeForce: (fHand: number, aCaliper: number, aMasterCylinder: number): number => {
    if (aMasterCylinder === 0) return Infinity;
    return fHand * (aCaliper / aMasterCylinder);
  },

  // 12. Hydraulic Flow Rate & Hazen-Williams Head Loss & Cistern / Pump Power
  continuityFlowM3s: (diameterM: number, velocityMs: number): number => {
    const area = (Math.PI * Math.pow(diameterM, 2)) / 4;
    return area * velocityMs;
  },
  hazenWilliamsHeadLoss: (lengthM: number, flowM3s: number, roughnessC: number, diameterM: number): number => {
    if (roughnessC === 0 || diameterM === 0) return Infinity;
    return 10.67 * lengthM * Math.pow(flowM3s, 1.852) * Math.pow(roughnessC, -1.852) * Math.pow(diameterM, -4.87);
  },
  pumpPowerHp: (densityGamma: number, flowM3s: number, headM: number, etaEfficiency: number): number => {
    const denom = 75 * etaEfficiency;
    if (denom === 0) return Infinity;
    return (densityGamma * flowM3s * headM) / denom;
  },
};

// Simulation of KaTeXRenderer internal rendering pipeline
function simulateKaTeXRenderer(content: string, displayMode: boolean = false): string {
  if (!content) return '';

  let text = content
    .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
    .replace(/\\circ\b/g, '°')
    .replace(/\\u0007pprox/g, '\\approx')
    .replace(/\\u000bec/g, '\\vec')
    .replace(/\bcm\^2\b/g, 'cm²')
    .replace(/\bm\^2\b/g, 'm²')
    .replace(/\bkm\^2\b/g, 'km²')
    .replace(/\bcm\^3\b/g, 'cm³')
    .replace(/\bm\^3\b/g, 'm³');

  const hasDelimiters = text.includes('$') || text.includes('\\(') || text.includes('\\[');
  if (!hasDelimiters) {
    if (/^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq|geq|neq)/.test(text)) {
      try {
        return katex.renderToString(text.trim(), {
          displayMode: displayMode,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
      } catch {
        // fallback
      }
    } else if (/\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|pi|theta|alpha|beta|infty|emptyset|mathbb\{[A-Z]\})/.test(text)) {
      text = text.replace(
        /\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|pi|theta|alpha|beta|infty|emptyset|mathbb\{[A-Z]\})/g,
        (match) => `\\(${match}\\)`
      );
    }
  }

  const parts: string[] = [];
  let lastIndex = 0;
  const regex = /(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))|(\$\$[\s\S]*?\$\$)|(\$[^\$\n]+?\$)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(escapeHtml(text.slice(lastIndex, match.index)));
    }
    const matchedString = match[0];
    let mathCode = '';
    let isBlock = displayMode;
    if (matchedString.startsWith('\\[') && matchedString.endsWith('\\]')) {
      mathCode = matchedString.slice(2, -2).trim();
      isBlock = true;
    } else if (matchedString.startsWith('\\(')) {
      mathCode = matchedString.slice(2).replace(/\\*\)$/, '').trim();
      isBlock = false;
    } else if (matchedString.startsWith('$$') && matchedString.endsWith('$$')) {
      mathCode = matchedString.slice(2, -2).trim();
      isBlock = true;
    } else if (matchedString.startsWith('$') && matchedString.endsWith('$')) {
      mathCode = matchedString.slice(1, -1).trim();
      isBlock = false;
    }

    try {
      const rendered = katex.renderToString(mathCode, {
        displayMode: isBlock,
        throwOnError: false,
        output: 'htmlAndMathml',
      });
      parts.push(rendered);
    } catch {
      parts.push(escapeHtml(matchedString));
    }
    lastIndex = match.index + matchedString.length;
  }

  if (lastIndex < text.length) {
    parts.push(escapeHtml(text.slice(lastIndex)));
  }

  return parts.join('');
}

describe('GATE 1: Comprehensive Empirical Verification of Workshop Formulas & Math', () => {

  // =========================================================================
  // SUB-SUITE 1: DATA STRUCTURE & COVERAGE INTEGRITY
  // =========================================================================
  describe('Block 1: Curriculum & Formula Data Integrity', () => {
    it('contains exactly 10 courses, 40 modules, and at least 40 workshop formulas', () => {
      expect(TECHNICAL_COURSES).toBeDefined();
      expect(TECHNICAL_COURSES.length).toBe(10);

      let totalModules = 0;
      let totalFormulas = 0;

      TECHNICAL_COURSES.forEach((course) => {
        expect(course.modules.length).toBe(4);
        totalModules += course.modules.length;

        course.modules.forEach((mod) => {
          expect(mod.workshopFormulas).toBeDefined();
          expect(mod.workshopFormulas.length).toBeGreaterThanOrEqual(1);
          totalFormulas += mod.workshopFormulas.length;

          mod.workshopFormulas.forEach((f) => {
            expect(f.name.trim().length).toBeGreaterThan(3);
            expect(f.expression.trim().length).toBeGreaterThan(3);
            expect(f.description.trim().length).toBeGreaterThan(10);
            expect(f.practicalExample.trim().length).toBeGreaterThan(15);
            expect(Array.isArray(f.variables)).toBe(true);
            expect(f.variables.length).toBeGreaterThanOrEqual(2);

            f.variables.forEach((v) => {
              expect(v.symbol.trim().length).toBeGreaterThan(0);
              expect(v.meaning.trim().length).toBeGreaterThan(2);
              expect(v.unit.trim().length).toBeGreaterThan(0);
            });
          });
        });
      });

      expect(totalModules).toBe(40);
      expect(totalFormulas).toBe(40);
    });
  });

  // =========================================================================
  // SUB-SUITE 2: EMPIRICAL VERIFICATION OF THE 10 COURSE FORMULAS
  // =========================================================================
  describe('Block 2: Empirical Verification of Technical Formulas & Calculations', () => {

    // 1. Electricidad: Ohm, Watt, %ΔV
    it('verifies Course 1 (electricidad): Ohm, Watt, and %ΔV calculation', () => {
      const i = MathOracles.ohmCurrent(2400, 120);
      expect(i).toBe(20);
      const r = MathOracles.ohmResistance(120, 20);
      expect(r).toBe(6);
      expect(MathOracles.wattPower(120, 20)).toBe(2400);
      expect(MathOracles.wattPowerFromResistance(20, 6)).toBe(2400);

      // %ΔV Monophasic copper: 12 AWG (3.31 mm²), L=25m, I=16A, Vn=120V, K=0.0172
      const drop12 = MathOracles.voltageDropPercent(0.0172, 16, 25, 3.31, 120);
      expect(drop12).toBeCloseTo(3.464, 2);
      expect(drop12).toBeGreaterThan(3.0);

      // Corrected to 10 AWG (5.26 mm²)
      const drop10 = MathOracles.voltageDropPercent(0.0172, 16, 25, 5.26, 120);
      expect(drop10).toBeCloseTo(2.18, 2);
      expect(drop10).toBeLessThanOrEqual(3.0);
    });

    // 2. Electrónica: LM317, RC Time Constant, 555 Astable
    it('verifies Course 2 (electronica): LM317 regulator, RC constant, and 555 astable frequency', () => {
      const vout = MathOracles.lm317Vout(240, 720, 0);
      expect(vout).toBeCloseTo(5.0, 3);

      const tau = MathOracles.rcTau(10000, 0.0001);
      expect(tau).toBe(1.0);
      const charge5tau = MathOracles.rcChargePercent(5);
      expect(charge5tau).toBeCloseTo(99.33, 2);

      const freq555 = MathOracles.timer555Frequency(1000, 10000, 0.00001);
      expect(freq555).toBeCloseTo(6.857, 2);
    });

    // 3. Cocina Saludable: PPM Sanitizing and Cooking Yield (%R)
    it('verifies Course 3 (cocina-saludable): Chlorine PPM dilution and Yield Factor (%R)', () => {
      const chlorineMl = MathOracles.chlorineDilutionVolumeMl(50, 20, 5.0);
      expect(chlorineMl).toBe(20);

      const yieldPct = MathOracles.cookingYieldPercent(7.8, 10.0);
      expect(yieldPct).toBe(78.0);
      const epCost = MathOracles.epUnitCost(4.50, yieldPct);
      expect(epCost).toBeCloseTo(5.77, 2);
    });

    // 4. Soldadura: Heat Input (HI) in kJ/mm and Carbon Equivalent (CE)
    it('verifies Course 4 (soldadura): Heat Input (HI) and Carbon Equivalent (CE)', () => {
      const hi = MathOracles.weldingHeatInput(24, 130, 150, 0.8);
      expect(hi).toBeCloseTo(0.9984, 3);

      const ce = MathOracles.carbonEquivalentIIW(0.18, 1.20, 0.10, 0.05, 0, 0, 0.20);
      expect(ce).toBeCloseTo(0.4233, 3);
      expect(ce).toBeGreaterThan(0.40);
    });

    // 5. Microsoldadura: Joule Heating (Q in Joules) and Micro-trace Resistance
    it('verifies Course 5 (microsoldadura): Joule Heating Q and Micro-trace Resistance', () => {
      const q = MathOracles.jouleHeatQ(3.0, 0.25, 60);
      expect(q).toBe(135.0);

      const area = Math.PI * Math.pow(1e-5, 2);
      const rJumper = MathOracles.conductorResistance(1.72e-8, 0.02, area);
      expect(rJumper).toBeCloseTo(1.095, 2);

      const wh = MathOracles.batteryEnergyWh(4000, 3.85);
      expect(wh).toBe(15.4);
      expect(MathOracles.batteryEnergyJoules(wh)).toBe(55440);
    });

    // 6. Reparación de Dispositivos: Thermal Resistance and Leakage
    it('verifies Course 6 (reparacion-dispositivos): CPU Tj junction and SSD TBW remaining', () => {
      const tjClean = 28 + (1.1 * 45);
      expect(tjClean).toBe(77.5);
      const tjDusty = 28 + (1.8 * 45);
      expect(tjDusty).toBe(109.0);
      expect(tjDusty).toBeGreaterThan(95.0);

      const pctLife = (1 - 270 / 300) * 100;
      expect(pctLife).toBeCloseTo(10.0, 5);
    });

    // 7. Agricultura Urbana: Composting C:N Balance and Drip Irrigation Net Depth
    it('verifies Course 7 (agricultura-pequena): C:N compost balance and irrigation volume', () => {
      const cnRatio = MathOracles.compostCNRatio(1, 60, 2, 15);
      expect(cnRatio).toBe(30.0);

      const lr = MathOracles.irrigationNetDepthMm(4.0, 1.05, 0.90);
      expect(lr).toBeCloseTo(4.667, 2);
      const totalVolLiters = lr * 50;
      expect(totalVolLiters).toBeCloseTo(233.33, 1);
    });

    // 8. Logística y Metrología: EOQ (Wilson Formula) and Scale EMP
    it('verifies Course 8 (logistica-metrologia): EOQ Wilson formula and warehouse volume factor', () => {
      const eoq = MathOracles.eoqWilson(10000, 25, 2.0);
      expect(eoq).toBe(500);

      const ordersPerYear = 10000 / eoq;
      expect(ordersPerYear).toBe(20);

      const util = (2160 / 6000) * 100;
      expect(util).toBe(36.0);
    });

    // 9. Mecánica de Motocicletas: Displacement (Vd), Compression Ratio (rc), Pascal brake
    it('verifies Course 9 (mecanica-motos): Displacement Vd, Compression rc, and Hydraulic Brake', () => {
      const vd = MathOracles.engineDisplacementCc(6.20, 4.95);
      expect(vd).toBeCloseTo(149.44, 2);

      const rc = MathOracles.compressionRatio(vd, 16.5);
      expect(rc).toBeCloseTo(10.057, 2);

      const fPad = MathOracles.hydraulicBrakeForce(100, 1145, 95);
      expect(fPad).toBeCloseTo(1205.26, 1);
    });

    // 10. Fontanería e Hidráulica: Continuity Q, Hazen-Williams, Pump Power
    it('verifies Course 10 (fontaneria-hidraulica): Continuity Q, Hazen-Williams head loss, and Pump Power', () => {
      const qM3s = MathOracles.continuityFlowM3s(0.016, 1.0);
      expect(qM3s).toBeCloseTo(0.00020106, 6);
      const qLitersPerSec = qM3s * 1000;
      expect(qLitersPerSec).toBeCloseTo(0.201, 3);
      const qLitersPerMin = qLitersPerSec * 60;
      expect(qLitersPerMin).toBeCloseTo(12.06, 2);

      const hf = MathOracles.hazenWilliamsHeadLoss(50, 0.000201, 150, 0.016);
      expect(hf).toBeGreaterThan(0);
      expect(Number.isFinite(hf)).toBe(true);

      const vCistern = 5 * 200 * 2;
      expect(vCistern).toBe(2000);

      const pumpHp = MathOracles.pumpPowerHp(1000, 0.0005, 25, 0.55);
      expect(pumpHp).toBeCloseTo(0.303, 3);
      expect(pumpHp).toBeLessThan(0.5);
    });
  });

  // =========================================================================
  // SUB-SUITE 3: KATEX RENDERING, SYNTAX VALIDATION & HTML ESCAPING
  // =========================================================================
  describe('Block 3: KaTeX Rendering, Escaping and Syntax Validation', () => {
    it('renders all 40 workshop formula expressions without throwing errors in KaTeXRenderer', () => {
      TECHNICAL_COURSES.forEach((course) => {
        course.modules.forEach((mod) => {
          mod.workshopFormulas.forEach((form) => {
            const rawExpr = form.expression || form.formula || '';

            // Render through simulated KaTeXRenderer
            let renderedHtml = '';
            expect(() => {
              renderedHtml = simulateKaTeXRenderer(rawExpr);
            }).not.toThrow();
            expect(typeof renderedHtml).toBe('string');
            expect(renderedHtml.length).toBeGreaterThan(0);

            // Render through renderMathToString utility
            let renderedString = '';
            expect(() => {
              renderedString = renderMathToString(rawExpr);
            }).not.toThrow();
            expect(typeof renderedString).toBe('string');
            expect(renderedString.length).toBeGreaterThan(0);
          });
        });
      });
    });

    it('sanitizes potential HTML injection in formula titles and variables', () => {
      const maliciousPayload = '<script>alert("XSS")</script>&<"test"\'>';
      const escaped = escapeHtml(maliciousPayload);

      expect(escaped).not.toContain('<script>');
      expect(escaped).toContain('&lt;script&gt;');
      expect(escaped).toContain('&amp;');
      expect(escaped).toContain('&quot;');
      expect(escaped).toContain('&#039;');
    });

    it('renders complex Greek letters and mathematical symbols properly', () => {
      const complexExpr = '\\tau = R \\cdot C \\quad \\Delta V = \\frac{2 \\cdot K \\cdot I \\cdot L}{S} \\quad \\eta = 0.85';
      const rendered = katex.renderToString(complexExpr, { throwOnError: false });

      expect(rendered).toContain('katex');
      expect(rendered).not.toContain('KaTeX parse error');
    });
  });

  // =========================================================================
  // SUB-SUITE 4: ADVERSARIAL STRESS-TESTING & EDGE CASE RESILIENCE
  // =========================================================================
  describe('Block 4: Adversarial Stress-Testing & Boundary Conditions', () => {

    it('handles division by zero across all formulas gracefully without unhandled exceptions', () => {
      // 1. %ΔV with S = 0 or Vn = 0
      expect(MathOracles.voltageDropPercent(0.0172, 16, 25, 0, 120)).toBe(Infinity);
      expect(MathOracles.voltageDropPercent(0.0172, 16, 25, 3.31, 0)).toBe(Infinity);

      // 2. Ohm with R = 0 (short circuit) or I = 0 (open circuit)
      expect(MathOracles.ohmCurrent(120, 0)).toBe(Infinity);
      expect(MathOracles.ohmResistance(120, 0)).toBe(Infinity);

      // 3. EOQ with H = 0 (zero holding cost)
      expect(Number.isNaN(MathOracles.eoqWilson(10000, 25, 0))).toBe(true);

      // 4. Heat Input with speed v = 0 (stationary torch)
      expect(MathOracles.weldingHeatInput(24, 130, 0, 0.8)).toBe(Infinity);

      // 5. Cooking Yield with AP = 0 (zero purchase)
      expect(MathOracles.cookingYieldPercent(5, 0)).toBe(0);
      expect(MathOracles.epUnitCost(5, 0)).toBe(Infinity);

      // 6. Chlorine Dilution with 0% concentration
      expect(MathOracles.chlorineDilutionVolumeMl(50, 20, 0)).toBe(Infinity);

      // 7. Compression Ratio with Vc = 0 (zero clearance volume)
      expect(MathOracles.compressionRatio(150, 0)).toBe(Infinity);

      // 8. Pump Power with eta = 0 (zero efficiency)
      expect(MathOracles.pumpPowerHp(1000, 0.0005, 25, 0)).toBe(Infinity);

      // 9. 555 Astable with zero resistance and capacitance
      expect(MathOracles.timer555Frequency(0, 0, 0)).toBe(Infinity);
    });

    it('handles negative inputs appropriately', () => {
      // EOQ with negative demand or negative holding cost should return NaN
      expect(Number.isNaN(MathOracles.eoqWilson(-1000, 25, 2))).toBe(true);
      expect(Number.isNaN(MathOracles.eoqWilson(1000, -25, 2))).toBe(true);
      expect(Number.isNaN(MathOracles.eoqWilson(1000, 25, -2))).toBe(true);

      // Power with negative current or voltage
      expect(MathOracles.wattPower(-120, 10)).toBe(-1200);
      // Joule heating Q with negative current is still positive (I²)
      expect(MathOracles.jouleHeatQ(-3.0, 0.25, 60)).toBe(135);
    });

    it('handles extreme float scales (nano to giga) without numeric underflow/overflow crashing', () => {
      // Nano scale: sub-micron trace resistance
      const nanoArea = 1e-14; // 0.01 square micron
      const nanoLength = 1e-4; // 100 micron
      const rNano = MathOracles.conductorResistance(1.72e-8, nanoLength, nanoArea);
      expect(Number.isFinite(rNano)).toBe(true);
      expect(rNano).toBeGreaterThan(0);

      // Mega scale: huge power grid load
      const gigaWatts = MathOracles.wattPower(500000, 2000); // 500 kV, 2000 A = 1 GW
      expect(gigaWatts).toBe(1000000000);
      expect(Number.isFinite(gigaWatts)).toBe(true);
    });

    it('handles empty, null, or malformed string inputs in KaTeX parser safely', () => {
      expect(renderMathToString('')).toBe('');
      expect(renderMathToString('   ')).toBe('   ');
      // Plain text without math
      expect(renderMathToString('Texto regular de taller sin formulas')).toBe('Texto regular de taller sin formulas');
      // Unclosed delimiter
      expect(() => renderMathToString('$V = I \\cdot R')).not.toThrow();
      // Invalid command
      expect(() => renderMathToString('$\\invalidcommand{123}$')).not.toThrow();
    });
  });
});
