require('./env-conf.js');
const path                  = require('path');
const webpack               = require('webpack');
const fs                    = require('fs');
const WebpackNotifierPlugin = require('webpack-notifier');

const gulp = require('gulp');

let env = process.env;

// =============================================================================
// ALIAS
//
let alias = {
  'vue$'        : 'vue/dist/vue.common.js',
  'vue-router$' : 'vue-router/dist/vue-router.common.js',
};
let dir_names = JSON.parse(env.APP_SOURCE_DIR_NAMES);
for(let key in dir_names){
  let val = dir_names[key];
  alias[`./${val}`] = path.join(env.APP_SRC_PATH, val);
}

// =============================================================================

let _export = {
  context : env.APP_SRC_PATH,
  entry   : JSON.parse(env.APP_ENTRIES),
  output  : {
    path       : env.APP_DEST_PATH,
    publicPath : path.join(env.APP_PUBLIC_PATH, env.APP_BUILD_DIR_NAME),
    filename   : '[name].js',
    pathinfo   : true
  },
  module : {
    rules : [
      require('./rules/babel.js'),
      require('./rules/vue.js')
    ]
  },
  plugins : [
    new webpack.LoaderOptionsPlugin({
      debug : true
    }),
    new WebpackNotifierPlugin({
      title           : 'Webpack',
      excludeWarnings : false
    })
  ],
  resolve : {
    modules : [
      `${env.APP_SORUCE_DIR_NAME}`,
      'node_modules'
    ],
    alias : alias
  },
  watch : true,
  // stats : 'verbose'
}

module.exports = _export;
