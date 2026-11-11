export type FaqItem = {
  question: string;
  answer: string;
};

export type ResourceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourcePage = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  sections: ResourceSection[];
  faqs: FaqItem[];
};

export type GuidePage = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  sections: ResourceSection[];
  faqs: FaqItem[];
};

export const resources: ResourcePage[] = [
  {
    slug: "gestao-de-lotes",
    navLabel: "Gestão de lotes",
    eyebrow: "Produção organizada",
    title: "Gestão de lotes de suínos com histórico e visão do ciclo",
    description: "Organize alojamento, plantel, animais vivos e histórico de cada lote de suínos em uma visão centralizada.",
    intro: "Cada lote reúne acontecimentos produtivos e financeiros que precisam ser entendidos no mesmo contexto. O GranjaFlow organiza essa rotina para o produtor acompanhar o ciclo sem depender de informações espalhadas.",
    image: "/images/pig-farm-4636983.jpg",
    imageAlt: "Instalação de suinocultura com lotes organizados",
    highlights: ["Alojamento e plantel", "Animais vivos", "Histórico do lote", "Visão do ciclo"],
    sections: [
      {
        title: "Um ponto de partida para toda a operação",
        paragraphs: [
          "O lote funciona como o contexto principal da produção. É nele que mortalidade, consumo de ração, movimentações financeiras e indicadores passam a fazer sentido em conjunto.",
          "Com uma base organizada, o produtor consegue consultar o que aconteceu ao longo do ciclo e reduzir a dependência de cadernos, mensagens e planilhas isoladas.",
        ],
      },
      {
        title: "O que acompanhar",
        paragraphs: ["A visão do lote ajuda a manter os principais registros produtivos relacionados entre si."],
        bullets: ["Animais alojados", "Animais vivos", "Movimentações do ciclo", "Mortalidade registrada", "Ração consumida", "Custos associados ao lote"],
      },
      {
        title: "Histórico para comparar decisões",
        paragraphs: [
          "Um registro organizado não serve apenas para olhar o dia atual. Ele forma uma base histórica para revisar o desempenho do lote e entender quais decisões merecem ser repetidas ou corrigidas.",
        ],
      },
    ],
    faqs: [
      { question: "O lote reúne informações produtivas e financeiras?", answer: "Sim. A proposta é manter produção, consumo e financeiro relacionados ao mesmo contexto de acompanhamento." },
      { question: "Posso consultar o histórico?", answer: "O GranjaFlow organiza registros e indicadores para que o histórico do lote possa ser acompanhado ao longo do ciclo." },
      { question: "Consigo acessar pelo celular?", answer: "Sim. O site apresenta o uso responsivo do GranjaFlow em celular, tablet e computador." },
    ],
  },
  {
    slug: "controle-de-racao",
    navLabel: "Controle de ração",
    eyebrow: "Estoque e consumo",
    title: "Controle de ração, estoque, compras e consumo na granja",
    description: "Acompanhe compras, estoque e consumo de ração sem misturar movimentação física, custo do lote e pagamento.",
    intro: "Ração comprada, ração consumida e valor pago são acontecimentos diferentes. Separar essas informações ajuda a compreender o estoque, o consumo do lote e o movimento do caixa com mais clareza.",
    image: "/images/recurso-racao.webp",
    imageAlt: "Controle de ração no GranjaFlow",
    highlights: ["Compras", "Estoque", "Consumo", "Visão financeira"],
    sections: [
      {
        title: "Compra não é o mesmo que consumo",
        paragraphs: [
          "Quando a ração chega à propriedade, existe uma entrada no estoque. O custo produtivo aparece conforme essa ração é consumida pelo lote, enquanto o pagamento segue o prazo financeiro negociado.",
          "Registrar cada etapa evita tratar todo o valor comprado como se tivesse sido consumido no mesmo dia.",
        ],
      },
      {
        title: "Três visões que precisam permanecer separadas",
        paragraphs: ["O GranjaFlow organiza a rotina de ração em visões complementares."],
        bullets: ["Compra: entrada de ração e valor adquirido", "Estoque: quantidade disponível", "Consumo: quantidade utilizada pelo lote", "Pagamento: efeito da compra sobre o caixa"],
      },
      {
        title: "Informação útil para o lote e para o caixa",
        paragraphs: [
          "Ao separar as etapas, o produtor consegue acompanhar o consumo relacionado ao desempenho do lote sem perder a visão das obrigações financeiras da granja.",
        ],
      },
    ],
    faqs: [
      { question: "O GranjaFlow separa compra e consumo de ração?", answer: "Sim. Compra, estoque, consumo e pagamento são apresentados como acontecimentos diferentes da operação." },
      { question: "Por que controlar o estoque?", answer: "O estoque mostra o que continua disponível e evita que toda compra seja considerada consumo imediato do lote." },
      { question: "O consumo pode ser relacionado ao lote?", answer: "Sim. O acompanhamento por lote ajuda a interpretar consumo, custos e resultado dentro do mesmo ciclo produtivo." },
    ],
  },
  {
    slug: "controle-de-mortalidade",
    navLabel: "Mortalidade",
    eyebrow: "Registro de campo",
    title: "Controle de mortalidade de suínos relacionado ao lote",
    description: "Registre mortalidade, causas e evidências disponíveis para acompanhar o impacto sobre os animais vivos e o lote.",
    intro: "A mortalidade altera o plantel vivo, o custo por animal e a leitura do desempenho do lote. Por isso, o registro precisa estar ligado ao momento e ao contexto em que o evento ocorreu.",
    image: "/images/pig-farm-2252541.jpg",
    imageAlt: "Suínos acompanhados dentro da granja",
    highlights: ["Registro por lote", "Causas", "Evidências", "Animais vivos"],
    sections: [
      {
        title: "Registrar o evento onde ele acontece",
        paragraphs: [
          "O uso pelo celular facilita o registro durante a rotina de campo. A informação deixa de depender da memória ou de uma anotação que ainda precisará ser transferida para outro lugar.",
        ],
      },
      {
        title: "Mais contexto para entender o lote",
        paragraphs: ["Quando disponíveis na operação, causas e evidências complementam o registro e ajudam a revisar o que aconteceu."],
        bullets: ["Data do registro", "Quantidade de animais", "Causa informada", "Observações e evidências disponíveis", "Atualização dos animais vivos"],
      },
      {
        title: "Impacto econômico visível",
        paragraphs: [
          "A redução de animais vivos muda a distribuição dos custos acumulados. Manter a mortalidade atualizada contribui para uma leitura mais coerente do custo por animal vivo.",
        ],
      },
    ],
    faqs: [
      { question: "A mortalidade fica relacionada ao lote?", answer: "Sim. O registro é apresentado dentro do contexto do lote acompanhado." },
      { question: "É possível registrar causas e evidências?", answer: "A comunicação pública apresenta o registro de causas e evidências quando esses recursos estão disponíveis na operação." },
      { question: "A mortalidade altera os indicadores?", answer: "Ela altera a quantidade de animais vivos e influencia a leitura de custos e desempenho do lote." },
    ],
  },
  {
    slug: "controle-de-custos",
    navLabel: "Controle de custos",
    eyebrow: "Resultado do lote",
    title: "Controle de custos da granja por lote e por animal",
    description: "Reúna produção, consumo e financeiro para acompanhar custo do lote, custo por alojado e custo por animal vivo.",
    intro: "Saber quanto foi gasto em itens separados não responde sozinho quanto o lote está custando. O GranjaFlow reúne os registros da operação para formar uma visão econômica ligada ao ciclo produtivo.",
    image: "/images/recurso-relatorios.webp",
    imageAlt: "Relatórios e indicadores de custos do GranjaFlow",
    highlights: ["Custo do lote", "Custo por alojado", "Custo por animal vivo", "Histórico"],
    sections: [
      {
        title: "Quanto cada suíno está custando hoje",
        paragraphs: [
          "O custo por animal muda ao longo do ciclo. Consumo, mortalidade e novas movimentações alteram o valor acumulado e a quantidade de animais sobre a qual ele é distribuído.",
          "Acompanhar essa evolução permite perceber desvios antes do encerramento do lote.",
        ],
      },
      {
        title: "Indicadores com significados diferentes",
        paragraphs: ["Os indicadores precisam ser analisados em conjunto, sem tratar números distintos como equivalentes."],
        bullets: ["Custo do lote: total acumulado no contexto acompanhado", "Custo por alojado: relação com a quantidade inicialmente alojada", "Custo por animal vivo: relação com os animais que permanecem no lote"],
      },
      {
        title: "Decidir antes do fechamento",
        paragraphs: [
          "A visão durante o ciclo não substitui a análise técnica, contábil ou financeira. Ela ajuda o produtor a organizar os dados e identificar o que precisa ser investigado com mais atenção.",
        ],
      },
    ],
    faqs: [
      { question: "O custo por alojado e por animal vivo é igual?", answer: "Não. Um utiliza a quantidade alojada como referência e o outro considera os animais que permanecem vivos no lote." },
      { question: "Os números apresentados no site são resultados de clientes?", answer: "Não. Os números do painel público são identificados como valores ilustrativos para demonstrar os indicadores." },
      { question: "O GranjaFlow substitui acompanhamento contábil?", answer: "Não. A plataforma apoia a organização e a visualização da gestão, sem substituir orientação contábil ou financeira profissional." },
    ],
  },
  {
    slug: "financeiro-da-granja",
    navLabel: "Financeiro",
    eyebrow: "Caixa organizado",
    title: "Gestão financeira da granja ligada à produção",
    description: "Organize contas a pagar e receber, movimentações e fluxo de caixa sem perder a relação com os lotes.",
    intro: "O financeiro mostra o que entrou ou saiu do caixa. O resultado econômico mostra o que pertence ao desempenho do lote. A separação ajuda a evitar conclusões baseadas apenas no saldo do dia.",
    image: "/images/pig-farm-4636976.jpg",
    imageAlt: "Rotina de gestão financeira da granja",
    highlights: ["Contas a pagar", "Contas a receber", "Fluxo de caixa", "Resultado econômico"],
    sections: [
      {
        title: "Fluxo de caixa e resultado econômico",
        paragraphs: [
          "Um pagamento pode acontecer antes ou depois do consumo relacionado ao lote. Por isso, caixa e resultado respondem a perguntas diferentes e devem permanecer visíveis separadamente.",
        ],
      },
      {
        title: "Rotina financeira centralizada",
        paragraphs: ["A organização financeira reúne compromissos e movimentações que antes poderiam ficar distribuídos entre anotações e planilhas."],
        bullets: ["Contas a pagar", "Contas a receber", "Movimentações do caixa", "Custos relacionados aos lotes", "Consulta do histórico"],
      },
      {
        title: "Produção e financeiro no mesmo contexto",
        paragraphs: [
          "Ao relacionar a rotina produtiva com as movimentações financeiras, o produtor ganha uma visão mais completa da granja sem transformar o sistema em substituto da contabilidade.",
        ],
      },
    ],
    faqs: [
      { question: "O GranjaFlow possui contas a pagar e receber?", answer: "A comunicação pública apresenta o controle de contas a pagar, contas a receber e movimentações financeiras." },
      { question: "Fluxo de caixa e resultado são a mesma coisa?", answer: "Não. Fluxo de caixa acompanha pagamentos e recebimentos; resultado econômico considera o que pertence ao desempenho da operação." },
      { question: "O financeiro pode ser consultado junto ao lote?", answer: "A proposta do GranjaFlow é manter produção, custos e financeiro dentro de um contexto organizado de gestão." },
    ],
  },
  {
    slug: "relatorios-e-indicadores",
    navLabel: "Relatórios",
    eyebrow: "Informação consolidada",
    title: "Relatórios e indicadores para acompanhar a granja",
    description: "Consulte informações consolidadas de lotes, mortalidade, ração, custos e financeiro para apoiar decisões.",
    intro: "Indicadores são úteis quando partem de registros consistentes e mantêm o contexto do lote. O GranjaFlow reúne as informações para facilitar consultas e revisões da operação.",
    image: "/images/recurso-relatorios.webp",
    imageAlt: "Relatórios e indicadores do GranjaFlow",
    highlights: ["Indicadores do lote", "Histórico", "Custos", "Visão consolidada"],
    sections: [
      {
        title: "Do registro diário à visão consolidada",
        paragraphs: [
          "O relatório começa na qualidade do registro feito no campo. Mortalidade, consumo e movimentações financeiras precisam estar atualizados para que os indicadores representem a realidade informada.",
        ],
      },
      {
        title: "O que observar em conjunto",
        paragraphs: ["Nenhum indicador isolado explica toda a operação. A leitura melhora quando produção e economia são analisadas lado a lado."],
        bullets: ["Animais alojados e vivos", "Mortalidade registrada", "Ração consumida", "Custo acumulado", "Custo por animal", "Fluxo de caixa e resultado"],
      },
      {
        title: "Histórico que apoia novas decisões",
        paragraphs: [
          "A consulta de períodos e lotes anteriores ajuda a identificar padrões, revisar rotinas e preparar perguntas mais objetivas para a equipe técnica e financeira.",
        ],
      },
    ],
    faqs: [
      { question: "Os relatórios dependem dos registros realizados?", answer: "Sim. A utilidade dos indicadores depende da consistência e da atualização das informações registradas na operação." },
      { question: "É possível consultar histórico?", answer: "O GranjaFlow apresenta indicadores e histórico como parte da organização da gestão." },
      { question: "Um indicador sozinho é suficiente para decidir?", answer: "Não. Indicadores devem ser analisados em conjunto e considerando o contexto produtivo, sanitário e financeiro." },
    ],
  },
];

export const guides: GuidePage[] = [
  {
    slug: "como-acompanhar-custo-por-suino",
    category: "Custos da produção",
    title: "Como acompanhar o custo por suíno durante o lote",
    description: "Entenda a diferença entre custo do lote, custo por alojado e custo por animal vivo e como acompanhar sua evolução.",
    intro: "O custo por suíno não é um número fixo calculado apenas no encerramento. Ele muda conforme o lote consome recursos, recebe novos lançamentos e tem alteração na quantidade de animais vivos.",
    readingTime: "Leitura de 6 minutos",
    sections: [
      {
        title: "Comece pelo custo acumulado do lote",
        paragraphs: [
          "O primeiro passo é reunir os custos que pertencem ao ciclo acompanhado. O critério utilizado deve ser consistente ao longo do tempo para permitir comparação.",
          "Ração consumida, itens relacionados à produção e outras movimentações reconhecidas no lote formam a base do acompanhamento econômico.",
        ],
      },
      {
        title: "Custo por alojado e custo por animal vivo",
        paragraphs: [
          "O custo por alojado divide o custo acumulado pela quantidade inicialmente alojada. O custo por animal vivo utiliza a quantidade que permanece viva no momento da consulta.",
          "Quando há mortalidade, os dois indicadores se afastam. Isso não significa que um esteja errado: eles respondem a perguntas diferentes.",
        ],
      },
      {
        title: "Acompanhe a evolução, não apenas o valor final",
        paragraphs: ["Registrar e consultar os indicadores durante o ciclo ajuda a perceber mudanças que merecem investigação."],
        bullets: ["Aumento inesperado do consumo", "Mortalidade acima do comportamento observado", "Novos custos sem classificação clara", "Diferença entre consumo produtivo e pagamento financeiro"],
      },
      {
        title: "Use o número como ponto de partida",
        paragraphs: [
          "O indicador organiza a conversa, mas não explica sozinho a causa. A análise deve considerar sanidade, manejo, alimentação, condições do lote e critérios financeiros adotados pela granja.",
        ],
      },
    ],
    faqs: [
      { question: "Qual indicador mostra o custo dos animais que permanecem no lote?", answer: "O custo por animal vivo utiliza como referência a quantidade de animais vivos no momento do cálculo." },
      { question: "A mortalidade aumenta o custo por animal vivo?", answer: "Mantido o mesmo custo acumulado, uma quantidade menor de animais vivos aumenta o valor distribuído por animal." },
    ],
  },
  {
    slug: "compra-consumo-pagamento-de-racao",
    category: "Controle de ração",
    title: "Compra, consumo e pagamento de ração não são a mesma coisa",
    description: "Veja por que separar estoque, consumo do lote e pagamento melhora a leitura produtiva e financeira da granja.",
    intro: "Uma compra de ração produz três efeitos em momentos diferentes: entrada física no estoque, consumo na produção e pagamento no financeiro. Misturar essas etapas distorce a visão do lote e do caixa.",
    readingTime: "Leitura de 5 minutos",
    sections: [
      {
        title: "Compra registra a entrada",
        paragraphs: [
          "A compra informa o que foi adquirido, em qual quantidade e valor. Nesse momento, parte ou todo o produto ainda pode permanecer disponível no estoque.",
        ],
      },
      {
        title: "Consumo pertence à rotina produtiva",
        paragraphs: [
          "O consumo mostra quanto da ração disponível foi utilizado pelo lote. É essa movimentação que ajuda a relacionar alimentação, estoque e custo produtivo.",
        ],
      },
      {
        title: "Pagamento movimenta o caixa",
        paragraphs: [
          "O pagamento pode ocorrer à vista, antes do consumo total, ou em uma data futura. Por isso, o fluxo de caixa não deve ser usado sozinho como medida do custo produtivo do dia.",
        ],
      },
      {
        title: "A separação evita três erros comuns",
        paragraphs: ["Manter cada etapa visível reduz interpretações equivocadas."],
        bullets: ["Considerar toda compra como consumo imediato", "Confundir estoque disponível com despesa futura", "Usar somente o pagamento para avaliar o resultado do lote"],
      },
    ],
    faqs: [
      { question: "Toda ração comprada vira custo do lote no mesmo dia?", answer: "Não necessariamente. A compra pode permanecer em estoque e ser consumida gradualmente pelo lote." },
      { question: "O pagamento define quando a ração foi consumida?", answer: "Não. A data do pagamento pertence ao fluxo de caixa; o consumo pertence à movimentação produtiva." },
    ],
  },
  {
    slug: "indicadores-para-acompanhar-um-lote",
    category: "Gestão de lotes",
    title: "Indicadores para acompanhar um lote de suínos",
    description: "Conheça indicadores produtivos e econômicos que ajudam a organizar o acompanhamento do lote de suínos.",
    intro: "Uma visão útil do lote combina quantidade de animais, mortalidade, consumo, custos e movimentações financeiras. O objetivo não é colecionar números, mas entender o que mudou e por quê.",
    readingTime: "Leitura de 7 minutos",
    sections: [
      {
        title: "Animais alojados e animais vivos",
        paragraphs: [
          "A quantidade alojada registra o ponto de partida. Os animais vivos mostram a situação atual e servem de referência para indicadores que mudam ao longo do ciclo.",
        ],
      },
      {
        title: "Mortalidade registrada",
        paragraphs: [
          "Além da quantidade, causas, datas e evidências disponíveis ajudam a contextualizar o evento. O registro também atualiza a leitura dos animais vivos.",
        ],
      },
      {
        title: "Ração comprada, disponível e consumida",
        paragraphs: [
          "Separar compra, estoque e consumo evita que uma única movimentação seja interpretada de maneiras diferentes na produção e no financeiro.",
        ],
      },
      {
        title: "Custos e caixa",
        paragraphs: ["A leitura econômica ganha clareza quando diferentes indicadores permanecem separados."],
        bullets: ["Custo acumulado do lote", "Custo por alojado", "Custo por animal vivo", "Contas a pagar e receber", "Fluxo de caixa", "Resultado econômico"],
      },
      {
        title: "Transforme o indicador em pergunta",
        paragraphs: [
          "Quando um número muda, a próxima etapa é investigar o contexto: registro incompleto, consumo, mortalidade, preço, manejo ou outro acontecimento da operação. O indicador direciona a análise; ele não substitui o conhecimento técnico.",
        ],
      },
    ],
    faqs: [
      { question: "Quais indicadores devem ser vistos em conjunto?", answer: "Animais vivos, mortalidade, consumo, custo do lote, custo por animal, fluxo de caixa e resultado econômico formam uma leitura complementar." },
      { question: "Mais indicadores sempre significam melhor gestão?", answer: "Não. Indicadores úteis são aqueles que têm registros consistentes e ajudam a responder perguntas reais da operação." },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
