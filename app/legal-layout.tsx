/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function LegalLayout({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand-lockup" href="/" aria-label="Voltar para o GranjaFlow">
          <span className="brand-symbol"><img src="/favicon-96x96.png" alt="" width="96" height="96" /></span>
          <span><strong>GranjaFlow</strong><small>TECNOLOGIA PARA SUINOCULTURA</small></span>
        </Link>
        <Link className="legal-back" href="/">Voltar ao site</Link>
      </header>
      <article className="legal-content">
        <h1>{title}</h1>
        <p className="legal-intro">{intro}</p>
        <p className="legal-update">Última atualização: 5 de setembro de 2026</p>
        {children}
      </article>
    </main>
  );
}
