const path = require('path');

module.exports = {
  test    : /\.vue$/,
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/,
  options : {
    // postLoaders : {
    //   html : 'vue-html-loader'
    // }
  }
}
