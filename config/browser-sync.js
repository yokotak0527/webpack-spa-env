const path       = require('path');
const modRewrite = require('connect-modrewrite');
let svrRoot      = path.join(process.cwd(), 'dev');

module.exports = {
  ui : {
      port : 3001,
      weinre : {
          port : 8080
      }
  },
  files : [ path.join(svrRoot, '**/*.css'), path.join(svrRoot, '**/*.js'), path.join(svrRoot, '**/*.html')],
  server : {
    baseDir    : svrRoot,
    index      : 'index.html',
    middleware : [
      modRewrite([
        '^[^\\.]*$ /index.html [L]'
      ])
    ]
  },
  port : 3000,
  proxy : false,
}
