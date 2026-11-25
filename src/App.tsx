import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundAmbient } from './components/BackgroundAmbient';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

// Lazy load heavy modals so they don't impact initial page weight
const AdminModal = lazy(() => import('./components/AdminModal').then((m) => ({ default: m.AdminModal })));
const ResumeModal = lazy(() => import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal })));

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.16,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showPreloader, setShowPreloader] = useState<boolean>(true);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  // Preload modals during idle time
  useEffect(() => {
    const idleCallback =
      typeof window !== 'undefined' && 'requestIdleCallback' in window
        ? (window as any).requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1000);

    const idleId = idleCallback(() => {
      import('./components/ResumeModal');
    });

    return () => {
      if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleId);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setAdminOpen((prev) => !prev);
      }
    };

    const handleOpenAdmin = () => {
      setAdminOpen(true);
    };

    const handleOpenResume = () => {
      setResumeOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-admin-modal', handleOpenAdmin);
    window.addEventListener('open-resume-modal', handleOpenResume);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-admin-modal', handleOpenAdmin);
      window.removeEventListener('open-resume-modal', handleOpenResume);
    };
  }, []);

  const navigateTo = (page: string) => {
    if (page === currentPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen min-h-[100dvh] flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 relative selection:bg-blue-600 selection:text-white max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Welcome Preloader Overlay */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      {/* Custom Mouse Cursor (Desktop fine pointers only) */}
      <CustomCursor />

      {/* Ambient Floating Orbs & Grid */}
      <BackgroundAmbient />

      {/* Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View Router with Instant Snappy Page Transitions */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full will-change-[opacity,transform]"
          >
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
            {(currentPage === 'projects' || currentPage === 'beyond-classroom') && (
              <ProjectsPage onNavigate={navigateTo} />
            )}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Lazy Modals */}
      <Suspense fallback={null}>
        {adminOpen && <AdminModal isOpen={adminOpen} onClose={() => setAdminOpen(false)} />}
        {resumeOpen && <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />}
      </Suspense>
    </div>
  );
};
