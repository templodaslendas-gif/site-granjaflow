# Handoff — reconstrução comercial, SEO, GEO e AIO do GranjaFlow

Data: 11 de novembro de 2026

## Estado

- Repositório: `templodaslendas-gif/site-granjaflow`
- Branch local: `site/arquitetura-conteudo-seo-fase-5`
- Base: `origin/main` no commit `b11024afb8056d4b4544e12acbe47afb24783a37`
- Produção não alterada nesta fase
- Commit, push, prévia e merge ainda não realizados

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

## Limitação de prévia local

O executor de prévia gerenciada chamou `next dev --host`, enquanto o Next.js aceita `--hostname`. O procedimento oficial proíbe alterar o código para compensar uma falha da infraestrutura. Por isso, a validação visual em navegador deve ser feita na prévia automática da Vercel após push da branch.

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

1. Autorizar commit e push da branch
2. Aguardar prévia automática da Vercel
3. Validar home e novas páginas em 320, 360, 390, 412, 768 e desktop
4. Corrigir eventuais problemas visuais
5. Entregar ZIP e relatório de homologação
6. Solicitar autorização separada para merge e produção
7. Após produção, acessar Search Console, enviar sitemap e solicitar indexação das URLs principais
8. Importar a propriedade no Bing Webmaster Tools e avaliar IndexNow quando houver frequência de atualização
