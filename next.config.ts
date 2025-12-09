import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 Enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // 👈 Needed for static export if you use next/image
  },
};

export default nextConfig;