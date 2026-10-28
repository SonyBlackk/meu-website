'use client';

import { useEffect } from 'react';
import { Moon, Sun } from '@/components/icons';
import { followSystemTheme, toggleTheme } from '@/lib/theme';

type Props = { labels: { toDark: string; toLight: string } };

export function ThemeToggle({ labels }: Props) {
  useEffect(() => followSystemTheme(), []);

  // The icon and label are switched by CSS from data-theme, so the server markup never mismatches.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
      <span className="sr-only dark:hidden">{labels.toDark}</span>
      <span className="sr-only hidden dark:inline">{labels.toLight}</span>
    </button>
  );
}
