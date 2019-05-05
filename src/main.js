window.axios = require('axios');
window.axios.defaults.baseURL = 'http://localhost:8000/';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'

import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = true
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('nTube.jwt') == null) {
          next({
              path: '/',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('nTube.user'))

          if(to.meta.permission && to.meta.permission !== user.role) {
            next({
              path: 'unauthorized',
              params: {nextUrl: to.fullPath}
            })
          }
          window.axios.defaults.headers.common['Authorization'] = 'Token '+localStorage.getItem('nTube.jwt')
          next()
      }
  } else {
      if(to.path == '/' || to.path == '/register' && localStorage.getItem('nTube.jwt') !== null) {
        if(to.meta.permission && to.meta.permission == user.role) {
          next({
            path: '/admin/dashboard',
            params: {nextUrl: to.fullPath}
          })
        }
        next({
          path: '/videos',
          params: {nextUrl: to.fullPath}
        })
      }
      next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
