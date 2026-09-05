import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "./cookie-consent";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.granjaflow.com.br"),
  title: "GranjaFlow | Gestão de granja e suinocultura",
  description: "Software para gestão de granja de suínos. Controle lotes, mortalidade, ração, estoque, custos, financeiro e resultados, do produtor independente à integradora.",
  keywords: ["software para suinocultura", "sistema para granja de suínos", "gestão de granja", "gestão de suinocultura", "controle de custos suinocultura", "controle de ração", "produtor independente de suínos", "software para integradora de suínos"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "GranjaFlow | Gestão inteligente da granja",
    description: "Controle lotes, ração, custos e resultados. GranjaFlow Gestão para o produtor independente e GranjaFlow Integra para operações integradas.",
    url: "https://www.granjaflow.com.br",
    siteName: "GranjaFlow",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary", title: "GranjaFlow | Gestão inteligente da granja", description: "Tecnologia, campo e resultado para produtores e operações integradas." },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<CookieConsent /></body></html>;
}
