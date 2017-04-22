/* global __dir */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const assembly = require('./package.json');

const VERSION = JSON.stringify(assembly.version || 0);
const ENV = JSON.stringify('development');

const definePlugin = new webpack.DefinePlugin({
  assembly: {
    ENV,
    VERSION,
  },
});

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'pages/index.html',
});

module.exports = {
  entry: ['src'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js?v=[hash]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(jpg|gif|png|woff|woff2|eot|ttf|svg)(\?.*)*$/,
        loader: 'file-loader?name=[path].[ext]?v=[hash:sha1]',
      }, {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        }],
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    definePlugin,
    htmlWebpackPlugin,
  ],
};
