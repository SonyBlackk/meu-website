# jelonschek.com

Portfólio pessoal de Luiz Eduardo Jelonschek: backend C#/.NET na Nootech e criador do SetupBarato, do MiranteSEO e do VitrineBeauty.

## Stack

- Next.js 16 (App Router, páginas estáticas) e React 19
- TypeScript e Tailwind CSS v4
- Geist, Geist Mono e Instrument Serif via `next/font`
- Vercel Analytics e Speed Insights

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## Estrutura

```
app/
  (pt)/                  layout raiz em português: /, /projetos/[slug]
  (en)/                  layout raiz em inglês: /en, /en/projects/[slug]
  global-not-found.tsx   404 para qualquer URL sem rota
  sitemap.ts, robots.ts, llms.txt/, icon.svg, apple-icon.tsx
components/
  home/                  seções da página inicial
  case-study/            página de estudo de caso de cada produto
  command-menu.tsx       menu de comandos (Ctrl/⌘ K ou /)
content/
  site.ts                textos da interface, experiência, projetos e sobre (PT e EN)
  products/*.ts          um arquivo por produto, com o estudo de caso completo
lib/                     i18n, tema claro/escuro, metadados e imagens Open Graph
public/work/             screenshots dos produtos (WebP 2400×1500)
assets/fonts/            fontes usadas só para gerar as imagens Open Graph
```

## Editando o conteúdo

Todo o texto fica em `content/`. Cada string tem as duas línguas (`{ pt: '...', en: '...' }`), e o TypeScript acusa quando falta uma delas.

- **Números dos produtos**: `content/products/<produto>.ts` (`metrics` aparece na home e `caseStudy.numbers` no estudo de caso) e o quadro "Sistemas em produção" em `content/site.ts` (`statusBoard`). São números públicos lidos em 28/10/2026; atualize a data em `caseStudy.asOf` quando mudar.
- **Novo produto**: crie `content/products/<slug>.ts` seguindo `content/types.ts`, adicione-o em `content/products/index.ts`, inclua o ícone em `components/product-mark.tsx` e a linha em `statusBoard.rows`.
- **Screenshots**: salve em `public/work/<slug>/` em 2400×1500 (16:10). `srcDark` é opcional e aparece no tema escuro.
