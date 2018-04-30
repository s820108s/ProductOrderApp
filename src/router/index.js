import Vue from 'vue'
import Router from 'vue-router'
import IntroductionPage from '@/components/IntroductionPage'
import MainPage from '@/components/MainPage'
import LearnPath from '@/components/LearnPath'
/* eslint-disable */
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'MainPage',
            component: MainPage
        },
        {
            path: '/',
            name: 'LearnPath',
            component: LearnPath
        },
        {
            path: '/',
            name: 'IntroductionPage',
            component: IntroductionPage
        },
    ]
})