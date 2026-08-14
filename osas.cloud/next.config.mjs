import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const isGithubPages = process.env.GITHUB_PAGES_BASE_PATH === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export
  output: "export",

  // Required for static export
  images: {
    unoptimized: true,
  },

  // Produces folder/index.html
  trailingSlash: true,

  // Automatically configure GitHub Pages
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,

  // Better build reliability
  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: [
      "fumadocs-ui",
      "lucide-react",
    ],
  },
};

export default withMDX(nextConfig);
