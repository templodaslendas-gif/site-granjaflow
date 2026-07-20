import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Ecosystem } from "@/components/ecosystem";
import { RolePanels } from "@/components/role-panels";
import { Workflow } from "@/components/workflow";
import { FeatureGroups } from "@/components/feature-groups";
import { TrustSections } from "@/components/trust-sections";
import { RoadmapFaq } from "@/components/roadmap-faq";
import { Footer } from "@/components/footer";
import { SiteEffects } from "@/components/site-effects";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://granjaflow.com.br/#organization", name: "GranjaFlow", url: "https://granjaflow.com.br", founder: { "@type": "Organization", name: "FFR do Brasil Technology" } },
      { "@type": "SoftwareApplication", name: "GranjaFlow", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Plataforma digital para gestão integrada de granjas e produção animal.", audience: { "@type": "Audience", audienceType: "Integradoras, técnicos e produtores rurais" }, offers: { "@type": "Offer", availability: "https://schema.org/OnlineOnly" } },
      { "@type": "FAQPage", mainEntity: [
        ["O GranjaFlow substitui o sistema da integradora?", "Não necessariamente. O GranjaFlow pode complementar os sistemas existentes e organizar a rotina operacional do campo."],
        ["O produtor consegue usar pelo celular?", "Sim. A interface responsiva permite realizar registros diários pelo celular."],
        ["O sistema funciona sem internet?", "A operação offline com sincronização posterior está prevista no roadmap da plataforma."],
      ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };
  return (
    <main id="conteudo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Hero />
      <Problem />
      <Ecosystem />
      <RolePanels />
      <Workflow />
      <FeatureGroups />
      <TrustSections />
      <RoadmapFaq />
      <Footer />
      <SiteEffects />
    </main>
  );
}
