const path     = require('path');
let srcDirName = JSON.parse(process.env.APP_SOURCE_DIR_NAMES);
let env        = process.env;

module.exports = {
  test    : /\.(png|jpg|gif)$/,
  loader  : 'url-loader',
  exclude : /(node_modules|bower_components)/,
  options : {
    limit      : 8192,
    outputPath : `/${env.APP_STATIC_IMG_DIR_NAME}/`,
    name       : `[name]-[hash].[ext]`
  }
}
