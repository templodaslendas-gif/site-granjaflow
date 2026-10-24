# Relatório da Fase 4, políticas brasileiras e Search Console

Data: 24 de outubro de 2026

## Escopo concluído localmente

- Política de Privacidade e LGPD revisada para o site institucional do GranjaFlow
- Separação explícita entre o tratamento do site público e o contexto operacional do aplicativo
- Dados de contato do contexto agro descritos sem ampliar a coleta do site
- Transparência sobre Vercel, WhatsApp e checkout da Lastlink
- Política de Cookies alinhada ao uso atual de armazenamento local estritamente necessário
- Confirmação textual de que não há cookies de publicidade, perfilamento ou análise comportamental nesta versão
- Termos de Uso alinhados à oferta anual, ao checkout externo e às regras brasileiras aplicáveis
- Direito de arrependimento descrito quando caracterizada relação de consumo
- Ausência de promessa de lucro, desempenho produtivo ou resultado sanitário
- Preservação do preço, checkout, conteúdo comercial, identidade visual e funcionamento do site

## Validação técnica

- `npm run typecheck`: aprovado
- `npm run lint`: aprovado
- `NEXT_PUBLIC_SITE_URL=https://www.granjaflow.com.br npm run build`: aprovado
- Páginas legais prerenderizadas com sucesso

## Search Console

- Propriedade de domínio `granjaflow.com.br` verificada na conta autorizada do Google Search Console
- Foi acrescentado somente o registro TXT de verificação do Google na zona DNS de `granjaflow.com.br`, com autorização específica
- Nenhum registro existente, outro domínio, e-mail, nameserver ou configuração da Vercel foi alterado
- Sitemap `https://www.granjaflow.com.br/sitemap.xml` enviado e processado com sucesso
- O Google encontrou 4 páginas no sitemap
- A página inicial foi confirmada como indexada
- O registro TXT deve permanecer no DNS para conservar a verificação
- Indexação não representa garantia de posição nos resultados da busca

## Informações ainda não inventadas

- Razão social completa
- CNPJ
- Endereço empresarial
- Existência de renovação automática
- Prazo promocional do preço anual
- Condições comerciais além das exibidas no checkout

Esses dados devem ser acrescentados somente quando forem confirmados pelo responsável. Recomenda-se revisão jurídica profissional antes de tratar os textos como parecer jurídico definitivo.
