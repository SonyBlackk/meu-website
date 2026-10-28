export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

/** Browser UI colour for each theme; must match --bg in app/globals.css. */
export const themeColors: Record<Theme, string> = { light: '#fafafa', dark: '#09090b' };

/**
 * Runs inline in <head> before the first paint, so the page never flashes the wrong theme.
 * An explicit choice wins; otherwise the system preference is used (also when storage is blocked).
 */
export const themeInitScript = `(function(){var t=null;try{t=localStorage.getItem('${STORAGE_KEY}')}catch(e){}var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light';var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',d?'${themeColors.dark}':'${themeColors.light}')})()`;

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[theme]);
}

export function setTheme(theme: Theme) {
  const root = document.documentElement;
  // Switch instantly instead of animating every colour transition on the page.
  root.classList.add('theme-switching');
  applyTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode); the theme still applies for this visit.
  }
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
}

export function toggleTheme() {
  setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
}

/** Follows system changes until the visitor picks a theme explicitly. */
export function followSystemTheme() {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onChange = (event: MediaQueryListEvent) => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (!stored) applyTheme(event.matches ? 'dark' : 'light');
  };
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}
