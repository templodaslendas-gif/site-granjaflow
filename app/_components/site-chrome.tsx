import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINKS } from "@/lib/links";
import { WhatsAppIcon } from "./icons";

export function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-symbol" aria-hidden="true">
        <Image src="/favicon-96x96.png" alt="" width={96} height={96} sizes="48px" />
      </span>
      <strong>GranjaFlow</strong>
    </span>
  );
}

const navigation = [
  ["GranjaFlow", "/"],
  ["Recursos", "/recursos"],
  ["Conteúdos", "/conteudos"],
  ["Como funciona", "/#como-funciona"],
  ["Quem somos", "/quem-somos"],
  ["Contato", "/#contato"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="header-brand" href="/" aria-label="GranjaFlow, página inicial"><Brand /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
      <nav className="mobile-nav" aria-label="Navegação móvel">
        {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contato">
      <div className="footer-brand">
        <Brand />
        <p>Tecnologia para transformar rotina de campo, custos e resultados em decisões mais claras na suinocultura</p>
      </div>
      <div className="footer-links">
        <strong>GranjaFlow</strong>
        <Link href="/recursos">Recursos</Link>
        <Link href="/conteudos">Conteúdos</Link>
        <Link href="/quem-somos">Quem somos</Link>
      </div>
      <div className="footer-links">
        <strong>Contato</strong>
        <a href="mailto:contato@granjaflow.com.br">contato@granjaflow.com.br</a>
        <a className="footer-whatsapp" href={WHATSAPP_LINKS.demo} target="_blank" rel="noreferrer"><WhatsAppIcon />+55 45 99931-7831</a>
        <a href={WHATSAPP_LINKS.demo} target="_blank" rel="noreferrer">Solicitar demonstração</a>
      </div>
      <div className="footer-links">
        <strong>Legal</strong>
        <Link href="/privacidade">Privacidade e LGPD</Link>
        <Link href="/cookies">Política de Cookies</Link>
        <Link href="/termos">Termos de Uso</Link>
        <button type="button" data-open-cookie-settings>Gerenciar cookies</button>
      </div>
      <div className="footer-bottom">
        <span>© 2026 GranjaFlow, todos os direitos reservados</span>
        <a className="ffr-credit" href={WHATSAPP_LINKS.ffr} target="_blank" rel="noreferrer">
          <Image src="/brasil.svg" alt="Bandeira do Brasil" width={25} height={18} unoptimized />
          Desenvolvido pela FFR do Brasil Technology
        </a>
        <Link href="/#inicio">Voltar ao topo</Link>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={WHATSAPP_LINKS.product} target="_blank" rel="noreferrer" aria-label="Conhecer o GranjaFlow pelo WhatsApp">
      <WhatsAppIcon /><b>WhatsApp</b>
    </a>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <main id="inicio">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <SiteHeader />
      {children}
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
