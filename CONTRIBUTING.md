# Contributing

Thanks for helping improve the usmhic profile or osas.cloud. By participating,
you agree to follow the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Setup

Install the versions in `mise.toml`, then:

```bash
cd osas.cloud
pnpm install --frozen-lockfile
pnpm dev
```

## Make a change

Branch from `dev` using `feat/`, `fix/`, `docs/`, or `chore/`. Keep
commits focused and imperative. Project information belongs in
`osas.cloud/content/projects.ts`; avoid duplicating it in components or MDX.

Before opening a pull request, run:

```bash
cd osas.cloud
pnpm run types:check
pnpm run lint
pnpm run build
docker build -t usmhic-site:test .
```

Update metadata, sitemap/robots behavior, documentation, or `.env.example`
when your change affects them. UI changes should include a screenshot.

## Pull requests

Explain the problem and solution, link related issues, and record the commands
you ran. Never include client information, credentials, or unpublished project
details.

Questions are welcome in GitHub Discussions. Report security issues through the
private process in [SECURITY.md](./SECURITY.md).
