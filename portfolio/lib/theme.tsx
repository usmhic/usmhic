"use client";

import React, { createContext, useContext, useEffect } from "react";
import { usePreference } from "@/lib/preference";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

const storageKey = "osas-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, toggleTheme] = usePreference<Theme>(
    storageKey,
    "dark",
    "light",
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    root.style.colorScheme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
