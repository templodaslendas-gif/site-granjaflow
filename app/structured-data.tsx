import { absoluteUrl, SITE_URL } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GranjaFlow",
    url: SITE_URL,
    logo: absoluteUrl("/favicon-96x96.png"),
    email: "contato@granjaflow.com.br",
    telephone: "+55 45 99931-7831",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GranjaFlow",
    url: SITE_URL,
    inLanguage: "pt-BR",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GranjaFlow",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "pt-BR",
    url: absoluteUrl("/#granjaflow"),
    description: "Plataforma para acompanhar lotes, mortalidade, ração, custos, financeiro e resultados da granja.",
  },
];

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
    />
  );
}
