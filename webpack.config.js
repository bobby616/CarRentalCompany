const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  node:{
    fs: 'empty'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    publicPath: '/dist/',
    contentBase: path.resolve(__dirname, "./"),
    watchContentBase: true,
    compress: true,
    port: 9001
  }
};