import '../globals.css';
import type { ReactNode } from 'react';
import { RootDocument } from '@/components/root-document';
import { rootMetadata } from '@/lib/metadata';

export const metadata = rootMetadata('en');

export default function Layout({ children }: { children: ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
