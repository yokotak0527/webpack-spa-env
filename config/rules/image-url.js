const path = require('path');

module.exports = {
  loader  : 'url-loader',
  test    : /\.(png|jpg|gif)$/,
  exclude : /(node_modules|bower_components)/,
  options : {
    limit      : 8192,
    outputPath : `${process.env.APP_IMAGE_DIR_NAME}/`,
    name       : `[name].[ext]`
  }
}
