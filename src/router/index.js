import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import MemoryPut from '@/components/pages/MemoryPut'
import BlankPage from '@/components/pages/BlankPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: BlankPage
    },
    {
      path: '/memory-put',
      name: 'MemoryPut',
      component: MemoryPut
    }
  ]
})
