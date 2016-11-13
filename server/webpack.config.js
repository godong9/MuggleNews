//webpack.config.js
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/public/javascripts',
  entry: {
    'main': './main.js'
  },
  output: {
    filename: './dist/[name].bundle.js'
  },
  devtool: '#inline-source-map'
};