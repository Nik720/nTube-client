import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


// Containers
const DefaultContainer = () => import('@/admin/Layout/Admin');
const Dashboard = () => import('@/admin/views/Dashboard/Dashboard');
const Users = () => import('@/admin/views/users/Users');
const User = () => import('@/admin/views/users/User');

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
      path: '/unauthorized',
      name: 'unauthorized',
      component: SignUp
    },
    {
      path: '/videos',
      name: 'videos',
      component: SignUp,
      meta: {
        requiresAuth: true
      },
    },

    // Admin panel routes
    {
      path: '/admin',
      redirect: 'admin/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {
            requiresAuth: true,
            permission: 'public'
          },
        },
        {
          path: '/admin/users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
              meta: {
                requiresAuth: true,
                permission: 'public'
              },
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
              meta: {
                requiresAuth: true,
                permission: 'public'
              },
            },
          ]
        },
      ]
    },



  ]
})
