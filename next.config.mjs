/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/admin',
        permanent: true, // Set to true if the redirect is permanent (SEO benefit).
      },
    ];
  },
};

export default nextConfig; // Use this if your file is named `next.config.mjs`.

// If your file is named `next.config.js`, use this instead:
// module.exports = nextConfig;
