import { absoluteUrl, SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: "GranjaFlow",
      url: SITE_URL,
      logo: absoluteUrl("/favicon-96x96.png"),
      email: "contato@granjaflow.com.br",
      telephone: "+55 45 99931-7831",
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "GranjaFlow",
      url: SITE_URL,
      inLanguage: "pt-BR",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
    {
      "@type": "SoftwareApplication",
      "@id": absoluteUrl("/#software"),
      name: "GranjaFlow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "pt-BR",
      url: absoluteUrl("/#granjaflow"),
      publisher: { "@id": absoluteUrl("/#organization") },
      description: "Software para gestão de granjas de suínos, com controle de lotes, mortalidade, ração, custos, financeiro e resultados.",
      featureList: [
        "Controle de lotes e plantel",
        "Registro de mortalidade",
        "Controle de ração e estoque",
        "Compras e consumo",
        "Contas a pagar e receber",
        "Custos por lote e por animal",
        "Resultado econômico e fluxo de caixa",
        "Indicadores e histórico",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/#duvidas"),
      mainEntity: [
        ["O GranjaFlow é somente para grandes produtores?", "Não, ele foi desenvolvido para o produtor que precisa organizar a operação e entender custos, consumo, financeiro e resultado do lote"],
        ["Para quem o GranjaFlow foi desenvolvido?", "Para produtores que administram a própria granja e precisam reunir produção, consumo, custos e financeiro em uma visão organizada"],
        ["Consigo usar pelo celular?", "Sim, a experiência é responsiva e foi pensada para registrar e consultar informações pelo celular, tablet e computador"],
        ["O sistema funciona sem internet?", "A operação atual depende de conexão, recursos offline ainda não são anunciados como disponíveis"],
        ["Como faço para contratar?", "Fale com a equipe pelo WhatsApp para conhecer a solução, esclarecer dúvidas e receber as condições comerciais vigentes"],
      ].map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
