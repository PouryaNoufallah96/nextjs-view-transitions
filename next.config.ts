import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http.dog",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
