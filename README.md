# AstroWind Base

> AstroWind base template with custom Izzy testimonials component, sales call planning tools, and Docker support for containerized deployment.

![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Supported-2496ED?logo=docker&logoColor=white)

## Overview

AstroWind Base is a customized fork of the AstroWind template that extends the base framework with project-specific features. Key additions include a masonry-style testimonials page with star ratings and profile photos (filtered by category), sales call planning and objection-handling pages, a testimonials hub, and a standalone static testimonials widget. The project supports deployment via Docker with an Nginx reverse proxy, alongside standard Vercel and Netlify configurations.

## Features

- **Izzy Testimonials Page** -- Masonry-layout testimonials wall with star ratings, profile photos, and category-based filtering, sourced from a structured data file
- **Static Testimonials Widget** -- Standalone HTML/CSS/JS testimonials component (`izzy-testimonials-static/`) that can be embedded independently
- **Testimonials Hub** -- Central testimonials page aggregating feedback across categories
- **Testimonials Instructions** -- Guide page for collecting and managing testimonials
- **Sales Call Planning** -- Dedicated page for sales call scripts and objection handling strategies
- **Full AstroWind Feature Set** -- All standard AstroWind capabilities including:
  - Hero, Features, Steps, Content, FAQs, Stats, and CTA widgets
  - Blog system with MDX, categories, tags, and RSS
  - SEO optimization with sitemap and Open Graph tags
  - Dark mode support
  - Image optimization via Astro Assets and Unpic
- **Multiple Page Templates** -- Home, about, contact, pricing, services, plus industry-specific and landing page variants
- **Docker Support** -- Multi-stage Dockerfile with Nginx for containerized production deployment

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 5.0 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 + Typography plugin |
| Content | MDX |
| SEO | @astrolib/seo, @astrojs/sitemap |
| Analytics | @astrolib/analytics |
| Icons | Iconify (Tabler + Flat Color Icons) |
| Images | Unpic, Sharp |
| RSS | @astrojs/rss |
| Container | Docker + Nginx |
| Linting | ESLint + Prettier |

## Getting Started

```bash
# Clone the repository
git clone git@github.com:izzydoesizzy/astrowind-base.git
cd astrowind-base

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build manually
docker build -t astrowind-base .
docker run -p 8080:8080 astrowind-base
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run check` | Run all checks (Astro, ESLint, Prettier) |
| `npm run fix` | Auto-fix ESLint and Prettier issues |

## Project Structure

```
├── izzy-testimonials-static/  # Standalone testimonials widget
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── nginx/                     # Nginx configuration for Docker
├── src/
│   ├── components/
│   │   ├── CustomStyles.astro
│   │   ├── Logo.astro
│   │   ├── blog/              # Blog components
│   │   ├── common/            # Shared components
│   │   ├── pages/             # Page-specific components
│   │   ├── ui/                # UI primitives
│   │   └── widgets/           # Section widgets (Hero, Features, etc.)
│   ├── data/
│   │   └── testimonials.ts    # Testimonials data with categories
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   ├── services.astro
│   │   ├── izzy-testimonials.astro      # Masonry testimonials page
│   │   ├── testimonials-hub.astro       # Testimonials hub
│   │   ├── testimonials-instructions.astro
│   │   ├── sales-call-script.astro      # Sales call planning
│   │   ├── sales-call-planning-objections.astro
│   │   ├── homes/             # Industry-specific templates
│   │   ├── landing/           # Landing page variants
│   │   └── [...blog]/         # Dynamic blog routes
│   ├── styles/
│   │   └── testimonials.css   # Masonry testimonials styles
│   └── layouts/               # Page layout templates
├── Dockerfile                 # Multi-stage Docker build
├── docker-compose.yml         # Docker Compose configuration
├── vercel.json                # Vercel deployment config
└── netlify.toml               # Netlify deployment config
```

## Deployment

The site can be deployed to any static hosting provider or via Docker.

- **Vercel/Netlify** -- Configuration files included; deploy directly from the repository
- **Docker** -- Multi-stage build producing an Nginx container serving static assets on port 8080
- **GitHub Pages** -- Build and deploy the `dist/` directory

---

**Tags:** `template`
**Created:** 2025-12
**Status:** Functional
**Author:** [Izzy Piyale-Sheard](https://github.com/izzydoesizzy) -- @izzydoesizzy
