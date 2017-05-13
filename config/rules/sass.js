const path           = require('path');
const sass           = require('node-sass');
const AssetFunctions = require('node-sass-asset-functions');

let assetFunctions = AssetFunctions({
  images_path : path.join(process.env.APP_SRC_PATH, process.env.APP_IMAGE_DIR_NAME),
  fonts_path  : path.join(process.env.APP_SRC_PATH, process.env.APP_FONT_DIR_NAME),
  // http_images_path : `/${process.env.APP_IMAGE_DIR_NAME}`,
  // http_fonts_path  : `/${process.env.APP_FONT_DIR_NAME}`
});

module.exports = Object.assign(Object.create(null), {
  test : /\.sass$/,
  use  : [
    {
      loader : 'css-loader'
    },
    {
      loader  : 'sass-loader',
      options : {
        // ident          : 'sass-loader',
        indentedSyntax : true,
        sourceMap      : true,
        includePaths   : [path.join(process.env.APP_SRC_PATH, process.env.APP_STYLE_DIR_NAME)],
        functions      : assetFunctions
      }
    }
  ]
});
