/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'placehold.co'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;