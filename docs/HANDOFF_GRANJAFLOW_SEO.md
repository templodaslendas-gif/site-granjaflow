# Handoff SEO, GEO e AIO do GranjaFlow

Atualizado em 24 de outubro de 2026

## Fase 4, políticas brasileiras e Search Console

- Base local preparada a partir da versão da oferta única publicada
- Política de Privacidade refinada para o contexto comercial e agro, sem abranger indevidamente os dados operacionais do aplicativo
- Política de Cookies alinhada ao uso atual de armazenamento local estritamente necessário, sem cookies de análise, publicidade ou perfilamento
- Termos de Uso atualizados com contratação anual pela Lastlink, direito de arrependimento quando aplicável, responsabilidade sobre dados registrados e ausência de promessa de lucro ou resultado produtivo e sanitário
- Referências jurídicas mantidas em linguagem clara, com LGPD, Marco Civil da Internet, Código de Defesa do Consumidor e regras do comércio eletrônico
- Nenhum CNPJ, endereço, prazo promocional, renovação automática ou condição comercial não confirmada foi inventado
- Propriedade de domínio `granjaflow.com.br` verificada no Google Search Console por registro TXT autorizado
- Sitemap `https://www.granjaflow.com.br/sitemap.xml` enviado e processado com 4 páginas encontradas
- Página inicial confirmada pelo Search Console como indexada no Google
- O registro TXT deve permanecer no DNS para conservar a verificação da propriedade
- Esta fase permanece somente na cópia local até autorização separada para commit, push, merge e produção

## Fase 3, oferta única

- Branch: `site/oferta-unica`
- Decisão comercial: o site público passa a vender um único acesso anual ao GranjaFlow
- Removidas da comunicação pública as opções Integra, Conectado e Direto
- O aplicativo, o banco, o Supabase e as regras internas não foram alterados
- Preço preservado: de R$ 439,00 por R$ 197,90 ao ano, equivalente a R$ 16,49 por mês
- Checkout preservado: `https://lastlink.com/p/C29CE6377/`
- WhatsApp comercial preservado para dúvidas e demonstração
- Navegação, oferta, perguntas frequentes, rodapé, metadados, JSON-LD, `llms.txt`, privacidade e termos foram alinhados à oferta única
- Nenhuma funcionalidade nova foi anunciada
- `npm run typecheck`, `npm run lint` e `npm run build` aprovados localmente
- Oferta única publicada em produção no commit `6deaa147b856ceed7ea9aac7e24ce892c498aa16`

## Estado reconciliado

- Repositório oficial: `templodaslendas-gif/site-granjaflow`
- Branch de produção confirmada: `main`
- Commit confirmado no GitHub e na produção antes da Fase 4: `6deaa147b856ceed7ea9aac7e24ce892c498aa16`
- Projeto Vercel confirmado: `site-granjaflow-vc7b`
- Domínios confirmados: `www.granjaflow.com.br` e `granjaflow.com.br`
- Branch de trabalho: `seo/fase-2`
- Commit técnico validado: `d26006584ea7226e79fbd03beb30ff61d65a46db`
- Prévia Vercel: `https://site-granjaflow-vc7b-bdkc03a0i-templodaslendas-gifs-projects.vercel.app`
- Status da prévia: `READY`, sem merge em `main` e sem alteração da produção

## Decisões preservadas

- Preço publicado do GranjaFlow Gestão: de R$ 439,00 por R$ 197,90 por ano, equivalente a R$ 16,49 por mês
- Checkout do Gestão: Lastlink
- A comunicação pública atual oferece um único acesso anual; não há opções Integra, Conectado ou Direto no site
- Manifesto mantido em `/site.webmanifest`, pois é o arquivo existente no commit efetivamente publicado
- Nenhuma funcionalidade nova foi acrescentada à comunicação com base no inventário preliminar do produto
- Sem `Offer`, CNPJ, endereço, avaliação ou quantidade de clientes no JSON-LD

## Alterações implementadas na branch

- URL canônica centralizada em `NEXT_PUBLIC_SITE_URL`
- Prévias e ambiente local configurados como `noindex, nofollow`
- Canonical próprio para as três páginas legais
- Remoção de `codex-preview` e da lista de palavras-chave de metadados
- Open Graph 1200 por 630 e cartão grande do Twitter
- JSON-LD factual para a organização, o site e o software apresentado publicamente
- Cabeçalhos de segurança, com CSP inicialmente em modo Report-Only
- Otimização de imagens pelo Next e dimensões explícitas nos elementos visuais
- Página 404 em português
- Políticas atualizadas para explicar checkout e tratamento de dados pela Lastlink
- `llms.txt` curto e factual, gerado a partir da URL configurada
- Correção de capitalização em “suinocultura brasileira” e “setor agroindustrial brasileiro”

## Evidência de produto

O arquivo `RELATORIO_SITE_PUBLICO_GRANJAFLOW_2026-10.md` foi classificado como preliminar e não aprovado para copy pública. Ele não comprova, por si só, disponibilidade em produção. Por esse motivo, esta fase não anuncia Armadilhas, offline, score, semáforo, estoque regulador, leitura automática de croqui ou outras funções ainda não verificadas diretamente no aplicativo publicado.

## Validações concluídas

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
- Deploy automático da branch identificado na Vercel com status `READY`
- Prévia remota confirmada com `noindex, nofollow` e `Disallow: /`
- Canonical remoto confirmado para home, `/privacidade`, `/cookies` e `/termos`
- JSON-LD remoto parseado com quatro entidades factuais
- Conteúdo, preço, checkout e WhatsApp comercial preservados na prévia
- Responsividade verificada em 320, 360, 375, 390, 412, 768 e 1366 pixels, sem rolagem horizontal
- Página 404 remota confirmada em português e com `noindex`

Não foi possível executar uma varredura criptográfica completa de todos os blobs históricos porque a cópia de trabalho não contém o diretório Git. Essa limitação não afeta os testes do código atual e permanece registrada para uma etapa posterior.

## Pendências

- Confirmar razão social, CNPJ, endereço e canal responsável por privacidade antes de torná-los dados públicos
- Confirmar se o preço de R$ 197,90 é permanente ou promoção com prazo
- Realizar revisão jurídica profissional das políticas antes de tratá-las como parecer jurídico definitivo
- Revisar juridicamente o uso das marcas de terceiros no carrossel
- Auditar o aplicativo publicado, função por função, antes da remanufatura comercial baseada em recursos novos
- Produzir screenshots com base demo e dados sintéticos autorizados
- Medir Lighthouse na prévia e guardar os resultados reais

## Próxima ação

Revisar o pacote de homologação da Fase 4. Commit, push, merge e publicação das políticas permanecem sujeitos a autorização separada. Depois da publicação, conferir novamente as páginas legais no Search Console sem remover o TXT de verificação do DNS.
