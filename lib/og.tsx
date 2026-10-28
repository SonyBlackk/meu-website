import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

const fontsDir = join(process.cwd(), 'assets/fonts');

async function fonts() {
  const [regular, semibold, mono, serif] = await Promise.all([
    readFile(join(fontsDir, 'Geist-Regular.ttf')),
    readFile(join(fontsDir, 'Geist-SemiBold.ttf')),
    readFile(join(fontsDir, 'GeistMono-Regular.ttf')),
    readFile(join(fontsDir, 'InstrumentSerif-Italic.ttf')),
  ]);
  return [
    { name: 'Geist', data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Geist', data: semibold, weight: 600 as const, style: 'normal' as const },
    { name: 'Geist Mono', data: mono, weight: 400 as const, style: 'normal' as const },
    { name: 'Instrument Serif', data: serif, weight: 400 as const, style: 'italic' as const },
  ];
}

const colors = { bg: '#09090b', fg: '#ededef', muted: '#8e8e98', line: '#27272a', live: '#22c55e' };

/** Shared 1200x630 card: eyebrow, big title with an optional serif-italic tail, and a footer row. */
export async function ogImage({
  eyebrow,
  title,
  emphasis,
  footer,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  footer: string[];
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: colors.bg,
          color: colors.fg,
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontFamily: 'Geist Mono', fontSize: 24, color: colors.muted }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 11,
              background: colors.fg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.bg,
              fontFamily: 'Geist',
              fontWeight: 600,
              fontSize: 20,
              letterSpacing: -0.5,
            }}
          >
            LJ
          </div>
          {eyebrow}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 76, fontWeight: 600, lineHeight: 1.02, letterSpacing: -3.4, maxWidth: 1000 }}>
          {title}
          {emphasis && (
            <span style={{ fontFamily: 'Instrument Serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: -1 }}>
              {` ${emphasis}`}
            </span>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            paddingTop: 28,
            borderTop: `1px solid ${colors.line}`,
            fontFamily: 'Geist Mono',
            fontSize: 22,
            color: colors.muted,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 12, background: colors.live }} />
          {footer.map((item) => (
            <span key={item} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
