"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { DEMO_URL } from "@/constants/links";

const links = [
  ["Solução", "#solucao"],
  ["Para quem", "#perfis"],
  ["Recursos", "#recursos"],
  ["Como funciona", "#como-funciona"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "isScrolled" : ""}`}>
      <div className="navWrap">
        <Brand />
        <nav className="desktopNav" aria-label="Navegação principal">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="navActions">
          <label className="language"><span className="srOnly">Selecionar idioma</span><select defaultValue="pt" aria-label="Selecionar idioma"><option value="pt">PT</option><option value="en">EN</option><option value="es">ES</option><option value="it">IT</option></select></label>
          <a className="login" href="#acessar">Acessar</a>
          <a className="button buttonSmall" href={DEMO_URL} target="_blank" rel="noopener noreferrer" data-track="header-demo">Solicitar demonstração</a>
          <button className="menuButton" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobileNav" aria-label="Navegação móvel">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button" href={DEMO_URL} target="_blank" rel="noopener noreferrer" data-track="mobile-demo" onClick={() => setOpen(false)}>Solicitar demonstração</a>
        </nav>
      )}
    </header>
  );
}
