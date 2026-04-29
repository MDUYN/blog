import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isProd = process.env.NODE_ENV === "production";
const repo = "blog";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: { mdxType: "gfm" },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
