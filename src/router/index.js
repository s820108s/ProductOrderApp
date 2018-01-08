import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/CreateProduct'
/* eslint-disable */
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }]
})