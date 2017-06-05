import Vue from 'vue';
import layoutStyle from './sass/style.sass';

// export default {
//   APP_PUBLIC_PATH      : env.APP_PUBLIC_PATH,
//   APP_SOURCE_DIR_NAMES : env.APP_SOURCE_DIR_NAMES,
//   APP_BUILD_DIR_NAME   : env.APP_BUILD_DIR_NAME
// }

let app = new Vue({
  el         : '#app',
  components : {
    'my-cmpt' : require('cmpt/test.vue')
  }
})
