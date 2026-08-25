import React from 'react';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="w-full border-t border-border/50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <span className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={700}
              height={700}
              className="size-8 rounded-sm object-cover dark:invert"
            />
            <span className="flex items-baseline gap-0.5">
              <span className="font-serif italic text-lg font-semibold text-foreground">osas</span>
              <span className="font-mono text-xs text-muted-foreground tracking-widest">.cloud</span>
            </span>
          </span>
          <span className="text-muted-foreground text-sm font-light">
            {content.footer.tagline}
          </span>
        </div>

        <div className="flex items-center gap-6 text-muted-foreground">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors p-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <div className="text-muted-foreground text-sm font-light">
          &copy; {currentYear} osas.cloud. {content.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
