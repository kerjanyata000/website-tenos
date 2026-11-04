# Tenos Website

Production web app for **PT. Tenos Data Teknologi**, built from the approved architecture and Claude Design homepage reference.

Design references (`file-html/`, `homepage/`, `brand-foundation/`, `design-tokens/`, `prompt/`, `visual-reference/`) live in the parent folder and are **not** part of this Next.js package.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Design tokens in CSS custom properties
- Roboto (display) + Manrope (body/UI) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`) |

## Milestone status

- **M1 — Foundation**: tokens, fonts, global styles, `Container` / `Section`, content stubs, brand logos
- **M2 — Core UI** (current): Button, TextLink, typography, Header, Footer, SkipLink
- **M3+**: Homepage sections — not started

## Scope notes

- English only (no language toggle)
- About Us / Contact nav items link to in-page anchors until dedicated pages are approved
- Contact details and Academy URL remain placeholders until Tenos provides them

## Brand tokens (approved)

| Role | Value |
|------|-------|
| Primary (cyan) | `#08BAC5` |
| Secondary (yellow) | `#FFD600` |
| Accent (violet) | `#7655E8` |
| Display font | Roboto |
| Body / UI font | Manrope |
