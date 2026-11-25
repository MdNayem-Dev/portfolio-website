import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { t, data, isBn } = useLanguage();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-all duration-300 pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center min-w-0 pr-2">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition cursor-pointer text-left focus:outline-none min-h-[44px] group min-w-0"
            aria-label={`${data.name} Portfolio Home`}
          >
            <img
              src="/favicon.svg"
              alt="Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl shadow-xs group-hover:scale-105 transition-transform shrink-0"
            />
            <span className="font-handwriting text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-slate-900 dark:text-white tracking-wide font-bold truncate max-w-[150px] xs:max-w-[210px] sm:max-w-none">
              {data.name}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-semibold transition-colors cursor-pointer py-2 px-1 relative min-h-[44px] flex items-center ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </button>
            );
          })}

          {/* Resume Trigger */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
            className="press-3d px-3 py-1.5 rounded-xl border border-blue-500/30 dark:border-blue-400/30 bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100/70 dark:hover:bg-blue-900/50 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            title={isBn ? 'সিভি দেখুন ও ডাউনলোড করুন' : 'View & Download Resume'}
          >
            <FileDown size={14} />
            <span>{t('nav.resume')}</span>
          </button>

          {/* Language Switcher Pill Toggle */}
          <div className="pl-1">
            <LanguageSwitcher variant="pill" />
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 cursor-pointer focus:outline-none"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile: Language + Theme Toggle + Menu Button */}
        <div className="lg:hidden flex items-center gap-1 sm:gap-1.5 shrink-0">
          <LanguageSwitcher variant="button" />
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top,0px))] sm:top-[calc(5rem+env(safe-area-inset-top,0px))] bottom-0 bg-slate-900/40 dark:bg-black/50 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 pt-5 pb-8 flex flex-col space-y-3.5 shadow-2xl max-h-[85dvh] overflow-y-auto pb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Language Selector Full Bar in Drawer */}
            <LanguageSwitcher variant="full" />

            {/* Theme Toggle Full Bar in Drawer */}
            <div className="w-full flex items-center justify-between p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
              <div className="flex items-center gap-2 pl-2">
                {isDark ? (
                  <Moon size={18} className="text-blue-400" />
                ) : (
                  <Sun size={18} className="text-amber-500" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  {isBn ? 'থিম মোড' : 'Theme Mode'}
                </span>
              </div>
              <div className="flex items-center gap-1 p-0.5 bg-slate-200/70 dark:bg-slate-900/70 rounded-xl">
                <button
                  type="button"
                  onClick={() => !isDark || toggleTheme()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    !isDark
                      ? 'bg-white dark:bg-slate-800 text-amber-600 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  <Sun size={13} className="text-amber-500" />
                  <span>{isBn ? 'লাইট' : 'Light'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => isDark || toggleTheme()}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isDark
                      ? 'bg-white dark:bg-slate-800 text-blue-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                  }`}
                >
                  <Moon size={13} className="text-blue-400" />
                  <span>{isBn ? 'ডার্ক' : 'Dark'}</span>
                </button>
              </div>
            </div>

            <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 pt-1 mb-1">
              {t('nav.home') === 'Home' ? 'Menu Navigation' : 'মেনু নেভিগেশন'}
            </p>
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-base font-bold transition-all min-h-[48px] flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/50 shadow-xs'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 active:bg-slate-100 dark:active:bg-slate-700'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </button>
              );
            })}

            {/* Resume button in mobile drawer */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-resume-modal'));
                }}
                className="w-full py-3 px-4 rounded-xl text-base font-bold transition-all min-h-[48px] flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white shadow-md active:bg-blue-800 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileDown size={18} />
                  <span>{t('nav.resume')}</span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20">PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
