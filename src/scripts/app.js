import Vue from 'vue';
import VueRouter from 'vue-router';
import style from 'styles/style.sass';

// let comp = Object.create(null);
// console.log(comp);

import compHeader from 'components/header.vue';
// console.log(comp.header);
// console.log(headerComponent);

let app = new Vue({
  el   : '#app',
  data : {
    msg : "hello! vue.js"
  },
  components : {
    test : compHeader
  }
});
// var app = new Vue({
//   el : '#app',
//   data : {
//     message : 'Hello Vue!'
//   }
// })

// console.log(VueRouter);

// new Vue()
// import style from 'styles/style.sass';
// console.log(style);
// import Vue from 'vue';
// import App from '../components/App.vue';
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// });
