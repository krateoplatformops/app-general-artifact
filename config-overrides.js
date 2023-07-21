// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  })
);
