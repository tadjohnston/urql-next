const path = require('path');

module.exports = {
  webpack(config) {
    const aliases = config.resolve.alias || (config.resolve.alias = {})

    return config;
  },
};
