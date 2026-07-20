import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://granjaflow.com.br"),
  title: "GranjaFlow | Gestão Integrada de Granjas",
  description: "Centralize registros, acompanhe lotes, mortalidade, ração e ocorrências. Conecte produtores, técnicos e integradoras em uma única plataforma.",
  alternates: { canonical: "/" },
  openGraph: { title: "GranjaFlow | Gestão Integrada de Granjas", description: "A gestão da granja conectada do campo à integradora.", type: "website", locale: "pt_BR" },
  twitter: { card: "summary_large_image", title: "GranjaFlow", description: "Tecnologia para transformar dados do campo em decisões mais rápidas." },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skipLink" href="#conteudo">Ir para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
