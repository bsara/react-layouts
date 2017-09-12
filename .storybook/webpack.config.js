const path = require('path');


// region Constants

const SRC_DIR          = path.resolve(__dirname, '../src');
const NODE_MODULES_DIR = path.resolve(__dirname, '../node_modules');

// endregion



module.exports = {
  devtool: 'source-map',
  stats:   'minimal',

  resolve: {
    extensions: [ '.js', '.css' ]
  },

  module: {
    rules: [
      {
        test:    /.js$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        loader:  'babel-loader'
      },

      {
        test:    /.css$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        use:     [
          'style-loader',
          {
            loader:  'css-loader',
            options: {
              modules:        true,
              importLoaders:  1,
              localIdentName: 'rl-[sha1:hash:8]'
            }
          }
        ]
      }
    ]
  }
};
