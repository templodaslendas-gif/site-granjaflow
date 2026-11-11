import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { ContactCta } from "@/app/_components/contact-cta";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem somos | GranjaFlow e FFR do Brasil Technology",
  description: "Conheça o propósito do GranjaFlow, plataforma desenvolvida pela FFR do Brasil Technology para apoiar a gestão na suinocultura.",
  alternates: { canonical: "/quem-somos" },
  openGraph: { title: "Quem somos | GranjaFlow", description: "Tecnologia desenvolvida para organizar a rotina e os números da granja.", url: absoluteUrl("/quem-somos") },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": absoluteUrl("/quem-somos#page"),
    name: "Quem somos",
    url: absoluteUrl("/quem-somos"),
    description: metadata.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />
      <div id="conteudo" className="inner-page">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Quem somos" }]} />
        <header className="about-hero">
          <div>
            <span className="eyebrow">TECNOLOGIA + CAMPO + RESULTADO</span>
            <h1>Tecnologia para organizar decisões na suinocultura</h1>
            <p>O GranjaFlow foi criado para reunir produção, consumo, custos e financeiro em uma visão conectada à rotina da granja</p>
          </div>
          <div className="about-brand-card">
            <Image src="/brand/granjaflow-logo.png" alt="GranjaFlow" width={640} height={640} sizes="(max-width: 760px) 72vw, 380px" priority />
          </div>
        </header>

        <section className="about-grid">
          <article><span>01</span><h2>O problema que organizamos</h2><p>Informações produtivas e financeiras costumam ficar separadas entre cadernos, mensagens e planilhas. O GranjaFlow reúne esses registros no contexto do lote.</p></article>
          <article><span>02</span><h2>Como pensamos o produto</h2><p>A tecnologia deve facilitar o registro no campo e transformar dados da rotina em informações que o produtor consiga consultar e compreender.</p></article>
          <article><span>03</span><h2>Quem desenvolve</h2><p>O GranjaFlow é desenvolvido pela FFR do Brasil Technology, com foco em soluções digitais aplicadas a problemas reais de operação e gestão.</p></article>
        </section>

        <section className="about-principles">
          <div><span className="eyebrow">PRINCÍPIOS</span><h2>Sem promessa fácil, sem número inventado</h2></div>
          <ul>
            <li>Capacidades apresentadas com linguagem direta</li>
            <li>Demonstrações identificadas como ilustrativas</li>
            <li>Decisões apoiadas por registros organizados</li>
            <li>Evolução do produto sem anunciar o que ainda não está disponível</li>
          </ul>
        </section>

        <section className="page-cta"><ContactCta /></section>
      </div>
    </SiteFrame>
  );
}
