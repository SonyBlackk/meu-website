import { caseStudyOgImage, caseStudyOgMetadata, caseStudyOgParams } from '@/lib/og-routes';

export const generateStaticParams = caseStudyOgParams;

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  return caseStudyOgMetadata('pt', params.slug);
}

export default function Image({ params }: { params: Promise<{ slug: string }> }) {
  return caseStudyOgImage('pt', params);
}
