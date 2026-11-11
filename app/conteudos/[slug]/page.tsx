import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { ContactCta } from "@/app/_components/contact-cta";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { getGuide, guides } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = `/conteudos/${guide.slug}`;
  return {
    title: `${guide.title} | GranjaFlow`,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.description, url: absoluteUrl(url), type: "article" },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = absoluteUrl(`/conteudos/${guide.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: guide.title,
        description: guide.description,
        url: pageUrl,
        inLanguage: "pt-BR",
        author: { "@id": absoluteUrl("/#organization") },
        publisher: { "@id": absoluteUrl("/#organization") },
        about: ["suinocultura", "gestão de granja", guide.category],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Conteúdos", item: absoluteUrl("/conteudos") },
          { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      },
    ],
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />
      <article id="conteudo" className="inner-page content-article">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Conteúdos", href: "/conteudos" }, { label: guide.title }]} />
        <header className="article-hero">
          <span className="eyebrow">{guide.category}</span>
          <h1>{guide.title}</h1>
          <p>{guide.intro}</p>
          <small>Conteúdo técnico GranjaFlow · {guide.readingTime}</small>
        </header>

        <div className="detail-layout article-layout">
          <div className="article-body">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <aside className="article-note"><strong>Importante</strong><p>Este conteúdo é educativo e não substitui avaliação veterinária, zootécnica, contábil, financeira ou jurídica aplicada à realidade da propriedade.</p></aside>
          </div>
          <aside className="related-nav">
            <strong>Outros conteúdos</strong>
            {guides.filter(({ slug: itemSlug }) => itemSlug !== guide.slug).map((item) => <Link href={`/conteudos/${item.slug}`} key={item.slug}>{item.title}</Link>)}
            <Link href="/recursos">Conhecer os recursos</Link>
          </aside>
        </div>

        <section className="page-faq" aria-labelledby="guide-faq-title">
          <div><span className="eyebrow">PERGUNTAS DIRETAS</span><h2 id="guide-faq-title">Dúvidas sobre o tema</h2></div>
          <div className="faq-list">{guide.faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </section>

        <section className="page-cta"><ContactCta /></section>
      </article>
    </SiteFrame>
  );
}
