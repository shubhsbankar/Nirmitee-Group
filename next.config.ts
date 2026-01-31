// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // keep any experimental features you need here
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
