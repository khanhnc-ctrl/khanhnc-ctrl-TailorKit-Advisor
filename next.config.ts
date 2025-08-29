import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages project pages
  basePath: "/khanhnc-ctrl-TailorKit-Advisor",
  assetPrefix: "/khanhnc-ctrl-TailorKit-Advisor",
};

export default nextConfig;
