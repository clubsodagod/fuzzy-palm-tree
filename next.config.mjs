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
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
    ],
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },


   webpack: (config) => {
       config.resolve.alias.canvas = false;
    
       return config;
     },
     
};

export default nextConfig;
