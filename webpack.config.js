const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
        contentBase: './dist',
        hot: true,
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
        ],
    },
};