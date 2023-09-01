const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    all: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '.bundle.js',
  },
  devServer: {
    port: 8564,
    open: true,
    hot: true,
  },
};
