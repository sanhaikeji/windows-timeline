/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Enable static exports for deployment
  output: 'export',
  // Disable image optimization for static exports
  images: {
    unoptimized: true,
  },
  // Ensure proper handling of static assets
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
}

module.exports = nextConfig;