import { ArrowUpRight } from '@/components/icons';
import { Section } from '@/components/ui';
import { labProjects, projectName, sectionIds, sections, site, ui } from '@/content/site';
import type { Locale } from '@/lib/i18n';

// Below lg the table stacks into two columns, so descriptions never get squeezed on tablets.
const rowClass =
  'grid grid-cols-[3.5rem_1fr] gap-x-6 gap-y-2 border-b border-line py-5 lg:grid-cols-[3.5rem_1fr_9.5rem_10.5rem] [&>*:nth-child(n+3)]:col-start-2 lg:[&>*:nth-child(n+3)]:col-start-auto';

export function Projects({ locale }: { locale: Locale }) {
  const t = sections.projects;

  return (
    <Section id={sectionIds.projects[locale]} index="03" label={t.label[locale]} title={t.title[locale]}>
      <div className="hidden grid-cols-[3.5rem_1fr_9.5rem_10.5rem] gap-x-6 border-b border-line pb-3 lg:grid">
        <span className="label">{t.columns.year[locale]}</span>
        <span className="label">{t.columns.project[locale]}</span>
        <span className="label">{t.columns.stack[locale]}</span>
        <span className="label text-right">{t.columns.status[locale]}</span>
      </div>

      <ul className="dim-siblings">
        {labProjects.map((project) => {
          const name = projectName(project, locale);
          const row = (
            <>
              <span className="font-mono text-xs text-muted tabular lg:pt-0.5">{project.year}</span>
              <span className="min-w-0">
                <span className="inline-flex items-center gap-1.5 font-medium text-fg">
                  {name}
                  {project.href && (
                    <ArrowUpRight className="size-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                  )}
                </span>
                <span className="mt-1 block max-w-[62ch] text-sm leading-relaxed text-pretty text-muted">
                  {project.description[locale]}
                </span>
              </span>
              <span className="font-mono text-xs text-fg-2 lg:pt-0.5">{project.stack}</span>
              <span className="font-mono text-[11px] text-muted lg:pt-0.5 lg:text-right">
                {project.status[locale]}
                {project.linkLabel && <span className="whitespace-nowrap"> · {project.linkLabel}</span>}
              </span>
            </>
          );

          return (
            <li key={`${project.year}-${typeof project.name === 'string' ? project.name : project.name.en}`} className="dim-item">
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" className={`group ${rowClass}`}>
                  {row}
                  <span className="sr-only">{ui.newTab[locale]}</span>
                </a>
              ) : (
                <div className={rowClass}>{row}</div>
              )}
            </li>
          );
        })}
      </ul>

      <a
        href={site.links.github}
        target="_blank"
        rel="noreferrer"
        className="group mt-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        {t.more[locale]}
        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        <span className="sr-only">{ui.newTab[locale]}</span>
      </a>
    </Section>
  );
}
