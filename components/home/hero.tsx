import type { CSSProperties } from 'react';
import { ArrowDown } from '@/components/icons';
import { CopyEmail } from '@/components/copy-email';
import { LocalTime } from '@/components/local-time';
import { ProductMark } from '@/components/product-mark';
import { InlineList, RichText } from '@/components/ui';
import { products } from '@/content/products';
import { hero, sectionIds, site, statusBoard, ui } from '@/content/site';
import { htmlLang, type Locale } from '@/lib/i18n';

const delay = (seconds: number) => ({ '--delay': `${seconds}s` }) as CSSProperties;

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="container-page pt-14 pb-20 md:pt-24 md:pb-28">
      <p
        className="reveal flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted"
        style={delay(0.05)}
      >
        <span className="inline-flex items-center gap-2 text-fg-2">
          <span className="live-dot" aria-hidden="true" />
          {hero.status[locale]}
        </span>
        <span className="inline-flex items-center gap-3 whitespace-nowrap">
          <span aria-hidden="true" className="text-faint">
            /
          </span>
          {hero.location[locale]}
        </span>
        <span className="inline-flex items-center gap-3 whitespace-nowrap">
          <span aria-hidden="true" className="text-faint">
            /
          </span>
          <span>
            <LocalTime timeZone={site.timeZone} locale={htmlLang[locale]} className="tabular" /> GMT-3
          </span>
        </span>
      </p>

      <h1
        className="reveal mt-8 max-w-[17ch] text-[clamp(2.65rem,6.6vw,5.4rem)] leading-[0.98] font-semibold tracking-[-0.055em] text-balance"
        style={delay(0.12)}
      >
        <RichText segments={hero.title[locale]} />
      </h1>

      <p
        className="reveal mt-8 max-w-[60ch] text-lg leading-relaxed text-pretty text-muted md:text-xl md:leading-relaxed"
        style={delay(0.2)}
      >
        <RichText segments={hero.intro[locale]} linkClassName="link font-medium text-fg" newTabLabel={ui.newTab[locale]} />
      </p>

      <div
        className="reveal mt-10 flex flex-wrap items-center gap-3"
        style={delay(0.28)}
      >
        <a
          href={`#${sectionIds.products[locale]}`}
          className="inline-flex h-10 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
        >
          {hero.primaryCta[locale]}
          <ArrowDown className="size-4" />
        </a>
        <CopyEmail email={site.email} labels={{ copy: ui.copyEmail[locale], copied: ui.copied[locale] }} />
      </div>

      <StatusBoard locale={locale} />
    </section>
  );
}

function StatusBoard({ locale }: { locale: Locale }) {
  return (
    <div
      className="reveal mt-16 overflow-hidden rounded-2xl border border-line bg-surface md:mt-24"
      style={delay(0.4)}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
        <h2 className="label">{statusBoard.title[locale]}</h2>
        <p className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="live-dot" aria-hidden="true" />
          {statusBoard.count[locale]}
        </p>
      </div>
      <ul className="divide-y divide-line">
        {products.map((product) => (
          <li key={product.slug}>
            <a
              href={`#${product.slug}`}
              className="group grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1 px-4 py-4 transition-colors hover:bg-surface-2 focus-visible:-outline-offset-2 sm:px-5 md:grid-cols-[11rem_1fr_auto] lg:grid-cols-[13rem_12rem_1fr_auto]"
            >
              <span className="row-span-2 flex items-center gap-3 md:row-span-1">
                <ProductMark slug={product.slug} className="size-7 flex-none" />
                <span className="hidden font-medium md:inline">{product.name}</span>
              </span>
              <span className="font-medium md:hidden">{product.name}</span>
              <span className="hidden font-mono text-xs text-muted lg:inline">{product.domain}</span>
              <span className="font-mono text-xs leading-relaxed text-fg-2 tabular">
                <InlineList items={statusBoard.rows[product.slug][locale]} />
              </span>
              <span className="hidden items-center gap-2 font-mono text-[11px] text-muted transition-colors group-hover:text-fg md:flex">
                {statusBoard.live[locale]}
                <span className="size-1.5 rounded-full bg-live" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="border-t border-line px-4 py-2.5 font-mono text-[10px] text-muted sm:px-5">
        {statusBoard.footnote[locale]}
      </p>
    </div>
  );
}
