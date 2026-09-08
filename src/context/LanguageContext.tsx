'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LANGUAGES, LanguageOption, Translation, translations } from '@/data/translations';

interface LanguageContextType {
  currentLang: Language;
  currentLangObj: LanguageOption;
  t: Translation;
  changeLanguage: (lang: Language) => void;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLang, setCurrentLang] = useState<Language>('es');

  // Hydrate preferred language from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('user_preferred_lang') as Language;
      if (saved && ['es', 'en', 'fr', 'pt', 'nl', 'de'].includes(saved)) {
        setCurrentLang(saved);
      }
    } catch (e) {
      // Ignore localStorage errors in SSR or restricted environments
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    if (!['es', 'en', 'fr', 'pt', 'nl', 'de'].includes(lang)) return;
    setCurrentLang(lang);
    try {
      localStorage.setItem('user_preferred_lang', lang);
    } catch (e) {
      // Ignore localStorage errors
    }
  };

  const t = translations[currentLang] || translations['es'];
  const currentLangObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        currentLangObj,
        t,
        changeLanguage,
        languages: LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
