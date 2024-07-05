const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Assuming this is your entry point for React
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Public path for assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JSX
          options: {
            presets: ['@babel/preset-react'], // Presets for React
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist', // Serve content from this directory
    compress: true,
    port: 3000, // Port for localhost
    historyApiFallback: true, // Handle React routing
  },
};
