const path = require('path');

module.exports = {
  entry: './src/server.ts',
  target: 'node',
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
    alias:{
      r: path.resolve( __dirname, 'src')
    },
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
};
