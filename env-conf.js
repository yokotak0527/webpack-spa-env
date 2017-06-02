const path = require('path');
let   env  = process.env;

env.APP_ROOT             = process.cwd();
env.APP_PUBLIC_PATH      = '/'; // /admin/sys/wp-content/themes/[theme dir.]/
env.APP_SOURCE_DIR_NAME  = 'src';
env.APP_BUILD_DIR_NAME   = 'build';
env.APP_SRC_PATH         = path.resolve(env.APP_SOURCE_DIR_NAME);
env.APP_DEST_PATH        = path.resolve(env.APP_BUILD_DIR_NAME);
env.APP_SOURCE_DIR_NAMES = JSON.stringify({
  'image'     : 'img',
  'css'       : 'css',
  'sass'      : 'sass',
  'sassMixin' : 'sass/mixin',
  'font'      : 'font',
  'iconFont'  : 'font/icon',
  'js'        : 'js',
  'cmpt'      : 'cmpt'
});
// =============================================================================
// ENTRIES
// 
env.APP_ENTRIES = JSON.stringify({
  'js/app' : './js/app.js'
});
