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
        importLoaders : 1,
        root          : process.env.APP_ROOT
      }
    },{
      loader  : 'postcss-loader',
      options : {
        plugins : [
          require('postcss-assets')({
            basePath  : process.env.APP_ROOT,
            // baseUrl   : '/',
            // relative  : true,
            loadPaths : [
              `${process.env.APP_SORUCE_DIR_NAME}/`
            ]
          }),
          require('postcss-cssnext')({
            browsers : ['last 2 versions']
          })
        ]
      }
      // options : {
      //   config : {
      //     path : path.join(process.env.APP_ROOT, 'config/postcss.config.js')
      //   }
      // }
    }
  ]
};
