'use client';

import { useEffect, useState } from 'react';

type Props = { timeZone: string; locale: string; className?: string };

/** Current time where Luiz lives. Rendered after mount, so server and client markup always match. */
export function LocalTime({ timeZone, locale, className }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, [locale, timeZone]);

  return (
    <time className={className}>
      {time ?? '--:--'}
    </time>
  );
}
