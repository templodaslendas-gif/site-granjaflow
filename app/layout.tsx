import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.granjaflow.com.br"),
  title: "GranjaFlow | Gestão Integrada de Granjas",
  description: "Centralize registros, acompanhe lotes, mortalidade, ração e ocorrências. Conecte produtores, técnicos e integradoras em uma única plataforma.",
  openGraph: {
    title: "GranjaFlow | Gestão Integrada de Granjas",
    description: "A gestão da granja conectada do campo à integradora.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "GranjaFlow", description: "Tecnologia para transformar dados do campo em decisões mais rápidas." },
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
  return <html lang="pt-BR"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
