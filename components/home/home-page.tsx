import { About } from '@/components/home/about';
import { Contact } from '@/components/home/contact';
import { Experience } from '@/components/home/experience';
import { Hero } from '@/components/home/hero';
import { Products } from '@/components/home/products';
import { Projects } from '@/components/home/projects';
import { meta, site } from '@/content/site';
import type { Locale } from '@/lib/i18n';

function personJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: locale === 'pt' ? 'Analista de Sistemas' : 'Systems Analyst',
    description: meta.description[locale],
    worksFor: { '@type': 'Organization', name: 'Nootech Sistemas', url: 'https://nootech.com.br' },
    // Still studying, so an affiliation rather than alumniOf.
    affiliation: { '@type': 'CollegeOrUniversity', name: 'Universidade Tecnológica Federal do Paraná (UTFPR)' },
    address: { '@type': 'PostalAddress', addressLocality: 'Dois Vizinhos', addressRegion: 'PR', addressCountry: 'BR' },
    knowsAbout: ['C#', '.NET', 'TypeScript', 'Next.js', 'PostgreSQL', 'Web scraping', 'SEO', 'Model Context Protocol'],
    knowsLanguage: ['pt-BR', 'en'],
    sameAs: [site.links.github, site.links.linkedin, site.links.instagram],
  };
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <main id="conteudo" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(locale)).replace(/</g, '\\u003c') }}
      />
      <Hero locale={locale} />
      <Products locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
