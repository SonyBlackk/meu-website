import type { Metadata } from 'next';
import { HomePage } from '@/components/home/home-page';
import { alternates, baseOpenGraph } from '@/lib/metadata';

export const metadata: Metadata = {
  alternates: alternates('pt', { pt: '/', en: '/en' }),
  openGraph: { type: 'website', url: '/', ...baseOpenGraph('pt') },
};

export default function Page() {
  return <HomePage locale="pt" />;
}
