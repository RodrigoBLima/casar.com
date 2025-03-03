## Repo Radar

Repo Radar é uma aplicação frontend responsiva que permite buscar usuários do GitHub, favoritar repositórios e desfavoritar repositórios previamente adicionados aos favoritos.

## Propósito da aplicação

O propósito do Repo Radar é simplificar a busca e organização de repositórios do GitHub, permitindo que os usuários encontrem perfis, favoritem projetos de interesse e gerenciem facilmente sua lista de favoritos para acesso rápido e eficiente.

# Guia de Início

## Configuração do `.env.local`

Para começar, você precisará configurar um **token pessoal** para autenticação. Siga os passos abaixo para criá-lo:

1. Acesse a página de tokens do GitHub: [GitHub Tokens](https://github.com/settings/tokens).
2. Gere um token com as permissões necessárias.
3. Exemplo de token gerado: `ghp_xxxxx`.

Depois, adicione o token gerado ao seu arquivo `.env.local` no formato:

```bash
GITHUB_TOKEN=ghp_xxxxx
```

## Rodando o Servidor de Desenvolvimento

Após configurar o token, você pode rodar o app com um dos seguintes comandos:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Veja em [http://localhost:3000](http://localhost:3000) o resultado.

## Rodando a aplicação com docker compose

```bash
docker compose up -d
```

Veja em [http://localhost:3000](http://localhost:3000) o resultado.

## Executando os Testes da Aplicação

Como rodar os testes da aplicação? você pode usar os seguintes comandos:

```bash
npm run test
# ou
yarn test
# ou
pnpm test
```

Caso precise rodar os testes em modo de observação (watch mode), use:

```bash
npm run test:watch
# ou
yarn test:watch
# ou
pnpm test:watch
```

## Rodando os Testes de Integração (Cypress)

Para rodar os testes end-to-end com **Cypress**, utilize um dos seguintes comandos:

```bash
npm run cypress
# ou
yarn cypress
# ou
pnpm cypress
```

## Tecnologias utilizadas

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Zod**
- **React Hook Form**
- **Cypress**
- **Jest**

## Demo

[Repo Radar](https://repo-radar-ten.vercel.app/)
