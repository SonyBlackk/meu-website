import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyPage } from '@/components/case-study/case-study-page';
import { getProduct, products } from '@/content/products';
import { productPath, type Locale } from '@/lib/i18n';
import { alternates, baseOpenGraph } from '@/lib/metadata';

/** Shared by app/(pt)/projetos/[slug] and app/(en)/en/projects/[slug]. */
export function caseStudyRoute(locale: Locale) {
  return {
    generateStaticParams() {
      return products.map((product) => ({ slug: product.slug }));
    },

    async generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
      const product = getProduct((await params).slug);
      if (!product) return {};
      return {
        title: `${product.name} — ${product.category[locale]}`,
        description: (product.metaDescription ?? product.summary)[locale],
        alternates: alternates(locale, {
          pt: productPath('pt', product.slug),
          en: productPath('en', product.slug),
        }),
        openGraph: { type: 'article', url: productPath(locale, product.slug), ...baseOpenGraph(locale) },
      };
    },

    async Page({ params }: { params: Promise<{ slug: string }> }) {
      const product = getProduct((await params).slug);
      if (!product) notFound();
      return <CaseStudyPage product={product} locale={locale} />;
    },
  };
}
