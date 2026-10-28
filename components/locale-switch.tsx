'use client';

import { usePathname } from 'next/navigation';
import { alternatePath } from '@/lib/i18n';

type Props = { label: string; short: string; hrefLang: string };

/** Plain anchor on purpose: each language has its own root layout, so this is a full navigation. */
export function LocaleSwitch({ label, short, hrefLang }: Props) {
  const pathname = usePathname();

  // The whole link is in the target language, and its accessible name starts with the visible "EN"/"PT".
  return (
    <a
      href={alternatePath(pathname)}
      hrefLang={hrefLang}
      lang={hrefLang}
      title={label}
      className="grid h-9 min-w-9 place-items-center rounded-full px-2 font-mono text-[12px] font-medium tracking-wide text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <span>
        {short}
        <span className="sr-only">, {label}</span>
      </span>
    </a>
  );
}
