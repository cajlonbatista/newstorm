import Vue from 'vue';

import VueRouter from 'vue-router';

import router from './routes/routes.js';
import App from './App.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render(h) { return h(App); },
  router
}).$mount('#app');
