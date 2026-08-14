export type ProjectLink = {
  label: string;
  url: string;
  kind: 'website' | 'source' | 'app-store' | 'play-store';
  comingSoon?: boolean;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  status: 'live' | 'testing' | 'building';
  progress: number;
  links: ProjectLink[];
};

// Add mobile releases with:
// { label: 'App Store', url: 'https://apps.apple.com/...', kind: 'app-store' }
// { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=...', kind: 'play-store' }
export const openSourceProjects: Project[] = [
  {
    name: 'APIKee',
    description:
      'Open-source API key management ecosystem. Published on Docker Hub, designed to integrate with PyPI, npm, Maven, and NuGet.',
    tags: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'MinIO', 'Docker'],
    status: 'live',
    progress: 100,
    links: [
      { label: 'Website', url: 'https://apikee.com', kind: 'website' },
      { label: 'Source', url: 'https://github.com/oussama-hichou/apikee', kind: 'source' },
    ],
  },
  {
    name: 'Skadoosh',
    description:
      'Creative social platform where users publish articles, projects, galleries, and portfolios with native digital currency for creator support.',
    tags: ['Next.js', 'Expo', 'Prisma', 'PostgreSQL', 'tRPC'],
    status: 'testing',
    progress: 78,
    links: [
      { label: 'Website', url: 'https://skadoosh.osas.cloud', kind: 'website' },
      { label: 'Source', url: 'https://github.com/usmhic/skadoosh', kind: 'source' },
      { label: 'App Store', url: 'https://apps.apple.com/us/search?term=Skadoosh', kind: 'app-store' },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/search?q=Skadoosh&c=apps',
        kind: 'play-store',
        comingSoon: true,
      },
    ],
  },
  {
    name: 'Expenn',
    description:
      'Enterprise expense management for individuals, organizations, and business travelers. Travel plans, receipt scanning, and budget approvals.',
    tags: ['Next.js', '.NET', 'PostgreSQL', 'Expo'],
    status: 'building',
    progress: 55,
    links: [
      { label: 'Website', url: 'https://expenn.osas.cloud', kind: 'website' },
      { label: 'Source', url: 'https://github.com/usmhic/expenn', kind: 'source' },
      { label: 'App Store', url: 'https://apps.apple.com/us/search?term=Expenn', kind: 'app-store' },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/search?q=Expenn&c=apps',
        kind: 'play-store',
        comingSoon: true,
      },
    ],
  },
  {
    name: 'FreeSolo',
    description:
      'Travel community for solo travelers to share experiences, discover cities and local history, connect with fellow travelers, and book local experiences.',
    tags: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'Expo'],
    status: 'building',
    progress: 48,
    links: [
      { label: 'Website', url: 'https://freesolo.osas.cloud', kind: 'website' },
      { label: 'Source', url: 'https://github.com/usmhic/freesolo', kind: 'source' },
      { label: 'App Store', url: 'https://apps.apple.com/us/search?term=FreeSolo', kind: 'app-store' },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/search?q=FreeSolo&c=apps',
        kind: 'play-store',
        comingSoon: true,
      },
    ],
  },
  {
    name: 'localm',
    description:
      'Secure OpenAI-compatible gateway for Ollama, LM Studio, llama.cpp, LocalAI, and other local LLM runtimes.',
    tags: ['Go', 'OpenAI API', 'Local AI', 'Docker'],
    status: 'live',
    progress: 100,
    links: [{ label: 'Source', url: 'https://github.com/usmhic/localm', kind: 'source' }],
  },
];

export const proprietaryProjects: Project[] = [
  {
    name: 'Qudo',
    description:
      'AI-powered review management platform that helps small businesses auto-respond to customer reviews and monitor online reputation.',
    tags: ['AI', 'Next.js', 'PostgreSQL'],
    status: 'live',
    progress: 100,
    links: [{ label: 'Website', url: 'https://qudo.ink', kind: 'website' }],
  },
  {
    name: 'Kubeuron',
    description:
      'Developer platform bridging technical project management and software engineering workflows with business and technology in one place.',
    tags: ['Platform', 'Kubernetes', 'Next.js'],
    status: 'building',
    progress: 36,
    links: [],
  },
  {
    name: 'Avycenna',
    description:
      'Digital healthcare platform connecting patients with healthcare professionals, supporting telemedicine, wearables, and modern digital health.',
    tags: ['Healthcare', 'Telemedicine', 'React Native'],
    status: 'building',
    progress: 42,
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/search?term=Avycenna', kind: 'app-store' },
      {
        label: 'Play Store',
        url: 'https://play.google.com/store/search?q=Avycenna&c=apps',
        kind: 'play-store',
        comingSoon: true,
      },
    ],
  },
];
