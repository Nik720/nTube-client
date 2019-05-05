window.axios = require('axios');
window.axios.defaults.baseURL = 'http://localhost:8000/';
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = true
Vue.use(BootstrapVue)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
