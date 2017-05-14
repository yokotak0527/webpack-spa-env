import Vue from 'vue';
import VueRouter from 'vue-router';

import style from 'styles/style.css';

let app = new Vue({
  el   : '#app',
  data : {
    msg : "hello! vue.js"
  },
  components : {
    test : compHeader
  }
});
