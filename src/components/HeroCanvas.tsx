import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE?: any;
  }
}

export const HeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDestroyed = false;
    let animId: number | null = null;
    let isIntersecting = true;
    let isPageVisible = !document.hidden;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const initThree = () => {
      if (isDestroyed || !container) return;
      const THREE = window.THREE;
      if (!THREE) return;

      const scene = new THREE.Scene();
      let width = container.clientWidth || window.innerWidth;
      let height = container.clientHeight || window.innerHeight;

      const isMobile = width < 768;
      const isLowPower = (typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || isMobile;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 16);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isLowPower,
        powerPreference: 'low-power',
      });

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isLowPower ? 1 : 1.35));
      renderer.setClearColor(0, 0);

      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x60a5fa, 0.85);
      dirLight1.position.set(8, 12, 10);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xa78bfa, 0.65);
      dirLight2.position.set(-8, -10, 8);
      scene.add(dirLight2);

      const floatingItems: Array<{
        group: any;
        mesh: any;
        id: string;
        initialX: number;
        initialY: number;
        initialZ: number;
        rotSpeedX: number;
        rotSpeedY: number;
        rotSpeedZ: number;
        floatSpeed: number;
        floatOffset: number;
        floatDistance: number;
      }> = [];

      // Calculate responsive world positions relative to the 1280px max-width container
      const computePositions = (w: number, h: number) => {
        const isMobile = w < 768;
        const isTablet = w >= 768 && w < 1024;
        const visibleH = 2 * Math.tan((45 * Math.PI) / 360) * 16;
        const unitPerPx = visibleH / h;
        // The HTML grid max width is 1280px.
        const contentHalfPx = Math.min(w, 1280) / 2;

        return {
          // Torus: frames the upper right of the user's photo/shoulder
          torus: {
            x: isMobile ? 3.0 : isTablet ? 4.5 : Math.max(5.2, contentHalfPx * 0.72 * unitPerPx),
            y: isMobile ? 2.4 : 2.7,
            z: -2.5,
          },
          // Box: frames above the headline on the left
          box: {
            x: isMobile ? -3.0 : isTablet ? -4.5 : -Math.max(5.0, contentHalfPx * 0.68 * unitPerPx),
            y: isMobile ? 2.7 : 3.2,
            z: -3.0,
          },
          // Sphere: frames below the left CTA buttons
          sphere: {
            x: isMobile ? -2.6 : isTablet ? -3.8 : -Math.max(4.2, contentHalfPx * 0.54 * unitPerPx),
            y: isMobile ? -2.7 : -3.1,
            z: -2.0,
          },
          // Octahedron: frames lower right below user's elbows
          octa: {
            x: isMobile ? 2.6 : isTablet ? 3.8 : Math.max(4.6, contentHalfPx * 0.64 * unitPerPx),
            y: isMobile ? -2.4 : -2.8,
            z: -2.2,
          },
          // Mid-accent Icosahedron: floats near the center-right gap between text and photo
          ico: {
            x: isMobile ? 1.6 : isTablet ? 2.2 : Math.max(2.4, contentHalfPx * 0.28 * unitPerPx),
            y: isMobile ? 0.6 : 0.9,
            z: -2.8,
          },
        };
      };

      const initialPos = computePositions(width, height);

      const shapesConfig = [
        {
          id: 'torus',
          geom: new THREE.TorusGeometry(isMobile ? 1.15 : 1.55, isMobile ? 0.36 : 0.44, 16, 40),
          color: 0x3b82f6,
          opacity: 0.24,
          pos: initialPos.torus,
          rotX: 0.005,
          rotY: 0.007,
          rotZ: 0.003,
          floatSpeed: 0.85,
          floatOffset: 0,
        },
        {
          id: 'box',
          geom: new THREE.BoxGeometry(isMobile ? 1.4 : 1.8, isMobile ? 1.4 : 1.8, isMobile ? 1.4 : 1.8),
          color: 0x6366f1,
          opacity: 0.20,
          pos: initialPos.box,
          rotX: 0.006,
          rotY: 0.005,
          rotZ: 0.004,
          floatSpeed: 0.7,
          floatOffset: Math.PI / 3,
        },
        {
          id: 'sphere',
          geom: new THREE.SphereGeometry(isMobile ? 1.05 : 1.35, 24, 24),
          color: 0x0ea5e9,
          opacity: 0.22,
          pos: initialPos.sphere,
          rotX: 0.004,
          rotY: 0.006,
          rotZ: 0.002,
          floatSpeed: 1.05,
          floatOffset: Math.PI * 0.7,
        },
        {
          id: 'octa',
          geom: new THREE.OctahedronGeometry(isMobile ? 1.05 : 1.35, 0),
          color: 0x8b5cf6,
          opacity: 0.22,
          pos: initialPos.octa,
          rotX: 0.007,
          rotY: 0.004,
          rotZ: 0.006,
          floatSpeed: 0.8,
          floatOffset: Math.PI * 1.2,
        },
        {
          id: 'ico',
          geom: new THREE.IcosahedronGeometry(isMobile ? 0.85 : 1.1, 0),
          color: 0x06b6d4,
          opacity: 0.18,
          pos: initialPos.ico,
          rotX: 0.005,
          rotY: 0.006,
          rotZ: 0.003,
          floatSpeed: 0.9,
          floatOffset: Math.PI * 0.4,
        },
      ];

      shapesConfig.forEach((cfg) => {
        const group = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({
          color: cfg.color,
          roughness: 0.35,
          metalness: 0.15,
          transparent: true,
          opacity: cfg.opacity,
          depthWrite: false,
        });
        const mesh = new THREE.Mesh(cfg.geom, mat);
        group.add(mesh);

        const wireframeGeom = new THREE.WireframeGeometry(cfg.geom);
        const wireframeMat = new THREE.LineBasicMaterial({
          color: cfg.color,
          transparent: true,
          opacity: Math.min(cfg.opacity * 1.6, 0.45),
        });
        const lines = new THREE.LineSegments(wireframeGeom, wireframeMat);
        group.add(lines);

        group.position.set(cfg.pos.x, cfg.pos.y, cfg.pos.z);
        scene.add(group);

        floatingItems.push({
          group,
          mesh,
          id: cfg.id,
          initialX: cfg.pos.x,
          initialY: cfg.pos.y,
          initialZ: cfg.pos.z,
          rotSpeedX: cfg.rotX,
          rotSpeedY: cfg.rotY,
          rotSpeedZ: cfg.rotZ,
          floatSpeed: cfg.floatSpeed,
          floatOffset: cfg.floatOffset,
          floatDistance: 0.35,
        });
      });

      let targetMouseX = 0;
      let targetMouseY = 0;
      let currentCamX = 0;
      let currentCamY = 0;

      const onMouseMove = (e: MouseEvent) => {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = -(e.clientY / window.innerHeight) * 2 + 1;
        targetMouseX = normX * 0.7;
        targetMouseY = normY * 0.7;
      };

      if (!isMobile) {
        window.addEventListener('mousemove', onMouseMove, { passive: true });
      }

      const onResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);

        // Dynamically update positions so shapes never drift behind the photo on widescreen
        const updatedPos = computePositions(w, h);
        floatingItems.forEach((item) => {
          if (item.id === 'torus') {
            item.initialX = updatedPos.torus.x;
            item.initialY = updatedPos.torus.y;
          } else if (item.id === 'box') {
            item.initialX = updatedPos.box.x;
            item.initialY = updatedPos.box.y;
          } else if (item.id === 'sphere') {
            item.initialX = updatedPos.sphere.x;
            item.initialY = updatedPos.sphere.y;
          } else if (item.id === 'octa') {
            item.initialX = updatedPos.octa.x;
            item.initialY = updatedPos.octa.y;
          } else if (item.id === 'ico') {
            item.initialX = updatedPos.ico.x;
            item.initialY = updatedPos.ico.y;
          }
        });
      };

      window.addEventListener('resize', onResize, { passive: true });

      const clock = new THREE.Clock();
      let lastRenderTime = 0;
      const minInterval = isLowPower ? 1000 / 36 : 1000 / 60;

      const animate = (timestamp: number) => {
        if (!isDestroyed) {
          if (isIntersecting && isPageVisible) {
            const elapsedSinceLast = timestamp - lastRenderTime;
            if (elapsedSinceLast >= minInterval || prefersReducedMotion) {
              lastRenderTime = timestamp;
              const elapsedTime = clock.getElapsedTime();
              floatingItems.forEach((item) => {
                item.group.rotation.x += item.rotSpeedX;
                item.group.rotation.y += item.rotSpeedY;
                item.group.rotation.z += item.rotSpeedZ;

                const deltaY = Math.sin(elapsedTime * item.floatSpeed + item.floatOffset) * item.floatDistance;
                const deltaX = Math.cos(elapsedTime * (item.floatSpeed * 0.6) + item.floatOffset) * 0.15;

                item.group.position.y = item.initialY + deltaY;
                item.group.position.x = item.initialX + deltaX;
              });

              if (!isMobile) {
                currentCamX += (targetMouseX - currentCamX) * 0.04;
                currentCamY += (targetMouseY - currentCamY) * 0.04;
                camera.position.x = currentCamX;
                camera.position.y = currentCamY;
                camera.lookAt(0, 0, 0);
              }

              renderer.render(scene, camera);
            }
          }
          if (!prefersReducedMotion) {
            animId = requestAnimationFrame(animate);
          }
        }
      };

      if (prefersReducedMotion) {
        animate(performance.now());
      } else {
        animId = requestAnimationFrame(animate);
      }

      const handleVisibilityChange = () => {
        isPageVisible = !document.hidden;
      };
      document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

      let observer: IntersectionObserver | null = null;
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              isIntersecting = entry.isIntersecting;
            });
          },
          { threshold: 0.05 }
        );
        observer.observe(container);
      }

      return () => {
        if (animId) cancelAnimationFrame(animId);
        if (!isMobile) window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        if (observer) observer.disconnect();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    let cleanupFn: (() => void) | undefined;
    if (window.THREE) {
      cleanupFn = initThree();
    } else {
      const checkInterval = setInterval(() => {
        if (window.THREE) {
          clearInterval(checkInterval);
          cleanupFn = initThree();
        }
      }, 50);
      const timeout = setTimeout(() => clearInterval(checkInterval), 4000);

      return () => {
        isDestroyed = true;
        clearInterval(checkInterval);
        clearTimeout(timeout);
        if (cleanupFn) cleanupFn();
      };
    }

    return () => {
      isDestroyed = true;
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
