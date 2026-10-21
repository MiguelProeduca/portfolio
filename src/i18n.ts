// All interface copy, in both languages. Case studies live in src/content/work/<lang>/.
export const langs = ['en', 'es'] as const;
export type Lang = (typeof langs)[number];

/** Path prefix for a language: '' for English (default), '/es' for Spanish. */
export const prefix = (lang: Lang) => (lang === 'en' ? '' : `/${lang}`);

/** Same page in the other language. Works for / and /work/<slug>/. */
export const switchPath = (path: string, to: Lang) => {
  const bare = path.replace(/^\/es(?=\/|$)/, '') || '/';
  return to === 'en' ? bare : `/es${bare === '/' ? '/' : bare}`;
};

export const t = {
  en: {
    siteTitle: 'Miguel Ángel Mengs · Design Systems & AI products',
    description:
      'Senior Design Systems Designer in Madrid. I design the systems that AI products are built on.',
    skip: 'Skip to content',
    home: 'Home',
    nav: [
      { label: 'Work', hash: 'work' },
      { label: 'About', hash: 'about' },
      { label: 'Contact', hash: 'contact' },
    ],
    recentWork: 'Recent work',
    aboutTag: '(About me)',
    whereWorked: 'Where I have worked',
    langLabel: 'Language',
    themeLabel: 'Dark mode',
    allWork: 'All work',
    availability: 'Open to Design Systems roles · EU / Remote',

    h1a: "I'm Miguel, a product designer.",
    h1b: 'From idea to detail.',
    heroSub: 'I come from a creative background. I design interfaces and design systems, paying attention to how they work, how they look and what they convey.',

    selectedWork: 'My work',
    workYears: '2022 – 2026',

    howLabel: 'How I work',
    howTitle: 'AI to scale. Human judgment to decide.',
    howIntro:
      "A design system with thousands of variables can't be kept by hand. I use Claude connected to Figma (MCP) for the work that doesn't scale.",
    how: [
      {
        k: 'Audit',
        v: 'Duplicate tokens, unused collections, inconsistent styles. In one file: 97 pages, 4,600+ variables and 6,000+ text nodes remapped.',
      },
      { k: 'Maintain', v: 'Renaming layers and variables at scale, with one shared convention.' },
      { k: 'Document', v: 'Component descriptions, comments and annotations for engineering.' },
    ],
    notDelegatedK: 'Not delegated',
    notDelegatedV:
      'Decisions and design. AI can give me a starting point, but I design the screens and review everything it does.',

    aboutLabel: 'About me',
    about: [
      "I came to product from advertising. Almost four years in creative and strategy, with projects like an interactive site for the launch of a National Geographic documentary series. That's where I learned to build a conceptual world from scratch, and to think about how an idea is told so it persuades.",
      'I moved to product because I wanted my work to have a tangible impact: things people use every day and find useful. At UNIR I lead the multi-brand design system and design AI products for teachers and students.',
    ],
    aboutLast:
      'I still think like a creative: every product needs one idea that holds it together. Outside work, I make collages and train.',

    experienceLabel: 'Experience',
    experience: [
      { company: 'Proeduca · UNIR', role: 'Senior Design Systems Designer', dates: '2025 — Now' },
      { company: 'Proeduca · UNIR', role: 'Product Designer', dates: '2024 — 2025' },
      { company: 'BTOB Live Brands', role: 'UI Designer & Creative', dates: '2021 — 2023' },
      { company: 'Darwin & Verne', role: 'UX Designer & Creative', dates: '2020 — 2021' },
    ],
    education:
      'Design Systems (Uxer School, 2023) · UX/UI (Upgrade Hub, 2022–23) · Creativity (Zink School, 2020–21; Young Creative award, CDEC Festival 2021) · Advertising & PR (URJC, 2014–19)',

    contactTitle: 'Building a design system? Drop me an email.',
    portraitAlt: 'Portrait of Miguel',
    photoAlt: 'Collage by Miguel: a tiny figure standing on a sea of clouds',
    caseWord: 'Case',
    nextCase: 'Next case',
  },

  es: {
    siteTitle: 'Miguel Ángel Mengs · Sistemas de diseño y productos de IA',
    description:
      'Diseñador senior de sistemas de diseño en Madrid. Diseño los sistemas sobre los que se construyen productos de IA.',
    skip: 'Saltar al contenido',
    home: 'Inicio',
    nav: [
      { label: 'Trabajo', hash: 'work' },
      { label: 'Sobre mí', hash: 'about' },
      { label: 'Contacto', hash: 'contact' },
    ],
    recentWork: 'Trabajos recientes',
    aboutTag: '(Sobre mí)',
    whereWorked: 'Dónde he trabajado',
    langLabel: 'Idioma',
    themeLabel: 'Modo oscuro',
    allWork: 'Todos los proyectos',
    availability: 'Abierto a puestos de sistemas de diseño · Europa / remoto',

    h1a: 'Soy Miguel, diseñador de producto.',
    h1b: 'De la idea al detalle.',
    heroSub: 'Vengo de la creatividad. Diseño interfaces y sistemas de diseño con atención a cómo funcionan, cómo se ven y qué transmiten.',

    selectedWork: 'Mis trabajos',
    workYears: '2022 – 2026',

    howLabel: 'Cómo trabajo',
    howTitle: 'IA para escalar. Criterio humano para decidir.',
    howIntro:
      'Un sistema de diseño con miles de variables no se mantiene a mano. Uso Claude conectado a Figma (MCP) para el trabajo que escala mal.',
    how: [
      {
        k: 'Auditar',
        v: 'Tokens duplicados, colecciones sin uso, estilos inconsistentes. En un solo archivo: 97 páginas, más de 4.600 variables y más de 6.000 nodos de texto remapeados.',
      },
      { k: 'Mantener', v: 'Renombrar capas y variables a escala, con una convención común.' },
      { k: 'Documentar', v: 'Descripciones de componentes, comentarios y anotaciones para desarrollo.' },
    ],
    notDelegatedK: 'No delego',
    notDelegatedV:
      'Las decisiones y el diseño. La IA puede darme un punto de partida, pero las pantallas las diseño yo y reviso todo lo que hace.',

    aboutLabel: 'Sobre mí',
    about: [
      'Llegué al producto desde la publicidad. Pasé casi cuatro años en creatividad y estrategia, con proyectos como una web interactiva para el estreno de una serie documental de National Geographic. Allí aprendí a construir un universo conceptual desde cero y a pensar en cómo se cuenta una idea para que convenza.',
      'Me pasé al producto porque quería que mi trabajo tuviera un impacto tangible: cosas que la gente usa cada día y que le resultan útiles. En UNIR lidero el sistema de diseño multimarca y diseño productos de IA para profesores y alumnos.',
    ],
    aboutLast:
      'Sigo pensando como un creativo: cada producto necesita una idea que lo ordene. Fuera del trabajo hago collages y entreno.',

    experienceLabel: 'Experiencia',
    experience: [
      { company: 'Proeduca · UNIR', role: 'Diseñador senior de sistemas de diseño', dates: '2025 — hoy' },
      { company: 'Proeduca · UNIR', role: 'Product Designer', dates: '2024 — 2025' },
      { company: 'BTOB Live Brands', role: 'UI Designer y creativo', dates: '2021 — 2023' },
      { company: 'Darwin & Verne', role: 'UX Designer y creativo', dates: '2020 — 2021' },
    ],
    education:
      'Sistemas de diseño (Uxer School, 2023) · UX/UI (Upgrade Hub, 2022–23) · Creatividad (Zink School, 2020–21; premio Joven Creativo, CDEC Festival 2021) · Publicidad y RR. PP. (URJC, 2014–19)',

    contactTitle: '¿Construyendo un sistema de diseño? Escríbeme.',
    portraitAlt: 'Retrato de Miguel',
    photoAlt: 'Collage de Miguel: una figura diminuta de pie sobre un mar de nubes',
    caseWord: 'Caso',
    nextCase: 'Siguiente caso',
  },
} as const;
