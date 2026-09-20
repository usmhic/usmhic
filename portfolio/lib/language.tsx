'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { siteContent, type Language, type SiteContent } from '@/content/site';

interface LanguageContextType {
  language: Language;
  content: SiteContent;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  content: siteContent.en,
  toggleLanguage: () => {},
});

const storageKey = 'osas-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';

    const stored = localStorage.getItem(storageKey);
    if (stored === 'en' || stored === 'fr') {
      return stored;
    }

    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(storageKey, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, content: siteContent[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
