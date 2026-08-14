import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Mail, Moon, Sun, User } from 'lucide-react';
import { useTheme } from '@/lib/theme';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 h-20 sm:h-24 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group select-none"
          data-testid="nav-brand"
        >
          <Image
            src="/logo.png"
            alt=""
            width={700}
            height={700}
            priority
            className="size-9 rounded-sm object-cover transition duration-300 group-hover:opacity-80 dark:invert"
          />
          <span className="flex items-baseline gap-0.5">
            <span className="font-serif italic text-xl font-semibold text-foreground tracking-tight group-hover:opacity-70 transition-opacity duration-300">
              osas
            </span>
            <span className="font-mono text-xs text-muted-foreground tracking-widest group-hover:text-foreground transition-colors duration-300">
              .cloud
            </span>
          </span>
        </button>

        <nav className="flex items-center gap-1 sm:gap-3 md:gap-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex size-10 items-center justify-center hover:text-foreground transition-colors sm:w-auto sm:px-2"
            data-testid="nav-projects"
            aria-label="Work"
          >
            <BriefcaseBusiness className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">Work</span>
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex size-10 items-center justify-center hover:text-foreground transition-colors sm:w-auto sm:px-2"
            data-testid="nav-contact"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">Contact</span>
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex size-10 items-center justify-center hover:text-foreground transition-colors sm:w-auto sm:px-2"
            data-testid="nav-about"
            aria-label="About"
          >
            <User className="w-4 h-4 sm:hidden" />
            <span className="hidden sm:inline">About</span>
          </button>
          <button
            onClick={toggleTheme}
            className="inline-flex size-10 items-center justify-center border border-border hover:border-foreground hover:text-foreground transition-all duration-200 rounded-sm sm:ml-1"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            data-testid="theme-toggle"
            suppressHydrationWarning
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
