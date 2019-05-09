import Vue from 'vue'
import Router from 'vue-router'

// Clients components
const Login = () => import('@/views/Login');
const SignUp = () => import('@/views/SignUp');
const Unauthorised = () => import('@/views/401');

const HomeContainer = () => import('@/views/Home');
const Videos = () => import('@/views/videos');
const videosDetail = () => import('@/views/VideoDetail');

// Admin panel components
const DefaultContainer = () => import('@/admin/Layout/Admin');
const Dashboard = () => import('@/admin/views/Dashboard');

// Users Components
const Users = () => import('@/admin/views/users/Users');
const createUser = () => import('@/admin/views/users/CreateUser');
const editUser = () => import('@/admin/views/users/EditUser');

// Users Components
const videosList = () => import('@/admin/views/videos/VideosList');
const createVideo = () => import('@/admin/views/videos/AddVideo');
const editVideo = () => import('@/admin/views/videos/EditVideo');

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
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
      component: Unauthorised
    },
    {
      path: '/',
      name: 'Videos Home',
      component: HomeContainer,
      children: [
        {
          path: '',
          name: 'videos',
          component: Videos,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: 'video/:id/:slug',
          name: 'video Detail',
          component: videosDetail,
          meta: {
            requiresAuth: true,
          },
        },
      ]
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
            permission: 'admin'
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
                permission: 'admin'
              },
            },
            {
              path: 'create',
              name: 'Create',
              component: createUser,
              meta: {
                label: 'Create User',
                requiresAuth: true,
                permission: 'admin'
              }
            },
            {
              path: 'edit/:id',
              name: 'Edit User',
              component: editUser,
              meta: {
                label: 'Edit User',
                requiresAuth: true,
                permission: 'admin'
              }
            }

          ]
        },
        {
          path: '/admin/videos',
          meta: { label: 'Videos'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: videosList,
              meta: {
                requiresAuth: true,
                permission: 'admin'
              },
            },
            {
              path: 'create',
              name: 'Create video',
              component: createVideo,
              meta: {
                label: 'Add Video',
                requiresAuth: true,
                permission: 'admin'
              }
            },
            {
              path: 'edit/:id',
              name: 'Edit Video',
              component: editVideo,
              meta: {
                label: 'Edit Video',
                requiresAuth: true,
                permission: 'admin'
              }
            }

          ]
        },
      ]
    },
  ]
})
