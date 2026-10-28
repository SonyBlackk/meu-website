import type { MetadataRoute } from 'next';
import { products } from '@/content/products';
import { site } from '@/content/site';
import { htmlLang, productPath } from '@/lib/i18n';

const lastModified = new Date('2026-10-28');

function entry(pt: string, en: string, priority: number): MetadataRoute.Sitemap {
  const languages = {
    [htmlLang.pt]: `${site.url}${pt}`,
    [htmlLang.en]: `${site.url}${en}`,
    'x-default': `${site.url}${pt}`,
  };
  return [
    { url: `${site.url}${pt}`, lastModified, priority, alternates: { languages } },
    { url: `${site.url}${en}`, lastModified, priority, alternates: { languages } },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry('', '/en', 1),
    ...products.flatMap((product) => entry(productPath('pt', product.slug), productPath('en', product.slug), 0.8)),
  ];
}
