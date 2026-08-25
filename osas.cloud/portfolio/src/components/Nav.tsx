import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { useLanguage } from '@/lib/language';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { content, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-24 flex items-center justify-between">
        {/* Stylish brand mark: serif italic + mono domain suffix */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-baseline gap-0.5 group select-none"
          data-testid="nav-brand"
        >
          <span className="font-serif italic text-xl font-semibold text-foreground tracking-tight group-hover:opacity-70 transition-opacity duration-300">
            osas
          </span>
          <span className="font-mono text-xs text-muted-foreground tracking-widest group-hover:text-foreground transition-colors duration-300">
            .cloud
          </span>
        </button>

        <nav className="flex items-center gap-6 md:gap-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-foreground transition-colors"
            data-testid="nav-projects"
          >
            {content.nav.work}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-foreground transition-colors"
            data-testid="nav-contact"
          >
            {content.nav.contact}
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-foreground transition-colors"
            data-testid="nav-about"
          >
            {content.nav.about}
          </button>
          <button
            onClick={toggleLanguage}
            className="ml-1 px-2.5 py-2 border border-border hover:border-foreground hover:text-foreground transition-all duration-200 rounded-sm text-xs font-mono tracking-widest"
            aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
            data-testid="language-toggle"
          >
            {content.nav.languageLabel}
          </button>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 border border-border hover:border-foreground hover:text-foreground transition-all duration-200 rounded-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            data-testid="theme-toggle"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
