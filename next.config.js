const prod = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  maximumFileSizeToCacheInBytes: 5000000, // 5MB
  skipWaiting: true,
  disable: !prod, // Disable PWA in development environment
});

const nextConfig = {
  // Other Next.js configurations can go here
};

module.exports = withPWA(nextConfig);
