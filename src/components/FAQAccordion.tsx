import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { data } = useLanguage();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {data.faqs.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-xs transition-colors"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full min-h-[48px] px-4 sm:px-6 py-4 text-left flex justify-between items-center gap-3 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer touch-manipulation focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
