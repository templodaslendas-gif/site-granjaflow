import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { ArrowIcon } from "@/app/_components/icons";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { guides } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conteúdos sobre gestão de granja e suinocultura | GranjaFlow",
  description: "Guias práticos sobre custos, ração, lotes e indicadores para organizar a gestão da granja de suínos.",
  alternates: { canonical: "/conteudos" },
  openGraph: { title: "Conteúdos GranjaFlow", description: "Informação prática para organizar produção, custos e resultados na suinocultura.", url: absoluteUrl("/conteudos") },
};

export default function ContentIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": absoluteUrl("/conteudos#page"),
    name: "Conteúdos GranjaFlow",
    url: absoluteUrl("/conteudos"),
    description: metadata.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": absoluteUrl("/#website") },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.title, url: absoluteUrl(`/conteudos/${guide.slug}`) })),
    },
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />
      <div id="conteudo" className="inner-page">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Conteúdos" }]} />
        <header className="page-hero page-hero-centered">
          <span className="eyebrow">CONTEÚDO PARA A ROTINA</span>
          <h1>Informação para entender melhor os números da granja</h1>
          <p>Guias diretos sobre produção, consumo, custos e indicadores, sem promessas exageradas e sem complicar a rotina</p>
        </header>

        <section className="guide-grid" aria-label="Guias do GranjaFlow">
          {guides.map((guide, index) => (
            <article className={`guide-card guide-card-${index + 1}`} key={guide.slug}>
              <span>{guide.category}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <small>{guide.readingTime}</small>
              <Link className="text-link" href={`/conteudos/${guide.slug}`}>Ler o guia <ArrowIcon /></Link>
            </article>
          ))}
        </section>

        <section className="content-principle">
          <div><span className="eyebrow">CONHECIMENTO APLICADO</span><h2>Conteúdo conectado ao que acontece no campo</h2></div>
          <p>Os materiais do GranjaFlow ajudam a organizar perguntas e interpretar informações da operação. Eles não substituem orientação veterinária, zootécnica, contábil ou financeira quando necessária.</p>
        </section>
      </div>
    </SiteFrame>
  );
}
