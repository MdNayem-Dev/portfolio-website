import React from 'react';
import {
  Check,
  Github,
  ExternalLink,
  Database,
  ShoppingBag,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CTABanner } from '../components/CTABanner';
import { useVanillaTilt } from '../hooks/useVanillaTilt';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { data, t, isBn } = useLanguage();
  useVanillaTilt();

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database size={16} />;
      case 1:
        return <Zap size={16} />;
      case 2:
      default:
        return <ShoppingBag size={16} />;
    }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen min-h-[100dvh] w-full max-w-full overflow-x-hidden">
      {/* Header Banner */}
      <div className="bg-[#edf5fd] dark:bg-slate-900/60 py-10 sm:py-16 px-4 sm:px-6 text-center border-b border-slate-100 dark:border-slate-800 transition-colors">
        <h1 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight">
          {isBn ? 'সাম্প্রতিক প্রজেক্টসমূহ' : 'Recent Projects'}
        </h1>
        <div className="w-16 sm:w-20 h-1 bg-[#0066ff] dark:bg-blue-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-14">
          {/* Loop over real GitHub projects */}
          {data.projects.map((proj) => {
            const badgeBg =
              proj.color === 'emerald'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                : proj.color === 'purple'
                ? 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400';

            const checkColor =
              proj.color === 'emerald'
                ? 'text-emerald-600 dark:text-emerald-400'
                : proj.color === 'purple'
                ? 'text-purple-600 dark:text-purple-400'
                : 'text-indigo-600 dark:text-indigo-400';

            return (
              <div
                key={proj.id}
                className="tilt-card bento-card p-5 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
                data-tilt
                data-tilt-max="6"
                data-tilt-scale="1.01"
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`w-10 h-10 rounded-xl font-bold text-sm shrink-0 flex items-center justify-center ${badgeBg}`}>
                        {proj.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {proj.category}
                      </span>
                    </div>

                    <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-4">
                      {proj.title}
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                      {isBn ? 'মূল বৈশিষ্ট্য ও আর্কিটেকচার:' : 'Key Highlights & Architecture:'}
                    </h4>

                    <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                      {proj.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <Check size={16} className={`${checkColor} shrink-0 mt-0.5`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-3">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="press-3d w-full xs:w-auto px-5 py-3 rounded-xl bg-slate-950 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                      >
                        <Github size={15} />
                        <span>{isBn ? 'গিটহাবে সোর্স কোড দেখুন' : 'View Repository on GitHub'}</span>
                        <ExternalLink size={13} />
                      </a>

                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="press-3d w-full xs:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
                        >
                          <span>{isBn ? 'লাইভ ওয়েবসাইট ভিজিট করুন' : 'Visit Live Website'}</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Sidebar: Pillars */}
                  <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 sm:p-7 border border-slate-200 dark:border-slate-700/70">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                      {proj.pillarsTitle || (isBn ? 'আর্কিটেকচার স্তম্ভ' : 'Architecture Core')}
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {proj.pillars?.map((pillar, pilIdx) => (
                        <div
                          key={pilIdx}
                          className="p-3.5 sm:p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-700/60 shadow-xs flex items-start gap-3"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${badgeBg}`}>
                            {getPillarIcon(pilIdx)}
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                              {pillar.title}
                            </h5>
                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Chronology & Milestones */}
          <div
            className="tilt-card bento-card p-5 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
            data-tilt
            data-tilt-max="5"
            data-tilt-scale="1.01"
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 block">
                {t('section.milestones')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                {isBn ? 'মাইলফলক ও প্রযুক্তিগত বিকাশ' : 'Milestones & Architecture Growth'}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1">
                {isBn
                  ? 'ওয়েব ডেভেলপমেন্টের সূচনা থেকে আধুনিক ফুল-স্ট্যাক ইঞ্জিনিয়ারিং পর্যন্ত'
                  : 'From initial web foundations to production full-stack engineering'}
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-700">
              {data.milestones.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-sm ${
                      idx === 0 ? 'bg-blue-600 dark:bg-blue-400' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
                    } transition-colors`}
                  />
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full inline-block mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-1">
                    {item.description}
                  </p>
                  <span className="text-[0.6875rem] font-medium text-slate-400 dark:text-slate-500">
                    {item.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <CTABanner
        eyebrow={t('section.ctaEyebrow')}
        title={t('section.ctaTitle')}
        description={t('section.ctaDesc')}
        buttonText={t('section.ctaButton')}
        onClick={() => onNavigate('contact')}
      />
    </div>
  );
};
