export const primarySiteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://oussama.hichou.me';
export const githubPagesUrl = process.env.NEXT_PUBLIC_GITHUB_PAGES_URL ?? 'https://usmhic.github.io';

export const siteOrigins = Array.from(new Set([primarySiteUrl, githubPagesUrl]));
