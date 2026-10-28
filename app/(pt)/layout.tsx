import '../globals.css';
import type { ReactNode } from 'react';
import { RootDocument } from '@/components/root-document';
import { rootMetadata } from '@/lib/metadata';

export const metadata = rootMetadata('pt');

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}
