const path        = require('path');
const webpack     = require('webpack');
const loaderUtils = require('loader-utils');
let sassRule      = require('./sass.js');
sassRule.use.unshift({ loader : 'vue-style-loader' });

// let sassType = require('node-sass').types;

// console.log(JSON.stringify(sassRule.use));

// console.log(webpack);
// JSON.stringify()
// console.log(loaderUtils.getCurrentRequest(sassRule.use));

// let includePath = path.join(process.env.APP_SRC_PATH, process.env.APP_STYLE_DIR_NAME);

let test = ()=>{
  return new sassType.String('ok');
}

module.exports = {
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/,
  test    : /\.vue$/,
  options : {
    loaders : {
      sass : sassRule.use
    }
    // includePaths : [path.join(process.env.APP_SRC_PATH, process.env.APP_STYLE_DIR_NAME)]
  }
}
