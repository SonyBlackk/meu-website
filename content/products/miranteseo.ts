import type { Product } from '@/content/types';

export const miranteseo: Product = {
  slug: 'miranteseo',
  name: 'MiranteSEO',
  domain: 'miranteseo.com.br',
  url: 'https://miranteseo.com.br',
  since: '2026-08',
  category: {
    pt: 'Painel de SEO com MCP',
    en: 'SEO dashboard with MCP',
  },
  headline: {
    pt: 'Reúne Search Console, GA4 e Core Web Vitals e aponta o que fazer primeiro.',
    en: 'Brings Search Console, GA4 and Core Web Vitals together and shows what to act on first.',
  },
  summary: {
    pt: 'O MiranteSEO junta Search Console, Google Analytics 4 e Core Web Vitals num painel com histórico comparável e oportunidades priorizadas. Um crawler de 49 regras cobre o SEO técnico, e um conector MCP com 80+ ferramentas deixa Claude, ChatGPT e Cursor consultarem os mesmos dados.',
    en: 'MiranteSEO brings Search Console, Google Analytics 4 and Core Web Vitals into one dashboard with comparable history and ranked opportunities. A 49-rule crawler covers technical SEO, and an MCP connector with 80+ tools lets Claude, ChatGPT and Cursor query the same data.',
  },
  metaDescription: {
    pt: 'Estudo de caso do MiranteSEO: painel de SEO que reúne Search Console, GA4 e Core Web Vitals, com crawler técnico e conector MCP para IA.',
    en: 'MiranteSEO case study: an SEO dashboard that joins Search Console, GA4 and Core Web Vitals, with a technical crawler and an MCP connector for AI.',
  },
  metrics: [
    {
      value: { pt: '80+', en: '80+' },
      label: { pt: 'ferramentas no conector MCP', en: 'MCP connector tools' },
    },
    {
      value: { pt: '49', en: '49' },
      label: { pt: 'regras no crawler técnico', en: 'technical crawler rules' },
    },
    {
      value: { pt: '7', en: '7' },
      label: { pt: 'ferramentas grátis sem cadastro', en: 'free tools, no signup' },
    },
  ],
  stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'MCP', 'Docker', 'Tailwind CSS', 'Cloudflare'],
  hero: {
    src: '/work/miranteseo/hero.webp',
    srcDark: '/work/miranteseo/hero-dark.webp',
    alt: {
      pt: 'Página inicial do MiranteSEO com o título "Enxergue o que o Google vê" e um painel de 28 dias do SetupBarato: cliques, impressões e sessões.',
      en: 'MiranteSEO homepage with the headline "Enxergue o que o Google vê" and a 28-day SetupBarato dashboard: clicks, impressions and sessions.',
    },
  },
  caseStudy: {
    role: {
      pt: 'Criação e desenvolvimento: produto, backend, integrações com o Google, crawler, servidor MCP, front-end e infraestrutura',
      en: 'Creator and developer: product, backend, Google integrations, crawler, MCP server, front-end and infrastructure',
    },
    intro: {
      pt: 'Criei o MiranteSEO para reunir num painel o que fica espalhado entre Search Console, Google Analytics 4 e o relatório de Core Web Vitals. O painel guarda o histórico, compara períodos e transforma os números numa lista de ações priorizadas. Um conector MCP leva os mesmos dados para dentro do Claude, do ChatGPT e do Cursor.',
      en: 'I built MiranteSEO to put in one dashboard what is usually split across Search Console, Google Analytics 4 and the Core Web Vitals report. It keeps the history, compares periods and turns the numbers into a ranked list of actions. An MCP connector brings the same data into Claude, ChatGPT and Cursor.',
    },
    problem: {
      pt: [
        'Os dados de SEO de um site ficam em três lugares: o Search Console mostra a busca, o Google Analytics 4 mostra o comportamento e o CrUX mostra a velocidade medida em usuários reais. Cruzar tudo isso costuma virar uma planilha montada à mão, frágil a cada mudança.',
        'As suítes globais resolvem, mas custam caro demais para a maioria dos projetos brasileiros. Entre as duas pontas faltava um painel direto, em português, com histórico comparável e uma indicação clara de onde investigar primeiro.',
        'Também faltava um jeito seguro de levar esses dados para assistentes de IA, sem exportar planilha e sem entregar a senha do Google. O objetivo é agir antes que o tráfego caia, não descobrir a queda no relatório do mês.',
      ],
      en: [
        "A site's SEO data lives in three places: Search Console shows search, Google Analytics 4 shows behavior and CrUX shows speed as real users experience it. Combining them usually means a hand-built spreadsheet that breaks whenever something changes.",
        'Global SEO suites solve this, but they cost too much for most Brazilian projects. Between the two extremes there was room for a straightforward dashboard, in Portuguese, with comparable history and a clear pointer to where to look first.',
        'There was also no safe way to bring that data into AI assistants without exporting spreadsheets or handing over a Google password. The goal is to act before traffic drops, not to discover the drop in the monthly report.',
      ],
    },
    features: [
      {
        title: { pt: 'Três fontes, um painel', en: 'Three sources, one dashboard' },
        body: {
          pt: 'Search Console por consulta, página e período, GA4 com canais, engajamento e conversões, e Core Web Vitals do CrUX no celular e no desktop. Cada período é comparado com o anterior, com até 5 anos de histórico.',
          en: 'Search Console by query, page and period, GA4 with channels, engagement and conversions, and CrUX Core Web Vitals on mobile and desktop. Every period is compared with the previous one, with up to 5 years of history.',
        },
      },
      {
        title: { pt: 'Central de oportunidades', en: 'Opportunity center' },
        body: {
          pt: 'Quedas, CTR baixo com boa posição, perda de posição, decadência de conteúdo, canibalização e regressões de CWV aparecem ordenadas por criticidade. Cada item pode ser ignorado ou reaberto.',
          en: 'Drops, low CTR at a good position, lost rankings, content decay, cannibalization and CWV regressions, ranked by criticality. Each item can be dismissed or reopened.',
        },
      },
      {
        title: { pt: 'Crawler técnico de 49 regras', en: '49-rule technical crawler' },
        body: {
          pt: 'Rastreia até 25 mil páginas, compara rodadas e mede a prontidão para IA sem confundir robô de busca com robô de treino. Nove ferramentas ao vivo e um validador de dados estruturados cobrem as checagens pontuais.',
          en: 'Crawls up to 25k pages, compares runs and scores AI readiness without mixing up AI search bots and training bots. Nine live tools and a structured-data validator handle one-off checks.',
        },
      },
      {
        title: { pt: 'Conector MCP para IA', en: 'MCP connector for AI' },
        body: {
          pt: 'Mais de 80 ferramentas para Claude, ChatGPT e Cursor, via OAuth no Claude ou token revogável no pacote npm miranteseo. Há também um plugin para o Cursor, com uma regra de leitura dos dados e duas skills prontas.',
          en: 'More than 80 tools for Claude, ChatGPT and Cursor, through OAuth in Claude or a revocable token with the miranteseo npm package. A Cursor plugin adds a rule for reading the data and two ready-made skills.',
        },
      },
      {
        title: { pt: 'Alertas e relatórios compartilháveis', en: 'Alerts and shareable reports' },
        body: {
          pt: 'Avisos de anomalias, resumo semanal por e-mail e relatórios em links revogáveis que abrem sem login. Os dados também podem ser exportados em CSV.',
          en: 'Anomaly alerts, a weekly email summary and report links that open without login and can be revoked at any time. Data can also be exported to CSV.',
        },
      },
      {
        title: { pt: '7 ferramentas grátis', en: '7 free tools' },
        body: {
          pt: 'Análise de site, dados estruturados, robots.txt, análise de página, visibilidade em IA, backlinks e tráfego orgânico. Abertas para qualquer pessoa, sem cadastro e sem cartão.',
          en: 'Site analysis, structured data, robots.txt, page analysis, AI visibility, backlinks and organic traffic. Open to anyone, with no account and no card.',
        },
      },
    ],
    pipeline: [
      {
        title: { pt: 'Conexão', en: 'Connect' },
        body: {
          pt: 'O usuário autoriza uma conta Google com acesso só de leitura e escolhe as propriedades. O MiranteSEO agrupa Search Console, Analytics e domínio num único projeto.',
          en: 'The user grants read-only access to a Google account and picks the properties. MiranteSEO groups Search Console, Analytics and the domain into a single project.',
        },
      },
      {
        title: { pt: 'Sincronização', en: 'Sync' },
        body: {
          pt: 'As coletas rodam em segundo plano por organização, dentro das cotas das APIs do Google, e o painel mostra quando cada uma terminou. O Search Console chega com dois a três dias de atraso.',
          en: "Collection runs in the background per organization, within Google's API quotas, and the dashboard shows when each run finished. Search Console data arrives two to three days late.",
        },
      },
      {
        title: { pt: 'Histórico', en: 'History' },
        body: {
          pt: 'Os dados ficam guardados por até 5 anos, e cada período é comparado com o anterior. Os Core Web Vitals vêm do CrUX, com medições de usuários reais nos últimos 28 dias.',
          en: 'Data is kept for up to 5 years, and every period is compared with the previous one. Core Web Vitals come from CrUX, measured on real users over the last 28 days.',
        },
      },
      {
        title: { pt: 'Crawl', en: 'Crawl' },
        body: {
          pt: 'O rastreador lê até 25 mil páginas a partir da página inicial e dos sitemaps, aplica 49 regras e compara a rodada com a anterior.',
          en: 'The crawler reads up to 25k pages starting from the homepage and sitemaps, applies 49 rules and compares the run with the previous one.',
        },
      },
      {
        title: { pt: 'Oportunidades', en: 'Opportunities' },
        body: {
          pt: 'A cada poucas horas, uma varredura cruza Search Console, Analytics, Core Web Vitals e o último crawl e ordena os sinais por criticidade. O que foi corrigido sai da lista sozinho.',
          en: 'Every few hours, a sweep crosses Search Console, Analytics, Core Web Vitals and the latest crawl, then ranks the signals by criticality. Fixed issues drop off the list on their own.',
        },
      },
      {
        title: { pt: 'Painel e IA', en: 'Dashboard and AI' },
        body: {
          pt: 'O resultado aparece no painel, nos alertas e no resumo semanal. As mesmas leituras respondem pelo conector MCP, sem gastar cota do Google.',
          en: 'Results show up in the dashboard, in alerts and in the weekly email. The same reads answer through the MCP connector without spending Google quota.',
        },
      },
    ],
    decisions: [
      {
        title: { pt: 'Consulta cara espera o sim do usuário', en: "Expensive calls wait for the user's yes" },
        body: {
          pt: 'As ferramentas do conector ficam em três faixas: leitura do histórico já sincronizado, consultas técnicas ao vivo que não custam dinheiro e chamadas pagas ao fornecedor de SERP, palavras-chave e backlinks. As pagas informam o preço antes, e as mais caras mostram o orçamento e param até a pessoa concordar. A conversa ganha um passo a mais, mas um assistente de IA não dispara sozinho uma consulta cara.',
          en: 'Connector tools sit in three tiers: reads from already-synced history, live technical checks that cost no money, and paid calls to the SERP, keyword and backlink provider. Paid tools state their price up front, and the most expensive ones show a budget and stop until the person agrees. The conversation gains a step, but an AI assistant cannot run an expensive query on its own.',
        },
      },
      {
        title: { pt: 'Pergunta repetida não paga duas vezes', en: 'A repeated question is not paid for twice' },
        body: {
          pt: 'Quase tudo que é comprado do fornecedor fica em cache: SERP por 24 horas; palavras-chave, domínios e backlinks por 7 dias. O preço é que uma resposta pode ter até 7 dias de idade. Em troca, repetir a pergunta dentro desse prazo responde na hora e não cobra de novo.',
          en: 'Almost everything bought from the data provider is cached: SERP results for 24 hours; keywords, domains and backlinks for 7 days. The trade-off is that an answer can be up to 7 days old. In return, asking again within that window answers instantly and is not charged again.',
        },
      },
      {
        title: { pt: 'O assistente lê o histórico, não o Google', en: 'The assistant reads the history, not Google' },
        body: {
          pt: 'As ferramentas de leitura respondem com o que já foi sincronizado, então não gastam a cota diária da conta Google nem precisam da senha de ninguém. O custo é que o dado mais novo é o da última coleta. As poucas que chamam o Google ao vivo, como a inspeção de URL, vêm marcadas como tal.',
          en: "Read tools answer from data that is already synced, so they don't touch the Google account's daily quota and never need anyone's password. The cost is that the freshest data is whatever the last sync brought in. The few tools that do call Google live, such as URL inspection, are labeled that way.",
        },
      },
      {
        title: { pt: 'Credencial do banco não sai do servidor', en: 'Database credentials never leave the server' },
        body: {
          pt: 'O pacote npm miranteseo é só um cliente HTTP: repassa as chamadas para o mesmo endereço do servidor MCP, autenticado por um token mrt_ revogável. No Claude, a autorização é OAuth, e revogar corta o acesso na hora, sem esperar o token vencer. São dois caminhos de autenticação para manter, com as mesmas ferramentas nos dois.',
          en: 'The miranteseo npm package is just an HTTP client that forwards calls to the same MCP endpoint, authenticated with a revocable mrt_ token. In Claude, authorization goes through OAuth, and revoking cuts access immediately instead of waiting for the token to expire. That means two auth paths to maintain, with the same tools behind both.',
        },
      },
      {
        title: { pt: 'Limitar abuso não exige guardar o IP', en: "Rate limiting doesn't require storing IPs" },
        body: {
          pt: 'A análise de site grátis não pede cadastro e não guarda quem consultou o quê: o limite de uso só conta quantas análises saíram de cada conexão no dia, sem gravar o endereço IP. Cada bloco aparece assim que a parte dele chega e fica em cache por 7 dias (a parte técnica, por 1 dia), então o mesmo link pode ser compartilhado. A ferramenta abre mão de saber quem a usa para continuar aberta a qualquer pessoa.',
          en: "The free site analyzer needs no signup and doesn't record who checked what: the rate limit only counts how many analyses came from a connection that day, without storing the IP address. Each block renders as soon as its data arrives and is cached for 7 days (1 day for the technical part), so the same link can be shared. The tool gives up knowing who uses it so it can stay open to anyone.",
        },
      },
    ],
    numbers: [
      {
        value: { pt: '80+', en: '80+' },
        label: { pt: 'ferramentas no conector MCP', en: 'MCP connector tools' },
        note: {
          pt: 'Contagem das páginas públicas do site; cada ferramenta faz uma consulta só.',
          en: "Count from the site's public pages; each tool runs a single query.",
        },
      },
      {
        value: { pt: '49', en: '49' },
        label: { pt: 'regras no crawler técnico', en: 'technical crawler rules' },
        note: {
          pt: 'Títulos, canônicas, redirecionamentos, links quebrados, robots, HTTPS e prontidão para IA.',
          en: 'Titles, canonicals, redirects, broken links, robots, HTTPS and AI readiness.',
        },
      },
      {
        value: { pt: '25 mil', en: '25k' },
        label: { pt: 'páginas por rodada de crawl', en: 'pages per crawl run' },
        note: {
          pt: 'Limite do plano de lançamento.',
          en: 'Limit on the launch plan.',
        },
      },
      {
        value: { pt: '9', en: '9' },
        label: { pt: 'ferramentas técnicas ao vivo', en: 'live technical tools' },
        note: {
          pt: 'Mais um validador de dados estruturados e rich results.',
          en: 'Plus a structured-data and rich-results validator.',
        },
      },
      {
        value: { pt: '7', en: '7' },
        label: { pt: 'ferramentas públicas grátis', en: 'free public tools' },
        note: {
          pt: 'Sem cadastro, sem cartão e sem guardar quem consultou.',
          en: 'No signup, no card and no record of who checked what.',
        },
      },
      {
        value: { pt: '5 anos', en: '5 years' },
        label: { pt: 'de histórico guardado', en: 'of stored history' },
        note: {
          pt: 'Histórico e retenção máximos no plano de lançamento.',
          en: 'Maximum history and retention on the launch plan.',
        },
      },
      {
        value: { pt: '27', en: '27' },
        label: { pt: 'artigos na central de ajuda', en: 'help center articles' },
        note: {
          pt: 'Mais 3 guias práticos, em português e inglês.',
          en: 'Plus 3 practical guides, in Portuguese and English.',
        },
      },
    ],
    gallery: [
      {
        src: '/work/miranteseo/analise-de-site.webp',
        alt: {
          pt: 'Análise de site do MiranteSEO para setupbarato.com.br: saúde técnica 95 de 100, 11 páginas lidas e lista de problemas recorrentes.',
          en: 'MiranteSEO site analysis of setupbarato.com.br: technical health 95 out of 100, 11 pages read and a list of recurring issues.',
        },
        caption: {
          pt: 'A análise pública roda sem cadastro e devolve a nota técnica com os problemas que mais se repetem, cada um com a correção sugerida.',
          en: 'The public analyzer runs without signup and returns a technical score with the most frequent issues, each paired with a suggested fix.',
        },
      },
    ],
    asOf: {
      pt: 'Números públicos do site, lidos em 28 de outubro de 2026.',
      en: 'Public numbers from the live site, as of October 28, 2026.',
    },
  },
};
