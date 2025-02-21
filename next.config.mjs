/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Disables image optimization, so Next.js won't check for specific domains.
    unoptimized: true,
  },
};

export default nextConfig;
