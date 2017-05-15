const path        = require('path');
const styleRule   = require('./style');

module.exports = {
  test    : /\.vue$/,
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/
}
