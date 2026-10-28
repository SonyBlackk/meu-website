import type { Product } from '@/content/types';

export const vitrinebeauty: Product = {
  slug: 'vitrinebeauty',
  name: 'VitrineBeauty',
  domain: 'vitrinebeauty.online',
  url: 'https://vitrinebeauty.online',
  since: '2026-09',
  category: {
    pt: 'Comparador de preços de cosméticos',
    en: 'Beauty price comparison',
  },
  headline: {
    pt: 'Compara o mesmo cosmético em 18 lojas, por tom, por tamanho e pelo preço do mililitro.',
    en: 'Compares the same cosmetic across 18 stores, by shade, by size and by price per ml.',
  },
  summary: {
    pt: 'O VitrineBeauty agrupa o mesmo cosmético pelo código de barras, tom por tom e tamanho por tamanho, em 18 lojas brasileiras. Mostra o preço por ml ou por grama e guarda um histórico próprio para dizer se vale comprar agora ou esperar.',
    en: 'VitrineBeauty matches the same cosmetic by barcode, shade by shade and size by size, across 18 Brazilian stores. It shows the price per ml or per gram and keeps its own price history to tell you whether to buy now or wait.',
  },
  metaDescription: {
    pt: 'Estudo de caso do VitrineBeauty: comparador de cosméticos que agrupa o mesmo produto por código de barras em 18 lojas e mostra o preço por ml.',
    en: 'VitrineBeauty case study: a cosmetics price comparator that matches the same product by barcode across 18 stores and shows the price per ml.',
  },
  metrics: [
    {
      value: { pt: '485 mil', en: '485k' },
      label: { pt: 'ofertas comparadas', en: 'offers compared' },
    },
    {
      value: { pt: '116 mil', en: '116k' },
      label: { pt: 'produtos com oferta ativa', en: 'products with live offers' },
    },
    {
      value: { pt: '18', en: '18' },
      label: { pt: 'lojas lidas a cada 3 horas', en: 'stores read every 3 hours' },
    },
  ],
  stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Cloudflare'],
  hero: {
    src: '/work/vitrinebeauty/hero.webp',
    srcDark: '/work/vitrinebeauty/hero-dark.webp',
    alt: {
      pt: 'Página inicial do VitrineBeauty com o título “O mesmo produto, todos os preços.” e 485.754 ofertas comparadas em 18 lojas',
      en: 'VitrineBeauty homepage with the headline “O mesmo produto, todos os preços.” and 485,754 offers compared across 18 stores',
    },
  },
  caseStudy: {
    role: {
      pt: 'Criação e desenvolvimento: produto, backend, coleta de dados, front-end e infraestrutura',
      en: 'Creator and developer: product, backend, data collection, front-end and infrastructure',
    },
    intro: {
      pt: 'Criei o VitrineBeauty sozinho e o coloquei no ar em setembro de 2026. Ele lê o catálogo público de 18 lojas brasileiras a cada três horas, agrupa as ofertas pelo código de barras de cada variante e mostra, numa página só, quanto o mesmo produto custa em cada loja.',
      en: 'I built VitrineBeauty on my own and launched it in September 2026. It reads the public catalogs of 18 Brazilian stores every three hours, groups offers by each variant’s barcode and shows, on a single page, what the same product costs at each store.',
    },
    problem: {
      pt: [
        'Duas lojas escrevem o mesmo shampoo de dez formas diferentes. Comparar por nome junta coisas que não se comparam, como um frasco de 300 ml contra um kit de três, e o resultado é uma economia que não existe.',
        'O tamanho também engana. Um shampoo de 300 ml a R$ 86 sai a R$ 0,29 por mililitro; um de 1,5 L a R$ 250 sai a R$ 0,17. O mais caro na etiqueta é o mais barato de verdade.',
        'E o preço “de” riscado, que deveria provar o desconto, é inflado com frequência em cosméticos. Sem um histórico independente, não dá para saber se a promoção de hoje é real.',
      ],
      en: [
        'Two stores can name the same shampoo in ten different ways. Comparing by name lumps together things that don’t compare, like a 300 ml bottle against a three-pack, and produces savings that don’t exist.',
        'Size is misleading too. A 300 ml shampoo at R$ 86 works out to R$ 0.29 per ml; a 1.5 L bottle at R$ 250 works out to R$ 0.17. The pricier tag is the better deal.',
        'And the struck-through list price that is supposed to prove a discount is often inflated in beauty retail. Without an independent price history, there is no way to tell whether today’s sale is real.',
      ],
    },
    features: [
      {
        title: { pt: 'Agrupamento por código de barras', en: 'Matching by barcode' },
        body: {
          pt: 'As ofertas são agrupadas pelo GTIN/EAN de cada SKU, ou seja, por tom e por tamanho. O código fica visível na ficha para qualquer pessoa conferir.',
          en: 'Offers are grouped by the GTIN/EAN of each SKU, which means per shade and per size. The barcode is shown on the product page so anyone can check it.',
        },
      },
      {
        title: { pt: 'Preço por ml e grama', en: 'Price per ml and gram' },
        body: {
          pt: 'Cada card e cada oferta mostram o custo por unidade, e qualquer listagem pode ser ordenada por ele.',
          en: 'Every card and every offer shows the unit cost, and any listing can be sorted by it.',
        },
      },
      {
        title: { pt: 'Histórico de preço próprio', en: 'Its own price history' },
        body: {
          pt: 'A ficha diz em texto se o preço de hoje é o melhor já visto ou quanto abaixo dele o produto esteve nos últimos 90 dias.',
          en: 'Each product page says in plain words whether today’s price is the best seen so far, or how far below it the product went in the last 90 days.',
        },
      },
      {
        title: { pt: 'Prazo de entrega informado pela loja', en: 'Delivery times from each store' },
        body: {
          pt: 'O prazo vem da calculadora de frete da própria loja, por estado ou CEP. Onde a loja não publica cálculo de frete, a coluna mostra um travessão em vez de um prazo estimado.',
          en: 'Delivery time comes from each store’s own freight calculator, by state or CEP (postal code). Where a store publishes no freight calculator, the column shows a dash instead of an estimate.',
        },
      },
      {
        title: { pt: 'Alertas de queda por e-mail', en: 'Price-drop email alerts' },
        body: {
          pt: 'O alerta é por variante e é conferido a cada coleta. Cada aviso relata um preço menor que o anterior, então a mesma notícia nunca chega duas vezes.',
          en: 'Alerts are set per variant and checked on every collection run. Each email reports a lower price than the one before, so the same news never arrives twice.',
        },
      },
      {
        title: { pt: 'Sem rastreadores de terceiros', en: 'No third-party trackers' },
        body: {
          pt: 'Não há Google Analytics nem pixel de rede social. A medição de audiência é própria e não guarda IP, e os links de afiliado vão marcados como patrocinados.',
          en: 'No Google Analytics and no social pixels. Audience measurement is first-party and stores no IP, and affiliate links are marked as sponsored.',
        },
      },
    ],
    pipeline: [
      {
        title: { pt: 'Coleta', en: 'Collection' },
        body: {
          pt: 'Lê o catálogo público de 18 lojas a cada três horas e guarda cada preço com a data e a hora em que foi visto. Nenhum preço é digitado à mão.',
          en: 'Reads the public catalogs of 18 stores every three hours and stores each price with the date and time it was seen. No price is typed in by hand.',
        },
      },
      {
        title: { pt: 'Correspondência', en: 'Matching' },
        body: {
          pt: 'Agrupa as ofertas pelo código de barras de cada SKU. A oferta só entra no grupo se a medida, a quantidade da embalagem e o título concordarem com o código.',
          en: 'Groups offers by each SKU’s barcode. An offer joins the group only if its size, pack quantity and title agree with the barcode.',
        },
      },
      {
        title: { pt: 'Normalização', en: 'Normalization' },
        body: {
          pt: 'Converte cada oferta em preço por ml ou por grama, para que tamanhos e kits diferentes fiquem comparáveis.',
          en: 'Converts every offer into a price per ml or per gram, so different sizes and kits become comparable.',
        },
      },
      {
        title: { pt: 'Histórico', en: 'History' },
        body: {
          pt: 'Guarda o menor preço de cada variante ao longo do tempo, entre todas as lojas, e usa o menor valor dos últimos 90 dias como referência. Oferta que não reaparece nas coletas sai da lista.',
          en: 'Keeps the lowest price of each variant over time, across all stores, and uses the lowest value of the last 90 days as the reference. Offers that stop showing up in collection runs drop off the list.',
        },
      },
      {
        title: { pt: 'Veredito', en: 'Verdict' },
        body: {
          pt: 'A ficha ordena as ofertas da mais barata para a mais cara, mostra quando cada preço foi visto e diz se vale comprar agora ou esperar.',
          en: 'The product page sorts offers from cheapest to most expensive, shows when each price was seen and says whether to buy now or wait.',
        },
      },
      {
        title: { pt: 'Alertas', en: 'Alerts' },
        body: {
          pt: 'A cada coleta, os alertas são conferidos, e um e-mail sai quando alguma loja chega ao preço pedido.',
          en: 'Alerts are checked on every run, and an email goes out when any store reaches the requested price.',
        },
      },
    ],
    decisions: [
      {
        title: {
          pt: 'Melhor não agrupar do que agrupar errado',
          en: 'Better not to match than to match wrong',
        },
        body: {
          pt: 'O código de barras é a chave, mas não basta: se ele não concorda com a medida, a quantidade da embalagem e o título do anúncio, a oferta fica de fora. Algumas ofertas ficam sem grupo, mas é isso que impede comparar um frasco de 300 ml com um kit de três e anunciar uma economia que não existe.',
          en: 'The barcode is the key, but it isn’t enough: if it disagrees with the listing’s size, pack quantity or title, the offer stays out. Some offers end up ungrouped, but that is what keeps a 300 ml bottle from being compared with a three-pack and turned into fake savings.',
        },
      },
      {
        title: {
          pt: 'O preço de referência é o observado, não o da loja',
          en: 'The reference price is the observed one, not the store’s',
        },
        body: {
          pt: 'Em cosméticos, o preço “de” riscado é inflado com frequência, então não serve para provar desconto. Construí o veredito sobre o menor preço que o próprio VitrineBeauty registrou em 90 dias, entre todas as lojas. O custo é precisar de tempo de coleta antes de opinar.',
          en: 'In beauty retail the struck-through list price is often inflated, so it can’t prove a discount. I built the verdict on the lowest price VitrineBeauty itself recorded over 90 days across all stores. The cost is that the site needs collection time before it can give an opinion.',
        },
      },
      {
        title: {
          pt: 'Na dúvida, a página fica em silêncio',
          en: 'When in doubt, the page stays quiet',
        },
        body: {
          pt: 'Se as ofertas agrupadas numa opção não descrevem a mesma coisa, a ficha para de afirmar economia em vez de publicar um número grande. Se a opção é acompanhada há pouco tempo, ela diz há quantos dias e não opina. A página perde um destaque chamativo, mas cada número exibido se sustenta.',
          en: 'If the offers grouped under an option don’t describe the same thing, the page stops claiming savings instead of publishing a big number. If the option has only been tracked for a short time, it says for how many days and holds back its opinion. The page loses a flashy headline, but every number it shows holds up.',
        },
      },
      {
        title: {
          pt: 'A unidade de integração é a plataforma, não a loja',
          en: 'Integrate the platform, not the store',
        },
        body: {
          pt: 'Escrevi a integração por plataforma de e-commerce, e não por loja. Uma loja nova numa plataforma já suportada entra em horas, e não em semanas. O esforço maior fica concentrado em cada plataforma nova.',
          en: 'I wrote the integration per e-commerce platform rather than per store. A new store on a supported platform goes live in hours, not weeks. The heavier work is concentrated in each new platform.',
        },
      },
      {
        title: {
          pt: 'Comissão não compra posição',
          en: 'Commission doesn’t buy position',
        },
        body: {
          pt: 'O site ganha comissão de indicação em algumas lojas, mas a lista de ofertas é sempre ordenada do preço mais baixo para o mais alto, e nenhuma loja paga para aparecer antes. Os links que podem gerar comissão vão marcados como patrocinados no código da página.',
          en: 'The site earns referral commissions from some stores, but the offer list is always sorted from lowest to highest price, and no store pays to appear first. Links that may earn a commission are marked as sponsored in the page markup.',
        },
      },
    ],
    numbers: [
      {
        value: { pt: '485 mil', en: '485k' },
        label: { pt: 'ofertas comparadas', en: 'offers compared' },
        note: {
          pt: '485.754 no contador da página inicial.',
          en: '485,754 on the homepage counter.',
        },
      },
      {
        value: { pt: '116 mil', en: '116k' },
        label: { pt: 'produtos com oferta ativa', en: 'products with live offers' },
        note: {
          pt: '116.204, segundo o rodapé e o FAQ do site.',
          en: '116,204, per the site footer and FAQ.',
        },
      },
      {
        value: { pt: '4.201', en: '4,201' },
        label: { pt: 'marcas', en: 'brands' },
        note: {
          pt: 'Rodapé e página Sobre.',
          en: 'Footer and About page.',
        },
      },
      {
        value: { pt: '18', en: '18' },
        label: { pt: 'lojas com ofertas ativas', en: 'stores with live offers' },
        note: {
          pt: 'Farmácias, lojas de cosméticos e varejistas de moda, como Droga Raia, Época Cosméticos, Sephora e Riachuelo.',
          en: 'Drugstores, beauty retailers and fashion retailers, such as Droga Raia, Época Cosméticos, Sephora and Riachuelo.',
        },
      },
      {
        value: { pt: '3 h', en: '3 h' },
        label: { pt: 'intervalo máximo entre coletas', en: 'maximum time between collections' },
        note: {
          pt: 'Cada loja é relida no máximo a cada três horas, segundo o FAQ.',
          en: 'Each store is re-read at most three hours apart, per the FAQ.',
        },
      },
      {
        value: { pt: '90 dias', en: '90 days' },
        label: { pt: 'janela do preço de referência', en: 'reference-price window' },
        note: {
          pt: 'Menor preço observado por variante, entre todas as lojas.',
          en: 'Lowest observed price per variant, across all stores.',
        },
      },
      {
        value: { pt: '122 mil', en: '122k' },
        label: { pt: 'URLs publicadas nos sitemaps', en: 'URLs published in sitemaps' },
        note: {
          pt: '122.405 URLs em 12 sitemaps públicos, quase todas de produtos, marcas e categorias. Contadas na leitura.',
          en: '122,405 URLs across 12 public sitemaps, almost all products, brands and categories. Counted on the day.',
        },
      },
    ],
    gallery: [
      {
        src: '/work/vitrinebeauty/produto.webp',
        alt: {
          pt: 'Ficha do condicionador Wella Invigo Nutri-Enrich 200 ml: menor preço R$ 79,99, maior R$ 124,99 e diferença de 36% entre 11 lojas',
          en: 'Wella Invigo Nutri-Enrich conditioner, 200 ml: lowest price R$ 79.99, highest R$ 124.99 and a 36% gap across 11 stores',
        },
        caption: {
          pt: 'A ficha separa a opção de 200 ml da de 1 L, mostra R$ 0,400/ml e avisa que o site já registrou R$ 57,00 nos últimos 90 dias, 29% abaixo do preço de agora, então pode valer esperar.',
          en: 'The page keeps the 200 ml option apart from the 1 L one, shows R$ 0.400/ml and notes that the site has recorded R$ 57.00 in the last 90 days, 29% below today’s price, so it may pay to wait.',
        },
      },
      {
        src: '/work/vitrinebeauty/historico.webp',
        alt: {
          pt: 'Ofertas com preço por ml e quando cada uma foi vista, gráfico em degraus do menor preço em 51 dias e caixa de alerta de preço',
          en: 'Offers with price per ml and when each was last seen, a 51-day step chart of the lowest price and a price-alert box',
        },
        caption: {
          pt: 'O histórico usa só preços que o próprio site observou, de R$ 57,00 a R$ 90,90 em 51 dias, e é ele que sustenta o veredito da ficha.',
          en: 'The history uses only prices the site observed itself, from R$ 57.00 to R$ 90.90 over 51 days, and it is what backs the verdict on the page.',
        },
      },
    ],
    asOf: {
      pt: 'Números públicos do site, lidos em 28 de outubro de 2026.',
      en: 'Public numbers from the live site, as of October 28, 2026.',
    },
  },
};
