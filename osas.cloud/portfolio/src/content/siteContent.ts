export type Language = 'en' | 'fr';

export type Project = {
  name: string;
  url: string | null;
  description: string;
  tags: string[];
};

export type SiteContent = {
  nav: { work: string; contact: string; about: string; languageLabel: string };
  hero: {
    rotatingWords: string[];
    tagline: string;
    description: string;
    cta: string;
  };
  projects: {
    title: string;
    openSourceLabel: string;
    proprietaryLabel: string;
    openSource: Project[];
    proprietary: Project[];
  };
  request: { title: string; description: string; cta: string };
  about: {
    label: string;
    button: string;
    intro: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    fullStory: string;
  };
  footer: { tagline: string; copyright: string };
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    nav: { work: 'Work', contact: 'Contact', about: 'About', languageLabel: 'Français' },
    hero: {
      rotatingWords: ['products.', 'ideas.', 'platforms.', 'experiences.', 'solutions.'],
      tagline: 'Turning ideas into real',
      description: 'Curious by default, serious about the craft, and happiest when an idea becomes something people can actually use.',
      cta: 'See the work',
    },
    projects: {
      title: 'Work, in progress',
      openSourceLabel: 'Open source — build in public',
      proprietaryLabel: 'Private work — built with teams',
      openSource: [
        { name: 'APIKee', url: 'https://apikee.com', description: 'Open-source API key management ecosystem. Published on Docker Hub, designed to integrate with PyPI, npm, Maven, and NuGet.', tags: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'MinIO', 'Docker'] },
        { name: 'Skadoosh', url: 'https://skadoosh.osas.cloud', description: 'Creative social platform where users publish articles, projects, galleries, and portfolios — with native digital currency for creator support.', tags: ['Next.js', 'Expo', 'Prisma', 'PostgreSQL', 'tRPC'] },
        { name: 'Expenn', url: 'https://expenn.osas.cloud', description: 'Enterprise expense management for individuals, organizations, and business travelers. Travel plans, receipt scanning, and budget approvals.', tags: ['Next.js', '.NET', 'PostgreSQL', 'Expo'] },
        { name: 'FreeSolo', url: 'https://freesolo.osas.cloud', description: 'Travel community for solo travelers — share experiences, discover cities and local history, connect with fellow travelers, book local experiences.', tags: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'Expo'] },
      ],
      proprietary: [
        { name: 'Qudo', url: 'https://qudo.ink', description: 'AI-powered review management platform that helps small businesses auto-respond to customer reviews and monitor online reputation.', tags: ['AI', 'Next.js', 'PostgreSQL'] },
        { name: 'Kubeuron', url: null, description: 'Developer platform bridging technical project management and software engineering workflows — business and technology in one place.', tags: ['Platform', 'Kubernetes', 'Next.js'] },
        { name: 'Avycenna', url: null, description: 'Digital healthcare platform connecting patients with healthcare professionals, supporting telemedicine, wearables, and modern digital health.', tags: ['Healthcare', 'Telemedicine', 'React Native'] },
      ],
    },
    request: {
      title: 'Have an idea? Let’s build it.',
      description: 'Got a half-formed idea, a tricky problem, or a big “what if?” Send it over. We can turn it into a clear next step.',
      cta: 'Bring an idea',
    },
    about: {
      label: 'The person',
      button: 'More about me',
      intro: 'Builder, tinkerer, occasional overthinker — but always someone who ships.',
      paragraphs: [
        'Behind osas.cloud is a full-stack engineer who’s been building real things for real people — from global enterprise platforms to solo open-source projects. Passionate about clean code, bold ideas, and the satisfying click of a feature finally working at 2am.',
        'Interests stretch across DevSecOps, blockchain, cloud infra, healthcare tech, and satellite data — plus a healthy obsession with travel, photography, aviation, and exploring cities. The kind of person who has too many side projects and not enough regrets about it.',
      ],
      facts: [
        { label: 'Based', value: 'Planet Earth (mostly)' },
        { label: 'Speaks', value: 'Code, cloud, and occasionally human' },
        { label: 'Driven by', value: 'Curiosity + a good problem to solve' },
        { label: 'Happiest when', value: 'Shipping something real' },
      ],
      fullStory: 'The full story lives at',
    },
    footer: { tagline: 'Good ideas deserve a way out.', copyright: 'All rights reserved.' },
  },
  fr: {
    nav: { work: 'Projets', contact: 'Contact', about: 'À propos', languageLabel: 'English' },
    hero: {
      rotatingWords: ['produits.', 'idées.', 'plateformes.', 'expériences.', 'solutions.'],
      tagline: 'Des idées aux vrais',
      description: 'Curieux par nature, exigeant sur le fond, et toujours heureux lorsqu’une idée devient quelque chose d’utile.',
      cta: 'Voir les projets',
    },
    projects: {
      title: 'Projets en mouvement',
      openSourceLabel: 'Open source — construits au grand jour',
      proprietaryLabel: 'Projets privés — construits en équipe',
      openSource: [
        { name: 'APIKee', url: 'https://apikee.com', description: 'Écosystème open source de gestion des clés API. Publié sur Docker Hub et conçu pour PyPI, npm, Maven et NuGet.', tags: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'MinIO', 'Docker'] },
        { name: 'Skadoosh', url: 'https://skadoosh.osas.cloud', description: 'Plateforme sociale créative pour publier articles, projets, galeries et portfolios — avec une monnaie numérique pour soutenir les créateurs.', tags: ['Next.js', 'Expo', 'Prisma', 'PostgreSQL', 'tRPC'] },
        { name: 'Expenn', url: 'https://expenn.osas.cloud', description: 'Gestion des dépenses pour particuliers, organisations et voyageurs d’affaires. Plans de voyage, reçus et validations budgétaires.', tags: ['Next.js', '.NET', 'PostgreSQL', 'Expo'] },
        { name: 'FreeSolo', url: 'https://freesolo.osas.cloud', description: 'Communauté de voyage pour voyageurs solo : partager, découvrir des villes, rencontrer d’autres voyageurs et réserver des expériences locales.', tags: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'Expo'] },
      ],
      proprietary: [
        { name: 'Qudo', url: 'https://qudo.ink', description: 'Plateforme IA de gestion des avis qui aide les petites entreprises à répondre automatiquement et à suivre leur réputation.', tags: ['IA', 'Next.js', 'PostgreSQL'] },
        { name: 'Kubeuron', url: null, description: 'Plateforme développeur qui relie gestion de projets techniques et workflows d’ingénierie logicielle.', tags: ['Plateforme', 'Kubernetes', 'Next.js'] },
        { name: 'Avycenna', url: null, description: 'Plateforme de santé numérique reliant patients et professionnels, avec télémédecine, objets connectés et outils de santé modernes.', tags: ['Santé', 'Télémédecine', 'React Native'] },
      ],
    },
    request: {
      title: 'Une idée ? Construisons-la.',
      description: 'Une idée encore floue, un problème complexe ou un grand « et si ? » Envoyez-le. Nous en ferons une prochaine étape claire.',
      cta: 'Partager une idée',
    },
    about: {
      label: 'La personne',
      button: 'En savoir plus sur moi',
      intro: 'Bâtisseur, curieux, parfois un peu trop perfectionniste — mais toujours prêt à livrer.',
      paragraphs: [
        'Derrière osas.cloud, il y a un ingénieur full-stack qui construit des produits concrets pour de vraies personnes — des plateformes internationales aux projets open source personnels. Passionné par le code propre, les idées audacieuses et le moment où une fonctionnalité fonctionne enfin.',
        'Ses centres d’intérêt vont du DevSecOps à la blockchain, du cloud à la santé numérique et aux données satellitaires — avec une vraie passion pour les voyages, la photo, l’aviation et les nouvelles villes.',
      ],
      facts: [
        { label: 'Basé', value: 'Sur la planète Terre (principalement)' },
        { label: 'Parle', value: 'Code, cloud et parfois humain' },
        { label: 'Guidé par', value: 'La curiosité + les bons problèmes' },
        { label: 'Le plus heureux quand', value: 'Quelque chose est vraiment en ligne' },
      ],
      fullStory: 'L’histoire complète est sur',
    },
    footer: { tagline: 'Les bonnes idées méritent de prendre vie.', copyright: 'Tous droits réservés.' },
  },
};