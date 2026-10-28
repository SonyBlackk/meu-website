import type { Metadata } from 'next';
import { HomePage } from '@/components/home/home-page';
import { alternates, baseOpenGraph } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: alternates('en', { pt: '/', en: '/en' }),
  openGraph: { type: 'website', url: '/en', ...baseOpenGraph('en') },
};

export default function Page() {
  return <HomePage locale="en" />;
}
