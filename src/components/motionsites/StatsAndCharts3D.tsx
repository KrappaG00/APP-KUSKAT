import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const StatsAndCharts3D: React.FC = () => {
  const chartCanvasRef = useRef<HTMLDivElement>(null);

  // Contadores animados en Montenegrin Gothic One (sin tasas arbitrarias)
  const [counts, setCounts] = useState({
    reactivos: 0,
    departamentos: 0,
    especialidades: 0,
    convocatorias: 0,
  });

  useEffect(() => {
    let frame = 0;
    const totalFrames = 60;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        reactivos: Math.floor(ease * 17640),
        departamentos: Math.floor(ease * 14),
        especialidades: Math.floor(ease * 62),
        convocatorias: Math.floor(ease * 6),
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // Gráficos 3D interactivos en Three.js con la paleta limpia (Azul y Verde sobre fondo claro)
  useEffect(() => {
    const container = chartCanvasRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.002);

    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    camera.position.set(0, 45, 170);
    camera.lookAt(0, 10, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Iluminación
    const ambLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(60, 100, 80);
    scene.add(dirLight);

    // Grupo de gráficos 3D
    const chartGroup = new THREE.Group();
    scene.add(chartGroup);

    // Datos de reactivos para las 6 categorías con la paleta de colores institucional
    const chartData = [
      { name: 'UES', value: 7500, color: 0x2563eb, height: 45 },
      { name: 'ESCALAFÓN', value: 3300, color: 0x059669, height: 26 },
      { name: 'AVANZO', value: 3000, color: 0x4f46e5, height: 24 },
      { name: 'ASD', value: 2190, color: 0x059669, height: 18 },
      { name: 'ENA', value: 1400, color: 0x2563eb, height: 13 },
      { name: 'ANSP', value: 250, color: 0x059669, height: 6 },
    ];

    // 1. Barras 3D
    const barSpacing = 16;
    const startX = -((chartData.length - 1) * barSpacing) / 2;

    const bars: THREE.Mesh[] = [];

    chartData.forEach((item, idx) => {
      const geo = new THREE.BoxGeometry(9, item.height, 9);
      const mat = new THREE.MeshStandardMaterial({
        color: item.color,
        roughness: 0.2,
        metalness: 0.2,
        emissive: new THREE.Color(item.color).multiplyScalar(0.15),
      });

      const bar = new THREE.Mesh(geo, mat);
      bar.position.set(startX + idx * barSpacing, item.height / 2, -15);
      bar.castShadow = true;
      chartGroup.add(bar);
      bars.push(bar);

      // Base pedestal blanco/slate
      const baseGeo = new THREE.BoxGeometry(11, 2, 11);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0xe2e8f0,
        roughness: 0.3,
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.set(startX + idx * barSpacing, 1, -15);
      chartGroup.add(baseMesh);
    });

    // 2. Gráfico 3D Pastel / Donut de las 6 categorías
    const pieGroup = new THREE.Group();
    pieGroup.position.set(0, -10, 35);
    chartGroup.add(pieGroup);

    let startAngle = 0;
    const totalVal = chartData.reduce((acc, c) => acc + c.value, 0);

    chartData.forEach((item) => {
      const sliceAngle = (item.value / totalVal) * Math.PI * 2;
      const shape = new THREE.Shape();
      const innerR = 12;
      const outerR = 24;

      shape.absarc(0, 0, outerR, startAngle, startAngle + sliceAngle, false);
      shape.absarc(0, 0, innerR, startAngle + sliceAngle, startAngle, true);
      shape.closePath();

      const extrudeSettings = {
        depth: 6,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.6,
        bevelThickness: 0.6,
      };

      const pieGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const pieMat = new THREE.MeshStandardMaterial({
        color: item.color,
        roughness: 0.25,
        metalness: 0.25,
        emissive: new THREE.Color(item.color).multiplyScalar(0.15),
      });

      const pieMesh = new THREE.Mesh(pieGeo, pieMat);
      pieMesh.rotation.x = -Math.PI / 2.4;
      pieGroup.add(pieMesh);

      startAngle += sliceAngle;
    });

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Rotación suave del conjunto de gráficos 3D
      chartGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.22;
      pieGroup.rotation.z = elapsed * 0.15;

      bars.forEach((bar, idx) => {
        bar.position.y =
          chartData[idx].height / 2 + Math.sin(elapsed * 1.5 + idx) * 1.2;
      });

      renderer.render(scene, camera);
      if (isVisible) {
        animId = requestAnimationFrame(animate);
      } else {
        animId = 0;
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible && !animId) {
          animate();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      bars.forEach((b) => {
        b.geometry.dispose();
        (b.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Marca de agua sutil del Logo KUSKAT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-3 select-none overflow-hidden">
        <span className="font-montenegrin text-[22vw] text-slate-900 font-black leading-none">
          KUSKAT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-caslon tracking-micro uppercase mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Métricas de Cobertura Curricular
          </div>
          <h2 className="font-montenegrin text-3xl sm:text-5xl text-slate-900 tracking-wide">
            Logros, Cobertura y Estadísticas
          </h2>
          <p className="font-caslon text-base sm:text-lg text-slate-600 tracking-editorial mt-3">
            Rigor pedagógico verificado en todas las materias, temarios y niveles de evaluación en El Salvador.
          </p>
        </div>

        {/* 4 Contadores Animados en Montenegrin Gothic One */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Reactivos */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden group hover:border-blue-300 transition-colors shadow-2xs">
            <span className="font-caslon text-xs font-semibold uppercase tracking-micro text-slate-500 block mb-2">
              Reactivos Verificados
            </span>
            <div className="font-montenegrin text-3xl sm:text-5xl text-blue-700 tracking-wide">
              {counts.reactivos.toLocaleString()}
            </div>
            <span className="font-caslon text-xs text-slate-500 mt-2 block">
              Con solucionarios KaTeX
            </span>
          </div>

          {/* Departamentos */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden group hover:border-blue-300 transition-colors shadow-2xs">
            <span className="font-caslon text-xs font-semibold uppercase tracking-micro text-slate-500 block mb-2">
              Departamentos
            </span>
            <div className="font-montenegrin text-3xl sm:text-5xl text-indigo-700 tracking-wide">
              {counts.departamentos} de 14
            </div>
            <span className="font-caslon text-xs text-slate-500 mt-2 block">
              Cobertura total nacional
            </span>
          </div>

          {/* Especialidades Curriculares (Reemplaza la tasa de aprobación) */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden group hover:border-blue-300 transition-colors shadow-2xs">
            <span className="font-caslon text-xs font-semibold uppercase tracking-micro text-slate-500 block mb-2">
              Especialidades Curriculares
            </span>
            <div className="font-montenegrin text-3xl sm:text-5xl text-emerald-700 tracking-wide">
              {counts.especialidades} Áreas
            </div>
            <span className="font-caslon text-xs text-slate-500 mt-2 block">
              Temarios oficiales del MINED & UES
            </span>
          </div>

          {/* Convocatorias */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden group hover:border-blue-300 transition-colors shadow-2xs">
            <span className="font-caslon text-xs font-semibold uppercase tracking-micro text-slate-500 block mb-2">
              Convocatorias Oficiales
            </span>
            <div className="font-montenegrin text-3xl sm:text-5xl text-amber-700 tracking-wide">
              {counts.convocatorias} Ámbitos
            </div>
            <span className="font-caslon text-xs text-slate-500 mt-2 block">
              UES, Escalafón, AVANZO, ASD, ENA, ANSP
            </span>
          </div>
        </div>

        {/* Gráficos 3D de Barras y Pastel que rotan suavemente */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 relative overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <h3 className="font-montenegrin text-2xl text-slate-900 tracking-wide">
                Distribución Espacial de Reactivos por Convocatoria
              </h3>
              <p className="font-caslon text-sm text-slate-600 tracking-editorial mt-1">
                Visualización tridimensional interactiva de los bancos de preguntas en la paleta institucional.
              </p>
            </div>

            {/* Leyenda */}
            <div className="flex items-center gap-4 text-xs font-caslon text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-blue-600" />
                <span>Azul Institucional</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-xs bg-emerald-600" />
                <span>Verde Éxito</span>
              </div>
            </div>
          </div>

          {/* Canvas WebGL 3D para Barras y Donut */}
          <div ref={chartCanvasRef} className="w-full h-[320px] sm:h-[400px] relative cursor-grab active:cursor-grabbing" />

          {/* Leyendas informativas al pie */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-6 border-t border-slate-200 font-caslon text-center">
            <div>
              <span className="text-xs text-slate-500 block">UES (Admisión)</span>
              <strong className="text-sm text-blue-700">7,500 reactivos</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Escalafón Docente</span>
              <strong className="text-sm text-emerald-700">3,300 reactivos</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Prueba AVANZO</span>
              <strong className="text-sm text-indigo-700">3,000 reactivos</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Jóvenes Talento</span>
              <strong className="text-sm text-emerald-700">2,190 reactivos</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Admisión ENA</span>
              <strong className="text-sm text-blue-700">1,400 reactivos</strong>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Academia ANSP</span>
              <strong className="text-sm text-emerald-700">250 reactivos</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
