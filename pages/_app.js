import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { inject } from '@vercel/speed-insights';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

inject();

export default function App({ Component, pageProps }) {
  return (
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
  );
}
