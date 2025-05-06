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
  }
}

module.exports = nextConfig 