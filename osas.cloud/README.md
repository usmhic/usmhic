# osas.cloud

[![CI](https://github.com/usmhic/usmhic/actions/workflows/ci.yml/badge.svg)](https://github.com/usmhic/usmhic/actions/workflows/ci.yml)
[![Deploy](https://github.com/usmhic/usmhic/actions/workflows/deploy.yml/badge.svg)](https://github.com/usmhic/usmhic/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](../LICENSE)

osas.cloud is the public project studio and documentation site for
[usmhic](https://github.com/usmhic). It is a statically exported Next.js and
Fumadocs app deployed to GitHub Pages.

## Structure

| Path | Purpose |
| --- | --- |
| `app/` | Routes, SEO metadata, docs, search, sitemap, and robots |
| `components/` | Landing-page sections and shared UI |
| `content/site.ts` | Canonical, bilingual (en/fr) site copy and project catalog |
| `content/docs/` | MDX guides |
| `lib/` | Shared site and layout configuration |
| `public/` | Static assets and custom-domain configuration |

The static export has no runtime server or secrets. See
[ARCHITECTURE.md](../ARCHITECTURE.md) for deployment details.

## Quick start

Use the tool versions pinned at the repository root:

```bash
mise install
cd osas.cloud
pnpm install --frozen-lockfile
pnpm dev
```

Open <http://localhost:3000>. For a production-equivalent container from the
repository root:

```bash
cp .env.example .env
docker compose up --build
```

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm run types:check` | Generate MDX/route types and run TypeScript |
| `pnpm run lint` | Run ESLint |
| `pnpm run build` | Create the static export in `out/` |
| `pnpm start` | Serve an existing `out/` export |

## Configuration

`NEXT_PUBLIC_APP_URL` sets the canonical public URL.
`NEXT_PUBLIC_GITHUB_PAGES_URL` records the Pages origin. Both are public,
build-time values; this app must never receive runtime secrets.

## Contributing

Read the repository [contribution guide](../CONTRIBUTING.md) and
[agent guide](../AGENTS.md). Site copy and project facts belong in
`content/site.ts` (with an `en` and `fr` entry each); presentation belongs
in components.

## License

[MIT](../LICENSE) © usmhic
