import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "./cookie-consent";
import StructuredData from "./structured-data";
import { SHOULD_INDEX, SITE_URL } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-heading", subsets: ["latin"], weight: ["700", "800", "900"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GranjaFlow | Gestão de granja e suinocultura",
  description: "Software para gestão de granja de suínos. Controle lotes, mortalidade, ração, estoque, custos, financeiro e resultados em um único acesso anual.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GranjaFlow | Gestão inteligente da granja",
    description: "Controle lotes, mortalidade, ração, custos, financeiro e resultados da granja em uma única plataforma.",
    url: SITE_URL,
    siteName: "GranjaFlow",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "GranjaFlow | Gestão inteligente da granja", description: "Tecnologia, campo e resultado para controlar sua granja em uma única plataforma." },
  robots: { index: SHOULD_INDEX, follow: SHOULD_INDEX },
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
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}><StructuredData />{children}<CookieConsent /></body></html>;
}
