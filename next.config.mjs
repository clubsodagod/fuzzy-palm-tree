/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    APP_NAME: "Maliek Davis",
    API_DEVELOPMENT: "http://localhost:3000/api",
    API_PRODUCTION: "https://maliek-davis.com/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://maliek-davis.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
return config;
  },
};

export default nextConfig;
