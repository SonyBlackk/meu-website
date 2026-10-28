import type { Localized } from '@/lib/i18n';
import type { ProductSlug } from '@/content/types';

export const site = {
  url: 'https://www.jelonschek.com',
  name: 'Luiz Eduardo Jelonschek',
  shortName: 'Luiz Jelonschek',
  email: 'luizjelonschek07@gmail.com',
  repo: 'https://github.com/SonyBlackk/meu-website',
  version: 'v3.0',
  timeZone: 'America/Sao_Paulo',
  links: {
    github: 'https://github.com/SonyBlackk',
    linkedin: 'https://www.linkedin.com/in/luiz-eduardo-jelonschek-919343265/',
    whatsapp: 'https://wa.me/5546999174718',
    instagram: 'https://www.instagram.com/eduardo_jelonschek/',
  },
} as const;

/** Inline rich text: plain strings, emphasised words or links. */
export type Segment = string | { em: string } | { text: string; href: string };

export const meta = {
  title: {
    pt: 'Luiz Jelonschek — Backend C#/.NET e criador de produtos',
    en: 'Luiz Jelonschek — C#/.NET backend and product builder',
  },
  description: {
    pt: 'Analista de sistemas (C#/.NET) na Nootech e criador do SetupBarato, do MiranteSEO e do VitrineBeauty. Backend, dados e produtos, do banco de dados ao deploy.',
    en: 'Systems analyst (C#/.NET) at Nootech and builder of SetupBarato, MiranteSEO and VitrineBeauty. Backend, data and web products, from database to deploy.',
  },
} satisfies Record<string, Localized>;

export const sectionIds = {
  products: { pt: 'produtos', en: 'products' },
  experience: { pt: 'experiencia', en: 'experience' },
  projects: { pt: 'projetos', en: 'projects' },
  about: { pt: 'sobre', en: 'about' },
  contact: { pt: 'contato', en: 'contact' },
} satisfies Record<string, Localized>;

export const nav: { id: Localized; label: Localized }[] = [
  { id: sectionIds.products, label: { pt: 'Produtos', en: 'Products' } },
  { id: sectionIds.experience, label: { pt: 'Experiência', en: 'Experience' } },
  { id: sectionIds.projects, label: { pt: 'Projetos', en: 'Projects' } },
  { id: sectionIds.about, label: { pt: 'Sobre', en: 'About' } },
  { id: sectionIds.contact, label: { pt: 'Contato', en: 'Contact' } },
];

export const ui = {
  skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  home: { pt: 'Início', en: 'Home' },
  menu: { pt: 'Menu', en: 'Menu' },
  themeLight: { pt: 'Usar tema claro', en: 'Switch to light theme' },
  themeDark: { pt: 'Usar tema escuro', en: 'Switch to dark theme' },
  language: { pt: 'Read in English', en: 'Ler em português' },
  languageShort: { pt: 'EN', en: 'PT' },
  copyEmail: { pt: 'Copiar e-mail', en: 'Copy email' },
  copied: { pt: 'E-mail copiado', en: 'Email copied' },
  readCase: { pt: 'Ler o estudo de caso', en: 'Read the case study' },
  liveSince: { pt: 'No ar desde', en: 'Live since' },
  newTab: { pt: '(abre em nova aba)', en: '(opens in a new tab)' },
  localTime: { pt: 'Horário local', en: 'Local time' },
} satisfies Record<string, Localized>;

export const hero = {
  status: { pt: 'Aberto a oportunidades e colaborações', en: 'Open to opportunities and collaborations' },
  location: { pt: 'Dois Vizinhos, PR', en: 'Dois Vizinhos, Brazil' },
  title: {
    pt: ['Desenvolvo backend em C#/.NET e construo produtos que ', { em: 'estão no ar' }, '.'],
    en: ['I build C#/.NET backends and ship products that ', { em: 'run in production' }, '.'],
  } satisfies Localized<Segment[]>,
  intro: {
    pt: [
      'Sou Luiz Eduardo Jelonschek, analista de sistemas na ',
      { text: 'Nootech', href: 'https://nootech.com.br' },
      ', onde trabalho com integrações de marketplace, automação fiscal e PDV. Por conta própria, criei e mantenho o ',
      { text: 'SetupBarato', href: '#setupbarato' },
      ', o ',
      { text: 'MiranteSEO', href: '#miranteseo' },
      ' e o ',
      { text: 'VitrineBeauty', href: '#vitrinebeauty' },
      ', do banco de dados ao deploy.',
    ],
    en: [
      "I'm Luiz Eduardo Jelonschek, a systems analyst at ",
      { text: 'Nootech', href: 'https://nootech.com.br' },
      ', where I work on marketplace integrations, fiscal automation and point-of-sale software. On my own, I built and run ',
      { text: 'SetupBarato', href: '#setupbarato' },
      ', ',
      { text: 'MiranteSEO', href: '#miranteseo' },
      ' and ',
      { text: 'VitrineBeauty', href: '#vitrinebeauty' },
      ', from database to deploy.',
    ],
  } satisfies Localized<Segment[]>,
  primaryCta: { pt: 'Ver os produtos', en: 'See the products' },
};

export const statusBoard = {
  title: { pt: 'Sistemas em produção', en: 'Systems in production' },
  count: { pt: '3 de 3 no ar', en: '3 of 3 live' },
  live: { pt: 'no ar', en: 'live' },
  footnote: {
    pt: 'Números públicos de cada site, lidos em out. 2026',
    en: 'Public numbers from each site, as of Oct 2026',
  },
  rows: {
    setupbarato: {
      pt: ['~95 mil produtos', '35 lojas', '90 min entre rodadas'],
      en: ['~95k products', '35 stores', '90 min between rounds'],
    },
    vitrinebeauty: {
      pt: ['485 mil ofertas', '18 lojas', 'coleta a cada 3 h'],
      en: ['485k offers', '18 stores', 'crawled every 3 h'],
    },
    miranteseo: {
      pt: ['80+ ferramentas MCP', 'Search Console, GA4, CWV'],
      en: ['80+ MCP tools', 'Search Console, GA4, CWV'],
    },
  } satisfies Record<ProductSlug, Localized<string[]>>,
};

export const sections = {
  products: {
    label: { pt: 'Produtos', en: 'Products' },
    title: { pt: 'Três produtos, do zero até o ar.', en: 'Three products, from zero to live.' },
    intro: {
      pt: 'Criei e mantenho cada um sozinho: produto, coleta de dados, backend, front-end e infraestrutura. Todos estão no ar e recebem usuários reais.',
      en: 'I built and run each one on my own: product, data collection, backend, front-end and infrastructure. All of them are live and serve real users.',
    },
  },
  experience: {
    label: { pt: 'Experiência', en: 'Experience' },
    title: { pt: 'Onde trabalho e o que estudo.', en: 'Where I work and what I study.' },
  },
  projects: {
    label: { pt: 'Projetos', en: 'Projects' },
    title: { pt: 'Outros projetos, estudos e experimentos.', en: 'Other projects, studies and experiments.' },
    columns: {
      year: { pt: 'Ano', en: 'Year' },
      project: { pt: 'Projeto', en: 'Project' },
      stack: { pt: 'Stack', en: 'Stack' },
      status: { pt: 'Status', en: 'Status' },
    },
    more: { pt: 'Todos os repositórios no GitHub', en: 'All repositories on GitHub' },
  },
  about: {
    label: { pt: 'Sobre', en: 'About' },
    title: { pt: 'Backend como base, produto como objetivo.', en: 'Backend as the foundation, product as the goal.' },
    now: { pt: 'Agora', en: 'Now' },
    toolbox: { pt: 'Ferramentas', en: 'Toolbox' },
  },
  contact: {
    label: { pt: 'Contato', en: 'Contact' },
    title: { pt: 'Vamos conversar.', en: "Let's talk." },
    body: {
      pt: 'Estou aberto a oportunidades, colaborações e conversas sobre backend, produto e dados. O caminho mais rápido é o e-mail ou o LinkedIn.',
      en: "I'm open to opportunities, collaborations and conversations about backend, product and data. Email or LinkedIn is the fastest way to reach me.",
    },
  },
};

export type Experience = {
  period: Localized;
  role: Localized;
  org: string;
  href?: string;
  body: Localized;
  tags?: string[];
};

export const experience: Experience[] = [
  {
    period: { pt: '2025 — hoje', en: '2025 — present' },
    role: { pt: 'Analista de Sistemas', en: 'Systems Analyst' },
    org: 'Nootech Sistemas',
    href: 'https://nootech.com.br',
    body: {
      pt: 'Backend em C#/.NET numa plataforma white-label de ERP, PDV, delivery e pagamentos, com mais de 350 revendas e 7 mil empresas atendidas. Trabalho com integrações de marketplace, automação fiscal e melhorias no PDV.',
      en: 'C#/.NET backend for a white-label ERP, point-of-sale, delivery and payments platform with 350+ resellers and 7,000 businesses served. I work on marketplace integrations, fiscal automation and point-of-sale improvements.',
    },
    tags: ['C#', '.NET', 'SQL Server', 'REST APIs'],
  },
  {
    period: { pt: '2026 — hoje', en: '2026 — present' },
    role: { pt: 'Criador e desenvolvedor', en: 'Founder and developer' },
    org: 'SetupBarato · MiranteSEO · VitrineBeauty',
    body: {
      pt: 'Três produtos próprios, do banco de dados ao deploy: coleta de preços em dezenas de lojas, painéis de dados e um servidor MCP para assistentes de IA.',
      en: 'Three products of my own, from database to deploy: price collection across dozens of stores, data dashboards and an MCP server for AI assistants.',
    },
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    period: { pt: 'Em andamento', en: 'In progress' },
    role: { pt: 'Bacharelado em Engenharia de Software', en: 'B.Sc. in Software Engineering' },
    org: 'UTFPR',
    href: 'https://www.utfpr.edu.br',
    body: {
      pt: 'Universidade Tecnológica Federal do Paraná. Projetos acadêmicos como o Rota Viva, uma plataforma de turismo gamificado para Dois Vizinhos.',
      en: 'Federal University of Technology – Paraná. Academic projects such as Rota Viva, a gamified tourism platform for Dois Vizinhos.',
    },
  },
  {
    period: { pt: '2024', en: '2024' },
    role: { pt: 'Pentest do Zero ao Profissional', en: 'Pentest from Zero to Professional' },
    org: 'Solyd Offensive Security',
    body: {
      pt: 'Curso de segurança ofensiva, com Python aplicado a pentest.',
      en: 'Offensive security course, with Python applied to penetration testing.',
    },
  },
];

export type LabProject = {
  year: string;
  /** Proper names stay as a plain string; descriptive names are translated. */
  name: string | Localized;
  description: Localized;
  stack: string;
  status: Localized;
  href?: string;
  linkLabel?: string;
};

export const projectName = (project: LabProject, locale: keyof Localized) =>
  typeof project.name === 'string' ? project.name : project.name[locale];

export const labProjects: LabProject[] = [
  {
    year: '2026',
    name: 'MeuFPS',
    description: {
      pt: 'Medidor de FPS gratuito para Windows. Lê o FPS real via PresentMon/ETW, sem injeção no jogo, e guarda um relatório de cada partida.',
      en: 'Free FPS meter for Windows. Reads real frame rates through PresentMon/ETW, without injecting into the game, and keeps a report of every session.',
    },
    stack: 'Rust · Tauri · React',
    status: { pt: 'Em desenvolvimento', en: 'In development' },
  },
  {
    year: '2026',
    name: { pt: 'MiranteSEO para Cursor', en: 'MiranteSEO for Cursor' },
    description: {
      pt: 'Plugin que leva Search Console, GA4 e Core Web Vitals para dentro do editor, via servidor MCP com OAuth.',
      en: 'Plugin that brings Search Console, GA4 and Core Web Vitals into the editor through an MCP server with OAuth.',
    },
    stack: 'MCP',
    status: { pt: 'Open source', en: 'Open source' },
    href: 'https://github.com/SonyBlackk/miranteseo-cursor-plugin',
    linkLabel: 'GitHub',
  },
  {
    year: '2026',
    name: 'Rota Viva',
    description: {
      pt: 'Turismo gamificado em Dois Vizinhos: check-in com código diário em cada ponto turístico e troca de pontos com parceiros locais. Projeto da UTFPR.',
      en: 'Gamified tourism in Dois Vizinhos: check in with a daily code at each landmark and trade points with local partners. A UTFPR project.',
    },
    stack: 'JavaScript',
    status: { pt: 'Acadêmico', en: 'Academic' },
    href: 'https://web-utfpr.vercel.app',
    linkLabel: 'Demo',
  },
  {
    year: '2025',
    name: 'ERPNext Fiscal BR',
    description: {
      pt: 'Adaptação do ERPNext às exigências fiscais brasileiras, com emissão de NF-e e NFC-e a partir da fatura de venda.',
      en: 'Adapts ERPNext to Brazilian tax requirements, issuing NF-e and NFC-e electronic invoices from sales invoices.',
    },
    stack: 'Python · Frappe',
    status: { pt: 'Open source', en: 'Open source' },
    href: 'https://github.com/SonyBlackk/erpnext_fiscal_br',
    linkLabel: 'GitHub',
  },
  {
    year: '2024',
    name: 'portscan-c',
    description: {
      pt: 'Scanner de portas TCP escrito em C, direto com sockets.',
      en: 'TCP port scanner written in C directly on raw sockets.',
    },
    stack: 'C',
    status: { pt: 'Estudo', en: 'Study' },
    href: 'https://github.com/SonyBlackk/portscan-c',
    linkLabel: 'GitHub',
  },
  {
    year: '2024',
    name: { pt: 'Crawler de telefones', en: 'Phone number crawler' },
    description: {
      pt: 'Crawler em Python que encontra telefones em páginas, com multi-threading para ganhar desempenho.',
      en: 'Python crawler that finds phone numbers on web pages, using multi-threading for speed.',
    },
    stack: 'Python',
    status: { pt: 'Estudo', en: 'Study' },
    href: 'https://github.com/SonyBlackk/Crawler-telefones',
    linkLabel: 'GitHub',
  },
  {
    year: '2024',
    name: { pt: 'Pokémon no terminal', en: 'Terminal Pokémon game' },
    description: {
      pt: 'Jogo de turnos em Python: capturar pokémons, enfrentar inimigos, explorar o mapa e juntar dinheiro.',
      en: 'Turn-based Python game: catch pokémon, fight enemies, explore the map and earn money.',
    },
    stack: 'Python',
    status: { pt: 'Estudo', en: 'Study' },
    href: 'https://github.com/SonyBlackk/pokemon-game',
    linkLabel: 'GitHub',
  },
  {
    year: '2023',
    name: 'Bugdroid',
    description: {
      pt: 'Landing page responsiva feita só com HTML e CSS, sem JavaScript.',
      en: 'Responsive landing page built with HTML and CSS only, no JavaScript.',
    },
    stack: 'HTML · CSS',
    status: { pt: 'Estudo', en: 'Study' },
    href: 'https://sonyblackk.github.io/Bugdroid/',
    linkLabel: 'Site',
  },
];

export const about = {
  paragraphs: {
    pt: [
      'Desde cedo a tecnologia virou o meu espaço natural para criar e resolver problemas. Na Nootech, trabalho num software que milhares de empresas usam todos os dias no caixa, e o objetivo é sempre o mesmo: deixá-lo mais confiável, eficiente e alinhado com a operação real do cliente.',
      'Fora do trabalho, construo produtos próprios. Gosto da parte difícil que fica escondida: coletar dados de dezenas de lojas, reconhecer o mesmo produto entre elas, guardar o histórico e transformar tudo isso numa resposta simples para quem está do outro lado.',
      'Estudo Engenharia de Software na UTFPR e, nas horas livres, segurança ofensiva.',
    ],
    en: [
      'Early on, technology became the place where I like to build things and solve problems. At Nootech I work on software that thousands of businesses use at the checkout every day, and the goal is always the same: make it more reliable, efficient and closer to how customers actually operate.',
      'Outside work, I build my own products. I like the hard part that stays hidden: collecting data from dozens of stores, recognizing the same product across them, keeping the history and turning all of it into a simple answer for the person on the other side.',
      'I study Software Engineering at UTFPR and, in my spare time, offensive security.',
    ],
  } satisfies Localized<string[]>,
  now: {
    pt: [
      'Construindo o MeuFPS, um medidor de FPS para Windows em Rust e Tauri',
      'Evoluindo o SetupBarato, o MiranteSEO e o VitrineBeauty',
      'Cursando Engenharia de Software na UTFPR',
      'Estudando pentest e segurança ofensiva',
    ],
    en: [
      'Building MeuFPS, a Windows FPS meter in Rust and Tauri',
      'Improving SetupBarato, MiranteSEO and VitrineBeauty',
      'Studying Software Engineering at UTFPR',
      'Learning penetration testing and offensive security',
    ],
  } satisfies Localized<string[]>,
  toolbox: [
    { group: { pt: 'Backend', en: 'Backend' }, items: ['C#', '.NET', 'ASP.NET MVC', 'Node.js', 'Python', 'Rust', 'C'] },
    { group: { pt: 'Dados', en: 'Data' }, items: ['SQL Server', 'PostgreSQL', 'Prisma', 'SQLite'] },
    { group: { pt: 'Front-end', en: 'Front-end' }, items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'] },
    { group: { pt: 'Infra', en: 'Infra' }, items: ['Docker', 'Cloudflare', 'Vercel', 'Linux', 'Git'] },
    { group: { pt: 'Segurança', en: 'Security' }, items: ['Kali Linux', 'Nmap', 'Burp Suite', 'Wireshark'] },
  ] satisfies { group: Localized; items: string[] }[],
};

export const footer = {
  madeIn: { pt: 'Feito em Dois Vizinhos, PR.', en: 'Made in Dois Vizinhos, Brazil.' },
  colophon: {
    pt: 'Next.js, Tailwind CSS e Vercel. Tipografia em Geist e Instrument Serif.',
    en: 'Next.js, Tailwind CSS and Vercel. Set in Geist and Instrument Serif.',
  },
  source: { pt: 'Código-fonte', en: 'Source code' },
};

export const caseStudyUi = {
  back: { pt: 'Todos os produtos', en: 'All products' },
  role: { pt: 'Papel', en: 'Role' },
  since: { pt: 'No ar desde', en: 'Live since' },
  stack: { pt: 'Stack', en: 'Stack' },
  site: { pt: 'Site', en: 'Website' },
  problem: { pt: 'O problema', en: 'The problem' },
  features: { pt: 'O que o produto faz', en: 'What it does' },
  pipeline: { pt: 'Como funciona', en: 'How it works' },
  decisions: { pt: 'Decisões técnicas', en: 'Engineering decisions' },
  numbers: { pt: 'Em números', en: 'By the numbers' },
  gallery: { pt: 'Telas', en: 'Screens' },
  next: { pt: 'Próximo produto', en: 'Next product' },
  visitCta: { pt: 'Ver o produto ao vivo', en: 'See it live' },
} satisfies Record<string, Localized>;

export const commandMenu = {
  placeholder: { pt: 'Buscar seções, produtos e ações…', en: 'Search sections, products and actions…' },
  empty: { pt: 'Nada encontrado.', en: 'No results.' },
  groups: {
    navigate: { pt: 'Navegar', en: 'Navigate' },
    products: { pt: 'Produtos', en: 'Products' },
    actions: { pt: 'Ações', en: 'Actions' },
    links: { pt: 'Links', en: 'Links' },
  },
  openSite: { pt: 'Abrir site', en: 'Open website' },
  caseStudy: { pt: 'Estudo de caso', en: 'Case study' },
  toggleTheme: { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme' },
  switchLanguage: { pt: 'Switch to English', en: 'Mudar para português' },
  viewSource: { pt: 'Ver o código deste site', en: 'View this site’s source' },
  hint: { pt: 'para navegar', en: 'to navigate' },
  open: { pt: 'Abrir menu de comandos', en: 'Open command menu' },
  title: { pt: 'Menu de comandos', en: 'Command menu' },
  results: { pt: 'Resultados', en: 'Results' },
  close: { pt: 'Fechar', en: 'Close' },
} satisfies Record<string, Localized | Record<string, Localized>>;
