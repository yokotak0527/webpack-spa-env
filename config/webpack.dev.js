const path    = require('path');
const webpack = require('webpack');

const APP_ROOT           = process.env.APP_ROOT           = process.cwd();
const APP_SRC_PATH       = process.env.APP_SRC_PATH       = path.join(APP_ROOT, 'src');
const APP_SERVER_PATH    = process.env.APP_SERVER_PATH    = path.join(APP_ROOT, 'dev');
const APP_IMAGE_DIR_NAME = process.env.APP_IMAGE_DIR_NAME = 'images';
const APP_FONT_DIR_NAME  = process.env.APP_FONT_DIR_NAME  = 'font';
const APP_STYLE_DIR_NAME = process.env.APP_STYLE_DIR_NAME = 'styles';

$a = function(){ console.log("hello") };

// $a = JSON.stringify(function(){ console.log("hello"); });
// console.log($a.toString());

let _export = {
  context : APP_SRC_PATH,
  entry : {
    'scripts/app' : './scripts/app.js',
    // 'scripts/vender' : './scripts/vender.js'
  },
  output : {
    path     : APP_SERVER_PATH,
    filename : '[name].js'
  },
  module : {
    rules : []
  },
  resolve : {
    modules : [APP_SRC_PATH, 'node_modules'],
    alias : {
      'vue$'        : 'vue/dist/vue.common.js',
      'vue-router$' : 'vue-router/dist/vue-router.common.js',
      'styles'      : path.join(APP_SRC_PATH, APP_STYLE_DIR_NAME)
    }
  },
  // resolveLoader : {
  //   alias : {
  //     'sass-loder' : 'hoge-hoge'
  //   },
  // },
  watch : true
}

// =============================================================================
// Add rules.
_export.module.rules.push(require('./rules/style.js'));     // Sass
_export.module.rules.push(require('./rules/image-url.js')); // Image
_export.module.rules.push(require('./rules/babel.js'));     // Babel
_export.module.rules.push(require('./rules/vue.js'));       // vue

module.exports = _export;
