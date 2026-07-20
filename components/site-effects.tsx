"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = matchMedia("(pointer: coarse)").matches;
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (target) window.dispatchEvent(new CustomEvent("granjaflow:cta", { detail: { id: target.dataset.track } }));
    };
    document.addEventListener("click", onClick);
    if (reduce) return () => document.removeEventListener("click", onClick);

    let destroy = () => {};
    void Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
      const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf); };
      let frame = requestAnimationFrame(raf);
      const context = gsap.context(() => {
        gsap.to(".scrollProgress", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: .25 } });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, { y: 42, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
        });

        const staggeredGroups = [
          [".fragmentGrid", ".fragment"],
          [".ecosystemMap", ".roleCard"],
          [".steps", ".steps article"],
          [".featureGroups", ".featureGroups > article"],
          [".securityItems", ".securityItems > div"],
          [".languageList", ".languageList > div"],
        ] as const;
        staggeredGroups.forEach(([trigger, targets]) => {
          gsap.from(targets, { y: 30, opacity: 0, duration: .7, stagger: .11, ease: "power3.out", scrollTrigger: { trigger, start: "top 82%", once: true } });
        });

        gsap.from(".fragmentList", { x: -55, opacity: 0, duration: 1, scrollTrigger: { trigger: ".fragmentGrid", start: "top 78%", once: true } });
        gsap.from(".outcomeList", { x: 55, opacity: 0, duration: 1, scrollTrigger: { trigger: ".fragmentGrid", start: "top 78%", once: true } });
        gsap.from(".flowCore", { scale: .72, opacity: 0, duration: 1.1, ease: "back.out(1.5)", scrollTrigger: { trigger: ".fragmentGrid", start: "top 75%", once: true } });
        gsap.utils.toArray<HTMLElement>(".roleMock, .phoneFrame").forEach((mockup) => {
          gsap.from(mockup, { x: 60, rotateY: -5, opacity: 0, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: mockup, start: "top 84%", once: true } });
        });
        gsap.from(".chartBars i", { scaleY: 0, transformOrigin: "bottom", duration: .8, stagger: .08, ease: "power2.out", scrollTrigger: { trigger: ".dashboardShell", start: "top 85%", once: true } });
        gsap.from(".securityNode", { scale: .7, opacity: 0, duration: .65, stagger: .18, ease: "back.out(1.8)", scrollTrigger: { trigger: ".securityVisual", start: "top 80%", once: true } });

        if (!coarsePointer) {
          gsap.to(".floatCritical", { y: -10, duration: 2.1, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(".floatLot", { y: 9, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(".pulse", { rotate: 360, duration: 30, repeat: -1, ease: "none" });
          gsap.to(".securityOrbit.o1", { rotate: 360, duration: 36, repeat: -1, ease: "none" });
          gsap.to(".securityOrbit.o2", { rotate: -360, duration: 29, repeat: -1, ease: "none" });
          gsap.to(".securityNode.n1", { y: -8, duration: 2.3, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(".securityNode.n2", { y: 8, duration: 2.7, repeat: -1, yoyo: true, ease: "sine.inOut" });
          gsap.to(".securityNode.n3", { x: 7, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
        }
      });
      destroy = () => { cancelAnimationFrame(frame); lenis.destroy(); context.revert(); ScrollTrigger.getAll().forEach((item) => item.kill()); };
    });
    return () => { document.removeEventListener("click", onClick); destroy(); };
  }, []);
  return <div className="scrollProgress" aria-hidden="true" />;
}
