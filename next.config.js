const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");

// next.js configuration
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/furniture-two",
        permanent: true,
      },
    ];
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
