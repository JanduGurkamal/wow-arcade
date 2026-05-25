# WOW Arcade

Premium luxury e-commerce experience for **WOW Arcade** — acrylic photo magnets, framed artwork, travel-inspired decor, and personalized keepsakes.

## Stack

- **Next.js 16** (App Router)
- **TypeScript** + **Tailwind CSS v4**
- **Framer Motion** + **GSAP** (hero typography)
- **Lenis** smooth scrolling
- **next-themes** (light / dark)
- **shadcn-style** UI primitives (`Button`, `Badge`, Radix Slot)
- **Lucide** icons
- **next/image** with Unsplash CDN

## Run locally

```bash
cd wow-arcade
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** If `npm install` fails with `ENOSPC`, your system drive may be full. Point npm cache to another drive:
>
> ```powershell
> npm config set cache "F:\npm-cache"
> $env:TEMP="F:\temp"
> ```

## Build

```bash
npm run build
npm start
```

## Deploy on Laravel Forge

See **[DEPLOY-FORGE.md](./DEPLOY-FORGE.md)** for Nginx template, daemon (`npm run start`), zero-downtime deploy script, and SSL/DNS steps.

## Structure

| Path | Purpose |
|------|---------|
| `src/components/sections/` | Cinematic page sections (hero → gallery) |
| `src/components/layout/` | Header, footer |
| `src/components/ui/` | Design system primitives |
| `src/lib/data.ts` | Demo products, collections, testimonials |

## Design

- **Fonts:** Cormorant Garamond (headings) + DM Sans (body)
- **Palette:** warm cream, beige, charcoal, muted gold
- **Motion:** Lenis scroll, Framer reveals, reduced-motion respected

Replace Unsplash URLs in `src/lib/data.ts` with your product photography for production.
