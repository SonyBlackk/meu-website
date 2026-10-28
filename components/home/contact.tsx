import { CopyEmail } from '@/components/copy-email';
import { ArrowUpRight, GitHub, Instagram, LinkedIn, WhatsApp } from '@/components/icons';
import { Section } from '@/components/ui';
import { sectionIds, sections, site, ui } from '@/content/site';
import type { Locale } from '@/lib/i18n';

const channels = [
  { label: 'LinkedIn', handle: 'luiz-eduardo-jelonschek', href: site.links.linkedin, Icon: LinkedIn },
  { label: 'GitHub', handle: 'SonyBlackk', href: site.links.github, Icon: GitHub },
  { label: 'WhatsApp', handle: '+55 46 99917-4718', href: site.links.whatsapp, Icon: WhatsApp },
  { label: 'Instagram', handle: '@eduardo_jelonschek', href: site.links.instagram, Icon: Instagram },
];

export function Contact({ locale }: { locale: Locale }) {
  const t = sections.contact;

  return (
    <Section id={sectionIds.contact[locale]} index="05" label={t.label[locale]} title={t.title[locale]} intro={t.body[locale]}>
      <CopyEmail
        email={site.email}
        variant="large"
        labels={{ copy: ui.copyEmail[locale], copied: ui.copied[locale] }}
      />

      <ul className="dim-siblings mt-12 grid border-t border-line sm:grid-cols-2">
        {channels.map(({ label, handle, href, Icon }) => (
          <li key={label} className="dim-item border-b border-line sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 py-5"
            >
              <Icon className="size-5 flex-none text-muted transition-colors group-hover:text-fg" />
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{label}</span>
                <span className="block truncate font-mono text-xs text-muted">{handle}</span>
              </span>
              <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
              <span className="sr-only">{ui.newTab[locale]}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
