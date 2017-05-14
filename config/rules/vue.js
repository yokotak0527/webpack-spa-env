const path           = require('path');
const styleRule      = require('./style');

// styleRule.use.shift();
// styleRule.use.unshift({ loader : 'vue-style-loader' });

// console.log(styleRule.use);
// let qs = combine(styleRule.use);
// let preloaderQs = combine([styleRule.use.pop()]);
// let loaderQs    = combine(styleRule.use);

module.exports = {
  loader  : 'vue-loader',
  exclude : /(node_modules|bower_components)/,
  test    : /\.vue$/,
  options : {
    loaders : {
      // postcss :
    }
  }
}
