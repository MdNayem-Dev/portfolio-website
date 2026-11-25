import { useEffect } from 'react';

declare global {
  interface Window {
    VanillaTilt?: {
      init: (elements: NodeListOf<HTMLElement> | HTMLElement[], options?: Record<string, unknown>) => void;
    };
  }
}

export function useVanillaTilt(deps: unknown[] = []) {
  useEffect(() => {
    // Avoid running on touch devices
    if (
      typeof window === 'undefined' ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    let isDestroyed = false;

    const initTilt = () => {
      if (isDestroyed) return;
      const VanillaTilt = window.VanillaTilt;
      if (!VanillaTilt) return;

      const elements = document.querySelectorAll<HTMLElement & { vanillaTilt?: { destroy: () => void } }>(
        '.tilt-card, [data-tilt]'
      );

      elements.forEach((el) => {
        if (!el.vanillaTilt) {
          const max = el.dataset.tiltMax ? parseFloat(el.dataset.tiltMax) : 8;
          const scale = el.dataset.tiltScale ? parseFloat(el.dataset.tiltScale) : 1.02;
          const glare = el.dataset.tiltGlare === 'true';
          const maxGlare = el.dataset.tiltMaxGlare ? parseFloat(el.dataset.tiltMaxGlare) : 0.15;

          VanillaTilt.init([el], {
            max,
            speed: 400,
            perspective: 1000,
            scale,
            glare,
            'max-glare': maxGlare,
          });
        }
      });
    };

    const cleanup = () => {
      const elements = document.querySelectorAll<HTMLElement & { vanillaTilt?: { destroy: () => void } }>(
        '.tilt-card, [data-tilt]'
      );
      elements.forEach((el) => {
        if (el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };

    if (window.VanillaTilt) {
      const timer = setTimeout(initTilt, 60);
      return () => {
        isDestroyed = true;
        clearTimeout(timer);
        cleanup();
      };
    } else {
      const interval = setInterval(() => {
        if (window.VanillaTilt) {
          clearInterval(interval);
          initTilt();
        }
      }, 50);
      const timeout = setTimeout(() => clearInterval(interval), 3500);

      return () => {
        isDestroyed = true;
        clearInterval(interval);
        clearTimeout(timeout);
        cleanup();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
