export type Language = 'en' | 'fr';

export type ProjectStatus = 'live' | 'testing' | 'building';

// Add mobile releases with:
// { label: 'App Store', url: 'https://apps.apple.com/...', kind: 'app-store' }
// { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=...', kind: 'play-store' }
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
  status: ProjectStatus;
  progress: number;
  links: ProjectLink[];
};

export type SiteContent = {
  nav: {
    work: string;
    contact: string;
    about: string;
    languageLabel: string;
    switchToLight: string;
    switchToDark: string;
    switchToLanguage: string;
  };
  hero: {
    headline: string;
    headlineAccent: string;
    tagline: string;
    rotatingWords: string[];
    description: string;
    cta: string;
  };
  projects: {
    title: string;
    openSourceLabel: string;
    proprietaryLabel: string;
    statusLabels: Record<ProjectStatus, string>;
    progressLabel: string;
    comingSoonLabel: string;
    openSource: Project[];
    proprietary: Project[];
  };
  request: {
    titleLines: [string, string];
    description: string;
    cta: string;
    mailSubject: string;
    mailBody: string;
  };
  about: {
    label: string;
    button: string;
    intro: string;
    paragraphs: [string, string];
    facts: { label: string; value: string }[];
    fullStory: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};

const tags = {
  apikee: ['Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'MinIO', 'Docker'],
  skadoosh: ['Next.js', 'Expo', 'Prisma', 'PostgreSQL', 'tRPC'],
  expenn: ['Next.js', '.NET', 'PostgreSQL', 'Expo'],
  freesolo: ['Next.js', 'Java Spring Boot', 'PostgreSQL', 'Expo'],
  localm: ['Go', 'OpenAI API', 'Local AI', 'Docker'],
  qudo: ['AI', 'Next.js', 'PostgreSQL'],
  kubeuron: ['Platform', 'Kubernetes', 'Next.js'],
  avycenna: ['Healthcare', 'Telemedicine', 'React Native'],
};

export const siteContent: Record<Language, SiteContent> = {
  en: {
    nav: {
      work: 'Work',
      contact: 'Contact',
      about: 'About',
      languageLabel: 'Français',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      switchToLanguage: 'Switch to French',
    },
    hero: {
      headline: 'Imagine it.',
      headlineAccent: "We'll build it.",
      tagline: 'Turning ideas into real',
      rotatingWords: ['products.', 'ideas.', 'platforms.', 'experiences.', 'solutions.'],
      description:
        'No ghost writers, no fluff — just someone who genuinely loves building things and ships them into the world. From solo projects to global platforms.',
      cta: 'See the work',
    },
    projects: {
      title: 'Selected Works',
      openSourceLabel: 'Open Source',
      proprietaryLabel: 'Proprietary',
      statusLabels: { live: 'Live', testing: 'Testing', building: 'Building' },
      progressLabel: 'Progress',
      comingSoonLabel: 'Coming soon',
      openSource: [
        {
          name: 'APIKee',
          description:
            'Open-source API key management ecosystem. Published on Docker Hub, designed to integrate with PyPI, npm, Maven, and NuGet.',
          tags: tags.apikee,
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
          tags: tags.skadoosh,
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
          tags: tags.expenn,
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
          tags: tags.freesolo,
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
          tags: tags.localm,
          status: 'live',
          progress: 100,
          links: [{ label: 'Source', url: 'https://github.com/usmhic/localm', kind: 'source' }],
        },
      ],
      proprietary: [
        {
          name: 'Qudo',
          description:
            'AI-powered review management platform that helps small businesses auto-respond to customer reviews and monitor online reputation.',
          tags: tags.qudo,
          status: 'live',
          progress: 100,
          links: [{ label: 'Website', url: 'https://qudo.ink', kind: 'website' }],
        },
        {
          name: 'Kubeuron',
          description:
            'Developer platform bridging technical project management and software engineering workflows with business and technology in one place.',
          tags: tags.kubeuron,
          status: 'building',
          progress: 36,
          links: [],
        },
        {
          name: 'Avycenna',
          description:
            'Digital healthcare platform connecting patients with healthcare professionals, supporting telemedicine, wearables, and modern digital health.',
          tags: tags.avycenna,
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
      ],
    },
    request: {
      titleLines: ['Have an idea?', "Let's build it."],
      description:
        "Currently accepting new projects. Let's discuss your technical requirements and turn your concept into a reality.",
      cta: 'Start the conversation',
      mailSubject: 'Project Request',
      mailBody:
        "Hi, I'd like to discuss a project idea with you.\n\nProject name: \nDescription: \nTimeline: \nBudget: ",
    },
    about: {
      label: 'The person',
      button: 'me.osas.cloud',
      intro: 'Builder, tinkerer, occasional overthinker — but always someone who ships.',
      paragraphs: [
        "Behind osas.cloud is a full-stack engineer who's been building real things for real people — from global enterprise platforms to solo open-source projects. Passionate about clean code, bold ideas, and the satisfying click of a feature finally working at 2am.",
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
    footer: {
      tagline: 'Shipped more than promised.',
      copyright: 'All rights reserved.',
    },
  },
  fr: {
    nav: {
      work: 'Projets',
      contact: 'Contact',
      about: 'À propos',
      languageLabel: 'English',
      switchToLight: 'Passer en mode clair',
      switchToDark: 'Passer en mode sombre',
      switchToLanguage: 'Passer en anglais',
    },
    hero: {
      headline: 'Imaginez-le.',
      headlineAccent: 'On le construit.',
      tagline: 'Des idées à de vrais',
      rotatingWords: ['produits.', 'idées.', 'plateformes.', 'expériences.', 'solutions.'],
      description:
        "Pas de discours tout fait, pas de blabla — juste quelqu'un qui aime vraiment construire des choses et les faire vivre dans le monde réel. Des projets personnels aux plateformes internationales.",
      cta: 'Voir les projets',
    },
    projects: {
      title: 'Projets sélectionnés',
      openSourceLabel: 'Open Source',
      proprietaryLabel: 'Propriétaire',
      statusLabels: { live: 'En ligne', testing: 'En test', building: 'En construction' },
      progressLabel: 'Progression',
      comingSoonLabel: 'Bientôt disponible',
      openSource: [
        {
          name: 'APIKee',
          description:
            "Écosystème open source de gestion des clés API. Publié sur Docker Hub, conçu pour s'intégrer à PyPI, npm, Maven et NuGet.",
          tags: tags.apikee,
          status: 'live',
          progress: 100,
          links: [
            { label: 'Site web', url: 'https://apikee.com', kind: 'website' },
            { label: 'Code source', url: 'https://github.com/oussama-hichou/apikee', kind: 'source' },
          ],
        },
        {
          name: 'Skadoosh',
          description:
            "Plateforme sociale créative où les utilisateurs publient articles, projets, galeries et portfolios, avec une monnaie numérique native pour soutenir les créateurs.",
          tags: tags.skadoosh,
          status: 'testing',
          progress: 78,
          links: [
            { label: 'Site web', url: 'https://skadoosh.osas.cloud', kind: 'website' },
            { label: 'Code source', url: 'https://github.com/usmhic/skadoosh', kind: 'source' },
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
            "Gestion des dépenses en entreprise pour particuliers, organisations et voyageurs d'affaires. Plans de voyage, numérisation des reçus et validations budgétaires.",
          tags: tags.expenn,
          status: 'building',
          progress: 55,
          links: [
            { label: 'Site web', url: 'https://expenn.osas.cloud', kind: 'website' },
            { label: 'Code source', url: 'https://github.com/usmhic/expenn', kind: 'source' },
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
            "Communauté de voyage pour les voyageurs solo : partager des expériences, découvrir des villes et leur histoire locale, rencontrer d'autres voyageurs et réserver des expériences locales.",
          tags: tags.freesolo,
          status: 'building',
          progress: 48,
          links: [
            { label: 'Site web', url: 'https://freesolo.osas.cloud', kind: 'website' },
            { label: 'Code source', url: 'https://github.com/usmhic/freesolo', kind: 'source' },
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
            "Passerelle sécurisée compatible OpenAI pour Ollama, LM Studio, llama.cpp, LocalAI et d'autres runtimes de LLM locaux.",
          tags: tags.localm,
          status: 'live',
          progress: 100,
          links: [{ label: 'Code source', url: 'https://github.com/usmhic/localm', kind: 'source' }],
        },
      ],
      proprietary: [
        {
          name: 'Qudo',
          description:
            "Plateforme de gestion des avis propulsée par l'IA qui aide les petites entreprises à répondre automatiquement aux avis clients et à surveiller leur réputation en ligne.",
          tags: tags.qudo,
          status: 'live',
          progress: 100,
          links: [{ label: 'Site web', url: 'https://qudo.ink', kind: 'website' }],
        },
        {
          name: 'Kubeuron',
          description:
            "Plateforme développeur qui relie la gestion de projets techniques et les workflows d'ingénierie logicielle, avec le business et la technologie réunis au même endroit.",
          tags: tags.kubeuron,
          status: 'building',
          progress: 36,
          links: [],
        },
        {
          name: 'Avycenna',
          description:
            'Plateforme de santé numérique reliant patients et professionnels de santé, avec télémédecine, objets connectés et outils de santé moderne.',
          tags: tags.avycenna,
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
      ],
    },
    request: {
      titleLines: ['Une idée ?', 'Construisons-la.'],
      description:
        'Nouveaux projets actuellement acceptés. Discutons de vos besoins techniques et transformons votre concept en réalité.',
      cta: 'Démarrer la conversation',
      mailSubject: 'Demande de projet',
      mailBody:
        "Bonjour, j'aimerais discuter d'une idée de projet avec vous.\n\nNom du projet : \nDescription : \nDélai : \nBudget : ",
    },
    about: {
      label: 'La personne',
      button: 'me.osas.cloud',
      intro: 'Bâtisseur, bricoleur, parfois un peu trop perfectionniste — mais toujours quelqu\'un qui livre.',
      paragraphs: [
        "Derrière osas.cloud se trouve un ingénieur full-stack qui construit des choses concrètes pour de vraies personnes — des plateformes d'entreprise mondiales aux projets open source en solo. Passionné par le code propre, les idées audacieuses et la satisfaction d'une fonctionnalité qui fonctionne enfin à 2h du matin.",
        "Ses centres d'intérêt vont du DevSecOps à la blockchain, en passant par l'infrastructure cloud, la santé numérique et les données satellites — sans oublier une vraie passion pour les voyages, la photographie, l'aviation et la découverte de nouvelles villes. Le genre de personne qui a trop de projets personnels et pas assez de regrets à ce sujet.",
      ],
      facts: [
        { label: 'Basé', value: 'Planète Terre (principalement)' },
        { label: 'Parle', value: 'Code, cloud et parfois humain' },
        { label: 'Motivé par', value: 'La curiosité + un bon problème à résoudre' },
        { label: 'Le plus heureux quand', value: 'Quelque chose de réel est mis en ligne' },
      ],
      fullStory: "L'histoire complète est sur",
    },
    footer: {
      tagline: "On livre plus qu'on ne promet.",
      copyright: 'Tous droits réservés.',
    },
  },
};
