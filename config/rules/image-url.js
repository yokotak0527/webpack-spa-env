// console.log(process.env.APP_SERVER_PATH);
const path = require('path');

module.exports = {
  loader  : 'url-loader',
  test    : /\.(png|jpg|gif)$/,
  exclude : /(node_modules|bower_components)/,
  options : {
    limit      : 8192,
    outputPath : path.join(process.env.APP_ROOT, process.env.APP_IMAGE_DIR_NAME),
    name       : `[name].[ext]`
  }
}
