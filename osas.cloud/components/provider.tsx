'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { ThemeProvider } from '@/lib/theme';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
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
  );
}
