import type { NextConfig } from "next";

/**
 * Next.js configuration
 * 
 * For Hostinger deployment:
 * - Use output: 'export' for static site generation
 * - Set images.unoptimized to true for static image exports
 * - Comment these out if deploying to a Node.js hosting environment
 */
const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting
  output: "export",
  images: {
    unoptimized: true,
  },
  
  // Keep any other configurations below
};

export default nextConfig;
