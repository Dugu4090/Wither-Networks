/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure image optimization if needed
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;