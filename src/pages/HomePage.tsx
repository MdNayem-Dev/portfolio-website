import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  ShoppingBag,
  ArrowUpRight,
  ExternalLink,
  Github,
  Globe,
  FileDown,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroCanvas } from '../components/HeroCanvas';
import { FAQAccordion } from '../components/FAQAccordion';
import { CTABanner } from '../components/CTABanner';
import { useVanillaTilt } from '../hooks/useVanillaTilt';
import { TechMarquee } from '../components/TechMarquee';
import { ClientReviews } from '../components/ClientReviews';
import { DeveloperStory } from '../components/DeveloperStory';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const nameRef = useRef<HTMLSpanElement>(null);
  const { data, t, isBn } = useLanguage();

  useVanillaTilt();

  useEffect(() => {
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animFrame: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        if (!nameRef.current) return;
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;
        const offX = (-normX * 0.45 + 0.8).toFixed(2);
        const offY = (-normY * 0.45 + 1).toFixed(2);
        nameRef.current.style.setProperty('--shadow-x', `${offX}px`);
        nameRef.current.style.setProperty('--shadow-y', `${offY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const getHighlightIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 size={22} />;
      case 1:
        return <Server size={22} />;
      case 2:
        return <Database size={22} />;
      case 3:
      default:
        return <ShoppingBag size={22} />;
    }
  };

  return (
    <div className="pt-16 sm:pt-20 flex flex-col w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-3 xs:px-4 sm:px-8 lg:px-16 pt-4 sm:pt-8 lg:pt-10 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
        <HeroCanvas />

        <div className="max-w-7xl w-full mx-auto grid grid-cols-12 gap-2 xs:gap-4 sm:gap-6 lg:gap-10 items-center relative z-1">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 sm:col-span-7 lg:col-span-6 flex flex-col justify-center py-1 sm:py-2 min-w-0"
          >
            <div className="flex items-start gap-3 sm:gap-6">
              {/* Left Social Column (Desktop) */}
              <div className="hidden md:flex flex-col items-center gap-3.5 sm:gap-4 pt-1.5 shrink-0">
                <a
                  href={data.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub Profile"
                  className="press-3d w-10 h-10 lg:w-11 lg:h-11 min-w-[40px] min-h-[40px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/95 dark:bg-slate-800/95 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-black hover:border-black hover:shadow-md hover:shadow-black/25 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer touch-manipulation"
                >
                  <i className="fab fa-github text-sm sm:text-base" />
                </a>
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                  className="press-3d w-10 h-10 lg:w-11 lg:h-11 min-w-[40px] min-h-[40px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-md hover:shadow-[#0A66C2]/25 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer touch-manipulation"
                >
                  <i className="fab fa-linkedin-in text-xs sm:text-sm" />
                </a>
                <a
                  href={data.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="press-3d w-10 h-10 lg:w-11 lg:h-11 min-w-[40px] min-h-[40px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-md hover:shadow-[#25D366]/25 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer touch-manipulation"
                >
                  <i className="fab fa-whatsapp text-xs sm:text-base" />
                </a>
                <a
                  href={data.socials.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  title="Send Email"
                  className="press-3d w-10 h-10 lg:w-11 lg:h-11 min-w-[40px] min-h-[40px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white/95 dark:bg-slate-800/95 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335] hover:shadow-md hover:shadow-[#EA4335]/25 flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer touch-manipulation"
                >
                  <i className="fas fa-envelope text-xs sm:text-sm" />
                </a>
              </div>

              {/* Text & CTAs */}
              <div className="flex-1 min-w-0 w-full">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2 sm:mb-3">
                  {data.tagline}
                </span>

                <h1 className="hero-3d-heading font-serif-display text-[1.25rem] xs:text-[1.55rem] sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-slate-950 dark:text-white tracking-tight leading-[1.14] sm:leading-[1.1] mb-2.5 xs:mb-3.5 sm:mb-6 select-none">
                  {isBn ? (
                    <>
                      হ্যালো, আমি{' '}
                      <span
                        ref={nameRef}
                        className="hero-3d-name text-slate-950 dark:text-white"
                      >
                        নাঈম
                      </span>
                      ।<br />
                      <span className="font-serif-display font-bold text-slate-950 dark:text-white inline-block text-xl sm:text-3xl md:text-4xl">
                        ফুল-স্ট্যাক ওয়েব ডেভেলপার।
                      </span>
                    </>
                  ) : (
                    <>
                      Hello, I'm{' '}
                      <span
                        ref={nameRef}
                        className="hero-3d-name text-slate-950 dark:text-white"
                      >
                        Nayem.
                      </span>
                      <br />
                      <span className="font-serif-display font-bold text-slate-950 dark:text-white inline-block text-xl sm:text-3xl md:text-4xl">
                        Full-Stack Web Developer.
                      </span>
                    </>
                  )}
                </h1>

                <p className="hidden sm:block text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed mb-6">
                  {data.aboutIntro1}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 mb-2.5 xs:mb-3.5 sm:mb-8">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="press-3d min-h-[38px] xs:min-h-[42px] sm:min-h-[46px] px-4 xs:px-5 sm:px-7 py-2 xs:py-2.5 sm:py-3.5 bg-slate-950 dark:bg-white hover:bg-slate-900 dark:hover:bg-slate-100 active:bg-black text-white dark:text-slate-950 rounded-xl sm:rounded-2xl text-[11px] xs:text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-slate-950/20 dark:shadow-black/30 hover:shadow-xl cursor-pointer flex items-center gap-2 touch-manipulation border border-slate-800 dark:border-white/90"
                  >
                    <span>{isBn ? 'কথা বলুন' : "Let's Talk"}</span>
                    <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </button>
                  <button
                    onClick={() => onNavigate('projects')}
                    className="press-3d min-h-[38px] xs:min-h-[42px] sm:min-h-[46px] inline-flex items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 group cursor-pointer touch-manipulation px-3 xs:px-4 py-2 rounded-xl border border-slate-200/80 dark:border-slate-700/70 hover:border-blue-300 dark:hover:border-blue-600 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xs transition-colors"
                  >
                    <span>{t('hero.viewProjects')}</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform text-xs sm:text-base text-blue-600 dark:text-blue-400">
                      →
                    </span>
                  </button>
                  <a
                    href="/Md_Nayem_Hossain_Resume.pdf"
                    download="Md_Nayem_Hossain_Resume.pdf"
                    className="press-3d min-h-[38px] xs:min-h-[42px] sm:min-h-[46px] inline-flex items-center gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 group cursor-pointer touch-manipulation px-3 xs:px-4 py-2 rounded-xl border border-blue-200/90 dark:border-blue-800/60 bg-blue-50/70 dark:bg-blue-950/40 hover:bg-blue-100/70 dark:hover:bg-blue-900/40 backdrop-blur-xs transition-colors"
                    title={isBn ? 'সিভি ডাউনলোড করুন (PDF)' : 'Download Resume (PDF)'}
                  >
                    <FileDown size={15} className="text-blue-600 dark:text-blue-400" />
                    <span>{t('hero.downloadCv')}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-resume-modal'))}
                    className="press-3d text-[11px] xs:text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 underline underline-offset-4 cursor-pointer"
                  >
                    {t('hero.previewCv')}
                  </button>
                </div>

                {/* Mobile Socials Row */}
                <div className="flex md:hidden items-center gap-1.5 xs:gap-2 mb-2.5 xs:mb-3.5 flex-nowrap overflow-x-auto">
                  <span className="text-[10px] xs:text-xs font-semibold text-slate-400 dark:text-slate-500 mr-0.5 shrink-0">
                    {isBn ? 'যোগাযোগ:' : 'Connect:'}
                  </span>
                  <a href={data.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="press-3d w-7 h-7 xs:w-8 xs:h-8 min-w-[28px] min-h-[28px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-white hover:bg-black hover:border-black transition-all shadow-2xs flex items-center justify-center shrink-0"><i className="fab fa-github text-[11px]" /></a>
                  <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="press-3d w-7 h-7 xs:w-8 xs:h-8 min-w-[28px] min-h-[28px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-2xs flex items-center justify-center shrink-0"><i className="fab fa-linkedin-in text-[9px]" /></a>
                  <a href={data.socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat" className="press-3d w-7 h-7 xs:w-8 xs:h-8 min-w-[28px] min-h-[28px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-2xs flex items-center justify-center shrink-0"><i className="fab fa-whatsapp text-[10px]" /></a>
                  <a href={data.socials.email} target="_blank" rel="noopener noreferrer" aria-label="Send Email" title="Send Email" className="press-3d w-7 h-7 xs:w-8 xs:h-8 min-w-[28px] min-h-[28px] rounded-full border border-slate-200/90 dark:border-slate-700/70 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#EA4335] hover:border-[#EA4335] transition-all shadow-2xs flex items-center justify-center shrink-0"><i className="fas fa-envelope text-[9px]" /></a>
                </div>

                {/* Sub-badges */}
                <div className="pt-2 xs:pt-3 sm:pt-5 border-t border-slate-200/80 dark:border-slate-700/50 flex flex-wrap items-center gap-x-2.5 xs:gap-x-4 sm:gap-x-5 gap-y-1 xs:gap-y-2 max-w-lg">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-[10px] xs:text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Next.js & React</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database size={12} className="text-purple-600 dark:text-purple-400 shrink-0" />
                    <span className="text-[10px] xs:text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Prisma & MariaDB</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe size={12} className="text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-[10px] xs:text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap">Edge SSR</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 sm:col-span-5 lg:col-span-6 flex justify-center lg:justify-end items-end w-full"
          >
            <div
              className="tilt-card relative w-full max-w-[200px] xs:max-w-[250px] sm:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center select-none pt-2 sm:pt-4"
              data-tilt
              data-tilt-max="5"
              data-tilt-scale="1.01"
              data-tilt-max-glare="0.08"
            >
              {/* Multi-Layered Radial Backdrop Glow & Orbital Ring */}
              <div aria-hidden="true" className="absolute inset-0 -top-6 sm:-top-14 -bottom-6 sm:-bottom-14 -left-8 sm:-left-20 -right-8 sm:-right-20 -z-10 flex items-center justify-center pointer-events-none select-none">
                <div className="w-[130%] h-[115%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.40)_0%,rgba(59,130,246,0.30)_32%,rgba(99,102,241,0.16)_58%,transparent_78%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.22)_0%,rgba(59,130,246,0.16)_32%,rgba(99,102,241,0.08)_58%,transparent_78%)] blur-2xl sm:blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
                <div className="absolute top-1/8 w-[92%] h-[82%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.65)_0%,rgba(59,130,246,0.40)_38%,rgba(14,165,233,0.20)_65%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.25)_0%,rgba(59,130,246,0.18)_38%,rgba(14,165,233,0.08)_65%,transparent_75%)] blur-xl sm:blur-2xl" />
                <div className="absolute w-[82%] sm:w-[90%] aspect-square rounded-full border border-blue-400/30 dark:border-blue-500/20 bg-gradient-to-tr from-blue-500/10 via-cyan-400/15 to-indigo-500/8 dark:from-blue-500/5 dark:via-cyan-400/8 dark:to-indigo-500/4 shadow-[0_0_80px_rgba(59,130,246,0.28)] dark:shadow-[0_0_80px_rgba(59,130,246,0.15)]" />
              </div>

              {/* Portrait photograph */}
              <div className="relative w-full flex justify-center overflow-visible">
                <picture className="w-full flex justify-center">
                  <source srcSet="/images/profile.webp" type="image/webp" />
                  <img
                    src="/images/profile.png"
                    loading="eager"
                    decoding="async"
                    width="520"
                    height="780"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.indexOf('/profile.png') === -1) {
                        target.src = '/profile.png';
                      }
                    }}
                    alt={data.name}
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.4) 92%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 82%, rgba(0,0,0,0.4) 92%, transparent 100%)',
                    }}
                    className="w-full h-auto max-h-[280px] xs:max-h-[350px] sm:max-h-[500px] lg:max-h-[640px] xl:max-h-[720px] object-contain object-bottom select-none transition-transform duration-500 hover:scale-[1.01]"
                  />
                </picture>
              </div>

              {/* Mobile badge */}
              <div className="flex sm:hidden absolute bottom-1 right-0 px-2.5 py-1.5 bg-white/98 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/70 rounded-xl items-center gap-1.5 z-10 shadow-[0_8px_20px_-3px_rgba(15,23,42,0.18),0_2px_6px_-1px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] dark:ring-white/[0.04]">
                <div className="w-4 h-4 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Code2 size={10} />
                </div>
                <span className="text-[9px] font-bold text-slate-900 dark:text-white leading-none">
                  {isBn ? 'ফুল-স্ট্যাক ডেভ' : 'Full-Stack Dev'}
                </span>
              </div>

              {/* Floating Badge (Desktop & Tablet) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="tilt-card hidden sm:flex absolute bottom-8 sm:bottom-14 lg:bottom-16 left-0 sm:-left-4 lg:-left-6 px-3.5 py-2.5 sm:px-5 sm:py-3.5 bg-white/98 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/70 rounded-2xl items-center gap-2.5 sm:gap-3.5 z-10 max-w-[calc(100%-0.5rem)] shadow-[0_20px_40px_-8px_rgba(15,23,42,0.18),0_6px_16px_-4px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.04] dark:ring-white/[0.04]"
                data-tilt
                data-tilt-max="12"
                data-tilt-scale="1.03"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base sm:text-lg shadow-xs shrink-0">
                  <Code2 size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[0.625rem] sm:text-xs font-bold text-slate-950 dark:text-white uppercase tracking-wide truncate">
                    {data.roleTitle}
                  </p>
                  <p className="text-[0.5625rem] sm:text-[0.6875rem] text-slate-700 dark:text-slate-300 font-semibold truncate">
                    Next.js • React • Prisma • Edge SSR
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial About Me Story Section */}
      <DeveloperStory />

      {/* Highlights Bento Grid */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-left">
            <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
              {t('section.whatIBring')}
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white">
              {t('section.whatIBringSub')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {data.highlights.map((item, idx) => (
              <div
                key={idx}
                className="tilt-card bento-card p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/70"
                data-tilt
                data-tilt-max="12"
                data-tilt-scale="1.03"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-[#0066ff] dark:text-blue-400 flex items-center justify-center text-lg mb-4 sm:mb-6 shadow-sm">
                    {getHighlightIcon(idx)}
                  </div>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mt-1 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 dark:border-slate-700/50 text-[0.6875rem] font-bold uppercase tracking-wider text-[#0066ff] dark:text-blue-400">
                  {item.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured GitHub Projects Grid Preview */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
                {isBn ? 'সাম্প্রতিক গিটহাব প্রজেক্ট' : 'RECENT GITHUB PROJECTS'}
              </span>
              <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-slate-950 dark:text-white">
                {isBn ? 'নির্বাচিত ফুল-স্ট্যাক প্রজেক্ট' : 'Featured Full-Stack Work'}
              </h3>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>{t('section.viewAllProjects')}</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {data.projects.slice(0, 3).map((proj) => (
              <div
                key={proj.id}
                className="tilt-card bento-card p-6 sm:p-8 bg-white dark:bg-slate-900 flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm group"
                data-tilt
                data-tilt-max="8"
                data-tilt-scale="1.02"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {proj.number}
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black flex items-center justify-center transition"
                      title="View on GitHub"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press-3d w-full py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white hover:bg-black dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <span>{isBn ? 'গিটহাবে কোড দেখুন' : 'Inspect Code on GitHub'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <ClientReviews />

      {/* Developer Info & FAQ Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 bg-slate-50/70 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Engineering Stack Card */}
          <div
            className="tilt-card lg:col-span-6 bento-card p-6 sm:p-10 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700/70 shadow-sm"
            data-tilt
            data-tilt-max="8"
            data-tilt-scale="1.01"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066ff] dark:text-blue-400 block mb-2">
              {isBn ? 'ডেভেলপার প্রোফাইল' : 'DEVELOPER PROFILE'}
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              {data.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
              {data.aboutIntro2}
            </p>

            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 text-xs sm:text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">
                  {isBn ? 'বিশেষত্ব:' : 'Specialization:'}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {isBn ? 'Next.js ও React ফুল-স্ট্যাক' : 'Next.js & React Full-Stack'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">
                  {isBn ? 'ডাটাবেস ও ওআরএম:' : 'Database & ORM:'}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  Prisma • MariaDB • Cloudflare D1
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400">
                  {isBn ? 'সার্ভার ও এজ:' : 'Server & Edge:'}
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  Cloudflare Workers Edge SSR
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="press-3d min-h-[46px] w-full sm:w-auto px-6 py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-[#0066ff] dark:hover:bg-slate-100 cursor-pointer flex items-center justify-center touch-manipulation shadow-xs"
              >
                {isBn ? 'সকল প্রজেক্ট দেখুন' : 'Explore All Projects'}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="press-3d min-h-[46px] w-full sm:w-auto px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer flex items-center justify-center touch-manipulation border border-slate-200/80 dark:border-slate-700/70"
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
      </div>

      {/* Compact White Tech Stack Marquee */}
      <TechMarquee />

      {/* Bottom CTA */}
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
