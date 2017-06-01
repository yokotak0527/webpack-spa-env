const path                  = require('path');
const webpack               = require('webpack');
const fs                    = require('fs');
const WebpackNotifierPlugin = require('webpack-notifier');

const APP_ROOT             = process.env.APP_ROOT             = process.cwd();
const APP_PUBLIC_PATH      = process.env.APP_PUBLIC_PATH      = '/'; // /admin/sys/wp-content/themes/[theme dir.]/
const APP_SORUCE_DIR_NAME  = process.env.APP_SOURCE_DIR_NAME  = 'src';
const APP_BUILD_DIR_NAME   = process.env.APP_BUILD_DIR_NAME   = 'build';
const APP_SRC_PATH         = process.env.APP_SRC_PATH         = path.resolve(APP_SORUCE_DIR_NAME);
const APP_DEST_PATH        = process.env.APP_DEST_PATH        = path.resolve(APP_BUILD_DIR_NAME);
const APP_SOURCE_DIR_NAMES = process.env.APP_SOURCE_DIR_NAMES = {
  'image' : 'img',
  'font'  : 'font',
  'css'   : 'css',
  'sass'  : 'sass',
  'js'    : 'js',
  'vue'   : 'vue'
}
// =============================================================================
// ENTRIES
//
let entries = {
  'js/app' : './js/app.js'
}
// =============================================================================
// RULES
//
let rules = [
  require('./rules/babel.js'),
  require('./rules/vue.js')
];
// =============================================================================
// ALIAS
//
let alias = {
  'vue$'        : 'vue/dist/vue.common.js',
  'vue-router$' : 'vue-router/dist/vue-router.common.js',
};
for(let key in APP_SOURCE_DIR_NAMES){
  let val = APP_SOURCE_DIR_NAMES[key];
  alias[`./${val}`] = path.join(APP_SRC_PATH, val);
}

// =============================================================================

let _export = {
  context : APP_SRC_PATH,
  entry   : entries,
  output  : {
    path       : APP_DEST_PATH,
    publicPath : path.join(APP_PUBLIC_PATH, APP_BUILD_DIR_NAME),
    filename   : '[name].js',
    pathinfo   : true
  },
  module : {
    rules : rules
  },
  resolve : {
    modules : [
      `${APP_SORUCE_DIR_NAME}`,
      'node_modules'
    ],
    alias : alias
  },
  plugins : [
    new WebpackNotifierPlugin()
  ],
  watch : true,
  stats : 'verbose'
}

module.exports = _export;
