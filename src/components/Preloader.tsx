import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    if (onComplete) {
      setTimeout(onComplete, 400);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="welcome-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center p-4 sm:p-8 bg-[#F5F1E8] dark:bg-slate-950 cursor-pointer select-none overflow-hidden transition-colors duration-300"
          title="Click to enter"
        >
          <motion.div
            initial={{ scale: 0.92, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: -10, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg md:max-w-xl flex flex-col items-center justify-center relative"
          >
            <svg
              viewBox="0 0 600 440"
              className="w-full h-auto drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000000" floodOpacity="0.08" />
                </filter>
              </defs>
              <g id="character-body">
                <path d="M210 230 C205 185, 230 155, 260 150 L340 170 C360 185, 385 205, 370 235 Z" fill="#5E8D87" />
                <path d="M325 168 C355 180, 395 210, 420 185 C410 160, 380 145, 340 155 Z" fill="#5E8D87" />
                <path d="M268 152 L285 190 L302 158" stroke="#476F6A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="285" cy="205" r="2.5" fill="#476F6A" />
                <circle cx="283" cy="222" r="2.5" fill="#476F6A" />
                <path d="M268 152 L266 128 C266 128, 280 135, 298 128 L296 156 Z" fill="#F3B38B" />
                <path d="M268 140 C280 144, 292 144, 298 138 L296 152 L268 150 Z" fill="#E69F74" />
              </g>
              <g id="character-head">
                <circle cx="282" cy="90" r="38" fill="#F3B38B" />
                <path d="M244 88 C242 55, 270 42, 295 44 C315 45, 328 62, 325 88 C318 80, 310 78, 302 80 C290 75, 275 75, 265 82 C255 80, 248 84, 244 88 Z" fill="#3D291F" />
                <path d="M244 88 C240 102, 246 110, 250 110 C254 110, 252 98, 248 90 Z" fill="#3D291F" />
                <path d="M320 88 C324 100, 320 110, 316 110 C312 110, 314 98, 318 90 Z" fill="#3D291F" />
                <ellipse cx="270" cy="92" rx="3" ry="4" fill="#3D291F" />
                <ellipse cx="298" cy="92" rx="3" ry="4" fill="#3D291F" />
                <path d="M264 84 C268 82, 274 82, 278 84" stroke="#3D291F" strokeWidth="2" strokeLinecap="round" />
                <path d="M290 84 C294 82, 300 82, 304 84" stroke="#3D291F" strokeWidth="2" strokeLinecap="round" />
                <path d="M282 94 L280 100 L284 100" stroke="#E69F74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M276 108 C280 112, 288 112, 292 108" stroke="#3D291F" strokeWidth="2" strokeLinecap="round" />
                <circle cx="263" cy="99" r="5" fill="#F39A77" opacity="0.4" />
                <circle cx="305" cy="99" r="5" fill="#F39A77" opacity="0.4" />
              </g>
              <g id="left-arm-support">
                <path d="M210 230 C200 240, 205 255, 222 250 L270 238 L255 225 Z" fill="#5E8D87" />
                <path d="M214 238 C225 240, 285 242, 310 238 C318 236, 320 228, 308 224 C285 220, 240 224, 222 225 Z" fill="#F3B38B" />
                <path d="M288 226 C294 228, 314 228, 318 235 C318 242, 305 244, 292 242 Z" fill="#ECA67E" />
              </g>
              <g id="waving-arm-group">
                <path d="M375 190 C398 165, 415 130, 424 100 C435 104, 442 116, 432 145 C420 178, 396 205, 380 208 Z" fill="#F3B38B" />
                <rect x="418" y="96" width="18" height="8" rx="3" transform="rotate(-15 418 96)" fill="#3D291F" />
                <motion.g
                  style={{ transformOrigin: '425px 95px' }}
                  animate={{ rotate: [0, 14, -10, 14, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path d="M418 92 C414 78, 420 65, 426 62 C435 60, 444 72, 440 88 Z" fill="#F3B38B" />
                  <path d="M418 84 C408 80, 402 70, 406 66 C410 62, 415 68, 422 76 Z" fill="#F3B38B" />
                  <path d="M424 64 C422 48, 426 38, 430 38 C434 38, 435 48, 432 64 Z" fill="#F3B38B" />
                  <path d="M433 63 C435 44, 440 34, 444 35 C448 36, 446 47, 441 65 Z" fill="#F3B38B" />
                  <path d="M441 66 C446 48, 452 40, 456 42 C459 44, 455 54, 448 68 Z" fill="#F3B38B" />
                  <path d="M447 72 C454 58, 462 52, 465 55 C468 58, 461 68, 454 78 Z" fill="#F3B38B" />
                </motion.g>
              </g>
              <g id="welcome-banner">
                <rect x="50" y="235" width="500" height="165" rx="14" fill="#E76A54" />
                <path d="M50 385 C50 393, 56 400, 64 400 L536 400 C544 400, 550 393, 550 385 L550 380 L50 380 Z" fill="#D85C46" opacity="0.35" />
                <text
                  x="300"
                  y="342"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="52"
                  fontWeight="700"
                  letterSpacing="0.08em"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                >
                  WELCOME
                </text>
              </g>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-xs text-stone-500 dark:text-slate-400 font-medium tracking-wide"
          >
            Entering portfolio...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
