"use client";

import React, { createContext, useContext, useEffect } from "react";
import { usePreference } from "@/lib/preference";
import { siteContent, type Language, type SiteContent } from "@/content/site";

interface LanguageContextType {
  language: Language;
  content: SiteContent;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  content: siteContent.en,
  toggleLanguage: () => {},
});

const storageKey = "osas-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, toggleLanguage] = usePreference<Language>(
    storageKey,
    "en",
    "fr",
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, content: siteContent[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
