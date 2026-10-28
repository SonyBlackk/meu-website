import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from '@/components/icons';
import { ProductMark } from '@/components/product-mark';
import { BrowserFrame, Section } from '@/components/ui';
import { nextProduct } from '@/content/products';
import type { Product } from '@/content/types';
import { caseStudyUi, sectionIds, site, ui } from '@/content/site';
import { formatMonth } from '@/lib/format';
import { homePath, htmlLang, productPath, type Locale } from '@/lib/i18n';

function caseStudyJsonLd(product: Product, locale: Locale) {
  const author = { '@id': `${site.url}/#person` };
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: product.headline[locale],
    description: (product.metaDescription ?? product.summary)[locale],
    url: `${site.url}${productPath(locale, product.slug)}`,
    inLanguage: htmlLang[locale],
    image: `${site.url}${product.hero.src}`,
    author,
    about: { '@type': 'WebSite', name: product.name, url: product.url, creator: author },
  };
}

/** Section anchors in the page language. */
const anchors = {
  problem: { pt: 'problema', en: 'problem' },
  features: { pt: 'recursos', en: 'features' },
  pipeline: { pt: 'como-funciona', en: 'how-it-works' },
  decisions: { pt: 'decisoes', en: 'decisions' },
  numbers: { pt: 'numeros', en: 'numbers' },
  gallery: { pt: 'telas', en: 'screens' },
};

export function CaseStudyPage({ product, locale }: { product: Product; locale: Locale }) {
  const t = caseStudyUi;
  const cs = product.caseStudy;
  const next = nextProduct(product.slug);
  // Up to five steps fit on one row at lg; longer pipelines wrap into rows of three.
  const pipelineColumns = cs.pipeline.length <= 5 ? cs.pipeline.length : 3;
  const facts = [
    { term: t.role[locale], value: cs.role[locale] },
    { term: t.since[locale], value: formatMonth(product.since, locale) },
    { term: t.stack[locale], value: product.stack.join(', ') },
  ];

  return (
    <main id="conteudo" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(product, locale)).replace(/</g, '\\u003c') }}
      />

      <header className="container-page pt-10 pb-16 md:pt-14 md:pb-24">
        <Link
          href={`${homePath(locale)}#${sectionIds.products[locale]}`}
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          {t.back[locale]}
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <div className="reveal flex items-center gap-3">
              <ProductMark slug={product.slug} className="size-10" />
              <span className="font-mono text-xs text-muted">{product.category[locale]}</span>
            </div>
            <h1
              className="reveal mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.055em]"
              style={{ '--delay': '0.08s' } as CSSProperties}
            >
              {product.name}
            </h1>
            <p
              className="reveal mt-6 max-w-[30ch] text-[clamp(1.3rem,2.4vw,1.75rem)] leading-snug font-medium tracking-[-0.03em] text-balance text-fg-2"
              style={{ '--delay': '0.14s' } as CSSProperties}
            >
              {product.headline[locale]}
            </p>
            <p
              className="reveal mt-6 max-w-[62ch] text-lg leading-relaxed text-pretty text-muted"
              style={{ '--delay': '0.2s' } as CSSProperties}
            >
              {cs.intro[locale]}
            </p>
          </div>

          <div className="reveal flex flex-col justify-end lg:col-span-4" style={{ '--delay': '0.26s' } as CSSProperties}>
            <dl className="divide-y divide-line border-y border-line text-sm">
              {facts.map((fact) => (
                <div key={fact.term} className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                  <dt className="font-mono text-xs text-muted">{fact.term}</dt>
                  <dd className="leading-snug text-fg-2">{fact.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[7rem_1fr] gap-4 py-3.5">
                <dt className="font-mono text-xs text-muted">{t.site[locale]}</dt>
                <dd>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-fg"
                  >
                    <span className="link">{product.domain}</span>
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">{ui.newTab[locale]}</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="reveal mt-14 md:mt-20" style={{ '--delay': '0.32s' } as CSSProperties}>
          <BrowserFrame shot={product.hero} domain={product.domain} locale={locale} important sizes="(min-width: 1216px) 1152px, 100vw" />
        </div>

        <dl className="mt-10 grid grid-cols-2 border-t border-line md:mt-14 md:grid-cols-4">
          {cs.numbers.slice(0, 4).map((number) => (
            <div key={number.label.en} className="flex flex-col gap-1.5 border-b border-line py-6 pr-4 md:border-b-0">
              <dt className="text-sm leading-snug text-muted">{number.label[locale]}</dt>
              <dd className="order-first font-mono text-[clamp(1.6rem,3vw,2.25rem)] font-medium tracking-[-0.04em] tabular">
                {number.value[locale]}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <Section id={anchors.problem[locale]} index="01" label={product.name} title={t.problem[locale]}>
        <div className="max-w-[66ch] space-y-5 text-lg leading-relaxed text-pretty text-fg-2">
          {cs.problem[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id={anchors.features[locale]} index="02" label={product.name} title={t.features[locale]}>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {cs.features.map((feature) => (
            <li key={feature.title.en} className="bg-bg p-6 md:p-7">
              <h3 className="font-medium tracking-[-0.015em]">{feature.title[locale]}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">{feature.body[locale]}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id={anchors.pipeline[locale]} index="03" label={product.name} title={t.pipeline[locale]} wide>
        <ol
          className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:[grid-template-columns:repeat(var(--steps),minmax(0,1fr))]"
          style={{ '--steps': pipelineColumns } as CSSProperties}
        >
          {cs.pipeline.map((step, i) => (
            <li key={step.title.en} className="relative bg-surface p-6">
              <div className="flex items-center gap-3 font-mono text-[11px] text-muted" aria-hidden="true">
                <span className="text-accent tabular">{String(i + 1).padStart(2, '0')}</span>
                <span className="h-px flex-1 bg-line-strong" />
                {i < cs.pipeline.length - 1 && (
                  // The arrow only shows when the next step sits on the same row.
                  <ArrowRight
                    className={`hidden size-3.5 text-faint sm:block ${(i + 1) % 2 === 0 ? 'sm:max-lg:hidden' : ''} ${(i + 1) % pipelineColumns === 0 ? 'lg:hidden' : ''}`}
                  />
                )}
              </div>
              <h3 className="mt-5 font-medium tracking-[-0.015em]">{step.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">{step.body[locale]}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id={anchors.decisions[locale]} index="04" label={product.name} title={t.decisions[locale]}>
        <ol className="dim-siblings border-y border-line">
          {cs.decisions.map((decision, i) => (
            <li key={decision.title.en} className="dim-item grid gap-3 border-b border-line py-8 last:border-b-0 md:grid-cols-[3rem_1fr]">
              <span className="font-mono text-xs text-muted tabular md:pt-1.5" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-xl leading-snug font-medium tracking-[-0.025em] text-balance">{decision.title[locale]}</h3>
                <p className="mt-3 max-w-[66ch] leading-relaxed text-pretty text-muted">{decision.body[locale]}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id={anchors.numbers[locale]} index="05" label={product.name} title={t.numbers[locale]}>
        <dl className="grid gap-x-8 sm:grid-cols-2">
          {cs.numbers.map((number) => (
            <div key={number.label.en} className="flex flex-col border-t border-line py-5">
              <dt className="mt-1 text-fg-2">{number.label[locale]}</dt>
              <dd className="order-first font-mono text-2xl font-medium tracking-[-0.03em] tabular">{number.value[locale]}</dd>
              {number.note && <dd className="mt-1 text-sm leading-relaxed text-muted">{number.note[locale]}</dd>}
            </div>
          ))}
        </dl>
        <p className="mt-6 font-mono text-[11px] text-muted">{cs.asOf[locale]}</p>
      </Section>

      {cs.gallery.length > 0 && (
        <Section id={anchors.gallery[locale]} index="06" label={product.name} title={t.gallery[locale]} wide>
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {cs.gallery.map((shot, i) => (
              <figure key={shot.src} className={cs.gallery.length % 2 === 1 && i === 0 ? 'md:col-span-2' : ''}>
                <BrowserFrame
                  shot={shot}
                  domain={product.domain}
                  locale={locale}
                  sizes={cs.gallery.length % 2 === 1 && i === 0 ? '(min-width: 1216px) 1152px, 100vw' : '(min-width: 1216px) 560px, (min-width: 768px) calc(50vw - 48px), 100vw'}
                />
                {shot.caption && (
                  <figcaption className="mt-4 max-w-[60ch] text-sm leading-relaxed text-pretty text-muted">
                    {shot.caption[locale]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </Section>
      )}

      <section className="border-t border-line">
        <div className="container-page grid grid-cols-1 gap-6 py-16 md:grid-cols-2 md:py-20">
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-10 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-line-strong md:p-8"
          >
            <span className="font-mono text-xs text-muted">{t.visitCta[locale]}</span>
            <span className="flex items-end justify-between gap-4">
              <span className="min-w-0 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.04em] [overflow-wrap:anywhere]">
                {product.domain}
              </span>
              <ArrowUpRight className="size-6 flex-none text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg" />
            </span>
            <span className="sr-only">{ui.newTab[locale]}</span>
          </a>
          <Link
            href={productPath(locale, next.slug)}
            className="group flex flex-col justify-between gap-10 rounded-2xl border border-line p-7 transition-colors hover:border-line-strong hover:bg-surface md:p-8"
          >
            <span className="font-mono text-xs text-muted">{t.next[locale]}</span>
            <span className="flex items-end justify-between gap-4">
              <span className="flex min-w-0 items-center gap-3">
                <ProductMark slug={next.slug} className="size-9 flex-none" />
                <span className="min-w-0 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.04em] [overflow-wrap:anywhere]">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="size-6 flex-none text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
