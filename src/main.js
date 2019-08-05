import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/style/global.scss'

import '@/icon' // icon

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
