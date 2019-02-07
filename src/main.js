// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import './foundation';
import App from './App';
import router from './router';

/* eslint-disable no-new */

const defaultTitle = 'Oracle Intern Experience';

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : defaultTitle;
  });
});
