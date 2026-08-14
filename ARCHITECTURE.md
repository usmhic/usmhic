# Architecture

The repository has two public surfaces: the GitHub profile README at the root
and the osas.cloud static site in `osas.cloud/`.

```text
content/projects.ts + MDX + React components
                    |
                    v
          Next.js static export (out/)
                    |
          +---------+---------+
          |                   |
          v                   v
      GitHub Pages       Docker image
```

## Boundaries

| Path | Responsibility |
| --- | --- |
| `README.md` | Concise GitHub profile and ecosystem index |
| `osas.cloud/content` | Project facts and long-form documentation |
| `osas.cloud/components` | Rendering and interaction |
| `osas.cloud/app` | Routes, metadata, discovery files, and static export |
| `.github/workflows` | Pull-request checks and Pages deployment |

## Key decisions

The site uses Next.js static export so GitHub Pages can host it without a
server. Search is generated at build time. Canonical URLs are centralized in
`osas.cloud/lib/site.ts`; project facts are centralized in
`osas.cloud/content/projects.ts`.

The production Docker image serves exactly the same `out/` directory as Pages.
It is useful for local smoke tests and alternate static hosting, but Pages
remains the default deployment.

## Constraints

Server actions, runtime API routes, databases, and runtime secrets are outside
this site's architecture. Any feature that requires them needs a deliberate
hosting decision before implementation.
