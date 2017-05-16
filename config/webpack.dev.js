const path    = require('path');
const webpack = require('webpack');
const fs      = require('fs');

const APP_ROOT            = process.env.APP_ROOT            = process.cwd();
const APP_SORUCE_DIR_NAME = process.env.APP_SORUCE_DIR_NAME = 'src';
const APP_IMAGE_DIR_NAME  = process.env.APP_IMAGE_DIR_NAME  = 'images';
const APP_FONT_DIR_NAME   = process.env.APP_FONT_DIR_NAME   = 'fonts';
const APP_STYLE_DIR_NAME  = process.env.APP_STYLE_DIR_NAME  = 'styles';
const APP_URI             = process.env.APP_URI             = '/';
const APP_SRC_PATH        = process.env.APP_SRC_PATH        = path.resolve(APP_SORUCE_DIR_NAME);
const APP_SERVER_PATH     = process.env.APP_SERVER_PATH     = path.resolve('dev');

let _export = {
  context : APP_SRC_PATH,
  entry : {
    'scripts/app' : './scripts/app.js',
    // 'scripts/vender' : './scripts/vender.js'
  },
  output : {
    path       : APP_SERVER_PATH,
    filename   : '[name].js',
    pathinfo   : true
  },
  module : {
    rules : []
  },
  plugins : [
    new webpack.LoaderOptionsPlugin({
      debug : true
    })
  ],
  resolve : {
    modules : [
      path.resolve(`./${APP_SORUCE_DIR_NAME}/`),
      'node_modules'
    ],
    alias : {
      'vue$'        : 'vue/dist/vue.common.js',
      'vue-router$' : 'vue-router/dist/vue-router.common.js'
    }
  },
  watch : true,
  stats : "verbose"
}

// addAlias
let list = fs.readdirSync(APP_SRC_PATH).filter((name)=> fs.statSync(path.join(APP_SRC_PATH, name)).isDirectory() );
list.map((elem)=>{
  _export.resolve.alias[elem] = path.join(APP_SRC_PATH, elem);
});

// =============================================================================
_export.module.rules.push(require('./rules/style.js'));     // Style
_export.module.rules.push(require('./rules/image-url.js')); // Image
// _export.module.rules.push(require('./rules/babel.js'));     // Babel
_export.module.rules.push(require('./rules/vue.js'));       // vue

module.exports = _export;
