"use client";

import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { Header } from "./header";
import { DashboardMockup } from "./dashboard-mockup";
import { SALES_URL } from "@/constants/links";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!root.current || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx: { revert: () => void } | undefined;
    void import("gsap").then(({ gsap }) => {
      ctx = gsap.context(() => {
        gsap.from("[data-hero]", { y: 30, opacity: 0, duration: .9, stagger: .1, ease: "power3.out" });
        gsap.from(".dashboardShell", { y: 44, rotateX: 6, opacity: 0, duration: 1.2, delay: .25, ease: "power3.out" });
      }, root);
    });
    return () => ctx?.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <Header />
      <div className="heroGrid" aria-hidden="true" />
      <div className="heroGlow heroGlowOne" aria-hidden="true" />
      <div className="heroGlow heroGlowTwo" aria-hidden="true" />
      <div className="heroInner">
        <div className="heroCopy">
          <div className="eyebrow" data-hero><span /> Gestão integrada de granjas</div>
          <h1 data-hero>A gestão da granja, <em>conectada</em> do campo à integradora</h1>
          <p data-hero>Centralize lotes, mortalidade, ração e financeiro para controlar a granja e identificar perdas antes que elas aumentem.</p>
          <div className="heroOffer" data-hero aria-label="Oferta anual do GranjaFlow Gestão">
            <div className="offerHeading"><span>Plano anual para o produtor</span><s>R$ 439,00</s></div>
            <div className="offerPrice"><small>por</small><strong>R$ 197,90</strong><span>/ano</span></div>
            <p><b>Equivale a R$ 16,49 por mês</b>, em uma única cobrança anual de R$ 197,90.</p>
            <ul>
              <li><Check size={17}/> Lotes, mortalidade e ração organizados</li>
              <li><Check size={17}/> Controle financeiro da granja</li>
              <li><Check size={17}/> Acesso pelo celular e computador</li>
              <li><Check size={17}/> Histórico para decisões mais seguras</li>
            </ul>
          </div>
          <div className="heroActions" data-hero>
            <a className="button buyButton" href={SALES_URL} target="_blank" rel="noopener noreferrer" data-track="hero-sales">Quero contratar o GranjaFlow <ArrowRight size={18}/></a>
          </div>
          <div className="trustRow" data-hero>
            <span>INTEGRADORA</span><i /><span>TÉCNICO</span><i /><span>PRODUTOR</span>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}
