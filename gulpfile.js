require('./env-conf');
const gulp          = require('gulp');
const webpack       = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.dev');

let styleConf     = require('withpro-gulp-sass');
let env           = process.env;
let src_dir_names = JSON.parse(env.APP_SOURCE_DIR_NAMES);

styleConf.path = {
    'project' : env.APP_PUBLIC_PATH,
    'src' : {
        'sass'      : `${env.APP_SOURCE_DIR_NAME}/${src_dir_names.sass}`,
        'sassMixin' : `${env.APP_SOURCE_DIR_NAME}/${src_dir_names.sassMixin}`,
        'font'      : `${env.APP_SOURCE_DIR_NAME}/${src_dir_names.font}`,
        'iconfont'  : `${env.APP_SOURCE_DIR_NAME}/${src_dir_names.iconFont}`,
        'lib'       : [
          `${env.APP_SOURCE_DIR_NAME}/${src_dir_names.sass}`
        ]
    },
    'dest' : {
        'css'      : `${env.APP_BUILD_DIR_NAME}/${src_dir_names.css}`,
        'image'    : `${env.APP_BUILD_DIR_NAME}/${src_dir_names.image}`,
        'font'     : `${env.APP_BUILD_DIR_NAME}/${src_dir_names.font}`,
        'iconfont' : `${env.APP_BUILD_DIR_NAME}/${src_dir_names.iconFont}`
    }
}
styleConf.init();

gulp.task('watch', ['sass-watch'], ()=>{
  return webpackStream(webpackConfig, webpack)
    .pipe(gulp.dest(`${env.APP_BUILD_DIR_NAME}/`));
});
