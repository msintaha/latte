const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const API_BASE_URL = '<YOUR_API_SERVER>';
const BASE_URL = '<YOUR_FRONTEND_CLIENT>';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(BASE_URL),
      'process.env.API_BASE_URL': JSON.stringify(API_BASE_URL)
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    allowedHosts: [
      '*'
    ],
    public: '*',
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: '.',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
});
