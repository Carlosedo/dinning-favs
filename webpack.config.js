var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './App.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
    // js
    {
      test: /(\.js)$/,
      loader: 'babel',
      query: { presets: ['es2015', 'stage-0', 'react'] }
    },
    ]
  }
};
