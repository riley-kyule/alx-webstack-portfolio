const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // This is my entry point for React
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'main.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
      },
    ],
  },
};
