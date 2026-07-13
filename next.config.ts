import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination:
          "https://urlshortener-backend-pmr9.onrender.com/auth/:path*",
      },
      {
        source: "/backend",
        destination: "https://urlshortener-backend-pmr9.onrender.com/",
      },
      {
        source: "/backend/:path*",
        destination:
          "https://urlshortener-backend-pmr9.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
