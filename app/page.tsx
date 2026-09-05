"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, useReducedMotion } from "motion/react";

const WHATSAPP_BASE = "https://wa.me/5545999317831";
const APP_URL = "https://app.granjaflow.com.br/";
const whatsapp = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
const gestaoWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero conhecer o GranjaFlow Gestão para produtor independente.");
const integraWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero conhecer o GranjaFlow Integra para integradoras e cooperativas.");
const demoWhatsapp = whatsapp("Olá, vim pelo site do GranjaFlow e quero agendar uma demonstração.");

const managementBenefits = [
  "Controle de lotes e plantel", "Animais alojados e vivos", "Mortalidade e evidências",
  "Ração, estoque, compras e consumo", "Contas a pagar e receber", "Custos por lote e por animal",
  "Resultado econômico e fluxo de caixa", "Indicadores e histórico",
];

const integraBenefits = [
  "Integradora e diferentes perfis operacionais", "Técnicos, produtores, granjas e lotes",
  "Mortalidade, ração e indicadores", "Agenda, visitas e acompanhamento técnico",
  "Avaliações, score e semáforo operacional", "Dashboards com visão consolidada",
];

const resources = [
  ["Gestão de lotes", "Alojamento, plantel, histórico e visão organizada de cada ciclo.", "/images/pig-farm-4636983.jpg", "Instalação de suinocultura com lotes organizados"],
  ["Mortalidade", "Registros, causas, evidências e impacto sobre os animais vivos.", "/images/pig-farm-2252541.jpg", "Suínos acompanhados dentro da granja"],
  ["Controle de ração", "Estoque, compras, consumo e acompanhamento da rotina alimentar.", "/images/recurso-racao.webp", "Controle de ração no GranjaFlow"],
  ["Financeiro", "Contas, movimentações, custos do lote e visão do fluxo de caixa.", "/images/pig-farm-4636976.jpg", "Rotina de gestão financeira da granja"],
  ["Relatórios", "Informações consolidadas para acompanhar custos, operação e resultados.", "/images/recurso-relatorios.webp", "Relatórios e indicadores do GranjaFlow"],
  ["Perfis de acesso", "Cada responsabilidade recebe uma experiência adequada de trabalho.", "/images/recurso-perfis.webp", "Gestão de perfis e permissões no GranjaFlow"],
];

const process = [
  ["Cadastre a propriedade e o lote", "Organize a base da produção que será acompanhada."],
  ["Registre a rotina", "Inclua mortalidade, ração, compras e movimentações financeiras."],
  ["Acompanhe a operação", "Veja o que acontece com o lote sem depender de informações espalhadas."],
  ["Consolide os custos", "O sistema organiza consumo, estoque e financeiro em visões separadas."],
  ["Decida com informação", "Use indicadores e histórico para entender o momento da granja."],
];

const brands = [
  ["MBRF", "/brands/mbrf.svg", "https://www.mbrf.com/"],
  ["Aurora Coop", "/brands/aurora-coop.svg", "https://auroracoop.com.br/"],
  ["Frimesa", "/brands/frimesa.png", "https://frimesa.com.br/"],
  ["C.Vale", "/brands/cvale.png", "https://www.cvale.com.br/"],
  ["Lar Cooperativa", "/brands/lar.png", "https://www.lar.ind.br/"],
  ["Copacol", "/brands/copacol.png", "https://www.copacol.com.br/"],
];

const faqs = [
  ["O GranjaFlow Gestão é somente para grandes produtores?", "Não. Ele foi desenvolvido para o produtor independente que precisa organizar a operação e entender custos, consumo, financeiro e resultado do lote."],
  ["O GranjaFlow Gestão e o Integra são o mesmo produto?", "Eles fazem parte da mesma plataforma, mas atendem realidades diferentes. O Gestão prioriza a administração da produção independente. O Integra organiza operações com integradora, técnicos, produtores e granjas."],
  ["Consigo usar pelo celular?", "Sim. A experiência é responsiva e foi pensada para registrar e consultar informações pelo celular, tablet e computador."],
  ["O sistema funciona sem internet?", "A operação atual depende de conexão. Recursos offline ainda não são anunciados como disponíveis."],
  ["O GranjaFlow substitui o sistema da integradora?", "Isso depende da estrutura e das integrações necessárias. A demonstração serve para avaliar a operação antes de qualquer proposta ou implantação."],
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
  return <span className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><img src="/favicon-96x96.png" alt="" width="96" height="96" /></span><span><strong>GranjaFlow</strong><small>TECNOLOGIA PARA SUINOCULTURA</small></span></span>;
}

function Reveal({ children, className = "", side = "up" }: { children: React.ReactNode; className?: string; side?: "up" | "left" | "right" }) {
  const reduceMotion = useReducedMotion();
  const axis = side === "left" ? { x: -34, y: 0 } : side === "right" ? { x: 34, y: 0 } : { x: 0, y: 30 };
  return <motion.div className={className} initial={{ opacity: 0, x: reduceMotion ? 0 : axis.x, y: reduceMotion ? 0 : axis.y }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function DemoMetrics() {
  const items = [["CUSTO DO LOTE", "R$ 128.400"], ["CUSTO / ALOJADO", "R$ 856"], ["CUSTO / ANIMAL VIVO", "R$ 912"], ["ANIMAIS VIVOS", "141"], ["RAÇÃO CONSUMIDA", "38,4 t"], ["RESULTADO", "Em acompanhamento"]];
  return <div className="metrics-board" aria-label="Demonstração visual de indicadores do GranjaFlow Gestão"><div className="metrics-head"><div><span>Demonstração de interface</span><strong>Lote em andamento</strong></div><small>Valores ilustrativos</small></div><div className="metrics-grid">{items.map(([label, value], index) => <div className={index === 2 ? "metric-featured" : ""} key={label}><small>{label}</small><strong>{value}</strong></div>)}</div></div>;
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <a href="#inicio" aria-label="GranjaFlow, início"><Brand /></a>
        <nav aria-label="Navegação principal"><a href="#gestao">GranjaFlow Gestão</a><a href="#integra">GranjaFlow Integra</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a></nav>
        <div className="header-actions"><a className="access-link" href={APP_URL} target="_blank" rel="noreferrer">Acessar sistema <Arrow /></a><a className="button button-small" href={gestaoWhatsapp} target="_blank" rel="noreferrer">Conhecer o Gestão <Arrow /></a></div>
        <details className="mobile-menu"><summary aria-label="Abrir menu"><span /><span /><span /></summary><div><a href="#gestao">GranjaFlow Gestão</a><a href="#integra">GranjaFlow Integra</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href="#contato">Contato</a><a className="access-link" href={APP_URL} target="_blank" rel="noreferrer">Acessar sistema <Arrow /></a><a className="button" href={gestaoWhatsapp} target="_blank" rel="noreferrer">Conhecer o Gestão <Arrow /></a></div></details>
      </header>

      <section className="hero" id="conteudo">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: reduceMotion ? 0 : -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.72 }}><p className="eyebrow"><span /> PARA QUEM PRODUZ. PARA QUEM INTEGRA.</p><h1>Gestão inteligente da granja. <em>Do produtor independente à integradora.</em></h1><p className="hero-lead">Controle lotes, mortalidade, ração, custos e resultados em uma plataforma desenvolvida para a realidade da suinocultura.</p><div className="hero-actions"><a className="button" href="#gestao">Conhecer GranjaFlow Gestão <Arrow /></a><a className="button-secondary" href="#integra">Conhecer GranjaFlow Integra <Arrow /></a></div><div className="trust-row"><span><CheckIcon /></span><p><strong>Comece pela sua realidade</strong><br />Gestão para o produtor. Integra para operações integradas.</p></div></motion.div>
        <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.12 }}><div className="hero-visual hero-poster"><div className="visual-glow" /><div className="hero-poster-frame"><img src="/images/granjaflow-gestao-inteligente.jpeg" alt="GranjaFlow Gestão sendo utilizado no ambiente de uma granja de suínos" fetchPriority="high" /></div><span className="hero-product-tag">GRANJAFLOW GESTÃO</span></div></motion.div>
      </section>

      <section className="solution-choice" aria-labelledby="choice-title"><Reveal className="choice-heading"><p className="eyebrow"><span /> DUAS EXPERIÊNCIAS, UMA PLATAFORMA</p><h2 id="choice-title">Um GranjaFlow para cada modelo de produção.</h2><p>Escolha o caminho que representa sua operação hoje.</p></Reveal><div className="solution-grid"><Reveal className="solution-card solution-primary" side="left"><div className="solution-card-head"><span>PARA PRODUTOR INDEPENDENTE</span><GrainIcon type="money" /></div><h3>GranjaFlow <em>Gestão</em></h3><p>Para quem administra a própria produção e precisa enxergar o que está acontecendo operacionalmente e economicamente em cada lote.</p><ul>{managementBenefits.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul><a className="button" href={gestaoWhatsapp} target="_blank" rel="noreferrer">Quero controlar minha granja <Arrow /></a></Reveal><Reveal className="solution-card solution-secondary" side="right"><div className="solution-card-head"><span>PARA INTEGRADORAS E COOPERATIVAS</span><GrainIcon type="network" /></div><h3>GranjaFlow <em>Integra</em></h3><p>Para operações que precisam acompanhar técnicos, produtores, granjas e lotes dentro de uma estrutura integrada.</p><ul>{integraBenefits.map(item => <li key={item}><CheckIcon />{item}</li>)}</ul><a className="button button-navy" href={integraWhatsapp} target="_blank" rel="noreferrer">Conhecer solução para integradoras <Arrow /></a></Reveal></div></section>

      <section className="producer-section" id="gestao"><Reveal className="producer-copy" side="left"><p className="eyebrow light"><span /> GRANJAFLOW GESTÃO</p><h2>Sua granja. Seus números. <em>Suas decisões.</em></h2><p>Gastos separados não mostram, sozinhos, o custo real do lote. O GranjaFlow Gestão reúne produção, consumo e financeiro para transformar registros do dia a dia em uma visão clara.</p><div className="producer-question"><small>A PERGUNTA QUE PRECISA DE RESPOSTA</small><strong>Quanto cada suíno está me custando hoje?</strong></div><a className="button button-light" href={gestaoWhatsapp} target="_blank" rel="noreferrer">Solicitar demonstração do Gestão <Arrow /></a></Reveal><Reveal className="producer-dashboard" side="right"><DemoMetrics /></Reveal></section>

      <section className="section resources" id="recursos"><Reveal className="section-heading editorial-heading"><p className="eyebrow"><span /> VISÃO COMPLETA DO LOTE</p><h2>O que acontece no campo encontra <em>o resultado da operação.</em></h2><p>Recursos organizados para registrar, consultar e entender cada lote sem depender de cadernos, mensagens e planilhas dispersas.</p></Reveal><div className="resource-grid">{resources.map(([title, copy, media, alt]) => <Reveal className="resource-card" key={title}><div className="resource-media"><img src={media} alt={alt} loading="lazy" decoding="async" /></div><div className="resource-copy"><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div></section>

      <section className="process" id="como-funciona"><Reveal className="process-heading" side="left"><p className="eyebrow light"><span /> COMO FUNCIONA</p><h2>Da rotina da granja <em>à decisão organizada.</em></h2><p>Um fluxo simples para manter produção e resultado no mesmo contexto.</p></Reveal><div className="process-list">{process.map(([title, copy], index) => <Reveal className="process-item" key={title} side="right"><span className="process-icon"><GrainIcon type={index < 2 ? "field" : index === 4 ? "chart" : "money"} /></span><div><h3>{title}</h3><p>{copy}</p></div>{index < process.length - 1 && <Arrow />}</Reveal>)}</div></section>

      <section className="economy-section"><Reveal className="economy-heading"><p className="eyebrow"><span /> DIFERENCIAL ECONÔMICO</p><h2>Não é apenas controle de granja. <em>É controle do resultado.</em></h2></Reveal><div className="economy-grid"><Reveal className="economy-explainer" side="left"><p>Comprar ração não significa que todo o valor virou custo do lote naquele dia. O GranjaFlow acompanha estoque, consumo e financeiro separadamente para mostrar uma visão mais fiel da operação.</p><div className="economic-flow"><span>COMPRA</span><Arrow /><span>ESTOQUE</span><Arrow /><span>CONSUMO</span></div></Reveal><Reveal className="economy-result" side="right"><div><small>VISÃO DA OPERAÇÃO</small><strong>Resultado econômico</strong><p>O que foi consumido e pertence ao desempenho do lote.</p></div><div><small>VISÃO FINANCEIRA</small><strong>Fluxo de caixa</strong><p>O que foi pago ou recebido e movimentou o caixa.</p></div></Reveal></div></section>

      <section className="field-section"><Reveal className="field-visual" side="left"><div className="phone-shell"><div className="phone-top" /><div className="phone-screen"><div className="phone-brand"><img src="/favicon-96x96.png" alt="" width="38" height="38" /><b>GranjaFlow <em>Gestão</em></b></div><small>LOTE ATUAL</small><strong>Terminação 2026</strong><div className="phone-menu"><span><GrainIcon type="field" />Mortalidade</span><span><GrainIcon type="chart" />Ração</span><span><GrainIcon type="money" />Financeiro</span><span><GrainIcon type="chart" />Indicadores</span></div></div></div></Reveal><Reveal className="field-copy" side="right"><p className="eyebrow light"><span /> GRANJAFLOW NO CAMPO</p><h2>Feito para usar onde <em>o trabalho acontece.</em></h2><p>Registre mortalidade, ração e movimentações do lote pelo celular. Consulte indicadores sem esperar chegar ao escritório.</p><ul><li><CheckIcon /> Interface responsiva</li><li><CheckIcon /> Rotina simples de registro</li><li><CheckIcon /> Informações reunidas por lote</li></ul></Reveal></section>

      <section className="integra-section" id="integra"><Reveal className="integra-copy" side="left"><p className="eyebrow light"><span /> GRANJAFLOW INTEGRA</p><h2>Da granja à gestão <em>da integração.</em></h2><p>Uma estrutura para acompanhar diferentes perfis, propriedades e ciclos sem perder a origem de cada informação. A arquitetura multiempresa organiza permissões e responsabilidades dentro de operações integradas.</p><div className="integra-features"><span><CheckIcon /> Diferentes perfis operacionais</span><span><CheckIcon /> Visão por produtor, granja e lote</span><span><CheckIcon /> Acompanhamento técnico consolidado</span></div><a className="button button-light" href={integraWhatsapp} target="_blank" rel="noreferrer">Falar sobre minha integração <Arrow /></a></Reveal><Reveal className="operation-map" side="right">{["INTEGRADORA", "TÉCNICOS", "PRODUTORES", "GRANJAS", "LOTES"].map((item, index) => <div key={item}><span>{item}</span>{index < 4 && <b aria-hidden="true">↓</b>}</div>)}</Reveal></section>

      <section className="ecosystem-section" aria-labelledby="ecosystem-title"><Reveal className="ecosystem-heading"><p className="eyebrow"><span /> ECOSSISTEMA DA SUINOCULTURA</p><h2 id="ecosystem-title">Preparado para diferentes modelos da suinocultura brasileira.</h2><p>Estas marcas ajudam a representar a diversidade e a escala do setor agroindustrial que orienta a evolução da plataforma.</p></Reveal><div className="brand-carousel" aria-label="Referências do ecossistema agroindustrial brasileiro"><div className="brand-track">{[...brands, ...brands].map(([name, src, url], index) => <a href={url} target="_blank" rel="noreferrer" className="industry-brand" key={`${name}-${index}`} aria-label={`Site oficial de ${name}`}><img src={src} alt={name} loading="lazy" width="180" height="64" /></a>)}</div></div><p className="brand-disclaimer">Marcas exibidas como referência do ecossistema agroindustrial brasileiro. A exibição não implica parceria, homologação, vínculo comercial ou uso do GranjaFlow pelas empresas mencionadas.</p></section>

      <section className="faq" id="duvidas"><Reveal className="faq-heading" side="left"><p className="eyebrow"><span /> PERGUNTAS FREQUENTES</p><h2>Antes da demonstração, <em>vale saber.</em></h2><p>Respostas diretas sobre o posicionamento e o funcionamento atual da plataforma.</p><a className="text-link" href={demoWhatsapp} target="_blank" rel="noreferrer">Falar com um especialista <Arrow /></a></Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta" id="contato"><Reveal side="left"><p className="eyebrow light"><span /> COMECE PELO GRANJAFLOW GESTÃO</p><h2>Saiba quanto produzir está custando. <em>Decida com clareza.</em></h2></Reveal><Reveal className="final-actions" side="right"><a className="button button-light" href={gestaoWhatsapp} target="_blank" rel="noreferrer">Quero controlar minha granja <Arrow /></a><a className="ghost-link" href={integraWhatsapp} target="_blank" rel="noreferrer">Conhecer o Integra <Arrow /></a></Reveal></section>

      <footer><div className="footer-brand"><Brand /><p>Tecnologia para transformar rotina de campo, custos e resultados em decisões mais claras na suinocultura.</p></div><div className="footer-links"><strong>Soluções</strong><a href="#gestao">GranjaFlow Gestão</a><a href="#integra">GranjaFlow Integra</a><a href="#recursos">Recursos</a><a href={APP_URL} target="_blank" rel="noreferrer">Acessar sistema</a></div><div className="footer-links"><strong>Contato</strong><a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a><a href={demoWhatsapp} target="_blank" rel="noreferrer">+55 45 99931-7831</a><a href={demoWhatsapp} target="_blank" rel="noreferrer">Solicitar demonstração</a></div><div className="footer-links"><strong>Legal</strong><a href="/privacidade">Privacidade e LGPD</a><a href="/cookies">Política de Cookies</a><a href="/termos">Termos de Uso</a><button type="button" data-open-cookie-settings>Gerenciar cookies</button></div><div className="footer-bottom"><span>© 2026 GranjaFlow.</span><a href={demoWhatsapp} target="_blank" rel="noreferrer">Desenvolvido pela FFR do Brasil Technology.</a><a href="#inicio">Voltar ao topo</a></div></footer>
      <a className="whatsapp-float" href={gestaoWhatsapp} target="_blank" rel="noreferrer" aria-label="Conhecer o GranjaFlow Gestão pelo WhatsApp"><WhatsAppIcon /><b>WhatsApp</b></a>
    </main>
  );
}
