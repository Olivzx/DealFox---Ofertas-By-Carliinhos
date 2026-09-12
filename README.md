# DealFox 🦊

> **Ofertas boas não deveriam exigir horas de pesquisa.**
>
> O DealFox é uma plataforma moderna de descoberta de ofertas criada para transformar um catálogo de links de afiliados em uma experiência rápida, bonita e inteligente de compra — com vitrine pública para clientes e um painel privado para quem administra o negócio.

## 🚀 O que é o DealFox?

O DealFox nasceu para resolver um problema simples: **encontrar uma boa oferta ficou fácil de perder no meio de milhares de produtos.**

A proposta é reunir produtos, preços, categorias e links de compra em uma experiência centralizada, permitindo que o visitante descubra oportunidades sem precisar navegar por dezenas de páginas.

Ao mesmo tempo, o administrador ganha uma estrutura preparada para crescer: novos produtos podem ser cadastrados, ofertas podem ser destacadas, itens podem ser publicados ou ocultados e o catálogo pode evoluir sem alterar o código da aplicação.

**Em poucas palavras:** uma vitrine de ofertas com arquitetura de aplicação real, pronta para receber dados reais e crescer junto com o projeto.

## ✨ Por que este projeto é interessante?

### Para quem compra

- 🔎 Busca rápida por produtos, marcas e categorias
- 🏷️ Ofertas organizadas e fáceis de comparar
- ⭐ Destaques separados das demais oportunidades
- 🛒 Acesso direto à loja através do link da oferta
- 📱 Experiência responsiva para desktop e mobile
- 🌙 Tema claro e escuro
- 💬 Canal de contato via WhatsApp
- 🔐 Nenhum cadastro é necessário para navegar no catálogo

### Para quem administra

- 🧩 Painel administrativo privado
- ➕ Cadastro e gerenciamento de produtos
- ⭐ Controle de ofertas em destaque
- 👁️ Publicação e ocultação de produtos
- 🗂️ Organização por categorias
- 🔗 Gerenciamento de links de afiliado
- 🔑 Autenticação e recuperação de senha
- 🛡️ Controle de acesso baseado em Supabase Auth + RLS

### Para desenvolvedores

O DealFox também foi pensado como **uma base de projeto que pode ser expandida**.

A arquitetura separa apresentação, autenticação, acesso aos dados e regras de catálogo, criando espaço para evoluções como:

- automação de coleta de ofertas;
- integração com APIs de marketplaces;
- tracking e analytics;
- sistema de cupons;
- favoritos e listas de desejos;
- notificações de queda de preço;
- dashboards de vendas e cliques;
- múltiplos administradores e permissões;
- integração com WhatsApp e outros canais;
- expansão para uma plataforma completa de afiliados.

## 🧠 Stack tecnológica

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js + React + TypeScript |
| Backend | Next.js App Router |
| Banco de dados | PostgreSQL via Supabase |
| Autenticação | Supabase Auth |
| Segurança de dados | Row Level Security (RLS) |
| Ícones | Lucide React |
| Estilização | CSS responsivo |
| Deploy | Vercel |

## 🏗️ Arquitetura em alto nível

```text
                    ┌─────────────────────┐
                    │      Visitante      │
                    │  Catálogo público   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Next.js        │
                    │  UI + App Router    │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
        ┌─────────────────┐         ┌─────────────────┐
        │ Produtos ativos │         │ Área Admin      │
        │ públicos        │         │ protegida       │
        └────────┬────────┘         └────────┬────────┘
                 │                           │
                 └─────────────┬─────────────┘
                               ▼
                    ┌─────────────────────┐
                    │      Supabase       │
                    │ Auth + PostgreSQL   │
                    │        + RLS        │
                    └─────────────────────┘
```

## 🔐 Segurança desde a base

O catálogo público não precisa de autenticação. Já as operações administrativas ficam protegidas por autenticação e políticas de **Row Level Security**.

As credenciais reais do ambiente devem permanecer em variáveis de ambiente e **não fazem parte deste repositório**.

Nunca coloque uma `service_role key` no frontend ou no Git.

## ⚙️ Rodando localmente

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/Olivzx/DealFox---Ofertas-By-Carliinhos.git
cd DealFox---Ofertas-By-Carliinhos
npm install
```

Crie `.env.local` a partir do `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Configure o banco executando `supabase/schema.sql` no SQL Editor do Supabase.

Depois:

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

Área administrativa: `/admin/login`.

## 🎯 Visão do projeto

O DealFox não foi pensado apenas como uma página de produtos.

A ideia é construir uma **infraestrutura de descoberta de ofertas**: uma camada entre o consumidor e diferentes lojas, capaz de organizar oportunidades, facilitar a decisão de compra e, ao mesmo tempo, oferecer ao administrador ferramentas para controlar o catálogo.

Isso torna o projeto interessante tanto como produto quanto como base técnica para novos recursos.

> **Descubra. Compare. Aproveite.**
>
> **DealFox — o lugar onde boas ofertas encontram quem está procurando por elas.**

## 📌 Status

Projeto em evolução. A base atual contempla catálogo público, gerenciamento administrativo, autenticação, integração com Supabase, organização de ofertas e interface responsiva.

Novos módulos podem ser adicionados progressivamente sem abandonar a estrutura existente.

## 📄 Licença

Defina a licença do projeto conforme a estratégia de distribuição desejada.