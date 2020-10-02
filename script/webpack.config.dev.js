const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
