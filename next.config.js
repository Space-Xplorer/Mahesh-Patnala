/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimize for static export
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig