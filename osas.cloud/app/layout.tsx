import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';
import { githubPagesUrl, primarySiteUrl } from '@/lib/site';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(primarySiteUrl),
  title: {
    default: 'osas.cloud - Software design, engineering, and product systems',
    template: '%s | osas.cloud',
  },
  description:
    'osas.cloud designs and builds sharp, reliable software for founders, teams, and operators who need polished products shipped with care.',
  keywords: [
    'osas.cloud',
    'software engineering',
    'product design',
    'web applications',
    'Next.js development',
    'technical consulting',
  ],
  applicationName: 'osas.cloud',
  authors: [{ name: 'usmhic', url: 'https://github.com/usmhic' }],
  creator: 'usmhic',
  publisher: 'usmhic',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: primarySiteUrl,
    languages: {
      'x-default': primarySiteUrl,
      en: primarySiteUrl,
    },
  },
  openGraph: {
    type: 'website',
    url: primarySiteUrl,
    siteName: 'osas.cloud',
    title: 'osas.cloud - Software design, engineering, and product systems',
    description:
      'Sharp, reliable software for founders, teams, and operators who need polished products shipped with care.',
    images: [
      {
        url: '/og/docs/image.png',
        width: 1200,
        height: 630,
        alt: 'osas.cloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'osas.cloud - Software design, engineering, and product systems',
    description:
      'Sharp, reliable software for founders, teams, and operators who need polished products shipped with care.',
    images: ['/og/docs/image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'github-pages-origin': githubPagesUrl,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.className} dark`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
