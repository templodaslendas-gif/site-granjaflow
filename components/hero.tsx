"use client";

import { ArrowRight } from "lucide-react";
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
          <div className="heroOffer" data-hero aria-label="Recursos do GranjaFlow">
            <div className="offerHeading"><span>Gestão para a rotina da suinocultura</span></div>
            <p>Conheça os recursos do GranjaFlow e fale com a equipe para receber as condições comerciais vigentes.</p>
            <ul>
              <li>Lotes, mortalidade e ração organizados</li>
              <li>Controle financeiro da granja</li>
              <li>Experiência responsiva</li>
              <li>Histórico para decisões mais seguras</li>
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
