"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const WHATSAPP =
  "https://wa.me/5545999317831?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20GranjaFlow%20e%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o.";
const APP_URL = "https://app.granjaflow.com.br/";

const resources = [
  ["Gestão de lotes", "Alojamento, andamento, histórico e visão clara de cada ciclo.", "/images/pig-farm-4636983.jpg", "Instalação de suinocultura com lotes organizados"],
  ["Mortalidade", "Registros por sexo, causa, controle interno e indicadores.", "/images/pig-farm-2252541.jpg", "Suínos acompanhados dentro da granja"],
  ["Controle de ração", "Pedidos, entregas, consumo e estimativas para a rotina.", "/images/recurso-racao.webp", "Produtor acompanhando o GranjaFlow diante dos silos de ração"],
  ["Ocorrências e mídia", "Contexto de campo documentado com fotos e vídeos.", "/images/pig-farm-4636976.jpg", "Registro visual de suínos no campo"],
  ["Relatórios", "Informações organizadas para consulta e acompanhamento.", "/images/recurso-relatorios.webp", "Relatórios e indicadores do GranjaFlow consultados dentro da granja"],
  ["Perfis de acesso", "Uma experiência adequada para cada responsabilidade.", "/images/recurso-perfis.webp", "Gestão de perfis e permissões de acesso no GranjaFlow"],
];

const problems = [
  ["Problemas percebidos tarde", "Sem visão centralizada, pequenos desvios podem crescer antes de receber atenção.", "/images/pig-farm-2252541.jpg"],
  ["Retrabalho para consolidar", "Menos tempo buscando mensagens, cadernos e planilhas para entender o lote.", "/images/pig-farm-4636983.jpg"],
  ["Visitas mal priorizadas", "Histórico e alertas dão mais contexto para organizar a rotina técnica.", "/images/pig-farm-4636976.jpg"],
];

const faqs = [
  [
    "O GranjaFlow substitui o sistema da integradora?",
    "Não necessariamente. Ele pode complementar sistemas existentes, organizando a rotina de campo e consolidando informações operacionais.",
  ],
  [
    "O produtor consegue usar pelo celular?",
    "Sim. A experiência de registro foi pensada para funcionar de forma simples e responsiva no celular, tablet e computador.",
  ],
  [
    "É possível enviar fotos e vídeos?",
    "Sim. Ocorrências podem receber mídias de campo para manter o contexto junto ao histórico da operação.",
  ],
  [
    "O sistema funciona sem internet?",
    "A operação atual depende de conexão. O uso offline com sincronização posterior faz parte da evolução planejada do produto.",
  ],
  [
    "Cada usuário possui um acesso diferente?",
    "Sim. Produtor, técnico e integradora acessam visões e rotinas adequadas às suas responsabilidades.",
  ],
];

function Arrow() {
  return (
    <svg className="icon-arrow" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="icon-check" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 5.1 22.74L3 29l6.47-2.04A12.96 12.96 0 1 0 16.04 3Zm0 23.55c-2.14 0-4.24-.58-6.06-1.68l-.44-.26-3.84 1.21 1.25-3.73-.29-.46a10.55 10.55 0 1 1 9.38 4.92Zm5.79-7.91c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.58a9.56 9.56 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.63 0 1.56 1.13 3.06 1.29 3.27.16.21 2.23 3.41 5.4 4.78.75.33 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.87-.77 2.14-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-symbol" aria-hidden="true">
        <Image src="/favicon-96x96.png" alt="" width={96} height={96} priority />
      </span>
      <span>
        <strong>GranjaFlow</strong>
        <small>GESTÃO INTELIGENTE PARA GRANJAS</small>
      </span>
    </span>
  );
}

function DashboardVisual() {
  return (
    <div className="hero-visual hero-poster">
      <div className="visual-glow" />
      <div className="hero-poster-frame">
        <Image
          src="/images/granjaflow-gestao-inteligente.jpeg"
          alt="Apresentação do GranjaFlow em uma granja de suínos, com o sistema exibido no celular"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 34 },
    visible: { opacity: 1, y: 0 },
  };
  const fromLeft = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -38 },
    visible: { opacity: 1, x: 0 },
  };
  const fromRight = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 38 },
    visible: { opacity: 1, x: 0 },
  };
  const viewport = { once: true, amount: 0.18 } as const;
  const transition = { duration: reduceMotion ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <a href="#inicio" aria-label="GranjaFlow, início"><Brand /></a>
        <nav aria-label="Navegação principal">
          <a href="#solucao">Solução</a>
          <a href="#perfis">Para quem</a>
          <a href="#recursos">Recursos</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <div className="header-actions">
          <a className="access-link" href={APP_URL} target="_blank" rel="noreferrer">Acessar o sistema <Arrow /></a>
          <a className="button button-small" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar demonstração <Arrow /></a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span /><span /><span /></summary>
          <div>
            <a href="#solucao">Solução</a><a href="#perfis">Para quem</a><a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a><a href="#faq">Dúvidas</a>
            <a className="access-link" href={APP_URL} target="_blank" rel="noreferrer">Acessar o sistema <Arrow /></a>
            <a className="button" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar demonstração <Arrow /></a>
          </div>
        </details>
      </header>

      <section className="hero" id="conteudo">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fromLeft} transition={transition}>
          <motion.p className="eyebrow" variants={reveal}><span /> GESTÃO CONECTADA DO CAMPO À INTEGRADORA</motion.p>
          <motion.h1 variants={reveal}>A granja inteira em um só <em>fluxo de informação.</em></motion.h1>
          <motion.p className="hero-lead" variants={reveal}>Centralize registros, acompanhe lotes e transforme dados reais do campo em decisões mais rápidas, com produtor, técnico e integradora conectados.</motion.p>
          <motion.div className="hero-actions" variants={reveal}>
            <a className="button" href={WHATSAPP} target="_blank" rel="noreferrer">Solicitar demonstração <Arrow /></a>
            <a className="text-link" href={APP_URL} target="_blank" rel="noreferrer">Já sou cliente: acessar <Arrow /></a>
          </motion.div>
          <motion.div className="trust-row" variants={reveal}><span><CheckIcon /></span><p><strong>Feito para a operação real</strong><br />Registros simples no campo. Visão consolidada para quem decide.</p></motion.div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fromRight} transition={{ ...transition, delay: reduceMotion ? 0 : 0.15 }}><DashboardVisual /></motion.div>
      </section>

      <motion.section className="stats" aria-label="Pilares do GranjaFlow" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}>
        <motion.div variants={reveal} transition={transition}><strong>1</strong><span>Fluxo centralizado</span><small>Do registro diário à visão operacional</small></motion.div>
        <motion.div variants={reveal} transition={transition}><strong>3</strong><span>Perfis conectados</span><small>Produtor, técnico e integradora</small></motion.div>
        <motion.div variants={reveal} transition={transition}><strong>360°</strong><span>Contexto do lote</span><small>Histórico, ocorrências e indicadores</small></motion.div>
      </motion.section>

      <section className="section problem-section" id="solucao">
        <motion.div className="section-heading split-heading" initial="hidden" whileInView="visible" viewport={viewport} variants={reveal} transition={transition}>
          <div><p className="eyebrow"><span /> O PROBLEMA NÃO É FALTA DE DADO</p><h2>Informação espalhada vira <em>custo operacional.</em></h2></div>
          <p>Quando registros ficam no papel, em mensagens e planilhas separadas, a operação perde contexto e age tarde. O GranjaFlow transforma dados dispersos em uma rotina acompanhável.</p>
        </motion.div>
        <motion.div className="problem-grid" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.11 }}>
          {problems.map(([title, copy, image]) => <motion.article key={title} variants={reveal} transition={transition}><div className="problem-photo"><Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" /></div><h3>{title}</h3><p>{copy}</p></motion.article>)}
        </motion.div>
      </section>

      <section className="showcase" id="perfis">
        <motion.div className="showcase-copy" initial="hidden" whileInView="visible" viewport={viewport} variants={fromLeft} transition={transition}>
          <p className="eyebrow light"><span /> UM ECOSSISTEMA, TRÊS PERSPECTIVAS</p>
          <h2>Cada perfil vê o que precisa. <em>A operação inteira ganha contexto.</em></h2>
          <p>Os acessos respeitam cada responsabilidade, mas toda a operação trabalha sobre a mesma base de informação.</p>
          <div className="showcase-points"><span><CheckIcon /> Mais clareza para o produtor</span><span><CheckIcon /> Prioridades para o técnico</span><span><CheckIcon /> Visão consolidada para a integradora</span></div>
          <a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer">Conhecer na prática <Arrow /></a>
        </motion.div>
        <motion.div className="profile-stack" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.12 }}>
          <motion.article variants={fromRight} transition={transition}><div><small>INTEGRADORA</small><h3>Visão completa sem perder o detalhe do campo</h3><p>Granjas, lotes, equipes, indicadores e pontos que precisam de atenção.</p></div><b><Arrow /></b></motion.article>
          <motion.article variants={fromRight} transition={transition}><div><small>TÉCNICO</small><h3>Prioridades claras antes de sair para a visita</h3><p>Histórico por granja, ocorrências e contexto para organizar o campo.</p></div><b><Arrow /></b></motion.article>
          <motion.article variants={fromRight} transition={transition}><div><small>PRODUTOR</small><h3>Registro diário simples, rápido e confiável</h3><p>Mortalidade, ração, ocorrências, fotos, vídeos e relatórios pelo celular.</p></div><b><Arrow /></b></motion.article>
        </motion.div>
      </section>

      <section className="section resources" id="recursos">
        <motion.div className="section-heading editorial-heading" initial="hidden" whileInView="visible" viewport={viewport} variants={reveal} transition={transition}><p className="eyebrow"><span /> RECURSOS PARA A ROTINA REAL</p><h2>O essencial para acompanhar a granja. <em>Sem excesso de complexidade.</em></h2><p>Funções organizadas para registrar, consultar e consolidar o que acontece em cada lote.</p></motion.div>
        <motion.div className="resource-grid" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}>{resources.map(([title, copy, media, alt]) => <motion.article key={title} variants={reveal} transition={transition}><div className="resource-top"><b><Arrow /></b></div>{media.startsWith("/") ? <div className={`resource-media ${media.includes("recurso-") ? "resource-media-feature" : ""}`}><img src={media} alt={alt} loading="lazy" decoding="async" /></div> : <div className={`resource-media resource-visual ${media}`} aria-label={alt}><span /><span /><span /><span /></div>}<h3>{title}</h3><p>{copy}</p></motion.article>)}</motion.div>
      </section>

      <section className="process" id="como-funciona">
        <motion.div className="process-heading" initial="hidden" whileInView="visible" viewport={viewport} variants={fromLeft} transition={transition}><p className="eyebrow light"><span /> COMO FUNCIONA</p><h2>Do registro à decisão. <em>Um único fluxo.</em></h2><p>O GranjaFlow organiza a informação. As decisões continuam com quem conhece a operação.</p></motion.div>
        <motion.div className="process-list" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.1 }}>
          {[
            ["O produtor registra", "Informações diárias entram no fluxo de forma simples pelo celular."],
            ["O técnico acompanha", "Histórico e prioridades ajudam a organizar visitas e ações de campo."],
            ["A integradora visualiza", "Indicadores consolidam granjas, lotes, técnicos e produtores."],
            ["A operação decide", "Mais contexto para agir com agilidade, responsabilidade e segurança."],
          ].map(([title, copy]) => <motion.article key={title} variants={fromRight} transition={transition}><div><h3>{title}</h3><p>{copy}</p></div></motion.article>)}
        </motion.div>
      </section>

      <section className="section access-section" id="acessar">
        <motion.div className="access-card" initial="hidden" whileInView="visible" viewport={viewport} variants={reveal} transition={transition}>
          <div><p className="eyebrow light"><span /> ÁREA DO CLIENTE</p><h2>Já utiliza o GranjaFlow?</h2><p>Entre com seu acesso e continue acompanhando sua operação.</p></div>
          <a className="button button-light" href={APP_URL} target="_blank" rel="noreferrer">Acessar o sistema <Arrow /></a>
        </motion.div>
      </section>

      <section className="faq" id="faq">
        <motion.div className="faq-heading" initial="hidden" whileInView="visible" viewport={viewport} variants={fromLeft} transition={transition}><p className="eyebrow"><span /> PERGUNTAS FREQUENTES</p><h2>Antes da demonstração, <em>vale saber.</em></h2><p>Respostas diretas sobre o funcionamento atual da plataforma e sua aplicação na rotina.</p><a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">Falar com um especialista <Arrow /></a></motion.div>
        <motion.div className="faq-list" initial="hidden" whileInView="visible" viewport={viewport} transition={{ staggerChildren: reduceMotion ? 0 : 0.07 }}>{faqs.map(([q, a], index) => <motion.details key={q} open={index === 0} variants={reveal} transition={transition}><summary>{q}<span>+</span></summary><p>{a}</p></motion.details>)}</motion.div>
      </section>

      <section className="final-cta">
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fromLeft} transition={transition}><p className="eyebrow light"><span /> CONHEÇA O GRANJAFLOW</p><h2>Mais contexto no campo. <em>Mais clareza para decidir.</em></h2></motion.div>
        <motion.div className="final-actions" initial="hidden" whileInView="visible" viewport={viewport} variants={fromRight} transition={transition}><a className="button button-light" href={WHATSAPP} target="_blank" rel="noreferrer">Agendar demonstração <Arrow /></a><a className="ghost-link" href={APP_URL} target="_blank" rel="noreferrer">Acessar sistema <Arrow /></a></motion.div>
      </section>

      <footer>
        <div className="footer-brand"><Brand /><p>Tecnologia para gestão integrada de granjas. Dados do campo transformados em visão operacional.</p></div>
        <div className="footer-links"><strong>Produto</strong><a href="#solucao">Solução</a><a href="#recursos">Recursos</a><a href="#como-funciona">Como funciona</a><a href={APP_URL} target="_blank" rel="noreferrer">Acessar plataforma</a></div>
        <div className="footer-links"><strong>Contato</strong><a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a><a href={WHATSAPP} target="_blank" rel="noreferrer">+55 45 99931-7831</a><a href={WHATSAPP} target="_blank" rel="noreferrer">Agendar demonstração</a></div>
        <div className="footer-bottom"><span>© 2026 GranjaFlow.</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Desenvolvido pela FFR do Brasil Technology.</a><a href="#inicio">Voltar ao topo</a></div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Agendar demonstração pelo WhatsApp"><WhatsAppIcon /><b>WhatsApp</b></a>
    </main>
  );
}
