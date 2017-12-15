const path = require('path');

const config = {
  // resolve: {
  //   modules: [
  //     path.resolve('./lib'),
  //     path.resolve('./node_modules'),
  //   ]

  // },
  // entry: ['babel-polyfill', './lib/renderes/dom.js'],
  entry:  {

    index: ['babel-polyfill', './lib/renderes/dom.js'],
    style: ['babel-polyfill', './lib/renderes/styledom.js'],
    radium: ['babel-polyfill', './lib/renderes/raduimdom.js'],
    tictac: ['babel-polyfill', './lib/renderes/ticdom.js']




  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]

  },



};

module.exports = config;




