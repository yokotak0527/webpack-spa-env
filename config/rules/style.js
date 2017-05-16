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
      loader  : 'postcss-loader',
      options : {
        plugins : [
          require('postcss-assets')({
            basePath  : process.env.APP_SRC_PATH,
            baseUrl   : process.env.APP_URI,
            relative  : true
          }),
          require('postcss-cssnext')({
            browsers : ['last 2 versions']
          })
        ]
      }
    }
  ]
};
