const path = require('path');

module.exports = {
  entry: ['./js/dashboard_main.js'],
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        use: ['file-loader', "image-webpack-loader"]
      },
    ],
  },
};
