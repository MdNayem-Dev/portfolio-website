import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { portfolioData as portfolioDataEn } from '../data/portfolio';
import { portfolioDataBn } from '../data/portfolioBn';
import { PortfolioData } from '../types/portfolio';
import { translations, TranslationKey } from '../data/translations';

export type Language = 'en' | 'bn';

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isBn: boolean;
  t: (key: TranslationKey, fallback?: string) => string;
  data: PortfolioData;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio_lang') as Language | null;
      if (stored === 'en' || stored === 'bn') return stored;
      // Default to English, but detect browser language if Bengali
      if (navigator.language && navigator.language.toLowerCase().startsWith('bn')) {
        return 'bn';
      }
    }
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'bn' : 'en'));
  }, []);

  const t = useCallback(
    (key: TranslationKey, fallback?: string): string => {
      const langDict = translations[language];
      if (langDict && langDict[key]) {
        return langDict[key];
      }
      const enDict = translations['en'];
      if (enDict && enDict[key]) {
        return enDict[key];
      }
      return fallback || key;
    },
    [language]
  );

  const data: PortfolioData = language === 'bn' ? portfolioDataBn : portfolioDataEn;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isBn: language === 'bn',
        t,
        data,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
