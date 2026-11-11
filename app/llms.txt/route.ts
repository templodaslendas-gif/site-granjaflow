import { SITE_URL } from "@/lib/site";
import { guides, resources } from "@/lib/content";

export function GET() {
  const resourceLinks = resources
    .map((resource) => `- ${resource.navLabel}: ${SITE_URL}/recursos/${resource.slug}`)
    .join("\n");
  const guideLinks = guides
    .map((guide) => `- ${guide.title}: ${SITE_URL}/conteudos/${guide.slug}`)
    .join("\n");

  const content = `# GranjaFlow

> Software para gestão da suinocultura, com controle de lotes, mortalidade, ração, custos, financeiro e resultados da granja.

## Páginas principais

- Site: ${SITE_URL}
- Recursos: ${SITE_URL}/recursos
- Conteúdos: ${SITE_URL}/conteudos
- Quem somos: ${SITE_URL}/quem-somos
- Privacidade e LGPD: ${SITE_URL}/privacidade
- Política de Cookies: ${SITE_URL}/cookies
- Termos de Uso: ${SITE_URL}/termos

## Produto

- GranjaFlow: plataforma de gestão para granjas de suínos
- Recursos apresentados: lotes, plantel, mortalidade, ração, estoque, compras, consumo, financeiro, custos, indicadores e histórico
- Público principal: produtores que administram a própria produção de suínos
- Demonstrações e condições comerciais: atendimento pelo WhatsApp informado no site

## Recursos explicados

${resourceLinks}

## Conteúdos técnicos

${guideLinks}

## Contato

- E-mail: contato@granjaflow.com.br
- Telefone e WhatsApp: +55 45 99931-7831
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
