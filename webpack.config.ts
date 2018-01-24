import * as webpack from 'webpack';
import * as path from 'path';

const config: webpack.Configuration = {
  entry: './src/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
};

export default config;

