/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'txbzeyhyrceumtbddgye.supabase.co' }],
    loader: 'default', // Prevents Vercel's optimization
    unoptimized: true, // Disables all image optimizations globally
  },
};

module.exports = nextConfig;
