import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutUs3DProps {
  onLearnMoreAction: () => void;
}

export const AboutUs3D: React.FC<AboutUs3DProps> = ({ onLearnMoreAction }) => {
  const logoCanvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = logoCanvasRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.002);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 0, 140);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Iluminación para resaltar el logo original KUSKAT
    const amb = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(amb);

    const pLight1 = new THREE.PointLight(0x2563eb, 2.2, 300);
    pLight1.position.set(60, 60, 80);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0xf59e0b, 1.8, 300);
    pLight2.position.set(-60, -50, 70);
    scene.add(pLight2);

    // Grupo para el logo original 3D giratorio
    const logoGroup = new THREE.Group();
    scene.add(logoGroup);

    // Carga de textura del logo original de KUSKAT (PNG transparente 956x1024)
    const textureLoader = new THREE.TextureLoader();
    const textureFront = textureLoader.load('/kuskat_logo.png');
    textureFront.colorSpace = THREE.SRGBColorSpace;

    // Textura trasera reflejada horizontalmente para lectura idéntica al girar
    const textureBack = textureLoader.load('/kuskat_logo.png');
    textureBack.colorSpace = THREE.SRGBColorSpace;
    textureBack.wrapS = THREE.RepeatWrapping;
    textureBack.repeat.x = -1;
    textureBack.offset.x = 1;

    // Dimensiones proporcionales a 956x1024 (aspect ratio ~0.9336)
    const logoHeight = 78;
    const logoWidth = logoHeight * (956 / 1024);
    const logoGeo = new THREE.PlaneGeometry(logoWidth, logoHeight);

    const logoMatFront = new THREE.MeshStandardMaterial({
      map: textureFront,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.25,
      metalness: 0.2,
      side: THREE.FrontSide,
    });

    const logoMatBack = new THREE.MeshStandardMaterial({
      map: textureBack,
      transparent: true,
      alphaTest: 0.05,
      roughness: 0.25,
      metalness: 0.2,
      side: THREE.FrontSide,
    });

    // Cara frontal
    const frontMesh = new THREE.Mesh(logoGeo, logoMatFront);
    frontMesh.position.z = 0.6;
    logoGroup.add(frontMesh);

    // Cara trasera
    const backMesh = new THREE.Mesh(logoGeo, logoMatBack);
    backMesh.position.z = -0.6;
    backMesh.rotation.y = Math.PI;
    logoGroup.add(backMesh);

    // Partículas orbitales alrededor del logo
    const orbitCount = 80;
    const orbitGeo = new THREE.BufferGeometry();
    const orbitPositions = new Float32Array(orbitCount * 3);
    for (let i = 0; i < orbitCount; i++) {
      const theta = (i / orbitCount) * Math.PI * 2;
      const r = 50 + (Math.random() - 0.5) * 10;
      orbitPositions[i * 3] = Math.cos(theta) * r;
      orbitPositions[i * 3 + 1] = Math.sin(theta) * r;
      orbitPositions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(orbitPositions, 3));
    const orbitMat = new THREE.PointsMaterial({
      size: 3.5,
      color: 0x2563eb,
      transparent: true,
      opacity: 0.6,
    });
    const orbitPoints = new THREE.Points(orbitGeo, orbitMat);
    logoGroup.add(orbitPoints);

    let animId: number;
    let clock = new THREE.Clock();
    let isDragging = false;
    let prevPointerX = 0;
    let manualRotY = 0;
    let velocityY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      velocityY = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPointerX;
      prevPointerX = e.clientX;
      manualRotY += deltaX * 0.01;
      velocityY = deltaX * 0.005;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        velocityY *= 0.95;
        manualRotY += velocityY;
      }

      logoGroup.rotation.y = elapsed * 0.6 + manualRotY;
      logoGroup.rotation.x = Math.sin(elapsed * 0.4) * 0.12;
      orbitPoints.rotation.z = -elapsed * 0.8;

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
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      cancelAnimationFrame(animId);
      logoGeo.dispose();
      logoMatFront.dispose();
      logoMatBack.dispose();
      textureFront.dispose();
      textureBack.dispose();
      orbitGeo.dispose();
      orbitMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="py-14 sm:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Logo 3D girando sobre fondo blanco/slate */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[300px] sm:h-[400px] rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
              <div ref={logoCanvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
            </div>
          </div>

          {/* Información y Filosofía */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-caslon tracking-micro uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Sobre Nosotros
            </div>

            <h2 className="font-montenegrin text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-wide leading-tight">
              Democratizando el Acceso a la Educación Superior en El Salvador
            </h2>

            <p className="font-caslon text-sm sm:text-lg text-slate-600 font-normal leading-relaxed tracking-editorial">
              KUSKAT nació con el compromiso de que ningún estudiante salvadoreño se quede sin oportunidad de ingresar a la universidad, ascender en su carrera docente o alcanzar una beca académica por falta de preparación de calidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5 border border-blue-200">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-montenegrin text-sm sm:text-base text-slate-900">
                    Rigor y Verificación
                  </h4>
                  <p className="font-caslon text-xs text-slate-600 tracking-editorial mt-0.5 sm:mt-1">
                    Cada reactivo cuenta con justificación analítica, referencias normativas oficiales y fórmulas KaTeX legibles.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5 border border-emerald-200">
                  <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h4 className="font-montenegrin text-sm sm:text-base text-slate-900">
                    Acceso Libre y Universal
                  </h4>
                  <p className="font-caslon text-xs text-slate-600 tracking-editorial mt-0.5 sm:mt-1">
                    Diseñado para funcionar sin barreras en todos los dispositivos, con tipografía editorial de alta legibilidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Botón CTA con logo original de KUSKAT */}
            <div className="pt-2">
              <button
                onClick={onLearnMoreAction}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-caslon text-xs sm:text-sm font-bold tracking-micro uppercase transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer min-h-[48px]"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-white p-0.5 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/kuskat_logo.png"
                    alt="Logo KUSKAT"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="truncate">Conoce el Banco Maestro de Reactivos</span>
                <span className="text-sm sm:text-base">➔</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
