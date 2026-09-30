import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Restricted research pages are hosted separately at uxo.bastiankrohg.com.
  async redirects() {
    return [
      { source: "/uxo", destination: "https://uxo.bastiankrohg.com/", permanent: false },
      { source: "/uxo/:path*", destination: "https://uxo.bastiankrohg.com/:path*", permanent: false },
    ];
  },
};

export default nextConfig;
