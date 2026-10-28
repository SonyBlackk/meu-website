import { htmlLang, type Locale } from '@/lib/i18n';

/** "2026-06" → "jun. 2026" / "Jun 2026". Uses UTC so the server time zone never shifts the month. */
export function formatMonth(isoMonth: string, locale: Locale) {
  const [year, month] = isoMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(htmlLang[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
