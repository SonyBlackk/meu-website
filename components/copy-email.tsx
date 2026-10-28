'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from '@/components/icons';

type Props = {
  email: string;
  labels: { copy: string; copied: string };
  variant?: 'button' | 'large';
};

export function CopyEmail({ email, labels, variant = 'button' }: Props) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const Icon = copied ? Check : Copy;

  if (variant === 'large') {
    return (
      <button
        type="button"
        onClick={copy}
        className="group inline-flex max-w-full items-center gap-3 text-left text-[clamp(1.25rem,4.2vw,2.25rem)] font-medium tracking-[-0.03em] text-fg"
      >
        <span className="link truncate">{email}</span>
        <span className="grid size-9 flex-none place-items-center rounded-full border border-line text-muted transition-colors group-hover:border-line-strong group-hover:text-fg">
          <Icon className={copied ? 'size-4 text-accent' : 'size-4'} />
        </span>
        <span className="sr-only" aria-live="polite">
          {copied ? labels.copied : labels.copy}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-surface-2"
    >
      <Icon className={copied ? 'size-4 text-accent' : 'size-4 text-muted'} />
      <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
    </button>
  );
}
