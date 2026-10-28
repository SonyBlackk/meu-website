import type { Localized } from '@/lib/i18n';

export type ProductSlug = 'setupbarato' | 'vitrinebeauty' | 'miranteseo';

export type Shot = {
  /** Path under /public, e.g. /work/setupbarato/hero.webp (2400x1500). */
  src: string;
  /** Optional dark-theme variant of the same screen. */
  srcDark?: string;
  alt: Localized;
  caption?: Localized;
};

export type Metric = {
  /** Already formatted for each locale: "94,8 mil" / "94.8k". */
  value: Localized;
  label: Localized;
};

export type TextBlock = {
  title: Localized;
  body: Localized;
};

export type CaseStudy = {
  /** What Luiz did on the product, e.g. "Criação, produto, backend, dados e infraestrutura". */
  role: Localized;
  /** Lead paragraph under the case-study title. */
  intro: Localized;
  /** 2–3 short paragraphs describing the problem the product solves. */
  problem: Localized<string[]>;
  /** 4–6 capabilities the product ships today. */
  features: TextBlock[];
  /** 4–6 ordered steps of how the system works, from input to what the user sees. */
  pipeline: TextBlock[];
  /** 3–5 engineering decisions; titles are written as claims, not as "Problem/Solution". */
  decisions: TextBlock[];
  /** 4–8 public numbers. */
  numbers: (Metric & { note?: Localized })[];
  gallery: Shot[];
  /** Where and when the numbers were read, e.g. "Números públicos do site, lidos em 28/10/2026." */
  asOf: Localized;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  domain: string;
  url: string;
  /** ISO year-month the product went live, e.g. "2026-06". */
  since: string;
  /** Short category label, e.g. "Comparador de preços de hardware". */
  category: Localized;
  /** One verb-led outcome sentence used as the headline on the home page and the case study. */
  headline: Localized;
  /** 2–3 sentences for the home page block. */
  summary: Localized;
  /** Search-result description for the case study (≤ 155 characters); falls back to the summary. */
  metaDescription?: Localized;
  /** Exactly 3 metrics shown on the home page. */
  metrics: Metric[];
  stack: string[];
  hero: Shot;
  caseStudy: CaseStudy;
};
