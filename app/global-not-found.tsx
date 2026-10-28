import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { fontVariables } from '@/app/fonts';
import { Monogram } from '@/components/monogram';
import { themeColors, themeInitScript } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'Página não encontrada · Page not found',
};

/** Used for any URL no route matches; it sits outside both root layouts, so it speaks both languages. */
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={fontVariables} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content={themeColors.light} />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="grid min-h-dvh place-items-center px-6">
        <main className="w-full max-w-md">
          <Monogram className="size-9" />
          <p className="mt-10 font-mono text-xs text-muted">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Esta página não existe.</h1>
          <p className="mt-2 text-lg text-muted" lang="en">
            This page doesn’t exist.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <Link href="/" className="inline-flex h-10 items-center rounded-full bg-fg px-5 font-medium text-bg">
              Voltar ao início
            </Link>
            <Link href="/en" lang="en" className="inline-flex h-10 items-center rounded-full border border-line-strong px-5 font-medium">
              Go to the English site
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
