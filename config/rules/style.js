const path            = require('path');
const sassImageHelper = require(path.join(process.env.APP_SRC_PATH, 'build-assets/sass/image-helper.js'));

module.exports = {
  test : /\.sass$/,
  use  : [
    { loader : 'style-loader' },
    { loader : 'css-loader' },
    {
      loader  : 'sass-loader',
      options : {
        sourceMap : true,
        functions : sassImageHelper({
          rtvPath : {
            css   : process.env.APP_SERVER_PATH,
            sass  : path.join(process.env.APP_SRC_PATH, process.env.APP_STYLE_DIR_NAME),
            image : path.join(process.env.APP_SRC_PATH, process.env.APP_IMAGE_DIR_NAME)
          },
          absPath : {
            css   : process.env.APP_SERVER_PATH,
            sass  : path.join(process.env.APP_SRC_PATH, process.env.APP_STYLE_DIR_NAME),
            image : path.join(process.env.APP_SRC_PATH, process.env.APP_IMAGE_DIR_NAME)
          }
        })
      }
    }
  ]
}
