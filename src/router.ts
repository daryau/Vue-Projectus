import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'tasks',
    },
    {
      path: '/tasks',
      component: () => import('./views/Tasks.vue'),
    },
    {
      path: '/activity',
      component: () => import('./views/Activity.vue'),
    },
    {
      path: '/calendar',
      component: () => import('./views/PageNotFound.vue'),
    },
    {
      path: '/files',
      component: () => import('./views/PageNotFound.vue'),
    },
    {
      path: '*',
      component: () => import('./views/PageNotFound.vue'),
    },
  ],
});
