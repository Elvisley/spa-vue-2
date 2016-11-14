import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Cervejarias from './components/cervejarias.vue'
import Cervejas from './components/cervejas.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/a', component: Cervejarias },
  { path: '/b', component: Cervejas }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
