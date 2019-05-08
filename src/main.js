window.axios = require('axios');
window.axios.defaults.baseURL = 'http://localhost:8000/';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = true
Vue.prototype.API_ROOT = 'http://localhost:8000/'

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));

axios.interceptors.response.use(
  function (response) { return response; },
  function (error) {
    if (error.response) {
      if(error.response.status == 401) {
        alert(error.response.data.message);
        window.location.href = '/unauthorized';
      }
    }
  }
);

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('nTube.user'))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('nTube.jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {

      if (to.meta.permission && to.meta.permission.toLowerCase() !== user.role.toLowerCase()) {
        next({
          path: 'unauthorized',
          params: { nextUrl: to.fullPath }
        })
      }
      window.axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('nTube.jwt')
      next()
    }
  } else {
    if ((to.path == '/login' || to.path == '/register') && localStorage.getItem('nTube.jwt') !== null) {
      if (to.meta.permission && to.meta.permission.toLowerCase() == user.role.toLowerCase()) {
        next({
          path: '/admin/dashboard',
          params: { nextUrl: to.fullPath }
        })
      }
      next({
        path: '/',
        params: { nextUrl: to.fullPath }
      })
    }
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
