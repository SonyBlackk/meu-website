import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fontVariables } from '@/app/fonts';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ui } from '@/content/site';
import { htmlLang, type Locale } from '@/lib/i18n';
import { themeColors, themeInitScript } from '@/lib/theme';

/** Shared <html> for both root layouts: app/(pt)/layout.tsx and app/(en)/layout.tsx. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={htmlLang[locale]} className={fontVariables} suppressHydrationWarning>
      {/* App Router root layout: a plain <head> is correct here; next/head is a Pages Router API. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* The init script below corrects this to the visitor's theme before the first paint. */}
        <meta name="theme-color" content={themeColors.light} suppressHydrationWarning />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-full bg-fg px-4 py-2 text-sm text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:shadow-soft"
        >
          {ui.skip[locale]}
        </a>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
