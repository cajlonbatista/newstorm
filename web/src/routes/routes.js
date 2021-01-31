import VueRouter from "vue-router";

import Main from '../pages/Main/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
