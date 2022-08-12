/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.picsum.photos',
      'encrypted-tbn3.gstatic.com',
      'encrypted-tbn1.gstatic.com',
      'encrypted-tbn0.gstatic.com',
    ],
  },
}

module.exports = nextConfig
