import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CTABannerProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  className?: string;
}

export const CTABanner: React.FC<CTABannerProps> = ({
  eyebrow,
  title,
  description,
  buttonText,
  onClick,
  className = '',
}) => {
  return (
    <section className={`w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10">
        <div className="max-w-2xl">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block mb-2">
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2.5 sm:mb-3">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
            {description}
          </p>
        </div>
        <button
          onClick={onClick}
          className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-sm sm:text-base font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg press-3d hover:bg-slate-900 dark:hover:bg-slate-100 transition flex items-center justify-center gap-2.5 shrink-0 cursor-pointer min-h-[48px] w-full sm:w-auto"
        >
          <span>{buttonText}</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};
