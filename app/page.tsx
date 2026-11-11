import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/app/_components/contact-cta";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/app/_components/icons";
import { JsonLd } from "@/app/_components/json-ld";
import { SiteFrame } from "@/app/_components/site-chrome";
import { guides, resources } from "@/lib/content";
import { WHATSAPP_LINKS } from "@/lib/links";
import { absoluteUrl } from "@/lib/site";

const managementBenefits = [
  "Controle de lotes e plantel",
  "Animais alojados e vivos",
  "Mortalidade e evidências",
  "Ração, estoque, compras e consumo",
  "Contas a pagar e receber",
  "Custos por lote e por animal",
  "Resultado econômico e fluxo de caixa",
  "Indicadores e histórico",
];

const process = [
  ["Cadastre a propriedade e o lote", "Organize a base da produção que será acompanhada"],
  ["Registre a rotina", "Inclua mortalidade, ração, compras e movimentações financeiras"],
  ["Acompanhe a operação", "Veja o que acontece com o lote sem depender de informações espalhadas"],
  ["Consolide os custos", "O sistema organiza consumo, estoque e financeiro em visões separadas"],
  ["Decida com informação", "Use indicadores e histórico para entender o momento da granja"],
];

// Esta lista e sua apresentação visual preservam a seção aprovada de referências setoriais.
const brands = [
  ["Aurora", "/brands/aurora-color.png"],
  ["BRF", "/brands/brf-color.png"],
  ["C.Vale", "/brands/cvale-color.png"],
  ["Frimesa", "/brands/frimesa-transparent.png"],
  ["Lar Cooperativa", "/brands/lar-color.png"],
  ["Copacol", "/brands/copacol-color.png"],
  ["Primato", "/brands/primato-color.png"],
  ["Copagril", "/brands/copagril-color.png"],
  ["JBS", "/brands/jbs-color.png"],
  ["Seara", "/brands/seara-color.png"],
];

const faqs = [
  ["O GranjaFlow é somente para grandes produtores?", "Não. Ele foi desenvolvido para o produtor que precisa organizar a operação e entender custos, consumo, financeiro e resultado do lote."],
  ["Para quem o GranjaFlow foi desenvolvido?", "Para produtores que administram a própria granja e precisam reunir produção, consumo, custos e financeiro em uma visão organizada."],
  ["Consigo usar pelo celular?", "Sim. A experiência é responsiva e foi pensada para registrar e consultar informações pelo celular, tablet e computador."],
  ["O sistema funciona sem internet?", "A operação atual depende de conexão. Recursos offline não são anunciados publicamente como disponíveis nesta versão."],
  ["Como faço para contratar?", "Fale com a equipe pelo WhatsApp para conhecer a solução, esclarecer dúvidas e receber as condições comerciais vigentes."],
];

function GrainIcon({ type = "field" }: { type?: "field" | "money" | "chart" }) {
  const paths = {
    field: "M4 19h16M7 16V9m5 7V5m5 11v-4",
    money: "M12 3v18m4-14.5c0-1.4-1.8-2.5-4-2.5S8 5.1 8 6.5 9.8 9 12 9s4 1.1 4 2.5S14.2 14 12 14s-4-1.1-4-2.5",
    chart: "M4 19V9m6 10V5m6 14v-7m4 7H2",
  };
  return <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={paths[type]} /></svg>;
}

function DemoMetrics() {
  const items = [
    ["CUSTO DO LOTE", "R$ 128.400,00"],
    ["CUSTO / ALOJADO", "R$ 856,00"],
    ["CUSTO / ANIMAL VIVO", "R$ 912,00"],
    ["ANIMAIS VIVOS", "141"],
    ["RAÇÃO CONSUMIDA", "38,4 t"],
    ["RESULTADO", "Em acompanhamento"],
  ];

  return (
    <div className="metrics-board" aria-label="Demonstração visual de indicadores do GranjaFlow">
      <div className="metrics-head"><div><strong>Lote em andamento</strong></div><span className="demo-label">Valores ilustrativos</span></div>
      <div className="metrics-grid">
        {items.map(([label, value], index) => <div className={index === 2 ? "metric-featured" : ""} key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#page"),
        name: "GranjaFlow | Gestão de granja e suinocultura",
        url: absoluteUrl("/"),
        inLanguage: "pt-BR",
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": absoluteUrl("/#software") },
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#duvidas"),
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <SiteFrame>
      <JsonLd data={jsonLd} />

      <section className="hero" id="conteudo">
        <div className="hero-video-poster" aria-hidden="true" />
        <video className="hero-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
          <source media="(max-width: 700px) and (orientation: portrait)" src="/videos/granjaflow-campo-mobile.mp4" type="video/mp4" />
          <source src="/videos/granjaflow-campo-desktop.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />

        <div className="hero-content">
          <span className="hero-eyebrow">GESTÃO INTELIGENTE PARA SUINOCULTURA</span>
          <h1>Sua granja sob controle</h1>
          <p className="hero-lead">Lotes, mortalidade, ração, custos e financeiro em uma única visão para decidir com mais clareza</p>
          <div className="hero-actions">
            <a className="button hero-primary-action" href={WHATSAPP_LINKS.product} target="_blank" rel="noreferrer"><WhatsAppIcon /> Conhecer o GranjaFlow</a>
            <a className="hero-secondary-action" href={WHATSAPP_LINKS.questions} target="_blank" rel="noreferrer">Tirar dúvidas <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="ecosystem-heading"><h2 id="ecosystem-title">Referências da suinocultura brasileira</h2></div>
        <div className="brand-carousel" aria-label="Empresas do setor agroindustrial brasileiro">
          <div className="brand-track">
            {[...brands, ...brands].map(([name, src], index) => (
              <div className={`industry-brand ${name === "Primato" ? "brand-primato" : ""}`} key={`${name}-${index}`}>
                <Image src={src} alt={name} width={260} height={140} sizes="(max-width: 620px) 170px, 220px" loading={index < 5 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-choice" id="granjaflow" aria-labelledby="choice-title">
        <div className="choice-heading"><span className="eyebrow">VISÃO COMPLETA DA OPERAÇÃO</span><h2 id="choice-title">Uma plataforma para controlar sua granja</h2><p>Produção, consumo, custos e financeiro reunidos em uma plataforma feita para a rotina da suinocultura</p></div>
        <div className="solution-grid">
          <div className="solution-card solution-primary">
            <div className="solution-card-head"><span>GESTÃO DA GRANJA EM UM SÓ LUGAR</span><GrainIcon type="money" /></div>
            <h3>GranjaFlow</h3>
            <p>Para quem administra a produção e precisa enxergar o que está acontecendo operacionalmente e economicamente em cada lote</p>
            <ul>{managementBenefits.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
            <ContactCta compact />
          </div>
        </div>
      </section>

      <section className="section resources" id="recursos">
        <div className="section-heading editorial-heading"><span className="eyebrow">RECURSOS CONECTADOS</span><h2>O que acontece no campo encontra o resultado da operação</h2><p>Cada área ganhou uma página própria para explicar o problema, o funcionamento e o impacto na gestão do lote</p></div>
        <div className="resource-grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.slug}>
              <Link className={`resource-media${resource.image.includes("/recurso-") ? " resource-media-contain" : ""}`} href={`/recursos/${resource.slug}`} aria-label={`Conhecer ${resource.navLabel}`}><Image src={resource.image} alt={resource.imageAlt} width={768} height={512} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 34vw" loading="lazy" /></Link>
              <div className="resource-copy"><h3>{resource.navLabel}</h3><p>{resource.description}</p><Link className="text-link" href={`/recursos/${resource.slug}`}>Ver como funciona <ArrowIcon /></Link></div>
            </article>
          ))}
        </div>
        <div className="section-action"><Link className="button-secondary" href="/recursos">Ver todos os recursos <ArrowIcon /></Link></div>
      </section>

      <section className="producer-section" id="gestao">
        <div className="producer-copy"><span className="eyebrow eyebrow-light">CUSTO EM ACOMPANHAMENTO</span><h2>Sua granja, seus números, suas decisões</h2><p>Gastos separados não mostram sozinhos o custo real do lote. O GranjaFlow reúne produção, consumo e financeiro para transformar os registros do dia a dia em uma visão clara</p><div className="producer-question"><strong>Quanto cada suíno está me custando hoje?</strong></div><a className="button button-light" href={WHATSAPP_LINKS.questions} target="_blank" rel="noreferrer"><WhatsAppIcon /> Falar com um especialista</a></div>
        <div className="producer-dashboard"><DemoMetrics /></div>
      </section>

      <section className="process" id="como-funciona">
        <div className="process-heading"><span className="eyebrow eyebrow-light">COMO FUNCIONA</span><h2>Da rotina da granja à decisão organizada</h2><p>Um fluxo simples para manter produção e resultado no mesmo contexto</p></div>
        <div className="process-list">{process.map(([title, copy], index) => <div className="process-item" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
      </section>

      <section className="economy-section">
        <div className="economy-heading"><span className="eyebrow">VISÃO ECONÔMICA</span><h2>Não é apenas controle de granja, é controle do resultado</h2></div>
        <div className="economy-grid">
          <div className="economy-explainer"><p>Comprar ração não significa que todo o valor virou custo do lote naquele dia. O GranjaFlow acompanha estoque, consumo e financeiro separadamente para mostrar uma visão mais fiel da operação</p><div className="economic-flow"><span>COMPRA</span><ArrowIcon /><span>ESTOQUE</span><ArrowIcon /><span>CONSUMO</span></div></div>
          <div className="economy-result"><div><strong>Resultado econômico</strong><p>O que foi consumido e pertence ao desempenho do lote</p></div><div><strong>Fluxo de caixa</strong><p>O que foi pago ou recebido e movimentou o caixa</p></div></div>
        </div>
      </section>

      <section className="field-section">
        <div className="field-visual"><div className="phone-shell"><div className="phone-top" /><div className="phone-screen"><div className="phone-brand"><Image src="/favicon-96x96.png" alt="" width={38} height={38} /><b>GranjaFlow</b></div><strong>Terminação 2026</strong><div className="phone-menu"><span><GrainIcon type="field" />Mortalidade</span><span><GrainIcon type="chart" />Ração</span><span><GrainIcon type="money" />Financeiro</span><span><GrainIcon type="chart" />Indicadores</span></div></div></div></div>
        <div className="field-copy"><span className="eyebrow">NO CAMPO</span><h2>Feito para usar onde o trabalho acontece</h2><p>Registre mortalidade, ração e movimentações do lote pelo celular, consulte indicadores sem esperar chegar ao escritório</p><ul><li><CheckIcon /> Interface responsiva</li><li><CheckIcon /> Rotina simples de registro</li><li><CheckIcon /> Informações reunidas por lote</li></ul></div>
      </section>

      <section className="home-content-section" aria-labelledby="content-title">
        <div className="section-heading editorial-heading"><span className="eyebrow">CONTEÚDO PARA DECIDIR</span><h2 id="content-title">Entenda os números antes de olhar apenas o resultado final</h2><p>Guias criados para explicar custos, consumo e indicadores com linguagem conectada à rotina da granja</p></div>
        <div className="guide-grid">
          {guides.map((guide, index) => <article className={`guide-card guide-card-${index + 1}`} key={guide.slug}><span>{guide.category}</span><h3>{guide.title}</h3><p>{guide.description}</p><small>{guide.readingTime}</small><Link className="text-link" href={`/conteudos/${guide.slug}`}>Ler o guia <ArrowIcon /></Link></article>)}
        </div>
        <div className="section-action"><Link className="button-secondary" href="/conteudos">Acessar todos os conteúdos <ArrowIcon /></Link></div>
      </section>

      <section className="faq" id="duvidas">
        <div className="faq-heading"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes da demonstração, vale saber</h2><p>Respostas diretas sobre o posicionamento e o funcionamento atual da plataforma</p><a className="specialist-cta" href={WHATSAPP_LINKS.questions} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>Fale com o nosso especialista e tire suas dúvidas</span><ArrowIcon /></a></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </SiteFrame>
  );
}
