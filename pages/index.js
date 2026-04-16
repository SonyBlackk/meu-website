import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

const highlights = [
  { value: 'C# e .NET', label: 'Backend com foco em solidez e manutencao' },
  { value: 'UTFPR', label: 'Graduacao em Engenharia de Software' },
  { value: 'Integracoes', label: 'Marketplaces, fiscal e melhoria de PDV' },
];

const focusAreas = [
  {
    title: 'Arquitetura backend',
    description:
      'Construo APIs, regras de negocio e fluxos internos pensando em estabilidade, clareza e crescimento do produto.',
  },
  {
    title: 'Integracoes que fazem sentido',
    description:
      'Atuo conectando sistemas, marketplaces e processos fiscais para reduzir atrito operacional no dia a dia.',
  },
  {
    title: 'Evolucao continua',
    description:
      'Gosto de transformar estudo em pratica, saindo da teoria para entregas reais e melhorias perceptiveis.',
  },
];

const projects = [
  {
    title: 'Bugdroid',
    label: 'Experimento front-end',
    href: 'https://sonyblackk.github.io/Bugdroid/#',
    description:
      'Landing page interativa criada para explorar animacoes, composicao visual e detalhes de CSS com JavaScript puro.',
  },
  {
    title: 'Pokemon no terminal',
    label: 'Python',
    href: 'https://github.com/SonyBlackk/pokemon-game',
    description:
      'Jogo em turnos rodando no terminal com selecao de golpes, logica de combate e fluxo totalmente jogavel.',
  },
  {
    title: 'Caca-palavras em C',
    label: 'Projeto academico',
    href: 'https://github.com/SonyBlackk/caca-palavras-c',
    description:
      'Projeto final desenvolvido em C para terminal, consolidando estrutura de dados, logica e organizacao do codigo.',
  },
  {
    title: 'Mais projetos no GitHub',
    label: 'Portfolio',
    href: 'https://github.com/SonyBlackk',
    description:
      'Colecao de estudos, experimentos e projetos que mostram minha evolucao como desenvolvedor ao longo do tempo.',
  },
];

const stack = [
  'C#',
  '.NET',
  'Xamarim',
  'ASP.NET MVC',
  'SQL Server',
  'REST APIs',
  'Integracoes',
  'Automacao fiscal',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
];

const primaryContacts = [
  {
    label: 'GitHub',
    href: 'https://github.com/SonyBlackk',
    icon: '/github.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luiz-eduardo-jelonschek-919343265/',
    icon: '/linkedin.svg',
  },
  {
    label: 'Email',
    href: 'mailto:luizjelonschek07@gmail.com',
    icon: '/email.svg',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5546999174718',
    icon: '/whatsapp.svg',
  },
];

const secondaryContacts = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eduardo_jelonschek/',
    icon: '/instagram.svg',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/31mnlmrgqqsgvdwwnj7ofmxv4tpy',
    icon: '/spotify.svg',
  },
];

function ExternalLink({ href, children, className, ariaLabel, ...props }) {
  const isMail = href.startsWith('mailto:');

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      {...props}
      {...(!isMail ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Luiz Eduardo Jelonschek | Desenvolvedor Backend</title>
        <meta
          name="description"
          content="Portfolio pessoal de Luiz Eduardo Jelonschek, Analista de Sistemas com foco em C#, .NET, integracoes e backend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f6f1e8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <div className={styles.aurora} aria-hidden="true" />
        <div className={styles.gridGlow} aria-hidden="true" />

        <header className={styles.header}>
          <div className={styles.container}>
            <a href="#inicio" className={styles.brand}>
              Luiz Eduardo
              <span>Jelonschek</span>
            </a>

            <nav className={styles.nav} aria-label="Navegacao principal">
              <a href="#sobre">Sobre</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#projetos">Projetos</a>
              <a href="#contato">Contato</a>
            </nav>

            <a href="#contato" className={styles.headerCta}>
              Vamos conversar
            </a>
          </div>
        </header>

        <main id="inicio" className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.container}>
              <div className={`${styles.heroGrid} ${styles.reveal}`} style={{ '--delay': '0.05s' }}>
                <div className={styles.heroCopy}>
                  <span className={styles.eyebrow}>Analista de Sistemas | Backend first</span>
                  <h1>
                    Solucoes digitais mais claras, robustas e preparadas para o mundo real.
                  </h1>
                  <p className={styles.heroText}>
                    Sou Luiz Eduardo Jelonschek, estudante de Engenharia de Software na UTFPR e
                    profissional focado em C# e .NET. Trabalho criando integracoes, automacoes e
                    melhorias que deixam operacoes mais fluidas e produtos mais consistentes.
                  </p>

                  <div className={styles.heroActions}>
                    <a href="#projetos" className={styles.primaryButton}>
                      Ver projetos
                    </a>
                    <a href="#contato" className={styles.secondaryButton}>
                      Falar comigo
                    </a>
                  </div>

                  <div className={styles.highlightGrid}>
                    {highlights.map((item) => (
                      <article key={item.value} className={styles.highlightCard}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={styles.heroVisual}>
                  <div className={styles.imageShell}>
                    <span className={styles.imageBadgeTop}>Clean code + impacto real</span>
                    <Image
                      src="/img.png"
                      alt="Ilustracao com elementos de tecnologia"
                      width={560}
                      height={560}
                      priority
                      className={styles.heroImage}
                    />
                    <div className={styles.floatingCard}>
                      <span>Atualmente</span>
                      <strong>Nootech Sistemas</strong>
                      <p>Backend, integracoes e melhorias operacionais.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sobre" className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.sectionIntro} ${styles.reveal}`} style={{ '--delay': '0.1s' }}>
                <span className={styles.sectionLabel}>Sobre</span>
                <h2>Uma base tecnica em construcao, com foco em entregar valor de forma consistente.</h2>
              </div>

              <div className={styles.aboutGrid}>
                <article className={`${styles.aboutCard} ${styles.reveal}`} style={{ '--delay': '0.14s' }}>
                  <p>
                    Sou estudante de Engenharia de Software na UTFPR e desenvolvo minha carreira
                    unindo curiosidade tecnica com aplicacao pratica. Desde cedo a tecnologia virou
                    o meu espaco natural para criar, resolver problemas e entender como sistemas
                    podem facilitar a vida das pessoas.
                  </p>
                  <p>
                    Hoje atuo como Analista de Sistemas na Nootech Sistemas, com foco em backend
                    usando C# e .NET. Minha rotina envolve integracoes com marketplaces,
                    automacao fiscal e melhorias em fluxos importantes de operacao.
                  </p>
                </article>

                <div className={styles.focusGrid}>
                  {focusAreas.map((item, index) => (
                    <article
                      key={item.title}
                      className={`${styles.focusCard} ${styles.reveal}`}
                      style={{ '--delay': `${0.18 + index * 0.05}s` }}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="experiencia" className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.sectionIntro} ${styles.reveal}`} style={{ '--delay': '0.1s' }}>
                <span className={styles.sectionLabel}>Experiencia</span>
                <h2>Vivencia pratica em sistemas que precisam funcionar bem no dia a dia.</h2>
              </div>

              <article className={`${styles.timelineCard} ${styles.reveal}`} style={{ '--delay': '0.16s' }}>
                <div className={styles.timelinePeriod}>2025 - presente</div>
                <div className={styles.timelineContent}>
                  <h3>
                    <ExternalLink href="https://nootech.com.br" ariaLabel="Abrir site da Nootech Sistemas">
                      Analista de Sistemas | Nootech Sistemas
                    </ExternalLink>
                  </h3>
                  <p>
                    Atuo no desenvolvimento backend com foco em C# e .NET, trabalhando em
                    integracoes com marketplaces, automacoes fiscais e ajustes importantes em PDVs.
                    O objetivo e sempre o mesmo: deixar o software mais confiavel, eficiente e
                    alinhado com a operacao real do cliente.
                  </p>

                  <div className={styles.tagList}>
                    <span>C#</span>
                    <span>.NET</span>
                    <span>SQL Server</span>
                    <span>REST APIs</span>
                    <span>Automacao fiscal</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="projetos" className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.sectionIntro} ${styles.reveal}`} style={{ '--delay': '0.1s' }}>
                <span className={styles.sectionLabel}>Projetos</span>
                <h2>Projetos que mostram estudo aplicado, experimentacao e evolucao tecnica.</h2>
              </div>

              <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                  <ExternalLink
                    key={project.title}
                    href={project.href}
                    ariaLabel={`Abrir projeto ${project.title}`}
                    className={`${styles.projectCard} ${styles.reveal}`}
                    style={{ '--delay': `${0.14 + index * 0.05}s` }}
                  >
                    <span className={styles.projectLabel}>{project.label}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className={styles.projectArrow}>Abrir projeto</span>
                  </ExternalLink>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.stackPanel} ${styles.reveal}`} style={{ '--delay': '0.12s' }}>
                <div>
                  <span className={styles.sectionLabel}>Stack</span>
                  <h2>Ferramentas e tecnologias que fazem parte da minha rotina.</h2>
                </div>

                <div className={styles.stackCloud}>
                  {stack.map((item) => (
                    <span key={item} className={styles.stackPill}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contato" className={styles.section}>
            <div className={styles.container}>
              <div className={styles.contactGrid}>
                <article className={`${styles.contactCard} ${styles.reveal}`} style={{ '--delay': '0.12s' }}>
                  <span className={styles.sectionLabel}>Contato</span>
                  <h2>Se voce quiser trocar ideia sobre tecnologia, projetos ou oportunidades, estou por aqui.</h2>
                  <p>
                    Gosto de conversar sobre backend, produto, boas praticas e caminhos de
                    crescimento na area. Pode me chamar no canal que for mais confortavel.
                  </p>

                  <div className={styles.contactList}>
                    {primaryContacts.map((contact) => (
                      <ExternalLink
                        key={contact.label}
                        href={contact.href}
                        ariaLabel={`Abrir ${contact.label}`}
                        className={styles.contactButton}
                      >
                        <Image src={contact.icon} alt="" width={20} height={20} aria-hidden="true" />
                        <span>{contact.label}</span>
                      </ExternalLink>
                    ))}
                  </div>
                </article>

                <aside className={`${styles.sideCard} ${styles.reveal}`} style={{ '--delay': '0.18s' }}>
                  <span className={styles.sideCardTitle}>Outros cantos da internet</span>
                  <p>
                    Tambem compartilho um pouco da minha rotina e referencias por aqui.
                  </p>

                  <div className={styles.secondaryList}>
                    {secondaryContacts.map((contact) => (
                      <ExternalLink
                        key={contact.label}
                        href={contact.href}
                        ariaLabel={`Abrir ${contact.label}`}
                        className={styles.secondaryLink}
                      >
                        <Image src={contact.icon} alt="" width={20} height={20} aria-hidden="true" />
                        <span>{contact.label}</span>
                      </ExternalLink>
                    ))}
                  </div>

                  <div className={styles.noteCard}>
                    <span>Disponibilidade</span>
                    <strong>Networking, colaboracoes e novas oportunidades.</strong>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>{year} Luiz Eduardo Jelonschek. Portfolio pessoal desenvolvido com Next.js.</p>
          </div>
          <div className={styles.container}>
            <p>v2.1</p>
          </div>
        </footer>
      </div>
    </>
  );
}
