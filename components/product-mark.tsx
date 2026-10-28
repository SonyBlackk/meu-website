import type { ProductSlug } from '@/content/types';

type Props = { slug: ProductSlug; className?: string };

/** Each product's own icon, redrawn inline so it follows the site theme. */
export function ProductMark({ slug, className = 'size-6' }: Props) {
  if (slug === 'setupbarato') {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
        <rect width="48" height="48" rx="13" fill="#1D4ED8" />
        <circle cx="24" cy="24" r="14.25" stroke="#BFDBFE" strokeOpacity=".44" />
        <circle cx="24" cy="24" r="8.25" stroke="#BFDBFE" strokeOpacity=".32" />
        <path d="M24 24L35 13" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        <circle cx="35" cy="13" r="2.75" fill="#DBEAFE" />
        <path
          d="M11.5 17L19 23.5L25 20.25L36.5 31.5"
          stroke="#fff"
          strokeWidth="3.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M30.25 31.5H36.5V25.25" stroke="#fff" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (slug === 'vitrinebeauty') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
        <rect width="64" height="64" rx="14" className="fill-fg" />
        <path d="M12.5 16H22.4L34.1 36.5L45.8 16H51.5L33.2 48H30.8Z" className="fill-bg" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="7" className="fill-fg" />
      <g fill="none" strokeWidth="2.6" strokeLinecap="round" className="stroke-bg">
        <path d="M8 11h16" />
        <path d="M8 16h11" />
        <path d="M8 21h6" />
      </g>
    </svg>
  );
}
