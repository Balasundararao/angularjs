var path = require('path');

const config = {
  entry: {
  	'app': './index.js'
  },
  output: {
  	 filename: 'bundle.js',
     path: __dirname + '/dist'
  },
  module: {
  	loaders: [{
  		test: /\.js$/,
  		exclude:/node_modules/,
  		loaders: "babel-loader"
  	}]
  },
  resolve: {}
};
module.exports = config;