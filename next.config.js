/** @type {import('next').NextConfig} */
console.log('#########################');
console.log(`ENV_VAR is ${process.env.ENV_VAR}`);
console.log('#########################');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
