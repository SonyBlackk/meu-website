import { caseStudyOgImage, caseStudyOgMetadata, caseStudyOgParams } from '@/lib/og-routes';

export const generateStaticParams = caseStudyOgParams;

export function generateImageMetadata({ params }: { params: { slug: string } }) {
  return caseStudyOgMetadata('en', params.slug);
}

export default function Image({ params }: { params: Promise<{ slug: string }> }) {
  return caseStudyOgImage('en', params);
}
