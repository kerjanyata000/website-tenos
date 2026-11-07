import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow LAN devices to load Next.js dev / HMR assets */
  allowedDevOrigins: ["127.0.0.1", "localhost", "192.168.1.5"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
