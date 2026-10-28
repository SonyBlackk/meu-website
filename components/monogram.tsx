/** "LJ" monogram, drawn with strokes so it never depends on a loaded font. Same shape as app/icon.svg. */
export function Monogram({ className = 'size-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect width="32" height="32" rx="8" className="fill-fg" />
      <path
        d="M9.5 9v13h5.2M22.5 9v9.6c0 2.2-1.4 3.6-3.5 3.6-1.3 0-2.3-.6-2.9-1.6"
        fill="none"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-bg"
      />
    </svg>
  );
}
