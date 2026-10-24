import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | GranjaFlow",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p>Erro 404</p>
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe ou foi alterado.</p>
      <Link className="button" href="/">Voltar para o GranjaFlow</Link>
    </main>
  );
}
