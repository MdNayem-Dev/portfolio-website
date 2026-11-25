import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { data, t, isBn } = useLanguage();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAdminTaps = () => {
    const now = Date.now();
    const taps = parseInt(sessionStorage.getItem('secret_admin_taps') || '0', 10);
    const lastTap = parseInt(sessionStorage.getItem('secret_admin_last_tap') || '0', 10);

    if (now - lastTap < 1500) {
      const nextTaps = taps + 1;
      sessionStorage.setItem('secret_admin_taps', nextTaps.toString());
      sessionStorage.setItem('secret_admin_last_tap', now.toString());
      if (nextTaps >= 4) {
        sessionStorage.removeItem('secret_admin_taps');
        window.dispatchEvent(new CustomEvent('open-admin-modal'));
      }
    } else {
      sessionStorage.setItem('secret_admin_taps', '1');
      sessionStorage.setItem('secret_admin_last_tap', now.toString());
    }
  };

  return (
    <footer className="bg-[#090909] dark:bg-[#050508] text-[#A1A1AA] pt-14 sm:pt-20 pb-10 sm:pb-12 pb-safe px-4 sm:px-8 lg:px-12 border-t border-stone-900 dark:border-slate-800 mt-auto w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-stone-800/80 dark:border-slate-700/50">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {data.name}
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
              {t('footer.brandDesc')}
            </p>
          </div>

          {/* Directory Col */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
              {t('footer.directory')}
            </h4>
            <ul className="space-y-1 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="min-h-[44px] flex items-center hover:text-white transition cursor-pointer text-left touch-manipulation w-full"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="min-h-[44px] flex items-center hover:text-white transition cursor-pointer text-left touch-manipulation w-full"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="min-h-[44px] flex items-center hover:text-white transition cursor-pointer text-left touch-manipulation w-full"
                >
                  {t('nav.projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="min-h-[44px] flex items-center hover:text-white transition cursor-pointer text-left touch-manipulation w-full"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Col */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em]">
              {t('footer.connect')}
            </h4>
            <ul className="space-y-1 text-sm text-stone-400">
              <li>
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-white transition touch-manipulation"
                >
                  <i className="fab fa-github text-xs text-white w-4 text-center" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-white transition touch-manipulation"
                >
                  <i className="fab fa-linkedin-in text-xs text-blue-400 w-4 text-center" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={data.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-white transition touch-manipulation"
                >
                  <i className="fab fa-whatsapp text-xs text-emerald-500 w-4 text-center" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={data.socials.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-2.5 hover:text-white transition touch-manipulation"
                >
                  <i className="fas fa-envelope text-xs text-[#EA4335] w-4 text-center" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Telemetry Bar */}
        <div className="pt-6 sm:pt-8 pb-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[0.6875rem] sm:text-xs text-stone-400 border-b border-stone-800/60 dark:border-slate-700/40">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 text-stone-500 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {isBn ? 'এনভায়রনমেন্ট:' : 'Environment:'}
            </span>
            <span className="text-stone-300 font-semibold">
              {data.systemTelemetry.deviceName}
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-300 font-medium">
              {data.systemTelemetry.osVersion}
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-300 font-medium">
              📍 {data.location}
            </span>
          </div>
          <div className="text-stone-500 text-[10px] sm:text-[11px] font-mono">
            {data.systemTelemetry.publishedDateString}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[0.6875rem] sm:text-xs font-semibold text-stone-500 tracking-wider text-center sm:text-left">
          <div
            onClick={handleAdminTaps}
            className="select-none cursor-default active:opacity-90"
            title=""
          >
            © 2026 {data.name.toUpperCase()}. {t('footer.rights')}
          </div>
          <div className="text-stone-500">
            {isBn ? 'ফুল-স্ট্যাক ওয়েব ডেভেলপার · NEXT.JS ও REACT' : 'FULL-STACK WEB DEVELOPER · NEXT.JS & REACT'}
          </div>
        </div>
      </div>
    </footer>
  );
};
