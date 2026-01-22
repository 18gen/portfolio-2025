import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
