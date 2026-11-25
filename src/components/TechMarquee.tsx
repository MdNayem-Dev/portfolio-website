import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface TechItem {
  name: string;
  category: string;
  iconClass: string;
  iconColor: string;
  iconBg: string;
}

const row1Techs: TechItem[] = [
  {
    name: "Python",
    category: "AI & BACKEND",
    iconClass: "fab fa-python",
    iconColor: "#3776AB",
    iconBg: "rgba(55, 118, 171, 0.12)",
  },
  {
    name: "Next.js 16",
    category: "FULL-STACK",
    iconClass: "fas fa-cube",
    iconColor: "#0F172A",
    iconBg: "rgba(15, 23, 42, 0.08)",
  },
  {
    name: "React 19",
    category: "UI LIBRARY",
    iconClass: "fab fa-react",
    iconColor: "#0284C7",
    iconBg: "rgba(2, 132, 199, 0.12)",
  },
  {
    name: "JavaScript",
    category: "ES6+ CORE",
    iconClass: "fab fa-js-square",
    iconColor: "#CA8A04",
    iconBg: "rgba(234, 179, 8, 0.15)",
  },
  {
    name: "TypeScript",
    category: "TYPE SAFETY",
    iconClass: "fas fa-code",
    iconColor: "#2563EB",
    iconBg: "rgba(37, 99, 235, 0.12)",
  },
  {
    name: "Tailwind CSS",
    category: "MODERN STYLING",
    iconClass: "fas fa-wind",
    iconColor: "#0EA5E9",
    iconBg: "rgba(14, 165, 233, 0.12)",
  },
  {
    name: "Prisma ORM",
    category: "DATA MODELING",
    iconClass: "fas fa-database",
    iconColor: "#7C3AED",
    iconBg: "rgba(124, 58, 237, 0.12)",
  },
  {
    name: "MariaDB",
    category: "RELATIONAL DB",
    iconClass: "fas fa-server",
    iconColor: "#0284C7",
    iconBg: "rgba(2, 132, 199, 0.12)",
  },
];

const row2Techs: TechItem[] = [
  {
    name: "Cloudflare Workers",
    category: "EDGE SSR",
    iconClass: "fas fa-cloud",
    iconColor: "#EA580C",
    iconBg: "rgba(234, 88, 12, 0.12)",
  },
  {
    name: "Cloudflare D1",
    category: "SERVERLESS SQL",
    iconClass: "fas fa-network-wired",
    iconColor: "#D97706",
    iconBg: "rgba(217, 119, 6, 0.12)",
  },
  {
    name: "Node.js",
    category: "BACKEND RUNTIME",
    iconClass: "fab fa-node-js",
    iconColor: "#16A34A",
    iconBg: "rgba(22, 163, 74, 0.12)",
  },
  {
    name: "Git & GitHub",
    category: "VERSION CONTROL",
    iconClass: "fab fa-github",
    iconColor: "#0F172A",
    iconBg: "rgba(15, 23, 42, 0.08)",
  },
  {
    name: "HTML5 & CSS3",
    category: "WEB STANDARDS",
    iconClass: "fab fa-html5",
    iconColor: "#EA580C",
    iconBg: "rgba(234, 88, 12, 0.12)",
  },
  {
    name: "RESTful APIs",
    category: "INTEGRATIONS",
    iconClass: "fas fa-exchange-alt",
    iconColor: "#2563EB",
    iconBg: "rgba(37, 99, 235, 0.12)",
  },
  {
    name: "Framer Motion",
    category: "UI ANIMATION",
    iconClass: "fas fa-wand-magic-sparkles",
    iconColor: "#DB2777",
    iconBg: "rgba(219, 39, 119, 0.12)",
  },
  {
    name: "Docker & Linux",
    category: "CONTAINERS & OS",
    iconClass: "fab fa-docker",
    iconColor: "#0284C7",
    iconBg: "rgba(2, 132, 199, 0.12)",
  },
];

export const TechMarquee: React.FC = () => {
  const { isBn } = useLanguage();

  return (
    <section className="w-full py-10 sm:py-14 bg-white dark:bg-slate-950 relative overflow-hidden select-none border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header text - compact and elegant */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center mb-6 sm:mb-9 relative z-10">
        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#0066ff] dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50 inline-block mb-2">
          {isBn ? 'টেক স্ট্যাক ও টুলস' : 'TECH STACK & TOOLING'}
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {isBn ? 'আমার কাজে ব্যবহৃত আধুনিক প্রযুক্তিসমূহ' : 'Modern Technologies Powering My Work'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mt-1.5 leading-relaxed">
          {isBn
            ? 'ফ্রন্টএন্ড রিঅ্যাক্টিভিটি থেকে সার্ভার অ্যাকশনস, রিলেশনাল ডাটাবেস ও এজ কম্পিউটিং।'
            : 'From frontend reactivity to server actions, relational databases, and edge compute.'}
        </p>
      </div>

      {/* Marquee Wrapper with side fade gradient mask */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* Row 1: Sliding Left to Right */}
        <div
          className="animate-marquee-right flex gap-3 sm:gap-4 pb-3 sm:pb-3.5"
          style={{ animationDuration: '38s' }}
        >
          {[...row1Techs, ...row1Techs].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-28 sm:w-36 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/70 hover:border-blue-400 dark:hover:border-blue-500 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 flex flex-col items-center justify-center p-2.5 sm:p-3 shrink-0 group cursor-pointer"
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                style={{ backgroundColor: item.iconBg }}
              >
                <i
                  className={`${item.iconClass} text-xs sm:text-sm`}
                  style={{ color: item.iconColor }}
                />
              </div>
              <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white tracking-tight text-center truncate max-w-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.name}
              </h3>
              <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5">
                {item.category}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right to Left */}
        <div
          className="animate-marquee-left flex gap-3 sm:gap-4 pt-1"
          style={{ animationDuration: '38s' }}
        >
          {[...row2Techs, ...row2Techs].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-28 sm:w-36 h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-700/70 hover:border-purple-400 dark:hover:border-purple-500 shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 flex flex-col items-center justify-center p-2.5 sm:p-3 shrink-0 group cursor-pointer"
            >
              <div
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                style={{ backgroundColor: item.iconBg }}
              >
                <i
                  className={`${item.iconClass} text-xs sm:text-sm`}
                  style={{ color: item.iconColor }}
                />
              </div>
              <h3 className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white tracking-tight text-center truncate max-w-full group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item.name}
              </h3>
              <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase mt-0.5">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
