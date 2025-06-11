import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
      <>
        <Head>
          <title>Luiz Eduardo Jelonschek | Desenvolvedor Backend</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>

        <header className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>Luiz Eduardo Jelonschek</h1>
              <p>Desenvolvedor Backend com foco em C# e .NET</p>
            </div>
            <div className="hero-img">
              <Image
                  src="/img.png"
                  alt="Ilustração tecnologia"
                  width={400}
                  height={400}
              />
            </div>
          </div>
        </header>

        <section className="sobre">
          <div className="container">
            <h2>Sobre Mim</h2>
            <p>
              Sou estudante de Engenharia de Software na UTFPR, uma instituição altamente reconhecida
              e com avaliação máxima no MEC. Desde criança sou apaixonado por tecnologia, e hoje
              venho aprofundando meus conhecimentos na área da programação. Atualmente, atuo como
              Analista de Sistemas na Nootech Sistemas, onde me especializo em desenvolvimento backend
              utilizando C# e .NET.
            </p>
          </div>
        </section>

        <section id="projetos" className="projetos">
          <div className="container">
            <h2>Projetos</h2>
            <ul>
              <li>
                <strong><a href="https://sonyblackk.github.io/Bugdroid/#" target="_blank">Bugdroid:</a></strong> site interativo que desenvolvi como experimento de animação e estilização com CSS e JavaScript puro.
              </li>
              <li>
                <strong>Integração AiqFome:</strong> importação de pedidos e aplicação de descontos.
              </li>
              <li>
                <strong>Kit de Produtos com Rateio:</strong> criação de funcionalidade de valor fixo
                com distribuição proporcional.
              </li>
            </ul>
          </div>
        </section>

        <section id="stack" className="stack">
          <div className="container">
            <h2>Stack</h2>
            <p>C#, .NET, SQL Server, JavaScript, HTML, CSS, Git, REST APIs</p>
          </div>
        </section>

        <section id="contato" className="contato">
          <div className="container">
            <h2>Contato</h2>
            <div className="botoes-contato">
              <a
                  href="https://github.com/SonyBlackk"
                  target="_blank"
                  className="btn-contato github"
                  aria-label="GitHub"
                  rel="noreferrer">
                <Image src="/github.svg" alt="GitHub" width={32} height={32} /> GitHub
              </a>
              <a
                  href="https://www.linkedin.com/in/luiz-eduardo-jelonschek-919343265/"
                  target="_blank"
                  className="btn-contato linkedin"
                  aria-label="LinkedIn"
                  rel="noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} /> LinkedIn
              </a>
              <a
                  href="https://www.instagram.com/eduardo_jelonschek/"
                  target="_blank"
                  className="btn-contato instagram"
                  aria-label="Instagram"
                  rel="noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} /> Instagram
              </a>
              <a
                  href="mailto:luizjelonschek07@gmail.com"
                  className="btn-contato email"
                  aria-label="Email">
                <Image src="/email.svg" alt="Email" width={32} height={32} /> Email
              </a>
              <a
                  href="https://wa.me/5546999174718"
                  target="_blank"
                  className="btn-contato whatsapp"
                  aria-label="WhatsApp"
                  rel="noreferrer">
                <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} /> WhatsApp
              </a>
              <a
                  href="https://open.spotify.com/user/31mnlmrgqqsgvdwwnj7ofmxv4tpy"
                  target="_blank"
                  className="btn-contato spotify"
                  aria-label="Spotify"
                  rel="noreferrer">
                <Image src="/spotify.svg" alt="Spotify" width={32} height={32} /> Spotify
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; 2025 Luiz Eduardo Jelonshek. Todos os direitos reservados.</p>
          </div>
          <div className="versao-site">0.1.4</div>
        </footer>
      </>
  );
}
