let srcDirName = JSON.parse(process.env.APP_SOURCE_DIR_NAMES);
const path     = require('path');

module.exports = {
  test    : /\.(sass|scss)$/,
  exclude : /(node_modules|bower_components)/,
  use     : [
    {
      'loader' : 'style-loader'
    },
    {
      'loader' : 'css-loader'
    },
    {
      loader  : 'sass-loader',
      options : {
        outputStyle : 'compressed'
      }
    }
  ]
}
