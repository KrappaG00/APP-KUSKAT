import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ParticleLoaderProps {
  onComplete: () => void;
}

export const ParticleLoader: React.FC<ParticleLoaderProps> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.002);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 240;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported for ParticleLoader:', e);
      onComplete();
      return;
    }

    const particleCount = 1400;
    const initialPositions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const currentPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cBlue = new THREE.Color('#2563eb');
    const cEmerald = new THREE.Color('#059669');
    const cIndigo = new THREE.Color('#4f46e5');

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 250 + Math.random() * 200;

      initialPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      initialPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      initialPositions[i * 3 + 2] = (Math.random() - 0.5) * 300;

      currentPositions[i * 3] = initialPositions[i * 3];
      currentPositions[i * 3 + 1] = initialPositions[i * 3 + 1];
      currentPositions[i * 3 + 2] = initialPositions[i * 3 + 2];

      let tx = 0;
      let ty = 0;
      let tz = (Math.random() - 0.5) * 20;
      let chosenColor = cBlue;

      if (i < 400) {
        tx = -50 + (Math.random() - 0.5) * 16;
        ty = (Math.random() - 0.5) * 110;
        chosenColor = i % 3 === 0 ? cIndigo : cBlue;
      } else if (i < 750) {
        const t = Math.random();
        tx = -50 + t * 90 + (Math.random() - 0.5) * 14;
        ty = t * 65 + (Math.random() - 0.5) * 14;
        chosenColor = cBlue;
      } else if (i < 1100) {
        const t = Math.random();
        tx = -40 + t * 95 + (Math.random() - 0.5) * 14;
        ty = -t * 65 + (Math.random() - 0.5) * 14;
        chosenColor = i % 2 === 0 ? cEmerald : cBlue;
      } else {
        const angle = Math.random() * Math.PI * 2;
        const radX = 85 + (Math.random() - 0.5) * 15;
        const radY = 85 + (Math.random() - 0.5) * 15;
        tx = Math.cos(angle) * radX;
        ty = Math.sin(angle) * radY;
        tz = Math.sin(angle * 2) * 25;
        chosenColor = cEmerald;
      }

      targetPositions[i * 3] = tx;
      targetPositions[i * 3 + 1] = ty;
      targetPositions[i * 3 + 2] = tz;

      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(37, 99, 235, 1)');
      grad.addColorStop(0.4, 'rgba(59, 130, 246, 0.7)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 7.0,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let startTime = performance.now();
    let animId: number;

    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const tNorm = Math.min(elapsed / 0.65, 1.0);
      const ease = 1 - Math.pow(1 - tNorm, 3);

      setProgress(Math.floor(ease * 100));

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        arr[i3] = initialPositions[i3] + (targetPositions[i3] - initialPositions[i3]) * ease;
        arr[i3 + 1] = initialPositions[i3 + 1] + (targetPositions[i3 + 1] - initialPositions[i3 + 1]) * ease;
        arr[i3 + 2] = initialPositions[i3 + 2] + (targetPositions[i3 + 2] - initialPositions[i3 + 2]) * ease;

        if (ease > 0.85) {
          arr[i3] += Math.sin(now * 0.003 + i) * 0.35;
          arr[i3 + 1] += Math.cos(now * 0.003 + i) * 0.35;
        }
      }
      posAttr.needsUpdate = true;

      particles.rotation.y = Math.sin(now * 0.0008) * 0.25;
      particles.rotation.x = Math.cos(now * 0.0006) * 0.15;

      renderer.render(scene, camera);

      if (tNorm >= 1.0) {
        setIsFading(true);
        setTimeout(onComplete, 150);
      } else {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50 transition-opacity duration-700 font-caslon ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Identidad central */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-none">
        <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-lg border border-slate-200 mb-3 flex items-center justify-center overflow-hidden">
          <img src="/kuskat_logo.png" alt="Logo KUSKAT" className="w-full h-full object-contain" />
        </div>

        <h1 className="font-montenegrin text-4xl sm:text-6xl text-slate-900 tracking-wide drop-shadow-xs">
          KUSKAT
        </h1>
        <p className="font-caslon text-sm sm:text-lg text-slate-600 font-medium tracking-editorial mt-1 max-w-md">
          Cargando entorno interactivo 3D
        </p>

        {/* Barra de progreso */}
        <div className="w-56 h-1.5 bg-slate-200 rounded-full overflow-hidden mt-6 border border-slate-300">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-caslon text-xs text-blue-700 font-semibold tracking-micro mt-2 uppercase">
          {progress}% • Inicializando
        </span>
      </div>

      <button
        onClick={onComplete}
        className="absolute bottom-8 z-20 font-caslon text-xs font-semibold uppercase tracking-micro text-slate-600 hover:text-slate-900 bg-white/90 hover:bg-white border border-slate-200 px-4 py-2 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
      >
        Saltar animación ➔
      </button>
    </div>
  );
};
