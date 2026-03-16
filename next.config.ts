import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    optimizePackageImports: [
      "@chakra-ui/react",
      "react-icons/fa",
      "react-icons/fa6",
      "react-icons/io",
      "react-icons/lu",
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
