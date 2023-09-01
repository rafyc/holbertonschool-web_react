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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],

  },
};
