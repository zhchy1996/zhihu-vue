import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('@/components/index')), 'index')
const subject = r => require.ensure([], () => r(require('@/components/subject')), 'subject')
const about = r => require.ensure([], () => r(require('@/components/about')), 'about')
const app = r => require.ensure([], () => r(require('@/components/app')), 'app')
const news = r => require.ensure([], () => r(require('@/components/news')), 'news')
const theme = r => require.ensure([], () => r(require('@/components/theme')), 'theme')

Vue.use(Router)

export default new Router({
  linkActiveClass: 'router-active',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'app',
    component: app,
    children: [{
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/subject',
      name: 'subject',
      component: subject,
      children: []
    }, {
      path: '/about',
      name: 'about',
      component: about
    }, ]
  }, {
    path: '/subject/theme/*',
    name: 'theme',
    component: theme
  }, {
    path: '/news/*',
    name: 'news',
    component: news
  }]
})