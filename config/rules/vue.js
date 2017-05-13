const path        = require('path');
let sassRule      = require('./sass.js');
sassRule.use.unshift({ loader : 'vue-style-loader' });

module.exports = {
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/,
  test    : /\.vue$/,
  // options : {
  //   loaders : {
  //     sass : sassRule.use
  //   }
  // }
}
