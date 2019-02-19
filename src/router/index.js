import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/Home';
import Team from '@/components/Team';
import About from '@/components/About';
import Success from '@/components/Success';
import Resources from '@/components/Resources';
import Orbit from '@/components/Tooltip';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      name: 'team',
      path: '/meet-the-team',
      component: Team,
      meta: { title: 'Meet the team' },
    },
    {
      name: 'about',
      path: '/about-oracle',
      component: About,
      meta: { title: 'About' },
    },
    {
      name: 'success',
      path: '/achieve-success',
      component: Success,
      meta: { title: 'Achieve Success' },
    },
    {
      name: 'resources',
      path: '/helpful-resources',
      component: Resources,
      meta: { title: 'Helpful Resources' },
    },
    {
      name: 'orbit',
      path: '/orbit',
      component: Orbit,
      meta: { title: 'Helpful Resources' },
    },
  ],
});
