const path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


const SRC_DIR          = path.resolve(__dirname, '../src');
const NODE_MODULES_DIR = path.resolve(SRC_DIR, 'node_modules');



module.exports = {
  devtool: 'source-map',
  stats:   'minimal',

  resolve: {
    extensions: [ '.js', '.css' ]
  },

  module: {
    rules: [
      {
        test:    /.css$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        use:     ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use:      {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: 'react-layouts-[local]'
            }
          }
        })
      },

      {
        test:    /.js$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        loader:  'babel-loader'
      }
    ]
  },


  plugins: [
    new ExtractTextWebpackPlugin('styles.css')
  ]
};
