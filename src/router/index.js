import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: () => import('../admin/Layout/Admin.vue'),
      children: [
        {
          path: 'admin/manage-roles',
          name: 'manage-roles',
          component: () => import('../admin/views/Users.vue'),
        }
      ]
    }
  ]
})
