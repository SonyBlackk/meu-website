import { ArrowUpRight } from '@/components/icons';
import { Section } from '@/components/ui';
import { experience, sectionIds, sections, ui } from '@/content/site';
import type { Locale } from '@/lib/i18n';

export function Experience({ locale }: { locale: Locale }) {
  const t = sections.experience;

  return (
    <Section id={sectionIds.experience[locale]} index="02" label={t.label[locale]} title={t.title[locale]}>
      <ol className="dim-siblings border-y border-line">
        {experience.map((item) => (
          <li
            key={item.role.en}
            className="dim-item grid gap-2 border-b border-line py-8 last:border-b-0 md:grid-cols-[9.5rem_1fr] md:gap-8"
          >
            <p className="pt-1 font-mono text-xs text-muted tabular">{item.period[locale]}</p>
            <div>
              <h3 className="text-lg leading-snug font-medium tracking-[-0.015em]">
                {item.role[locale]}
                <span className="text-faint"> · </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1 text-fg-2 transition-colors hover:text-fg"
                  >
                    {item.org}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">{ui.newTab[locale]}</span>
                  </a>
                ) : (
                  <span className="text-fg-2">{item.org}</span>
                )}
              </h3>
              <p className="mt-3 max-w-[66ch] leading-relaxed text-pretty text-muted">{item.body[locale]}</p>
              {item.tags && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-fg-2"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
