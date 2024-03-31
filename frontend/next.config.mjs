/** @type {import('next').NextConfig} */
const nextConfig = {
      webpack(config) {
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        }
        return config
      },
      images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
            },
        ],
        minimumCacheTTL: 15000000,
    },
};

export default nextConfig;
