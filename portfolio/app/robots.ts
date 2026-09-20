import type { MetadataRoute } from 'next';
import { siteOrigins } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: siteOrigins.map((siteUrl) => new URL('/sitemap.xml', siteUrl).toString()),
  };
}
