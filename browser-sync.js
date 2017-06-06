const path = require('path');
require('./env-conf.js');
let env       = process.env;
let dir_names = JSON.parse(env.APP_SOURCE_DIR_NAMES);

module.exports = {
  files : [
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, '**/*.html'),
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, dir_names.css, '**/*.css'),
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, dir_names.js,  '**/*.js'),
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, env.APP_STATIC_IMG_DIR_NAME, '**/*.jpg'),
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, env.APP_STATIC_IMG_DIR_NAME, '**/*.gif'),
    path.join(env.APP_ROOT, env.APP_BUILD_DIR_NAME, env.APP_STATIC_IMG_DIR_NAME, '**/*.png')
  ],
  server : {
    baseDir : env.APP_SERVER_ROOT,
    index   : 'index.html'
  },
  port : 3000,
  proxy : false
}
