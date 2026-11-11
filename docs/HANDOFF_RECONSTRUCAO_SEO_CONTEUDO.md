# Handoff — reconstrução comercial, SEO, GEO e AIO do GranjaFlow

Data: 11 de novembro de 2026

## Estado

- Repositório: `templodaslendas-gif/site-granjaflow`
- Branch: `site/arquitetura-conteudo-seo-fase-5`
- Base: `origin/main` no commit `b11024afb8056d4b4544e12acbe47afb24783a37`
- Commit remoto da reconstrução: `17bc484f795b6d50843fd851d4d5863812b56f89`
- Prévia Vercel: `https://site-granjaflow-vc7b-nvlw15y8d-templodaslendas-gifs-projects.vercel.app/`
- Estado da prévia: `Ready`
- Produção não alterada nesta fase
- Branch enviada ao GitHub e prévia automática gerada
- Merge e publicação em produção ainda não realizados

## Restrições preservadas

- A Hero publicada permanece com a mesma imagem, headline, texto e CTAs até o recebimento de um vídeo aprovado
- A seção “Referências da suinocultura brasileira” permanece com o mesmo título, marcas, ordem, cores, carrossel e assets
- Não há preço público, checkout ou botão de acesso ao aplicativo
- Não foram alterados aplicativo, Supabase, banco de dados ou regras de negócio
- Nenhuma funcionalidade não comprovada foi anunciada

## Nova arquitetura

- Home comercial
- `/recursos`
- `/recursos/gestao-de-lotes`
- `/recursos/controle-de-racao`
- `/recursos/controle-de-mortalidade`
- `/recursos/controle-de-custos`
- `/recursos/financeiro-da-granja`
- `/recursos/relatorios-e-indicadores`
- `/conteudos`
- `/conteudos/como-acompanhar-custo-por-suino`
- `/conteudos/compra-consumo-pagamento-de-racao`
- `/conteudos/indicadores-para-acompanhar-um-lote`
- `/quem-somos`
- Páginas legais existentes

## SEO, GEO e AIO

- Metadata e canonical próprios por página
- Organização, site e software mantidos no JSON-LD global
- WebPage, CollectionPage, Article, BreadcrumbList e FAQPage aplicados somente nas páginas correspondentes
- Sitemap ampliado para 16 URLs canônicas
- `llms.txt` ampliado com recursos e conteúdos
- Navegação interna entre home, recursos, guias e página institucional
- Conteúdo em HTML pré-renderizado
- Textos factuais, sem avaliações, clientes, resultados ou números comerciais inventados

## Validações realizadas

- `npm run typecheck`: aprovado
- `npm run lint`: aprovado
- Build Next.js 16.2.6 em produção: aprovado
- 25 páginas geradas
- Canonicals verificados no HTML compilado
- JSON-LD parseado como JSON válido nas páginas testadas
- Sitemap validado com 16 URLs
- Busca por preço anterior, checkout e botão de acesso: sem ocorrência na interface comercial
- `git diff --check`: aprovado
- Assets da seção de referências: sem alteração
- Prévia Vercel autenticada e conferida no navegador
- Hero, navegação, seção de referências, recursos, conteúdos, página institucional e páginas legais conferidos na prévia
- Ausência de preço comercial, checkout e botão “Acessar o sistema” confirmada na prévia
- Nenhum `overflow` horizontal detectado nas páginas verificadas no viewport de homologação
- Prévia com `noindex, nofollow` e `robots.txt` com `Disallow: /`
- Sitemap publicado na prévia com 16 URLs canônicas de produção
- `llms.txt` conferido com recursos, conteúdos e contatos factuais
- Página 404 em português conferida
- Geist e Montserrat passaram a ser hospedadas localmente no projeto
- Dependência de rede do `next/font/google` removida após uma falha transitória da Vercel ao resolver a fonte Montserrat
- Build limpo, sem cache anterior e sem referências a Google Fonts: aprovado

## Observação sobre a validação responsiva

A prévia da Vercel foi validada no navegador em desktop. A estrutura não apresentou rolagem horizontal nas páginas verificadas. O executor gerenciado e o Chromium do ambiente não permitiram emular visualmente todos os viewports móveis nesta rodada; por isso, a conferência final em 320, 360, 390, 412 e 768 px permanece como item de homologação antes do merge. O código contém os breakpoints e regras responsivas previstos, mas isso não substitui a inspeção visual final em dispositivo.

## Hero em vídeo

Pendente de arquivo do usuário.

- Fonte sugerida: Pexels
- Busca: `pig farming barn`, `pigs feeding in farm` ou `swine farming indoor`
- Formato: MP4, 16:9, 1920 × 1080
- Duração: 8 a 15 segundos
- Movimento: câmera estável ou lento deslocamento
- Sem texto, música, marca d’água, abate, animais machucados ou cenário precário
- Ao receber o original, gerar MP4 e WebM otimizados e uma imagem poster

## Próximos passos

1. Abrir a prévia e homologar visualmente em 320, 360, 390, 412 e 768 px
2. Corrigir eventuais problemas visuais encontrados na homologação móvel
3. Aprovar ou rejeitar a prévia
4. Solicitar autorização separada para merge e produção
5. Após produção, acessar Search Console, enviar sitemap e solicitar indexação das URLs principais
6. Importar a propriedade no Bing Webmaster Tools e avaliar IndexNow quando houver frequência de atualização
