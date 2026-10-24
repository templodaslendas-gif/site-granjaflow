"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const WHATSAPP_BASE = "https://wa.me/5545999317831";
const APP_URL = "https://app.granjaflow.com.br/";
const CHECKOUT_URL = "https://lastlink.com/p/C29CE6377/";
const whatsapp = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
const granjaFlowWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero conhecer o acesso anual para minha granja.");
const salesWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e preciso tirar algumas dúvidas.");
const demoWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero agendar uma demonstração.");
const ffrWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero falar com a FFR do Brasil Technology.");

const managementBenefits = [
  "Controle de lotes e plantel", "Animais alojados e vivos", "Mortalidade e evidências",
  "Ração, estoque, compras e consumo", "Contas a pagar e receber", "Custos por lote e por animal",
  "Resultado econômico e fluxo de caixa", "Indicadores e histórico",
];

const resources = [
  ["Gestão de lotes", "Alojamento, plantel, histórico e visão organizada de cada ciclo", "/images/pig-farm-4636983.jpg", "Instalação de suinocultura com lotes organizados"],
  ["Mortalidade", "Registros, causas, evidências e impacto sobre os animais vivos", "/images/pig-farm-2252541.jpg", "Suínos acompanhados dentro da granja"],
  ["Controle de ração", "Estoque, compras, consumo e acompanhamento da rotina alimentar", "/images/recurso-racao.webp", "Controle de ração no GranjaFlow"],
  ["Financeiro", "Contas, movimentações, custos do lote e visão do fluxo de caixa", "/images/pig-farm-4636976.jpg", "Rotina de gestão financeira da granja"],
  ["Relatórios", "Informações consolidadas para acompanhar custos, operação e resultados", "/images/recurso-relatorios.webp", "Relatórios e indicadores do GranjaFlow"],
  ["Perfis de acesso", "Cada responsabilidade recebe uma experiência adequada de trabalho", "/images/recurso-perfis.webp", "Gestão de perfis e permissões no GranjaFlow"],
];

const process = [
  ["Cadastre a propriedade e o lote", "Organize a base da produção que será acompanhada"],
  ["Registre a rotina", "Inclua mortalidade, ração, compras e movimentações financeiras"],
  ["Acompanhe a operação", "Veja o que acontece com o lote sem depender de informações espalhadas"],
  ["Consolide os custos", "O sistema organiza consumo, estoque e financeiro em visões separadas"],
  ["Decida com informação", "Use indicadores e histórico para entender o momento da granja"],
];

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
  ["O GranjaFlow é somente para grandes produtores?", "Não, ele foi desenvolvido para o produtor que precisa organizar a operação e entender custos, consumo, financeiro e resultado do lote"],
  ["Existe mais de um plano no site?", "Não, a oferta pública atual apresenta um único acesso anual ao GranjaFlow para gestão da granja"],
  ["Consigo usar pelo celular?", "Sim, a experiência é responsiva e foi pensada para registrar e consultar informações pelo celular, tablet e computador"],
  ["O sistema funciona sem internet?", "A operação atual depende de conexão, recursos offline ainda não são anunciados como disponíveis"],
  ["Como faço para contratar?", "O acesso anual pode ser contratado pelo checkout indicado no site, dúvidas antes da compra podem ser esclarecidas pelo WhatsApp"],
];

function Arrow() {
  return <svg className="icon-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

function CheckIcon() {
  return <svg className="icon-check" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

function GrainIcon({ type = "field" }: { type?: "field" | "money" | "network" | "chart" }) {
  const paths = {
    field: "M4 19h16M7 16V9m5 7V5m5 11v-4",
    money: "M12 3v18m4-14.5c0-1.4-1.8-2.5-4-2.5S8 5.1 8 6.5 9.8 9 12 9s4 1.1 4 2.5S14.2 14 12 14s-4-1.1-4-2.5",
    network: "M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 0 4ZM5 13a2 2 0 1 0 0-4 2 2 0 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 0 4ZM12 23a2 2 0 1 0 0-4 2 2 0 0 0 0 0 4Zm0-18v4M7 10h10m-5 3v6",
    chart: "M4 19V9m6 10V5m6 14v-7m4 7H2",
  };
  return <svg className="feature-icon" viewBox="0 0 24 24" aria-hidden="true"><path d={paths[type]} /></svg>;
}

function WhatsAppIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 5.1 22.74L3 29l6.47-2.04A12.96 12.96 0 1 0 16.04 3Zm0 23.55c-2.14 0-4.24-.58-6.06-1.68l-.44-.26-3.84 1.21 1.25-3.73-.29-.46a10.55 10.55 0 1 1 9.38 4.92Zm5.79-7.91c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.56 9.56 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.63 0 1.56 1.13 3.06 1.29 3.27.16.21 2.23 3.41 5.4 4.78.75.33 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.87-.77 2.14-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" /></svg>;
}

function Brand() {
  return <span className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><Image src="/favicon-96x96.png" alt="" width={96} height={96} sizes="48px" /></span><strong>GranjaFlow</strong></span>;
}

function PurchaseOffer({ compact = false }: { compact?: boolean }) {
  return <div className={`purchase-offer${compact ? " purchase-offer-compact" : ""}`}><div className="offer-heading"><span>ACESSO ANUAL GRANJAFLOW</span><div className="offer-price"><del>R$ 439,00</del><strong><small>R$</small> 197,90 <em>por ano</em></strong><p>Equivale a <b>R$ 16,49 por mês</b></p></div></div><div className="offer-actions"><a className="button" href={CHECKOUT_URL} target="_blank" rel="noreferrer">Comprar acesso anual <Arrow /></a><a className="button-secondary offer-whatsapp" href={salesWhatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /> Tirar dúvidas pelo WhatsApp</a></div></div>;
}

function Reveal({ children, className = "", side = "up" }: { children: React.ReactNode; className?: string; side?: "up" | "left" | "right" }) {
  const reduceMotion = useReducedMotion();
  const axis = side === "left" ? { x: -34, y: 0 } : side === "right" ? { x: 34, y: 0 } : { x: 0, y: 30 };
  return <motion.div className={className} initial={{ opacity: 0, x: reduceMotion ? 0 : axis.x, y: reduceMotion ? 0 : axis.y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function DemoMetrics() {
  const items = [["CUSTO DO LOTE", "R$ 128.400"], ["CUSTO / ALOJADO", "R$ 856"], ["CUSTO / ANIMAL VIVO", "R$ 912"], ["ANIMAIS VIVOS", "141"], ["RAÇÃO CONSUMIDA", "38,4 t"], ["RESULTADO", "Em acompanhamento"]];
  return <div className="metrics-board" aria-label="Demonstração visual de indicadores do GranjaFlow"><div className="metrics-head"><div><strong>Lote em andamento</strong></div><span className="demo-label">Valores ilustrativos</span></div><div className="metrics-grid">{items.map(([label, value], index) => <div className={index === 2 ? "metric-featured" : ""} key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div>;
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <a className="header-brand" href="#inicio" aria-label="GranjaFlow, início"><Brand /></a>
        <nav aria-label="Navegação principal"><a href="#granjaflow">GranjaFlow</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a><a className="button button-small nav-buy" href={CHECKOUT_URL} target="_blank" rel="noreferrer">Comprar acesso <Arrow /></a><a className="button button-small nav-access" href={APP_URL} target="_blank" rel="noreferrer">Acessar o sistema <Arrow /></a></nav>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><b>Menu</b><i aria-hidden="true"><span /><span /><span /></i></summary><div><a href="#granjaflow">GranjaFlow</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a><a className="button nav-buy" href={CHECKOUT_URL} target="_blank" rel="noreferrer">Comprar acesso <Arrow /></a><a className="button nav-access" href={APP_URL} target="_blank" rel="noreferrer">Acessar o sistema <Arrow /></a></div></details>
      </header>

      <section className="hero" id="conteudo">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: reduceMotion ? 0 : -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.72 }}><h1>Mais controle, mais resultado</h1><p className="hero-lead">Lotes, mortalidade, ração, custos e financeiro em uma única plataforma para a suinocultura</p><PurchaseOffer /></motion.div>
        <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.12 }}><div className="hero-visual hero-poster"><div className="visual-glow" /><div className="hero-poster-frame"><Image src="/images/granjaflow-gestao-inteligente.jpeg" alt="GranjaFlow sendo utilizado no ambiente de uma granja de suínos" width={800} height={800} sizes="(max-width: 900px) 90vw, 42vw" priority /></div></div></motion.div>
      </section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title"><Reveal className="ecosystem-heading"><h2 id="ecosystem-title">Referências da suinocultura brasileira</h2></Reveal><div className="brand-carousel" aria-label="Empresas do setor agroindustrial brasileiro"><div className="brand-track">{[...brands, ...brands].map(([name, src], index) => <div className={`industry-brand ${name === "Primato" ? "brand-primato" : ""}`} key={`${name}-${index}`}><Image src={src} alt={name} width={260} height={140} sizes="(max-width: 620px) 170px, 220px" loading={index < 5 ? "eager" : "lazy"} /></div>)}</div></div></section>

      <section className="solution-choice" id="granjaflow" aria-labelledby="choice-title"><Reveal className="choice-heading"><h2 id="choice-title">Um único acesso para controlar sua granja</h2><p>Produção, consumo, custos e financeiro reunidos em uma plataforma feita para a rotina da suinocultura</p></Reveal><div className="solution-grid"><Reveal className="solution-card solution-primary"><div className="solution-card-head"><span>GESTÃO DA GRANJA EM UM SÓ LUGAR</span><GrainIcon type="money" /></div><h3>GranjaFlow</h3><p>Para quem administra a produção e precisa enxergar o que está acontecendo operacionalmente e economicamente em cada lote</p><ul>{managementBenefits.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul><PurchaseOffer compact /></Reveal></div></section>

      <section className="producer-section" id="gestao"><Reveal className="producer-copy" side="left"><h2>Sua granja, seus números, suas decisões</h2><p>Gastos separados não mostram sozinhos o custo real do lote, o GranjaFlow reúne produção, consumo e financeiro para transformar os registros do dia a dia em uma visão clara</p><div className="producer-question"><strong>Quanto cada suíno está me custando hoje?</strong></div><a className="button button-light" href={CHECKOUT_URL} target="_blank" rel="noreferrer">Comprar o acesso anual <Arrow /></a></Reveal><Reveal className="producer-dashboard" side="right"><DemoMetrics /></Reveal></section>

      <section className="section resources" id="recursos"><Reveal className="section-heading editorial-heading"><h2>O que acontece no campo encontra o resultado da operação</h2><p>Recursos organizados para registrar, consultar e entender cada lote sem depender de cadernos, mensagens e planilhas dispersas</p></Reveal><div className="resource-grid">{resources.map(([title, copy, media, alt]) => <Reveal className="resource-card" key={title}><div className="resource-media"><Image src={media} alt={alt} width={768} height={512} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 34vw" loading="lazy" /></div><div className="resource-copy"><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div></section>

      <section className="process" id="como-funciona"><Reveal className="process-heading" side="left"><h2>Da rotina da granja à decisão organizada</h2><p>Um fluxo simples para manter produção e resultado no mesmo contexto</p></Reveal><div className="process-list">{process.map(([title, copy]) => <Reveal className="process-item" key={title} side="right"><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div></section>

      <section className="economy-section"><Reveal className="economy-heading"><h2>Não é apenas controle de granja, é controle do resultado</h2></Reveal><div className="economy-grid"><Reveal className="economy-explainer" side="left"><p>Comprar ração não significa que todo o valor virou custo do lote naquele dia, o GranjaFlow acompanha estoque, consumo e financeiro separadamente para mostrar uma visão mais fiel da operação</p><div className="economic-flow"><span>COMPRA</span><Arrow /><span>ESTOQUE</span><Arrow /><span>CONSUMO</span></div></Reveal><Reveal className="economy-result" side="right"><div><strong>Resultado econômico</strong><p>O que foi consumido e pertence ao desempenho do lote</p></div><div><strong>Fluxo de caixa</strong><p>O que foi pago ou recebido e movimentou o caixa</p></div></Reveal></div></section>

      <section className="field-section"><Reveal className="field-visual" side="left"><div className="phone-shell"><div className="phone-top" /><div className="phone-screen"><div className="phone-brand"><Image src="/favicon-96x96.png" alt="" width={38} height={38} /><b>GranjaFlow</b></div><strong>Terminação 2026</strong><div className="phone-menu"><span><GrainIcon type="field" />Mortalidade</span><span><GrainIcon type="chart" />Ração</span><span><GrainIcon type="money" />Financeiro</span><span><GrainIcon type="chart" />Indicadores</span></div></div></div></Reveal><Reveal className="field-copy" side="right"><h2>Feito para usar onde o trabalho acontece</h2><p>Registre mortalidade, ração e movimentações do lote pelo celular, consulte indicadores sem esperar chegar ao escritório</p><ul><li><CheckIcon /> Interface responsiva</li><li><CheckIcon /> Rotina simples de registro</li><li><CheckIcon /> Informações reunidas por lote</li></ul></Reveal></section>

      <section className="faq" id="duvidas"><Reveal className="faq-heading" side="left"><h2>Antes da demonstração, vale saber</h2><p>Respostas diretas sobre o posicionamento e o funcionamento atual da plataforma</p><a className="specialist-cta" href={salesWhatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon /><span>Fale com o nosso especialista e tire suas dúvidas</span><Arrow /></a></Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <footer id="contato"><div className="footer-brand"><Brand /><p>Tecnologia para transformar rotina de campo, custos e resultados em decisões mais claras na suinocultura</p></div><div className="footer-links"><strong>GranjaFlow</strong><a href="#granjaflow">Conhecer o sistema</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href={APP_URL} target="_blank" rel="noreferrer">Acessar sistema</a></div><div className="footer-links"><strong>Contato</strong><a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a><a className="footer-whatsapp" href={demoWhatsapp} target="_blank" rel="noreferrer"><WhatsAppIcon />+55 45 99931-7831</a><a href={demoWhatsapp} target="_blank" rel="noreferrer">Solicitar demonstração</a></div><div className="footer-links"><strong>Legal</strong><a href="/privacidade">Privacidade e LGPD</a><a href="/cookies">Política de Cookies</a><a href="/termos">Termos de Uso</a><button type="button" data-open-cookie-settings>Gerenciar cookies</button></div><div className="footer-bottom"><span>© 2026 GranjaFlow, todos os direitos reservados</span><a className="ffr-credit" href={ffrWhatsapp} target="_blank" rel="noreferrer"><Image src="/brasil.svg" alt="Bandeira do Brasil" width={25} height={18} unoptimized />Desenvolvido pela FFR do Brasil Technology</a><a href="#inicio">Voltar ao topo</a></div></footer>
      <a className="whatsapp-float" href={granjaFlowWhatsapp} target="_blank" rel="noreferrer" aria-label="Conhecer o GranjaFlow pelo WhatsApp"><WhatsAppIcon /><b>WhatsApp</b></a>
    </main>
  );
}
