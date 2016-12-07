'use strict';

var webpack = require('webpack'),
  path = require('path');

// console.log(path.join(__dirname, '')); // выводит в cmd полный
// путь вместе с D:\ и т.д.

module.exports = {
  context: path.join(__dirname, ''),
  entry: "./index",
  output: {
    path: path.join(__dirname, ''),
    filename: 'build.js'
  },

  watch: true,

  devtool: 'source-map',

  module: {
    loaders: [
      {
        // babel-loader
        test: /\.js$/,
        loader: "babel?presets[]=es2015"
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};