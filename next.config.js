const pkg = require("./package.json");

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: process.env.ASSETS_URL,
  env: {
    APP_ENV: process.env.APP_ENV || process.env.NODE_ENV,
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    APP_VERSION: pkg.version,
    APP_URL: process.env.APP_URL || process.env.DOMAIN,
    API_URL: process.env.API_URL,
  },
};
