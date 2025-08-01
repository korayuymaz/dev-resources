# Dev Resources

A full-stack monorepo application built with GraphQL (Apollo Server), Prisma and Next.js.  
This project showcases useful resources for frontend developers — categorized, filterable, and easily extendable.

## ✨ Features

- 📦 Monorepo structure using Turborepo + pnpm workspaces
- ⚙️ GraphQL API with Apollo Server and Prisma ORM
- 🧱 SQLite for local development, can switch to PostgreSQL easily
- 💅 Styled frontend with TailwindCSS
- ⚡ Lightning-fast development with TypeScript

---

## 📁 Folder Structure

```
dev-resources/
├── apps/
│   ├── backend/      # Apollo Server + Prisma + SQLite
│   └── frontend/     # Next.js + Apollo Client + TailwindCSS
├── tsconfig.base.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Setup database

```bash
cd apps/backend
npx prisma migrate dev --name init
pnpm generate
```

(Optional) Seed script can be added later.

### 3. Start development servers

```bash
pnpm dev
```

This will run both backend and frontend in parallel (configured via Turborepo).

---

## 🧱 Tech Stack

| Layer    | Technology                              |
| -------- | --------------------------------------- |
| Frontend | Next.js, TailwindCSS, Apollo Client     |
| Backend  | Apollo Server, Prisma ORM               |
| Database | SQLite (local), PostgreSQL (prod-ready) |
| Language | TypeScript                              |
| Tooling  | pnpm, Turborepo, tsx                    |

---

## 📌 Roadmap

- [x] Monorepo setup (pnpm + turbo)
- [x] Backend with GraphQL API (Apollo + Prisma)
- [x] Frontend with Next.js + Apollo Client
- [x] Mutations for add/update favorites
- [x] Category filter UI
- [ ] Deploy to Vercel

---

## 📄 License

MIT © 2025 – Koray Uymaz
