import type { Product, ProductSlug } from '@/content/types';
import { miranteseo } from './miranteseo';
import { setupbarato } from './setupbarato';
import { vitrinebeauty } from './vitrinebeauty';

/** In launch order. */
export const products: Product[] = [setupbarato, miranteseo, vitrinebeauty];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function nextProduct(slug: ProductSlug): Product {
  const index = products.findIndex((product) => product.slug === slug);
  return products[(index + 1) % products.length];
}
