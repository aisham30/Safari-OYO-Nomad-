/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning instead of build failure for unused imports
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
