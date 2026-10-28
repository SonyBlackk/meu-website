import type { Product } from '@/content/types';

export const setupbarato: Product = {
  slug: 'setupbarato',
  name: 'SetupBarato',
  domain: 'setupbarato.com.br',
  url: 'https://setupbarato.com.br',
  since: '2026-06',
  category: {
    pt: 'Comparador de preços de hardware',
    en: 'Hardware price comparison',
  },
  headline: {
    pt: 'Compara preços de hardware em 35 lojas e diz se o preço de hoje é bom de verdade.',
    en: 'Compares hardware prices across 35 stores and tells you if today’s price is really good.',
  },
  summary: {
    pt: 'O SetupBarato compara cerca de 95 mil produtos em 35 lojas brasileiras e compara o preço de hoje com o histórico dos últimos 90 dias. Também monta um PC compatível para o uso e o orçamento, e uma extensão mostra o veredito direto na página da loja.',
    en: 'SetupBarato compares about 95k products across 35 Brazilian stores and judges today’s price against the last 90 days of history. It also builds a compatible PC for a given use and budget, and a browser extension shows the verdict right on the store’s page.',
  },
  metaDescription: {
    pt: 'Estudo de caso do SetupBarato: comparador que acompanha cerca de 95 mil peças de hardware em 35 lojas e diz se o preço de hoje é bom.',
    en: 'SetupBarato case study: a price tracker that follows about 95k hardware parts across 35 Brazilian stores and tells you if today’s price is good.',
  },
  metrics: [
    {
      value: { pt: '~95 mil', en: '~95k' },
      label: { pt: 'produtos monitorados', en: 'products tracked' },
    },
    {
      value: { pt: '35', en: '35' },
      label: { pt: 'lojas brasileiras', en: 'Brazilian stores' },
    },
    {
      value: { pt: '90 min', en: '90 min' },
      label: { pt: 'entre rodadas de coleta', en: 'between collection rounds' },
    },
  ],
  stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Cloudflare', 'Web Push'],
  hero: {
    src: '/work/setupbarato/hero.webp',
    alt: {
      pt: 'Topo da página inicial do SetupBarato em azul-marinho, com o título “Descubra qual PC montar” e um radar com contadores ao vivo',
      en: 'SetupBarato homepage hero on dark navy, with the headline about which PC to build and a radar showing live counters',
    },
  },
  caseStudy: {
    role: {
      pt: 'Criação e desenvolvimento: produto, coleta de dados, backend, front-end, extensão e infraestrutura',
      en: 'Creator and developer: product, data collection, backend, front-end, browser extension and infrastructure',
    },
    intro: {
      pt: 'Criei o SetupBarato para responder à pergunta que a página da loja não responde: esse preço é bom mesmo? O site coleta preços de 35 lojas em rodadas com 90 minutos de intervalo, guarda o histórico de preço dos anúncios e usa esses dados para julgar o preço, montar um PC compatível e avisar quando vale comprar.',
      en: 'I built SetupBarato to answer the question a store page never does: is this price actually good? The site collects prices from 35 stores in rounds 90 minutes apart, keeps price history for its listings and uses that data to judge the price, build a compatible PC and tell you when it is worth buying.',
    },
    problem: {
      pt: [
        'Quem compra hardware no Brasil tem dezenas de lojas para olhar, e o mesmo item aparece em várias delas com preços e parcelamentos diferentes. Comparar à mão toma tempo e fica desatualizado rápido: só nas últimas 24 horas, o radar registrou 2,7 mil mudanças de preço.',
        'O “De/Por” da loja também não ajuda. O “De R$” riscado pode ser um preço que o produto não pratica há meses, e sem histórico não dá para saber se o desconto é real.',
        'E o preço é só metade da conta. Uma peça barata pode não ser compatível com o resto ou virar gargalo. Como o próprio site diz: montar um PC barato começa pelo uso, não pela peça em promoção.',
      ],
      en: [
        'Hardware buyers in Brazil have dozens of stores to check, and the same item shows up in several of them with different prices and installment plans. Comparing by hand takes time and goes stale fast: in the last 24 hours alone, the radar logged 2.7k price changes.',
        'The store’s “was/now” pricing doesn’t help either. The struck-through “De R$” price may be one the product hasn’t sold at in months, and without history there is no way to tell whether the discount is real.',
        'And price is only half the problem. A cheap part may not fit the rest of the build, or may become the bottleneck. As the site puts it: a cheap PC starts with what you will use it for, not with the part on sale.',
      ],
    },
    features: [
      {
        title: { pt: 'Comparação entre lojas', en: 'Cross-store comparison' },
        body: {
          pt: 'O mesmo item aparece lado a lado nas lojas com correspondência segura, com a oferta disponível mais barata primeiro. Cada preço mostra a data e a hora em que foi coletado.',
          en: 'The same item is shown side by side across every store with a safe match, cheapest available offer first. Each price shows the date and time it was collected.',
        },
      },
      {
        title: { pt: 'Histórico e veredito de preço', en: 'Price history and verdict' },
        body: {
          pt: 'Gráficos por anúncio e por modelo, de 30 dias ao histórico completo, com linhas de preço à vista e parcelado. Um selo diz se o preço está bom, normal ou caro frente aos últimos 90 dias.',
          en: 'Charts per listing and per model, from 30 days to all time, with separate cash and installment lines. A badge says whether the price is good, normal or expensive against the last 90 days.',
        },
      },
      {
        title: { pt: 'Montar PC com IA', en: 'AI-assisted PC builder' },
        body: {
          pt: 'A pessoa descreve o uso e o orçamento e recebe uma configuração compatível com preços reais do catálogo, conferindo socket, geração de DDR, formato da placa-mãe e do gabinete e potência da fonte. Para 16 jogos, mostra faixas de FPS e deixa claro quando o número é estimativa, não medição.',
          en: 'You describe the use and the budget and get a compatible build priced from the live catalog, with socket, DDR generation, motherboard and case form factor and PSU wattage checked. For 16 games it shows FPS ranges and says plainly when a number is an estimate, not a measurement.',
        },
      },
      {
        title: { pt: 'Analisar PC pronto', en: 'Prebuilt PC check' },
        body: {
          pt: 'Separa em peças o anúncio de um PC montado e compara o preço com o custo estimado de montar um conjunto equivalente. Colar um link da Pichau, TerabyteShop ou Shopee já começa o monitoramento.',
          en: 'Breaks a prebuilt PC listing into parts and compares its price with the estimated cost of building an equivalent set. Pasting a Pichau, TerabyteShop or Shopee link starts tracking it.',
        },
      },
      {
        title: { pt: 'Extensão para Chrome e Edge', en: 'Chrome and Edge extension' },
        body: {
          pt: 'Mostra na página do produto da loja um cartão com o veredito, o aviso de “De R$” inflado, a loja mais barata e a mínima de 90 dias. Roda em Shadow DOM e, sem alerta criado, só a URL e o título do produto saem do navegador.',
          en: 'Adds a card to the store’s product page with the verdict, an inflated “De R$” warning, the cheapest store and the 90-day low. It renders in Shadow DOM and, unless you set an alert, only the product URL and title leave the browser.',
        },
      },
      {
        title: { pt: 'Custo-benefício e índice de preços', en: 'Value rankings and price index' },
        body: {
          pt: 'Rankings de placas de vídeo e processadores em R$ por 1.000 pontos no PassMark, e um índice semanal de preços em 6 categorias de hardware.',
          en: 'GPU and CPU rankings in R$ per 1,000 PassMark points, plus a weekly price index across 6 hardware categories.',
        },
      },
    ],
    pipeline: [
      {
        title: { pt: 'Coleta', en: 'Collection' },
        body: {
          pt: 'Os preços vêm da página do anúncio ou da API oficial da loja, em rodadas: quando uma termina, a próxima começa 90 minutos depois. De cada oferta saem o preço à vista, o parcelado (quando a loja informa) e o estoque.',
          en: 'Prices come from each store’s product page or official API, in rounds: when one ends, the next starts 90 minutes later. Each offer yields the cash price, the installment price when the store lists one, and stock status.',
        },
      },
      {
        title: { pt: 'Filtros', en: 'Filtering' },
        body: {
          pt: 'Anúncios usados, recondicionados ou open box saem pelo título, e oferta sem confirmação há mais de 3 dias deixa a comparação. Um preço 10 vezes acima ou abaixo da mediana do próprio anúncio é tratado como erro de cadastro.',
          en: 'Used, refurbished and open-box listings are dropped by title, and offers unconfirmed for more than 3 days leave the comparison. A price 10x above or below the listing’s own median is treated as a catalog error.',
        },
      },
      {
        title: { pt: 'Correspondência', en: 'Matching' },
        body: {
          pt: 'Cada anúncio é ligado ao seu modelo, como “RX 580 8GB”, com marcas e versões separadas. Quando um anúncio cai no produto errado, o “Reportar problema” recebe o aviso “É outro produto ou versão”.',
          en: 'Each listing is tied to its model, such as “RX 580 8GB”, with brands and versions kept apart. When a listing lands on the wrong product, “Reportar problema” takes a “different product or version” report.',
        },
      },
      {
        title: { pt: 'Histórico', en: 'History' },
        body: {
          pt: 'Os preços coletados formam o histórico de cada anúncio; na página do modelo, vale o menor preço do dia entre as lojas. A Amazon é a exceção: pelas regras do programa de afiliados, o preço dela não entra no histórico.',
          en: 'Collected prices build each listing’s history; on the model page, the series is the lowest price of the day across stores. Amazon is the exception: its affiliate program rules keep its prices out of the history.',
        },
      },
      {
        title: { pt: 'Veredito', en: 'Verdict' },
        body: {
          pt: 'O preço de hoje é comparado com os últimos 90 dias: “Bom preço” até 8% acima da mínima, “Caro” mais de 8% acima da mediana e “Sem base” com menos de 5 pontos.',
          en: 'Today’s price is checked against the last 90 days: “Bom preço” (good price) up to 8% above the low, “Caro” (expensive) more than 8% above the median, and “Sem base” (no baseline) with fewer than 5 data points.',
        },
      },
      {
        title: { pt: 'Alertas', en: 'Alerts' },
        body: {
          pt: 'Sem conta, o aviso chega como notificação do navegador; por e-mail (código de 6 dígitos, sem senha) ou pelo Telegram, também avisa quando o produto volta ao estoque. Nos modelos vendidos em várias lojas, um alerta pode acompanhar todas e avisar com a oferta mais barata.',
          en: 'With no account, alerts arrive as browser notifications; by email (6-digit code, no password) or on Telegram, they also fire when a product is back in stock. For models sold in several stores, one alert can watch all of them and point to the cheapest offer.',
        },
      },
    ],
    decisions: [
      {
        title: { pt: 'Sem histórico suficiente, sem veredito', en: 'Not enough history, no verdict' },
        body: {
          pt: 'O selo de preço só aparece com pelo menos 5 pontos nos últimos 90 dias; abaixo disso, a oferta fica como “Sem base”. O selo “Menor preço desde…” é mais exigente: pede 60 dias de histórico e variação acima de 2%, porque um preço parado está sempre “no menor preço”. Anúncios novos passam um tempo sem selo, mas nenhum selo afirma o que os dados ainda não sustentam.',
          en: 'The price badge only appears with at least 5 data points in the last 90 days; below that, the offer is marked “Sem base” (no baseline). The “lowest since…” badge asks for more: 60 days of history and more than 2% variation, because a price that never moves is always “at its lowest”. New listings go without a badge for a while, but no badge claims more than the data supports.',
        },
      },
      {
        title: { pt: 'A mediana decide, não o pico', en: 'The median decides, not the spike' },
        body: {
          pt: '“Caro” quer dizer mais de 8% acima da mediana de 90 dias: uma oferta relâmpago ou um pico isolado não arrastam essa referência. Um preço 10 vezes acima ou abaixo da mediana do próprio anúncio é tratado como erro de cadastro e fica fora do gráfico e do selo. Em troca, uma mudança real de patamar leva mais tempo para aparecer na mediana.',
          en: '“Caro” (expensive) means more than 8% above the 90-day median, so a flash sale or an isolated spike can’t drag the reference around. A price 10x above or below the listing’s own median is treated as a catalog error and kept out of the chart and the badge. The trade-off is that a real shift in price level takes longer to show up in the median.',
        },
      },
      {
        title: { pt: 'Preço sem data não é preço', en: 'A price without a timestamp is not a price' },
        body: {
          pt: 'Toda oferta mostra a data e a hora da última coleta. Oferta que a coleta não confirma há mais de 3 dias sai das buscas, das comparações e das vitrines, para um preço antigo não parecer de hoje. A comparação perde ofertas quando uma loja atrasa, mas o que aparece é recente.',
          en: 'Every offer shows the date and time of its last collection. An offer the collector hasn’t confirmed in more than 3 days drops out of search, comparisons and listings, so an old price never passes for today’s. Comparisons lose offers when a store falls behind, but whatever is shown is fresh.',
        },
      },
      {
        title: {
          pt: 'A regra da loja vem antes do gráfico completo',
          en: 'The store’s rules come before a complete chart',
        },
        body: {
          pt: 'O Programa de Associados da Amazon não permite guardar o preço por mais de 24 horas nem usá-lo em histórico ou alerta. Por isso a Amazon entra na comparação com o preço atual, mas sem gráfico, sem selo e sem alerta, e sai das buscas se não for coletada de novo em 24 horas. É a loja com mais ofertas acompanhadas, 26,2 mil, e mesmo assim fica com a versão mais simples do produto.',
          en: 'The Amazon Associates Program doesn’t allow storing its prices for more than 24 hours or using them in history or alerts. So Amazon joins comparisons with its current price but gets no chart, badge or alert, and drops out of search if it isn’t collected again within 24 hours. It is the store with the most tracked offers, 26.2k, and still gets the simplest version of the product.',
        },
      },
      {
        title: {
          pt: 'Recomendação estável vale mais que o benchmark mais novo',
          en: 'Stable recommendations beat the newest benchmark',
        },
        body: {
          pt: 'Nas placas de vídeo, o Montar PC usa um índice próprio de desempenho em jogos, congelado nos valores de 29 de junho de 2026, em vez de seguir cada novo retrato do PassMark. Assim, a mesma pergunta não recebe outra montagem só porque uma pontuação mudou. O custo é que o índice do montador não acompanha sozinho cada nova medição.',
          en: 'For graphics cards, the PC builder uses its own gaming performance index, frozen at its June 29, 2026 values, instead of following every new PassMark snapshot. The same question doesn’t get a different build just because a score moved. The cost is that the builder’s index doesn’t pick up new measurements on its own.',
        },
      },
    ],
    numbers: [
      {
        value: { pt: '~95 mil', en: '~95k' },
        label: { pt: 'produtos monitorados', en: 'products tracked' },
        note: {
          pt: '94,8 mil na página inicial e 94.767 na página de status.',
          en: '94.8k on the homepage and 94,767 on the status page.',
        },
      },
      {
        value: { pt: '35', en: '35' },
        label: { pt: 'lojas ativas', en: 'active stores' },
        note: {
          pt: 'De grandes marketplaces a lojas especializadas em hardware.',
          en: 'From large marketplaces to specialist hardware stores.',
        },
      },
      {
        value: { pt: '60 mil+', en: '60k+' },
        label: { pt: 'ofertas com estoque e preço atualizado', en: 'in-stock offers with fresh prices' },
        note: {
          pt: 'Página “Como funciona”: de 60.833 a 60.878 na manhã da leitura. Usados, esgotados e ofertas sem confirmação recente ficam fora.',
          en: 'From the “how it works” page: 60,833 to 60,878 on the morning of the reading. Used, out-of-stock and stale offers are excluded.',
        },
      },
      {
        value: { pt: '90 min', en: '90 min' },
        label: { pt: 'entre rodadas de coleta', en: 'between collection rounds' },
        note: {
          pt: 'A próxima rodada começa 90 minutos depois do fim da anterior.',
          en: 'The next round starts 90 minutes after the previous one ends.',
        },
      },
      {
        value: { pt: '2,7 mil', en: '2.7k' },
        label: { pt: 'mudanças de preço em 24 horas', en: 'price changes in 24 hours' },
        note: {
          pt: 'Contador da página inicial.',
          en: 'Homepage counter.',
        },
      },
      {
        value: { pt: '34 mil+', en: '34k+' },
        label: { pt: 'URLs nos sitemaps', en: 'URLs in the sitemaps' },
        note: {
          pt: '13.827 páginas de modelo e 20.251 de produto, contadas no sitemap.xml.',
          en: '13,827 model pages and 20,251 product pages, counted from sitemap.xml.',
        },
      },
      {
        value: { pt: '2.090', en: '2,090' },
        label: { pt: 'modelos no índice semanal', en: 'models in the weekly index' },
        note: {
          pt: 'Modelos vendidos em 2 ou mais lojas, em 6 categorias.',
          en: 'Models sold in 2 or more stores, across 6 categories.',
        },
      },
    ],
    gallery: [
      {
        src: '/work/setupbarato/historico-de-precos.webp',
        alt: {
          pt: 'Página da RX 580 8GB com ofertas da Enifler, Carrefour e Londritech e gráfico de 90 dias com preço à vista e parcelado',
          en: 'RX 580 8GB model page with offers from Enifler, Carrefour and Londritech and a 90-day chart of cash and installment prices',
        },
        caption: {
          pt: 'Cada oferta mostra quando foi coletada, e o gráfico de 90 dias dá o contexto: mínima de R$ 818,39 na KaBuM! em 22/10, mediana de R$ 902,37 e variação de -22,6% no período.',
          en: 'Every offer shows when it was collected, and the 90-day chart adds context: a R$ 818.39 low at KaBuM! on Oct 22, a R$ 902.37 median and a -22.6% change over the period.',
        },
      },
      {
        src: '/work/setupbarato/montar-pc.webp',
        alt: {
          pt: 'Resultado do Montar PC “PC gamer 1080p forte”: 7 peças de 5 lojas, do Ryzen 5 5500 à RX 7600, somando R$ 4.587,95',
          en: 'Montar PC result “PC gamer 1080p forte”: 7 parts from 5 stores, from a Ryzen 5 5500 to an RX 7600, totaling R$ 4,587.95',
        },
        caption: {
          pt: 'Com R$ 5.000 de orçamento, o montador fecha um PC compatível com a oferta mais barata de cada peça em 5 lojas: R$ 4.587,95, ou 91,8% do orçamento.',
          en: 'With a R$ 5,000 budget, the builder puts together a compatible PC from the cheapest offer for each part across 5 stores: R$ 4,587.95, or 91.8% of the budget.',
        },
      },
      {
        src: '/work/setupbarato/extensao.webp',
        alt: {
          pt: 'Página da extensão para Chrome e Edge com cartão simulado numa loja: veredito “Bom preço”, aviso de “De R$” inflado e preços',
          en: 'Chrome and Edge extension page with a mock in-store card: “Bom preço” verdict, inflated “De R$” warning and store prices',
        },
        caption: {
          pt: 'A extensão leva o veredito para a hora da compra: diz se o preço é bom, aponta o “De R$” inflado e mostra a loja mais barata e a mínima de 90 dias sem abrir outra aba.',
          en: 'The extension brings the verdict to the moment of purchase: it says whether the price is good, flags an inflated “De R$” and shows the cheapest store and the 90-day low without opening another tab.',
        },
      },
    ],
    asOf: {
      pt: 'Números públicos do site, lidos em 28 de outubro de 2026.',
      en: 'Public numbers from the live site, as of October 28, 2026.',
    },
  },
};
