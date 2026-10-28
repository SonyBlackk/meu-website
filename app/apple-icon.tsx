import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/** Same "LJ" monogram as app/icon.svg, on an opaque background as iOS expects. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0b' }}>
        <svg width="132" height="132" viewBox="6 6 20 20">
          <path
            d="M9.5 9v13h5.2M22.5 9v9.6c0 2.2-1.4 3.6-3.5 3.6-1.3 0-2.3-.6-2.9-1.6"
            fill="none"
            stroke="#fafafa"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
