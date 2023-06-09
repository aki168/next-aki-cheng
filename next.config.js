/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, { isServer }) => {
    if (!isServer)
      config.resolve.fallback = {
        fs: false,
      };
    return config;
  },
  //  ignoreBuildErrors: true,
};

module.exports = nextConfig;
