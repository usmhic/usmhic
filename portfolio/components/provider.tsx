'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { ThemeProvider } from '@/lib/theme';
import { LanguageProvider } from '@/lib/language';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <RootProvider
          search={{ SearchDialog }}
          theme={{
            defaultTheme: 'dark',
            enableSystem: false,
            storageKey: 'osas-theme',
          }}
        >
          {children}
        </RootProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
