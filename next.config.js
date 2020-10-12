module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.extensions = ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json']

    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      }
    })

    // Important: return the modified config
    return config
  },
}
