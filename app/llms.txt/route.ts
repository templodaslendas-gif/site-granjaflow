import { SITE_URL } from "@/lib/site";

export function GET() {
  const content = `# GranjaFlow

> Software para gestão da suinocultura, com uma solução para produtores independentes e outra para operações integradas.

## Páginas

- Site: ${SITE_URL}
- Privacidade e LGPD: ${SITE_URL}/privacidade
- Política de Cookies: ${SITE_URL}/cookies
- Termos de Uso: ${SITE_URL}/termos

## Produtos

- GranjaFlow Gestão: voltado ao produtor independente
- GranjaFlow Integra: voltado a integradoras, cooperativas e operações integradas

## Contato

- E-mail: contato@granjaflow.com.br
- Telefone e WhatsApp: +55 45 99931-7831
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
