// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueSilentbox from 'vue-silentbox';
import VueScrollTo from 'vue-scrollto';
import './foundation';
import App from './App';
import router from './router';

Vue.use(VueSilentbox, VueScrollTo);

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

