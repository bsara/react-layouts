const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin       = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');



// region Constants

const SRC_DIR          = path.resolve(__dirname, 'src');
const OUT_DIR          = path.resolve(__dirname, 'build');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');

// endregion



module.exports = {
  stats: 'minimal',

  entry: {
    deps: [
      'react',
      'prop-types',
      'babel-plugin-react-css-modules/dist/getClassName'
    ],

    GridLayout:   path.resolve(SRC_DIR, 'GridLayout/GridLayout.js'),
    LinearLayout: path.resolve(SRC_DIR, 'LinearLayout/LinearLayout.js')
  },

  output: {
    filename: '[name].js',
    path:     OUT_DIR
  },

  resolve: {
    extensions: [ '.js', '.css' ]
  },

  module: {
    rules: [
      {
        test:    /\.css$/,
        include: SRC_DIR,
        exclude: [ NODE_MODULES_DIR, OUT_DIR ],
        use:     ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use:      [
            {
              loader:  'css-loader',
              options: {
                modules:        true,
                importLoaders:  1,
                localIdentName: 'react-layouts-[local]'
              }
            }
          ]
        })
      },

      {
        test:    /.js$/,
        include: SRC_DIR,
        exclude: [ NODE_MODULES_DIR, OUT_DIR ],
        loader:  'babel-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([ OUT_DIR ]),

    new ExtractTextWebpackPlugin('[name].css'),

    new webpack.optimize.CommonsChunkPlugin({ name: 'deps', minChunks: Infinity }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime', minChunks: Infinity })
  ]
};
