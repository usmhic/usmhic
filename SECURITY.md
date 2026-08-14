# Security policy

## Reporting a vulnerability

Please do not open a public issue for a suspected vulnerability. Use
[GitHub private vulnerability reporting](https://github.com/usmhic/usmhic/security/advisories/new)
with the affected page, commit, reproduction steps, and impact.

Do not include credentials, private client information, or sensitive logs.
Security fixes target the deployed site and the `main` branch.

## Deployment notes

The site is statically exported and deployed through GitHub Pages. Keep workflow
permissions minimal, review third-party actions and dependencies, and never add
secrets to browser-visible `NEXT_PUBLIC_*` values.
