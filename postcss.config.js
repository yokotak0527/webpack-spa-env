const path = require('path');

module.exports = {
  plugins : {
    'postcss-assets' : {
      basePath  : process.env.APP_ROOT,
      baseUrl   : '/',
      relative  : true,
      loadPaths : [
        `${process.env.APP_SORUCE_DIR_NAME}/`
      ]
    },
    'postcss-cssnext' : {
      browsers : ['last 2 versions']
    }
  }
};
