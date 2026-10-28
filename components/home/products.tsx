import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { ProductMark } from '@/components/product-mark';
import { BrowserFrame, InlineList, Section } from '@/components/ui';
import { products } from '@/content/products';
import type { Product } from '@/content/types';
import { sectionIds, sections, ui } from '@/content/site';
import { productPath, type Locale } from '@/lib/i18n';
import { formatMonth } from '@/lib/format';

export function Products({ locale }: { locale: Locale }) {
  const t = sections.products;

  return (
    <Section id={sectionIds.products[locale]} index="01" label={t.label[locale]} title={t.title[locale]} intro={t.intro[locale]} wide>
      <div className="flex flex-col gap-20 md:gap-28">
        {products.map((product, i) => (
          <ProductFeature key={product.slug} product={product} locale={locale} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProductFeature({ product, locale, index }: { product: Product; locale: Locale; index: number }) {
  const casePath = productPath(locale, product.slug);

  return (
    <article id={product.slug} aria-labelledby={`${product.slug}-name`} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="flex flex-col lg:col-span-5">
        <div className="flex items-center gap-3.5">
          <ProductMark slug={product.slug} className="size-10" />
          <div>
            <h3 id={`${product.slug}-name`} className="text-xl font-semibold tracking-[-0.025em]">
              {product.name}
            </h3>
            <p className="font-mono text-xs text-muted">{product.category[locale]}</p>
          </div>
          <span className="ml-auto font-mono text-[11px] text-muted tabular" aria-hidden="true">0{index + 1}</span>
        </div>

        <p className="mt-7 text-[1.4rem] leading-snug font-medium tracking-[-0.025em] text-balance">
          {product.headline[locale]}
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{product.summary[locale]}</p>

        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
          {product.metrics.map((metric) => (
            <div key={metric.label.en} className="flex flex-col gap-1">
              <dt className="text-xs leading-snug text-muted">{metric.label[locale]}</dt>
              <dd className="order-first font-mono text-lg font-medium tracking-[-0.02em] text-fg tabular sm:text-xl">
                {metric.value[locale]}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted">
          <span className="inline-flex items-center gap-1.5 text-fg-2">
            <span className="size-1.5 rounded-full bg-live" aria-hidden="true" />
            {ui.liveSince[locale]} {formatMonth(product.since, locale)}
          </span>
          <span className="text-faint" aria-hidden="true"> / </span>
          <InlineList items={product.stack.slice(0, 5)} />
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm lg:mt-auto lg:pt-10">
          <Link
            href={casePath}
            className="group inline-flex items-center gap-2 font-medium text-fg"
          >
            <span className="link">
              {ui.readCase[locale]}
              <span className="sr-only">: {product.name}</span>
            </span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            {product.domain}
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">{ui.newTab[locale]}</span>
          </a>
        </div>
      </div>

      <Link href={casePath} tabIndex={-1} aria-hidden="true" className="group block lg:col-span-7">
        <BrowserFrame shot={product.hero} domain={product.domain} locale={locale} />
      </Link>
    </article>
  );
}
