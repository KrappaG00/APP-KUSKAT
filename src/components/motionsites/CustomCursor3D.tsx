import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor3D: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      setIsPointerDevice(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, [role="button"], canvas, .interactive-hover');
        const nextHover = !!interactive;
        setIsHovered((prev) => (prev !== nextHover ? nextHover : prev));
      }
    };

    const loop = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        currentPos.current.x += dx * 0.25;
        currentPos.current.y += dy * 0.25;
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
        }
      }
      animRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] top-0 left-0 select-none will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
      }}
    >
      {/* Cubo 3D interactivo adaptado a la paleta azul/verde institucional */}
      <div className="relative w-7 h-7 perspective-800 flex items-center justify-center">
        <div
          className={`w-5 h-5 transform-style-3d transition-all duration-300 ${
            isHovered ? 'scale-125' : 'scale-100'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotateCube 4s linear infinite',
          }}
        >
          {/* Caras del cubo 3D */}
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20 shadow-[0_0_10px_rgba(5,150,105,0.4)]'
                : 'border-blue-600 bg-blue-600/15 shadow-[0_0_6px_rgba(37,99,235,0.3)]'
            }`}
            style={{ transform: 'translateZ(10px)' }}
          />
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20 shadow-[0_0_10px_rgba(5,150,105,0.4)]'
                : 'border-blue-600 bg-blue-600/15 shadow-[0_0_6px_rgba(37,99,235,0.3)]'
            }`}
            style={{ transform: 'rotateY(180deg) translateZ(10px)' }}
          />
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20'
                : 'border-indigo-600 bg-indigo-600/15'
            }`}
            style={{ transform: 'rotateY(-90deg) translateZ(10px)' }}
          />
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20'
                : 'border-indigo-600 bg-indigo-600/15'
            }`}
            style={{ transform: 'rotateY(90deg) translateZ(10px)' }}
          />
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20'
                : 'border-blue-600 bg-blue-600/15'
            }`}
            style={{ transform: 'rotateX(90deg) translateZ(10px)' }}
          />
          <div
            className={`absolute inset-0 border transition-colors duration-300 ${
              isHovered
                ? 'border-emerald-600 bg-emerald-600/20'
                : 'border-blue-600 bg-blue-600/15'
            }`}
            style={{ transform: 'rotateX(-90deg) translateZ(10px)' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};
