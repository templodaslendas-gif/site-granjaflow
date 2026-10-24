# Handoff SEO, GEO e AIO do GranjaFlow

Atualizado em 24 de outubro de 2026

## Estado reconciliado

- Repositório oficial: `templodaslendas-gif/site-granjaflow`
- Branch de produção confirmada: `main`
- Commit confirmado no GitHub e na produção: `a335defd2a9b3f0d20479b73e08d376d2c52279c`
- Projeto Vercel confirmado: `site-granjaflow-vc7b`
- Domínios confirmados: `www.granjaflow.com.br` e `granjaflow.com.br`
- Esta revisão ainda está apenas na cópia local, sem branch, commit, push ou deploy

## Decisões preservadas

- Preço publicado do GranjaFlow Gestão: de R$ 439,00 por R$ 197,90 por ano, equivalente a R$ 16,49 por mês
- Checkout do Gestão: Lastlink
- GranjaFlow Integra: negociação comercial por WhatsApp, sem checkout do Gestão
- Manifesto mantido em `/site.webmanifest`, pois é o arquivo existente no commit efetivamente publicado
- Nenhuma funcionalidade nova foi acrescentada à comunicação com base no inventário preliminar do produto
- Sem `Offer`, CNPJ, endereço, avaliação ou quantidade de clientes no JSON-LD

## Alterações locais preparadas

- URL canônica centralizada em `NEXT_PUBLIC_SITE_URL`
- Prévias e ambiente local configurados como `noindex, nofollow`
- Canonical próprio para as três páginas legais
- Remoção de `codex-preview` e da lista de palavras-chave de metadados
- Open Graph 1200 por 630 e cartão grande do Twitter
- JSON-LD factual para Organization, WebSite, GranjaFlow Gestão e GranjaFlow Integra
- Cabeçalhos de segurança, com CSP inicialmente em modo Report-Only
- Otimização de imagens pelo Next e dimensões explícitas nos elementos visuais
- Página 404 em português
- Políticas atualizadas para explicar checkout e tratamento de dados pela Lastlink
- `llms.txt` curto e factual, gerado a partir da URL configurada
- Correção de capitalização em “suinocultura brasileira” e “setor agroindustrial brasileiro”

## Evidência de produto

O arquivo `RELATORIO_SITE_PUBLICO_GRANJAFLOW_2026-10.md` foi classificado como preliminar e não aprovado para copy pública. Ele não comprova, por si só, disponibilidade em produção. Por esse motivo, esta fase não anuncia Armadilhas, offline, score, semáforo, estoque regulador, leitura automática de croqui ou outras funções ainda não verificadas diretamente no aplicativo publicado.

## Validações concluídas na cópia local

- `npm ci`: concluído
- `npm run typecheck`: aprovado sem erro
- `npm run lint`: aprovado sem erro
- `npm run build`: aprovado sem erro em modo de prévia e em modo de produção
- Prévia local: `noindex, nofollow` e `Disallow: /` confirmados
- Produção simulada: `index, follow` e `Allow: /` confirmados
- Canonical individual da home e das três páginas legais confirmado
- Sitemap sem data fictícia confirmado
- JSON-LD parseado como JSON válido com quatro entidades factuais
- `llms.txt`, 404 em português, imagem Open Graph e cabeçalhos de segurança confirmados por requisições locais
- Busca por padrões comuns de segredo concluída na cópia local e na branch padrão do GitHub, sem ocorrência encontrada
- Comparação final concluída contra os arquivos do commit publicado usados como base

Não foi possível executar uma varredura criptográfica completa de todos os blobs históricos porque a cópia de trabalho não contém o diretório Git. Essa limitação não afeta os testes do código atual e permanece registrada para uma etapa posterior.

## Pendências

- Confirmar razão social, CNPJ, endereço e canal responsável por privacidade antes de torná-los dados públicos
- Confirmar se o preço de R$ 197,90 é permanente ou promoção com prazo
- Realizar revisão jurídica das políticas
- Revisar juridicamente o uso das marcas de terceiros no carrossel
- Auditar o aplicativo publicado, função por função, antes da remanufatura comercial baseada em recursos novos
- Produzir screenshots com base demo e dados sintéticos autorizados
- Medir Lighthouse na prévia e guardar os resultados reais

## Próxima ação

Após os testes locais, solicitar autorização para criar a branch `seo/fase-2`, registrar os commits e enviar a branch ao GitHub. A prévia da Vercel deve permanecer sem indexação. Merge em `main` e produção exigem uma autorização posterior e separada.
