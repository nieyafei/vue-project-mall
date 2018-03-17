import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../components/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    }
  ]
})
