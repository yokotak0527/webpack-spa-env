const path = require('path');

module.exports = {
  test    : /\.js$/,
  loader  : 'babel-loader',
  exclude : /(node_modules|bower_components)/
}
