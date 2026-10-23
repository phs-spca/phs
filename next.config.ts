import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qkkuacqtcsfjbnzmxmhk.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
