# GranjaFlow Site Comercial

Site institucional público do GranjaFlow, preparado para Next.js e Vercel.

## Executar localmente

```bash
npm ci
npm run dev
```

## Validar

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Publicação

Substitua o conteúdo do repositório atual por este pacote, preservando apenas a pasta oculta `.git`. Faça commit e push para a branch conectada à Vercel. Nenhuma variável de ambiente é obrigatória para o site público.

O domínio e o projeto existentes na Vercel não precisam ser recriados.

A versão do Node.js não é forçada pelo código. A publicação usa a versão configurada no próprio projeto da Vercel, evitando o aviso de substituição de versão.
