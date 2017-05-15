const path      = require('path');
const styleRule = require('./style');

let cssOptions     = styleRule.use[1].options || {};
let postcssOptions = styleRule.use[2].options || {};

module.exports = {
  test    : /\.vue$/,
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/,
  options : {
    postcss : postcssOptions.plugins,
    css     : `css-loader?root=${process.env.APP_ROOT}`,
    // css     : {
    //   // root : path.join(process.env.APP_ROOT, 'dev')
    // },
    loaders : {
      // css : `css-loader?root=${process.env.APP_ROOT}`
      // css : 'vue-style-loader!css-loader!postcss-loader'
    }
  }
}
