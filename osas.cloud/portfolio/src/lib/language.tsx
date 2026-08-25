import React, { createContext, useContext, useEffect, useState } from 'react';
import { siteContent, type Language, type SiteContent } from '@/content/siteContent';

type LanguageContextType = {
  language: Language;
  content: SiteContent;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('portfolio-language');
    return stored === 'fr' ? 'fr' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{
      language,
      content: siteContent[language],
      toggleLanguage: () => setLanguage(current => current === 'en' ? 'fr' : 'en'),
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}