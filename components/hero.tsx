"use client";

import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { Header } from "./header";
import { DashboardMockup } from "./dashboard-mockup";
import { DEMO_URL } from "@/constants/links";

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
          <p data-hero>Centralize registros, acompanhe lotes, identifique riscos e transforme dados reais do campo em decisões mais rápidas.</p>
          <div className="heroActions" data-hero>
            <a className="button" href={DEMO_URL} target="_blank" rel="noopener noreferrer" data-track="hero-demo">Solicitar demonstração <ArrowRight size={18}/></a>
            <a className="buttonGhost" href="#solucao"><span><Play size={14} fill="currentColor"/></span> Conhecer a plataforma</a>
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
