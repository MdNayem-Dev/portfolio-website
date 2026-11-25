import React from 'react';
import {
  Code2,
  Server,
  Database,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTABanner } from '../components/CTABanner';
import { useVanillaTilt } from '../hooks/useVanillaTilt';
import { DeveloperStory } from '../components/DeveloperStory';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { data, t, isBn } = useLanguage();
  useVanillaTilt();

  return (
    <div className="pt-16 sm:pt-20 min-h-screen min-h-[100dvh] w-full max-w-full overflow-x-hidden">
      {/* Signature Editorial Story Section */}
      <DeveloperStory />

      {/* Technical Skills Matrix Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-left">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
              {t('section.technicalProficiency')}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white">
              {t('section.skillsSub')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="tilt-card bento-card p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700/70"
                data-tilt
                data-tilt-max="10"
                data-tilt-scale="1.02"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-[#0066ff] dark:text-blue-400 flex items-center justify-center text-lg mb-4 sm:mb-6 shadow-sm">
                    {idx === 0 && <Code2 size={22} />}
                    {idx === 1 && <Server size={22} />}
                    {idx === 2 && <Database size={22} />}
                    {idx === 3 && <Layers size={22} />}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mb-4">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-600 dark:text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Profile Overview & FAQs */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Engineering Profile Card */}
          <div
            className="tilt-card lg:col-span-6 bento-card p-6 sm:p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
            data-tilt
            data-tilt-max="8"
            data-tilt-scale="1.01"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
              {t('section.philosophy')}
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              {t('section.philosophySub')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              {t('section.philosophyDesc')}
            </p>

            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">{t('section.coreStack')}:</span>
                <span className="font-bold text-slate-900 dark:text-white">Next.js 16 • React 19 • TypeScript</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">{t('section.dataArch')}:</span>
                <span className="font-bold text-slate-900 dark:text-white">Prisma ORM • MariaDB • Cloudflare D1</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">{t('section.edgeArch')}:</span>
                <span className="font-bold text-slate-900 dark:text-white">Cloudflare Workers Edge SSR</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="press-3d min-h-[46px] w-full sm:w-auto px-6 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-[#0066ff] dark:hover:bg-slate-100 flex items-center justify-center touch-manipulation cursor-pointer shadow-xs"
              >
                {isBn ? 'সকল প্রজেক্ট দেখুন' : 'View Recent Projects'}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="press-3d min-h-[46px] w-full sm:w-auto px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center touch-manipulation cursor-pointer border border-slate-200/80 dark:border-slate-700/70"
              >
                {isBn ? 'নাঈমের সাথে যোগাযোগ' : 'Contact Nayem'}
              </button>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
              {t('section.faq')}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-5 sm:mb-6">
              {isBn ? 'নাঈম সম্পর্কে সাধারণ জিজ্ঞাসা' : 'Common Questions About Nayem'}
            </h3>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CTABanner
        eyebrow={t('section.ctaEyebrow')}
        title={t('section.ctaTitle')}
        description={t('section.ctaDesc')}
        buttonText={t('section.ctaButton')}
        onClick={() => onNavigate('projects')}
      />
    </div>
  );
};
