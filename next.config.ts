import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  agentRules: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
