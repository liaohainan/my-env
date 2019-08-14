const webpack = require('webpack');
const path = require('path');



module.exports = {
  entry: './index.js',

  output: {
    // filename: '[name].bundle.js',
    filename: 'index.js',
    path: path.resolve(__dirname, '../lib'),
    libraryTarget: "umd" // exposes and know when to use module.exports or exports.
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        // options: {
        //     "presets": [
        //       "es2015","stage-0"
        //     ],
        //     "plugins": ["transform-runtime"],
        // }
      }
    ]
  },
  plugins: [
    // new UglifyJSPlugin(),
   
  ]
};