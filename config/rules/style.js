const path           = require('path');
const sass           = require('node-sass');
const assetFunctions = require('node-sass-asset-functions');

module.exports = {
  test : /\.sass$/,
  use  : [
    { loader : 'style-loader' },
    { loader : 'css-loader' },
    {
      loader  : 'sass-loader',
      options : {
        sourceMap : true,
        functions : assetFunctions({
          images_path : path.join(process.env.APP_SRC_PATH, process.env.APP_IMAGE_DIR_NAME),
          fonts_path  : path.join(process.env.APP_SRC_PATH, process.env.APP_FONT_DIR_NAME),
          // http_images_path : `/${process.env.APP_IMAGE_DIR_NAME}`,
          // http_fonts_path  : `/${process.env.APP_FONT_DIR_NAME}`
        })
      }
    }
  ]
}
