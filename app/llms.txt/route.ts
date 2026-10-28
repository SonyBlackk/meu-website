import { products } from '@/content/products';
import { about, experience, labProjects, meta, projectName, site } from '@/content/site';
import { productPath } from '@/lib/i18n';

export const dynamic = 'force-static';

/** Plain-text summary of the site for language models (https://llmstxt.org). */
export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${meta.description.en}`,
    '',
    about.paragraphs.en.join('\n\n'),
    '',
    '## Products',
    '',
    ...products.map(
      (product) =>
        `- [${product.name}](${product.url}): ${product.summary.en} Case study: ${site.url}${productPath('en', product.slug)}`,
    ),
    '',
    '## Experience',
    '',
    ...experience.map((item) => `- ${item.period.en}: ${item.role.en}, ${item.org}. ${item.body.en}`),
    '',
    '## Other projects',
    '',
    ...labProjects.map((project) => `- ${projectName(project, 'en')} (${project.year}, ${project.stack}): ${project.description.en}${project.href ? ` ${project.href}` : ''}`),
    '',
    '## Contact',
    '',
    `- Email: ${site.email}`,
    `- LinkedIn: ${site.links.linkedin}`,
    `- GitHub: ${site.links.github}`,
    `- Portuguese version: ${site.url}/`,
    `- English version: ${site.url}/en`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
