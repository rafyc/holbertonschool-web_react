const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js'],
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassingOnDebug: true,
            },
          },
        ],
      },
    ],
  },
};
