import Vue from 'vue'
import Router from 'vue-router'
import CreateProduct from '@/components/CreateProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateProduct',
      component: CreateProduct
    }
  ]
})
