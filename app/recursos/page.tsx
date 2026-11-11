import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { ContactCta } from "@/app/_components/contact-cta";
import { ArrowIcon } from "@/app/_components/icons";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { resources } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recursos para gestão de granja de suínos | GranjaFlow",
  description: "Conheça os recursos do GranjaFlow para lotes, mortalidade, ração, custos, financeiro, relatórios e indicadores da suinocultura.",
  alternates: { canonical: "/recursos" },
  openGraph: {
    title: "Recursos do GranjaFlow para gestão da suinocultura",
    description: "Produção, ração, custos e financeiro organizados em uma plataforma para a rotina da granja.",
    url: absoluteUrl("/recursos"),
  },
};

export default function ResourcesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/recursos#page"),
        name: "Recursos do GranjaFlow",
        url: absoluteUrl("/recursos"),
        description: metadata.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": absoluteUrl("/#website") },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: resources.map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: resource.navLabel,
            url: absoluteUrl(`/recursos/${resource.slug}`),
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Recursos", item: absoluteUrl("/recursos") },
        ],
      },
    ],
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />
      <div id="conteudo" className="inner-page">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Recursos" }]} />
        <header className="page-hero page-hero-centered">
          <span className="eyebrow">RECURSOS DO GRANJAFLOW</span>
          <h1>O que sua granja precisa acompanhar em um só lugar</h1>
          <p>Conheça como lotes, mortalidade, ração, custos e financeiro são organizados para formar uma visão mais clara da operação</p>
        </header>

        <section className="page-card-grid" aria-label="Recursos do GranjaFlow">
          {resources.map((resource) => (
            <article className="page-card" key={resource.slug}>
              <div className={`page-card-media${resource.image.includes("/recurso-") ? " page-card-media-contain" : ""}`}><Image src={resource.image} alt={resource.imageAlt} width={768} height={512} sizes="(max-width: 720px) 100vw, 50vw" /></div>
              <div className="page-card-copy">
                <span>{resource.eyebrow}</span>
                <h2>{resource.navLabel}</h2>
                <p>{resource.description}</p>
                <Link className="text-link" href={`/recursos/${resource.slug}`}>Entender este recurso <ArrowIcon /></Link>
              </div>
            </article>
          ))}
        </section>

        <section className="page-cta"><ContactCta /></section>
      </div>
    </SiteFrame>
  );
}
