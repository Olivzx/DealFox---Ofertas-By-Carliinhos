# DealFox 🦊

Catálogo público de ofertas com painel administrativo privado.

## Stack
- Next.js + React + TypeScript
- Supabase Auth + PostgreSQL + RLS
- Lucide React
- CSS responsivo

## Funcionalidades
- Catálogo público sem login
- Busca e filtros por categoria
- Destaques separados das demais ofertas
- Página individual de produto
- Links de afiliado
- Painel `/admin`
- Login e recuperação de senha
- Tema claro/escuro
- Contato por WhatsApp

## Configuração
Crie `.env.local` a partir de `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

Execute o SQL de `supabase/schema.sql` no Supabase SQL Editor e vincule os usuários administrativos à tabela `admin_users`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` e o painel em `/admin/login`.

Nunca coloque uma `service_role key` no frontend ou no repositório.