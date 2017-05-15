import Vue from 'vue';
import VueRouter from 'vue-router';

// import style from 'styles/style.css';

import compHeader from 'components/header.vue'

let app = new Vue({
  el   : '#app',
  data : {
    msg : "hello! vue.js"
  },
  components : {
    test : compHeader
  }
});
