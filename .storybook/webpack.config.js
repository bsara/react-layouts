const path = require('path');


module.exports = {
  devtool: 'source-map',

  module: {
    rules: [
      { test: /.js$/,  loader: 'babel-loader',                    include: path.resolve(__dirname, '../src') },
      { test: /.css$/, loaders: [ 'style-loader', 'css-loader' ], include: path.resolve(__dirname, '../src') }
    ]
  }
};
