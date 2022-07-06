const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const OUT_DIR = path.join(__dirname, '/public/');

module.exports = {
  entry: path.join(SRC_DIR, 'index.tsx'),
  output: {
    path: OUT_DIR,
    filename: 'main.js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png']
  },
  devtool: "source-map"
}