import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: "/Users/victorsamuel/Desktop/finstore-premiere-templates/template-01-penningtons",
  },
};

export default nextConfig;
