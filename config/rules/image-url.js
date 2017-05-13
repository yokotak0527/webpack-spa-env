console.log(process.env.APP_SERVER_PATH);

module.exports = {
  loader  : 'url-loader',
  test    : /\.(png|jpg|gif)$/,
  exclude : /(node_modules|bower_components)/,
  options : {
    limit : 8192,
    name  : `${process.env.APP_IMAGE_DIR_NAME}/[name].[ext]`
  }
}
