# College of Engineering Kottarakkara

A responsive institutional website for College of Engineering Kottarakkara, built with Next.js, React, and TypeScript.

## Features

- Responsive home page and mobile navigation
- About, academics, admissions, placements, student-life, and contact routes
- Searchable and filterable placement opportunities
- Admission information and document sections
- Accessible contact and application forms
- IHRD branding and favicon

## Tech stack

- Next.js 14
- React 18
- TypeScript
- CSS

## Local development

Requirements: Node.js 18.17 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

This generates a static `out/` directory that is ready for Cloudflare Pages.

## Quality checks

```bash
npm run lint
npm run build
```

## Project structure

```text
public/              Static assets
src/app/             Pages, layout, global styles, and favicon
src/components/      Shared site components
src/data/            Shared content data
*.html               Original design-reference exports
DESIGN-HANDOFF.md    Design implementation notes
```

## Deployment

This project is configured for static hosting on Cloudflare Pages.

Recommended Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `out`
- Node version: 18 or newer

No environment variables are currently required.

## Cloudflare checklist

1. Push the repository to GitHub.
2. Create a new Cloudflare Pages project from that GitHub repo.
3. Use the build command `npm run build`.
4. Set the output directory to `out`.
5. Leave environment variables empty unless you add new features later.
6. Deploy and verify the published site.
>>>>>>> b5c555e (Version 0.1)
