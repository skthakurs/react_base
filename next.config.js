const withProgressBar = require("next-progressbar");
const withPlugins = require("next-compose-plugins");
const withSize = require("next-size");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withPlugins(
  [[withProgressBar], [withCSS], [withLess], [withSize]],
  {
    webpack: (config, options) => {
      config.resolve.alias["components"] = path.join(__dirname, "components");
      return config;
    }
  }
);
