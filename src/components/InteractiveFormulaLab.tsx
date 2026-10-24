import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  Activity,
  Heart,
  Pipette,
  Zap,
  RotateCcw,
  BookOpen,
  Info,
  ChevronRight,
  TrendingUp,
  Scale,
  Sparkles,
} from 'lucide-react';

export const InteractiveFormulaLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'poiseuille' | 'henderson' | 'pharmacokinetics' | 'projectile'>('poiseuille');

  // 1. POISEUILLE STATE
  const [radiusRatio, setRadiusRatio] = useState<number>(1.0); // 0.4 to 1.6
  const [pressureDelta, setPressureDelta] = useState<number>(100); // 50 to 180 mmHg
  const [viscosity, setViscosity] = useState<number>(1.0); // 0.7 to 2.0 (ej. anemia vs policitemia)

  // 2. HENDERSON-HASSELBALCH STATE (Blood Gas Analysis)
  const [hco3, setHco3] = useState<number>(24); // normal 22-26 mEq/L
  const [pco2, setPco2] = useState<number>(40); // normal 35-45 mmHg

  // 3. PHARMACOKINETICS STATE
  const [vd, setVd] = useState<number>(42); // Litros (Volumen de distribución)
  const [clearance, setClearance] = useState<number>(3.5); // L/h (Aclaramiento renal)

  // 4. PROJECTILE STATE
  const [velocity, setVelocity] = useState<number>(25); // m/s
  const [angle, setAngle] = useState<number>(45); // grados

  // Calculations
  const poiseuilleResults = useMemo(() => {
    // R proportional to 1 / r^4
    const relativeResistance = (1 / Math.pow(radiusRatio, 4)) * viscosity;
    // Flow Q = deltaP / R
    const relativeFlow = pressureDelta / relativeResistance;
    return {
      relativeResistance: relativeResistance.toFixed(2),
      relativeFlow: relativeFlow.toFixed(1),
      pctChangeR: ((relativeResistance - 1) * 100).toFixed(0),
    };
  }, [radiusRatio, pressureDelta, viscosity]);

  const hendersonResults = useMemo(() => {
    // pH = 6.1 + log10(HCO3 / (0.03 * PCO2))
    const denominator = 0.03 * pco2;
    const ratio = hco3 / denominator;
    const ph = 6.1 + Math.log10(ratio);

    let diagnosis = 'Estado Ácido-Base Normal';
    let diagnosisColor = 'text-[#1E7E34] bg-emerald-50 border-emerald-200';

    if (ph < 7.35) {
      if (pco2 > 45 && hco3 >= 24) {
        diagnosis = 'Acidosis Respiratoria';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      } else if (hco3 < 22) {
        diagnosis = 'Acidosis Metabólica';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      } else {
        diagnosis = 'Acidosis Mixta / No compensada';
        diagnosisColor = 'text-rose-900 bg-rose-50 border-rose-300';
      }
    } else if (ph > 7.45) {
      if (pco2 < 35) {
        diagnosis = 'Alcalosis Respiratoria';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      } else if (hco3 > 26) {
        diagnosis = 'Alcalosis Metabólica';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      } else {
        diagnosis = 'Alcalosis No compensada';
        diagnosisColor = 'text-blue-900 bg-blue-50 border-blue-300';
      }
    }

    return {
      ph: ph.toFixed(2),
      ratio: ratio.toFixed(1),
      diagnosis,
      diagnosisColor,
    };
  }, [hco3, pco2]);

  const pkResults = useMemo(() => {
    // t_1/2 = (0.693 * Vd) / CL
    const halfLifeHours = (0.693 * vd) / Math.max(0.1, clearance);
    // Steady state time is approximately 4 to 5 half-lives
    const steadyStateHours = halfLifeHours * 4.5;
    return {
      halfLife: halfLifeHours.toFixed(1),
      steadyState: steadyStateHours.toFixed(1),
    };
  }, [vd, clearance]);

  const projectileResults = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const g = 9.81;
    const maxRange = (Math.pow(velocity, 2) * Math.sin(2 * rad)) / g;
    const maxHeight = (Math.pow(velocity, 2) * Math.pow(Math.sin(rad), 2)) / (2 * g);
    const flightTime = (2 * velocity * Math.sin(rad)) / g;
    return {
      maxRange: maxRange.toFixed(1),
      maxHeight: maxHeight.toFixed(1),
      flightTime: flightTime.toFixed(1),
    };
  }, [velocity, angle]);

  return (
    <div className="space-y-6 max-w-5xl mx-auto font-sans-ui">
      {/* Encabezado Institucional */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-xl p-6 sm:p-8 text-white shadow-corporate-card relative overflow-hidden">
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#132A5C] text-[#C59B27] text-xs font-semibold font-mono-exam uppercase tracking-wider border border-[#C59B27]/30">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Laboratorio Pedagógico de Simulación Matemática & Biomédica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Simulador Interactivo de Fórmulas y Fisiología KUSKAT
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-3xl">
            Comprende intuitivamente los fenómenos cuantitativos clave para el <strong>Examen de Residentado Médico (ENAR)</strong>,
            la <strong>Física y Biofísica Médica</strong> y la <strong>Química Fisiológica</strong> mediante controles deslizantes en tiempo real.
          </p>
        </div>
      </div>

      {/* Selector de Pestañas de Fórmulas */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
        <button
          onClick={() => setActiveTab('poiseuille')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'poiseuille'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>1. Hemodinámica (Poiseuille)</span>
        </button>

        <button
          onClick={() => setActiveTab('henderson')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'henderson'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Pipette className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>2. Gases Arteriales & pH (Henderson)</span>
        </button>

        <button
          onClick={() => setActiveTab('pharmacokinetics')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'pharmacokinetics'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Heart className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>3. Farmacocinética (Vida Media)</span>
        </button>

        <button
          onClick={() => setActiveTab('projectile')}
          className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-mono-exam flex items-center gap-2 shrink-0 ${
            activeTab === 'projectile'
              ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
              : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#FAF9F5]'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>4. Cinemática de Proyectiles</span>
        </button>
      </div>

      {/* ==================================================================== */}
      {/* 1. HEMODINÁMICA DE POISEUILLE */}
      {/* ==================================================================== */}
      {activeTab === 'poiseuille' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Ley de Poiseuille & Resistencia Vascular
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-mono-exam">
                Ecuación: R = (8 · η · L) / (π · r⁴) • Flujo Q = ΔP / R
              </p>
            </div>

            {/* Slider Radio */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Radio Vascular Relativo (r):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">
                  {radiusRatio.toFixed(2)}x {radiusRatio < 1 ? '(Vasoconstricción)' : radiusRatio > 1 ? '(Vasodilatación)' : '(Basal)'}
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.05"
                value={radiusRatio}
                onChange={e => setRadiusRatio(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>0.50x (-50% Radio)</span>
                <span>1.00x (Normal)</span>
                <span>1.50x (+50% Radio)</span>
              </div>
            </div>

            {/* Slider Presión */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Gradiente de Presión de Perfusión (ΔP):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{pressureDelta} mmHg</span>
              </div>
              <input
                type="range"
                min="50"
                max="160"
                step="5"
                value={pressureDelta}
                onChange={e => setPressureDelta(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>50 mmHg (Hipotensión)</span>
                <span>100 mmHg (PAM normal)</span>
                <span>160 mmHg (Crisis HTA)</span>
              </div>
            </div>

            {/* Slider Viscosidad */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Viscosidad Sanguínea (η):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">
                  {viscosity.toFixed(2)}x {viscosity < 1 ? '(Anemia / Hemodilución)' : viscosity > 1 ? '(Policitemia / Deshidratación)' : '(Normal)'}
                </span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.6"
                step="0.05"
                value={viscosity}
                onChange={e => setViscosity(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
            </div>

            <button
              onClick={() => {
                setRadiusRatio(1.0);
                setPressureDelta(100);
                setViscosity(1.0);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores basales
            </button>
          </div>

          {/* Panel de Resultados Cuantitativos */}
          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Impacto Hemodinámico en Tiempo Real:
              </span>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Resistencia Vascular (R)</span>
                  <span className="text-xl font-bold font-mono-exam text-[#9E472A]">
                    {poiseuilleResults.relativeResistance}x
                  </span>
                  <span className="text-[10px] text-[#475569] block mt-0.5 font-mono-exam">
                    {poiseuilleResults.pctChangeR > '0' ? `+${poiseuilleResults.pctChangeR}%` : `${poiseuilleResults.pctChangeR}%`} vs basal
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Flujo Sanguíneo (Q)</span>
                  <span className="text-xl font-bold font-mono-exam text-[#0B1B3D]">
                    {poiseuilleResults.relativeFlow} u.a.
                  </span>
                  <span className="text-[10px] text-[#475569] block mt-0.5 font-mono-exam">
                    Perfusión tisular
                  </span>
                </div>
              </div>

              {/* Perla de Examen ENAR */}
              <div className="mt-4 p-3 bg-white rounded-lg border border-[#C59B27]/50 shadow-corporate-subtle text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Perla de Examen Clínico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  Dado que <strong>R ∝ 1/r⁴</strong>, un vaso contraído a la mitad (r = 0.5) multiplica la resistencia
                  por <strong>16 veces</strong>. Por ello, las arteriolas son los principales vasos de resistencia en la circulación sistémica.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Fórmula evaluada en el Examen de Residentado y Biofísica Médica
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 2. HENDERSON-HASSELBALCH & GASOMETRÍA ARTERIAL */}
      {/* ==================================================================== */}
      {activeTab === 'henderson' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Ecuación de Henderson-Hasselbalch & Equilibrio Ácido-Base
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-mono-exam">
                pH = 6.1 + log₁₀ [ HCO₃⁻ / (0.03 · PCO₂ ) ]
              </p>
            </div>

            {/* Slider Bicarbonato */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Bicarbonato Plasmático [HCO₃⁻]:</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{hco3} mEq/L</span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                step="1"
                value={hco3}
                onChange={e => setHco3(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>10 mEq/L (Consumo de buffer)</span>
                <span>24 mEq/L (Normal 22-26)</span>
                <span>40 mEq/L (Exceso alcalino)</span>
              </div>
            </div>

            {/* Slider PCO2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Presión Parcial de CO₂ (PCO₂):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{pco2} mmHg</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                step="1"
                value={pco2}
                onChange={e => setPco2(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>15 mmHg (Hiperventilación)</span>
                <span>40 mmHg (Normal 35-45)</span>
                <span>80 mmHg (Hipoventilación/EPOC)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setHco3(24);
                setPco2(40);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores fisiológicos normales
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Dictamen Gasométrico Instantáneo:
              </span>

              <div className="mt-3 p-4 bg-white rounded-lg border border-[#E5E3D8] shadow-corporate-subtle space-y-2 text-center">
                <span className="text-[11px] text-[#64748B] font-mono-exam uppercase block">pH Arterial Resultante</span>
                <span className="text-3xl font-extrabold font-mono-exam text-[#111625]">
                  {hendersonResults.ph}
                </span>
                <div className={`p-2 rounded-md border text-xs font-bold font-mono-exam ${hendersonResults.diagnosisColor}`}>
                  {hendersonResults.diagnosis}
                </div>
                <span className="text-[10px] text-[#64748B] block font-mono-exam pt-1">
                  Relación HCO₃⁻ / (0.03·PCO₂) = {hendersonResults.ratio} (Normal: 20:1)
                </span>
              </div>

              {/* Perla Clínica */}
              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Criterio para Residentado Médico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  Un pH menor de 7.35 define acidemia; si el PCO₂ está elevado (&gt;45 mmHg), el componente primario es respiratorio. Si el HCO₃⁻ está disminuido (&lt;22 mEq/L), es metabólico.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Compatible con Guías de Emergencia del MINSAL El Salvador
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 3. FARMACOCINÉTICA CLÍNICA */}
      {/* ==================================================================== */}
      {activeTab === 'pharmacokinetics' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Farmacocinética: Vida Media de Eliminación (t½)
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-mono-exam">
                t½ = (0.693 · Vd) / Aclaramiento (CL)
              </p>
            </div>

            {/* Slider Vd */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Volumen Aparente de Distribución (Vd):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{vd} Litros</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="2"
                value={vd}
                onChange={e => setVd(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>5 L (Confinado a plasma)</span>
                <span>42 L (Agua corporal total)</span>
                <span>100 L (Alta fijación tisular)</span>
              </div>
            </div>

            {/* Slider Clearance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Aclaramiento / Depuración Renal (CL):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{clearance.toFixed(1)} L/hora</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.5"
                value={clearance}
                onChange={e => setClearance(parseFloat(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>0.5 L/h (Insuficiencia renal)</span>
                <span>3.5 L/h (Filtración normal)</span>
                <span>8.0 L/h (Aclaramiento acelerado)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setVd(42);
                setClearance(3.5);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores promedio
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Comportamiento Farmacocinético:
              </span>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Vida Media (t½)</span>
                  <span className="text-2xl font-bold font-mono-exam text-[#9E472A]">
                    {pkResults.halfLife} h
                  </span>
                  <span className="text-[10px] text-[#475569] block font-mono-exam">
                    Tiempo para reducir al 50%
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[10px] text-[#64748B] font-mono-exam uppercase block">Estado Estacionario</span>
                  <span className="text-2xl font-bold font-mono-exam text-[#0B1B3D]">
                    {pkResults.steadyState} h
                  </span>
                  <span className="text-[10px] text-[#475569] block font-mono-exam">
                    ~4.5 vidas medias
                  </span>
                </div>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Ajuste en Insuficiencia Renal:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  En pacientes con enfermedad renal crónica (disminución del aclaramiento CL), la vida media se prolonga exponencialmente, obligando a distanciar los intervalos de dosis para evitar toxicidad.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Concepto Clave de Farmacología Clínica en el ENAR
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 4. CINEMÁTICA DE PROYECTILES */}
      {/* ==================================================================== */}
      {activeTab === 'projectile' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-5">
            <div className="border-b border-[#E5E3D8] pb-3">
              <h3 className="font-editorial text-lg font-bold text-[#111625]">
                Tiro Parabólico y Cinemática Vectorial
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5 font-mono-exam">
                Alcance = (v₀² · sen 2θ) / g • Altura Máx = (v₀² · sen²θ) / (2g)
              </p>
            </div>

            {/* Slider Velocidad */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Velocidad Inicial (v₀):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{velocity} m/s</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={velocity}
                onChange={e => setVelocity(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
            </div>

            {/* Slider Ángulo */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#111625]">Ángulo de Disparo (θ):</span>
                <span className="font-mono-exam font-bold text-[#0B1B3D]">{angle}° {angle === 45 ? '(Alcance máximo teórico)' : ''}</span>
              </div>
              <input
                type="range"
                min="10"
                max="85"
                step="1"
                value={angle}
                onChange={e => setAngle(parseInt(e.target.value))}
                className="w-full accent-[#0B1B3D] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#64748B] font-mono-exam">
                <span>10° (Rasante)</span>
                <span>45° (Alcance Máximo)</span>
                <span>85° (Casi Vertical)</span>
              </div>
            </div>

            <button
              onClick={() => {
                setVelocity(25);
                setAngle(45);
              }}
              className="text-xs text-[#64748B] hover:text-[#0B1B3D] flex items-center gap-1 font-mono-exam cursor-pointer pt-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restablecer valores
            </button>
          </div>

          <div className="lg:col-span-5 bg-[#FAF9F5] p-5 sm:p-6 rounded-xl border border-[#E5E3D8] shadow-corporate-card space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold font-mono-exam text-[#0B1B3D] uppercase tracking-wider block">
                Métricas Cinemáticas del Vuelo:
              </span>

              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Alcance (R)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#0B1B3D]">
                    {projectileResults.maxRange} m
                  </span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Altura Máx (H)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#9E472A]">
                    {projectileResults.maxHeight} m
                  </span>
                </div>

                <div className="bg-white p-3 rounded-lg border border-[#E5E3D8] shadow-corporate-subtle text-center">
                  <span className="text-[9px] text-[#64748B] font-mono-exam uppercase block">Tiempo (t)</span>
                  <span className="text-lg font-bold font-mono-exam text-[#1E7E34]">
                    {projectileResults.flightTime} s
                  </span>
                </div>
              </div>

              <div className="mt-3 p-3 bg-white rounded-lg border border-[#C59B27]/50 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] font-mono-exam">
                  <Sparkles className="w-4 h-4 text-[#C59B27]" />
                  <span>Principio Físico:</span>
                </div>
                <p className="text-[#334155] leading-relaxed text-[11px]">
                  El movimiento horizontal es uniforme (velocidad constante $v_x = v_0 \cos\theta$), mientras que el vertical está uniformemente acelerado por la gravedad terrestre ($g = 9.81 m/s^2$).
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#F2F1EA] rounded-lg text-[11px] text-[#64748B] font-mono-exam text-center">
              Física Clásica evaluada en Admisiones & Ciencias Naturales
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveFormulaLab;
