import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/Index'
import HotPage from '../components/pages/Hot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/hot',
      name: 'HotPage',
      component: HotPage
    }
  ]
})
