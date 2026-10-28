import { InlineList, Section } from '@/components/ui';
import { about, sectionIds, sections } from '@/content/site';
import type { Locale } from '@/lib/i18n';

export function About({ locale }: { locale: Locale }) {
  const t = sections.about;

  return (
    <Section id={sectionIds.about[locale]} index="04" label={t.label[locale]} title={t.title[locale]}>
      <div className="grid gap-12 lg:grid-cols-9 lg:gap-10">
        <div className="space-y-5 text-lg leading-relaxed text-pretty text-fg-2 lg:col-span-5">
          {about.paragraphs[locale].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-10 lg:col-span-4">
          <div>
            <h3 className="label">{t.now[locale]}</h3>
            <ul className="mt-4 space-y-3">
              {about.now[locale].map((item) => (
                <li key={item} className="flex gap-3 leading-snug text-fg-2">
                  <span className="mt-[0.55em] size-1.5 flex-none rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label">{t.toolbox[locale]}</h3>
            <dl className="mt-4 divide-y divide-line border-y border-line">
              {about.toolbox.map((group) => (
                <div key={group.group.en} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 text-sm">
                  <dt className="text-muted">{group.group[locale]}</dt>
                  <dd className="font-mono text-[12.5px] leading-relaxed text-fg-2">
                    <InlineList items={group.items} separator=", " />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
