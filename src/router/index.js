import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

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
      path: '/register',
      name: 'register',
      component: SignUp
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
