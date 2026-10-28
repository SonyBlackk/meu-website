'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type Props = {
  home: string;
  hash?: string;
  className?: string;
  'aria-label'?: string;
  children: ReactNode;
};

/**
 * On the home page a section link is a plain fragment link, so the browser scrolls and moves the
 * keyboard focus to the section; elsewhere it is a client navigation to the home page.
 */
export function NavLink({ home, hash, className, children, ...rest }: Props) {
  const onHome = usePathname() === home;

  if (onHome && hash) {
    return (
      <a href={`#${hash}`} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={hash ? `${home}#${hash}` : home} prefetch={onHome ? false : undefined} className={className} {...rest}>
      {children}
    </Link>
  );
}
