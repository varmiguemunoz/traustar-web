# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Traustar Logistics website — a bilingual (EN/ES) logistics company site built with Astro 6, React 19, and Tailwind CSS 4. Deployed on Vercel with SSR (`output: 'server'`).

## Commands

```bash
pnpm dev              # Dev server at localhost:4321
pnpm build            # Production build to ./dist/
pnpm preview          # Preview production build
pnpm format           # Format all files with Prettier
pnpm format:check     # Check formatting without writing
```

No test framework is configured. No linter (ESLint) is set up.

## Architecture

### Tech Stack
- **Astro 6.0.4** (SSR mode via `@astrojs/vercel`)
- **React 19** for interactive islands (`client:*` directives)
- **Tailwind CSS 4** via Vite plugin (not PostCSS)
- **shadcn/ui** (base-vega style) with `@base-ui/react` headless components
- **MDX** for blog content collections
- **Sharp** for image optimization

### Component Organization (Atomic Design)
```
src/components/
├── atoms/          # Button, Icon, Badge, SectionLabel
├── molecules/      # NavLink, FeatureItem, StatItem
├── organisms/      # Navbar, HeroSection, ServicesGrid, SiteFooter
├── screens/        # Page-specific sections (about/, blog/, services/)
├── ui/             # shadcn/ui React components
├── BaseHead.astro  # SEO meta tags, OG, JSON-LD
├── Header.astro
└── Footer.astro
```

### Page Structure Pattern
All pages follow: `BaseHead` in `<head>` → `Navbar` → content sections → `SiteFooter`. Pages are in `src/pages/` using Astro file-based routing. Service pages are under `/servicios/` (Spanish routes).

### Content Collections
Blog posts live in `src/content/blog/` as `.md`/`.mdx` files. Schema requires `title`, `description`, `pubDate`; optional `updatedDate` and `heroImage`. Rendered via `src/pages/blog/[...slug].astro`.

### SEO System
- `src/config/seo-metadata.ts` — centralized metadata per route
- `src/components/BaseHead.astro` — renders all meta/OG/Twitter/JSON-LD tags
- `src/utils/schema.ts` — JSON-LD generators (Organization, Service, BlogPosting, FAQ, etc.)
- `src/utils/createOgImage.ts` — dynamic OG images via Cloudinary

### i18n
Configured in `astro.config.mjs`: English at `/` (no prefix), Spanish at `/es/`. The `src/utils/i18n.ts` utility exists but is not actively used — most pages handle language inline.

## Key Configuration

### Path Aliases (tsconfig.json)
- `@/*` → `./src/*`
- `@components/*`, `@layouts/*`, `@config/*`, `@content/*`, `@styles/*`, `@utils/*`, `@icons/*`

### Prettier
Single quotes, tabs, semicolons, trailing commas, 100 char width. Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`.

### Design Tokens (src/styles/global.css)
Brand colors: `--color-primary: #0f49bd`, `--color-navy-deep: #001A33`. Font: Inter Variable (`--font-display`). Uses shadcn CSS variables for theming (light/dark via `.dark` class).

### Build Optimization
Terser minification with `drop_console` and `drop_debugger`. HTML/CSS/SVG compression via `astro-compress`. Image compression disabled in astro-compress (handled by Sharp).

## Conventions

- **Astro components**: PascalCase `.astro` files
- **React components**: PascalCase `.tsx` files in `ui/`
- **Pages**: lowercase kebab-case directories
- **Props**: Always typed via `interface Props` in frontmatter, destructured as `const { ... } = Astro.props`
- **Class merging**: Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- **Icons**: Lucide React for UI icons, Material Symbols for feature icons
- **Images**: Remote images from Cloudinary (`res.cloudinary.com`); use Astro `<Image>` component
- Node >= 22.12.0, pnpm as package manager
