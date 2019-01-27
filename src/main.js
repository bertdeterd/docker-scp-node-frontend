import Vue from 'vue'

import axios from './plugins/axios'
Vue.prototype.$http = axios;


import './plugins/vuetify'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
