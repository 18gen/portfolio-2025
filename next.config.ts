import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    optimizePackageImports: ["@chakra-ui/react", "react-icons"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
