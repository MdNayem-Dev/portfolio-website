import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (
      typeof window === 'undefined' ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    let mouseX = -500;
    let mouseY = -500;

    let dotX = -500;
    let dotY = -500;

    let ringX = -500;
    let ringY = -500;

    let flareX = -500;
    let flareY = -500;

    let glowX = -500;
    let glowY = -500;

    let isHovering = false;
    let isMouseDown = false;
    let isInside = false;
    let isRunning = false;
    let animFrame: number;

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animFrame = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isInside) {
        isInside = true;
        setVisible(true);
      }

      const target = e.target as HTMLElement;
      isHovering = !!target?.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer, .press-3d, .tilt-card'
      );

      startLoop();
    };

    const handleMouseEnter = () => {
      isInside = true;
      setVisible(true);
      startLoop();
    };

    const handleMouseLeave = () => {
      isInside = false;
      setVisible(false);
    };

    const handleMouseDown = () => {
      isMouseDown = true;
      startLoop();
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      startLoop();
    };

    const render = () => {
      // Fluid physics lerp
      dotX += (mouseX - dotX) * 0.9;
      dotY += (mouseY - dotY) * 0.9;

      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      flareX += (mouseX - flareX) * 0.14;
      flareY += (mouseY - flareY) * 0.14;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      const scale = isMouseDown ? 0.75 : isHovering ? 1.6 : 1;
      const ringOpacity = isHovering ? 0.85 : 0.55;
      const glowScale = isHovering ? 1.25 : 1;
      const glowOpacity = isHovering ? 0.9 : 0.7;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
        ringRef.current.style.opacity = `${ringOpacity}`;
      }

      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(${flareX}px, ${flareY}px, 0) scale(${scale * 1.1})`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) scale(${glowScale})`;
        glowRef.current.style.opacity = `${glowOpacity}`;
      }

      // If mouse is idle and positions converged, pause loop to save battery and GPU cycles
      const diff = Math.abs(mouseX - glowX) + Math.abs(mouseY - glowY);
      if (diff < 0.25) {
        isRunning = false;
        return;
      }

      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    startLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Large Ambient Radiant Spotlight (Soft Trailing Atmosphere) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[360px] h-[360px] -ml-[180px] -mt-[180px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.26)_0%,rgba(59,130,246,0.18)_30%,rgba(99,102,241,0.08)_55%,transparent_75%)] blur-3xl will-change-transform pointer-events-none"
      />

      {/* 2. Inner Neon Glowing Flare (Tight Luminous Halo) */}
      <div
        ref={flareRef}
        className="fixed top-0 left-0 w-24 h-24 -ml-12 -mt-12 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.50)_0%,rgba(59,130,246,0.30)_40%,transparent_70%)] blur-xl will-change-transform pointer-events-none"
      />

      {/* 3. Sleek Interactive Outer Ring with Glowing Border */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-blue-500/70 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.45)] transition-[border-color,background-color] duration-150 ease-out will-change-transform pointer-events-none"
      />

      {/* 4. Core Pinpoint Dot with High-Intensity Neon Glow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.9),0_0_3px_#fff] will-change-transform pointer-events-none"
      />
    </div>
  );
};
