import Vue from 'vue';
import layoutStyle from './sass/style.sass';

let app = new Vue({
  el         : '#app',
  components : {
    'my-cmpt' : require('cmpt/test.vue')
  }
})
