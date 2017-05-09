console.log(process.env.APP_SERVER_PATH);

module.exports = {
  test : /\.(png|jpg|gif)$/,
  loader : 'url-loader',
  options : {
    limit : 8192,
    name  : `${process.env.APP_IMAGE_DIR_NAME}/[name].[ext]`
  }
}
