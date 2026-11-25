import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const badgesEn = [
  { text: 'Full-Stack Web Developer' },
  { text: 'Next.js & React Specialist' },
  { text: 'E-Commerce Solutions' },
  { text: 'Database & Edge Architecture' },
  { text: 'Clean Code & Security' },
  { text: 'Problem Solver' },
];

const badgesBn = [
  { text: 'ফুল-স্ট্যাক ওয়েব ডেভেলপার' },
  { text: 'Next.js ও React বিশেষজ্ঞ' },
  { text: 'ই-কমার্স সলিউশন' },
  { text: 'ডাটাবেস ও এজ আর্কিটেকচার' },
  { text: 'পরিচ্ছন্ন ও নিরাপদ কোড' },
  { text: 'বাস্তবমুখী সমস্যা সমাধান' },
];

export const DeveloperStory: React.FC = () => {
  const { data, t, isBn } = useLanguage();
  const badges = isBn ? badgesBn : badgesEn;

  return (
    <section
      id="home-about"
      className="w-full bg-[#f6f7f9] dark:bg-slate-900/70 py-12 xs:py-16 sm:py-24 lg:py-28 px-4 sm:px-8 lg:px-16 border-t border-slate-200/80 dark:border-slate-800 relative overflow-hidden select-none transition-colors duration-300"
    >
      {/* Subtle atmospheric background light */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Narrative Content & Pills */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow Label matching reference */}
          <div className="flex items-center gap-2 mb-2.5 sm:mb-4">
            <span className="text-slate-400 dark:text-slate-600 font-bold text-sm sm:text-base">—</span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">
              {t('section.aboutMeEyebrow')}
            </span>
          </div>

          {/* Large Main Heading */}
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.14] sm:leading-[1.12] mb-5 sm:mb-8 font-serif-display">
            {t('section.aboutMeTitle')}
          </h2>

          {/* Narrative Paragraphs */}
          <div className="space-y-3.5 sm:space-y-5 text-slate-600 dark:text-slate-400 text-xs xs:text-sm sm:text-base leading-relaxed">
            <p>
              {isBn ? (
                <>
                  আমি <strong className="text-slate-950 dark:text-white font-bold">{data.name}</strong> — একজন ফুল-স্ট্যাক ওয়েব ডেভেলপার, যিনি Next.js এবং React ব্যবহার করে আধুনিক, রেসপনসিভ এবং ব্যবহারিক ওয়েব অ্যাপ্লিকেশন তৈরিতে নিবেদিত। বাস্তব জীবনের সমস্যা সমাধান এবং সৃজনশীল আইডিয়াকে কার্যকর কোডে রূপান্তর করতে আমি দারুণ উপভোগ করি।
                </>
              ) : (
                <>
                  I'm <strong className="text-slate-950 dark:text-white font-bold">{data.name}</strong> — a full-stack web developer focused on building modern, responsive, and practical web applications using <strong className="text-slate-950 dark:text-white font-semibold">Next.js and React</strong>. I genuinely love turning ideas into clean code, and solving real-world business challenges.
                </>
              )}
            </p>

            <p>
              {isBn ? (
                <>
                  কাজের অভিজ্ঞতা অনুযায়ী আমি ফ্রন্টএন্ড ডেভেলপমেন্ট, সার্ভার-সাইড কার্যকারিতা, ডাটাবেস ইন্টিগ্রেশন, সিকিউরিটি ও প্রমাণীকরণ এবং ই-কমার্স সলিউশন নিয়ে কাজ করেছি। আমার সাম্প্রতিক কাজের মধ্যে রয়েছে <strong className="text-slate-900 dark:text-slate-200 font-semibold">কৃষি ই-কমার্স প্ল্যাটফর্ম</strong> (AgroMart), <strong className="text-slate-900 dark:text-slate-200 font-semibold">লাক্সারি জুয়েলারি স্টোর</strong> (LumiFable) এবং <strong className="text-slate-900 dark:text-slate-200 font-semibold">ডিজিটাল প্রোডাক্ট প্ল্যাটফর্ম</strong> (PulseCut AI)।
                </>
              ) : (
                <>
                  Over the years I've worked across frontend development, server-side functionality, database integration, authentication, and e-commerce solutions. My recent work includes an <strong className="text-slate-900 dark:text-slate-200 font-semibold">agricultural e-commerce platform</strong> (AgroMart), a <strong className="text-slate-900 dark:text-slate-200 font-semibold">luxury jewellery storefront</strong> (LumiFable), and a <strong className="text-slate-900 dark:text-slate-200 font-semibold">digital products platform</strong> (PulseCut AI).
                </>
              )}
            </p>

            <p>
              {isBn ? (
                <>
                  পাশাপাশি আমি <strong className="text-slate-900 dark:text-slate-200 font-semibold">Cloudflare Workers ও D1</strong> দিয়ে এজ কম্পিউটিং আর্কিটেকচার এবং <strong className="text-slate-900 dark:text-slate-200 font-semibold">Prisma ও MariaDB</strong>-র সাহায্যে দ্রুতগতির ডাটাবেস লেয়ার তৈরি করেছি, যাতে প্রতিটি ডিভাইসে ব্যবহারকারী পায় নির্ভরযোগ্য অভিজ্ঞতা।
                </>
              ) : (
                <>
                  Along the way I've architected edge solutions with <strong className="text-slate-900 dark:text-slate-200 font-semibold">Cloudflare Workers & D1</strong>, paired with <strong className="text-slate-900 dark:text-slate-200 font-semibold">Prisma ORM and MariaDB</strong> to ensure lightning-fast performance, rock-solid security, and seamless user experiences across all devices.
                </>
              )}
            </p>

            <p className="text-slate-800 dark:text-slate-300 font-medium italic pt-1">
              {t('section.aboutQuote')}
            </p>
          </div>

          {/* Pills / Tag Chips matching reference screenshot */}
          <div className="flex flex-wrap gap-2 xs:gap-2.5 sm:gap-3.5 mt-6 sm:mt-10">
            {badges.map((b, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/70 text-[11px] xs:text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 shadow-xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600 transition-all select-none"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span className="whitespace-nowrap">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Seated Armchair Cutout with Lighting Glow & Floating Glass Icons */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative mt-6 lg:mt-0">
          {/* Main Studio Lighting Glow Layers */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -top-8 sm:-top-16 -bottom-6 sm:-bottom-10 -left-6 sm:-left-12 -right-6 sm:-right-12 -z-10 flex items-center justify-center pointer-events-none select-none"
          >
            {/* Outer Atmospheric Aura */}
            <div
              className="w-[125%] h-[115%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.36)_0%,rgba(99,102,241,0.24)_38%,rgba(168,85,247,0.12)_60%,transparent_78%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.20)_0%,rgba(99,102,241,0.14)_38%,rgba(168,85,247,0.08)_60%,transparent_78%)] blur-2xl sm:blur-3xl animate-pulse"
              style={{ animationDuration: '6s' }}
            />
            {/* Concentrated Bright Center Light behind subject */}
            <div className="absolute top-1/8 w-[88%] h-[78%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.60)_0%,rgba(59,130,246,0.38)_40%,rgba(14,165,233,0.18)_65%,transparent_75%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(186,230,253,0.25)_0%,rgba(59,130,246,0.18)_40%,rgba(14,165,233,0.08)_65%,transparent_75%)] blur-xl sm:blur-2xl" />
            {/* Delicate illuminated neon rim ring */}
            <div className="absolute w-[280px] xs:w-[320px] sm:w-[420px] lg:w-[460px] h-[280px] xs:h-[320px] sm:h-[420px] lg:h-[460px] rounded-full border border-blue-400/25 dark:border-blue-500/20 bg-gradient-to-tr from-blue-500/10 via-cyan-400/12 to-emerald-400/8 dark:from-blue-500/5 dark:via-cyan-400/8 dark:to-emerald-400/5 shadow-[0_0_60px_rgba(59,130,246,0.22)] dark:shadow-[0_0_60px_rgba(59,130,246,0.15)]" />
          </div>

          {/* 3D Tilt Card containing transparent cutout & Floating Glass Badges */}
          <div
            className="tilt-card relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-md lg:max-w-lg flex flex-col items-center"
            data-tilt
            data-tilt-max="6"
            data-tilt-scale="1.01"
          >
            {/* Floating Glass Icon 1: Python (Top-Left) */}
            <motion.div
              animate={{ y: [0, -7, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -left-2 xs:-top-3 xs:-left-3 sm:-top-4 sm:-left-6 lg:-top-3 lg:-left-8 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/90 dark:border-slate-700/70 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14),0_4px_10px_-2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] dark:ring-white/[0.04] hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all cursor-default"
              title="Python & Backend Logic"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-blue-50/80 dark:bg-blue-950/50 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M11.914 2C6.985 2 7.283 4.14 7.283 4.14l.006 2.213h4.697v.664H5.347S2 6.64 2 11.587c0 4.947 2.922 4.757 2.922 4.757h1.745v-2.45s-.095-2.923 2.873-2.923h4.947s2.778.047 2.778-2.732V4.732S17.483 2 11.914 2zm-2.73 1.503a.973.973 0 11.002 1.947.973.973 0 01-.002-1.947z" fill="#387EB8" />
                  <path d="M12.086 22c4.929 0 4.631-2.14 4.631-2.14l-.006-2.213h-4.697v-.664h6.639S22 17.36 22 12.413c0-4.947-2.922-4.757-2.922-4.757h-1.745v2.45s.095 2.923-2.873 2.923h-4.947s-2.778-.047-2.778 2.732v3.506S6.517 22 12.086 22zm2.73-1.503a.973.973 0 11-.002-1.947.973.973 0 01.002 1.947z" fill="#FFE052" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Python</span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium hidden sm:inline">Backend & Scripts</span>
              </div>
            </motion.div>

            {/* Floating Glass Icon 2: Next.js (Top-Right) */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              className="absolute -top-1 -right-2 xs:-top-2 xs:-right-3 sm:-top-3 sm:-right-6 lg:-top-2 lg:-right-7 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/90 dark:border-slate-700/70 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14),0_4px_10px_-2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] dark:ring-white/[0.04] hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all cursor-default"
              title="Next.js 16 App Router"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-black dark:bg-white flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 180 180" fill="none">
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_next_story)" />
                  <rect fill="url(#paint1_linear_next_story)" height="72" width="12" x="115" y="54" />
                  <defs>
                    <linearGradient id="paint0_linear_next_story" gradientUnits="userSpaceOnUse" x1="109" x2="144.5" y1="116.5" y2="160.5">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_next_story" gradientUnits="userSpaceOnUse" x1="121" x2="120.799" y1="54" y2="106.875">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">Next.js 16</span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium hidden sm:inline">React Framework</span>
              </div>
            </motion.div>

            {/* Floating Glass Icon 3: React 19 (Mid-Left) */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4.3, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
              className="absolute top-[38%] -left-3 xs:top-[38%] xs:-left-4 sm:top-[36%] sm:-left-8 lg:top-[35%] lg:-left-10 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/90 dark:border-slate-700/70 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14),0_4px_10px_-2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] dark:ring-white/[0.04] hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-cyan-200 dark:hover:border-cyan-700 transition-all cursor-default"
              title="React 19 UI Library"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-cyan-50/80 dark:bg-cyan-950/50 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00d8ff] animate-spin" style={{ animationDuration: '14s' }} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                  <circle cx="0" r="2.05" fill="#00d8ff" />
                  <g stroke="#00d8ff" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">React 19</span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium hidden sm:inline">UI Library</span>
              </div>
            </motion.div>

            {/* Floating Glass Icon 4: TypeScript (Mid-Right) */}
            <motion.div
              animate={{ y: [0, 7, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 2.1 }}
              className="absolute top-[44%] -right-3 xs:top-[44%] xs:-right-4 sm:top-[42%] sm:-right-8 lg:top-[40%] lg:-right-9 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/90 dark:border-slate-700/70 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.14),0_4px_10px_-2px_rgba(15,23,42,0.06)] ring-1 ring-black/[0.04] dark:ring-white/[0.04] hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-700 transition-all cursor-default"
              title="TypeScript Type Safety"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#3178C6] flex items-center justify-center text-white font-bold text-[9px] sm:text-[10px] shrink-0 shadow-2xs">
                TS
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white">TypeScript</span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium hidden sm:inline">Type Safety</span>
              </div>
            </motion.div>

            {/* Center Armchair Cutout Image with WebP & Lazy Loading */}
            <div className="relative w-full flex justify-center z-10">
              <picture className="w-full flex justify-center">
                <source srcSet="/images/nayem-cutout.webp" type="image/webp" />
                <img
                  src="/images/nayem-cutout.png"
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="620"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('profile.png') === -1) {
                      target.src = '/images/profile.png';
                    }
                  }}
                  alt={`${data.name} - Full-Stack Developer`}
                  className="w-full h-auto max-h-[340px] xs:max-h-[420px] sm:max-h-[560px] lg:max-h-[640px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] select-none transition-transform duration-500 hover:scale-[1.01]"
                />
              </picture>
            </div>

            {/* Floating Status Badge (Desktop) */}
            <div className="hidden sm:flex absolute -bottom-3 right-2 sm:right-4 px-4 py-2.5 bg-white/98 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/70 rounded-2xl items-center gap-2.5 shadow-lg shadow-black/5 dark:shadow-black/20 ring-1 ring-black/[0.04] dark:ring-white/[0.04] z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {isBn ? 'নতুন সুযোগ ও কাজের জন্য প্রস্তুত' : 'Open to Full-Stack Opportunities'}
              </span>
            </div>
          </div>

          {/* Mobile Status Badge (visible on small screens) */}
          <div className="flex sm:hidden mt-3 px-3.5 py-1.5 bg-white/98 dark:bg-slate-800/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/70 rounded-full items-center gap-2 shadow-xs ring-1 ring-black/[0.04] dark:ring-white/[0.04]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-800 dark:text-white">
              {isBn ? 'নতুন সুযোগ ও কাজের জন্য প্রস্তুত' : 'Open to Full-Stack Opportunities'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
