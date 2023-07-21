// config-overrides.js
const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

module.exports = override(
  addWebpackAlias({
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
  }),
  addWebpackPlugin(
    new webpack.DefinePlugin({
      'process.env.JWT_SECRET_KEY': JSON.stringify(process.env.JWT_SECRET_KEY),
    })
  )
);
