import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/main.js';
        script.defer = true;
        document.body.appendChild(script);
    }, []);

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
                    <p>&copy; 2025 Luiz Eduardo Jelonschek. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
