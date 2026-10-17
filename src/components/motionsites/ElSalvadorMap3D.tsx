import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { DEPARTMENTS_DATA, DepartmentData } from './data/departmentsData';

interface ElSalvadorMap3DProps {
  onSelectDepartment: (dept: DepartmentData) => void;
  selectedDepartmentId?: string | null;
}

export const ElSalvadorMap3D: React.FC<ElSalvadorMap3DProps> = ({
  onSelectDepartment,
  selectedDepartmentId,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hoveredDept, setHoveredDept] = useState<DepartmentData | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [hasWebGlError, setHasWebGlError] = useState(false);

  // Efecto de máquina de escribir para el titular
  const fullTitle = 'Aprende El Salvador, transforma tu futuro';
  const [displayedTitle, setDisplayedTitle] = useState('');

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx++;
      setDisplayedTitle(fullTitle.slice(0, currentIdx));
      if (currentIdx >= fullTitle.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf1f5f9, 0.0012);

    // Dimensiones maestras de la geometría de El Salvador (Ahuachapán a La Unión)
    const MAP_BOUNDS = {
      width: 580,  // Ancho con márgenes de seguridad (extremos en -245 y 285)
      height: 190, // Alto con márgenes de seguridad (extremos en -58 y 85)
      centerX: 20, // Centro geográfico X
      centerY: 14, // Centro geográfico Y
    };

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);

    // Función matemática para adaptar la cámara al tamaño de cualquier pantalla
    // Garantiza que el mapa de El Salvador siempre quepa holgadamente sin recortarse
    const adjustCameraToScreen = (w: number, h: number) => {
      const aspect = w / h;
      camera.aspect = aspect;

      const vFovRad = (camera.fov * Math.PI) / 180;
      const vHeightAtDist1 = 2 * Math.tan(vFovRad / 2);
      const vWidthAtDist1 = vHeightAtDist1 * aspect;

      const distForHeight = MAP_BOUNDS.height / vHeightAtDist1;
      const distForWidth = MAP_BOUNDS.width / vWidthAtDist1;

      // Margen de resguardo adaptado para que quepa tanto en móviles como en monitores anchos
      const safetyMargin = w < 640 ? 1.25 : 1.15;
      const targetDistance = Math.max(distForHeight, distForWidth) * safetyMargin;

      // En móviles el título superior ocupa espacio. Bajamos el punto de enfoque levemente
      const isMobile = w < 640;
      const focusY = isMobile ? MAP_BOUNDS.centerY + 16 : MAP_BOUNDS.centerY;

      // Ángulo de inclinación 3D fijo y estático (perspectiva limpia isométrica)
      const tiltAngle = 0.32;
      const camY = focusY - Math.sin(tiltAngle) * targetDistance * 0.42;
      const camZ = Math.cos(tiltAngle) * targetDistance;

      camera.position.set(MAP_BOUNDS.centerX, camY, camZ);
      camera.lookAt(MAP_BOUNDS.centerX, focusY, 0);
      camera.updateProjectionMatrix();
    };

    adjustCameraToScreen(width, height);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('WebGL not supported for ElSalvadorMap3D:', e);
      setHasWebGlError(true);
      return;
    }

    // Iluminación diurna de estudio
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight1.position.set(150, 250, 300);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xbfdbfe, 0.6);
    dirLight2.position.set(-200, -100, 200);
    scene.add(dirLight2);

    // Grupo principal para el mapa de El Salvador
    // REQUISITO: El mapa NO se mueve (queda fijo, estable y anclado)
    const mapGroup = new THREE.Group();
    mapGroup.position.set(0, 0, 0);
    mapGroup.scale.set(1, 1, 1);
    mapGroup.rotation.set(0.32, 0, 0); // Inclinación fija elegante, sin rotaciones bruscas
    scene.add(mapGroup);

    // Colores institucionales KUSKAT
    const COLOR_BASE = new THREE.Color('#2563EB'); // Azul Institucional
    const COLOR_HOVER = new THREE.Color('#059669'); // Verde Éxito
    const COLOR_SELECTED = new THREE.Color('#1E40AF'); // Azul Marino Profundo

    interface DeptMeshRef {
      data: DepartmentData;
      mesh: THREE.Mesh;
      wireframe: THREE.LineSegments;
      baseZ: number;
      targetElevation: number;
      currentElevation: number;
      material: THREE.MeshStandardMaterial;
    }

    const deptMeshes: DeptMeshRef[] = [];

    // Construcción de los 14 departamentos con separación sutil de 2.5px
    DEPARTMENTS_DATA.forEach((dept) => {
      const shape = new THREE.Shape();
      const pts = dept.polygon;

      let cx = 0;
      let cy = 0;
      pts.forEach(([px, py]) => {
        cx += px;
        cy += py;
      });
      cx /= pts.length;
      cy /= pts.length;

      // Separación radial sutil
      const distFromCenter = Math.sqrt(cx * cx + cy * cy) || 1;
      const gapX = (cx / distFromCenter) * 2.5;
      const gapY = (cy / distFromCenter) * 2.5;

      shape.moveTo(pts[0][0] + gapX, pts[0][1] + gapY);
      for (let i = 1; i < pts.length; i++) {
        shape.lineTo(pts[i][0] + gapX, pts[i][1] + gapY);
      }
      shape.closePath();

      const extrudeSettings: THREE.ExtrudeGeometryOptions = {
        depth: 22,
        bevelEnabled: true,
        bevelSegments: 3,
        steps: 1,
        bevelSize: 2.2,
        bevelThickness: 2.2,
      };

      const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      geometry.center();

      const material = new THREE.MeshStandardMaterial({
        color: COLOR_BASE.clone(),
        roughness: 0.25,
        metalness: 0.2,
        emissive: new THREE.Color(0x1e3a8a),
        emissiveIntensity: 0.15,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(cx + gapX, cy + gapY, 0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      (mesh as any).departmentData = dept;

      // Bordes estilizados nítidos
      const wireGeo = new THREE.EdgesGeometry(geometry);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.45,
      });
      const wireframe = new THREE.LineSegments(wireGeo, wireMat);
      mesh.add(wireframe);

      mapGroup.add(mesh);

      deptMeshes.push({
        data: dept,
        mesh,
        wireframe,
        baseZ: 0,
        targetElevation: 0,
        currentElevation: 0,
        material,
      });
    });

    // Raycaster para interactividad de hover y clic
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let currentHoveredDept: DepartmentData | null = null;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(
        deptMeshes.map((d) => d.mesh),
        false
      );

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const hitData = (hitMesh as any).departmentData as DepartmentData;
        currentHoveredDept = hitData;
        setHoveredDept(hitData);
        setTooltipPos({ x: e.clientX, y: e.clientY });
        container.style.cursor = 'pointer';
      } else {
        currentHoveredDept = null;
        setHoveredDept(null);
        setTooltipPos(null);
        container.style.cursor = 'default';
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (clientX && clientY) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(
          deptMeshes.map((d) => d.mesh),
          false
        );
        if (intersects.length > 0) {
          const hitMesh = intersects[0].object as THREE.Mesh;
          const hitData = (hitMesh as any).departmentData as DepartmentData;
          onSelectDepartment(hitData);
          return;
        }
      }

      if (currentHoveredDept) {
        onSelectDepartment(currentHoveredDept);
      }
    };

    renderer.domElement.addEventListener('mousemove', handlePointerMove);
    renderer.domElement.addEventListener('click', handlePointerDown);
    renderer.domElement.addEventListener('touchend', handlePointerDown);

    let animId: number;

    const renderLoop = () => {
      // REQUISITO: El mapa NO se mueve (cero parallax del ratón, cero tambaleo o drifting)
      // La inclinación se mantiene estrictamente estática y fija en 0.32 rad

      // Únicamente se eleva el departamento activo/hovered para proporcionar feedback táctil
      deptMeshes.forEach((item) => {
        const isHovered = currentHoveredDept?.id === item.data.id;
        const isSelected = selectedDepartmentId === item.data.id;

        item.targetElevation = isSelected ? 20 : isHovered ? 14 : 0;
        item.currentElevation += (item.targetElevation - item.currentElevation) * 0.2;
        item.mesh.position.z = item.baseZ + item.currentElevation;

        const targetColor = isSelected
          ? COLOR_SELECTED
          : isHovered
          ? COLOR_HOVER
          : COLOR_BASE;

        item.material.color.lerp(targetColor, 0.15);

        if (isHovered || isSelected) {
          item.material.emissive.setHex(0x059669);
          item.material.emissiveIntensity = 0.35;
          (item.wireframe.material as THREE.LineBasicMaterial).opacity = 0.85;
        } else {
          item.material.emissive.setHex(0x1e3a8a);
          item.material.emissiveIntensity = 0.15;
          (item.wireframe.material as THREE.LineBasicMaterial).opacity = 0.35;
        }
      });

      renderer.render(scene, camera);
      if (isVisible) {
        animId = requestAnimationFrame(renderLoop);
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
          renderLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    renderLoop();

    // Adaptación a cambios de tamaño de ventana y orientación
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 500;
      adjustCameraToScreen(w, h);
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(container);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      if (renderer) {
        if (renderer.domElement) {
          renderer.domElement.removeEventListener('mousemove', handlePointerMove);
          renderer.domElement.removeEventListener('click', handlePointerDown);
          renderer.domElement.removeEventListener('touchend', handlePointerDown);
        }
        deptMeshes.forEach((d) => {
          d.mesh.geometry.dispose();
          d.material.dispose();
        });
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
      cancelAnimationFrame(animId);
    };
  }, [onSelectDepartment, selectedDepartmentId]);

  return (
    <div className="relative w-full h-[420px] sm:h-[550px] lg:h-[680px] bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 overflow-hidden select-none border-b border-slate-200">
      {/* Canvas 3D de Three.js o fallback interactivo 2D si WebGL no está disponible */}
      {hasWebGlError ? (
        <div className="absolute inset-0 pt-36 sm:pt-40 pb-6 px-4 overflow-y-auto z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {DEPARTMENTS_DATA.map((dept) => (
              <button
                key={dept.id}
                onClick={() => onSelectDepartment(dept)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedDepartmentId === dept.id
                    ? 'bg-blue-600 text-white border-blue-700 shadow-md'
                    : 'bg-white/90 hover:bg-white text-slate-800 border-slate-200 shadow-xs'
                }`}
              >
                <div className="font-montenegrin text-xs font-bold truncate">{dept.name}</div>
                <div className="text-[10px] opacity-75 truncate">{dept.capital}</div>
                <div className="text-[9px] text-blue-600 font-bold mt-1">
                  {dept.studentsCount.toLocaleString()} est.
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      )}

      {/* Titular superpuesto */}
      <div className="absolute top-5 sm:top-10 lg:top-12 inset-x-0 mx-auto max-w-4xl text-center px-3 sm:px-4 pointer-events-none z-10">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-caslon tracking-micro uppercase mb-2 sm:mb-3 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Mapa 3D Oficial • Los 14 Departamentos
        </div>

        <h2 className="font-montenegrin text-xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-wide min-h-[2.5rem] sm:min-h-[3rem] drop-shadow-xs px-2">
          {displayedTitle}
          <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-8 ml-1 bg-blue-600 animate-pulse align-middle" />
        </h2>

        <p className="font-caslon text-xs sm:text-base lg:text-lg text-slate-600 font-normal tracking-editorial mt-1.5 sm:mt-2 max-w-2xl mx-auto px-2">
          Explora la distribución de reactivos, centros educativos y fortalezas académicas en cada territorio de El Salvador.
        </p>
      </div>

      {/* Indicador de ayuda en la esquina inferior */}
      <div className="absolute bottom-6 left-6 z-10 pointer-events-none hidden sm:flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm text-xs font-caslon text-slate-600">
        <div className="w-3 h-3 rounded-sm bg-blue-600 border border-blue-400" />
        <span>Azul Institucional</span>
        <span className="text-slate-300">•</span>
        <div className="w-3 h-3 rounded-sm bg-emerald-600 border border-emerald-400" />
        <span className="text-slate-900 font-bold">Hover (+14px Elevación)</span>
        <span className="text-slate-300">•</span>
        <span className="text-blue-600 font-semibold">Clic para abrir panel departamental</span>
      </div>

      {/* Tooltip flotante 3D al hover en Libre Caslon Condensed con fondo blanco */}
      {hoveredDept && tooltipPos && (
        <div
          className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-full mb-3 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-xl transition-all duration-75 text-slate-800"
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y - 12}px`,
          }}
        >
          <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <h4 className="font-montenegrin text-sm text-slate-900 tracking-wide">
              {hoveredDept.name}
            </h4>
            <span className="font-caslon text-[11px] text-blue-600 tracking-micro uppercase ml-auto font-bold">
              {hoveredDept.region}
            </span>
          </div>

          <div className="font-caslon text-xs text-slate-600 space-y-1">
            <p>
              <strong className="text-slate-900">Cabecera:</strong> {hoveredDept.capital}
            </p>
            <p>
              <strong className="text-slate-900">Estudiantes:</strong>{' '}
              {hoveredDept.studentsCount.toLocaleString()}
            </p>
            <p>
              <strong className="text-slate-900">Área destacada:</strong>{' '}
              <span className="text-blue-700 font-semibold">{hoveredDept.featuredSubject}</span>
            </p>
          </div>

          <div className="mt-2 pt-1.5 border-t border-slate-100 text-[10px] text-blue-600 font-caslon font-semibold flex items-center justify-between">
            <span>Clic para abrir panel</span>
            <span>➔</span>
          </div>
        </div>
      )}
    </div>
  );
};
