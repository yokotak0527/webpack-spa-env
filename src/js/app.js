import Vue from 'vue';

let app = new Vue({
  el         : '#app',
  components : {
    'my-cmpt' : require('cmpt/test.vue')
  }
})
