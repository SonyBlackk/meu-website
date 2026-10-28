'use client';

import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Code, Copy, Globe, Hash, Menu, Moon, Search } from '@/components/icons';
import { alternatePath } from '@/lib/i18n';
import { toggleTheme } from '@/lib/theme';

type ItemKind = 'section' | 'route' | 'external' | 'copy' | 'theme' | 'language';

export type CommandItem = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  keywords?: string;
  kind: ItemKind;
  href?: string;
  /** Set when the label is in another language than the page. */
  lang?: string;
};

type Props = {
  items: CommandItem[];
  email: string;
  labels: {
    placeholder: string;
    empty: string;
    open: string;
    title: string;
    results: string;
    close: string;
    menu: string;
    copied: string;
    hint: string;
  };
};

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase();

const noopSubscribe = () => () => {};
const isApplePlatform = () => /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);

const icons: Record<ItemKind, (props: { className?: string }) => ReactNode> = {
  section: Hash,
  route: ArrowRight,
  external: ArrowUpRight,
  copy: Copy,
  theme: Moon,
  language: Globe,
};

export function CommandMenu({ items, email, labels }: Props) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pressedOnBackdrop = useRef(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState('');
  // Server renders "Ctrl K"; the client swaps to "⌘K" on Apple devices without a hydration error.
  const isMac = useSyncExternalStore(noopSubscribe, isApplePlatform, () => false);
  const listId = useId();

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return items;
    return items.filter((item) => normalize(`${item.label} ${item.hint ?? ''} ${item.keywords ?? ''}`).includes(q));
  }, [items, query]);

  // Consecutive results of the same group, each rendered as an ARIA group; indexes stay global for the keyboard.
  const groups = useMemo(() => {
    const out: { name: string; entries: { item: CommandItem; index: number }[] }[] = [];
    results.forEach((item, index) => {
      const last = out[out.length - 1];
      if (last && last.name === item.group) last.entries.push({ item, index });
      else out.push({ name: item.group, entries: [{ item, index }] });
    });
    return out;
  }, [results]);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setQuery('');
    setActive(0);
    setNotice('');
    dialog.showModal();
    // On touch screens, focusing the input would open the keyboard over half of the list.
    if (window.matchMedia('(pointer: fine)').matches) inputRef.current?.focus();
    else dialog.focus();
  }, []);

  const close = useCallback(() => dialogRef.current?.close(), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
        return;
      }
      const target = event.target as HTMLElement | null;
      const typing = target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if (event.key === '/' && !typing && !dialogRef.current?.open) {
        event.preventDefault();
        open();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, close]);

  useEffect(() => {
    const option = listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`);
    option?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  async function run(item: CommandItem) {
    switch (item.kind) {
      case 'section': {
        close();
        const [path, hash] = (item.href ?? '').split('#');
        const samePage = !path || path === window.location.pathname;
        if (samePage && hash) {
          // A fragment navigation scrolls with the CSS scroll-behavior (so it respects reduced motion)
          // and moves the keyboard starting point to the section.
          if (window.location.hash === `#${hash}`) document.getElementById(hash)?.scrollIntoView({ block: 'start' });
          else window.location.hash = hash;
        } else if (item.href) {
          router.push(item.href);
        }
        return;
      }
      case 'route':
        close();
        if (item.href) router.push(item.href);
        return;
      case 'external':
        close();
        if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
        return;
      case 'language':
        // Each language has its own root layout, so this is a full navigation either way.
        window.location.assign(alternatePath(window.location.pathname));
        return;
      case 'theme':
        toggleTheme();
        close();
        return;
      case 'copy':
        try {
          await navigator.clipboard.writeText(email);
          setNotice(labels.copied);
          window.setTimeout(close, 700);
        } catch {
          window.location.href = `mailto:${email}`;
        }
    }
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((index) => (results.length ? (index + 1) % results.length : 0));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index) => (results.length ? (index - 1 + results.length) % results.length : 0));
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const item = results[active];
      if (item) void run(item);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="hidden h-9 items-center gap-2 rounded-full border border-line px-3 text-[13px] text-muted transition-colors hover:border-line-strong hover:text-fg lg:inline-flex"
      >
        <Search className="size-3.5" />
        <span className="sr-only">{labels.open}</span>
        <kbd className="font-mono text-[11px] tracking-wide">{isMac ? '⌘K' : 'Ctrl K'}</kbd>
      </button>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg lg:hidden"
      >
        <Menu className="size-5" />
        <span className="sr-only">{labels.menu}</span>
      </button>

      <dialog
        ref={dialogRef}
        className="command-menu outline-none"
        aria-label={labels.title}
        tabIndex={-1}
        onPointerDown={(event) => {
          pressedOnBackdrop.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          // Only a press that also started on the backdrop closes it, not a text selection that ends there.
          if (pressedOnBackdrop.current && event.target === event.currentTarget) close();
        }}
      >
        <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-soft">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <Search className="size-4 flex-none text-muted" />
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setActive(0);
              }}
              onKeyDown={onInputKeyDown}
              placeholder={labels.placeholder}
              aria-label={labels.placeholder}
              role="combobox"
              aria-expanded="true"
              aria-controls={listId}
              aria-activedescendant={results[active] ? `${listId}-${results[active].id}` : undefined}
              autoComplete="off"
              spellCheck={false}
              className="h-13 w-full min-w-0 bg-transparent text-[15px] text-fg outline-none placeholder:text-muted"
            />
            <kbd className="hidden flex-none rounded border border-line px-1.5 font-mono text-[10px] text-muted sm:block [@media(pointer:coarse)]:hidden">
              Esc
            </kbd>
            <button
              type="button"
              onClick={close}
              className="-mr-2 hidden flex-none rounded-full px-2 py-1.5 text-sm text-muted hover:text-fg [@media(pointer:coarse)]:block"
            >
              {labels.close}
            </button>
          </div>

          <ul
            ref={listRef}
            id={listId}
            role="listbox"
            aria-label={labels.results}
            tabIndex={-1}
            hidden={results.length === 0}
            className="max-h-[min(26rem,60vh)] overflow-y-auto p-2"
          >
            {groups.map((group) => {
              const groupId = `${listId}-group-${normalize(group.name).replace(/\W+/g, '-')}`;
              return (
                <li key={group.name} role="presentation">
                  <ul role="group" aria-labelledby={groupId}>
                    <li role="presentation" id={groupId} className="label px-3 pt-3 pb-1.5 text-[10px]">
                      {group.name}
                    </li>
                    {group.entries.map(({ item, index }) => {
                      const Icon = item.id === 'source' ? Code : icons[item.kind];
                      return (
                        <li key={item.id} role="presentation">
                          <div
                            id={`${listId}-${item.id}`}
                            role="option"
                            aria-selected={index === active}
                            data-index={index}
                            onMouseMove={() => setActive(index)}
                            onClick={() => void run(item)}
                            className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-fg-2 aria-selected:bg-surface-2 aria-selected:text-fg forced-colors:aria-selected:outline forced-colors:aria-selected:outline-1 forced-colors:aria-selected:-outline-offset-1"
                          >
                            <Icon className="size-4 flex-none text-muted" />
                            <span className="min-w-0 flex-1 truncate" lang={item.lang}>
                              {item.label}
                            </span>
                            {item.hint && (
                              <span className="hidden max-w-[45%] truncate font-mono text-[11px] text-muted sm:block">
                                {item.hint}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          {results.length === 0 && <p className="px-3 py-8 text-center text-sm text-muted">{labels.empty}</p>}

          <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[10px] text-muted">
            <span role="status">
              {notice || (results.length === 0 ? labels.empty : '')}
              {!notice && results.length > 0 && (
                <span className="[@media(pointer:coarse)]:hidden">{`↑ ↓ ${labels.hint} · Enter`}</span>
              )}
            </span>
            <span className="tracking-wide">jelonschek.com</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
