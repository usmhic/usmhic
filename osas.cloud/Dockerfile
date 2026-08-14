# syntax=docker/dockerfile:1.7

FROM node:24-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=usmhic-site-pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

ARG APP_URL=https://osas.cloud
ARG GITHUB_PAGES_URL=https://usmhic.github.io
ENV NEXT_PUBLIC_APP_URL=$APP_URL \
    NEXT_PUBLIC_GITHUB_PAGES_URL=$GITHUB_PAGES_URL

RUN pnpm run build

FROM alpine:3.23 AS runtime

LABEL org.opencontainers.image.title="osas.cloud" \
      org.opencontainers.image.description="Static site for osas.cloud and the usmhic open-source ecosystem" \
      org.opencontainers.image.source="https://github.com/usmhic/usmhic" \
      org.opencontainers.image.authors="usmhic" \
      org.opencontainers.image.licenses="MIT"

RUN addgroup -S -g 10001 site \
    && adduser -S -D -H -u 10001 -G site site
COPY --from=build --chown=10001:10001 /app/out /site

USER site
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:8080/ >/dev/null || exit 1

ENTRYPOINT ["busybox", "httpd", "-f", "-p", "8080", "-h", "/site"]
