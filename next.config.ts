import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: { mdxType: "gfm" },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
