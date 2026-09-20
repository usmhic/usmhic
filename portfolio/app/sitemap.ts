import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteOrigins } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return siteOrigins.flatMap((siteUrl) => [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: siteUrl === siteOrigins[0] ? 1 : 0.6,
    },
    {
      url: new URL('/llms-full.txt', siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    ...source.getPages().map((page) => ({
      url: new URL(page.url, siteUrl).toString(),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: page.url === '/docs' ? 0.8 : 0.7,
    })),
  ]);
}
