import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IntroductionPage from '@/components/IntroductionPage'
/* eslint-disable */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IntroductionPage',
      component: IntroductionPage
    },
    {
      path: '/components',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
