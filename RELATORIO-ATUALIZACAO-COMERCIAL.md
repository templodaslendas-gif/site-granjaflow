# Relatório da atualização comercial do GranjaFlow

Data: 5 de setembro de 2026

## 1. Estrutura anterior encontrada

- Landing page em Next.js 16, React 19, TypeScript e Motion.
- Página principal única, com Hero, pilares, problemas, perfis, recursos, processo, acesso ao sistema, FAQ, CTA final e rodapé.
- Identidade visual consolidada em azul escuro, verde, amarelo e fundos neutros.
- Imagens reais e peças do GranjaFlow já armazenadas localmente no projeto.
- CTA comercial via WhatsApp e acesso separado para `app.granjaflow.com.br`.
- Comunicação anterior colocava produtor, técnico e integradora no mesmo nível, o que enfraquecia a leitura do produto para o produtor independente.

## 2. Alterações realizadas

- Hero reposicionada para apresentar o GranjaFlow como plataforma para produtor independente e operações integradas.
- GranjaFlow Gestão transformado na principal porta comercial.
- GranjaFlow Integra mantido como segundo caminho claro.
- Nova seção de escolha entre as duas experiências.
- Nova seção dedicada ao produtor independente e à pergunta sobre custo por suíno.
- Nova demonstração visual de custos, identificada como ilustrativa.
- Novo fluxo de funcionamento, seção econômica, uso no campo e mapa operacional do Integra.
- Carrossel setorial reposicionado, com fundo claro e marcas em suas cores originais.
- Títulos padronizados em uma única cor, sem pontos finais ou travessões.
- Espaçamento vertical reduzido entre as seções.
- Ícones decorativos do fluxo de funcionamento removidos.
- Rodapé ampliado com WhatsApp, crédito clicável da FFR, bandeira do Brasil e direitos reservados.
- Políticas de Privacidade e LGPD, Cookies e Termos de Uso adicionadas.
- Aviso de cookies com preferência salva localmente.
- SEO, sitemap e robots atualizados.

## 3. Comunicação do GranjaFlow Gestão

Público: produtor independente.

Mensagem central: controle de lotes, plantel, mortalidade, ração, estoque, compras, consumo, contas, custos, resultado econômico, fluxo de caixa, indicadores e histórico.

CTA principal: `Quero controlar minha granja`.

## 4. Comunicação do GranjaFlow Integra

Público: integradoras, cooperativas, técnicos e produtores integrados.

Mensagem central: acompanhamento de técnicos, produtores, granjas e lotes, com perfis operacionais, mortalidade, ração, agenda, visitas, avaliações, score, semáforo e dashboards consolidados.

CTA secundário: `Falar sobre minha integração`.

## 5. Empresas pesquisadas

- MBRF, identidade corporativa atual para a estrutura anteriormente conhecida como BRF.
- Aurora Coop.
- Frimesa Cooperativa Central.
- C.Vale Cooperativa Agroindustrial.
- Lar Cooperativa Agroindustrial.
- Copacol Cooperativa Agroindustrial.

Todas possuem atuação oficial documentada em cadeias agroindustriais, cooperativismo ou produção integrada. A pesquisa confirmou relação direta das quatro primeiras com suinocultura e produtores integrados. Lar e Copacol foram mantidas como referências regionais relevantes do cooperativismo e das integrações produtivas.

## 6. Fontes oficiais usadas

- MBRF: https://www.mbrf.com/
- MBRF, qualidade e cadeia de produtores integrados: https://www.mbrf.com/qualidade/
- MBRF, relatório integrado 2025: https://www.mbrf.com/wp-content/uploads/2026/06/Relatorio-Resumido-MBRF-2025.pdf
- Aurora Coop: https://auroracoop.com.br/
- Aurora Coop, sistema cooperativo: https://auroracoop.com.br/sistema-aurora-coop/
- Frimesa: https://frimesa.com.br/
- Frimesa, Suíno Certificado: https://frimesa.com.br/suino-certificado-frimesa-1767716036/
- C.Vale: https://www.cvale.com.br/
- C.Vale, integração: https://www.cvale.com.br/site/imprensa/noticia/944/cvale-amplia-integracao
- Lar Cooperativa: https://www.lar.ind.br/
- Lar, pecuária: https://www.lar.ind.br/lar-agro/pecuaria/
- Copacol: https://www.copacol.com.br/

## 7. Logos usadas no carrossel

- Aurora
- BRF
- C.Vale
- Frimesa
- Lar Cooperativa
- Copacol
- Primato
- Copagril
- JBS
- Seara

## 8. Origem e condição de uso dos assets

O carrossel desta revisão usa os arquivos coloridos fornecidos pelo responsável pelo projeto, armazenados localmente e sem hotlink. As marcas permanecem propriedade de seus titulares. Antes de campanhas pagas ou materiais impressos, recomenda-se uma revisão jurídica específica ou autorização dos titulares.

## 9. Texto do carrossel

`Referências da suinocultura Brasileira`

## 10. Disclaimer

O disclaimer visual abaixo do carrossel foi removido conforme solicitado. Os Termos de Uso continuam registrando que marcas de terceiros são referências setoriais e não representam parceria, homologação ou vínculo comercial.

## 11. CTAs

- Conhecer GranjaFlow Gestão.
- Conhecer GranjaFlow Integra.
- Quero controlar minha granja.
- Solicitar demonstração do Gestão.
- Falar sobre minha integração.
- Acessar sistema.

Todos os contatos comerciais usam `+55 45 99931-7831`, com mensagem contextual para cada solução.

## 12. SEO

- Título e descrição reescritos para gestão de granja e suinocultura.
- Termos aplicados naturalmente na página e nos metadados.
- Canonical configurada para `https://www.granjaflow.com.br`.
- Robots e sitemap incluídos.
- Páginas legais com título e descrição próprios.

## 13. Mobile

Foram criadas regras específicas para celular, tablet e desktop, incluindo 320, 360, 390, 412, 768 e telas amplas. Grades passam de duas ou três colunas para uma coluna, CTAs ocupam a largura disponível e o carrossel mantém proporção sem gerar rolagem horizontal da página.

## 14. Testes e build

- TypeScript: aprovado com `npx tsc --noEmit`.
- Lint: aprovado com `npm run lint`.
- Teste existente: aprovado com `npm test`.
- Build de produção: aprovado, incluindo as rotas `/`, `/cookies`, `/privacidade` e `/termos`.
- Validação visual em navegador: imagens carregadas, Hero, recursos, processo e CTAs sem falhas aparentes.
- Largura da página validada sem rolagem horizontal no desktop.
- Validação responsiva executada em 320, 360, 390, 412 e 768 pixels, sem rolagem horizontal ou imagens obrigatórias quebradas.
- Preferência por redução de movimento respeitada nas animações e no carrossel.

## 15. Arquivos alterados ou adicionados

- `app/page.tsx`
- `app/globals.css`
- `app/layout.tsx`
- `app/cookie-consent.tsx`
- `app/legal-layout.tsx`
- `app/privacidade/page.tsx`
- `app/cookies/page.tsx`
- `app/termos/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`
- `public/brands/*`
- `next.config.ts`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `README.md`
- `.gitignore`
- `RELATORIO-ATUALIZACAO-COMERCIAL.md`

## 16. Aprovações necessárias antes de publicar

- Confirmar visualmente a prioridade comercial do GranjaFlow Gestão.
- Confirmar que todos os recursos listados nos dois produtos já estão liberados para comunicação pública.
- Aprovar os valores ilustrativos usados no mockup ou solicitar outros números.
- Aprovar o uso nominativo das marcas do setor. O disclaimer visual foi removido a pedido, mas a proteção permanece nos Termos de Uso.
- Revisar as políticas com assessoria jurídica antes do uso definitivo, pois os textos são uma base operacional e não substituem aconselhamento jurídico.
- Autorizar publicação em produção somente depois da homologação.
