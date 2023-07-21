// config-overrides.js
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const { EnvironmentPlugin } = require('webpack');

module.exports = override(
  addWebpackAlias({
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  }),
  addWebpackPlugin(
    new EnvironmentPlugin({
      JWT_SECRET_KEY: 'JWT_SECRET_KEY'
    })
  )
);
