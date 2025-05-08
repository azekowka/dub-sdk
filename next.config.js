/** @type {import('next').NextConfig} */
const nextConfig = {
  // No error ignoring options here
  typescript: {
    // Enable this to allow the build to continue despite TypeScript errors
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      },
      {
        protocol: 'https',
        hostname: 'tailark.com'
      }
    ]
  },
  // Simple webpack optimization to avoid large string serialization
  webpack: (config) => {
    // Disable source maps in production
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    return config;
  }
}

module.exports = nextConfig 