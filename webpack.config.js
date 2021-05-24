const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const serverConfig = {
  target: 'node',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    server: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.resolve(__dirname, '/node_modules')]
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    global: true,
    __filename: false,
    __dirname: false
  }
}
module.exports = serverConfig
