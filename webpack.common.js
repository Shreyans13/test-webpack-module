const path = require('path');

module.exports = {
  entry: {
    "index.web" : "./temp.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: false,
    port: 8080,
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // }
};