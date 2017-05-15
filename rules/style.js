const path = require('path');

module.exports = {
  test : /\.css$/,
  use  : [
    {
      loader : 'style-loader'
    },{
      loader  : 'css-loader',
      options : {
        modules       : true,
        importLoaders : 1
      }
    },{
      loader : 'postcss-loader'
    }
  ]
};
