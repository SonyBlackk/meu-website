import Image from 'next/image';
import { Fragment, type ReactNode } from 'react';
import type { Shot } from '@/content/types';
import type { Segment } from '@/content/site';
import type { Locale } from '@/lib/i18n';

export function Section({
  id,
  index,
  label,
  title,
  intro,
  wide = false,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  /** Wide sections let their content use the full grid instead of the right column. */
  wide?: boolean;
  children: ReactNode;
}) {
  // On tablets the label sits above the title, so the content keeps the full width; the side rail starts at lg.
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="container-page grid grid-cols-1 gap-x-8 py-20 md:py-28 lg:grid-cols-12">
        <p className="label mb-6 flex items-center gap-2 self-start lg:col-span-3 lg:mb-0 lg:pt-[calc((clamp(1.85rem,3.6vw,2.85rem)*1.04-1rem)/2)]">
          <span className="text-muted tabular">{index}</span>
          <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
          <span>{label}</span>
        </p>
        <div className="lg:col-span-9">
          <h2
            id={`${id}-title`}
            className="max-w-[24ch] text-[clamp(1.85rem,3.6vw,2.85rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-balance"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-pretty text-muted">{intro}</p>}
        </div>
        <div className={wide ? 'mt-14 min-w-0 lg:col-span-12 lg:mt-20' : 'mt-12 min-w-0 lg:col-span-9 lg:col-start-4 lg:mt-16'}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function RichText({
  segments,
  linkClassName = 'link text-fg',
  newTabLabel,
}: {
  segments: Segment[];
  linkClassName?: string;
  /** Screen-reader note appended to links that open in a new tab. */
  newTabLabel?: string;
}) {
  return (
    <>
      {segments.map((segment, i) => {
        if (typeof segment === 'string') return segment;
        if ('em' in segment)
          return (
            <em key={i} className="font-serif font-normal tracking-[-0.01em] italic">
              {segment.em}
            </em>
          );
        const external = segment.href.startsWith('http');
        return (
          <a
            key={i}
            href={segment.href}
            className={linkClassName}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {segment.text}
            {external && newTabLabel && <span className="sr-only"> {newTabLabel}</span>}
          </a>
        );
      })}
    </>
  );
}

/** Inline list whose lines only break between items, never inside one or right after a separator. */
export function InlineList({ items, separator = ' · ' }: { items: string[]; separator?: string }) {
  const glyph = separator.trim();
  return (
    <>
      {items.map((item, i) => (
        <Fragment key={item}>
          <span className="whitespace-nowrap">
            {item}
            {i < items.length - 1 && (separator.startsWith(' ') ? ` ${glyph}` : glyph)}
          </span>
          {i < items.length - 1 && ' '}
        </Fragment>
      ))}
    </>
  );
}

/** Screenshot inside a minimal browser chrome; swaps to the dark capture when the site is dark. */
export function BrowserFrame({
  shot,
  domain,
  locale,
  important = false,
  sizes = '(min-width: 1024px) 680px, 100vw',
  className = '',
}: {
  shot: Shot;
  domain: string;
  locale: Locale;
  /** The image is the page's main visual (likely LCP). */
  important?: boolean;
  sizes?: string;
  className?: string;
}) {
  const imageClass = 'object-cover object-top transition-transform duration-700 ease-out-quint group-hover:scale-[1.015]';
  // With two theme variants only the visible one may load, so both stay lazy and get a high fetch
  // priority instead of a preload (a preload would download the hidden variant too).
  const loadingProps = shot.srcDark
    ? { fetchPriority: important ? ('high' as const) : undefined }
    : { preload: important };

  return (
    <div className={`overflow-hidden rounded-xl border border-line-strong bg-surface shadow-soft ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="mx-auto truncate rounded-md bg-surface-2 px-3 py-0.5 font-mono text-[11px] text-muted">
          {domain}
        </span>
        <span className="w-[42px]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={shot.src}
          alt={shot.alt[locale]}
          fill
          sizes={sizes}
          {...loadingProps}
          className={`${imageClass} ${shot.srcDark ? 'dark:hidden' : ''}`}
        />
        {shot.srcDark && (
          <Image
            src={shot.srcDark}
            alt={shot.alt[locale]}
            fill
            sizes={sizes}
            {...loadingProps}
            className={`${imageClass} hidden dark:block`}
          />
        )}
      </div>
    </div>
  );
}
