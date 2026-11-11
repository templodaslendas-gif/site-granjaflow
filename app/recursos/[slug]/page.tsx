import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { ContactCta } from "@/app/_components/contact-cta";
import { CheckIcon } from "@/app/_components/icons";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { getResource, resources } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  const url = `/recursos/${resource.slug}`;
  return {
    title: `${resource.title} | GranjaFlow`,
    description: resource.description,
    alternates: { canonical: url },
    openGraph: { title: resource.title, description: resource.description, url: absoluteUrl(url), type: "article" },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const pageUrl = absoluteUrl(`/recursos/${resource.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        name: resource.title,
        url: pageUrl,
        description: resource.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#software") },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Recursos", item: absoluteUrl("/recursos") },
          { "@type": "ListItem", position: 3, name: resource.navLabel, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: resource.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />
      <article id="conteudo" className="inner-page">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Recursos", href: "/recursos" }, { label: resource.navLabel }]} />

        <header className="detail-hero">
          <div className="detail-hero-copy">
            <span className="eyebrow">{resource.eyebrow}</span>
            <h1>{resource.title}</h1>
            <p>{resource.intro}</p>
            <a className="button" href="#falar-com-equipe">Conhecer o GranjaFlow</a>
          </div>
          <div className={`detail-hero-media${resource.image.includes("/recurso-") ? " detail-hero-media-contain" : ""}`}>
            <Image src={resource.image} alt={resource.imageAlt} width={960} height={640} sizes="(max-width: 860px) 100vw, 46vw" priority />
          </div>
        </header>

        <ul className="highlight-strip" aria-label="Destaques deste recurso">
          {resource.highlights.map((highlight) => <li key={highlight}><CheckIcon />{highlight}</li>)}
        </ul>

        <div className="detail-layout">
          <div className="article-body">
            {resource.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
          <aside className="related-nav">
            <strong>Outros recursos</strong>
            {resources.filter(({ slug: itemSlug }) => itemSlug !== resource.slug).map((item) => (
              <Link href={`/recursos/${item.slug}`} key={item.slug}>{item.navLabel}</Link>
            ))}
          </aside>
        </div>

        <section className="page-faq" aria-labelledby="resource-faq-title">
          <div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2 id="resource-faq-title">Perguntas sobre {resource.navLabel.toLowerCase()}</h2></div>
          <div className="faq-list">
            {resource.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className="page-cta" id="falar-com-equipe"><ContactCta /></section>
      </article>
    </SiteFrame>
  );
}
