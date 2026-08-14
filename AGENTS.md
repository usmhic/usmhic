# Repository guide for coding agents

## Product

This is the public usmhic profile repository and the source for osas.cloud, a
statically exported Next.js and Fumadocs site.

## Map

- `README.md`: GitHub profile landing page.
- `osas.cloud/app`: routes, metadata, sitemap, and robots configuration.
- `osas.cloud/components`: site sections and shared presentation.
- `osas.cloud/content`: project catalog and MDX documentation.
- `osas.cloud/lib`: shared site configuration.
- `.github/workflows`: checks and GitHub Pages deployment.

Read `ARCHITECTURE.md` before changing deployment or content boundaries.

## Commands

Use versions pinned in `mise.toml`.

- Install: `cd osas.cloud && pnpm install --frozen-lockfile`
- Type-check: `cd osas.cloud && pnpm run types:check`
- Lint: `cd osas.cloud && pnpm run lint`
- Build: `cd osas.cloud && pnpm run build`
- Container: `docker compose up --build`

## Guardrails

- The site must remain compatible with Next.js static export and GitHub Pages.
- Put project facts in `content/projects.ts`; do not duplicate them in components.
- Keep canonical URLs, sitemap, robots, Open Graph, and Pages base paths aligned.
- Use `usmhic` for authorship and repository links; use `osas.cloud` for the site brand.
- Do not add runtime-only server features to the static export.
- Update profile and site docs when project-facing information changes.
