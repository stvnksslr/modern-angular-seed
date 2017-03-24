const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '',
  path: path.resolve(__dirname, './dist')
};

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    mangle: false
  })
]);

module.exports = config;
