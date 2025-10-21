import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {},
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
