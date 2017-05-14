const path = require('path');

module.exports = {
  plugins : {
    // 'postcss-import' : {
    //   'path' : [
    //
    //     process.env.APP_SRC_PATH
    //   ]
    // },
    'postcss-assets' : {
      baseUrl   : '/',
      relative  : true,
      loadPaths : [
        path.join(process.env.APP_SRC_PATH, 'styles/'),
        path.join(process.env.APP_SRC_PATH, 'images/')
      ]
    },
    'postcss-cssnext' : {
      'browsers' : ['last 2 versions']
    }
  }
}
