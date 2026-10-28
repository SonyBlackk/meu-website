import { ArrowUpRight, GitHub, Instagram, LinkedIn, WhatsApp } from '@/components/icons';
import { LocalTime } from '@/components/local-time';
import { footer, site, ui } from '@/content/site';
import { htmlLang, type Locale } from '@/lib/i18n';

const socials = [
  { label: 'GitHub', href: site.links.github, Icon: GitHub },
  { label: 'LinkedIn', href: site.links.linkedin, Icon: LinkedIn },
  { label: 'WhatsApp', href: site.links.whatsapp, Icon: WhatsApp },
  { label: 'Instagram', href: site.links.instagram, Icon: Instagram },
];

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-page grid gap-8 py-10 text-sm md:grid-cols-12 md:py-12">
        <div className="md:col-span-4">
          <p className="font-medium">{site.name}</p>
          <p className="mt-1 text-muted">{footer.madeIn[locale]}</p>
          <ul className="mt-5 flex gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  <Icon className="size-[18px]" />
                  <span className="sr-only">
                    {label} {ui.newTab[locale]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-muted md:col-span-4">
          <p className="max-w-[40ch]">{footer.colophon[locale]}</p>
          <a
            href={site.repo}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-fg-2 transition-colors hover:text-fg"
          >
            {footer.source[locale]}
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only">{ui.newTab[locale]}</span>
          </a>
        </div>

        <div className="flex flex-col gap-1 font-mono text-xs text-muted md:col-span-4 md:items-end md:text-right">
          <p>
            © 2026 · {site.version}
          </p>
          <p className="whitespace-nowrap">
            {ui.localTime[locale]}{' '}
            <LocalTime timeZone={site.timeZone} locale={htmlLang[locale]} className="tabular text-fg-2" /> GMT-3
          </p>
        </div>
      </div>
    </footer>
  );
}
