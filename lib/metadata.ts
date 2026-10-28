import type { Metadata } from 'next';
import { meta, site } from '@/content/site';
import { htmlLang, ogLocale, otherLocale, type Locale } from '@/lib/i18n';

/** Canonical URL plus hreflang alternates for a page that exists in both languages. */
export function alternates(locale: Locale, paths: Record<Locale, string>): Metadata['alternates'] {
  return {
    canonical: paths[locale],
    languages: {
      [htmlLang.pt]: paths.pt,
      [htmlLang.en]: paths.en,
      'x-default': paths.pt,
    },
  };
}

/**
 * Next merges metadata shallowly, so a page that sets `openGraph` replaces the layout's object.
 * Pages spread this in to keep the site name and locales.
 */
export function baseOpenGraph(locale: Locale) {
  return {
    siteName: site.name,
    locale: ogLocale[locale],
    alternateLocale: ogLocale[otherLocale(locale)],
  };
}

export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: meta.title[locale],
      template: `%s · ${site.shortName}`,
    },
    description: meta.description[locale],
    applicationName: site.shortName,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    openGraph: { type: 'website', ...baseOpenGraph(locale) },
    twitter: { card: 'summary_large_image' },
    formatDetection: { telephone: false },
  };
}
