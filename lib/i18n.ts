export const locales = ['pt', 'en'] as const;

export type Locale = (typeof locales)[number];

export type Localized<T = string> = Record<Locale, T>;

export const htmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
};

export function homePath(locale: Locale) {
  return locale === 'pt' ? '/' : '/en';
}

export function productPath(locale: Locale, slug: string) {
  return locale === 'pt' ? `/projetos/${slug}` : `/en/projects/${slug}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'pt' ? 'en' : 'pt';
}

/** The same page in the other language: / ↔ /en, /projetos/x ↔ /en/projects/x. */
export function alternatePath(pathname: string): string {
  const pt = pathname.match(/^\/projetos\/([^/]+)\/?$/);
  if (pt) return productPath('en', pt[1]);
  const en = pathname.match(/^\/en\/projects\/([^/]+)\/?$/);
  if (en) return productPath('pt', en[1]);
  return pathname === '/en' || pathname.startsWith('/en/') ? '/' : '/en';
}
