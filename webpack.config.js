const path = require('path');

module.exports = {
  entry: './src/server.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  resolve: {
    alias:{
      r: path.resolve( __dirname, 'src'),
      c: path.resolve( __dirname, 'src/components')
    },
    extensions: [ '.js', '.jsx' ]
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
};
