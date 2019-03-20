// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'core-js/es6/promise';
import Vue from 'vue';
import './foundation';
import App from './App';
import router from './router';


/* eslint-disable*/

const defaultTitle = 'Oracle Intern Experience';


// This gives it a title on load
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${defaultTitle} | ` + to.meta.title : defaultTitle;
  next();
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});



// This gives it a title after we route, will default if nothing exists
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? `${defaultTitle} | ` + to.meta.title : defaultTitle;
  });
});

