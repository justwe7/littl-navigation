import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

require('../common/css/reset.css');//全局引入css reset

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
