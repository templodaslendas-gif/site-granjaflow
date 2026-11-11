import { SITE_URL } from "@/lib/site";

export function GET() {
  const content = `# GranjaFlow

> Software para gestão da suinocultura, com controle de lotes, mortalidade, ração, custos, financeiro e resultados da granja.

## Páginas

- Site: ${SITE_URL}
- Privacidade e LGPD: ${SITE_URL}/privacidade
- Política de Cookies: ${SITE_URL}/cookies
- Termos de Uso: ${SITE_URL}/termos

## Produto

- GranjaFlow: plataforma de gestão para granjas de suínos
- Recursos apresentados: lotes, plantel, mortalidade, ração, estoque, compras, consumo, financeiro, custos, indicadores e histórico
- Público principal: produtores que administram a própria produção de suínos
- Demonstrações e condições comerciais: atendimento pelo WhatsApp informado no site

## Contato

- E-mail: contato@granjaflow.com.br
- Telefone e WhatsApp: +55 45 99931-7831
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
