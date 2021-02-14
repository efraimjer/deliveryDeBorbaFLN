const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const SCR_DIR = path.resolve(__dirname, 'src')


module.exports = {
  entry: './src/index.js',
  output: {
      publickPath: '/'
      
  },
  devServer: {
      historyApiFallback: true
  }
};