import { CommandMenu, type CommandItem } from '@/components/command-menu';
import { LocaleSwitch } from '@/components/locale-switch';
import { Monogram } from '@/components/monogram';
import { NavLink } from '@/components/nav-link';
import { ThemeToggle } from '@/components/theme-toggle';
import { products } from '@/content/products';
import { commandMenu, nav, site, ui } from '@/content/site';
import { homePath, htmlLang, otherLocale, productPath, type Locale } from '@/lib/i18n';

function commandItems(locale: Locale): CommandItem[] {
  const home = homePath(locale);
  const t = commandMenu;

  return [
    ...nav.map((item) => ({
      id: `section-${item.id[locale]}`,
      group: t.groups.navigate[locale],
      label: item.label[locale],
      kind: 'section' as const,
      href: `${home}#${item.id[locale]}`,
    })),
    ...products.flatMap((product) => [
      {
        id: `case-${product.slug}`,
        group: t.groups.products[locale],
        label: `${product.name} — ${t.caseStudy[locale]}`,
        hint: product.category[locale],
        keywords: product.domain,
        kind: 'route' as const,
        href: productPath(locale, product.slug),
      },
      {
        id: `site-${product.slug}`,
        group: t.groups.products[locale],
        label: `${t.openSite[locale]}: ${product.name}`,
        hint: product.domain,
        kind: 'external' as const,
        href: product.url,
      },
    ]),
    { id: 'copy-email', group: t.groups.actions[locale], label: ui.copyEmail[locale], hint: site.email, kind: 'copy' },
    { id: 'theme', group: t.groups.actions[locale], label: t.toggleTheme[locale], kind: 'theme' },
    {
      id: 'language',
      group: t.groups.actions[locale],
      label: t.switchLanguage[locale],
      kind: 'language',
      lang: htmlLang[otherLocale(locale)],
    },
    { id: 'linkedin', group: t.groups.links[locale], label: 'LinkedIn', kind: 'external', href: site.links.linkedin },
    { id: 'github', group: t.groups.links[locale], label: 'GitHub', kind: 'external', href: site.links.github },
    { id: 'whatsapp', group: t.groups.links[locale], label: 'WhatsApp', kind: 'external', href: site.links.whatsapp },
    { id: 'source', group: t.groups.links[locale], label: t.viewSource[locale], kind: 'external', href: site.repo },
  ];
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const home = homePath(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70">
      <div className="container-page flex h-16 items-center gap-4">
        <NavLink home={home} className="group flex items-center gap-2.5 rounded-md" aria-label={`${site.shortName} — ${ui.home[locale]}`}>
          <Monogram className="size-7 flex-none transition-transform duration-300 group-hover:-rotate-6" />
          <span className="text-[15px] font-semibold tracking-[-0.02em] whitespace-nowrap">{site.shortName}</span>
        </NavLink>

        <nav aria-label={ui.menu[locale]} className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.id[locale]}>
                <NavLink
                  home={home}
                  hash={item.id[locale]}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label[locale]}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-1 lg:ml-4">
          <CommandMenu
            items={commandItems(locale)}
            email={site.email}
            labels={{
              placeholder: commandMenu.placeholder[locale],
              empty: commandMenu.empty[locale],
              open: commandMenu.open[locale],
              title: commandMenu.title[locale],
              results: commandMenu.results[locale],
              close: commandMenu.close[locale],
              menu: ui.menu[locale],
              copied: ui.copied[locale],
              hint: commandMenu.hint[locale],
            }}
          />
          <LocaleSwitch
            label={ui.language[locale]}
            short={ui.languageShort[locale]}
            hrefLang={htmlLang[otherLocale(locale)]}
          />
          <ThemeToggle labels={{ toDark: ui.themeDark[locale], toLight: ui.themeLight[locale] }} />
        </div>
      </div>
    </header>
  );
}
