import { notFound } from 'next/navigation';
import { getProduct, products } from '@/content/products';
import { meta } from '@/content/site';
import type { Locale } from '@/lib/i18n';
import { ogImage, ogSize } from '@/lib/og';

const homeFooter = ['jelonschek.com', 'C#/.NET', 'SetupBarato · MiranteSEO · VitrineBeauty'];

const homeTitle = {
  pt: { title: 'Backend em C#/.NET e produtos que', emphasis: 'estão no ar.' },
  en: { title: 'C#/.NET backends and products that', emphasis: 'run in production.' },
};

export function homeOgImage(locale: Locale) {
  return ogImage({
    eyebrow: 'Luiz Eduardo Jelonschek',
    ...homeTitle[locale],
    footer: homeFooter,
  });
}

export const homeOgAlt = meta.title;

export function caseStudyOgParams() {
  return products.map((product) => ({ slug: product.slug }));
}

/** One image per case study, with alt text that names the product it shows. */
export function caseStudyOgMetadata(locale: Locale, slug: string) {
  const product = getProduct(slug);
  if (!product) return [];
  return [{ id: 'card', alt: `${product.name} — ${product.headline[locale]}`, size: ogSize, contentType: 'image/png' }];
}

/** The footer row fits about 60 characters at this size, so metrics are added only while they fit. */
const FOOTER_BUDGET = 60;

export async function caseStudyOgImage(locale: Locale, params: Promise<{ slug: string }>) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const footer = [product.domain];
  for (const metric of product.metrics) {
    const item = `${metric.value[locale]} ${metric.label[locale]}`;
    if ([...footer, item].join('   ').length > FOOTER_BUDGET) break;
    footer.push(item);
  }

  return ogImage({
    eyebrow: `${product.name} · ${product.category[locale]}`,
    title: product.headline[locale],
    footer,
  });
}
