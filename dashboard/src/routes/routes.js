import VueRouter from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../pages/Main/Main.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/Register/Register.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
