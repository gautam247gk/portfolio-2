import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.northumbria.ac.uk",
      },
      {
        protocol: "https",
        hostname: "www.hud.ac.uk",
      },
    ],
  },
};

export default nextConfig;
