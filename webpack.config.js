/* global __dir */

const path = require('path');
const assembly = require('./package.json');

const { VERSION = 0 } = assembly;
const ENV = 'development';

module.exports = {
  entry: ['index.js'],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  metadata: {
    ENV,
    VERSION,
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(jpg|gif|png|woff|woff2|eot|ttf|svg)(\?.*)*$/,
        loader: 'url-loader',
      }, {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: ['css-loader', 'style-loader'],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.join(__dir, 'build'),
    filename: 'bundle.js?v=[hash]',
  },
};
